import React, { PureComponent } from 'react';
import { GridGenerator, HexGrid, HexUtils, Layout, Path } from 'react-hexgrid';
import CharacterContext from '../../context/CharacterContext';
import HexTile from './HexTile/HexTile';
import MapMenu from '../MapMenu/MapMenu';
import ObjectLayer from '../ObjectLayer/ObjectLayer';
import './HexMap.scss';

export default class HexMap extends PureComponent {
	static contextType = CharacterContext;
	constructor(props) {
		super(props);

		this.uncontrolledTurnTimer = null;
		this.hexMapRef = React.createRef();
		this.layoutProps = {
			flat: true,
			orientation: {
				b0: 0.6666666666666666,
				b1: 0,
				b2: -0.3333333333333333,
				b3: 0.5773502691896257,
				f0: 1.5,
				f1: 0,
				f2: 0.8660254037844386,
				f3: 1.7320508075688772,
				startAngle: 0,
			},
			origin: { x: -29, y: 15 },
			size: { x: 6, y: 3 },
			spacing: 1.03
		};

		this.state = {
			aiTurnInProgress: false,
			charLocList: [], // Array of characters to place in hexmap
			hexList: null, // Array of all hexes
			hoveredHex: null, // Last hovered hex
			hoveredHexLoc: null, // Pixel coords of last hovered hex
			objectList: [], // Array of objects to place in hexmap
			pathLength: 0, // Length of path from selected hex to target hex
			selectedHex: null, // Current origin hex, occupied by current character
			targetedHex: null, // Desitation hex targeted by click
			targetedHexContains: null, // What the target hex is occupied by
			targetedHexIndex: null, // Current target's spot in hexlist
			tooltipLabel: '' // Labels of the currently hovered hex, and title of it's menu if it has one.
		}
	}

	componentDidMount() {
		const { characters, setCharacterLocation } = this.context;

		// Generate map
		let hexagonList = GridGenerator.orientedRectangle(18,15);
		this.mapDefaults = { terrain: "Regolith" };
		const initObjectList = [
			{ hexIndex: 19, label: "Impassable", mapRenderer: () => {} },
			{ hexIndex: 19, label: "Impassable", mapRenderer: () => {} },
			{ hexIndex: 20, label: "Impassable", mapRenderer: () => {} }
		];

		// Assign characters to starting positions
		let charactersAssigned = 0;
		let firstSelectedHex = null;
		let initCharLocList = [];
		hexagonList = hexagonList.map( (hex, hexIndex) => {
			if (characters.length <= charactersAssigned) { return hex; }
			characters.forEach( (character, charIndex) => {
				if (character.startingHex && HexUtils.equals(hex, character.startingHex)) {
					if (!firstSelectedHex && charIndex === 0) {
						firstSelectedHex = hex;
					}
					const pixelLoc = HexUtils.hexToPixel(hex, this.layoutProps);
					const charToPush = setCharacterLocation(character.meta.charId, pixelLoc, hex);
					initCharLocList.push({ hexIndex: hexIndex, character: charToPush});
					charactersAssigned++;
				}
			});
			return hex;
		});
		this.setState({
			charLocList: initCharLocList,
			hexList: hexagonList,
			objectList: initObjectList,
			selectedHex: firstSelectedHex
		});
	}

	componentDidUpdate(prevProps) {
		const { aiTurnInProgress } = this.state;
		const { currentCharacter, deductSpeed } = this.context;

		if (currentCharacter.meta.isCpuControlled && !aiTurnInProgress) {
			this.setState({aiTurnInProgress: true});
			this.uncontrolledTurnTimer = setTimeout(() => {
				deductSpeed(currentCharacter.meta.charId, 1);
				this.endTurn();
				this.setState({aiTurnInProgress: false});
			}, 2400);
		}
	}

	componentWillUnmount() {
		clearTimeout(this.uncontrolledTurnTimer);
	}

	clearPath = () => {
		this.setState({hoveredHex: null, hoveredHexLoc: null, targetedHex: null});
	}

	computeHover = (event, element, hex, contains) => {
		const hoveredHexLocPreScroll = event.currentTarget.getBoundingClientRect(0);
		const hoveredHexLocWithScroll = { 
			height: hoveredHexLocPreScroll.height,
			right: hoveredHexLocPreScroll.right + this.hexMapRef.current.scrollLeft,
			top: hoveredHexLocPreScroll.top + this.hexMapRef.current.scrollTop
		};
		if (contains) {
			this.props.setSpeedCost(0);
			this.setState({
				hoveredHex: null,
				hoveredHexLoc: hoveredHexLocWithScroll,
				pathLength: 0,
				tooltipLabel: contains.meta.name
			});
		} else {
			this.setState({
				hoveredHexLoc: hoveredHexLocWithScroll,
			});
			this.computePath(event, element, hex);
		}
	}

	computePath = (event, element, hex) => {
		const { setSpeedCost } = this.props;
		const { selectedHex } = this.state;
		const newPathLength = HexUtils.distance(selectedHex, hex);
		setSpeedCost(newPathLength);
		this.setState({
			hoveredHex: hex,
			pathLength: newPathLength,
			tooltipLabel: this.mapDefaults.terrain
		});
	}

	endTurn = () => {
		const { currentCharacter, resetRange, incrementInit } = this.context;
		resetRange(currentCharacter.meta.charId);
		const nextCharacter = incrementInit();
		this.selectOriginHex(nextCharacter.currentHexLoc);
		this.clearPath();
	}

	// TODO: are we going to use this?
	moveAndEndTurn = (event, element, hex) => {
		this.moveToTargetHex(event, element, hex);
		this.endTurn();
	}

	moveToTargetHex = (event, element, hex, hexIndex) => {
		const { setSpeedCost } = this.props;
		const { charLocList, hexList, selectedHex } = this.state;
		const { currentCharacter, deductSpeed, setCharacterLocation } = this.context;

		const distanceMoved = HexUtils.distance(selectedHex, hex);
		let newCharLocList = [...charLocList];
		let newHexClicked = {...hex};
		let newSelectedHex = null;
		hexList.forEach(hex => {
			let newHex = {...hex};
			if (HexUtils.equals(newHex, newHexClicked)) {
				newSelectedHex = newHex;

				// Move occupant to target hex
				const oldCharLocIndex = newCharLocList.findIndex(charLoc => charLoc.character.meta.charId === currentCharacter.meta.charId);
				const newCharLoc = { hexIndex: hexIndex, character: currentCharacter };
				newCharLocList.splice(oldCharLocIndex, 1, newCharLoc);

				// Calculate position for curr char's sprite
				const newPixelLoc = HexUtils.hexToPixel(newHex, this.layoutProps);
				setCharacterLocation(currentCharacter.meta.charId, newPixelLoc, newHexClicked);
				deductSpeed(currentCharacter.meta.charId, distanceMoved);
				setSpeedCost(0);
			}
		});

		this.setState({
			charLocList: newCharLocList,
			hoveredHex: null,
			hoveredHexLoc: null,
			selectedHex: newSelectedHex,
			targetedHex: null
		});
	}

	targetHex = (event, element, hex, contains, hexIndex) => {
		this.computeHover(event, element, hex, contains);
		this.setState({
			targetedHex: hex,
			targetedHexContains: contains,
			targetedHexIndex: hexIndex,
		});
	}

	selectOriginHex = (hex) => {
		this.setState({selectedHex: hex});
	}

	render() {
		const { currSpeedCost } = this.props;
		const { charLocList, hexList, hoveredHex, hoveredHexLoc, objectList, selectedHex, targetedHex, targetedHexContains, targetedHexIndex, tooltipLabel } = this.state;
		const { currentCharacter } = this.context;

		return (
			<div className="hexMap" ref={this.hexMapRef}>
				<div className="hexMap_background">
				<HexGrid width={'2100px'} height={'1200px'} viewBox="0 0 100 100">
					<Layout {...this.layoutProps}>

						{ hoveredHex && !targetedHex &&
							<g className="hexMap_movePath">
								<Path start={selectedHex} end={hoveredHex} />
							</g>
						}

						<g>
							{ !!hexList && hexList.map((hex, index) => {
								const occupiedBy = charLocList.find(charLoc => index === charLoc.hexIndex);
								return <HexTile
									clearPath={this.clearPath}
									contains={occupiedBy ? occupiedBy.character : null}
									hex={hex}
									hexListIndex={index}
									isBlocked={objectList.some(object => index === object.hexIndex)}
									isCpuControlled={occupiedBy && occupiedBy.character.meta.isCpuControlled}
									isHostile={occupiedBy && occupiedBy.character.meta.isHostile}
									isInRange={HexUtils.distance(selectedHex, hex) <= currentCharacter.currentRange}
									key={`hex-${hex.q}-${hex.r}-${hex.s}`}
									onTarget={this.targetHex}
									onViableHover={this.computeHover}
									targetedHex={targetedHex}
								/>
							})}
						</g>

						{ !!targetedHex && 
							<g className="hexMap_movePath hexMap_movePath_animating">
								<Path start={selectedHex} end={targetedHex} />
								<HexTile
									clearPath={() =>{}}
									hex={targetedHex}
									isTargeted
								/>
							</g>
						}

						{ !!selectedHex &&
							<HexTile
								clearPath={() =>{}}
								contains={currentCharacter}
								hex={selectedHex}
								isSelected
								onTarget={this.targetHex}
								onViableHover={this.computeHover}
								targetedHex={targetedHex}
							/>
						}

						<ObjectLayer />

					</Layout>
				</HexGrid>

				<MapMenu
					currSpeedCost={currSpeedCost}
					endTurn={this.endTurn}
					label={tooltipLabel}
					menuOrigin={hoveredHexLoc}
					moveToTargetHex={this.moveToTargetHex}
					targetedHex={targetedHex}
					targetedHexContains={targetedHexContains}
					targetedHexIndex={targetedHexIndex}
				/>

				</div>
			</div>
		);
	}
}
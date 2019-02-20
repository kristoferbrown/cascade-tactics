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
			hexList: null, // Array of all hexes
			hoveredHex: null, // Last hovered hex
			hoveredHexLoc: null, // Pixel coords of last hovered hex
			pathLength: 0, // Length of path from selected hex to target hex
			selectedHex: null, // Current origin hex, occupied by current character
			targetedHex: null // Desitation hex targeted by click
		}
	}

	componentDidMount() {
		const { characters, setCharacterLocation } = this.context;

		// Generate map
		let hexagonList = GridGenerator.orientedRectangle(18,15);
		this.mapDefaults = { terrain: "Regolith" };
		hexagonList[19].isBlocked = true;
		hexagonList[12].isBlocked = true;

		// Assign characters to starting positions
		let charactersAssigned = 0;
		let firstSelectedHex = null;
		hexagonList = hexagonList.map( hex => {
			if (characters.length <= charactersAssigned) { return hex; }
			characters.forEach( (character, index) => {
				if (character.startingHex && HexUtils.equals(hex, character.startingHex)) {
					if (!firstSelectedHex && index === 0) {
						firstSelectedHex = hex;
					}
					const pixelLoc = HexUtils.hexToPixel(hex, this.layoutProps);
					hex.contents = setCharacterLocation(character.meta.charId, pixelLoc);
					charactersAssigned++;
				}
			});
			return hex;
		});
		this.setState({
			hexList: hexagonList,
			selectedHex: firstSelectedHex
		});
	}

	componentDidUpdate(prevProps) {
		const { aiTurnInProgress } = this.state;
		const { currentCharacter } = this.context;

		if (currentCharacter.meta.isCpuControlled && !aiTurnInProgress) {
			this.setState({aiTurnInProgress: true});
			this.uncontrolledTurnTimer = setTimeout(() => {
				this.moveOrSelectNewHex(null, null, this.state.selectedHex, true);
				this.setState({aiTurnInProgress: false});
			}, 2400);
		}
	}

	componentWillUnmount() {
		clearTimeout(this.uncontrolledTurnTimer);
	}

	computePath = (event, element, hex) => {
		const { setSpeedCost } = this.props;
		const { selectedHex } = this.state;
		const newPathLength = HexUtils.distance(selectedHex, hex);
		const hoveredHexLocPreScroll = event.currentTarget.getBoundingClientRect(0);
		const hoveredHexLocWithScroll = { 
			height: hoveredHexLocPreScroll.height,
			right: hoveredHexLocPreScroll.right + this.hexMapRef.current.scrollLeft,
			top: hoveredHexLocPreScroll.top + this.hexMapRef.current.scrollTop
		};
		setSpeedCost(newPathLength);
		this.setState({
			hoveredHex: hex,
			hoveredHexLoc: hoveredHexLocWithScroll,
			pathLength: newPathLength,
		});
	}

	endTurn = () => {
		const { currentCharacter, incrementInit } = this.context;
		console.log('ending turn now...');
		const nextCharacter = incrementInit();
		this.selectOriginHex(nextCharacter.currentHexLoc);

	}

	moveAndEndTurn = (event, element, hex) => {
		this.moveToTargetHex(event, element, hex);
		this.endTurn();
	}

	moveToTargetHex = (event, element, hex) => {
		const { setSpeedCost } = this.props;
		const { hexList, selectedHex } = this.state;
		const { currentCharacter, deductSpeed, setCharacterLocation } = this.context;

		const distanceMoved = HexUtils.distance(selectedHex, hex);
		let newHexList = [...hexList];
		let newHexClicked = {...hex};
		let newSelectedHex = null;
		newHexList = newHexList.map(hex => {
			let newHex = {...hex};
			if (HexUtils.equals(newHex, selectedHex)) {
				// Clear source hex contents
				newHex.contents = null;
			} else if (HexUtils.equals(newHex, newHexClicked)) {
				// Move contents to target hex
				newHexClicked.contents = selectedHex.contents;
				newHex.contents = selectedHex.contents;
				newSelectedHex = newHex;
				// Calculate position for curr char's sprite
				const newPixelLoc = HexUtils.hexToPixel(newHex, this.layoutProps);
				setCharacterLocation(currentCharacter.meta.charId, newPixelLoc, newHexClicked);
				deductSpeed(currentCharacter.meta.charId, distanceMoved);
				setSpeedCost(0);
			}
			return newHex;
		});

		this.setState({
			hexList: newHexList,
			hoveredHex: null,
			hoveredHexLoc: null,
			selectedHex: newSelectedHex,
			targetedHex: null
		});
	}

	targetHex = (event, element, hex) => {
		this.computePath(event, element, hex);
		this.setState({
			targetedHex: hex
		});
	}

	selectOriginHex = (hex) => {
		console.log('selecting origin of...', hex)
		this.setState({selectedHex: hex});
	}

	render() {
		const { hexList, hoveredHex, hoveredHexLoc, pathLength, selectedHex, targetedHex } = this.state;
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
							{ !!hexList && hexList.map(hex => 
								<HexTile
									clearPath={() => this.setState({hoveredHex: null, hoveredHexLoc: null, targetedHex: null})}
									contents={hex.contents}
									hex={hex}
									isBlocked={hex.isBlocked}
									isCpuControlled={hex.contents && hex.contents.meta.isCpuControlled}
									isHostile={hex.contents && hex.contents.meta.isHostile}
									isInRange={HexUtils.distance(selectedHex, hex) <= currentCharacter.currentRange}
									key={`hex-${hex.q}-${hex.r}-${hex.s}`}
									onTarget={this.targetHex}
									onViableHover={this.computePath}
									targetedHex={targetedHex}
								/>
							)}
						</g>

						{ !!targetedHex && 
							<g className="hexMap_movePath hexMap_movePath_animating">
								<Path start={selectedHex} end={targetedHex} />
								<HexTile 
									isTargeted clearPath={() =>{}}
									hex={targetedHex} 
									onMoveOrSelectNewHex={this.moveToTargetHex}
								/>
							</g>
						}

						{ !!selectedHex &&
							<HexTile isSelected clearPath={() =>{}} hex={selectedHex} />
						}

						<ObjectLayer />

					</Layout>
				</HexGrid>

				<MapMenu
					moveAndEndTurn={this.moveAndEndTurn}
					currSpeedCost={pathLength}
					mapDefaults={this.mapDefaults}
					menuOrigin={hoveredHexLoc}
					targetedHex={targetedHex}
				/>

				</div>
			</div>
		);
	}
}
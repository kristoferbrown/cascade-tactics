import React, { Fragment } from 'react';
import DotTrack from '../../../../CharContent/DotTrack/DotTrack';
import './StyleSummaryRow.scss';

export default function StyleSummaryRow(props) {
	const { characterValues, definition } = props;
	return (
		<div className={`StyleSummaryRow fill_${definition.name}`}>

			<div className={'StyleSummaryRow_subRow StyleSummaryRow_headerRow'}>
				<div className={'StyleSummaryRow_label'}>{definition.name}</div>
				<div className={'StyleSummaryRow_detail'}>{`${characterValues.availableXp} XP`}</div>
			</div>

			{ characterValues.core && (
				<div className={'StyleSummaryRow_subRow'}>
					<div className={'StyleSummaryRow_label'}>Core</div>
					<div className={'StyleSummaryRow_detail'}>
						<DotTrack filled={characterValues.core || 0} keyPrefix={`${definition.name}-permaCore`} max={ 9 }/>
					</div>
				</div>
			)}

			{ (characterValues.spec1 || characterValues.aux1 || characterValues.spec2 || characterValues.aux2 || characterValues.spec3 || characterValues.aux3) && (
				<Fragment>
					<div className={'StyleSummaryRow_subRow_tierLabel fill_light'}>Tier 1</div>
					<div className={'StyleSummaryRow_subRow fill_light'}>
						<div className={'StyleSummaryRow_halfRow'}>
							<div className={'StyleSummaryRow_label'}>{definition.classValues.spec1.name}</div>
							<div className={'StyleSummaryRow_detail'}>
								<DotTrack filled={characterValues.spec1 || 0} keyPrefix={`${definition.name}-permaSpec1`} max={3}/>
							</div>
						</div>
						<div className={'StyleSummaryRow_halfRow'}>
							<div className={'StyleSummaryRow_label'}>{characterValues.aux1Label || 'Auxiliary Node'}</div>
							<div className={'StyleSummaryRow_detail'}>
								<DotTrack filled={characterValues.aux1 || 0} keyPrefix={`${definition.name}-permaAux1`} max={3}/>
							</div>
						</div>
					</div>
					</Fragment>
			)}

			{ (characterValues.spec2 || characterValues.aux2 || characterValues.spec3 || characterValues.aux3) && (
				<Fragment>
					<div className={'StyleSummaryRow_subRow_tierLabel'}>Tier 2</div>
					<div className={'StyleSummaryRow_subRow'}>
						<div className={'StyleSummaryRow_halfRow'}>
							<div className={'StyleSummaryRow_label'}>{definition.classValues.spec2.name}</div>
							<div className={'StyleSummaryRow_detail'}>
								<DotTrack filled={characterValues.spec2 || 0} keyPrefix={`${definition.name}-permaSpec2`} max={3}/>
							</div>
						</div>
						<div className={'StyleSummaryRow_halfRow'}>
							<div className={'StyleSummaryRow_label'}>{characterValues.aux2Label || 'Auxiliary Node'}</div>
							<div className={'StyleSummaryRow_detail'}>
								<DotTrack filled={characterValues.aux2 || 0} keyPrefix={`${definition.name}-permaAux2`} max={3}/>
							</div>
						</div>
					</div>
				</Fragment>
			)}

			{ (characterValues.spec3 || characterValues.aux3) && (
				<Fragment>
					<div className={'StyleSummaryRow_subRow_tierLabel fill_dark'}>Tier 3</div>
					<div className={'StyleSummaryRow_subRow fill_dark'}>
						<div className={'StyleSummaryRow_halfRow'}>
							<div className={'StyleSummaryRow_label'}>{definition.classValues.spec3.name}</div>
							<div className={'StyleSummaryRow_detail'}>
								<DotTrack filled={characterValues.spec3 || 0} keyPrefix={`${definition.name}-permaSpec3`} max={3}/>
							</div>
						</div>
						<div className={'StyleSummaryRow_halfRow'}>
							<div className={'StyleSummaryRow_label'}>{characterValues.aux3Label || 'Auxiliary Node'}</div>
							<div className={'StyleSummaryRow_detail'}>
								<DotTrack filled={characterValues.aux3 || 0} keyPrefix={`${definition.name}-permaAux3`} max={3}/>
							</div>
						</div>
					</div>
				</Fragment>
			)}

		</div>
	);
}


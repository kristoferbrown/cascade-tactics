import React, { PureComponent } from 'react';

export default class DieOne extends PureComponent {
	render() {
		const { height, width } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 1181 1181">
				<path fill="#FFF" fillOpacity="0.3" d="M1087.258 121.771L987.921 22.43H193.182L93.84 121.771V916.51l99.342 99.338h794.739l99.337-99.338V121.771zM590.551 419.799c54.865 0 99.343 44.476 99.343 99.341s-44.478 99.343-99.343 99.343-99.341-44.478-99.341-99.343 44.476-99.341 99.341-99.341z"/>
				<path fill="#FFF" fillOpacity="1" d="M427.939 1178.46v-71.854l90.748-90.758-90.748-90.742V853.24h71.143l91.469 90.748 91.241-90.748h71.371v71.866l-90.746 90.742 90.746 90.758v71.854H681.3l-90.749-90.744-90.747 90.744h-71.865z"/>
			</svg>
		)
	}
}
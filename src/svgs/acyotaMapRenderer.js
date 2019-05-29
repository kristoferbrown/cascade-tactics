import React, { PureComponent } from 'react';

export default class AcyotaMapRenderer extends PureComponent {
	//shouldComponentUpdate(nextProps) { return this.props.isSelected !== nextProps.isSelected; }

	render() {
		const { height, width } = this.props;
		return (
			<svg width={width} height={height} className='svgGroup-acyotaMapRenderer mapCharacter' viewBox="0 0 350 500">
					<path className="mapCharacter-highlight" d="M166.833 490.5c-5.622 0-8.811-2.501-10.496-4.599-2.188-2.722-2.684-5.653-2.61-8.114-2.325-.126-5.042-.188-8.126-.188-10.125 0-22.216.668-31.932 1.206-6.732.372-12.049.666-15.295.666-1.24 0-2.194-.043-3.005-.135-6.554-.742-9.537-5.793-9.536-10.172-.001-6.718 3.535-15.872 20.391-21.305 2.909-.938 6.192-1.855 9.669-2.827 7.045-1.969 23.542-6.579 26.013-10.312 2.316-3.949 6.166-27.635 6.594-74.313.822-89.494-2.983-124.513-5.762-150.083-.889-8.178-1.66-15.279-2.137-22.863-1.805-8.146-3.055-15.885-3.719-23.016-3.921-42.166-1.851-46.797 1.854-50.862 1.384-1.519 3.15-2.603 5.072-3.151 2.277-18.906 5.412-35.215 9.241-47.936.999-12.414.38-15.542.304-15.865-.666-2.396-1.176-3.748-1.481-4.556-.55-1.457-2.223-5.888.833-10.309 1.89-2.734 5.021-4.366 8.375-4.366.705 0 1.288.07 1.688.131.418-.04.838-.06 1.254-.06 5.373 0 8.935 2.837 11.327 6.352 2.805.041 5.43 1.043 7.844 2.992 1.398-.641 2.919-.98 4.469-.98 10.487 0 12.673 11.762 14.601 22.14 1.335 7.183 2.708 16.749 4.198 29.243.55 4.605.914 9.566 1.085 14.758 1.482 7.646 2.677 15.272 3.552 22.683 2.339 19.806 1.153 38.492-.81 69.45-1.404 22.143-3.152 49.7-4.292 88.186-1.332 44.992 4.031 136.873 7.047 146.549 5.11 16.318 14.302 19.036 20.383 20.835 3.354.991 7.949 2.35 10.183 7.174 1.309 2.827 1.322 6.115.038 9.021-1.965 4.447-5.644 6.037-8.573 6.621.22 2.315-.113 4.968-1.854 7.564-1.232 1.838-4.142 4.944-9.772 5.103-.24.007-.48.01-.728.01h-.008c-5.667 0-12.386-1.782-19.498-3.668-5.594-1.484-11.935-3.166-15.438-3.166-.438 0-.663.03-.721.04-3.284.517-6.377 3.56-8.862 6.005-2.915 2.868-6.216 6.117-11.36 6.117z"/>
					<path fill="#49423D" d="M203.499 431.833C199.805 420.036 194.7 325.895 196 282c2.722-91.968 9.017-123.554 5.166-156.167-.912-7.723-2.146-15.38-3.591-22.736-.137-4.74-.452-9.725-1.045-14.692-2.471-20.712-6.063-45.415-9.461-42.3-1.032.946-1.497 3.633-1.696 7.092-.77-3.84-2.05-6.1-4.305-6.158-1.196-.031-1.911-.316-2.299-.436-1.42-1.899-2.703-2.888-3.77-2.771-1.499.166-3.12 1.456-4.792 3.822-1.643-6.585-3.534-10.549-6.599-10.155C159.719 38 160.5 35 163 44c.966 3.478.663 11.658-.073 20.388-4.598 14.884-8.829 37.685-11.242 67.888-1.271-5.872-2.659-11.035-4.474-12.099-3.977-2.332-2.304 22.574-.372 43.343.738 7.937 2.17 15.772 3.694 22.538 1.852 30.977 9.064 54.833 7.966 174.442-.308 33.532-2.667 70.333-8 79.333s-28.417 13.421-41.208 17.544-13.459 9.631-13.458 11.79c0 1.493 44.185-3.123 63-1 12.291 1.387-.423 12.333 8 12.333 2.863 0 8.477-10.396 18.667-12 8.963-1.41 28.178 6.933 37.667 6.667 5.535-.155-2.784-7.998 1.333-10.667 4.41-2.859 9.094-.616 10-2.667 1.869-4.232-21.502.333-31.001-30z"/>
					<path fill="#2B221E" d="M162.521 465.166c-1.91-8.849-62.187 8.334-65.854 1.334l-.431.187c-.351 1.018-.403 1.879-.403 2.48 0 1.493 44.185-3.123 63-1 2.058.232 3.403.736 4.276 1.408-.013-1.106-.184-2.535-.588-4.409zM203.499 431.833C199.805 420.036 194.7 325.895 196 282c2.722-91.968 9.017-123.554 5.166-156.167-.912-7.723-2.146-15.38-3.591-22.736-.137-4.74-.452-9.725-1.045-14.692-1.729-14.489-3.006-31.918-5.381-39.424-1.454-.749-3.161-2.898-2.482-1.98.844 1.141 2.571 24.89 2.39 27.257s-2.355 5.806-3.311-4.924c-.658-7.4-2.17-18.725-3.134-18.923 0 0 .489 18.181-.112 41.337-1.055 40.516-3.387 96.264-2.75 96.503.577.217 5.118-40.738 5.996-68.226.634-19.844 4.41-10.441 4.495-4.649s.262 68.346-1.574 88.459c-3.639 39.875-5.333 121-4.833 135.5s7.666 120.833 3.666 121.5-3.602-28.147-6.5-26.5c-2.977 1.69 1.667 25.667-8.069 36.421-2.996 3.309-5.896 7.414-7.764 7.579-3.191.282-3.208-1.961-3.208-1.973-.478 2.281-.595 4.139 2.874 4.139 2.863 0 8.477-10.396 18.667-12 8.963-1.41 28.178 6.933 37.667 6.667 5.535-.155-2.784-7.998 1.333-10.667 4.41-2.859 9.094-.616 10-2.667 1.869-4.233-21.502.332-31.001-30.001zM181.031 47.5s-3.939-1.13-3.892-2.721c0 0-2.838 97.596-2.14 101.888s4.642-82.104 4.188-88.354 1.844-10.813 1.844-10.813zM149.308 122.574l3.192 10.801v11.875zM165.373 161.75s2.502-106.5 4.252-108.625-1.939-12.728-1.939-12.728l-2.467 42.978s-1.669 45-1.506 58.125 2.661 20.25 2.661 20.25"/>
					<path fill="#777776" d="M174 45.5c.321-.543 1.587-1.063 1.802-1.56-.278-.096-.547-.135-.802-.107-1.499.166-4 2.12-4.792 3.822-.202.434-1.304 4.748-1.398 5.483-.065.504-2.786 58.229-3.411 94.151-.288 16.529.657 28.443 1.101 28.043.552-.497-.427-14.426-.219-32.995.229-20.411 1.683-46.428 3.315-66.373C170.96 59.297 173.188 46.87 174 45.5zM162.5 436.5c-1.495-19.007-.82-233.443-7.667-253-6.995-19.979-9-57.271-6.333-61.802-.406-.729-.834-1.254-1.29-1.521-3.977-2.332-2.304 22.574-.372 43.343.738 7.937 2.17 15.772 3.694 22.538 1.852 30.977 9.064 54.833 7.966 174.442-.308 33.532-2.667 70.333-8 79.333s-28.417 13.421-41.208 17.544c-4.823 1.555-7.921 3.307-9.911 5.001 21.133-3.348 64.221-11.902 63.121-25.878zM165.219 474.501s5.696-28.996 6.655-50.998 1.293-70.669 1.293-70.669 3.067 107.667-1.133 113.667c-4.201 6-6.815 8-6.815 8zM166.373 38.563c-.81-.813-1.717-1.197-2.764-1.063-3.89.5-3.109-2.5-.609 6.5.966 3.478 1.354 12.857-.073 20.388s-8.677 30.03-11.242 67.888c0 0 .482 16.559 1.482 14.892.399-.665-1.76-22.952 5.777-52.782s7.111-52.28 4.275-55.885c0 0 1.545-.17 3.154.062zM187.069 46.105c-1.032.946-1.497 3.633-1.696 7.092l.627 2.72s.603-10.195 1.746-10.066c-.226-.029-.452.048-.677.254zM179.167 67.083c.417-.167.728-16.906 1.75-18.417.944-1.396 2.223-.649 2.412-.527l-.001-.001-1.461-.976c-.252-.074-.518-.116-.799-.123-1.139-.029-1.977.921-2.23 1.586s-.011 18.594.329 18.458z"/>
					<path fill="#49423D" d="M193.75 402.75c1.5.5 8 52 12.75 52.25s-2.5 3.25-5.375-2.75-8.875-50-7.375-49.5z"/>
			</svg>
		)
	}
}
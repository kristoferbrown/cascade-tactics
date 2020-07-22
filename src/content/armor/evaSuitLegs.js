import React, { PureComponent } from 'react';

export default class EvaSuitLegsRenderer extends PureComponent {
	render() {
		const { height, width } = this.props;
		return (
			<svg width={width} height={height} viewBox="0 0 200 200" className="itemSvg">
				<path className="mapCharacter-highlight" fill="#000" d="M156.305 194.481c-20.748 0-26.177-3.565-28.21-9.316a16.178 16.178 0 01-.578-2.072l-3.673-2.355.37-3.856a11.166 11.166 0 01-1.032-2.335 11.944 11.944 0 01-.242-.89 11.836 11.836 0 01-2.252-3.671c-.31-.79-.563-1.623-.762-2.498-.545-.438-.978-.87-1.303-1.237-1.58-1.784-3.34-4.96-2.74-9.963l.12-.988c-1.987-.714-3.83-1.95-5.396-3.643l-.967-1.048-.593-1.297c-.437-.955-.768-1.845-1.06-2.63-.223-.6-.526-1.411-.696-1.701-2.281-2.617-3.426-6.071-3.223-9.737.048-.888.166-1.704.338-2.455l-1.721-18.916-.886-.43s-.514-5.152-.55-5.495l-2.636-.918 1.444-8.554c-1.949-13.707-4.123-22.56-5.915-27.852-2.141 5.252-5.221 14.681-9.023 31.433.655 3.128-.035 6.511-2.053 9.45a637.454 637.454 0 00-2.01 10.078c.014 1.617-.017 3.426-.245 5.303-.034.277-.02.965-.01 1.518.025 1.278.056 2.927-.227 4.779l.094 1.727 5.129 3.884-3.057 3.715 2.716.152 1.004 7.278c.66 4.795-1.047 7.919-2.596 9.696a10.92 10.92 0 01-1.793 1.646 16.001 16.001 0 01-.769 2.106 11.515 11.515 0 01-2.373 3.46 10.846 10.846 0 01-1.13 2.563l.424 3.85-3.685 2.061a15.653 15.653 0 01-.978 3.742c-2.275 5.61-7.571 8.65-29.018 8.65-17.827 0-20.519-2.005-22.127-3.203-2.494-1.858-6.497-6.227-5.312-14.625l.036-.248.057-.302c.043-.214.089-.42.138-.616-1.214-6.44.004-12.274 3.633-17.362a19.62 19.62 0 011.263-1.587l.053-.275a12.988 12.988 0 011.023-3.548l-.683-1.112-1.086-11.611 1.11-.275-.516-8.57c-.786-2.868-1.217-5.367-1.347-7.792l-.024-.45.021-.45c.005-.116-2.097-.745-1.343-13.632-.013-.04 9.402-89.424 9.39-89.464-.773.23 113.73-10.389 116.185-6.017 2.59 3.146 19.132 47.454 21.826 67.91 1.413 10.723 2.092 20.444 2.12 20.852l.035.51-.023.51c-.02.443-.046.883-.07 1.323-.061 1.056-.164 2.823.011 3.217l.28.608.643 2.245c1.087 3.815 2.113 7.418 3.611 10.584l.438.926.237 1.091c1.282 5.919 2.864 13.221-.65 20.952a12.746 12.746 0 01-.354 1.858c1.057 1.977 1.723 4.16 1.994 6.535l.208.615c1.362 4.03 1.951 7.053 2.042 9.403.674.786 1.4 1.705 2.086 2.806 3.162 5.084 4.271 10.647 3.372 16.947l.061.346.027.222c.984 7.976-2.056 12.41-4.778 14.736-1.626 1.388-4.344 3.709-21.824 3.709z"/>
				<path fill="#e8e0d5" d="M141.747 15.523c-2.774-2.623-32.712-8.072-30.698 1.285.963 4.474-1.32 9.47 3.398 12.26 5.21 3.08 15.31 5.586 19.06 10.536-4.095-.32-14.857-10.717-17.204-1.005-3.075 12.727 9.687 10.406 16.28 9.79-.342.704-13.016 18.678-3.822 11.254 11.752-9.495 11.594 22.773 12.986 26.027 2.994 6.997 10.861 5.682 7.122 15.738-1.596 4.296 5.034 1.981 4.727 6.945-.157 2.525 2.863 30.122 11.424 25.95 5.9-11.476-4.15-28.396-5.123-40.524-.948-11.816-2.027-23.915-5.003-35.419-4.887-18.888-12.055-22.629-13.147-42.837z"/>
				<path fill="#2a2a3a" d="M172.334 183.991c10.476-8.945-8.273-22.624-8.85-28.694-.485-5.074-7.306-4.86-7.166.11.204 7.167-14.695.865-19.535 4.425-4.89 3.596-1.677 23.617 5.663 24.834 6.3 1.043 24.504 3.924 29.888-.675z"/>
				<path fill="#c4b29e" d="M72.958 157.292a55.457 55.457 0 00-9.007-3.743 69.541 69.541 0 008.104 2.867c.73 2.004-1.012 8.022-4.225 6.921-3.032-6.762-8.213 9.685-9.099-6.704.262-4.404 1.595-8.458 3.997-12.166 1.983-3.808-2.142-6.595-.195-9.572 1.79-2.12.218-12.986-1.264-13.352-.487-.121-.808 6.154-5.103 3.09-2.965-2.115-14.167-3.081-15.462-6.745-3.816-10.801 2.757-7.344 10.797-5.94-2.07-.454-11.005-1.96-9.727-5.968.817-2.559 7.819-.082 9.621-.706-2.518-2.343-14.148-3.526-14.337-7.836-.242-5.48 16.64-7.416 19.79-9.161-3.214-1.263-3.415-2.96-.602-5.09-3.181-.114-19.208 4.466-19.945-.805-1.078-7.708 12.32-5.45 16.079-4.375-3.63-.723-15.29 1.196-13.26-5.807.335-1.157 10.352-11.177 6.325-13.198-3.631-1.82-2.975-9.147 1.38-7.197 2.723 1.224 9.979-2.597 8.06 4.272-.328 1.17-2.71 8.232 1.192 8.022 2.101-.114 7.145-15.56 4.59-17.05 9.708 9.35-25.428 6.523-12.927-2.24 9.483-3.115 27.783-10.119 34.825-1.845-4.338-13.156 4.848-19.775 16.158-21.205-16.346 1.655 12.165 2.145 14.115 4.5 1.836 2.22 28.276 12.574 21.077 15.437 1.542-.612-26.695-9.362-13.37.496 3.206 2.372-4.701 6.924 2.14 7.12 3.291.095 10.255-5.073 13.294-2.936-1.771 5.948-9.751 7.107-9.974 13.938 7.965-9.99 15.934 4.386 16.227 12.202.455 12.092 12.945 19.682 7.135 30.806 12.024-2.814 2.278 22.29 7.355 22.145 11.96-.336 5.419 14.216 1.903 18.057-11.148 3.394-26.23-2.782-37.15 3.205-8.06 4.424-9.235-18.993-4.59-12.318-.897-1.288-1.424-9.56-1.544-9.65 2.68 1.984 4.93-1.294 6.22 2.496 1.929 5.664 2.087 11.962 8.957 8.278-1.075-2.047-9.785-11.741.618-11.548 7.873 7.542 7.068 6.872 15.196-1.121 8.575-8.434-5.698-7.784 2.258-14.681-7.737 4.28-24.572 19.729-18.721 3.409-.57 1.586-21.145-28.235-5.714-20.793-3.518-9.252-4.915-17.133-3.412-26.961-4.795 8.628-3.644 3.626-9.371-1.947-8.553-8.322-6.905-20.698-5.688-32.242-3.51 7.297-3.765 14.957-4.44 22.829-1.043 12.13-5.648-7.792-5.747-7.983-2.13 10.396-8.69 3.38-12.483 8.202-1.558 1.982-.605 11.281-.09 13.453 1.7 7.164-3.18 7.271-5.76 12.309-1.447 2.823-4.933 22.393-2.863 23.284 1.628.7-1.707 26.807-2.694 30.844"/>
				<path fill="#464d5f" d="M128.474 159.711c-7.566-10.963 7.707-10.216 7.185-9.557-.904 1.14-2.589-1.82-2.388-2.612 1.211-4.759 10.261-3.507 13.776-3.37 7.455.29 6.076-.65 13.059-1.187.982.488 7.462 10.536 5.433 4.136 1.726 5.442 12.531 27.32 7.187 29.667-2.09-4.216-.987-9.307-3.685-13.62-1.721-2.752-5.345-2.615-6.733-5.786-3.894-8.897-2.306-2.593-3.855 2.5-1.507 4.959-22-5.433-21.995 2.825.005 10.303-10.333 5.074-7.984-2.996z"/>
				<path fill="#decdb7" d="M127.138 18.456c-2.996-.274-9.575 4.17-11.59.882-3.476-5.675 3.777-3.253 7.144-3.549 22.635-1.984.06 17.567-3.663 11.344-2.094-3.5 7.38-5.688 8.109-8.677-2.805-.256-.65 2.668 0 0z"/>
				<path fill="#7c7979" d="M30.414 132.395c2.03 4.93 5.923 4.682 10.346 5.213.187-1.639-9.575-6.792-2.815-8.205 7.95-1.662 13.35 1.568 21.41 3.437 3.103.72 6.06 5.18 7.664 7.785 1.017 1.652-5.345 8.353-6.014 10.086-1.686 4.36.084 7.706.605 12.002-1.413.581-20.624.384-20.768.166-1.264-2.31-1.202-10.742-2.842-11.7-2.887-1.687-4.62.949-6.908-.284.201-1.885 7.174-6.887 5.241-8.543-1.843-1.575-2.523 3.672-5.027-.41"/>
				<path fill="#454a5d" d="M48.01 184.097c.353-.356.716-.354 1.09-.041"/>
				<path fill="#384058" d="M31.093 150.892c10.735-9.068 9.811 7.249 9.75 11.986-7.078-3.18-11.312-3.737-9.75-11.986 3.775-3.188-.344 1.817 0 0z"/>
				<path fill="#474d64" d="M43.557 163.79c2.21-1.715 10.147-.79 7.304 2.27-1.516 1.64-6.59-.775-7.304-2.27 1.614-1.252 1.193 2.494 0 0z"/>
				<path fill="#454b5d" d="M138.99 176.715a10.76 10.76 0 00-5.748-.546c.787-1.418 1.944-2.398 3.47-2.936-.977-2.172-4.183 1.315-5.02-1.353-.421-1.346 4.557-4.288 5.576-5.392 2.973 3.003 3.547 6.412 1.721 10.227-1.699-2.228 1.579-3.796 0 0z"/>
				<path fill="#8a8580" d="M34.676 49.87c1.509-4.617 3.353-1.765 6.083-.98 6.447 1.853 1.116-5.539 6.335 1.169 1.949 2.504 11.925 3.59 13.548.074 1.288-2.79-4.621-2.69-5.02-5.005 8.255-.775 12.523 4.592 5.628 9.154 1.87-1.237-9.98 23.127-8.782 7.112.35-4.692 4.256-10.265-3.7-8.715-12.407 2.417-.11 3.372.613 6.003.726 2.647-6.688 11.17-8.741 13.253-4.353 4.417 15.498 4.046 17.358 5.177-6.233 3.308-20.662-2.882-20.342 6.514 2.42-.624 20.578-4.458 21.535-1.35-.543 1.95-1.873 3.145-3.992 3.587a22.53 22.53 0 006.363 2.02c-7.265 3.751-16.18 9.267-23.877 8.873 6.111 5.832 27.474 13.38 4.2 9.188 3.798 4.93 9.905 2.41 13.765 6.08 2.518 2.406-15.534-.973-15.3-1.727.34 2.631 2.159 4.1 5.458 4.402a25.688 25.688 0 01-4.504 2.102c3.688 2.508 11.588 1.69 13.89 5.55 4.195 7.03 5.732-4.357 7.155-5.458 0 2.14 2.258 14.04-3.06 12.433-1.58-1.264-15.217-2.404-15.19-2.133.497 4.868-11.015 2.242-12.453-2.157-2.29-7.005-1.78-12.768-1.398-19.948.916-17.214-.97-38.7 4.428-55.219 2.157-6.599-2.157 6.6 0 0z"/>
				<path fill="#5a5d65" d="M31.058 85.372c10.65-1.86 3.644 9.275 3.456 9.263-3.354-.215-2.813-8.116-3.456-9.263.285-.049.829 1.48 0 0z"/>
				<path fill="#e9e2d8" d="M70.068 132.23c2.51-6.837-2.096-16.085 1.915-23.276.927-1.66 5.781-4.813 1.768-6.048-8.431-2.606 1.795-11.278 2.015-16.686.495-12.152 6.624-16.299 5.162-30.593-.951-9.339 4.59-3.75 9.003-4.674 4.43-.927 2.102-9.205 5.096-9.235 3.696-.039 3.132 5.554 2.51 7.483-2.9 9.026 8.759 6.287 13.313 9.886 9.413 7.439 4.32 14.16 10.434.109-1.503 12.108.816 24.145 5.887 35.182a51.34 51.34 0 00-7.312-3.976c.515 7.974 3.246 15.448 11.538 18.061 5.34 1.683-5.014 7.36-3.178 11.069 11.131-1.313.967 5.889.385 7.269-3.73 8.84 4.62 2.758 4.62 8.314-.003 5.815-9.397 4.335-10.867-1.02-1.976-7.21-6.578-9.671-8.113-16.521-1.979-8.835-4.507-15.214-6.05-24.96-2.288-14.453-11.592-54.53-23.45-22.363-7.312 19.826-11.157 41.193-14.676 61.979z"/>
				<path fill="#89847f" d="M47.237 18.851c1.947.427 3.916.695 5.906.802.43-1.472-.157-2.363-1.761-2.673 3.505 4.09 11.022-.723 14.068-4.387 1.462 2.589 6.447 15.002 8.565 5.295 3.075.182 29.21 3.841 28.68 2.331.984 2.793-14.111 4.413-16.37 7.58-2.244 3.15-1.608 17.77-2.368 18.229-2.64 1.595-4.164-6.362-6.741-6.71a83.693 83.693 0 01-2.992 3.487 29.146 29.146 0 00-5.326-2.387c-6.548.132-14.205 4.126-20.853 5.311.079-4.274 3.878-3.826 6.432-5.708-4.757 2.187-6.36-5.861 2.488-6.677-6.088-1.179-7.815 2.86-13.643 3.211-3.712.22-5.056-3.888-1.206-5.059-1.876.255-3.763.38-5.657.377.077-.29-.019-11.691 2.628-12.026 2.413-.305 6.948 2.841 8.15-.996 2.174-.407-.911 2.908 0 0z"/>
				<path fill="#494e62" d="M113.348 132.666c.858 1.314 1.99 1.654 3.4 1.02a12.53 12.53 0 00-2.762-6.765 60.657 60.657 0 017.788-3.341c-1.622-3.235-4.975-15.088-10.45-13.157"/>
				<path fill="#5a5e6b" d="M36.46 31.873c3.221-2.13 6.684-2.619 10.388-1.463-1.007 2.222-6.591 1.934-6.246 3.79.06.324 17.005-2.756 21.215-.39a67.33 67.33 0 00-12.462 3.277c16.733 2.776 4.426 1.753-1.311 8.643-15.84 15.522-11.907-1.595-11.584-13.857 3.042-2.822-.124 4.7 0 0z"/>
				<path fill="#59595e" d="M131.01 124.17c4.42-2.593-1.527-2.195-2.792-4.638.876-4.073 11.392-6.294 14.954-6.261 11.934.11-7.83 35.84-12.163 10.9.613-.36.365 2.1 0 0z"/>
				<path fill="#9c9181" d="M106.958 56.844c-7.597 9.525-9.912-26.053-1.947-29.931 4.066-1.978 1.929 25.883 1.947 29.931-2.894 3.627-.023-5.053 0 0z"/>
				<path fill="#88847e" d="M131.001 148.075l-1.86-2.596c5.659-4.904 30.87-1.61 31.03-1.84-3.654 1.782-6.17 7.21-10.217 2.432-2.197-2.594-14.153-1.037-15.826 1.987.933 1.709 6.562.248 5.436 3.6-1.035 3.086-7.9-3.137-8.563-3.583-.62-.866 2.168 1.458 0 0z"/>
				<path fill="#a49381" d="M145.076 125.875c7.922-8.732-3.428-10.973-8.758-10.979 5.393-3.493 9.86-8.023 16.364-9.492a28.877 28.877 0 01-6.66 6.66c.586 1.182 6.786 1.617 6.595 2.902-.667 4.476-4.272 8.192-7.54 10.909 2.529-2.788 1.032-.858 0 0z"/>
				<path fill="#605e64" d="M44.495 128.737c-1.487-.892-2.468-2.185-2.945-3.879 6.763 2.688 13.182-2.094 18.163 3.746-2.477 1.633-5.084 1.788-7.82.465 2.493.893 14.54-3.027 15.23.512 2.091 10.738-19.45 2.12-22.628-.844-.779-1.22 5.354 4.994 0 0z"/>
				<path fill="#d5cfc8" d="M160.172 143.639c-7.447-12.462 17.155 5.78 4.572 9.416a22.184 22.184 0 00-4.572-9.416c-.214-.358 1.104 3.357 0 0z"/>
				<path fill="#e0d5c6" d="M72.162 156.477c-11.933 3.33-9.786-7.16-7.337-6.93.513.048 4.73 6.195 7.337 6.93z"/>
				<path fill="#74757a" d="M67.859 162.714c-6.202 1.402-6.593-.32-1.174-5.17a10.285 10.285 0 011.174 5.17c-1.59.027-.571-1.576 0 0z"/>
				<path fill="#7f848e" d="M124.738 157.352c1.546-.095 14.968-1.33 10.278 4.956-1.275 1.708-10.73-1.196-10.278-4.956.972-.06-.33 2.755 0 0z"/>
				<path fill="#2a2a3a" d="M27.741 177.36c-10.778-8.033 8.75-21.406 9.276-26.238.517-4.711 7.66-4.525 7.51.101-.209 6.385 15.91 1.119 20.473 4.047 5.147 3.3 1.672 21.607-5.934 22.706-6.958 1.005-25.21 3.938-31.325-.617-2.476-1.845 2.477 1.845 0 0z"/>
				<path fill="#464d5f" d="M73.708 153.314c7.941-10.043-8.218-9.824-7.419-8.675.624.914 2.659-1.537 2.391-2.453-1.336-4.576-11.064-3.194-14.438-3.08-5.789.196-8.13-.714-13.684-1.085-.893.387-7.785 9.537-5.694 3.781-1.789 4.923-12.802 25.112-7.532 27.124a45.2 45.2 0 012.465-10.46c2.818-3.335 9.68-5.4 8.856-10.69-.744-4.776 8.3 7.02 5.407 6.673 2.894.346 21.287-4.226 21.283 1.602-.008 9.112 9.568 5.524 8.365-2.737z"/>
				<path fill="#454b5d" d="M62.688 168.861a12.835 12.835 0 016.023-.5c-.883-1.34-2.095-2.234-3.637-2.684 1.059-2.052 4.354 1.288 5.26-1.237.415-1.157-4.845-3.99-5.842-4.93-3.098 2.648-3.7 5.765-1.804 9.351 1.78-2.038-1.654-3.47 0 0z"/>
				<path fill="#88847e" d="M71.06 142.674l1.949-2.374c-6.264-4.736-31.524-.424-32.52-1.683 3.863 1.641 6.491 6.567 10.707 2.224 2.414-2.487 14.71-1.143 16.587 1.817-.837 1.34-6.817.387-5.697 3.29 1.117 2.903 8.114-2.769 8.974-3.274.65-.79-2.273 1.334 0 0z"/>
				<path fill="#d5cfc8" d="M40.488 138.618c.888-1.038 1.325-2.276 1.311-3.712-3.374-5.256-12.76 10.642-6.104 12.322a19.36 19.36 0 014.793-8.61c.223-.326-1.156 3.07 0 0z"/>
				<path fill="#7f848e" d="M77.623 151.158c-1.103-.06-15.574-1.085-10.771 4.53 1.257 1.47 11.29-.764 10.771-4.53-1.017-.056.347 2.517 0 0z"/>
				<path fill="#bcb0a2" d="M30.261 111.064c6.752 7.391-1.6 18.888 13.902 17.849-.09 5.826-6.373-1.275-7.355 2.94-.068.29 10.918 7.355 5.244 7.882-2.609.241-9.675.835-10.152-1.483"/>
				<path fill="#938e8a" d="M106.495 186.768c.903.36 2.053.057 3.088.06"/>
				<path fill="#363747" d="M61.359 128.665c-.147 7.407-11.679.994-13.36.3 3.577-2.283 9.385-.44 13.36-.3-.05 2.503-.549-.02 0 0z"/>
				<path fill="#bab2aa" d="M112.661 107.312c2.167 1.396 2.898 3.332 2.195 5.807-1.061-3.368-3.307-4.589-6.736-3.662"/>
				<path fill="#696869" d="M110.567 89.774c2.2 4.04 8.435 14.917-1.908 11.31"/>
				<path fill="#c1b09d" d="M73.245 38.783c-9.384-4.566.702-12.924 6.054-10.152 6.387 3.307-5.762 7.511-6.054 10.152-1.534-.746.153-1.383 0 0z"/>
			</svg>
		)
	}
}
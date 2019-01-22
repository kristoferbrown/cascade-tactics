import React, { Component } from 'react';

export default class MonoMapRenderer extends Component {
	shouldComponentUpdate() { return this.props.isSelected; }
	render() {
		const { height, width } = this.props;
		return (
			<svg width={width} height={height} className='svgGroup-monoMapRenderer' viewBox="0 0 350 500">
				<g className='mapCharacter'>
					<path className="mapCharacter-highlight" d="M294.214 7L69.004 60.556v350.339l21.454-5.102v25.562l225.209-53.554V27.462z"/>
					<linearGradient id="a" x1="182.9546" x2="182.9546" y1="-42.0649" y2="356.252" gradientUnits="userSpaceOnUse">
						<stop offset="0" stopColor="#a3a3a3"/>
						<stop offset=".2387" stopColor="#717171"/>
						<stop offset=".4775" stopColor="#464646"/>
						<stop offset=".6923" stopColor="#272727"/>
						<stop offset=".8738" stopColor="#141414"/>
						<stop offset="1" stopColor="#0d0d0d"/>
					</linearGradient>
					<path fill="url(#a)" d="M288.871 15.269L77.038 68.085v345.5l211.833-52.815z"/>
					<linearGradient id="b" x1="203.1328" x2="203.1328" y1="29.1812" y2="450.5693" gradientUnits="userSpaceOnUse">
						<stop offset="0" stopColor="#a3a3a3"/>
						<stop offset="1" stopColor="#0d0d0d"/>
					</linearGradient>
					<path fill="url(#b)" d="M309.05 35.448L97.216 88.265v345.499l211.834-52.816z"/>
					<linearGradient id="c" x1="189.6924" x2="196.3963" y1="32.7573" y2="70.7773" gradientUnits="userSpaceOnUse">
						<stop offset="0" stopColor="#fff"/>
						<stop offset="1" stopColor="#363636"/>
					</linearGradient>
					<path fill="url(#c)" d="M309.05 35.448l-20.179-20.179L77.038 68.085l20.178 20.18z"/>
					<g>
						<path fill="#191816" d="M337.368 423.734c-5.977-9.752 9.708-5.393-7.938-6.387 1.932 3.041 4.58 5.17 7.938 6.387zM326.093 393.456c-4.181 1.334-6.767 4.28-7.751 8.833 49.895 8.315-30.157-11.301 19.028-.213v-6.462c-3.76-.719-7.519-1.438-11.277-2.158-.592-.42 3.874 2.766 0 0z"/>
						<path fill="#191816" d="M334.256 391.135c-20.181-1.785-30.07-42.929-8.104-38.538-6.97-26.013-36.817-2.49-30.459 20.267 17.532 62.212-73.681-32.028-71.993 28.759-14.445 20.193-111.245-4.008-132.672-17.051 10.937-1.763 21.875-3.526 32.813-5.29-3.904-30.141-34.198-5.388-53.818-18.471-13.188.795-22.804-2.838-33.03-2.291 2.88 8.69 43.288 19.569 27.737 22.237 3.772 31.818 34.927 37.029-13.145 41.287.557-2.563 20.899 43.096-4.627 28.153-1.308-.767-37.497-12.835-37.948-4.104-.691 13.35 59.361 7.35 70.864 27.038.313-30.504 32.735-17.88 20.522.579 8.961 2.905 17.601 2.743 25.915-.485 1.772-2.55-3.245-24.929 1.868-33.837-4.038-.312-31.973 13.199-38.389.22-3.649-7.382.23-31.153 6.754-35.243 8.121 27.383 14.844 15.736 28.094 4.561 8.283-6.994 23.464 16.026 23.826 25.646.691 18.208-10.626 5.462-13.922 16.489 6.504 5.751 13.173-4.643 18.604 5.453-.159 7.208-3.272 11.285-9.337 12.233.296-.994 15.751 13.627 17.891 15.557 7.533-20.123 5.1-39.328-7.301-57.625 9.866-1.087 36.764 20.82 17.71 29.809 13.293 15.776 27.224-6.718 24.408-5.503 9.927-4.388 8.382-32.601 21.906-28.557 24.65 7.364-.741 20.841-.766 26.003 10.485 7.986 15.577 24.07 28.233 15.625-2.906-4.911-6.596-7.949-11.073-9.118 2.979-53.772 52.005 3.449 51.881-35.861 12.833 4.36 21.516 26.599 35.587 13.91-3.793-4.009-6.826-8.792-9.102-14.368 4.142-8.619 22.974 11.402 24.333 15.353 1.838-9.435 12.574-41.457-3.26-42.837-8.667-.769 1.628.143 0 0zm-150.524 42.662c-8.679-.366-3.032-22.332 16.938-2.085-5.235 3.964-10.882 4.655-16.938 2.085-2.714-.115 5.089.224 0 0zm59.396-12.629c2.473-9.383 4.328-19.768 12.639-10.511-4.217 3.505-8.426 7.01-12.639 10.511 1.773-6.725 4.214-3.501 0 0z"/>
						<path fill="#706F6C" d="M318.372 402.29c-.025-.004-.139.3 0 0-.013-.001 0 0 0 0z"/>
						<path fill="#868682" d="M337.368 464.453c-4.625-6.33-3.801.337 0 0 0 0-1.609.141 0 0z"/>
						<path fill="#706F6C" d="M95.213 383.892c0 8.407 19.01 6.648 21.646 6.721-8.503 1.91-15.719-.329-21.646-6.721 0 .004 5.335 8.553 0 0z"/>
						<path fill="#999D98" d="M276.124 384.81c-14.914 8.028 19.928 21.011-12.583 24.788-7.917.922-30.983-10.914-29.981-21.189.617-6.333 18.925-2.392 15.635-15.54-9.819 8.877-18.834-2.164-29.017-2.489 6.464-1.294 12.965-1.595 19.507-.903-.554-1.386-1.612-15.28.498-14.419-1.741-.712-20.898 7.262-21.441 9.749-2.598 11.914-27.128-11.699-35.456-4.073-10.528 9.64 33.882 19.753 32.935 18.591-7.642 1.635-12.8 2.663-8.907 10.691 6.587 0 14.622 10.351 13.128 13.101-4.235 6.973-10.423 9.742-18.559 8.306 9.681 6.063 17.648 35.491 38.549 19.779-2.494-3.008-3.811-6.46-3.946-10.357 3.366-4.984 25.987-4.91 29.102.413 11.841 20.222 45.186-9.25 42.935-16.416-20.253.161-4.745-9.344-4.996-17.388-17 2.89-15.256 3.996-27.403-2.644-2.639 1.42 4.048 2.211 0 0zm-46.896 24.389c-4.084-6.739 5.17-5.877 0 0-.869-1.431 1.067-1.214 0 0z"/>
						<path fill="#706F6C" d="M137.963 476.411c10.389 7.59 27.166-.274 37.583-2.581-1.073-1.812-10.542-8.808-10.325-9.136 5.162.019 8.286-2.193 9.375-6.631-3.158-6.773-10.072-1.013-14.693-5.216 6.119-9.434 24.563-8.73 3.493-25.317-10.663-8.413-24.235 18.755-28.759-7.303-.52.16-11.791 15.057-11.647 14.126-2.714 17.913 26.393 9.432 33.195 10.649-5.438 4.998-4.247 19.307-6.071 20.711-8.629 6.656-21.077-12.013-21.829 3.308 3.394 5.583 15.092-7.226 9.678 7.39 6.411 4.685 4.802-12.969 0 0z"/>
						<path fill="#868682" d="M280.229 443.396c-.661-30.196-31.743-12.576-30.397-45.752-44.294-1.405-67.452 19.283-117.117 19.283 19.752 12.551 148.139 55.231 147.514 26.469-.049-2.055.046 2.053 0 0z"/>
						<path fill="#868682" d="M207.521 417.969c-.879-4.367-2.762-6.553-5.648-6.549 1.886 2.184 3.765 4.369 5.648 6.549-.833-2.528-.837-2.536 0 0z"/>
						<path fill="#4F4E4C" d="M160.276 484.48c9.798 5.328 18.228 5.409 31.685 9.661 7.308-10.775 4.435-16.383-8.615-16.82 7.423-2.777 13.839-7.052 19.244-12.83-4.514-.326-8.603-1.846-12.266-4.551 16.997-3.656-2.37-19.86-10.695-20.172 7.829 12.532 7.281 24.642-1.648 36.313.207 15.884-10.992 2.371-17.705 8.399 3.738 2.034 5.731-5.146 0 0z"/>
						<path fill="#999D98" d="M96.256 407.154c-10.605-.33-21.435-1.904-24.87-14.075-9.849-1.049-19.96 16.085-9.662 20.447 5.277 5.56 19.559 4.737 26.887 7.246-2.84-19.696 21.684 2.396 22.806-18.285-5.51.068-10.565 1.626-15.161 4.667-2.688-.084 5.597.178 0 0z"/>
						<path fill="#4F4E4C" d="M318.429 402.363c3.614 6.174 12.156-1.016 13.494 8.754-18.628-5.177-15.397 29.227 5.442 24.561-2.595-6.392-5.78-12.39-7.937-18.326 16.024.916 8.254-27.176-10.999-14.989 2.949 5.038 6.439-4.073 0 0zM318.429 402.363c-.082-.164-.207.143 0 0-.014-.025-.031.025 0 0z"/>
						<path fill="#706F6C" d="M98.322 412.277c-10.125-5.706-10.38 11.91 7.732 17.066 7.217 2.056 25.153-5.198 14.257-12.938-15.178-10.8-9.835 2.708-21.989-4.128-9.378-5.283 5.777 3.251 0 0z"/>
						<path fill="#4F4E4C" d="M78.85 431.687c2.976-3.263 6.605-5.313 10.889-6.155-3.005-12.907-29.073-14.627-20.342 3.024 5.893 12.071 3.809 6.34 18.011 15.039 19.166 11.771 8.402-18.452 7.599-16.925-6.216 2.646-9.466 2.501-16.157 5.017 2.894-6.417 5.898-2.221 0 0z"/>
						<path fill="#4F4E4C" d="M69.057 417.141c-.066.051-.066.051 0 0-.016.013-.016.013 0 0z"/>
						<path fill="#706F6C" d="M83.923 386.919c-3.806 2.516-7.981 3.576-12.526 3.179-.126 27.253 45.781 13.125 44.876 8.813-.41-1.97-31.054-13.298-32.35-11.992-3.593 3.608 2.143-2.156 0 0z"/>
						<path fill="#868682" d="M183.341 468.321c13.183 5.035 32.726-4.257 46.478-11.292 1.196-2.601.978-4.777-.648-6.532-14.335 2.134-36.137 5.723-45.83 17.824 4.573 1.746 5.428-6.772 0 0z"/>
						<path fill="#4F4E4C" d="M139.957 382.38c-44.326-5.243 5.224 39.915 0 0 0 0 .412 3.176 0 0z"/>
						<path fill="#999D98" d="M95.204 383.9c4.423 7.186 17.734-19.9 5.984-15.382-12.933 4.974-19.201 14.786-34.343 18.629 5.139 3.331 25.109 1.777 28.359-3.247-.03-.045-.41.631 0 0z"/>
						<path fill="#999D98" d="M95.117 383.746c.002.004 1.39-1.526 0 0 .004.008 0 0 0 0zM93.742 385.435c1.955-2.04 1.955-2.04 0 0 .577-.372.577-.374 0 0zM95.213 383.892c.104-.164.034-.056 0 0 .018-.028.018-.028 0 0z"/>
						<path fill="#999D98" d="M95.121 383.78c.178.293.055.015 0 0 .027.043.01.002 0 0z"/>
						<path fill="#999D98" d="M95.204 383.9c0-.001.006-.004.009-.008l-.009.008zM95.139 383.784c.119.158.172.039 0 0 .026.033.039.009 0 0z"/>
						<path fill="#4F4E4C" d="M235.701 456.118c5.745-4.097 4.933-8.299-2.425-12.605-10.67-3.84-13.166 13.734-21.98 15.458 1.251-.231 21.025-3.342 24.405-2.853 3.189.461-3.221-.468 0 0zM95.645 383.161c-4.213 7.982 32.935-13.967 32.985-14.018-14.809-3.678-22.828 9.06-32.985 14.018-.118.226 4.646-2.265 0 0zM95.131 383.768c0 .014 0 .03 0 0z"/>
						<path fill="#4F4E4C" d="M95.26 383.807c.708-1.194.336-.523 0 0 0 0 .133-.207 0 0z"/>
						<path fill="#4F4E4C" d="M95.26 383.807c1.031-1.614-.356-.079 0 0 .133-.207-.038-.009 0 0zM288.632 432.408c17.798 16.978 16.344-5.527 14.763-15.399-.264 9.599-5.189 14.729-14.763 15.399 4.836 4.612 11.685 1.353 0 0zM209.336 439.333c-1.769-7.047-12.405 1.601-12.171 4.596.438 5.672 17.516 5.009 20.152 3.548-3.399-2.003-6.06-4.716-7.981-8.144-.917-3.66 1.004 4.028 0 0zM128.291 469.024c.676-13.752 8.828-4.504-2.617-19.542-8.384 14.596-7.512 21.109 2.617 19.542.091-1.86-1.688-.019 0 0zM262.724 436.55c-4.512 1.227-7.444 4.109-8.796 8.649 12.229-.901 15.162-3.781 8.796-8.649-4.907.078 1.009-.014 0 0z"/>
						<path fill="#706F6C" d="M286.127 369.983c-2.532 1.899-18.132 6.503-10.003 14.826 19.909 10.879 16.016-13.312 10.003-14.826.004-.004 2.98.75 0 0z"/>
						<path fill="#706F6C" d="M290.128 373.517c-5.332-4.718-5.332-4.718 0 0-.086-1.506-.086-1.503 0 0z"/>
						<path fill="#868682" d="M307.737 373.539c.018.841.057 2.551 0 0 .009.423.009.423 0 0z"/>
						<path fill="#191816" d="M303.533 387.445c3.569-.357 5.884-2.252 6.946-5.677-11.834-1.214-21.802-9.48-21.579 8.175 4.876-.831 9.753-1.665 14.633-2.498 2.176-2.06-4.882.83 0 0z"/>
						<path fill="#706F6C" d="M303.62 377.772c-3.712-3.507-6.86-3.055-9.431 1.356 7.2 3.586 10.342 3.133 9.431-1.356-3.761-3.829.105.632 0 0zM305.958 379.658c7.815 3.613-1.69-11.139 0 0 .785.366-.075-.48 0 0z"/>
						<path fill="#706F6C" d="M307.765 374.81c.364 3.948 1.099 11.89 0 0 0 0 .181 1.978 0 0z"/>
						<path fill="#868682" d="M305.958 379.658c-.599-3.965-5.078 0 0 0-.075-.483-.742 0 0 0z"/>
						<path fill="#191816" d="M308.526 404.84c1.681-3.238 1.713-4.852.093-4.852-.028 1.617-.062 3.235-.093 4.852zM308.619 399.984c2.257-1.986 2.817-4.74 0 0 .732-.644 0 0 0 0zM308.619 399.984c-.015-.013-.028-.022-.042-.035.026.018.042.035.042.035zM139.957 382.38c.413 3.171.825 6.343 1.237 9.515 7.529-1.98 15.183-2.843 22.969-2.588-6.684-9.295-14.518-21.543-24.206-6.927.412 3.176 3.21-4.841 0 0z"/>
						<path fill="#191816" d="M148.916 375.126c1.745.062 3.593.987 5.71 2.831-2.117-1.842-3.965-2.769-5.71-2.831zM171.607 379.033c22.731 13.744-18.355 17.324 20.899 18.578-8.559-5.107-9.148-17.678-20.899-18.578 2.019 1.218 11.783.905 0 0z"/>
						<path fill="#191816" d="M175.757 395.935c.047-2.672.792-5.531.811-8.289-.02 2.758-.764 5.616-.811 8.289zM176.567 387.646c.008-1.576-.226-3.119-.959-4.572.733 1.453.964 2.996.959 4.572z"/>
						<path fill="#4F4E4C" d="M207.599 397.186c-4.036-17.365-3.185 9.548-15.32 6.498-3.09 18.795 13.5-2.151 15.32-6.498-.541-2.339-1.932 4.607 0 0z"/>
						<path fill="#191816" d="M194.735 385.149c-2.703 6.693-1.021 12.072 5.046 16.138 1.829-2.074 2.932-12.138 7.53-11.276-1.356-2.795-9.348-14.193-12.576-4.862-1.963 5.688 1.937-5.599 0 0z"/>
						<path fill="#4F4E4C" d="M64.068 392.308c5.859 3.07 8.302 2.333 7.329-2.209-5.991-3.88-7.19-4.513-7.329 2.209 2.439.256.03-1.525 0 0z"/>
						<path fill="#868682" d="M68.621 371.897c.96-1.135.635-.755 0 0z"/>
						<path fill="#191816" d="M191.961 485.139c31.207 2.996 9.753-35.746 0 0 5.912.572 1.112-4.081 0 0z"/>
						<path fill="#4F4E4C" d="M207.001 465.768c7.503-.646 16.065 4.28 15.102-8.521-4.619.999-18.542.379-15.102 8.521 6.325-.543-1.154-2.731 0 0zM209.588 477.133c3.735 2.022 7.877 3.056 12.074 2.443-8.82-7.551-12.843-8.366-12.074-2.443.469.254-.297-.68 0 0z"/>
						<path fill="#4F4E4C" d="M221.663 479.576c-1.089.192-2.151.267-3.188.232 1.041.035 2.103-.039 3.188-.232z"/>
						<path fill="#999D98" d="M64.084 464.117c6.277 1.103 12.265 1.714 18.226 1.786-5.956-.072-11.949-.683-18.226-1.786z"/>
						<path fill="#191816" d="M79.348 463.605c-2.137-5.406-33.098-27.256-32.742-16.242.332 10.404 24.312 16.242 32.742 16.242-3.843-9.711-3.551 0 0 0zM116.802 468.6c.765-.995 31.38-2.229 21.289-8.038-9.851-5.676-26.756 8.038-21.289 8.038 6.595-8.576.004 0 0 0z"/>
						<path fill="#4F4E4C" d="M68.874 417.201c.01-2.184-.721-2.955-1.74-3.173 1.021.218 1.75.994 1.74 3.173zM108.391 461.43c-7.932-1.52-15.138-9.086-17.146 4.167 6.187 2.978 13.231 2.125 17.146-4.167-.684-.131-3.305 5.313 0 0z"/>
						<path fill="#4F4E4C" d="M96.792 457.334c-3.909.978-5.758 3.73-5.548 8.266-.21-4.536 1.639-7.288 5.548-8.266-2.562-.051-2.562-.051 0 0z"/>
						<path fill="#999D98" d="M68.874 417.203c-3.789 1.896 0 9.875 0 0-.004.003 0 .029 0 0z"/>
						<path fill="#999D98" d="M68.08 421.708l-.387-.003c-.001 0 .2.001.387.003zM69.01 417.183c-.172.133-.172.133 0 0 0 0-.049.039 0 0zM69.01 417.183c.148-.089-.339.323 0 0 0 0-.044.039 0 0zM68.852 417.216c-1.383.725-1.905 1.827-1.954 3.14.051-1.313.577-2.416 1.954-3.14zM68.879 417.282c-.007-.108-.007-.108 0 0 0-.027 0-.027 0 0z"/>
						<path fill="#999D98" d="M69.019 417.121c-.095.043-.341.298 0 0-.058.025 0 0 0 0z"/>
						<path fill="#706F6C" d="M140.148 477.015c-1.313-1.377-2.621-2.749-3.934-4.122 1.726.419 3.169 1.493 3.934 4.122zM240.745 385.103c-6.558 18.81 8.233 20.333 24.077 19.269 6.003-8.287-10.035-9.661-10.425-14.632 3.019-2.421 6.528-3.285 10.526-2.587-8.919-6.491 4.375-10.266.982-17.067-24.606-.441-8.058 3.922-25.16 15.017-1.667 4.78 4.499-2.919 0 0zm12.505 10.524c2.97.168-2.954-.21 0 0 .288.02-.287-.018 0 0z"/>
						<path fill="#191816" d="M264.922 387.152c1.756 4.499-.261 6.286-6.051 5.366.146 5.994 11.421 4.183 5.95 11.851 22.081-3.705-1-8.872 11.125-26.157 11.483-16.37-28.227-3.58-11.024 8.94 1.532 4.298-8.519-6.199 0 0z"/>
						<path fill="#191816" d="M270.891 391.258c1.744-2.151 3.488-4.302 5.233-6.452-1.745 2.15-3.489 4.3-5.233 6.452z"/>
						<path fill="#706F6C" d="M201.836 411.022c8.262-.603 13.559 1.369 18.61-7.909 2.247-4.135-10.757-6.098-12.847-5.924 1.473 6.024-.447 10.636-5.763 13.833zM201.874 411.42c.017-.004 0 0 0 0z"/>
						<path fill="#868682" d="M252.398 405.215c8.519 6.662 16.531 5.729 24.039-2.792-7.92 1.72-15.933 2.649-24.039 2.792z"/>
						<path fill="#191816" d="M240.745 385.103c-9.305 1.603-9.385 2.31-1.423 14.686 7.575-4.208-.244-9.906 1.423-14.686zM207.202 390.12c-2.007 6.29-.498 8.526 4.533 6.72 7.298-8.086-.916-7.541-4.533-6.72-1.322 2.425.053-.011 0 0z"/>
						<path fill="#191816" d="M207.599 397.186c-.541-2.334-1.719-4.64-.397-7.065-1.326 2.424-.148 4.73.397 7.065zM207.312 390.013c-.08-.002-.08-.002 0 0 0 0-.019-.007 0 0z"/>
						<path fill="#191816" d="M207.351 390.079c-.034-.049-.174-.174 0 0-.014-.022 0 0 0 0zM207.255 390.006c-.076.126.038.179 0 0-.025.039 0 0 0 0z"/>
						<path fill="#706F6C" d="M270.891 391.262c-1.998 5.837.012 8.061 6.019 6.672-.384-3.297-2.391-5.521-6.019-6.672-3.444 7.144 2.105 1.129 0 0zM227.396 405.967c-1.928 9.908 1.927-9.366 0 0-.149.771.173-.845 0 0z"/>
						<path fill="#4F4E4C" d="M286.237 370.217c-2.692.587-5.389 1.177-8.082 1.766 2.723 1.338 6.289 1.18 8.082-1.766-3.024-.915-2.068 3.396 0 0z"/>
						<path fill="#868682" d="M139.568 477.91c-.397 1.368.801-2.767 0 0-.035.127.096-.329 0 0zM140.269 477.139c-.164-.166-.164-.166 0 0-.068-.074 0 0 0 0zM140.269 477.139c.233.23.729.716.729.716l-.729-.716z"/>
						<path fill="#4F4E4C" d="M258.871 392.518c5.796.922 7.812-.867 6.051-5.366-1.169.097-18.72 5.731-6.051 5.366 7.588-1.068-1.865.053 0 0z"/>
						<path fill="#191816" d="M253.154 397.194c3.187.154-3.16-.201 0 0 .288.015-.287-.018 0 0z"/>
					</g>
				</g>
			</svg>
		)
	}
}
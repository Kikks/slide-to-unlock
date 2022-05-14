import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
	<Svg
		width={28}
		height={18}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<Path
			d='M3.537 17.583h20.926c1.953 0 3.537-1.452 3.537-3.244V3.244C28 1.452 26.416 0 24.463 0H3.537C1.584 0 0 1.452 0 3.244V14.34c0 1.792 1.584 3.244 3.537 3.244Z'
			fill='#FFB636'
		/>
		<Path
			d='M24.93 14.969h.177c.558 0 1.01-.415 1.01-.927v-10.5c0-.512-.452-.927-1.01-.927h-.177c-.558 0-1.01.414-1.01.926v10.5c0 .513.452.928 1.01.928Z'
			fill='#FFD469'
		/>
	</Svg>
);

export default SvgComponent;

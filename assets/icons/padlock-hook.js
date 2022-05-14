import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
	<Svg
		width={20}
		height={22}
		fill='none'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<Path
			d='M1.72 13.577c.95 0 1.72-.706 1.72-1.577V8.767c0-3.095 2.745-5.613 6.12-5.613 3.374 0 6.12 2.518 6.12 5.613v11.618c0 .87.77 1.577 1.72 1.577s1.72-.706 1.72-1.577V8.767C19.12 3.933 14.83 0 9.56 0 4.288 0 0 3.933 0 8.767V12c0 .871.77 1.577 1.72 1.577Z'
			fill='#B1B4B5'
		/>
	</Svg>
);

export default SvgComponent;

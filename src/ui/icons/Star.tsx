import React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export function Star({color, ...props}: SvgProps) {
  return (
    <Svg width={30} height={30} viewBox="0 0 17 16" fill="none" {...props}>
      <Path
        d="M8.7 0l2.472 5.267 5.528.846-4 4.1.945 5.787L8.7 13.267 3.755 16l.945-5.787-4-4.1 5.528-.846L8.7 0z"
        fill={color}
      />
    </Svg>
  );
}

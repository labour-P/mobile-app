import * as React from "react";
import Svg, {
  Path,
  Filter,
  G,
  Defs,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeBlend,
  Circle,
} from "react-native-svg";

export default function Chat(props) {
  return (
    <Svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M23 4V15C23 16.1046 22.1046 17 21 17H19V21L13 17H12"
        stroke="white"
        stroke-width="2"
        stroke-linecap="square"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17 1H3C1.89543 1 1 1.89543 1 3V11C1 12.1046 1.89543 13 3 13H5V18L12 13H17C18.1046 13 19 12.1046 19 11V3C19 1.89543 18.1046 1 17 1Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="square"
      />
    </Svg>
  );
}

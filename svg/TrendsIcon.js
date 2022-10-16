import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function TrendsIcon(props) {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M3.65912 7.45455H21.8409M3.65912 15.6364H21.8409M8.65912 2L7.75003 21.5455M17.2955 2.45455L16.3864 22"
        stroke={props.color}
        stroke-linecap="round"
      />
    </Svg>
  );
}

import * as React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";

export default function Fund(props) {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_103_113)">
        <Path
          d="M3.74999 5.83335C4.90058 5.83335 5.83332 4.90061 5.83332 3.75002C5.83332 2.59943 4.90058 1.66669 3.74999 1.66669C2.5994 1.66669 1.66666 2.59943 1.66666 3.75002C1.66666 4.90061 2.5994 5.83335 3.74999 5.83335Z"
          stroke="#E7F4E8"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <Path
          d="M16.25 5.83335C17.4006 5.83335 18.3333 4.90061 18.3333 3.75002C18.3333 2.59943 17.4006 1.66669 16.25 1.66669C15.0994 1.66669 14.1667 2.59943 14.1667 3.75002C14.1667 4.90061 15.0994 5.83335 16.25 5.83335Z"
          stroke="#E7F4E8"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <Path
          d="M8.33333 11.5317C6.48999 10.9067 5.73583 8.33337 3.33333 8.33337C2.67029 8.33337 2.0344 8.59677 1.56556 9.06561C1.09672 9.53445 0.833328 10.1703 0.833328 10.8334V18.3334H5.83333V13.3334"
          stroke="#E7F4E8"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        />
        <Path
          d="M11.6667 11.5317C13.51 10.9067 14.2642 8.33337 16.6667 8.33337C17.3297 8.33337 17.9656 8.59677 18.4344 9.06561C18.9033 9.53445 19.1667 10.1703 19.1667 10.8334V18.3334H14.1667V13.3334"
          stroke="#E7F4E8"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="square"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_103_113">
          <Rect width="20" height="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

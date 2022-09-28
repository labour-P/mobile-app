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

export default function FloatingBtn(props) {
  return (
    <Svg
      width="84"
      height="84"
      viewBox="0 0 84 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G filter="url(#filter0_d_23_4116)">
        <Circle cx="42" cy="34" r="26" fill="#039951" />
      </G>
      <Path
        d="M41.6533 25.3334C41.0789 25.3334 40.6133 25.799 40.6133 26.3734V32.6134H34.3733C33.7989 32.6134 33.3333 33.079 33.3333 33.6534C33.3333 34.2277 33.7989 34.6934 34.3733 34.6934H40.6133V40.9334C40.6133 41.5077 41.0789 41.9734 41.6533 41.9734C42.2277 41.9734 42.6933 41.5077 42.6933 40.9334V34.6934H48.9333C49.5077 34.6934 49.9733 34.2277 49.9733 33.6534C49.9733 33.079 49.5077 32.6134 48.9333 32.6134H42.6933V26.3734C42.6933 25.799 42.2277 25.3334 41.6533 25.3334Z"
        fill="white"
      />
      <Defs>
        <Filter
          id="filter0_d_23_4116"
          x="0"
          y="0"
          width="84"
          height="84"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <FeFlood flood-opacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="8" />
          <FeGaussianBlur stdDeviation="8" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0.513726 0 0 0 0 0.145098 0 0 0 0.16 0"
          />
          <FeBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_23_4116"
          />
          <FeBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_23_4116"
            result="shape"
          />
        </Filter>
      </Defs>
    </Svg>
  );
}
import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function CopySvg(props) {
  return (
    <Svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M7.77291 1.08325H5.22708C4.66375 1.08325 4.20333 1.53825 4.20333 2.10159V2.61075C4.20333 3.17409 4.65833 3.62909 5.22166 3.62909H7.77291C8.33625 3.62909 8.79125 3.17409 8.79125 2.61075V2.10159C8.79666 1.53825 8.33625 1.08325 7.77291 1.08325Z"
        fill={props.color}
      />
      <Path
        d="M9.33832 2.61088C9.33832 3.47213 8.63415 4.1763 7.7729 4.1763H5.22707C4.36582 4.1763 3.66165 3.47213 3.66165 2.61088C3.66165 2.30755 3.33665 2.11797 3.06582 2.2588C2.30207 2.66505 1.78207 3.47213 1.78207 4.39838V9.49547C1.78207 10.828 2.87082 11.9167 4.20332 11.9167H8.79665C10.1291 11.9167 11.2179 10.828 11.2179 9.49547V4.39838C11.2179 3.47213 10.6979 2.66505 9.93415 2.2588C9.66332 2.11797 9.33832 2.30755 9.33832 2.61088ZM6.70582 9.1813H4.33332C4.11123 9.1813 3.92707 8.99713 3.92707 8.77505C3.92707 8.55297 4.11123 8.3688 4.33332 8.3688H6.70582C6.9279 8.3688 7.11207 8.55297 7.11207 8.77505C7.11207 8.99713 6.9279 9.1813 6.70582 9.1813ZM8.12498 7.01463H4.33332C4.11123 7.01463 3.92707 6.83047 3.92707 6.60838C3.92707 6.3863 4.11123 6.20213 4.33332 6.20213H8.12498C8.34707 6.20213 8.53123 6.3863 8.53123 6.60838C8.53123 6.83047 8.34707 7.01463 8.12498 7.01463Z"
        fill={props.color}
      />
    </Svg>
  );
}
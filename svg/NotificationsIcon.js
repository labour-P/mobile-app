import * as React from "react";
import Svg, { Path, G, Mask, ClipPath, Defs, Rect } from "react-native-svg";

export default function NotificationsIcon(props) {
  return (
    <Svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clip-path="url(#clip0_255_3641)">
        <Mask
          id="mask0_255_3641"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="3"
          y="1"
          width="19"
          height="18"
        >
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.25006 1H21.747V18.348H3.25006V1Z"
            fill="white"
          />
        </Mask>
        <G mask="url(#mask0_255_3641)">
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4971 2.5C9.00207 2.5 6.56607 5.238 6.56607 7.695C6.56607 9.774 5.98907 10.735 5.47907 11.583C5.07007 12.264 4.74707 12.802 4.74707 13.971C4.91407 15.857 6.15907 16.848 12.4971 16.848C18.8001 16.848 20.0841 15.813 20.2501 13.906C20.2471 12.802 19.9241 12.264 19.5151 11.583C19.0051 10.735 18.4281 9.774 18.4281 7.695C18.4281 5.238 15.9921 2.5 12.4971 2.5ZM12.4971 18.348C7.82107 18.348 3.59507 18.018 3.25007 14.035C3.24707 12.387 3.75007 11.549 4.19407 10.811C4.64307 10.063 5.06607 9.358 5.06607 7.695C5.06607 4.462 8.05207 1 12.4971 1C16.9421 1 19.9281 4.462 19.9281 7.695C19.9281 9.358 20.3511 10.063 20.8001 10.811C21.2441 11.549 21.7471 12.387 21.7471 13.971C21.3981 18.018 17.1731 18.348 12.4971 18.348Z"
            fill={props.color}
          />
        </G>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.4483 22.5H12.4463C11.3253 22.499 10.2643 22.005 9.45927 21.108C9.18227 20.801 9.20727 20.326 9.51527 20.05C9.82327 19.772 10.2973 19.797 10.5743 20.106C11.0923 20.683 11.7573 21 12.4473 21H12.4483C13.1413 21 13.8093 20.683 14.3283 20.105C14.6063 19.798 15.0803 19.773 15.3873 20.05C15.6953 20.327 15.7203 20.802 15.4433 21.109C14.6353 22.006 13.5723 22.5 12.4483 22.5Z"
          fill={props.color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_255_3641">
          <Rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.25)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

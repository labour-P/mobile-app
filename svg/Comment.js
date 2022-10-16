import * as React from "react";
import Svg, { Path } from "react-native-svg";

export default function Comment(props) {
  return (
    <Svg
      width="60"
      height="60"
      viewBox="0 0 88 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M83.7286 11H25.2714C23.1885 11 21.5 12.7163 21.5 14.8335V60.8359C21.5 62.9531 23.1885 64.6694 25.2714 64.6694H47.3343L69.4877 79.6815C70.0661 80.0708 70.8081 80.1057 71.4195 79.7726C72.0309 79.4394 72.413 78.7919 72.4143 78.0868V64.6694H83.7286C85.8115 64.6694 87.5 62.9531 87.5 60.8359V14.8335C87.5 12.7163 85.8115 11 83.7286 11Z"
        fill="#5E9D7F"
      />
      <Path
        d="M68.7105 0H4.28947C2.19661 0 0.5 1.6966 0.5 3.78947V49.2632C0.5 51.356 2.19661 53.0526 4.28947 53.0526H15.6579V70.1053C15.6579 71.1517 16.5062 72 17.5526 72C17.9478 72.001 18.3331 71.877 18.6535 71.6457L44.6853 53.0526H68.7105C70.8034 53.0526 72.5 51.356 72.5 49.2632V3.78947C72.5 1.6966 70.8034 0 68.7105 0Z"
        fill="#E7F4E8"
      />
    </Svg>
  );
}
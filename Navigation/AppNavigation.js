import React from "react";

import { AuthStack } from "./AuthNavigator.js";
import { MainStack } from "./MainStack";
import { useSelector } from "react-redux";

function AppNavigation(props) {
  const { isAuth } = useSelector((state) => state.auth);

  if (!isAuth) {
    return <AuthStack {...props} />;
  }
  return <MainStack {...props} />;
}

export default AppNavigation;

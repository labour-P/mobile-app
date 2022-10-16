import React from "react";
import { View, StyleSheet } from "react-native";
import BodyTextBold from "../general/BodyTextBold";
import ButtonSmall from "../general/ButtonSmall";
import SupportSvg from "../../svg/SupportSvg";
import Fund from "../../svg/Fund";
import ButtonSmallBorder from "../general/ButtonSmallBorder";

const Support = () => {
  return (
    <View style={styles.div}>
      <View style={styles.btn1}>
        <ButtonSmall style={styles.btn}>
          <BodyTextBold style={styles.btnText}>Support</BodyTextBold>
          <Fund />
        </ButtonSmall>
      </View>
      <View style={styles.btn2}>
        <ButtonSmallBorder style={styles.btn}>
          <BodyTextBold style={styles.btnText}>Support</BodyTextBold>
          <SupportSvg />
        </ButtonSmallBorder>
      </View>
    </View>
  );
};

export default Support;

const styles = StyleSheet.create({
  div: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginTop: 30,
  },
  btn1: {
    flex: 0.5,
    height: 50,
    width: "100%",
    paddingHorizontal: 5,
  },
  btn2: {
    flex: 0.5,
    height: 50,
    width: "100%",
    paddingHorizontal: 5,
  },
  btn: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  btnText: {
    marginHorizontal: 10,
  },
});

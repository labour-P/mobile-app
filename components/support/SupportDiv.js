import React from "react";
import { View, Image } from "react-native";
import { colors } from "../../constants/color";
import { generateId } from "../../utils/generateRandomString";
import BodyTextBold from "../general/BodyTextBold";
import BodyTextLight from "../general/BodyTextLight";
import HeadingText from "../general/HeadingText";

const SupportDiv = ({ introText, data, date }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 20,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("./../../assets/img/logo-square.png")}
          style={{ width: 70, height: 70 }}
          resizeMode="contain"
        />
        <Image
          source={require("./../../assets/img/obidatti-signup.png")}
          style={{ width: 80, height: 80, marginLeft: 20 }}
          resizeMode="contain"
        />
      </View>
      <BodyTextLight>{introText}</BodyTextLight>
      <View style={{ marginTop: 20, overflow: "hidden" }}>
        <View
          style={{
            borderRadius: 1,
            width: "100%",
            height: 1,
            borderStyle: "dotted",
            borderWidth: 1,
            borderColor: colors.greenText,
          }}
        ></View>
        <HeadingText style={{ textAlign: "center" }}>
          Contribution details
        </HeadingText>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          {data.map((item, index) => (
            <BodyTextLight key={generateId()}>
              {index + 1}.{item.name}
            </BodyTextLight>
          ))}
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <BodyTextBold style={{ opacity: 0.6 }}>MY TIME!</BodyTextBold>
          <BodyTextBold style={{ opacity: 0.6 }}>MY VOTE!</BodyTextBold>
          <BodyTextBold style={{ opacity: 0.6 }}>MY MONEY!</BodyTextBold>
          <BodyTextBold style={{ opacity: 0.6 }}>OBIDATTI 2023 </BodyTextBold>
          <BodyTextBold style={{ opacity: 0.6 }}>LABOUR PARTY</BodyTextBold>
          <BodyTextBold style={{ opacity: 0.6 }}>FORWARD EVER</BodyTextBold>
        </View>
      </View>
    </View>
  );
};

export default SupportDiv;

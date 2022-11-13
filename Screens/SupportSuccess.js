import React from "react";
import { View, Dimensions, Image } from "react-native";
import BodyTextLight from "../components/general/BodyTextLight";
import Card from "../components/general/Card";
import HeadingText from "../components/general/HeadingText";
import Wrapper from "../components/general/Wrapper";
import SupportDiv from "../components/support/SupportDiv";
import { colors } from "../constants/color";

const SupportSuccess = ({ route }) => {
  const { data, date } = route.params;

  return (
    <Wrapper>
      <View
        style={{
          padding: 20,
          flex: 1,
          height: Dimensions.get("window").height,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{ height: Dimensions.get("window").height - 130, padding: 20 }}
        >
          <SupportDiv
            introText="Thank you, your support has been received and it is greatly appreciated"
            date={date}
            data={data}
          />
        </Card>
      </View>
    </Wrapper>
  );
};

export default SupportSuccess;

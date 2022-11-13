import { Link } from "@react-navigation/native";
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import BodyTextLight from "../components/general/BodyTextLight";
import ForwardForever from "../components/general/ForwardForever";
import Header from "../components/general/Header";
import HeadingText from "../components/general/HeadingText";
import LinkText from "../components/general/LinkText";
import Wrapper from "../components/general/Wrapper";
import CallSvg from "../svg/CallSvg";
import EmailSvg from "../svg/EmailSvg";
import MsgSvg from "../svg/MsgSvg";
import WhatsappSvg from "../svg/WhatsappSvg";

const AdvertiseHere = ({ navigation }) => {
  return (
    <Wrapper>
      <Header navigation={navigation} text={"For Ads Placement"} />
      <View style={style.view}>
        <View style={{ padding: 10 }}>
          <View style={{ paddingVertical: 0 }}>
            <HeadingText>Please call:</HeadingText>
            <View style={style.list}>
              <BodyTextLight style={style.text}>+234 8037195954</BodyTextLight>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:+2348037195954`)}
                style={style.align}
              >
                <CallSvg />
              </TouchableOpacity>
            </View>

            <View style={style.list}>
              <BodyTextLight style={style.text}>+234 7037478265</BodyTextLight>
              <TouchableOpacity
                onPress={() => Linking.openURL(`tel:+2347037478265`)}
                style={style.align}
              >
                <CallSvg />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ paddingVertical: 0 }}>
            <HeadingText>Whatsapp:</HeadingText>
            <View style={style.list}>
              <BodyTextLight style={style.text}>+234 7054272380</BodyTextLight>
              <TouchableOpacity
                onPress={() => Linking.openURL(`https://wa.me/+2347054272380`)}
                style={style.align}
              >
                <WhatsappSvg />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ paddingVertical: 0 }}>
            <HeadingText>Or email:</HeadingText>

            <View style={style.list}>
              <BodyTextLight style={style.text}>
                reachus@labourp.ng
              </BodyTextLight>
              <TouchableOpacity
                onPress={() => Linking.openURL(`mailto:reachus@labourp.ng`)}
                style={style.align}
              >
                <MsgSvg />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            source={require("./../assets/img/labour-signup.png")}
            resizeMode="contain"
            style={{
              width: 150,
              height: 120,
              marginBottom: 30,
              marginLeft: 30,
            }}
          />
          <ForwardForever />
        </View>
      </View>
    </Wrapper>
  );
};

export default AdvertiseHere;

const style = StyleSheet.create({
  view: {
    justifyContent: "space-between",
    height: Dimensions.get("window").height - 130,
    // paddingBottom: 100,
  },
  text: {
    paddingVertical: 5,
    opacity: 0.6,
  },
  div: {
    paddingVertical: 5,
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  align: {
    // marginLeft: 30,
  },
});

import React, { useState } from "react";
import {
  View,
  Dimensions,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
} from "react-native";
import Wrapper from "../../components/general/Wrapper";
import InputDiv from "../../components/forms/InputDiv";
import BodyTextLight from "../../components/general/BodyTextLight";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import LinkText from "../../components/general/LinkText";
import Logo from "../../components/images/Logo";
import { nameError } from "./error";
import { setName } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { colors } from "../../constants/color";
import { Checkbox } from "react-native-paper";

function Welcome({ navigation }) {
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);

  const handlSubmit = async () => {
    if (!checked) {
      setError("You have not accepted the privacy policy");
      return;
    }

    if (checked) {
      setError("");
      navigation.navigate("SignupScreen");
    }
  };

  return (
    <Wrapper>
      <View style={styles.view}>
        <Image
          source={require("./../../assets/img/labour-signup.png")}
          resizeMode="contain"
          style={{ width: 150, height: 120 }}
        />
        <View style={{ paddingHorizontal: 20 }}>
          <BodyTextLight
            style={{
              fontSize: 14,
              opacity: 0.6,
            }}
          >
            User Generated Content (UGC): the Labour-P app has provision for
            users to generate and submit UGC. To continue, read and accept our
            UGC statement.
          </BodyTextLight>
        </View>

        <View style={styles.align}>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <View
            style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 3 }}
          >
            <BodyTextLight
              style={{
                fontSize: 14,
                opacity: 0.6,
              }}
            >
              I have read and agreed to the{" "}
            </BodyTextLight>
            <LinkText
              style={{ color: colors.primaryBg }}
              onPress={() => Linking.openURL("http://labourp.ng/ugc.html")}
            >
              User Generated Content Policy
            </LinkText>
            <BodyTextLight
              style={{
                fontSize: 14,
                opacity: 0.6,
              }}
            >
              of Labour-P
            </BodyTextLight>
          </View>
        </View>
        <View>
          <ButtonDiv error={error} onPress={handlSubmit}>
            Get Started
          </ButtonDiv>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: 30,
            }}
          >
            <BodyTextLight>Have an account?</BodyTextLight>
            <TouchableOpacity>
              <BodyTextLight
                style={{ color: colors.primaryBg, paddingLeft: 7 }}
              >
                Login
              </BodyTextLight>
            </TouchableOpacity>
          </View>
        </View>
        <ForwardForever />
      </View>
    </Wrapper>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 30,
    height: Dimensions.get("window").height,
    paddingTop: 50,
  },
  align: {
    alignItems: "flex-start",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 40,
  },
});

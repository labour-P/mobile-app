import React, { useState } from "react";
import { View, Dimensions, StyleSheet, Image, Linking } from "react-native";
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
import Wrapper from "../../components/general/Wrapper";
import { Checkbox } from "react-native-paper";

const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState({
    fisrt_name: "",
    last_name: "",
  });
  const [error, setError] = useState({});
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handlSubmit = async () => {
    const res = nameError(userName, checked, setError);

    if (res !== true) {
      dispatch(setName(userName));
      navigation.navigate("EmailAndPhoneScreen");
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
              onPress={() => Linking.openURL("http://labourp.ng/privacy.html")}
            >
              Privacy Policy
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
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: -40,
          }}
        >
          <HeadingText>Let's get started</HeadingText>
        </View>
        <View>
          <InputDiv
            placeholder={"First Name"}
            value={userName.fisrt_name || ""}
            onChangeText={(fisrt_name) =>
              setUserName((details) => ({ ...details, fisrt_name }))
            }
            error={error.fisrt_name}
            keyboardType="default"
            name={"fisrt_name"}
          />
          <View style={{ marginTop: 10 }}>
            <InputDiv
              // title={"Last Name"}
              placeholder={"Last Name"}
              value={userName.last_name || ""}
              name={"last_name"}
              onChangeText={(last_name) =>
                setUserName((details) => ({ ...details, last_name }))
              }
              error={error.last_name}
              keyboardType="default"
            />
          </View>
        </View>

        <View>
          <ButtonDiv error={error.res} onPress={handlSubmit}>
            Submit
          </ButtonDiv>
        </View>
        <ForwardForever />
      </View>
    </Wrapper>
  );
};

export default Signup;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
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

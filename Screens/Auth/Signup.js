import React, { useState } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
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

const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState({
    fisrt_name: "",
    last_name: "",
  });
  const [error, setError] = useState({});

  const dispatch = useDispatch();

  const handlSubmit = async () => {
    const res = nameError(userName, setError);

    if (res !== true) {
      dispatch(setName(userName));
      navigation.navigate("EmailAndPhoneScreen");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <HeadingText>Let's get you started</HeadingText>
        </View>
        <View style={{ marginTop: 30 }}>
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
        <View>
          <LinkText
            onPress={() => navigation.navigate("SignupScreen")}
            style={{ color: colors.greenText, paddingLeft: 5 }}
          >
            I agree to the terms of service provacy policy
          </LinkText>
        </View>
        ÍAS
        <View>
          Í<ButtonDiv onPress={handlSubmit}>Submit</ButtonDiv>
        </View>
        <ForwardForever />
      </View>
    </SafeAreaView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
    marginTop: 60,
  },
});

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

const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState({
    firstName: "",
    lastName: "",
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
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Logo />
          <HeadingText>Let's get you started</HeadingText>
          <BodyTextLight
            style={{
              textAlign: "center",
              paddingHorizontal: 35,
              marginTop: 20,
            }}
          >
            Looks like you dont have an account, lets create one for you
          </BodyTextLight>
        </View>
        <View>
          <InputDiv
            placeholder={"First Name"}
            value={userName.firstName || ""}
            onChangeText={(firstName) =>
              setUserName((details) => ({ ...details, firstName }))
            }
            error={error.firstName}
            keyboardType="default"
            name={"firstName"}
          />
          <InputDiv
            // title={"Last Name"}
            placeholder={"Last Name"}
            value={userName.lastName || ""}
            name={"lastName"}
            onChangeText={(lastName) =>
              setUserName((details) => ({ ...details, lastName }))
            }
            error={error.lastName}
            keyboardType="default"
          />
        </View>
        <View>
          <LinkText
            onPress={() => navigation.navigate("SignupScreen")}
            style={{ color: "#008325", paddingLeft: 5 }}
          >
            I agree to the terms of service provacy policy
          </LinkText>
        </View>
        <View>
          <ButtonDiv onPress={handlSubmit}>Next</ButtonDiv>
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

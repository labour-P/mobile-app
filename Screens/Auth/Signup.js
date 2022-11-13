import React, { useState } from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";
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
    <Wrapper>
      <View style={styles.view}>
        <Image
          source={require("./../../assets/img/labour-signup.png")}
          resizeMode="contain"
          style={{ width: 150, height: 120 }}
        />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
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
          <ButtonDiv onPress={handlSubmit}>Submit</ButtonDiv>
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
});

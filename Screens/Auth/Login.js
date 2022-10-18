import React, { useState } from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import InputDiv from "../../components/forms/InputDiv";
import PasswordInputDiv from "../../components/forms/PasswordInputDiv";
import BodyTextBold from "../../components/general/BodyTextBold";
import BoldText from "../../components/general/BoldText";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import LinkText from "../../components/general/LinkText";
import Logo from "../../components/images/Logo";
import { login } from "../../redux/actions/auth";
import { useDispatch } from "react-redux";
import { loginError } from "./error";
import { getInitals } from "../../utils/getInitials";
import Wrapper from "../../components/general/Wrapper";
import { colors } from "../../constants/color";

const Login = ({ navigation }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const res = loginError(details, setError);

    if (!res) {
      setLoading(true);
      try {
        await dispatch(login(details));
        setError((errors) => ({ ...errors, res: "" }));
      } catch (error) {
        setError((errors) => ({ ...errors, res: error.message }));
      }
    }
    setLoading(false);
  };

  return (
    <Wrapper>
      <View style={styles.view}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Logo />
          <HeadingText>Welcome Back</HeadingText>
          {/* <BoldText>Benjamin</BoldText> */}
        </View>
        <View>
          <InputDiv
            placeholder={"Username or Email"}
            value={details.email}
            name="email"
            onChangeText={(email) =>
              setDetails((details) => ({ ...details, email }))
            }
            error={error.email}
            keyboardType="default"
          />
          <PasswordInputDiv
            // title={"Password"}
            placeholder={"Password"}
            value={details.password}
            name="password"
            onChangeText={(password) =>
              setDetails((details) => ({ ...details, password }))
            }
            error={error.password}
            keyboardType="password"
          />
        </View>
        <View>
          <ButtonDiv error={error.res} loading={loading} onPress={handleSubmit}>
            Login
          </ButtonDiv>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <BodyTextBold style={{ opacity: 0.8 }}>
              Forgot Password?
            </BodyTextBold>
            <LinkText
              onPress={() => navigation.navigate("RecoverPasswordScreen")}
              style={{ color: colors.greenText, paddingLeft: 5 }}
            >
              click here
            </LinkText>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <BodyTextBold style={{ opacity: 0.8 }}>First time here?</BodyTextBold>
          <LinkText
            onPress={() => navigation.navigate("SignupScreen")}
            style={{ color: colors.greenText, paddingLeft: 5 }}
          >
            Sign up
          </LinkText>
        </View>

        <ForwardForever />
      </View>
    </Wrapper>
  );
};

export default Login;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    paddingVertical: 20,
  },
});

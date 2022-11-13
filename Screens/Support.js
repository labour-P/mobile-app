import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Linking,
  Dimensions,
  TouchableOpacity,
  Image,
  Share,
  Text,
} from "react-native";
import InputDiv from "../components/forms/InputDiv";
import BodyTextLight from "../components/general/BodyTextLight";
import ButtonDiv from "../components/general/ButtonDiv";
import Header from "../components/general/Header";
import Wrapper from "../components/general/Wrapper";
import configs from "../config/config";
import { generateRef } from "../utils/generateRandomString";
import { useSelector, useDispatch } from "react-redux";
import ErrorDiv from "../utils/ErrorDiv";
import { donate } from "../redux/actions/support";
import { colors } from "../constants/color";
import { Link } from "@react-navigation/native";
import HeadingText from "../components/general/HeadingText";
import Logo from "./../components/images/Logo";
import ForwardForever from "../components/general/ForwardForever";
import { Checkbox } from "react-native-paper";
import * as Clipboard from "expo-clipboard";
import { Ionicons } from "@expo/vector-icons";
import CopySvg from "../svg/CopySvg";
import { currentDate, currentTime } from "../utils/getDate";
import { postData } from "../utils/getData";

const Support = ({ navigation }) => {
  const [details, setDetails] = useState({
    acctName: "",
    name: "",
    whatsapp: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const [payNow, setPayNow] = useState(false);
  const [checked, setChecked] = useState({
    paystack: false,
    flutterwave: true,
  });

  const [copy, setCopy] = useState(false);

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { supportLink } = useSelector((state) => state.support);

  const checkError = (amount) => {
    if (!amount) {
      setError((errors) => ({
        ...errors,
        amount: "Please specify an amount you want to give!",
      }));
      return true;
    } else {
      setError((errors) => ({
        ...errors,
        amount: "",
      }));
    }
  };

  const handleClick = () => {
    Linking.openURL(supportLink);
  };

  const copyToClipboard = () => {
    Clipboard.setString("1025629984");
    setCopy(true);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Account number: 1025629984 \nAccount name:  Labour-P Technological Limited \nBank name: United Bank of Africa`,
      });
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopy(false);
    }, 2000);

    return () => clearInterval(timer);
  }, [copy]);

  const checkErr = ({ name, acctName, whatsapp }) => {
    if (!name) {
      setError((error) => ({
        ...error,
        name: "please input a name",
      }));
      return true;
    } else {
      setError((error) => ({ ...error, name: "" }));
    }
    if (!acctName) {
      setError((error) => ({
        ...error,
        acctName: "please input account name",
      }));
      return true;
    } else {
      setError((error) => ({ ...error, acctName: "" }));
    }
    if (!whatsapp) {
      setError((error) => ({
        ...error,
        whatsapp: "please input a valid email or whatsapp number",
      }));
      return true;
    } else {
      setError((error) => ({ ...error, email: "" }));
    }
  };

  const handlSubmit = async () => {
    const err = checkErr(details);
    if (!err) {
      setLoading(true);
      try {
        const data = {
          userid: user._id,
          date: currentDate,
          time: currentTime,
          name: details.name,
          account: details.acctName,
          contact: details.whatsapp,
        };

        await dispatch(donate(data));
        setPayNow(true);
      } catch (error) {
        setError((error) => ({ ...error, res: error.message }));
      }
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      {error.res && <ErrorDiv error={error} setError={setError} />}
      <Header navigation={navigation} text={"Donate"} />
      {payNow ? (
        <View>
          <View style={styles.card}>
            <View style={styles.textDiv}>
              <BodyTextLight>Bank name</BodyTextLight>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Image
                  source={require("./../assets/img/uba.png")}
                  style={{ width: 60, height: 60, marginRight: 15 }}
                  resizeMode={"contain"}
                />
                <HeadingText style={styles.bold}>
                  United Bank of Africa
                </HeadingText>
              </View>
            </View>
            <View style={{ ...styles.textDiv, ...styles.flexed }}>
              <View>
                <BodyTextLight>Account number</BodyTextLight>
                <HeadingText style={styles.bold}>1025629984</HeadingText>
              </View>
              <TouchableOpacity
                style={{ ...styles.flexed, ...styles.copy }}
                onPress={copyToClipboard}
              >
                <CopySvg color={"#fff"} />
                <BodyTextLight style={{ color: "white", fontSize: 9 }}>
                  Copy
                </BodyTextLight>
              </TouchableOpacity>
            </View>
            <View style={styles.textDiv}>
              <BodyTextLight>Account name</BodyTextLight>
              <HeadingText style={styles.bold}>
                Labour-P Technological Limited
              </HeadingText>
            </View>
          </View>
          <View style={styles.btn}>
            <ButtonDiv onPress={onShare}>Share Details</ButtonDiv>
          </View>
          {copy === true && (
            <View style={styles.copyDiv}>
              <BodyTextLight style={styles.copyText}>Copied!</BodyTextLight>
            </View>
          )}
        </View>
      ) : (
        <View style={{ marginTop: 30 }}>
          <View style={{ paddingHorizontal: 20 }}>
            <HeadingText style={{ textAlign: "center", marginBottom: 30 }}>
              Let's Move Nigeria Forward!
            </HeadingText>
            <BodyTextLight style={{ textAlign: "center" }}>
              Thank you immensely for your patriotic contributions towards the
              building of a functional prosperous new Nigeria.
            </BodyTextLight>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginTop: 20,
              }}
            >
              <Logo />
              <ForwardForever />
              <BodyTextLight style={{ color: "#8F9098", marginTop: 20 }}>
                To enable us send you a special{" "}
                <Text style={{ color: "#71727A" }}>THANK YOU</Text> card, please
                oblige us the following details:
              </BodyTextLight>
            </View>
            <View>
              <View style={{ marginVertical: 20 }}>
                <InputDiv
                  placeholder={"Your Name or Company Name"}
                  keyboardType="default"
                  value={details.name}
                  onChangeText={(name) =>
                    setDetails((details) => ({ ...details, name }))
                  }
                  error={error.name}
                  name={"name"}
                />
              </View>

              <View style={{ marginVertical: 10 }}>
                <InputDiv
                  placeholder={"Name of the account you're paying from"}
                  keyboardType="default"
                  value={details.acctName}
                  onChangeText={(acctName) =>
                    setDetails((details) => ({ ...details, acctName }))
                  }
                  error={error.acctName}
                  name={"acctName"}
                />
              </View>
              <View style={{ marginVertical: 10 }}>
                <InputDiv
                  placeholder={"Email or WhatsApp number"}
                  keyboardType="default"
                  value={details.whatsapp}
                  onChangeText={(whatsapp) =>
                    setDetails((details) => ({ ...details, whatsapp }))
                  }
                  error={error.whatsapp}
                  name={"whatsapp"}
                />
              </View>
            </View>
          </View>
          <View style={styles.btn}>
            <ButtonDiv loading={loading} onPress={handlSubmit}>
              Donate
            </ButtonDiv>
          </View>
        </View>
      )}
    </Wrapper>
  );
};

export default Support;

const styles = StyleSheet.create({
  video: {
    width: Dimensions.get("window").width,
    heigth: 300,
  },
  btn: {
    backgroundColor: "#f3a627",
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  img: {
    width: "95%",
    height: 25,
  },
  selectedBox: {
    borderWidth: 1,
    borderColor: "#8F9098",
    borderRadius: 10,
    width: "45%",
    // height: 100,
    justifyContent: "flex-start",
    padding: 5,
  },
  unselectedBox: {
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: 10,
    width: "45%",
    // height: 100,
    justifyContent: "flex-start",
    padding: 5,
  },
  selectBoxDiv: {
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginTop: 20,
  },
  checkbox: {
    alignSelf: "flex-end",
  },
  card: {
    backgroundColor: "rgba(180, 248, 200, 1)",
    paddingVertical: 20,
    marginHorizontal: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    borderRadius: 13,
    // opacity: 0.5,
  },
  textDiv: {
    paddingVertical: 10,
  },
  flexed: {
    flexDirection: "row",
  },
  copy: {
    marginLeft: 25,
    paddingVertical: 0,
    backgroundColor: "#1CCB00",
    paddingHorizontal: 10,
    borderRadius: 18,
    height: 20,
    alignSelf: "center",
    height: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    marginVertical: 40,
  },
  back: {
    marginTop: 40,
    fontSize: 17,
    color: "#3300cc",
  },
  copyDiv: {
    height: 30,
    width: 60,
    backgroundColor: "#000",
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    position: "absolute",
    bottom: 100,
    left: Dimensions.get("window").width / 2.4,
  },
  copyText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 10,
  },
  img: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  ads: {
    width: "90%",
    marginHorizontal: 20,
    height: 100,
    borderRadius: 10,
  },
});

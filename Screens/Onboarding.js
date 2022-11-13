import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Image } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import BodyTextLight from "../components/general/BodyTextLight";
import HeadingText from "../components/general/HeadingText";
import { LinearGradient } from "expo-linear-gradient";

const OnboardingScreen = ({ navigation }) => {
  const onboardingRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onboardingRef.current.goToPage(1, true);
    }, 4000);
    return () => timer;
  }, [onboardingRef]);

  useEffect(() => {
    const timer = setTimeout(() => {
      onboardingRef.current.goToPage(2, true);

      return () => timer;
    }, 8000);

    return () => timer;
  }, [onboardingRef]);

  return (
    <Onboarding
      ref={onboardingRef}
      onDone={() => navigation.navigate("LoginScreen")}
      bottomBarColor="#001706"
      onSkip={() => navigation.navigate("LoginScreen")}
      pages={[
        {
          backgroundColor: "#009245",
          image: <View></View>,
          title: (
            <LinearGradient
              colors={["#009245", "#001706"]}
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: -100,
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={styles.imgDiv}>
                  <Image
                    style={styles.img}
                    source={require("../assets/img/ObiDatti.png")}
                    resizeMode="contain"
                  />
                </View>
                <BodyTextLight style={styles.text}>
                  "Datti and I, are not running for President. Nigerians, are
                  running for President, through us."
                </BodyTextLight>
                <HeadingText style={styles.HeadingText}>-Peter Obi</HeadingText>
              </View>
            </LinearGradient>
          ),
          subtitle: "",
        },
        {
          backgroundColor: "#009245",
          image: <View></View>,
          title: (
            <LinearGradient
              colors={["#009245", "#001706"]}
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: -100,
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={styles.imgDiv}>
                  <Image
                    style={styles.img}
                    source={require("../assets/img/Datti.png")}
                    resizeMode="contain"
                  />
                </View>
                <BodyTextLight style={styles.text}>
                  "What my principal Mr. Obi and I, are bringing is an air of
                  freedom. A Nigeria, where our tomorrow is better than today
                  and our today better than yesterday."
                </BodyTextLight>
                <HeadingText style={styles.HeadingText}>
                  -Datti Baba Ahmed
                </HeadingText>
              </View>
            </LinearGradient>
          ),
          subtitle: "",
        },
        {
          backgroundColor: "#009245",
          image: <View></View>,
          title: (
            <LinearGradient
              colors={["#009245", "#001706"]}
              style={{
                flex: 1,
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginTop: -100,
              }}
            >
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View style={styles.imgDiv}>
                  <Image
                    style={styles.img}
                    source={require("../assets/img/Obi-splash.png")}
                    resizeMode="contain"
                  />
                </View>
                <BodyTextLight style={styles.text}>
                  "I agree completely with one of my scholar friends who says
                  "employment is one of the most equitable means of income
                  distribution." We must take the gathering of data for the
                  unemployed and the underemployed in any society very
                  seriously.”
                </BodyTextLight>
                <HeadingText style={styles.HeadingText}>-Peter Obi</HeadingText>
              </View>
            </LinearGradient>
          ),
          subtitle: "",
        },
      ]}
    />
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  imgDiv: {
    width: 300,
    height: 300,
  },
  img: {
    width: "100%",
    height: "100%",
  },
  text: {
    paddingHorizontal: 20,
    fontFamily: "italic",
    marginBottom: 40,
    color: "#fff",
    paddingHorizontal: 30,
    textAlign: "center",
  },
  HeadingText: {
    color: "#fff",
  },
});

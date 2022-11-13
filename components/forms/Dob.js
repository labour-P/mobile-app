import React, { useEffect, useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import BodyTextBold from "../general/BodyTextBold";
import { Feather } from "@expo/vector-icons";
import ErrorText from "../general/ErrorText";
import { colors } from "../../constants/color";
import { Calendar } from "react-native-calendario";

const Dob = (props) => {
  const [inputStyle, setInputStyle] = useState({});
  const [visible, setVisible] = useState(false);

  const handleVisble = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    if (props.value) {
      setInputStyle({
        ...styles.edit,
      });
    }
  }, [props.value]);

  useEffect(() => {
    setInputStyle({
      ...styles.input,
    });
  }, []);

  useEffect(() => {
    const inputTimer = setTimeout(() => {
      if (props.error) {
        setInputStyle({
          ...styles.err,
        });
      } else {
        setInputStyle({
          ...styles.input,
        });
      }
    }, 1000);

    return () => clearTimeout(inputTimer);
  }, [props.value, props.error]);

  return (
    <View style={styles.div}>
      <BodyTextBold style={{ marginBottom: 5 }}>{props.title}</BodyTextBold>
      <View style={styles.inputDiv}>
        <TextInput
          style={inputStyle}
          selectionColor={colors.primaryBg}
          autoCorrect={false}
          autoCapitalize="none"
          importantForAutofill={"no"}
          {...props}
        />
        {/* <Calendar
          onChange={(range) => console.log(range)}
          minDate={new Date(2018, 3, 20)}
          startDate={new Date(1800, 3, 30)}
          endDate={new Date(2018, 4, 5)}
          theme={{
            activeDayColor: {},
            monthTitleTextStyle: {
              color: "#6d95da",
              fontWeight: "300",
              fontSize: 16,
            },
            emptyMonthContainerStyle: {},
            emptyMonthTextStyle: {
              fontWeight: "200",
            },
            weekColumnsContainerStyle: {},
            weekColumnStyle: {
              paddingVertical: 10,
            },
            weekColumnTextStyle: {
              color: "#b6c1cd",
              fontSize: 13,
            },
            nonTouchableDayContainerStyle: {},
            nonTouchableDayTextStyle: {},
            startDateContainerStyle: {},
            endDateContainerStyle: {},
            dayContainerStyle: {},
            dayTextStyle: {
              color: "#2d4150",
              fontWeight: "200",
              fontSize: 15,
            },
            dayOutOfRangeContainerStyle: {},
            dayOutOfRangeTextStyle: {},
            todayContainerStyle: {},
            todayTextStyle: {
              color: "#6d95da",
            },
            activeDayContainerStyle: {
              backgroundColor: "#6d95da",
            },
            activeDayTextStyle: {
              color: "white",
            },
            nonTouchableLastMonthDayTextStyle: {},
          }}
        /> */}
        <View onPress={handleVisble}>
          <Feather
            style={styles.icon}
            name="calendar"
            size={24}
            color={colors.primaryGray}
          />
        </View>
      </View>
      {props.error && <ErrorText>{props.error}</ErrorText>}
    </View>
  );
};

export default Dob;

const styles = StyleSheet.create({
  input: {
    width: Dimensions.get("window").width - 30,
    height: 49,
    fontSize: 16,
    fontFamily: "normal",
    borderColor: colors.primaryGray,
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 15,
    color: colors.darkText,
  },
  err: {
    width: Dimensions.get("window").width - 30,
    height: 49,
    fontSize: 16,
    fontFamily: "normal",
    borderColor: colors.error,
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 15,
    color: colors.darkText,
  },
  edit: {
    color: "#fff",
    width: Dimensions.get("window").width - 30,
    height: 49,
    fontSize: 16,
    fontFamily: "normal",
    borderColor: colors.primaryBg,
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 15,
    color: colors.darkText,
  },
  div: {
    marginVertical: 8,
  },
  inputDiv: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  icon: {
    marginLeft: -40,
  },
});

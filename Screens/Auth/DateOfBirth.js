import React, { useEffect, useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import CalendarPicker from "react-native-calendar-picker";
import BodyTextBold from "../../components/general/BodyTextBold";
import moment from "moment";
import BodyTextLight from "../../components/general/BodyTextLight";
import Dob from "../../components/forms/Dob";
import Logo from "../../components/images/Logo";
import { dobError } from "./error";
import { useDispatch } from "react-redux";
import { setDob } from "../../redux/actions/auth";

const DateOfBirth = ({ navigation }) => {
  const [calendar, setCalendar] = useState("");
  const [error, setError] = useState(false);
  const [date, setDate] = useState({
    formattedDate: "",
    dateString: "",
  });

  const dispatch = useDispatch();

  const openCalendar = () => {
    setCalendar(true);
  };

  const handleDatePick = (value) => {
    const formattedDate = moment(value).utc(true).format("YYYY/MMMM/DD");

    setDate((dates) => ({
      ...dates,
      formattedDate,
      dateString: value,
    }));
    setCalendar(false);
  };

  const getAge = (birthDate) => {
    const _date = new Date(birthDate);
    const newDate = _date.toISOString().slice(0, 10);
    return Math.floor((new Date() - new Date(newDate).getTime()) / 3.15576e10);
  };

  const handleSubmit = async () => {
    const age = getAge(date.dateString);

    const res = dobError(date, age, setError);

    if (res !== true) {
      dispatch(setDob(date.formattedDate));
      navigation.navigate("UsernameAndPasswordScreen");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view}>
        <Logo />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <HeadingText style={{ fontSize: 18 }}>
            Please lets have your date of birth
          </HeadingText>
          <View>
            {calendar && (
              <View style={styles.calendarDiv}>
                <View style={styles.calendarContainer}>
                  <CalendarPicker
                    onDateChange={(value) => handleDatePick(value)}
                    allowRangeSelection={true}
                    allowBackwardRangeSelect={true}
                    previousTitleStyle={{
                      color: "#3300CC",
                      fontFamily: "bold",
                    }}
                    nextTitleStyle={{ color: "#3300CC", fontFamily: "bold" }}
                    selectedDayColor={"#3300cc"}
                    selectedDayTextColor={"#3300cc"}
                  />
                  <TouchableOpacity onPress={() => setCalendar(false)}>
                    <BodyTextBold style={styles.cancelBtn}>Cancel</BodyTextBold>
                  </TouchableOpacity>
                </View>
              </View>
            )}

            <TouchableOpacity
              style={{
                justifyContent: "center",
                ...styles.hide,
              }}
              onPress={openCalendar}
            >
              <Dob
                placeholder="Date of birth"
                editable={false}
                value={date.formattedDate}
                onChangeText={setDate}
                error={error}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <ButtonDiv onPress={handleSubmit}>Next</ButtonDiv>
        </View>

        <ForwardForever />
      </View>
    </SafeAreaView>
  );
};

export default DateOfBirth;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
    marginTop: Dimensions.get("window").height / 10,
  },
  container: {
    backgroundColor: "#ffffff",
    height: "100%",
    paddingTop: 40,
  },
  form: {
    marginTop: Dimensions.get("window").height / 20,
  },
  bodyText: {
    paddingLeft: 20,
    marginBottom: 5,
  },
  err: {
    color: "red",
    marginTop: Dimensions.get("window").height / -30,
    textAlign: "right",
    paddingRight: 30,
  },
  hide: {
    zIndex: -100,
  },
  btn: {
    marginTop: Dimensions.get("window").fontScale * 40,
    zIndex: -100,
  },
  placeholderStyle: {
    color: "#848484",
    fontFamily: "normal",
    fontSize: 14,
  },
  iconStyle: {
    height: 30,
    width: 30,
  },
  selectedTextStyle: {
    fontFamily: "normal",
    fontSize: 14,
    color: "#000",
  },
  calendarDiv: {
    // top: 40,
    // zIndex:100
    height: 250,
    width: Dimensions.get("window").width,
  },
  calendarContainer: {
    position: "absolute",
    zIndex: 100,
    backgroundColor: "white",
    width: "95%",
    height: 300,
    top: 20,
    left: 10,
    right: 10,
    bottom: 0,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
    height: 390,
    borderRadius: 10,
  },
  inputSearchStyle: {
    borderRadius: 10,
  },
  cancelBtn: {
    color: "red",
    textAlign: "right",
    marginTop: 5,
    marginRight: 30,
    fontWeight: "bold",
  },
});

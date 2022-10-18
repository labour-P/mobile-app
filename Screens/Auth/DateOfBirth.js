import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import CalendarPicker from "react-native-calendar-picker";
import BodyTextBold from "../../components/general/BodyTextBold";
import moment from "moment";
import Dob from "../../components/forms/Dob";
import Logo from "../../components/images/Logo";
import { ageError } from "./error";
import { useDispatch } from "react-redux";
import { setAge } from "../../redux/actions/auth";
import CalendarSvg from "../../svg/CalendarSvg";
import Wrapper from "../../components/general/Wrapper";
import { colors } from "../../constants/color";

const DateOfBirth = ({ navigation }) => {
  const [calendar, setCalendar] = useState("");
  const [error, setError] = useState();
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
    let newDate;
    try {
      newDate = _date.toISOString().slice(0, 10);
    } catch (e) {
      setError("Please select a date of birth");
    }
    return Math.floor((new Date() - new Date(newDate).getTime()) / 3.15576e10);
  };

  const handleSubmit = async () => {
    const age = getAge(date.dateString);

    const res = ageError(date, age, setError);

    if (res !== true) {
      dispatch(setAge(date.formattedDate));
      navigation.navigate("UsernameAndPasswordScreen");
    }
  };

  return (
    <Wrapper>
      <View style={styles.view}>
        <CalendarSvg />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeadingText>Please lets have your date of birth</HeadingText>
          <View>
            {calendar && (
              <View style={styles.calendarDiv}>
                <View style={styles.calendarContainer}>
                  <CalendarPicker
                    onDateChange={(value) => handleDatePick(value)}
                    allowRangeSelection={true}
                    allowBackwardRangeSelect={true}
                    previousTitleStyle={{
                      color: colors.primaryBg,
                      fontFamily: "bold",
                    }}
                    nextTitleStyle={{
                      color: colors.primaryBg,
                      fontFamily: "bold",
                    }}
                    selectedDayColor={colors.primaryBg}
                    selectedDayTextColor={colors.primaryBg}
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
    </Wrapper>
  );
};

export default DateOfBirth;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    paddingVertical: 30,
  },
  container: {
    backgroundColor: colors.white,
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
    color: colors.error,
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
    color: colors.darkText,
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
    color: colors.darkText,
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
    backgroundColor: colors.white,
    width: "95%",
    height: 300,
    top: 20,
    left: 10,
    right: 10,
    bottom: 0,
    paddingHorizontal: 10,
    shadowColor: colors.darkText,
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
    color: colors.error,
    textAlign: "right",
    marginTop: 5,
    marginRight: 30,
    fontWeight: "bold",
  },
});

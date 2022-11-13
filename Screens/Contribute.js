import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import BodyTextBold from "../components/general/BodyTextBold";
import BodyTextLight from "../components/general/BodyTextLight";
import Header from "../components/general/Header";
import Wrapper from "../components/general/Wrapper";
import { colors } from "../constants/color";
import { Ionicons } from "@expo/vector-icons";
import InputDiv from "../components/forms/InputDiv";
import ButtonDiv from "../components/general/ButtonDiv";
import { stateError } from "./Auth/error";
import { useDispatch, useSelector } from "react-redux";
import { currentTime } from "../utils/getDate";
import { makeContribution } from "../redux/actions/support";
import ErrorDiv from "../utils/ErrorDiv";
import { generateId } from "../utils/generateRandomString";

const Contribute = ({ navigation }) => {
  const contributions = [
    {
      id: 1,
      name: "Car",
    },
    {
      id: 2,
      name: "Bus",
    },
    {
      id: 3,
      name: "Trucks",
    },
    {
      id: 4,
      name: "Clothing items",
    },
    {
      id: 5,
      name: "Printed materials",
    },
    {
      id: 6,
      name: "Volunteers",
    },
  ];

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [myContributions, setMyContributions] = useState([]);
  const [others, setOthers] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const handlePress = (selected) => {
    const isAdded = myContributions.filter((item) => item.id === selected.id);

    if (!isAdded.length) {
      setMyContributions((items) => [...items, selected]);
    }
  };

  const removeItem = (selected) => {
    const newItems = myContributions.filter((item) => item.id !== selected.id);

    setMyContributions(newItems);
  };

  const handleError = (myContributions) => {
    if (!myContributions.length) {
      stateError((errors) => ({ ...errors, res: "please select an item" }));
      return true;
    }
  };

  const handleSubmit = async () => {
    const res = handleError(myContributions);

    if (!res) {
      setLoading(true);
      try {
        const data = {
          userid: user._id,
          type: myContributions,
          location: `${user.state} - ${user.lga}`,
          date: new Date(),
          time: currentTime,
          other: others,
        };

        await dispatch(makeContribution(data));
        navigation.navigate("SupportSuccessScreen", {
          data: data.type,
          date: data.date,
        });
        setMyContributions([]);
      } catch (error) {
        stateError((errors) => ({ ...errors, res: error.message }));
      }
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      {error.res && <ErrorDiv error={error} setError={setError} />}
      <Header navigation={navigation} text={"Support"} />
      <BodyTextLight style={{ padding: 20, opacity: 0.6 }}>
        We appreciate whatever contributions you can make to the OBIDATTI
        campaign 2023
      </BodyTextLight>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          paddingHorizontal: 15,
        }}
      >
        {contributions.map((item) => (
          <TouchableOpacity
            key={generateId()}
            style={{
              paddingHorizontal: 20,
              paddingVertical: 7,
              borderColor: colors.primaryGray,
              borderWidth: 1,
              margin: 5,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => handlePress(item)}
          >
            <BodyTextLight>{item.name}</BodyTextLight>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            borderColor: colors.primaryGray,
            borderWidth: 1,
            width: "90%",
            borderRadius: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              paddingHorizontal: 15,
              paddingVertical: 10,
            }}
          >
            {myContributions.length ? (
              myContributions.map((item) => (
                <TouchableOpacity
                  key={generateId()}
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 7,
                    borderColor: colors.primaryGray,
                    borderWidth: 1,
                    margin: 5,
                    borderRadius: 25,
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                  }}
                  onPress={() => removeItem(item)}
                >
                  <BodyTextLight>{item.name}</BodyTextLight>
                  <Ionicons
                    name="close"
                    size={20}
                    color={colors.darkText}
                    style={{ marginTop: 3 }}
                  />
                </TouchableOpacity>
              ))
            ) : (
              <BodyTextLight style={{ opacity: 0.5, padding: 10 }}>
                You have not selected an item
              </BodyTextLight>
            )}
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <BodyTextBold>Other contributions</BodyTextBold>
          <InputDiv
            value={others}
            name={"others"}
            onChangeText={setOthers}
            placeholder="Other"
            keyboardType="default"
          />
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <ButtonDiv loading={loading} onPress={handleSubmit} error={error.res}>
          Submit
        </ButtonDiv>
      </View>
    </Wrapper>
  );
};

export default Contribute;

const styles = StyleSheet.create({});

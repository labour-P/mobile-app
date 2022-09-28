import React, { useEffect, useState } from "react";
import { View, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import InputDiv from "../../components/forms/InputDiv";
import SelectInput from "../../components/forms/SelectInput";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import LinkText from "../../components/general/LinkText";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/actions/auth";
import { stateError } from "./error";

const State = ({ navigation }) => {
  const [details, setDetails] = useState({
    state: "",
    lga: "",
    ward: "",
    pollingUnit: "",
  });
  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const state = [
    {
      value: "Abia",
      label: "Abia",
    },
    {
      value: "Abuja",
      label: "Abuja",
    },
    {
      value: "Benue",
      label: "Benue",
    },
  ];

  const handleSubmit = async () => {
    const res = stateError(details, setError);

    if (res !== true) {
      dispatch(setLocation(details));
      navigation.navigate("DateOfBirthScreen");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.view}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <HeadingText style={{ fontSize: 18 }}>
            State and L.G.A area where you reside
          </HeadingText>
        </View>
        <View>
          <SelectInput
            placeholder={"State of residence"}
            data={state}
            value={details.state || ""}
            name={"state"}
            onChange={(item) =>
              setDetails((details) => ({ ...details, state: item.value }))
            }
            error={error.state}
          />
          <SelectInput
            placeholder={"Local Government Area"}
            data={state}
            value={details.lga || ""}
            name={"lga"}
            onChange={(item) =>
              setDetails((details) => ({ ...details, lga: item.value }))
            }
            error={error.lga}
          />
          <SelectInput
            placeholder={"Voting Ward"}
            data={state}
            value={details.ward || ""}
            name={"ward"}
            onChange={(item) =>
              setDetails((details) => ({ ...details, ward: item.value }))
            }
            error={error.ward}
          />
          <SelectInput
            placeholder={"Polling Unit"}
            data={state}
            value={details.pollingUnit || ""}
            name={"pollingUnit"}
            onChange={(item) =>
              setDetails((details) => ({ ...details, pollingUnit: item.value }))
            }
            error={error.pollingUnit}
          />
        </View>

        <View>
          <ButtonDiv onPress={handleSubmit}>Next</ButtonDiv>
        </View>

        <ForwardForever />
      </View>
    </SafeAreaView>
  );
};

export default State;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 10,
    marginTop: 60,
  },
});

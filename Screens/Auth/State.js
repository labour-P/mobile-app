import React, { useEffect, useState } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import SelectInput from "../../components/forms/SelectInput";
import ButtonDiv from "../../components/general/ButtonDiv";
import ForwardForever from "../../components/general/ForwardForever";
import HeadingText from "../../components/general/HeadingText";
import { useDispatch } from "react-redux";
import { setLocation } from "../../redux/actions/auth";
import { stateError } from "./error";
import { nigeria } from "./../../model/state";
import AddressSvg from "../../svg/AddressSvg";
import Wrapper from "../../components/general/Wrapper";
import BodyTextLight from "../../components/general/BodyTextLight";

const State = ({ navigation }) => {
  const [details, setDetails] = useState({
    state: "",
    lga: "",
    ward: "",
    pollingUnit: "",
  });
  const [error, setError] = useState({});
  const [states, setStates] = useState([]);
  const [lgas, setLgas] = useState([]);
  const [wards, setWards] = useState([]);
  const [units, setUnits] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const myState = nigeria.map((state) => {
      return {
        label: state.name,
        value: state.name,
      };
    });
    setStates(myState);

    return () => myState;
  }, [setStates]);

  useEffect(() => {
    const myLga = nigeria.filter((state) => {
      if (state.name === details.state) {
        let newLga = state.lgas.map((lga) => {
          return {
            value: lga.name,
            label: lga.name,
          };
        });

        setLgas(newLga);
      }
    });

    return () => myLga;
  }, [details.state]);

  useEffect(() => {
    const myWard = nigeria.filter((state) => {
      if (state.name === details.state) {
        state.lgas.map((lga) => {
          if (lga.name === details.lga) {
            const newWard = lga.wards.map((ward) => {
              return {
                label: ward.name,
                value: ward.name,
              };
            });
            setWards(newWard);
          }
        });
      }
    });

    return () => myWard;
  }, [details.lga, details.state]);

  useEffect(() => {
    const myUnit = nigeria.filter((state) => {
      if (state.name === details.state) {
        state.lgas.map((lga) => {
          if (lga.name === details.lga) {
            lga.wards.map((ward) => {
              if (ward.name === details.ward) {
                const newUnits = ward.units.map((unit) => {
                  return {
                    label: unit.name,
                    value: unit.name,
                  };
                });
                setUnits(newUnits);
              }
            });
          }
        });
      }
    });

    return () => myUnit;
  }, [details.lga, details.state, details.ward]);

  const handleSubmit = async () => {
    const res = stateError(details, setError);

    if (res !== true) {
      dispatch(setLocation(details));
      navigation.navigate("DateOfBirthScreen");
    }
  };

  return (
    <Wrapper>
      <View style={styles.view}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{ width: 150, height: 120 }}
            source={require("./../../assets/img/obidatti-signup.png")}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeadingText>Let’s get to know you better</HeadingText>
          <BodyTextLight
            style={{
              marginTop: 10,
              textAlign: "center",
              paddingHorizontal: 20,
              fontSize: 14,
              opacity: 0.6,
            }}
          >
            Please provide the following details; just click and select.
          </BodyTextLight>
        </View>
        <View>
          <SelectInput
            placeholder={"State of residence"}
            data={states}
            value={details.state || ""}
            name={"state"}
            onChange={(item) =>
              setDetails((details) => ({ ...details, state: item.value }))
            }
            error={error.state}
          />
          <SelectInput
            placeholder={"Local Government Area"}
            data={lgas}
            value={details.lga || ""}
            name={"lga"}
            onChange={(item) =>
              setDetails((details) => ({ ...details, lga: item.value }))
            }
            error={error.lga}
          />
          <SelectInput
            placeholder={"Voting Ward"}
            data={wards}
            value={details.ward || ""}
            name={"ward"}
            onChange={(item) =>
              setDetails((details) => ({ ...details, ward: item.value }))
            }
            error={error.ward}
          />
          <SelectInput
            placeholder={"Polling Unit"}
            data={units}
            value={details.pollingUnit || ""}
            name={"pollingUnit"}
            onChange={(item) =>
              setDetails((details) => ({
                ...details,
                pollingUnit: item.value,
              }))
            }
            error={error.pollingUnit}
          />
        </View>

        <View>
          <ButtonDiv onPress={handleSubmit}>Next</ButtonDiv>
        </View>

        <ForwardForever />
      </View>
    </Wrapper>
  );
};

export default State;

const styles = StyleSheet.create({
  view: {
    alignItems: "center",
    flex: 1,
    justifyContent: "space-between",
    height: Dimensions.get("window").height,
    paddingVertical: 15,
  },
});

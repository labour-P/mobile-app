import React, { useState, useEffect } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import BodyTextLight from "./BodyTextLight";
import { colors } from "../../constants/color";
import { useNavigation } from "@react-navigation/native";
import { nigeria } from "./../../model/state";
import SelectInput from "../forms/SelectInput";
import ButtonDiv from "./ButtonDiv";
import PostButton from "./PostButton";

const FilterModal = (props) => {
  const navigation = useNavigation();

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
  }, []);

  const handleFilter = () => {
    if (details.state && !details.lga && !details.ward) {
      const newPosts = props.posts.filter((post) => {
        const location = post.location.split("-")[0];
        props.setCurrentLocation([details.state]);

        return (
          location.toLowerCase().trim() === details.state.toLowerCase().trim()
        );
      });
      props.setPosts(newPosts);
      props.setModalVisible(false);
    }

    if (details.state && details.lga && !details.ward) {
      const newPosts = props.posts.filter((post) => {
        const location =
          post.location.split("-")[0] + "-" + post.location.split("-")[1];
        props.setCurrentLocation([details.state, details.lga]);
        const selectedLga = details.state.trim() + "-" + details.lga.trim();
        return location.toLowerCase().trim() === selectedLga.toLowerCase();
      });
      props.setPosts(newPosts);
      props.setModalVisible(false);
    }

    if (details.state && details.lga && details.ward) {
      const newPosts = props.posts.filter((post) => {
        const location =
          post.location.split("-")[0] +
          "-" +
          post.location.split("-")[1] +
          "-" +
          post.location.split("-")[2];
        const selectedWard =
          details.state.trim() +
          "-" +
          details.lga.trim() +
          "-" +
          details.ward.trim();

        props.setCurrentLocation([details.state, details.lga, details.ward]);
        return location.toLowerCase().trim() === selectedWard.toLowerCase();
      });
      props.setPosts(newPosts);
      props.setModalVisible(false);
    }
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View
              style={{
                alignItems: "flex-end",
                justifyContent: "flex-end",
                width: "100%",
                marginBottom: 20,
                marginRight: -30,
              }}
            >
              <TouchableOpacity onPress={() => props.setModalVisible(false)}>
                <Ionicons
                  name="close-circle-outline"
                  size={30}
                  color={colors.black}
                  style={{ opacity: 0.6 }}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.inputDiv}>
              <SelectInput
                placeholder={"State of residence"}
                data={states}
                value={details.state || ""}
                name={"state"}
                onChange={(item) =>
                  setDetails((details) => ({ ...details, state: item.value }))
                }
                error={error.state}
                style={styles.input}
                title={"Select state"}
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
                title={"L.G.A"}
                style={styles.input}
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
                style={styles.input}
                title={"Ward"}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 30,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 49,
                    width: "50%",
                    borderRadius: 11,
                    backgroundColor: colors.primaryBg,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={handleFilter}
                >
                  <BodyTextLight>Apply Filter</BodyTextLight>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    width: "100%",
    height: 300,
    backgroundColor: "transparent",
  },
  modalView: {
    marginLeft: 5,
    backgroundColor: "#fff",
    padding: 35,
    alignItems: "center",
    justifyContent: "flex-start",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "90%",
    height: "90%",
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: Dimensions.get("window").width - 60,
    height: 55,
    fontSize: 16,
    fontFamily: "normal",
    borderColor: colors.primaryGray,
    borderWidth: 1,
    borderRadius: 11,
    paddingLeft: 15,
    color: colors.darkText,
    textTransform: "uppercase",
    marginBottom: 10,
  },
});

export default FilterModal;

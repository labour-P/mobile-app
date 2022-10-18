import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../../constants/color";
import BodyTextLight from "../general/BodyTextLight";

const Filter = () => {
  const [selected, setSelected] = useState("latest");

  const filters = [
    {
      id: 1,
      title: "latest",
    },
    {
      id: 2,
      title: "top",
    },
    {
      id: 3,
      title: "people",
    },
    {
      id: 4,
      title: "tags",
    },
  ];

  return (
    <View style={styles.div}>
      {filters.map((filter) => (
        <View
          key={filter.id}
          style={
            selected === filter.title ? styles.selected : styles.unselected
          }
        >
          <TouchableOpacity onPress={() => setSelected(filter.title)}>
            <BodyTextLight style={styles.filterText}>
              {filter.title}
            </BodyTextLight>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default Filter;

const styles = StyleSheet.create({
  div: {
    flexDirection: "row",
    borderBottomColor: colors.primaryGray,
    borderBottomWidth: 1,

    marginTop: -5,
  },
  filterText: {
    fontSize: 16,
    textTransform: "capitalize",
  },
  selected: {
    borderBottomColor: colors.greenText,
    borderBottomWidth: 3,
    width: "25%",
    flexDirection: "row",
    width: "25%",
    justifyContent: "center",
    paddingVertical: 15,
  },
  unselected: {
    flexDirection: "row",
    width: "25%",
    justifyContent: "center",
    paddingVertical: 15,
  },
});

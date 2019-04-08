import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={Styles.BtnStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};
const Styles = StyleSheet.create({
  BtnStyle: {
    marginTop: 35,
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderColor: "#fff"
  }
});

export default Button;

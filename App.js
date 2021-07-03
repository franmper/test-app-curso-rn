import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions, useWindowDimensions } from "react-native";
import { flatListArray } from "./array";

const altoStatusBar = StatusBar.currentHeight;

export default function App(props) {
  const dimen = useWindowDimensions()

  const [variable, setVariable] = useState("hola");
  const [width, setWidth] = useState(dimen.width);
  const [visible, setVisible] = useState(false);


  const funcion = () => {
    setVariable("hola 2");
  };

  // useEffect(() => {
  //   console.log(Dimensions.get("window"));
  //   return () => console.log("desmontado");
  // }, []);

  useEffect(() => {
    console.log(dimen);
    setWidth(dimen.width);
  }, [dimen]);

  useEffect(() => {
    console.log("cambio variable ", variable);
    return () => console.log("desmontado");
  }, [variable]);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{variable}</Text>
      <View style={[styles.box, {width: width * 0.8}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: altoStatusBar,
    flex: 1,
    backgroundColor: "white",
  },
  textStyle: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "black",
    margin: 20,
    textDecorationLine: "underline",
    textTransform: "uppercase",
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
    shadowColor: "red",
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 2,
    alignSelf: "center",
  },
});

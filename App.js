import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Pressable, SafeAreaView, TextInput } from "react-native";
import { flatListArray } from "./array";

export default function App(props) {
  const [variable, setVariable] = useState("");

  const funcion = () => {
    setVariable("hola 2");
  };

  useEffect(() => {
    console.log(flatListArray);
    return () => console.log("desmontado");
  }, []);

  useEffect(() => {
    console.log("cambio variable ", variable);
    return () => console.log("desmontado");
  }, [variable]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 40, fontWeight: "bold", fontStyle: "italic", color: "red"}}>{variable}</Text>
      <TextInput 
        keyboardAppearance={"dark"}
        keyboardType={"numeric"}
        textContentType={"newPassword"}
        autoCompleteType={"password"}
        secureTextEntry={false}
        multiline={true}
        value={variable}
        onChangeText={(text) => setVariable(text)}
        placeholder={"Placeholder react native"}
        placeholderTextColor={"blue"}
        style={{backgroundColor: "#d3d3d3", width: "80%", height: 80}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
});

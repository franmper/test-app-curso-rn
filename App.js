import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import {flatListArray} from "./array"

export default function App(props) {
  const [variable, setVariable] = useState("hola")

  const funcion = () => {
    setVariable("hola 2")
  }

  useEffect(() => {
    console.log(flatListArray)
    return () => console.log("desmontado")
  }, [])

  useEffect(() => {
    console.log("cambio variable ", variable)
    return () => console.log("desmontado")
  }, [variable])

  return (
    <View style={styles.container}>
      <Text>{variable}</Text>
      <Pressable style={{padding: 10, backgroundColor:"red" }} onPress={() => funcion()}><Text>Cambiar</Text></Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

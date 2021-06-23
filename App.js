import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
  SectionList,
  ScrollView,
  Image,
  Modal,
  ActivityIndicator,
  StatusBar
} from "react-native";
import { flatListArray, sectionListArray } from "./array";

const altoStatusBar = StatusBar.currentHeight

export default function App(props) {
  const [variable, setVariable] = useState("hola");
  const [visible, setVisible] = useState(false);

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
    <View style={styles.container}>
      <Text style={{fontSize: 40, fontWeight: "bold", fontStyle: "italic", color: "white"}}>{variable}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: altoStatusBar,
    flex: 1,
    backgroundColor: "red"
  },
});

import React from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useEffect, useState } from "react";

export default function CreateRequestScreen({ navigation }) {
  const [text, setText] = useState("");

  function handleChangeText(txt) {
    setText(txt);
  }

  function handleButtonPress() {
    console.log("button pressed", text);
  }

  function cancel() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" onChangeText={handleChangeText} />
      <TextInput placeholder="Description" />
      <Button title="Create request" onPress={handleButtonPress} />
      <Button title="Cancel" onPress={cancel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

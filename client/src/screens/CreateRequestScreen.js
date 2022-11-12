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
import { postRequest } from "../../api-client";

export default function CreateRequestScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [perk, setPerk] = useState("");

  function handleChangeTitle(t) {
    setTitle(t);
  }

  function handleChangeDesc(t) {
    setDesc(t);
  }

  function handleChangePerk(t) {
    setPerk(t);
  }

  function handleButtonPress() {
    const request = {
      title: title,
      description: desc,
      perk: perk,
    };
    console.log("create request button pressed");

    postRequest(request).then((response) => {
      console.log(response);
      console.log("successful!");
      navigation.navigate("Home");
    });
  }

  function cancel() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        style={styles.inputTitle}
        onChangeText={handleChangeTitle}
      />
      <TextInput
        multiline={true}
        placeholder="Description"
        style={styles.inputDesc}
        onChangeText={handleChangeDesc}
      />
      <TextInput
        multiline={true}
        placeholder="Perk"
        multiline={true}
        style={styles.inputPerk}
        onChangeText={handleChangePerk}
      />
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
  inputTitle: {
    width: 200,
    textAlign: "center",
  },
  inputDesc: {
    width: 200,
    textAlign: "center",
  },
  inputPerk: {
    width: 200,
    textAlign: "center",
  },
});

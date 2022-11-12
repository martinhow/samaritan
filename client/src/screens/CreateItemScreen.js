import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { postItem } from "../../api-client";

export default function CreateItemScreen({ route, navigation }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const { requestId } = route.params;

  function handleButtonPress() {
    const item = {
      name: name,
      description: desc,
      request_id: requestId,
    };

    if (!(name && desc)) {
      console.error("name and desc should not be blank");
      return;
    }
    console.log("create item button pressed", item);

    postItem(item).then((response) => {
      console.log(response);
      console.log("post item successful!");
      navigation.navigate("Home");
    });
  }

  function handleChangeItemName(n) {
    setName(n);
  }

  function handleChangeItemDesc(n) {
    setDesc(n);
  }

  function cancel() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text>Item Name</Text>
      <TextInput
        placeholder="Add a name to your item"
        onChangeText={handleChangeItemName}
      />

      <Text>Item Description</Text>
      <TextInput
        multiline={true}
        placeholder="Add item description"
        onChangeText={handleChangeItemDesc}
      />

      <Button title="Offer" onPress={handleButtonPress} />
      <Button title="Back" onPress={cancel} />
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

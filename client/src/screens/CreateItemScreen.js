import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { useEffect, useState } from "react";
import { patchRequest, postItem } from "../../api-client";
import { launchImageLibraryAsync, MediaTypeOptions } from "expo-image-picker";

export default function CreateItemScreen({ route, navigation }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [imageUri, setImageUri] = useState(null);

  const { requestId } = route.params;

  function handleOfferButtonPress() {
    const item = {
      name: name,
      description: desc,
      request_id: requestId,
    };

    if (!(name && imageUri)) {
      console.error("name and image should not be blank");
      return;
    }
    console.log("create item button pressed", item);

    postItem(item, imageUri).then((response) => {
      console.log(response);
      console.log("post item successful!");
      navigation.navigate("Home");
    });

    updateRequestStatus(requestId);
  }

  function updateRequestStatus(requestId) {
    patchRequest(requestId);
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

  function pickImage() {
    // No permissions request is necessary for launching the image library
    launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.Image,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0,
    }).then((result) => {
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    });
  }
  return (
    <View style={styles.container}>
      <Text>Item Name</Text>
      <TextInput
        style={styles.inputName}
        placeholder="Add a name to your item"
        onChangeText={handleChangeItemName}
      />

      <Text>Item Description</Text>
      <TextInput
        style={styles.inputDesc}
        multiline={true}
        placeholder="Add item description"
        onChangeText={handleChangeItemDesc}
      />

      <Text>Item Image</Text>
      <View>
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={cancel} />
        <Button title="Give item" onPress={handleOfferButtonPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 30,
  },
  inputName: {
    margin: 10,
    padding: 10,
    height: 50,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "lightgreen",
  },
  inputDesc: {
    margin: 10,
    padding: 10,
    height: 200,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "lightgreen",
  },
  image: {
    margin: 10,
    width: "100%",
    height: 200,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-between",
  },
});

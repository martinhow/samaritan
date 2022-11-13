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
import { postItem } from "../../api-client";
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
        placeholder="Add a name to your item"
        onChangeText={handleChangeItemName}
      />

      <Text>Item Description</Text>
      <TextInput
        multiline={true}
        placeholder="Add item description"
        onChangeText={handleChangeItemDesc}
      />

      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

      <Button title="Offer" onPress={handleOfferButtonPress} />
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
  image: {
    width: 200,
    height: 200,
  },
});

import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useEffect, useState } from "react";
import { getRequests } from "./api-client";
import RequestList from "./src/components/RequestList";

export default function App() {
  const [requests, setRequests] = useState([]);
  const [text, setText] = useState("");

  function handleChangeText(txt) {
    setText(txt);
  }

  function handleButtonPress() {
    console.log("button pressed", text);
  }

  useEffect(() => {
    getRequests().then((reqs) => setRequests(reqs));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <RequestList requests={requests}></RequestList>
      <View>
        <TextInput placeholder="Title" onChangeText={handleChangeText} />
        <TextInput placeholder="Description" />
        <Button title="Create request" onPress={handleButtonPress} />
      </View>
    </SafeAreaView>
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

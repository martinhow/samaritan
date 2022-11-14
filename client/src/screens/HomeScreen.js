import {
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useEffect, useState } from "react";
import { getCurrentUserName, getRequests } from "../../api-client";
import RequestList from "../components/RequestList";
import { color } from "../color";

export default function HomeScreen({ navigation }) {
  const [requests, setRequests] = useState([]);

  function createRequest() {
    navigation.navigate("Create a request");
  }

  useEffect(() => {
    getRequests().then((reqs) => setRequests(reqs));
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.helloMessage}>Hi {getCurrentUserName()}!</Text>
      <RequestList requests={requests}></RequestList>

      <Button title="Create a request" onPress={createRequest} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  helloMessage: {
    margin: 30,
    fontSize: 30,
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
});

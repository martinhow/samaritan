import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useEffect, useState } from "react";
import { getRequests } from "../../api-client";
import RequestList from "../components/RequestList";

export default function HomeScreen({ navigation }) {
  const [requests, setRequests] = useState([]);

  function createRequest() {
    navigation.navigate("CreateRequest");
  }

  useEffect(() => {
    getRequests().then((reqs) => setRequests(reqs));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <RequestList requests={requests}></RequestList>

      <Button title="Create request" onPress={createRequest} />
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

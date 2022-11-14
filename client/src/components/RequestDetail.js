import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightBase,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";

import ViewRequestScreen from "../screens/ViewRequestScreen";
import { color } from "../color";

export default function RequestDetail({ request }) {
  const navigation = useNavigation();

  function viewRequest() {
    navigation.navigate("View request", { request: request });
  }

  return (
    <View style={styles.container}>
      <View style={styles.requestDetailContainer}>
        <View style={styles.requestStatusContainer}>
          {request.status === "OPEN" && (
            <Text style={styles.statusOpen}>{request.status}</Text>
          )}
          {request.status === "TAKEN" && (
            <Text style={styles.statusTaken}>{request.status}</Text>
          )}
        </View>
        <View style={styles.requestDetail}>
          <Text style={styles.requestTitle}> {request.title} </Text>
          {/* <Text>created by: {request.created_by}</Text> */}
        </View>
        <View style={styles.viewDetailLinkContainer}>
          <Button title="View" onPress={viewRequest} />
        </View>
      </View>

      <Text style={styles.createdAt}>created at: {request.created_at}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 120,
    width: 350,
    flex: 1,
    margin: 5,
    padding: 10,
  },
  requestDetailContainer: {
    height: 120,
    width: 350,
    flex: 1,
    flexDirection: "row",
    borderColor: color.secondaryColor,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: "space-between",

    padding: 5,
  },
  requestStatusContainer: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  requestDetail: {
    width: "60%",
    justifyContent: "center",
  },
  viewDetailLinkContainer: {
    width: "20%",
    justifyContent: "center",
  },
  requestTitle: {
    fontSize: 16,
    textAlign: "center",
  },
  createdAt: {
    marginTop: 5,
    textAlign: "right",
    color: "grey",
  },
  statusOpen: {
    padding: 5,
    backgroundColor: color.primaryColor,
  },
  statusTaken: {
    padding: 5,
    backgroundColor: "lightgrey",
  },
});

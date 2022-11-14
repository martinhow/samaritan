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
          <Text>{request.status}</Text>
        </View>
        <View style={styles.requestDetail}>
          <Text style={styles.requestTitle}> {request.title}</Text>
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
    backgroundColor: color.primaryColor,
    borderRadius: 20,
    justifyContent: "space-between",
    margin: 5,
    padding: 5,
  },
  requestStatusContainer: {
    width: "15%",
    backgroundColor: color.primaryColor,
    justifyContent: "center",
    padding: 5,
  },
  requestDetail: {
    width: "65%",
    justifyContent: "center",
  },
  viewDetailLinkContainer: {
    width: "20%",
    backgroundColor: color.primaryColor,
    justifyContent: "center",
  },
  requestTitle: {
    fontSize: 16,
    textAlign: "center",
  },
  createdAt: {
    textAlign: "right",
    color: "grey",
  },
});

import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableHighlightBase,
  View,
} from "react-native";
import GoToButton from "./GoToButton";

export default function RequestDetail({ request }) {
  return (
    <View style={styles.requestDetailContainer}>
      <View style={styles.requestStatus}></View>
      <Text>{request.status}</Text>

      <View style={styles.requestDetail}>
        <Text style={styles.requestTitle}> {request.title}</Text>
        <Text>created by: {request.created_by}</Text>
        <Text>created at: {request.created_at}</Text>
        <GoToButton
          title="View this request"
          screenName="View request"
          params={{ request: request }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  requestDetailContainer: {
    height: 120,
    width: 350,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "lightgreen",
    borderRadius: 20,
    margin: 5,
    padding: 10,
    justifyContent: "space-between",
  },
  requestStatus: {},
  requestDetail: {},
  requestTitle: {
    fontSize: 20,
    padding: 5,
  },
});

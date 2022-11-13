import { StyleSheet, Text, View } from "react-native";
import GoToButton from "./GoToButton";

export default function RequestDetail({ request }) {
  return (
    <View style={styles.requestDetailContainer}>
      <View style={styles.requestStatus}></View>
      <Text>{request.status}</Text>
      {/* <Text>created by: {request.created_by}</Text> */}
      <View>
        <Text>created at: {request.created_at}</Text>
        <Text style={styles.requestTitle}> title: {request.title}</Text>
        <GoToButton
          title="View this request"
          screenName="ViewRequest"
          params={{ request: request }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  requestDetailContainer: {
    height: 100,
    width: 350,
    flexDirection: "row",
    backgroundColor: "lightblue",
    borderRadius: 20,
    margin: 5,
    // alignItems: "center",
    // justifyContent: "center",
  },
  requestStatus: {
    // flex: 1,
  },
  requestDetails: {
    // flex: 1,
  },
  requestTitle: {
    fontSize: 20,
  },
});

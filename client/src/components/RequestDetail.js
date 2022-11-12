import { StyleSheet, Text, View } from "react-native";
import GoToButton from "./GoToButton";

export default function RequestDetail({ request }) {
  return (
    <View style={styles.container}>
      <Text>created by: {request.created_by}</Text>
      <Text>created at: {request.created_at}</Text>
      <Text>title: {request.title}</Text>
      <GoToButton
        title="View this request"
        screenName="ViewRequest"
        params={{ request: request }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

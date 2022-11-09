import { StyleSheet, Text, View } from "react-native";

export default function RequestDetail({ request }) {
  return (
    <View style={styles.container}>
      <Text>{request.title}</Text>
      <Text>{request.description}</Text>
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

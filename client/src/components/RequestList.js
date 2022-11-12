import { ScrollView, StyleSheet, View, Text } from "react-native";
import React from "react";
import RequestDetail from "./RequestDetail";

export default function RequestList({ requests }) {
  return (
    <ScrollView style={styles.scrollView}>
      {/* <View style={styles.container}> */}
      {requests.map((r) => (
        <RequestDetail key={r._id} request={r} />
      ))}
      {/* </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    flexGrow: 1,
    width: "100%",
  },
});

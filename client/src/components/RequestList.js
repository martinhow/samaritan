import { ScrollView, StyleSheet, View, Text } from "react-native";
import React from "react";
import RequestDetail from "./RequestDetail";

export default function RequestList({ requests }) {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}> All Requests</Text>
      <View style={styles.container}>
        {requests &&
          requests.map((r) => <RequestDetail key={r._id} request={r} />)}
        <Text> {!requests && "no fetched requests!"}</Text>
      </View>
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
  title: {
    fontSize: 20,
    padding: 10,
  },
  scrollView: {
    flexGrow: 1,
    width: "100%",
  },
});

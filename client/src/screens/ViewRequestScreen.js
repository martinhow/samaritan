import { Button, StyleSheet, Text, View, Linking } from "react-native";
import React from "react";

export default function ViewRequestScreen({ route, navigation }) {
  const { request } = route.params;
  console.log("route params", route.params);
  const requesterNumber = "07907295128";

  return (
    <View style={styles.container}>
      <Text>title: {request.title}</Text>
      <Text>created by: {request.created_by}</Text>
      <Text>created at: {request.created_at}</Text>
      <Text>description: {request.description}</Text>
      <Text>perk: {request.perk}</Text>
      <Text>start date: {request.start_date || "unspecified"}</Text>
      <Text>end date: {request.end_date || "unspecified"}</Text>

      <Button
        title="Give an item"
        onPress={() => {
          console.log("item offered");
          navigation.navigate("Create an item", { requestId: request["_id"] });
        }}
      />

      <Button
        title="Back to Home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />

      <Button
        title="Call Requester"
        onPress={() => {
          Linking.openURL(`tel:${requesterNumber}`);
        }}
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

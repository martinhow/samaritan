import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ViewRequestScreen({ route, navigation }) {
  const { request } = route.params;
  console.log("route params", route.params);
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
        title="Offer Item"
        onPress={() => {
          console.log("item offered");
          navigation.navigate("CreateItem", { requestId: request["_id"] });
        }}
      />

      <Button
        title="Back to Home"
        onPress={() => {
          navigation.navigate("Home");
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

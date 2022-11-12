import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ViewRequestScreen({ route, navigation }) {
  const { request } = route.params;
  console.log("route params", route.params);
  return (
    <View style={styles.container}>
      <Text>ViewRequestScreen</Text>
      <Text>title: {request.title}</Text>
      <Button title="Call user" />
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

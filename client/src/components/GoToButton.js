import { Button, View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function GoToButton({ title, screenName, params }) {
  const navigation = useNavigation();
  return (
    <Button
      title={title ? title : `Go to ${screenName}`}
      onPress={() => navigation.navigate(screenName, params)}
    />
  );
}

import {
  Button,
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { color } from "../color";

export default function ViewRequestScreen({ route, navigation }) {
  const { request } = route.params;

  const requesterNumber = "07907295128";

  function formatDate(dateString) {
    return new Date(dateString).toLocaleString();
  }

  function callRequester() {
    Linking.openURL(`tel://${requesterNumber}`)
      .then(() => console.log("calling"))
      .catch((err) => console.error(err));
  }

  return (
    <View style={styles.container}>
      <View>
        {/* <Text>created by: {request.created_by}</Text>
        <Text>created at: {request.created_at}</Text> */}

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>title:</Text>
          <Text style={styles.fieldValue}>{request.title}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>description:</Text>
          <Text style={styles.fieldValue}>{request.description}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>perk:</Text>
          <Text style={styles.fieldValue}>{request.perk}</Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>start date:</Text>
          <Text style={styles.fieldValue}>
            {request.start_date
              ? formatDate(request.start_date)
              : "unspecified"}
          </Text>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>end date:</Text>
          <Text style={styles.fieldValue}>
            {request.end_date ? formatDate(request.end_date) : "unspecified"}
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={callRequester}>
          <Text style={styles.buttonText}>Call Requester</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          title="Give an item"
          onPress={() => {
            navigation.navigate("Create an item", {
              requestId: request["_id"],
            });
          }}
        >
          <Text style={styles.buttonText}>Give an item</Text>
        </TouchableOpacity>
      </View>
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
    alignItems: "left",
    justifyContent: "space-between",
    padding: 20,
  },
  buttonContainer: {
    width: "100%",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: "30%",
    borderRadius: 10,
    margin: 10,
    textAlign: "center",
    backgroundColor: color.secondaryColor,
  },
  buttonText: {
    padding: 5,
    textAlign: "center",
  },
  fieldContainer: {
    padding: 10,
  },
  fieldLabel: {
    paddingBottom: 5,
  },
  fieldValue: {
    borderRadius: 5,
    borderColor: "lightgrey",
    borderWidth: 1,
    fontSize: 16,
    padding: 10,
  },
});

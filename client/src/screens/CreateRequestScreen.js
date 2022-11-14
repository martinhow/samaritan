import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useEffect, useState } from "react";
import { postRequest } from "../../api-client";
import DateTimePicker from "@react-native-community/datetimepicker";
import { color } from "../color";

export default function CreateRequestScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [perk, setPerk] = useState("");

  // default duration is 1 day
  const now = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const [startDate, setStartDate] = useState(now);
  const [endDate, setEndDate] = useState(tomorrow);

  function handleChangeTitle(t) {
    setTitle(t);
  }

  function handleChangeDesc(t) {
    setDesc(t);
  }

  function handleChangePerk(t) {
    setPerk(t);
  }

  function handleCreateRequest() {
    const request = {
      title: title,
      description: desc,
      perk: perk,
      start_date: startDate,
      end_date: endDate,
    };

    if (!(title && desc && startDate && endDate)) {
      console.error("title and desc should not be blank");
      return;
    }
    console.log("create request button pressed");

    postRequest(request).then((response) => {
      console.log(response);
      console.log("successful!");
      navigation.navigate("Home");
    });
  }

  function onChangeStartDate(event, selectedDate) {
    const currentDate = selectedDate || startDate;
    setStartDate(currentDate);
  }

  function onChangeEndDate(event, selectedDate) {
    const currentDate = selectedDate || endDate;
    setEndDate(currentDate);
  }

  function cancel() {
    navigation.navigate("Home");
  }

  return (
    <View style={styles.container}>
      <Text>Title *</Text>
      <TextInput
        placeholder="Add title"
        style={styles.inputTitle}
        onChangeText={handleChangeTitle}
      />
      <Text>Description *</Text>
      <TextInput
        multiline={true}
        placeholder="Add description"
        style={styles.inputDesc}
        onChangeText={handleChangeDesc}
      />
      <Text>Perk</Text>
      <TextInput
        multiline={true}
        placeholder="Add perk/incentive"
        style={styles.inputPerk}
        onChangeText={handleChangePerk}
      />

      <Text>start date *</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={startDate}
        mode="datetime"
        is24Hour={true}
        display="default"
        onChange={onChangeStartDate}
        style={styles.dateTimePicker}
      />

      <Text>end date *</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={endDate}
        mode="datetime"
        is24Hour={true}
        display="default"
        onChange={onChangeEndDate}
        style={styles.dateTimePicker}
      />

      <View style={styles.buttonContainer}>
        <Button title="Cancel" onPress={cancel} />
        <Button
          style={styles.createRequestButton}
          title="Create request"
          onPress={handleCreateRequest}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 30,
  },
  inputTitle: {
    margin: 10,
    padding: 10,
    height: 50,
    width: "100%",
    borderRadius: 10,
    borderColor: color.secondaryColor,
    borderWidth: 2,
  },
  inputDesc: {
    margin: 10,
    padding: 10,
    height: 200,
    width: "100%",
    borderRadius: 10,
    borderColor: color.secondaryColor,
    borderWidth: 2,
  },
  inputPerk: {
    margin: 10,
    padding: 10,
    height: 120,
    width: "100%",
    borderRadius: 10,
    borderColor: color.secondaryColor,
    borderWidth: 2,
  },
  dateTimePicker: {
    margin: 10,
    padding: 10,
    width: "70%",
  },
  buttonContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

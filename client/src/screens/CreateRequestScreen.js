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

export default function CreateRequestScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [perk, setPerk] = useState("");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function handleChangeTitle(t) {
    setTitle(t);
  }

  function handleChangeDesc(t) {
    setDesc(t);
  }

  function handleChangePerk(t) {
    setPerk(t);
  }

  function handleButtonPress() {
    const request = {
      title: title,
      description: desc,
      perk: perk,
      start_date: startDate,
      end_date: endDate,
    };

    if (!(title && desc)) {
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
      <TextInput
        placeholder="Title"
        style={styles.inputTitle}
        onChangeText={handleChangeTitle}
      />
      <TextInput
        multiline={true}
        placeholder="Description"
        style={styles.inputDesc}
        onChangeText={handleChangeDesc}
      />
      <TextInput
        multiline={true}
        placeholder="Perk"
        multiline={true}
        style={styles.inputPerk}
        onChangeText={handleChangePerk}
      />

      <Text>start date</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={startDate}
        mode="datetime"
        is24Hour={true}
        display="default"
        onChange={onChangeStartDate}
        style={{ width: 320, backgroundColor: "white" }} //add this
      />

      <Text>end date</Text>
      <DateTimePicker
        testID="dateTimePicker"
        value={endDate}
        mode="datetime"
        is24Hour={true}
        display="default"
        onChange={onChangeEndDate}
        style={{ width: 320, backgroundColor: "white" }} //add this
      />

      <Button title="Create request" onPress={handleButtonPress} />
      <Button title="Cancel" onPress={cancel} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputTitle: {
    width: 200,
    textAlign: "center",
  },
  inputDesc: {
    width: 200,
    textAlign: "center",
  },
  inputPerk: {
    width: 200,
    textAlign: "center",
  },
});

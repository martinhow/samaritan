import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { color } from "../color";
import { loginUser, setCurrentUser } from "../../api-client";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (!(email && password)) {
      console.error("Please input email and password.");
    } else {
      loginUser(email.toLowerCase(), password)
        .then((user) => {
          setCurrentUser(user);
          console.log("successful login");
          navigation.navigate("Home");
        })
        .catch((e) => {
          console.error("login error:", e);
        });
    }
  }

  return (
    // <View>
    <ImageBackground
      style={styles.background}
      source={require("../../assets/welcome2.jpg")}
    >
      <Image
        style={styles.logo}
        source={require("../../assets/marmoset.png")}
      ></Image>
      <Text style={styles.title}>Samaritan</Text>

      <TextInput
        style={styles.emailInput}
        placeholder="email address"
        onChangeText={(t) => setEmail(t)}
      />
      <TextInput
        secureTextEntry={true}
        style={styles.passwordInput}
        placeholder="password"
        onChangeText={(t) => setPassword(t)}
      />
      <Pressable title="Log in" style={styles.loginButton} onPress={login}>
        <Text style={styles.loginButtonText}> Log in</Text>
      </Pressable>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 70,
    color: "white",
    textDecorationStyle: "solid",
  },
  logo: {
    height: 100,
    width: 100,
    opacity: 1,
  },
  background: {
    opacity: 0.9,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  emailInput: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: 200,
  },
  passwordInput: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    margin: 10,
    width: 200,
  },
  loginButton: {
    textAlign: "center",
    backgroundColor: color.secondaryColor,
    borderColor: "black",
    borderRadius: 5,
    marginTop: 50,
    height: 30,
    width: 100,
    elevation: 5,
  },
  loginButtonText: {
    padding: 5,
    textAlign: "center",
    fontSize: 15,
    color: "white",
  },
});

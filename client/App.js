import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CreateItemScreen from "./src/screens/CreateItemScreen";
import CreateRequestScreen from "./src/screens/CreateRequestScreen";

import HomeScreen from "./src/screens/HomeScreen";
import ViewRequestScreen from "./src/screens/ViewRequestScreen";
import LoginScreen from "./src/screens/LoginScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none" initialRouteName="Login">
        <Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Screen
          name="Create a request"
          component={CreateRequestScreen}
          options={{ headerShown: true }}
        />
        <Screen
          name="View request"
          component={ViewRequestScreen}
          options={{ headerShown: true }}
        />

        <Screen
          name="Create an item"
          component={CreateItemScreen}
          options={{ headerShown: true }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

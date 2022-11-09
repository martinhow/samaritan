import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateRequestScreen from "./src/screens/CreateRequestScreen";

import HomeScreen from "./src/screens/HomeScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none" initialRouteName="Home">
        <Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="CreateRequest"
          component={CreateRequestScreen}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

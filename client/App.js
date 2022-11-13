import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CreateItemScreen from "./src/screens/CreateItemScreen";
import CreateRequestScreen from "./src/screens/CreateRequestScreen";

import HomeScreen from "./src/screens/HomeScreen";
import ViewRequestScreen from "./src/screens/ViewRequestScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator headerMode="none" initialRouteName="Home">
        <Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Screen
          name="CreateRequest"
          component={CreateRequestScreen}
          options={{ headerShown: false }}
        />
        <Screen
          name="ViewRequest"
          component={ViewRequestScreen}
          options={{ headerShown: false }}
        />

        <Screen
          name="CreateItem"
          component={CreateItemScreen}
          options={{ headerShown: true }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

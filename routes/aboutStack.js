import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, StyleSheet } from "react-native";
import About from "../screens/about";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: "About Game Review"
        }}
      />
    </Stack.Navigator>
  );
}

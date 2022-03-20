import { createNativeStackNavigator } from "@react-navigation/native-stack";
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
          title: "About Game Reviews"
        }}
      />
    </Stack.Navigator>
  );
}

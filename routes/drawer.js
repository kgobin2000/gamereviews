import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer, ImageBackground, Image } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./homeStack";
import AboutStack from "./aboutStack";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const AppNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="HomeStack">
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          headerShown: false
        }}
      />
      <Drawer.Screen
        name="AboutStack"
        component={AboutStack}
        options={{
          title: "About",
          headerTitle: "About Game-Reviews"
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);
export default AppNavigator;

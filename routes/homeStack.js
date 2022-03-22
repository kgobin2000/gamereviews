import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import { TouchableOpacity, Image, Text, View, StyleSheet, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: props => <CustomHeader {...props} />,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Ionicons name="menu" size={24} color="blue" />
            </TouchableOpacity>
          ),
          headerBackground: () => <Image source={require("../assets/game_bg.png")} />
        }}
      />
      <Stack.Screen name="ReviewDetails" component={ReviewDetails} />
    </Stack.Navigator>
  );
}

function CustomHeader() {
  return (
    <View style={styles.headerTitle}>
      <Image style={styles.headerImage} source={require("../assets/heart_logo.png")} />
      <Text>Game Reviews</Text>
    </View>
  );
}

const styles = new StyleSheet.create({
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10
  },
  headerTitle: {
    flexDirection: "row"
  }
});

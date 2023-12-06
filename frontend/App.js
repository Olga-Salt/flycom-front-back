import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import { useRuote } from "./router";

// import MyTaskScreen from "./Screens/auth/mainScreen/MyTaskScreen";
// import CreateScreen from "./Screens/auth/mainScreen/CreateScreen";
// import ProfileScreen from "./Screens/auth/mainScreen/ProfileScreen";
// import { RegistrationScreen, LoginScreen } from "./Screens/auth";

// const MainTab = createBottomTabNavigator();
// const authStack = createStackNavigator();

// SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Midium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const handleRegistrationSubmit = (data) => {
    console.log("data", data);
  };
  const handleLoginSubmit = (data) => {
    console.log("data", data);
  };

  const routing = useRuote(
    {},
    onLayoutRootView,
    handleLoginSubmit,
    handleRegistrationSubmit
  );

  return (
    <NavigationContainer>
      {routing}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

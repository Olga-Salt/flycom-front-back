import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createStackNavigator } from "@react-navigation/stack";

import { useCallback } from "react";
import React, { useState } from "react";

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

  const [isAuth, setIsAuth] = useState(false);

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

  const handleLoginSubmit = async (data) => {
    try {
      const { email, password } = data;
      console.log("email", email);
      console.log("password", password);

      const response = await fetch("http://91.225.160.55:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login: email, password: password }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        result.access_granted === true ? setIsAuth(true) : false;
        // setIsAuth(true);
      } else {
        console.log("Ошибка при запросе: status", response.status);
      }
    } catch (error) {
      console.log("Ошибка error при запросе:", error);
    }
  };

  const routing = useRuote(
    isAuth,
    onLayoutRootView,
    handleLoginSubmit,
    handleRegistrationSubmit
  );

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {routing}
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

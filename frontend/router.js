import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";

import React from "react";
import { AntDesign, Feather } from "@expo/vector-icons";

import MyTaskScreen from "./Screens/auth/mainScreen/MyTaskScreen";
import CreateScreen from "./Screens/auth/mainScreen/CreateScreen";
import ProfileScreen from "./Screens/auth/mainScreen/ProfileScreen";
import { RegistrationScreen, LoginScreen } from "./Screens/auth";

import Todo from "./assets/image/Todo";
import { Image } from "react-native";

import { styles } from "./css/routerStyles";

const MainTab = createBottomTabNavigator();
const authStack = createStackNavigator();

export const useRuote = (
  isAuth,
  onLayoutRootView,
  handleLoginSubmit,
  handleRegistrationSubmit
) => {
  if (!isAuth) {
    return (
      <authStack.Navigator>
        <authStack.Screen
          name="Login"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <LoginScreen
              {...props}
              onLayoutRootView={onLayoutRootView}
              handleLoginSubmit={handleLoginSubmit}
            />
          )}
        </authStack.Screen>
        <authStack.Screen
          name="Registration"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <RegistrationScreen
              {...props}
              onLayoutRootView={onLayoutRootView}
              handleRegistrationSubmit={handleRegistrationSubmit}
            />
          )}
        </authStack.Screen>
      </authStack.Navigator>
    );
  }

  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#006adc",
        tabBarStyle: {
          height: 76,
          paddingBottom: 20,
          borderTopColor: "transparent",
          backgroundColor: "#fff",
        },
      }}
    >
      <MainTab.Screen
        name="Мои задачи"
        component={MyTaskScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/image/ToDo.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Календарь"
        component={MyTaskScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/image/calendar.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Карта"
        component={CreateScreen}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/image/map.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Настройки"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={require("./assets/image/setings.png")}
              style={{ width: 40, height: 40 }}
            />
          ),
        }}
      />
      <MainTab.Screen
        name="Логин"
        component={LoginScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyTaskScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Мои задачи</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default MyTaskScreen;

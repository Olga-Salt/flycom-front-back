import MapView from "react-native-maps";
import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import { Camera } from "expo-camera";

const MapScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default MapScreen;

const PostsScreen = ({ route }) => {
  const [postst, setPostst] = useState([]);

  useEffect(() => {}, [route.params]);

  return <View style={{ flex: 1 }}></View>;
};

// export default PostsScreen;

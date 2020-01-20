import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import {
  requestPermissionsAsync,
  getCurrentPositionAsync
} from "expo-location";

function Main() {
  const [currentRegion, setCurrentRegion] = useState(null);

  useEffect(() => {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true
        });
        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude,
          //calculando zoom do mapa
          latitudeDelta: 0.04,
          longitudeDelta: 0.04
        });
      }
    }
    loadInitialPosition();
  }, []);

  if (!currentRegion) {
    return null;
  }

  return (
    <MapView initialRegion={currentRegion} style={styles.map}>
      <Marker coordinate={{ latitude: 37.7822325, longitude: -122.4129692 }}>
        <Image
          style={styles.avatar}
          source={{
            uri: "https://avatars3.githubusercontent.com/u/40272724?v=4"
          }}
        />
        <Callout>
          <View style={styles.callout}>
            <Text style={styles.devName}>Pedro Henrique Léda</Text>
            <Text style={styles.devBio}>
              Student of Computer science and a nice guy
            </Text>
            <Text style={styles.devTechs}>React.js, React Native, Swift</Text>
          </View>
        </Callout>
      </Marker>
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: "#fff"
  },
  callout: {
    width: 260,
    padding: 10
  },
  devName: {
    fontWeight: "bold",
    fontSize: 16
  },
  devBio: {
    color: "#666",
    marginTop: 5
  },
  devTechs: {
    marginTop: 5,
    fontWeight: "500"
  }
});

export default Main;

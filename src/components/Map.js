import React, { useContext } from 'react'
import { Text, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext'

const Map = () => {
  // let points = []
  // for (let i = 0; i < 20; i++) {
  //   if (i % 2 === 0) {
  //     points.push({
  //       latitude: 37.33233 + i * 0.001,
  //       longitude: -122.03121 + i * 0.001
  //     })
  //   } else {
  //     points.push({
  //       latitude: 37.33233 - i * 0.002,
  //       longitude: -122.03121 + i * 0.001
  //     })
  //   }
  // }
  const { state: { currentLocation } } = useContext(LocationContext)

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
  }

  return (
    <MapView 
      style={styles.map}
      initialRegion={{
        //latitude: 37.33233,
        //longitude: -122.03121,
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
      }}
    >
      {/* <Polyline coordinates={points} /> */}
    </MapView>
  )
}

const styles = StyleSheet.create({
  map: {
    height: 300,
  }
})

export default Map

import React, { useContext } from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { Context as TrackContext } from '../context/TrackContext'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)

  console.log(state)

  return (
    <>
      <NavigationEvents onWillFocus={() => fetchTracks()} />
      <Text style={{ fontSize: 48 }}>
        TrackList Screen
      </Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </>
  )
}

const styles = StyleSheet.create({})

export default TrackListScreen

import React, { useContext } from 'react'
import { StyleSheet, Text, FlatList } from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { Context as TrackContext } from '../context/TrackContext'
import { TouchableOpacity } from 'react-native-gesture-handler'

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext)

  console.log(state)

  return (
    <>
      <NavigationEvents onWillFocus={() => fetchTracks()} />
      <Text style={{ fontSize: 48 }}>
        TrackList Screen
      </Text>
      <FlatList
        data={state}
        keyExtractor={item => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem 
                chevron={true}
                title={item.name}
              />
            </TouchableOpacity>
          )
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({})

export default TrackListScreen

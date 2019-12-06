import React from 'react'
import { Input,  Button } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import Spacer from './Spacer'

const TrackForm = () => {
  return (
    <>
      <Spacer>
        <Input placeholder="Enter name" />
      </Spacer>
      <Button title="Start Recording" />
    </>
  )
}

export default TrackForm
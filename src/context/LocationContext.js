import createDataContext from './createDataContext'
import { create } from 'domain'

const locationReducer = (state, action) => {
  switch(action.type) {
    default:
      return false
  }
}

const startRecording = dispatch => () => {}

const stopRecording = dispatch => () => {}

const addLocation = dispatch = () => {}

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
)

import { useState, useEffect } from 'react'
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location'

export default (callback) => {
  const [err, setErr] = useState(null)

  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
      await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 5000,
          distanceInterval: 10
        },
        callback
      )
    } catch(e) {
      console.log(e)
      setErr(e)
    }
  }

  useEffect(() => {
    startWatching()
  }, [])

  return [err]
}

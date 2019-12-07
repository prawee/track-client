import { useState, useEffect } from 'react'
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location'

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null)
  const [subscriber, setSubscriber] = useState(null)

  const startWatching = async () => {
    try {
      await requestPermissionsAsync()
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 5000,
          distanceInterval: 10
        },
        callback
      )
      setSubscriber(sub)
    } catch(e) {
      console.log(e)
      setErr(e)
    }
  }

  useEffect(() => {
    if (shouldTrack) {
      startWatching()
    } else {
      // stop watching
      subscriber.remove()
      setSubscriber(null)
    }
  }, [shouldTrack, callback])

  return [err]
}

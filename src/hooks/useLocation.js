import { useState, useEffect } from 'react'
import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from 'expo-location'

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null)
  //  const [subscriber, setSubscriber] = useState(null)

  useEffect(() => {
    let subscriber

    const startWatching = async () => {
      try {
        await requestPermissionsAsync()
        subscriber = await watchPositionAsync(
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

    if (shouldTrack) {
      startWatching()
    } else {
      // stop watching
      if (subscriber) {
        subscriber.remove()
      }
      subscriber = null
    }

    return () => {
      if (subscriber) {
        subscriber.remove()
      }
    }
  }, [shouldTrack, callback])

  return [err]
}

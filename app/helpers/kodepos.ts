import { DataResult } from '../../types'

export const createFullText = (data: DataResult) => {
  const keys = ['code', 'village', 'district', 'regency', 'province']
  const combinations: string[] = []

  keys.forEach((a, x) => {
    keys.forEach((b, y) => {
      if (x !== y) {
        combinations.push(`${data[a]} ${data[b]}`)
      }
    })
  })

  return combinations.join(' ')
}

export const haversineDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371 // earth radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c // distance in km
}

export const nearestDetection = (
  data: DataResult[],
  lat: number,
  lon: number
): DataResult | null => {
  let nearest: DataResult | null = null
  let smallestDistance = Infinity

  data.forEach((item) => {
    const distance = haversineDistance(lat, lon, item.latitude, item.longitude)

    if (distance < smallestDistance) {
      nearest = item
      smallestDistance = distance
      nearest.distance = distance
    }
  })

  return nearest
}

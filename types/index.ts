export type SearchQueries = {
  q: string
  province?: string
  regency?: string
  district?: string
}

export type DetectQueries = {
  latitude: number
  longitude: number
}

export type DataResult = {
  province: string
  regency: string
  district: string
  village: string
  code: number
  latitude: number
  longitude: number
  elevation: number
  timezone: string
  fulltext?: string
  distance?: number
}

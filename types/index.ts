export type KeywordOptions = {
  q: string
  province?: string
  regency?: string
  district?: string
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
}

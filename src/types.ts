export type KeywordOptions = {
  query: string
  province?: string
  regency?: string
  district?: string
}

export type ProviderList = {
  hostname: string
  segment: string
}

export type DataResult = {
  province?: string
  city?: string // deprecated
  regency?: string
  subdistrict?: string // deprecated
  district?: string
  urban?: string // deprecated
  village?: string
  postalcode?: number // deprecated
  code?: number
}

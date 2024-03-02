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
  regency?: string
  district?: string
  village?: string
  code?: string
}

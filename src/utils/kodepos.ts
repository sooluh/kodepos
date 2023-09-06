import axios from 'axios'
import { load } from 'cheerio'
import type { DataResult, KeywordOptions, ProviderList } from '../types'
import { type HeaderGeneratorOptions, HeaderGenerator, PRESETS } from 'header-generator'

export const search = async (keywords: KeywordOptions, provider: ProviderList) => {
  const proxy = process.env.PROXY_URL
  const headers = new HeaderGenerator(PRESETS.MODERN_ANDROID as HeaderGeneratorOptions)
  const keys = ['province', 'regency', 'district', 'village', 'code']
  const deprecatedKeys = ['province', 'city', 'subdistrict', 'urban', 'postalcode']

  let url = `https://${provider.hostname}/`

  if (keywords.province) {
    url += `${provider.segment}/${keywords.province}`

    if (keywords.regency) {
      url += `/${keywords.regency}`

      if (keywords.district) {
        url += `/${keywords.district}`
      }
    }
  }

  url = `${url}?s=${keywords.query}`
  url = proxy ? `${proxy}/?${encodeURIComponent(url)}` : url

  try {
    const response = await axios.get(url, { headers: headers.getHeaders() })
    const $ = load(response.data)
    const tr = $('tr')

    if (!!tr.length) {
      const results: DataResult[] = []

      tr.each((number, row) => {
        if (number === 0) return

        const td = $(row).find('td')
        const result: DataResult = {}

        td.each((index, data) => {
          const value = $(data).find('a').text().trim()

          result[deprecatedKeys[index]] = value
          result[keys[index]] = value
        })

        // ['province', 'city', 'regency', 'subdistrict', 'district', 'urban', 'village', 'postalcode', 'code']
        if (Object.entries(result).length === 9) {
          results.push(result)
        }
      })

      return results
    }

    return []
  } catch (e) {
    console.error(e)
    return null
  }
}

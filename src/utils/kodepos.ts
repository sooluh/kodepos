import https from 'https'
import fetch from 'node-fetch'
import { load } from 'cheerio'
import { HeaderGenerator } from 'header-generator'
import type { DataResult, KeywordOptions, ProviderList } from '../types'

export const search = async (keywords: KeywordOptions, provider: ProviderList) => {
  const proxy = process.env.PROXY_URL
  const headers = new HeaderGenerator()
  const keys = ['province', 'regency', 'district', 'village', 'code']

  let url = `https://${provider.hostname}/`

  if (keywords.province) {
    url += provider.segment ? `${provider.segment}/${keywords.province}` : `${keywords.province}`

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
    const response = await fetch(url, {
      headers: headers.getHeaders(),
      agent: new https.Agent({ rejectUnauthorized: false }),
      redirect: 'follow',
      follow: 10,
    })
    const body = await response.text()

    console.log('scraped from:', provider.hostname)

    const $ = load(body)
    const tr = $('tr')

    if (!!tr.length) {
      const results: DataResult[] = []

      tr.each((number, row) => {
        if (number === 0) return

        const td = $(row).find('td')
        const result: DataResult = {}

        td.each((index, data) => {
          const value = $(data).find('a').text().trim()

          result[keys[index]] = value
        })

        // ['province', 'regency', 'district', 'village', 'code']
        if (Object.entries(result).length === 5) {
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

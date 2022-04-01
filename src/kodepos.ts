// @ts-ignore
import HeaderGenerator from 'header-generator'
import cheerio from 'cheerio'
import axios from 'axios'
import { DataResponse, DataResult, DataResults } from './types'

class Kodepos {
	private readonly baseurl: string = 'https://kodeposindo.com/'
	private readonly keywords: string
	private readonly headers: object

	constructor(keywords: string) {
		this.keywords = keywords

		this.headers = new HeaderGenerator({
			browsers: ['chrome', 'firefox', 'safari'],
			operatingSystems: ['linux', 'android', 'windows'],
			devices: ['desktop', 'mobile'],
			locales: ['id-ID']
		})
	}

	public async search(): Promise<any> {
		const url = this.baseurl + '?s=' + this.keywords

		try {
			let output = await axios({
				method: 'GET',
				url,
				headers: this.headers
			})
			const $: cheerio.Root = cheerio.load(output.data)

			let tr: cheerio.Cheerio = $('tr')
			if (tr.length > 0) {
				let results: DataResults = []

				tr.each((number: number, element: cheerio.Element): void => {
					if (number === 0) return

					let td: cheerio.Cheerio = $(element).find('td')
					let result: DataResult = {}

					td.each((index: number, html: cheerio.Element): void => {
						let value: string | any = $(html).find('a').text()
						let key: string = index === 0 ? 'province' :
							(index === 1 ? 'city' :
								(index === 2 ? 'subdistrict' :
									(index === 3 ? 'urban' : 'postalcode')))

						result[key] = value.trim()
					})

					if (Object.entries(result).length === 5) {
						results.push(result)
					}
				})

				let response: DataResponse = {
					code: 200,
					status: true,
					messages: 'Data search successfully parsed.',
					data: results
				}

				return response
			} else {
				let response: DataResponse = {
					code: 200,
					status: false,
					messages: 'No data can be returned.'
				}

				return response
			}
		} catch (error) {
			console.error(error)

			let response: DataResponse = {
				code: 500,
				status: false,
				messages: 'An error occurred in the script.'
			}

			return response
		}
	}
}

export default Kodepos

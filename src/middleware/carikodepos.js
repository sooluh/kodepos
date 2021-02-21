const cheerio = require('cheerio')
const axios = require('axios').default

module.exports = (keywords) => {
    return new Promise((resolve, reject) => {

        let carikodepos = `https://carikodepos.com/`,
            url = carikodepos + '?s=' + keywords

        axios({
            method: 'GET',
            url: url,
            headers: {
                'Accept': 'application/json, text/javascript, */*;',
                'User-Agent': 'Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4209.3 Mobile Safari/537.36',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                'Origin': carikodepos,
                'Referer': carikodepos
            }
        }).then((response) => {

            let $ = cheerio.load(response.data),
                search = $('tr')

            if (search.length > 0) {

                let results = []

                search.each((number, element) => {
                    if (number !== 0) {

                        let td = $(element).find('td'),
                            result = {}

                        td.each((index, html) => {
                            let value = $(html).find('a').html(),
                                key = (index === 0) ? 'province' : (index === 1) ? 'city' : (index === 2) ? 'subdistrict' : (index === 3) ? 'urban' : 'postalcode'

                            result[key] = value
                        })

                        results.push(result)

                    }
                })

                resolve(results)

            } else {
                reject('No result could be found')
            }

        }).catch(reject)

    })
}
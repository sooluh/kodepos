const { empty } = require("./../helper")
const carikodepos = require("./../scraper/carikodepos")
const { approve, disapprove } = require("./../response")

// home
const home = async (request, response) => {
    let data = {
        information: {
            messsage: "Restful API ini digunakan untuk mencari Kode Pos Indonesia berdasarkan nama tempat, desa atau kota. Untuk informasi lebih lanjut, silahkan klik tautan dokumentasi berikut.",
            documentation: "https://github.com/sooluh/kodepos#readme"
        },
        authors: {
            name: "Suluh Sulistiawan",
            website: "https://suluh.my.id/",
            github: "https://github.com/sooluh"
        }
    }

    approve(data, response)
}

// search
const search = (request, response) => {
    let keywords = request.query.q

    if (empty(keywords)) {

        let data = {
            information: "Tidak dapat mencari tanpa parameter 'q'!"
        }

        response.status(400)
        disapprove(data, response)

    } else {

        carikodepos(keywords.trim())
            .then((results) => {

                approve(results, response)

            })
            .catch((error) => {

                response.status(500)
                disapprove(error, response)

            })

    }
}

// page not found
const pnf = async (request, response) => {
    let data = {
        information: "Maaf, endpoint ini sepertinya tidak tersedia"
    }

    response.status(404)
    disapprove(data, response)
}

module.exports = {
    home,
    search,
    pnf
}
![kodepos](https://socialify.git.ci/sooluh/kodepos/image?description=1&descriptionEditable=Indonesian%20postal%20code%20search%20API%20by%20place%20name%2C%20village%20or%20city.&font=Raleway&forks=1&issues=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2Ftwitter%2Ftwemoji%2Fmaster%2Fassets%2Fsvg%2F1f4ee.svg&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark)

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/sooluh/kodepos.git
   ```

2. Change the current directory to this repository folder

   ```bash
   cd kodepos
   ```

3. Install dependencies

   ```bash
   yarn install
   ```

4. Run the app! (locally)

   - Development mode

     ```bash
     yarn dev
     ```

   - Production mode

     1. Build first

        ```bash
        yarn build
        ```

     2. Start the app

        ```bash
        yarn start
        ```

### One-click Deployment

The fastest way to use it privately on PaaS available

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsooluh%2Fkodepos%2Ftree%2Fmain)
[![Deploy with Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https%3A%2F%2Fgithub.com%2Fsooluh%2Fkodepos)

## Basic Usage

Base URL : [`http://localhost:5000`](https://kodepos.vercel.app)

| Endpoint                                       | Description                     | Parameter | Method |
| ---------------------------------------------- | ------------------------------- | --------- | ------ |
| [`/search`](https://kodepos.vercel.app/search) | To find postcode using keywords | `q`       | `GET`  |

### Example of Use

#### Request

<pre>
curl -XGET '<a href="https://kodepos.vercel.app/search/?q=danasari">http://localhost:5000/search/?q=danasari</a>'
</pre>

#### Response

```json
{
  "success": true,
  "message": "Data search successfully parsed.",
  "data": [
    {
      "province": "Jawa Tengah",
      "city": "Purbalingga",
      "subdistrict": "Karangjambu",
      "urban": "Danasari",
      "postalcode": "53357"
    },
    {
      "province": "Jawa Tengah",
      "city": "Tegal",
      "subdistrict": "Bojong",
      "urban": "Danasari",
      "postalcode": "52465"
    },
    {
      "province": "Jawa Tengah",
      "city": "Pemalang",
      "subdistrict": "Pemalang",
      "urban": "Danasari",
      "postalcode": "52314"
    },
    {
      "province": "Jawa Barat",
      "city": "Ciamis",
      "subdistrict": "Cisaga",
      "urban": "Danasari",
      "postalcode": "46386"
    }
  ]
}
```

### Showcase

List of awesome projects powered by this API

- [**kodepos-web**](https://kodepos-web.vercel.app) - Simple web application for postcode search by [dotslashf](https://github.com/dotslashf)<br>
  [Source Code](https://github.com/dotslashf/kodepos-web)

### Ready to use!

List of server APIs ready to use publicly

- https://kodepos.vercel.app/
- https://kodepos.herokuapp.com/

### License

Code licensed under [Apache 2.0 License](https://github.com/sooluh/kodepos/blob/main/LICENSE).

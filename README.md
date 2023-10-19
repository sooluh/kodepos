<a href="https://s.id/standwithpalestine"><img alt="I stand with Palestine" src="https://github.com/Safouene1/support-palestine-banner/blob/master/banner-project.svg" width="100%" /></a>

![@sooluh/kodepos](https://socialify.git.ci/sooluh/kodepos/image?description=1&descriptionEditable=Indonesian%20postal%20code%20search%20API%20by%20place%20name%2C%20village%20or%20city.&font=Raleway&forks=1&issues=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2Ftwitter%2Ftwemoji%2Fmaster%2Fassets%2Fsvg%2F1f4ee.svg&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark)

## Requirements

- Node.js `>= 16.20.1`
- Yarn `>= 1.22.0`

## Getting Started

1. Clone this repository

   ```bash
   git clone https://github.com/sooluh/kodepos.git
   ```

2. Move to the repository directory

   ```bash
   cd kodepos
   ```

3. Install dependencies

   ```bash
   yarn install
   ```

4. Run locally

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

<a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fsooluh%2Fkodepos%2Ftree%2Fmain">
  <img alt="Deploy with Vercel" src="https://vercel.com/button" height="32" />
</a>
<a href="https://app.koyeb.com/deploy?type=git&repository=github.com/sooluh/kodepos&branch=main&name=kodepos">
  <img alt="Deploy with Koyeb" src="https://www.koyeb.com/static/images/deploy/button.svg" height="32" />
</a>
<a href="https://render.com/deploy">
  <img alt="Deploy with Render" src="https://render.com/images/deploy-to-render-button.svg" height="32" />
</a>

## Basic Usage

Base URL : [`http://localhost:3000`](https://kodepos.vercel.app)

| Endpoint                                       | Description                     | Parameter | Method |
| ---------------------------------------------- | ------------------------------- | --------- | ------ |
| [`/search`](https://kodepos.vercel.app/search) | To find postcode using keywords | `q`       | `GET`  |

### Example of Use

#### Request

<pre>
curl -XGET '<a href="https://kodepos.vercel.app/?q=danasari">http://localhost:3000/search/?q=danasari</a>'
</pre>

#### Response

```json
{
  "statusCode": 200,
  "code": "OK",
  "data": [
    {
      "province": "Jawa Tengah",
      "regency": "Purbalingga",
      "district": "Karangjambu",
      "village": "Danasari",
      "code": "53357"
    },
    {
      "province": "Jawa Tengah",
      "regency": "Tegal",
      "district": "Bojong",
      "village": "Danasari",
      "code": "52465"
    },
    {
      "province": "Jawa Tengah",
      "regency": "Pemalang",
      "district": "Pemalang",
      "village": "Danasari",
      "code": "52314"
    },
    {
      "province": "Jawa Barat",
      "regency": "Ciamis",
      "district": "Cisaga",
      "village": "Danasari",
      "code": "46386"
    }
  ]
}
```

### Showcase

List of awesome projects powered by this API

- [**kodepos-web**](https://github.com/dotslashf/kodepos-web)<br>
  Simple web-app for postcode search by [dotslashf](https://github.com/dotslashf)

- [**Kode POS**](https://github.com/AzharRivaldi/Kode-POS-Indonesia)<br>
  Indonesia postal code search application (kotlin) by [AzharRivaldi](https://github.com/AzharRivaldi)

### Ready to use!

List of server APIs ready to use publicly

- [https://kodepos.vercel.app](https://kodepos.vercel.app/?q=danasari) `latest`
- [https://kodepos.onrender.com](https://kodepos.onrender.com/?q=danasari) `latest`
- [https://kodepos.cyclic.app](https://kodepos.cyclic.app/?q=danasari) `v2.2.0`
- [https://kodepos-82o09pkha-sooluh.vercel.app](https://kodepos-82o09pkha-sooluh.vercel.app/?q=danasari) `v2.2.0`

### License

This project is licensed under [Apache 2.0 License](https://github.com/sooluh/kodepos/blob/main/LICENSE).

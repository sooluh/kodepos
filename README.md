<a href="https://s.id/standwithpalestine"><img alt="I stand with Palestine" src="https://cdn.jsdelivr.net/gh/Safouene1/support-palestine-banner@master/banner-project.svg" width="100%" /></a>

![@sooluh/kodepos](https://socialify.git.ci/sooluh/kodepos/image?description=1&descriptionEditable=Indonesian%20postal%20code%20search%20API%20by%20place%20name%2C%20village%20or%20city%2Fregency.&font=Jost&forks=1&issues=1&logo=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmicrosoft%2Ffluentui-emoji%40main%2Fassets%2FPostbox%2FColor%2Fpostbox_color.svg&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Auto)

## Requirements

- Node.js `>= 20.x`
- npm

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
   npm ci
   ```

4. Run locally

   - Development mode

     ```bash
     npm run dev
     ```

   - Production mode

     1. Build first

        ```bash
        npm run build
        ```

     2. Start the app

        ```bash
        npm run start
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

### Open in

<a href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2Fsooluh%2Fkodepos">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://cdn.idx.dev/btn/open_light_32.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://cdn.idx.dev/btn/open_dark_32.svg">
    <img height="32" alt="Open in IDX" src="https://cdn.idx.dev/btn/open_purple_32.svg">
  </picture>
</a>
<a href="https://gitpod.io/#https://github.com/sooluh/kodepos">
  <img alt="Open in Gitpod" src="https://gitpod.io/button/open-in-gitpod.svg" height="32" />
</a>
<a href="https://codespaces.new/sooluh/kodepos">
  <img alt="Open in GitHub Codespaces" src="https://github.com/codespaces/badge.svg" height="32" />
</a>

## Endpoints

### Search by Place Name

```
[ENDPOINT] /search
```

<pre>
[GET] <a href="https://kodepos.vercel.app/search/?q=danasari">http://localhost:3000/search/?q=danasari</a>
</pre>

#### Query strings

| Params | Description | Required |
| ------ | ----------- | :------: |
| q      | keywords    |   [x]    |

### Search by Coordinates

```
[ENDPOINT] /detect
```

<pre>
[GET] <a href="https://kodepos.vercel.app/detect/?latitude=-6.547052&longitude=107.3980201">http://localhost:3000/detect/?latitude=-6.547052&longitude=107.3980201</a>
</pre>

#### Query strings

| Params    | Description | Required |
| --------- | ----------- | :------: |
| latitude  | -           |   [x]    |
| longitude | -           |   [x]    |

### Basic Usage

#### Request

<pre>
curl -XGET '<a href="https://kodepos.vercel.app/search/?q=danasari">http://localhost:3000/search/?q=danasari</a>'
</pre>

#### Response

```json
{
  "statusCode": 200,
  "code": "OK",
  "data": [
    {
      "code": 46386,
      "village": "Danasari",
      "district": "Cisaga",
      "regency": "Ciamis",
      "province": "Jawa Barat",
      "latitude": -7.3271342,
      "longitude": 108.4577572,
      "elevation": 110,
      "timezone": "WIB"
    },
    {
      "code": 53357,
      "village": "Danasari",
      "district": "Karangjambu",
      "regency": "Purbalingga",
      "province": "Jawa Tengah",
      "latitude": -7.1857161,
      "longitude": 109.4368274,
      "elevation": 705,
      "timezone": "WIB"
    },
    {
      "code": 52314,
      "village": "Danasari",
      "district": "Pemalang",
      "regency": "Pemalang",
      "province": "Jawa Tengah",
      "latitude": -6.8649882,
      "longitude": 109.3956117,
      "elevation": 6,
      "timezone": "WIB"
    },
    {
      "code": 52465,
      "village": "Danasari",
      "district": "Bojong",
      "regency": "Tegal",
      "province": "Jawa Tengah",
      "latitude": -7.1153626,
      "longitude": 109.1850778,
      "elevation": 737,
      "timezone": "WIB"
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

> [!IMPORTANT]
> For production usage, we recommend deploying it on your own and not using the list below. The list below can be used for development or learning purposes only!

- [https://kodepos.vercel.app](https://kodepos.vercel.app/search/?q=danasari) `latest`
- [https://kodepos.onrender.com](https://kodepos.onrender.com/search/?q=danasari) `latest`

### License

This project is licensed under [Apache 2.0 License](https://github.com/sooluh/kodepos/blob/main/LICENSE).

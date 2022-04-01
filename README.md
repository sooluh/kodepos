![kodepos](https://socialify.git.ci/sooluh/kodepos/image?description=1&descriptionEditable=Indonesian%20postal%20code%20search%20API%20by%20place%20name%2C%20village%20or%20city.&font=Raleway&forks=1&issues=1&logo=https%3A%2F%2Fraw.githubusercontent.com%2Ftwitter%2Ftwemoji%2Fmaster%2Fassets%2Fsvg%2F1f4ee.svg&name=1&owner=1&pattern=Charlie%20Brown&pulls=1&stargazers=1&theme=Dark)

## Development

1. Clone this repository

   ```
   git clone https://github.com/sooluh/kodepos.git
   ```

2. Change current directory to this repository folder

   ```
   cd kodepos
   ```

3. Install dependencies

   ```
   yarn install
   ```

4. Run the server

   - Development mode

     ```
     yarn dev
     ```

   - Production mode

     1. Build first

        ```
        yarn build
        ```

     2. Run

        ```
        yarn start
        ```

## Usage

Base URL : `http://localhost:3000/`

### Endpoint

| Endpoint  | Description                     | Parameter | Method |
| --------- | ------------------------------- | --------- | ------ |
| `/search` | To find postcode using keywords | `q`       | GET    |

### Example

#### Request

```curl
curl -XGET 'http://localhost:3000/search/?q=danasari'
```

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

### Ready to use

- https://kodepos.now.sh/

## Additional Information

### License

Code licensed under [Apache 2.0 License](https://github.com/sooluh/kodepos/blob/main/LICENSE).

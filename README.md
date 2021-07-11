# Postal Code API (Indonesia)

Indonesian postal code search API by place name, village or city.

## Development

1. Clone this repository
    ```
    git clone https://github.com/sooluh/kodepos.git
    ```

2. Change the current working directory to this repository folder
    ```
    cd kodepos
    ```
    
3. Install all modules listed as dependencies in package.json
    ```
    npm i --save
    ```
    
4. Run the server
    
    - Development mode
        ```
        npm run dev
        ```
    
    - Production mode
        ```
        npm run start
        ```

## Usage

Base URL : `http://localhost:3000/`

### Endpoint

| Endpoint  | Description                                 | Parameter | Method |
| --------- | ------------------------------------------- | --------- | ------ |
| `/`       | Only the start page shows basic information | No        | GET    |
| `/search` | To find postcode using keywords             | `q`       | GET    |

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
- https://kodepos.herokuapp.com/

## Additional Information

### License

Code licensed under [Apache 2.0 License](https://github.com/sooluh/kodepos/blob/main/LICENSE).

# Postal Code API (Indonesia)

Indonesian postal code search API by place name, village or city.

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
    npm install
    ```
    
4. Run the server
    
    - Development mode
        ```
        npm run dev
        ```
    
    - Production mode
        1. Build first
           ```
           npm run build
           ```
           
        2. Run
           ```
           npm start
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

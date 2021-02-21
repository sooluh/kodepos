# Postal Code API (Indonesia)

API Pencarian Kode Pos Indonesia Berdasarkan Nama Tempat, Desa atau Kota.

## Development

1. Clone this repository
    ```
    git clone https://github.com/sProDev/kodepos.git
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
| `/`       | Only the start page shows basic information | Tidak Ada | GET    |
| `/search` | To find postcode using keywords             | `q`       | GET    |

### Example

#### Request

```curl
curl -XGET 'http://localhost:3000/search?q=danasari'
```

#### Response

```json
{
    "success": true,
    "message": "success",
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

## Support Me

### Global

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/sProDev)

### Indonesia

- [Trakteer](https://trakteer.id/sproDev)
- [Saweria](https://saweria.co/sProDev)

## Additional Information

### License

Code licensed under [MIT License](https://github.com/sProDev/kodepos/blob/main/LICENSE).
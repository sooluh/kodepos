export interface DataResult {
    [key: string]: string
}

export interface DataResults extends Array<object> {
    [index: number]: {
        province: string,
        city: string,
        subdistrict: string,
        urban: string,
        postalcode: number
    }
}

export interface DataResponse {
    code: number,
    status: boolean,
    messages: string,
    data?: any,
    error?: any
}

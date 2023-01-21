import { DataTypeItem } from "../types/DataType"

export default class DataService {
    static getData = async () => {
        const response = await fetch(
            `https://6222994f666291106a29f999.mockapi.io/api/v1/products`
        )

        return response.json()
    }

    static getById = async (id: string) => {
        const response = await fetch(
            `https://6222994f666291106a29f999.mockapi.io/api/v1/products/?id=${id}`
        )

        return response.json()
    }
}

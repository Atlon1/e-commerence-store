import qs from "query-string";

import {Product} from "@/types";


const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface QueryParams {
    categoryId?: string
    colorId?: string
    sizeId?: string
    isFeatured?: boolean
}

const getProducts = async (query: QueryParams): Promise<Product[]> => {

    const url = qs.stringifyUrl({
        url: URL,
        query: {
            colorId: query.colorId,
            categoryId: query.categoryId,
            sizeId: query.sizeId,
            isFeatured: query.isFeatured
        }
    })

    const response = await fetch(url);

    return response.json()
}

export default getProducts
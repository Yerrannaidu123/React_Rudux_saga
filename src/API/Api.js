import axios from "axios";

export const ProductData=()=>{
    return axios.request({
        method: 'GET',
        url:"https://fakestoreapi.com/products",
    })
}

export const ProductDetails=(productId)=>{
    return axios.request({
        method: 'GET',
        url:`https://fakestoreapi.com/products/${productId}`,
    })
}
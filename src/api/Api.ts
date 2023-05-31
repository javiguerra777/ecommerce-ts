import axios from "axios";

const url: string = 'https://fakestoreapi.com';

export default function getAllProducts() {
  return axios.get(`${url}/products`);
}


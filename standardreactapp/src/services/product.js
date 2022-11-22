import axios from 'axios';
const baseUrl = 'http://localhost:3001/products';

const getProducts = () => {
    const request = axios.get(baseUrl);
    return request.then(response => response.data);
}

const getProduct = (id) => {
    const request = axios.get(`${baseUrl}/${id}`);
    return request.then(response => response.data);
}

export default { getProducts, getProduct };
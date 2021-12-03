import axios from 'axios';

const api = axios.create({
  baseURL: 'https://61a82d11387ab200171d2ffe.mockapi.io/bot'
})

export default api
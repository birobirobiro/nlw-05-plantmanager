import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/birobirobiro/nlw-05-plantmanager'
});

export default api;
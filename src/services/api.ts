import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.43.87:3333', // tem que pegar o endereço de rede local
});

export default api;

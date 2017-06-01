import axios from 'axios';

const ax = axios.create({
  baseURL: 'http://192.168.1.159:5000/',
  withCredentials: true
});

export default ax;

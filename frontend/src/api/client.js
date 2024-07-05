// src/api/client.js
import axios from 'axios';
import { BACKEND_API } from '../../config.local';

const client = axios.create({
  baseURL: BACKEND_API,
});

export default client;
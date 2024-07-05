// src/api/auth.js
import client from './client';

const USERS_URL = '/users';

export const loginUser = async (credentials) => {
  const response = await client.post(`${USERS_URL}/login`, credentials);
  return response.data;
};

export const logoutUser = async () => {
  const response = await client.post(`${USERS_URL}/logout`);
  return response.data;
};

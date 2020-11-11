import axios from 'axios';

const BASE_URL = "http://77.120.241.80:8811/api";

export async function getUsers() {
  const response = await axios.get(`${BASE_URL}/users`);
  const users = await response.data;

  return users;
}

import axios from 'axios';

const BASE_URL = "https://77.120.241.80:8811/api";

export async function getUsers() {
  const response = await axios.get(`${BASE_URL}/users`);
  const users = await response.data;

  return users;
}

export async function deleteUser(userId) {
  return axios.delete(`${BASE_URL}/user/${userId}`);
}

export async function createdUser(user) {
  return axios.post(`${BASE_URL}/users`, user);
}

export async function editCurrentUser(userId, user) {
  return axios.put(`${BASE_URL}/user/${userId}`, user);
}

import axios from 'axios';

export const axiosWithoutAuth = () => {
  return axios.create({
    baseURL: 'http://localhost:4000'
  })
}

export function getToken() {
  return localStorage.getItem('token')
}

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
      Authorization: getToken(),      
      'Content-Type': 'application/json',
    }
  })
}
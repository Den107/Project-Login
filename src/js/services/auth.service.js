import axios from '../plugins/axios';

/**
 * Make login request to api
 * @param {String} email 
 * @param {String} password 
 */
export async function login(email, password) {
  try {
    const response = await axios.post(`/auth/login`, JSON.stringify({ email, password }), {
    });
    return response.data;
  } catch (error) {
    return Promise.reject(error);
  }
}
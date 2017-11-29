import axios from 'axios';
import { getSession } from './session';

const endpoint = 'http://localhost:3000';

export function get(namespace, params, headers) {
  let url = `${endpoint}/${namespace}`;

  return new Promise((resolve, reject) => {
    let token = getSession();
    let headers = token ? { authorization: `${token}` } : {};

    axios({
      method: 'GET',
      url,
      data: params,
      headers
    })
      .then(response => {
        if (response.data.success) {
          resolve(response);
        } else {
          reject('unauthorized');
        }
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function post(namespace, params, headers) {
  let url = `${endpoint}/${namespace}`;

  return new Promise((resolve, reject) => {
    let token = getSession();
    let headers = token ? { Authorization: `Bearer ${token}` } : {};

    axios({
      method: 'POST',
      url,
      data: params,
      headers
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err);
      });
  });
}

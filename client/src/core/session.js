export function setSession(token) {
  window.localStorage.setItem('token', token);
}

export function getSession(token) {
  window.localStorage.getItem('token');
}

export function setSession(token) {
  window.localStorage.setItem('token', token);
  window.localStorage.setItem('isAuth', true);
}

export function getSession() {
  return window.localStorage.getItem('token');
}

export function isAuth() {
  return window.localStorage.getItem('isAuth');
}

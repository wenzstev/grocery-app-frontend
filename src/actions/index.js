export const setToken = (token) => {
  return {
    type: 'SETTOKEN',
    payload: token
  }
}

export const setUser = (user) => {
  return {
    type: 'SETUSER',
    payload: JSON.parse(user)
  }
}

const initialState = {
  token: 'get from backend',
  isAuthenticated: null,
  isLoading: true,
  user: null,
}

export default (state = initialState, action) => {
  const { payload, type } = action;

  
}
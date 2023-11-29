import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: null,
  email: '',
}

const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogout: () => initialState,
    setLogin: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      email: payload.email,
    }),
    setEmail: (state, { payload }) => ({
      ...state,
      email: payload.email,
    }),
  },
})

export const {
  setLogout,
  setLogin,
  setEmail
} = appSlice.actions

export default appSlice.reducer

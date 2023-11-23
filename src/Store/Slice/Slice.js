import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  // isAuthenticated: false,
  userId: null,
  courses: null,
  currentWorkout: null,
  email: '',
  forProgress: false,
  forTrainingList: false,
}

const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLogout: () => initialState,
    setLogin: (state, { payload }) => ({
      ...state,
      userId: payload.userId,
      // isAuthenticated: true,
      email: payload.email,
    }),
    setUserInfo: (state, { payload }) => ({
      ...state,
      courses: payload.courses,
    }),
    setCurrentWorkout: (state, { payload }) => ({
      ...state,
      currentWorkout: payload.currentWorkout,
    }),
    setTrainingList: (state, { payload }) => ({
      ...state,
      forTrainingList: payload.forTrainingList,
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
  setUserInfo,
  setCurrentWorkout,
  setEmail,
  setMyprogress,
  setTrainingList,
} = appSlice.actions

export default appSlice.reducer

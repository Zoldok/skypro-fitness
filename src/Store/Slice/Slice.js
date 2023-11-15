import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: false,
	userId: null, 
	courses: null,
	currentWorkout: null,
	email: null,
    forProgress: false,
    forTrainingList: false,
};

const appSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setLogout: () => initialState,
		setLogin: (state, { payload }) => {
			return {
				...state,
				userId: payload.userId,
				isAuthenticated: true,
				email: payload.email,
			};
		},
		setUserInfo: (state, { payload }) => ({
			...state,
			courses: payload.courses,
		}),
		setCurrentWorkout: (state, { payload }) => ({
			...state,
			currentWorkout: payload.currentWorkout,
		}),
		setEmail: (state, { payload }) => ({
			...state,
			email: payload.email,
		}),
        setMyprogress: (state, { payload }) => ({
            ...state,
            forProgress: payload.forProgress
        }),
        setTrainingList: (state, { payload }) => ({
            ...state,
            forTrainingList: payload.forTrainingList
        }),
    }
});

export const {
	setLogout,
	setLogin,
	setUserInfo,
	setCurrentWorkout,
	setEmail,
    setMyprogress,
    setTrainingList
} = appSlice.actions;

export default appSlice.reducer;

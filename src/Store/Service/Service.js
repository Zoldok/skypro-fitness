import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const Api = createApi({
  reducerPath: "Api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://fitness-pro-919d9-default-rtdb.europe-west1.firebasedatabase.app/",
  }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => `courses.json`,
    }),
    getCourseByName: builder.query({
        query: (_id) => `courses/${_id}.json`,
    }),
    getWorkoutById: builder.query({
        query: (_id) =>  ({
            url: `workouts/${_id}.json`,
        }),
    }),
    getExercisesById: builder.query({
        query: () =>  `exercise.json`,
    }),
    getUser: builder.query({
        query: (_id) =>  ({
            url: `users/${_id}.json`,
        }),
    }),
    addNewUser: builder.mutation({ 
        query: (body) => ({
            url: `users/${body.name}.json`,
            method: "POST",
            body: body.data,
        }),
    }),
    getWorkout: builder.query({ 
        query: (body) =>
            `users/${body.name}/courses/${body.courseName}/workouts/${body.workoutId}/url.json`,
    }),
    getUserProgress: builder.query({ 
        query: (body) =>
            `users/${body.name}/courses/${body.courseName}/workout/${body.workoutId}/progress.json`,
    }),
    addUserProgress: builder.mutation({ 
        query: (body) => ({
            url: `users/${body.name}/progress.json`,
            method: "POST",
            body: body.progress,
        }),
    }),
    setUserWorkoutCompleted: builder.mutation({
        query: (body) => ({ 
            url: `users/${body.userId}/courses/${body.courseName}/workouts/${body.workoutId}.json`,
            method: "PATCH",
            body: body.completed,
        }),
    }),
    addNewCourse: builder.mutation({
        query: (body) => ({
            url: `users/${body.userId}/courses/${body.courseName}.json`,
            method: "PUT",
            body: body.data,
        }),
    }),
  }),
});

export const { useGetAllCoursesQuery, useGetCourseByNameQuery, useGetWorkoutByIdQuery, useGetUserQuery,
 useAddNewUserMutation, useGetUserProgressQuery, useSetUserWorkoutCompletedMutation, useAddNewCourseMutation,
useAddUserProgressMutation, useGetExercisesByIdQuery } = Api;
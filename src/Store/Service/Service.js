import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const Api = createApi({
  reducerPath: 'Api',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://fitness-pro-919d9-default-rtdb.europe-west1.firebasedatabase.app/',
  }),
  endpoints: (builder) => ({
    getAllCourses: builder.query({
      query: () => `courses.json`,
    }),
    getWorkouts: builder.query({
      query: () => `workouts.json`,
    }),
    getWorkoutById: builder.query({
        query: (_id) =>  ({
            url: `workouts/${_id}.json`,
        }),
    }),
    getExercisesById: builder.query({
      query: () => `exercise.json`,
    }),
    getExercises: builder.query({
        query: (_id) =>  `exercise/${_id}.json`,
    }),
    getUser: builder.query({
      query: (_id) => ({
        url: `users/${_id}.json`,
      }),
    }),
    addNewUser: builder.mutation({
      query: (body) => ({
        url: `users/${body.id}.json`,
        method: 'PUT',
        body: body.data,
      }),
    }),

    addUserProgress: builder.mutation({
      query: (_id) => ({
        url: `users/${_id}/progress.json`,
        method: 'POST',
        body: body.progress,
      }),
    }),
  }),
})

export const {
  useGetAllCoursesQuery,
  useGetWorkoutByIdQuery,
  useGetUserQuery,
  useAddNewUserMutation,
  useAddUserProgressMutation,
  useGetExercisesByIdQuery,
  useGetExercisesQuery,
  useGetWorkoutsQuery,
} = Api

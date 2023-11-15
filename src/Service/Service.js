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
        query: (_id) =>  `workouts/${_id}.json`,
    }),
    getUser: builder.query({
        query: (name) => `users/${name}.json`,
    }),
    addNewUser: builder.mutation({ 
        query: (body) => ({
            url: `users/${body.name}.json`,
            method: "POST",
            body: body.data,
        }),
    }),
    getUserProgress: builder.query({ 
        query: (body) =>
            `users/${body.name}/courses/${body.courseName}/workout/${body.workoutId}/exercises.json`,
        providesTags: ["Progress"],
    }),
    setUserProgress: builder.mutation({ 
        query: (body) => ({
            url: `users/${body.userId}/courses/${body.courseName}/workouts/${body.workoutId}/exercises.json`,
            method: "PATCH",
            body: body.progress,
        }),
        invalidatesTags: ["Progress"],
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

export const { useGetAllCoursesQuery, useGetAllWorkoutsQuery, useGetUsersQuery } = Api;
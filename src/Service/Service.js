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
    getAllWorkouts: builder.query({
        query: () =>  `workouts.json`,
    }),
    getUsers: builder.query({
        query: () => `users.json`,
    }),
    // getUsersWorkouts: builder.query({
    //     query: () => 
    // })
  }),
});

export const { useGetAllCoursesQuery, useGetAllWorkoutsQuery, useGetUsersQuery } = Api;
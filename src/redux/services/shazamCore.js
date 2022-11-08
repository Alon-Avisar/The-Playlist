import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '7b60e0cf74msh6f0debccfc8c6fep1baa18jsn419d9e751e33',
//       'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//     }
//   };

//   fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "7b60e0cf74msh6f0debccfc8c6fep1baa18jsn419d9e751e33"
      );
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world'}),
  }),
});


export const {
    useGetTopChartsQuery,
} = shazamCoreApi
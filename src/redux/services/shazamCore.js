import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


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
    getTopCharts: builder.query({ query: () => "/charts/world" }),
    getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}`}),
    getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
    getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
    getSongDetails: builder.query({query: ({ songid }) => `/tracks/details?track_id=${songid}`,

    }),
  }),
});

export const {  useGetTopChartsQuery,  useGetSongDetailsQuery , useGetSongRelatedQuery , useGetArtistDetailsQuery , useGetSongsByCountryQuery , } = shazamCoreApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreAPi = createApi({
    reducerPath: 'shazamcoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-api7.p.rapidapi.com',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'e3a8435b11msh54c6c766b534228p147afcjsn5b0d5534c216');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () =>'/charts/get-top-songs-in-world'}),
        getSongsByGenre: builder.query({ query: (genre) => `/charts/get-top-songs-in_world_by_genre?genre=${genre}` }),
        getSongsByCountry: builder.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
        getSongsBySearch: builder.query({ query: (searchTerm) => `/search?query=${searchTerm}` }),
        getArtistDetails: builder.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
        getSongDetails: builder.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        getSongRelated: builder.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreAPi;
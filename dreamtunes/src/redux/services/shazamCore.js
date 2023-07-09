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
    }),
});

export const {
    useGetTopChartsQuery,
} = shazamCoreAPi;
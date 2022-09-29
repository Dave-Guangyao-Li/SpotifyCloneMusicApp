// main file for making API calls to shazam core
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'; 

    
export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
        prepareHeaders:
            (headers) => {
                headers.set('X-RapidAPI-Key', '0695ca0183mshb9416d8acb30621p17dfd8jsne2b3e84304a2');
                return headers;
            }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: (genre)=>
             '/charts/world'}),
    }),
});

export const { useGetTopChartsQuery } = shazamCoreApi; 

    
    
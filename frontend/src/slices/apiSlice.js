import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';
import { BACKEND_API } from '../../config.local';

const baseQuery = fetchBaseQuery({ baseUrl: BACKEND_API });

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'],
    endpoints: (builder) => ({}),
});

export default apiSlice;
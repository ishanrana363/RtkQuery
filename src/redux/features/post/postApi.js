import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const postApi = createApi({
    reducerPath: 'postsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com',
    }),
    endpoints: (builder) => ({
        getAllPostData: builder.query({
            query: () => `/posts`,
        }),
    }),
});

export const { useGetAllPostDataQuery } = postApi;
export default postApi;

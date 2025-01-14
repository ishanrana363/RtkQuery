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
        postById: builder.query({
            query: (id) => `/posts/${id}`,
        }),
        createPost: builder.mutation({
            query: (data) => ({
                url: `/posts`,
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/posts/${id}`,
                method: "DELETE",
            })
        }),
        updatePost: builder.mutation({
            query: ({data, id}) => ({
                url: `/posts/${id}`,
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }

            })
        }),
    }),
});

export const { useGetAllPostDataQuery, usePostByIdQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation } = postApi;
export default postApi;

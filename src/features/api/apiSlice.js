/** @format */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://rtk-query-crud-ioez.onrender.com",
	}),
	tagTypes: ["Post"],
	endpoints: (builder) => ({
		getPosts: builder.query({
			query: () => "/posts",
			providesTags: ["Post"],
		}),
		createPost: builder.mutation({
			query: (newPost) => ({
				url: "/posts",
				method: "POST",
				body: newPost,
			}),
			invalidatesTags: ["Post"],
		}),
		deletePost: builder.mutation({
			query: (id) => ({
				url: `/posts/${id}`,
				method: "DELETE",
			}),
            invalidatesTags: ["Post"]
		}),
	}),
});


export const {
    useGetPostsQuery,
    useCreatePostMutation,
    useDeletePostMutation,
} = apiSlice
/** @format */

// components/PostList.jsx
import { useDeletePostMutation, useGetPostsQuery } from "../features/api/apiSlice";

const PostList = () => {
	const { data, isLoading, isError ,isDeleting} = useGetPostsQuery()
	const [deletePost] = useDeletePostMutation()
	console.log(data);
	
	
	if (isLoading) return <p>Loading posts...</p>;
	if (isError) return <p>Error fetching posts.</p>;

	const handleDelete = async (id) => {
			await deletePost(id);
	};
console.log(data);

	return (
		<div className='p-4 border rounded shadow'>
			<h2 className='text-xl font-bold mb-2'>Posts</h2>
			<ul className='space-y-2'>
				{ data?.map((post) => (
					<li
						key={post.id}
						className='flex justify-between items-center border p-2 rounded'>
						<span>{post.title}</span>
						<span>{post.desc}</span>
						<button
							onClick={() => handleDelete(post.id)}
							disabled={isDeleting}
							className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600'>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default PostList;

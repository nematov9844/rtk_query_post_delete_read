/** @format */

import { useState } from "react";
import { useCreatePostMutation } from "../features/api/apiSlice";

export default function CreatePost() {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");
	const [createPost, { isLoading }] = useCreatePostMutation();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (title.trim()) {
			await createPost({ title, desc, body: "This is a new post ", userId: Date.now() });
			setTitle("");
			setDesc("")
		}
	};
	return (
		<form
			onSubmit={handleSubmit}
			className='p-4 border rounded shadow'>
			<h2 className='text-xl font-bold mb-2'>Create a New Post</h2>
			<input
				type='text'
				placeholder='Enter post title'
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				className='border p-2 w-full mb-4'
			/>
				<input
				type='text'
				placeholder='Enter post Desc'
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
				className='border p-2 w-full mb-4'
			/>
			<button
				type='submit'
				disabled={isLoading}
				className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>
				{isLoading ? "Creating..." : "Create Post"}
			</button>
		</form>
	);
}

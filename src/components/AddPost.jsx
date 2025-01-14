import React, { useState } from 'react';
import { useCreatePostMutation } from '../redux/features/post/postApi';

const AddPost = () => {
    
    const [createPost] = useCreatePostMutation();
    console.log(createPost);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const userId = e.target.userId.value;
        const title = e.target.title.value;
        const body = e.target.body.value;

        const payload = {
            userId: parseInt(userId),
            title,
            body,
        }

        try {
            await createPost(payload);
            alert('Post created successfully');
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                    Input Form
                </h2>
                <form onSubmit={handleSubmit}>
                    {/* User ID */}
                    <div className="mb-4">
                        <label
                            htmlFor="userId"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            User ID
                        </label>
                        <input
                            type="text"
                            id="userId"
                            name="userId"
                            placeholder="Enter User ID"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                        <label
                            htmlFor="title"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            placeholder="Enter Title"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        />
                    </div>

                    {/* Body */}
                    <div className="mb-4">
                        <label
                            htmlFor="body"
                            className="block text-sm font-medium text-gray-700 mb-2"
                        >
                            Body
                        </label>
                        <textarea
                            id="body"
                            name="body"
                            placeholder="Enter Body Content"
                            rows="4"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddPost;

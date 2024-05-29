import { useEffect, useState } from "react";

import Swal from "sweetalert2";
import useAuth from "../hook/useAuth";

const AddBlog = () => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [category, setCategory] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');
    const { user } = useAuth();
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        if (user) {
            setUserEmail(user.email || "");
            setUserName(user.displayName || "");
        }
    }, [user]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            title,
            imageUrl,
            category,
            shortDescription,
            longDescription,
            userEmail,
            userName
        };

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Blog added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                // Reset the form fields
                setTitle('');
                setImageUrl('');
                setCategory('');
                setShortDescription('');
                setLongDescription('');
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to add the blog',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-teal-50">
            <div className="bg-teal-100 p-8 rounded-lg shadow-2xl w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
                <h2 className="text-3xl font-semibold mb-6 text-center">Add Blog</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                        <input
                            type="text"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select
                            id="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="Breakfast">Breakfast</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Asian">Asian</option>
                            <option value="Vegan">Vegan</option>
                            <option value="Salad">Salad</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="shortDescription" className="block text-sm font-medium text-gray-700 mb-2">Short Description</label>
                        <textarea
                            id="shortDescription"
                            value={shortDescription}
                            onChange={(e) => setShortDescription(e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="longDescription" className="block text-sm font-medium text-gray-700 mb-2">Long Description</label>
                        <textarea
                            id="longDescription"
                            value={longDescription}
                            onChange={(e) => setLongDescription(e.target.value)}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                            required
                        />
                    </div>
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2 mb-4 md:mb-0 md:pr-2">
                            <label className="label">
                                <span className="label-text">User Email:</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="email"
                                    name="user_Email"
                                    value={userEmail}
                                    readOnly
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 md:pl-2">
                            <label className="label">
                                <span className="label-text">User Name:</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="user_name"
                                    value={userName}
                                    readOnly
                                    className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                                />
                            </label>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-rose-400 text-white py-2 px-4 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;

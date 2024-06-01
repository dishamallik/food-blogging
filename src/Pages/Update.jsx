import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import useAuth from "../hook/useAuth";

const UpdateBlog = () => {
    const blog = useLoaderData();
    const { _id } = blog;
    const { user } = useAuth();
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userPhotoURL, setUserPhotoURL] = useState("");
    const [updatedBlog, setUpdatedBlog] = useState({
        title: blog.title,
        image: blog.image,
        category: blog.category,
        shortDescription: blog.shortDescription,
        longDescription: blog.longDescription
    });

    useEffect(() => {
        if (user) {
            setUserEmail(user.email || "");
            setUserName(user.displayName || "");
            setUserPhotoURL(user.photoURL || "");
        }
    }, [user]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const { title, image, category, shortDescription, longDescription } = updatedBlog;
    
        if (!title || !image || !category || !shortDescription || !longDescription) {
            Swal.fire({
                title: 'Error!!',
                text: 'Please fill in all the fields',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        const newBlogData = {
            title,
            image,
            category,
            shortDescription,
            longDescription,
            userEmail,
            userName,
            userPhotoURL
        };
    
        try {
            const response = await fetch(`https://food-blogging-server.vercel.app/blogs/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBlogData)
            });
    
            const data = await response.json();
    
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!!',
                    text: 'Blog Post updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
                setUpdatedBlog(newBlogData);
            }
        } catch (error) {
            console.error('Error:', error);
            Swal.fire({
                title: 'Error!!',
                text: 'Something went wrong. Please try again later.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBlog(prev => ({ ...prev, [name]: value }));
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10 mb-10">
                <div className="bg-teal-100 p-6 sm:p-10 lg:p-24">
                    <h2 className="text-3xl font-extrabold mb-6">Update Blog Post</h2>
                    <form onSubmit={handleUpdate}>
                        {/* User Info Card */}
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
                            <div className="flex items-center">
                                {userPhotoURL && <img src={userPhotoURL} alt="User Photo" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4" />}
                                <div>
                                    <p className="text-lg font-medium">{userName}</p>
                                    <p className="text-sm text-gray-600">{userEmail}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Title:</label>
                            <input 
                                type="text" 
                                name="title" 
                                value={updatedBlog.title} 
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Image URL:</label>
                            <input 
                                type="text" 
                                name="image" 
                                value={updatedBlog.image} 
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" 
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Category:</label>
                            <select 
                                name="category" 
                                value={updatedBlog.category} 
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                                <option value="">Select</option>
                                <option value="Desserts">Desserts</option>
                                <option value="Asian">Asian</option>
                                <option value="Vegan">Vegan</option>
                                <option value="Salad">Salad</option>
                                <option value="Breakfast">Breakfast</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Short Description:</label>
                            <textarea 
                                name="shortDescription" 
                                value={updatedBlog.shortDescription} 
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Long Description:</label>
                            <textarea 
                                name="longDescription" 
                                value={updatedBlog.longDescription} 
                                onChange={handleChange}
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                        </div>

                        <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-md">Update Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;

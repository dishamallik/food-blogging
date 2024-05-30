import { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import useAuth from "../hook/useAuth";

const AddBlog = () => {
    const { user } = useAuth();
    const [userEmail, setUserEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [userPhotoURL, setUserPhotoURL] = useState("");

    useEffect(() => {
        if (user) {
            setUserEmail(user.email || "");
            setUserName(user.displayName || "");
            setUserPhotoURL(user.photoURL || "");
        }
    }, [user]);

    const handleAddBlog = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const category = form.category.value;
        const shortDescription = form.short_description.value;
        const longDescription = form.long_description.value;
    
        if (!title || !image || !category || !shortDescription || !longDescription) {
            Swal.fire({
                title: 'Error!!',
                text: 'Please fill in all the fields',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }
    
        const newBlog = {
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
            const response = await fetch('http://localhost:5000/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newBlog)
            });
    
            const data = await response.json();
    
            if (data.insertedId) {
                Swal.fire({
                    title: 'Success!!',
                    text: 'Blog Post Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
    
                // Clear form fields after successful submission
                form.reset();
                setUserEmail("");
                setUserName("");
                setUserPhotoURL("");
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
    
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mt-10 mb-10">
                <div className="bg-teal-100 p-6 sm:p-10 lg:p-24">
                    <h2 className="text-3xl font-extrabold mb-6">Add Blog Post</h2>
                    <form onSubmit={handleAddBlog}>
                        {/* User Info Card */}
                        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-6">
                            <div className="flex items-center">
                                {userPhotoURL && <img src={userPhotoURL} alt="User Photo" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-4"/>}
                                <div>
                                    <p className="text-lg font-medium">{userName}</p>
                                    <p className="text-sm text-gray-600">{userEmail}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Title:</label>
                            <input type="text" name="title" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Image URL:</label>
                            <input type="text" name="image" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Category:</label>
                            <select name="category" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
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
                            <textarea name="short_description" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700">Long Description:</label>
                            <textarea name="long_description" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"></textarea>
                        </div>
                        
                        <button type="submit" className="bg-indigo-600 text-white py-2 px-4 rounded-md">Add Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlog;

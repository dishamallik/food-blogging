import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])

    return (
        <div>
             <div className="mt-4">
             <div className="text-center mb-4 mt-8 ">
                <h1 className="text-3xl font-bold"> RECENT BLOG</h1>
                <div className="border-b-2 border-red-600 w-16 mx-auto mt-2"></div>
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    blogs.map(blog => <BlogCard
                        key={blog._id}
                        blog={blog}
                    ></BlogCard>)
                }
            </div>
        </div>
        
    );
};

export default Blogs;
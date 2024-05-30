
import AllCard from "./AllCard";
import { useLoaderData } from "react-router-dom";


const AllBlogs = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                    blogs.map(blog => <AllCard
                        key={blog._id}
                        blog={blog}
                    ></AllCard>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;
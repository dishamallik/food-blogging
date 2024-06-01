import { useEffect, useState } from "react";
import AllCard from "./AllCard";

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch(`https://food-blogging-server.vercel.app/blogs?search=${search}`)
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [search]);

    const filteredBlogs = filter
        ? blogs.filter(blog => blog.category === filter)
        : blogs;

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const text = e.target.search.value;
        setSearch(text);
    };

    const handleReset = () => {
        setFilter('');
        setSearch('');
        document.querySelector('input[name="search"]').value = '';
    };

    return (
        <div className="container mx-auto">
            <div className="flex items-center mb-4">
                <select
                    className="p-2 text-base rounded border border-gray-300 shadow mr-4"
                    value={filter}
                    onChange={handleFilterChange}
                >
                    <option value="">All</option>
                    <option value="Desserts">Desserts</option>
                    <option value="Asian">Asian</option>
                    <option value="Vegan">Vegan</option>
                    <option value="Salad">Salad</option>
                    <option value="Breakfast">Breakfast</option>
                    {/* Add more options for each category */}
                </select>
                <form onSubmit={handleSearch} className="flex mr-4">
                    <input
                        type="text"
                        name="search"
                        className="p-2 text-base rounded border border-gray-300 shadow mr-2"
                        placeholder="Search by title"
                    />
                    <button
                        type="submit"
                        className="p-2 bg-blue-500 text-white text-base rounded shadow"
                    >
                        Search
                    </button>
                </form>
                <button
                    onClick={handleReset}
                    className="p-2 bg-gray-500 text-white text-base rounded shadow"
                >
                    Reset
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    filteredBlogs.map(blog => (
                        <AllCard
                            key={blog._id}
                            blog={blog}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AllBlogs;

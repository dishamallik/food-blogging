import { BiSolidBookmarkHeart } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const BlogCard = ({blog}) => {
    const { _id, title, image,  short_description , category} = blog;
    return (
        <div className="mt-6 w-96">
        <div className="relative h-56">
          <img
            src={image}
            alt="card-image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="px-6 py-4 bg-blue-gray-200">
          <h3 className="font-bold text-xl mb-2">{title}</h3>
          <p className="text-gray-700 text-base">{short_description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 bg-peach">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {category}
          </span>
          <div className="flex justify-between items-center mt-4">
            <button className=" btn btn-outline bg-rose-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
           Wishlist<BiSolidBookmarkHeart />
            </button>
            <Link to="/details">
              <button className=" btn btn-outline bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
                Details <FaArrowRight className="ml-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default BlogCard;
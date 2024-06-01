import { BiSolidBookmarkHeart } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../hook/useAuth";


const BlogCard = ({blog}) => {
    const { _id, title, image, shortDescription, category } = blog;
    const { user } = useAuth(); 
  
    const handleWishlist = (e) => {
      e.preventDefault();
  
      if (!user) {
        alert("Please log in to add to your wishlist");
        return;
      }
  
      const wishlistData = {
        userEmail: user.email,
        blogId: _id,
        title,
        image,
        shortDescription,
        category,
      };
  
      fetch('https://food-blogging-server.vercel.app/wishlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(wishlistData)
      })
        .then(res => res.json())
        .then(data => {
          console.log('Added to wishlist:', data);
          alert('Blog added to your wishlist');
        })
        .catch(error => {
          console.error('Error:', error);
          alert('Failed to add to wishlist. Please try again.');
        });
    };
  
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
          <p className="text-gray-700 text-base">{shortDescription}</p>
        </div>
        <div className="px-6 pt-4 pb-2 bg-peach">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {category}
          </span>
          <div className="flex justify-between items-center mt-4">
          <button
            onClick={handleWishlist}
            className="btn bg-rose-400 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
          >
           wishlist <BiSolidBookmarkHeart />
          </button>
          <Link to={`/wishlist/${_id}`}>
            <button className="btn btn-outline bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
              Details <FaArrowRight className="ml-1" />
            </button>
          </Link>
        </div>
        </div>
      </div>
    );
};

export default BlogCard;

import { Link } from "react-router-dom";

const WishlistCard = ({ wishlist }) => {
  // Check if wishlist is undefined or null
  if (!wishlist) {
    return <div>Invalid wishlist data</div>;
  }

  // Destructure wishlist properties
  const { _id, title, image, shortDescription, category } = wishlist;

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-500">{shortDescription}</p>
        <p className="text-sm text-gray-400 mt-2">Category: {category}</p>
        <Link to={`/wishlist/${_id}`} className="block mt-4 text-center text-blue-500 hover:text-blue-700">
          Details
        </Link>
      </div>
    </div>
  );
};

export default WishlistCard;

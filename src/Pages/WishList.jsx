import { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import WishlistCard from "./WishlistCard";


const WishList = () => {
    const { user } = useAuth();
    const [wishlists, setWishlist] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/wishlist/?serEmail=${user.email}`)
                .then((res) => res.json())
                .then((data) => {
                    console.log('Fetched wishlist data:', data); 
                    setWishlist(data);
                })
                .catch((error) => {
                    console.error('Error fetching data:', error);
                });
        }
    }, [user]);
    

    return (
        <div>
           
           
            {wishlists.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                    {/* Render wishlist items */}
                    {wishlists.map((wishlist) => (
                        <WishlistCard key={wishlist._id} wishlist={wishlist} />
                    ))}
                </div>
            ) : (
                <p>Wishlist is empty.</p>
            )}
        </div>
    );
};

export default WishList;

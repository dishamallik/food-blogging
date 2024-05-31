import  { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import WishlistCard from "./WishlistCard";

const WishList = () => {
    const { user } = useAuth();
    const [wishlists, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWishlist = async () => {
            try {
                if (user?.email) {
                    const response = await fetch(`http://localhost:5000/wishlist/?userEmail=${user.email}`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch wishlist data');
                    }
                    const data = await response.json();
                    setWishlist(data);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWishlist();
    }, [user]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            {wishlists.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
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

import { createContext, useState, useContext, useEffect } from "react";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const { user } = useAuth(); 
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist when user logs in
  useEffect(() => {
    if (!user) {
      setWishlist([]);
      return;
    }

    const saved = localStorage.getItem(`wishlist_${user.id}`);
    setWishlist(saved ? JSON.parse(saved) : []);
  }, [user]);

  // Save whenever wishlist changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(wishlist));
    }
  }, [wishlist, user]);

  const addToWishlist = (item) => {
    const exists = wishlist.find((p) => p.id === item.id);
    if (!exists) {
      setWishlist([...wishlist, item]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  // ⭐ ADD THIS — return wishlist count
  const getWishlistCount = () => wishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        clearWishlist,
        getWishlistCount, // ⭐ now available everywhere
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);

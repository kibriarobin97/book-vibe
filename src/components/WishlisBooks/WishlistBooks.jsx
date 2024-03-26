import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../utils/utils";
import ShowWishlist from "../ShowWishlist/ShowWishlist";

const WishlistBooks = () => {

    const [wishlistBook, setWishlistBook] = useState([])

    useEffect(() => { 
        const data = getDataFromLocalStorage()
        setWishlistBook(data);
    }, [])

    console.log(wishlistBook)
    return (
        <div className="flex flex-col justify-center items-center">
            {
                wishlistBook.map(book => <ShowWishlist key={book.bookId} book={book}></ShowWishlist>)
            }
        </div>
    );
};

export default WishlistBooks;
import { useEffect, useState } from "react";
import { getDataForWishlist} from "../../utils/utils";
import ShowWishlist from "../ShowWishlist/ShowWishlist";

const WishlistBooks = () => {

    const [wishlistBook, setWishlistBook] = useState([])

    useEffect(() => { 
        const data = getDataForWishlist()
        setWishlistBook(data);
    }, [])

    // console.log(wishlistBook)
    return (
        <div>
            {
                wishlistBook.map(book => <ShowWishlist key={book.bookId} book={book}></ShowWishlist>)
            }
        </div>
    );
};

export default WishlistBooks;
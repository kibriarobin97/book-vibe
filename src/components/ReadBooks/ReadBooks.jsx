import { useEffect, useState } from "react";
import { getDataFromLocalStorage } from "../../utils/utils";
import ShowReadBooks from "../ShowReadBooks/ShowReadBooks";

const ReadBooks = () => {

    const [readBook, setReadBook] = useState([])

    useEffect(() => { 
        const data = getDataFromLocalStorage()
        setReadBook(data);
    }, [])
    // console.log(readBook)
    return (
        <div className="flex flex-col justify-center items-center">
            {
                readBook.map((book) => <ShowReadBooks key={book.bookId} book={book}></ShowReadBooks>)
            }
        </div>
    );
};

export default ReadBooks;
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    // console.log(books)

    return (
        <div>
            <h3 className="text-4xl font-bold text-center my-10 underline">Books</h3>
            <div className="grid md:grid-cols-3 gap-5 my-5">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
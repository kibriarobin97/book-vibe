import { useEffect } from "react";
import { useState } from "react";
import UpcomingBook from "../UpcomingBook/UpcomingBook";

const UpcomingBooks = () => {
    const [upcoming, setUpcoming] = useState([])

    useEffect(() => {
        fetch('upcoming.json')
            .then(res => res.json())
            .then(data => setUpcoming(data))
    }, [])
    // console.log(upcoming)
    return (
        <div>
            <div className="my-10">
                <h3 className="text-3xl font-bold text-center underline">Upcoming Books</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-5 my-5">
                {
                    upcoming.map(book => <UpcomingBook key={book.bookId} book={book}></UpcomingBook>)
                }
            </div>
        </div>
    );
};

export default UpcomingBooks;
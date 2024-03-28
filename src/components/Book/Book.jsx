import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, bookName, author, tags, category, rating } = book;
    
    return (
        <Link to={`/book/${bookId}`}>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure className="pt-3"><img src={image} alt={bookName} className="object-cover bg-center w-[300px] h-[200px] rounded-md" /></figure>
                <div className="card-body">
                    <div className="flex justify-start gap-4">
                        {
                            tags.map((tag, idx) => <li key={idx}
                                className="list-none font-medium text-[#23BE0A] bg-[#23BE0A0D] px-3 py-2 rounded-md"
                            >{tag}</li>)
                        }
                    </div>
                    <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                    <p className="font-semibold">By: {author}</p>
                    <div className="card-actions justify-start">
                        <p className="font-medium">{category}</p>
                        <p className="flex items-center justify-center gap-1 font-medium">{rating}<FaRegStar /></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};


Book.propTypes = {
    book: PropTypes.object
}

export default Book;
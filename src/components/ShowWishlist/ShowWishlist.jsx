import PropTypes from 'prop-types';
import { MdPublishedWithChanges } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { MdOutlineContactPage } from "react-icons/md";
import { Link } from 'react-router-dom';

const ShowWishlist = ({ book }) => {

    const { bookId, image, bookName, author, tags, category, rating, totalPages, publisher, yearOfPublishing } = book;

    return (
        <div className="card lg:card-side bg-base-100 shadow-xl my-5">
            <figure className='bg-[#1313130D] rounded-lg'><img src={image} alt={bookName} className='w-[200px] h-[200px] p-3 rounded-lg' /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{bookName}</h2>
                <p className='font-semibold'>By: {author}</p>
                <div className='md:flex items-center gap-5'>
                    <ul className='flex justify-start items-center gap-3'>
                        {
                            tags.map((tag, idx) => <li key={idx}
                                className='list-none font-medium text-[#23BE0A] bg-[#23BE0A0D] px-3 py-2 rounded-full'
                            >#{tag}</li>)
                        }
                    </ul>
                    <div>
                        <p className='flex items-center gap-1 font-medium'><MdPublishedWithChanges /> Year of Publishing: {yearOfPublishing}</p>

                    </div>
                </div>

                <div className='md:flex items-center gap-10 border-b-2 pb-3'>
                    <div>
                        <p className='flex items-center justify-center gap-2 font-medium'><GrUserManager className='text-xl' />Publisher: {publisher}</p>
                    </div>
                    <div>
                        <p className='flex items-center gap-2 font-medium'><MdOutlineContactPage className='text-xl' />Page: {totalPages}</p>
                    </div>
                </div>
                
                <div className="md:flex justify-start items-center gap-5">
                    <ul className='flex items-center gap-5 my-3 md:my-0'>
                        <p className='text-[#328EFF] bg-[#328EFF26] px-3 py-2 rounded-full font-medium'>Category: {category}</p>
                        <p className='px-3 py-2 rounded-full font-medium text-[#FFAC33] bg-[#FFAC3326]'>Rating: {rating}</p>
                    </ul>
                    <Link to={`/book/${bookId}`}>
                        <button
                            className="btn bg-[#23BE0A] text-white font-bold rounded-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

ShowWishlist.propTypes = {
    book: PropTypes.object
}

export default ShowWishlist;
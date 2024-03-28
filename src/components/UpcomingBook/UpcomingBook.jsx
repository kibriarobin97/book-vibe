import PropTypes from 'prop-types';

const UpcomingBook = ({ book }) => {
    const { bookName, image, author, publishingDate, category } = book;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="pt-3"><img src={image} alt={bookName} className="object-cover bg-center w-[300px] h-[200px] rounded-md" /></figure>
            <div className="card-body text-center">
                <h2 className="font-bold text-2xl text-center">{bookName}</h2>
                <p className="font-semibold">By: {author}</p>
                <p><span className="font-bold">Category:</span> {category}</p>
                <p><span className="font-bold">Publish Date:</span> {publishingDate}</p>
            </div>
        </div>
    );
};


UpcomingBook.propTypes ={
    book: PropTypes.object
}

export default UpcomingBook;
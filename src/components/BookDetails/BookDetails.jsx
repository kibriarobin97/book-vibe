import { useLoaderData, useParams } from "react-router-dom";
import { saveDataForWishlist, saveDataToLocalStorage } from "../../utils/utils";
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = () => {

    const books = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)

    const book = books.find(book => book.bookId === idInt);

    const { image, bookName, author, tags, category, rating, review, totalPages, publisher, yearOfPublishing } = book;

    const handleRead = () => {
        saveDataToLocalStorage(book)
    }

    const handleWishlist = () => {
        saveDataForWishlist(book);
    }

    return (
        <section className="my-5">
            <div className=" p-6 mx-auto space-y-6 sm:space-y-12">
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 ">
                    <img src={image} alt="" className="object-cover w-full rounded sm:h-80 lg:col-span-7" />
                    <div className="p-6 space-y-2 lg:col-span-5">
                        <h3 className="text-2xl font-bold sm:text-4xl">{bookName}</h3>
                        <p className="font-semibold mt-2">By: {author}</p>
                        <p className="font-semibold py-3">{category}</p>
                        <p><span className="font-bold">Review: </span>{review}</p>
                        <div className="py-5">
                            <ul className="flex justify-start items-center gap-3">
                                {
                                    tags.map((tag, idx) => <li key={idx}><span className="list-none font-medium text-[#23BE0A] bg-[#23BE0A0D] px-3 py-2 rounded-md my-4">#{tag}</span></li>)
                                }
                            </ul>
                        </div>
                        <p>Number of Page: <span className="font-bold">{totalPages}</span></p>
                        <p>Publisher: <span className="font-bold">{publisher}</span></p>
                        <p>Year of Publishing: <span className="font-bold">{yearOfPublishing}</span></p>
                        <p>Rating: <span className="font-bold">{rating}</span></p>
                        <div className="flex gap-3 py-3">
                            <button 
                            onClick={handleRead}
                            className="btn bg-[#23BE0A] text-white font-bold hover:text-black duration-500">Read</button>
                            <button
                            onClick={handleWishlist}
                            className="btn bg-[#50B1C9] font-bold">Wishlist</button>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default BookDetails;
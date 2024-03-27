import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const ListedBooks = () => {
    

    const [tabIndex, setTabIndex] = useState(0) 
    return (
        <div>
            <div className="bg-[#1313130D] h-20 rounded-lg mt-3 flex justify-center items-center">
                <h3 className="text-3xl font-bold">Books</h3>
            </div>
            <div className="flex flex-col justify-center items-center my-5">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white font-bold">Sort by <FaArrowDown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><a>Rating</a></li>
                        <li><a>Number of pages</a></li>
                        <li><a>Publisher year</a></li>
                    </ul>
                </details>
            </div>
            <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-gray-100">
                <Link  
                to=''
                onClick={() => setTabIndex(0)}
                className={`flex items-center flex-shrink-0 text-black px-5 py-3 space-x-2 
                            ${tabIndex === 0 ? 'border border-b-0 font-bold' : 'border-b'} rounded-t-lg border-gray-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                    </svg>
                    <span>Read Books</span>
                </Link>

                <Link
                to={`wishlist`}
                onClick={() => setTabIndex(1)}
                className={`flex items-center flex-shrink-0 text-black px-5 py-3 space-x-2 
                            ${tabIndex === 1 ? 'border border-b-0 font-bold' : 'border-b'} rounded-t-lg border-gray-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                    <span>Wishlist Books</span>
                </Link>

            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default ListedBooks;
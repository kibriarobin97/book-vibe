import { toast } from "react-toastify";


export const saveDataToLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem('read-list')) || [];
    const dataExists = savedData.find(item => item.bookId === book.bookId)
    if (!dataExists) {
        savedData.push(book);
        localStorage.setItem('read-list', JSON.stringify(savedData));
        toast.success("Successfully added to read list", {position: "top-center"})
    }
    else {
        toast.warn('Already exists in reading list', {position: "top-center"});
    }
};
export const getDataFromLocalStorage = () => {
    const getData = JSON.parse(localStorage.getItem('read-list')) || [];
    return getData;
};

export const saveDataForWishlist = (book) => {
    const readExistsData = getDataFromLocalStorage()
    const existsData = readExistsData.find(data => data.bookId === book.bookId);
    if (!existsData) {
        const saveData = JSON.parse(localStorage.getItem('wishlist')) || [];
        const exists = saveData.find(item => item.bookId === book.bookId);

        if (!exists) {
            saveData.push(book);
            localStorage.setItem('wishlist', JSON.stringify(saveData));
            toast.success('Successfully added to wishlist', {position: "top-center"});
        }
        else {
            toast.warn('Already exists in wishlist', {position: "top-center"});
        }
    }
    else{
        toast.warn('This book is already read', {position: "top-center"});
    }

};

export const getDataForWishlist = () => {
    const getsData = JSON.parse(localStorage.getItem('wishlist')) || [];
    return getsData;
}
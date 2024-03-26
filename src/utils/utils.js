import { toast } from "react-toastify";


export const saveDataToLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem('books')) || [];
    const dataExists = savedData.find(item => item.bookId === book.bookId)
    if (!dataExists) {
        savedData.push(book);
        localStorage.setItem('books', JSON.stringify(savedData));
       toast.success("Successfully added to read list")
    }
    else {
        toast.warn('Already exists reading list');
    }
};
export const getDataFromLocalStorage = () => {
    const getData = JSON.parse(localStorage.getItem('books')) || [];
    return getData;
}
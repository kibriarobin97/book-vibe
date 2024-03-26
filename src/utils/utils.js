export const saveDataToLocalStorage = (book) => {
    const savedData = JSON.parse(localStorage.getItem('books')) || [];
    const dataExists = savedData.find(item => item.bookId === book.bookId)
    if (!dataExists) {
        savedData.push(book);
        localStorage.setItem('books', JSON.stringify(savedData));
    }
    else {
        alert('already exists');
    }
};
export const getDataFromLocalStorage = () => {
    const getData = JSON.parse(localStorage.getItem('books')) || [];
    return getData;
}
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getStoredReadBooks = ()=>{
    const storedReadBooks = localStorage.getItem('read-books');
    if(storedReadBooks){
        return JSON.parse(storedReadBooks);
    }
    return [];
}

const getStoredWishlistBooks = ()=>{
    const storedWishlistBooks = localStorage.getItem('wishlist-books');
    if(storedWishlistBooks){
        return JSON.parse(storedWishlistBooks);
    }
    return [];
}

const saveReadBooks = id =>{
    const storedReadBooks = getStoredReadBooks();
    const exists = storedReadBooks.find(bookId => bookId === id);
    if(!exists){
        storedReadBooks.push(id);
        localStorage.setItem('read-books', JSON.stringify(storedReadBooks));
        toast.success("Book marked as read!!");
    }
}

const saveWishlistBooks = id =>{
    const storedWishlistBooks = getStoredWishlistBooks();
    const exists = storedWishlistBooks.find(bookId => bookId === id);
    if(!exists){
        storedWishlistBooks.push(id);
        localStorage.setItem('wishlist-books', JSON.stringify(storedWishlistBooks));
    }
}

export {getStoredReadBooks, getStoredWishlistBooks, saveReadBooks, saveWishlistBooks}
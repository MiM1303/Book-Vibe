import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    return (
        <div>
            <h2 className="mb-9 text-center font-playfair text-4xl font-bold text-[#131313]">Books</h2>
            <div className="grid lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book book={book} key={book.bookId}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookDetail = () => {
    const books = useLoaderData();
    const {bookId} = useParams();
    // console.log(bookId, books);
    const idInt = parseInt(bookId)
    const book = books.find(book => book.bookId === idInt);
    const {bookName, author, image, rating, category, tags, review, totalPages, publisher, yearOfPublishing} = book;
    // console.log(book);


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
            toast.success("Book marked as read!");
        }
        else{
            toast.error("Book is already added in read!")
        }
    }
    
    const saveWishlistBooks = id =>{
        const storedWishlistBooks = getStoredWishlistBooks();
        const storedReadBooks = getStoredReadBooks();
        const exists = storedWishlistBooks.find(bookId => bookId === id);
        const existsInRead = storedReadBooks.find(bookId => bookId === id);
        if(!exists && !existsInRead){
            storedWishlistBooks.push(id);
            localStorage.setItem('wishlist-books', JSON.stringify(storedWishlistBooks));
            toast.success("Book added to wishlist!");
        }
        else if(existsInRead)
        {
            toast.error("Book has already been read before!")
        }
        else{
            toast.error("Book is already in wishlist!")
        }
    }

    const handleRead = ()=>{
        saveReadBooks(bookId);
    }

    const handleWishlist = ()=>{
        saveWishlistBooks(bookId);
    }

    return (
        <div>
            <div className="flex gap-8 card lg:card-side bg-base-100">
                <div className="p-12 lg:p-20 bg-[#1313130D] rounded-2xl"><img className="h-[564px] rounded-2xl" src={image} alt="Album"/></div>
                <div className="lg:w-1/2 my-auto">
                    <h2 className="text-[#131313] font-bold text-[40px] font-playfair">{bookName}</h2>
                    <p className="font-work text-xl font-medium text-[#131313CC] mt-4 mb-6">By: {author}</p>
                    <hr/>
                    <p className="font-work text-xl font-medium text-[#131313CC] mt-4 mb-4">{category}</p>
                    <hr />
                    <p className="text-[#131313] font-work text-base font-normal mb-8 mt-6"><span className="font-bold">Review : </span>{review}</p>
                    <div className="flex gap-3 items-center"><span className="font-bold">Tag : </span>
                        <div className="flex gap-3">
                        {
                            tags.map(tag=> <p key={tag.index} className="font-work px-4 py-2 text-base font-medium rounded-full bg-[#23BE0A0D] text-[#23BE0A]">{tag}</p>)
                        }
                        </div>
                    </div>
                    <hr className="mt-6 mb-7"/>
                    <div className="overflow-x-auto">
                        <table className="table text-[#131313B2] font-work font-normal text-base">
                            <tbody>
                            {/* row 1 */}
                            <tr className="border-none">
                                <td>Number of Pages: </td>
                                <th>{totalPages}</th>
                            </tr>
                            {/* row 2 */}
                            <tr className="border-none">
                                <td>Publisher: </td>
                                <th>{publisher}</th>
                            </tr>
                            {/* row 3 */}
                            <tr className="border-none">
                                <td>Year of Publishing: </td>
                                <th>{yearOfPublishing}</th>
                            </tr>
                            {/* row 4 */}
                            <tr className="border-none">
                                <td>Rating: </td>
                                <th>{rating}</th>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="font-semibold text-lg font-work">
                        <button onClick={handleRead} className="btn mr-4 py-5 px-7 bg-transparent border-[#1313134D] text-[#131313]">Read</button>
                        <button onClick={handleWishlist} className="btn py-5 px-7 bg-[#50B1C9] border-none text-white">Wishlist</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookDetail;
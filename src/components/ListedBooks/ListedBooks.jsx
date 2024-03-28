import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks, getStoredWishlistBooks } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import ListedBook from "../ListedBook/ListedBook";
import Book from "../Book/Book";

const ListedBooks = () => {
    const books = useLoaderData();
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [tabIndex, setTabIndex]= useState(0);
    const [list, setList] = useState(readBooks);
    
    
        useEffect(()=>{
            const readBookIds = getStoredReadBooks();
            if(readBookIds.length > 0)
            {
                const readBookDetails = books.filter(book=> readBookIds.includes(book.bookId));
                // setReadBooks(readBookDetails);
                setList(readBookDetails);
                // console.log(books, readBookIds, readBookDetails);
            }
        },[])
        console.log(readBooks);

        useEffect(()=>{
            const wishlistBookIds = getStoredWishlistBooks();
            if(wishlistBookIds.length > 0)
            {
                const wishlistBookDetails = books.filter(book=> wishlistBookIds.includes(book.bookId));
                setWishlistBooks(wishlistBookDetails);
            }
        },[]);
    
        // const showReadBooks =()=>{
        //     setReadBtn(true)
        // }
        // const showWishlistBooks =()=>{
        //     setReadBtn(false)
        // }

    return (
        
        <div>
            <div className="bg-[#1313130D] rounded-2xl py-8 text-center text-[28px] font-bold font-work text-[#131313]">Books</div>
            <div className="text-center mt-8 mb-14">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white font-work font-semibold text-lg">Sort By <IoIosArrowDown></IoIosArrowDown></summary>
                    <ul className="p-2 text-left text-lg shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li>Rating</li>
                        <li className="my-2">Number of Pages</li>
                        <li>Published Year</li>
                    </ul>
                </details>
            </div>
            
            <div role="tablist" className="tabs tabs-lifted mb-8">
                <a role="tab" className={`tab ${tabIndex===0 ? 'tab-active' : ''}`}><button onClick={()=>{setTabIndex(0); setList(readBooks);}}>Read Books</button></a>
                <a role="tab" className={`tab ${tabIndex===1 ? 'tab-active' : ''}`}><button onClick={()=>{setTabIndex(1); setList(wishlistBooks);}}>Wishlist Books</button></a>
                <a role="tab" className="tab "></a>
            </div>

            <div className="flex flex-col gap-6">
                {
                    list.map(book => <ListedBook book={book} key={book.bookId}></ListedBook>)
                    // wishlistBooks.map(book => <ListedBook book={book} key={book.bookId}></ListedBook>)
                }
            </div>
        </div>
    );
};

export default ListedBooks;
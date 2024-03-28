import { IoIosArrowDown } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks, getStoredWishlistBooks } from "../../utility/localstorage";
import { useEffect, useState } from "react";
import ListedBook from "../ListedBook/ListedBook";
// import Book from "../Book/Book";

const ListedBooks = () => {
    const books = useLoaderData();
    const readBookIds = getStoredReadBooks();
    const wishlistBookIds = getStoredWishlistBooks();
    console.log (readBookIds, wishlistBookIds);

    const [tabIndex, setTabIndex]= useState(0);
    const [readBooks, setReadBooks] = useState([]);
    const [wishlistBooks, setWishlistBooks] = useState([]);
    const [display, setDisplay] = useState([]);
    const [mode, setMode] = useState(0);
    const [sorted, setSorted] = useState([]);

    // getting the book info of book ids in read and wishlist
    useEffect(()=>{
        const readBookIds = getStoredReadBooks();
        if(readBookIds.length > 0)
        {
            const readBookDetails = books.filter(book=> readBookIds.includes(book.bookId));
            setReadBooks(readBookDetails);
            setDisplay(readBookDetails);
            // console.log(books, readBookIds, readBookDetails);
        }
        if(wishlistBookIds.length > 0)
            {
                const wishlistBookDetails = books.filter(book=> wishlistBookIds.includes(book.bookId));
                setWishlistBooks(wishlistBookDetails);
            }
    },[])

    // console.log (readBooks, wishlistBooks);

    // sorting 
    // Rating
    const handleRatingSort = ()=>{
        if(tabIndex === 0)
        {
            const sortedBooks = readBooks.sort((a, b) => b.rating - a.rating);
            console.log('rating read sorted books:',sortedBooks);
            setSorted(sortedBooks);
        }
        else if(tabIndex === 1){
            const sortedBooks = wishlistBooks.sort((a, b) => b.rating - a.rating);
            console.log('rating wish sorted books:',sortedBooks);
            setSorted(sortedBooks);
        }        
    }
    // Page
    const handlePageSort = ()=>{
        if(tabIndex === 0)
        {
            const sortedBooks = readBooks.sort((a, b) => b.totalPages - a.totalPages);
            console.log('pages read sorted books:',sortedBooks);
            setSorted(sortedBooks);
        }
        else if(tabIndex === 1){
            const sortedBooks = wishlistBooks.sort((a, b) => b.totalPages - a.totalPages);
            console.log('pages wish sorted books:',sortedBooks);
            setSorted(sortedBooks);
        }        
    }
    // Year
    const handleYearSort = ()=>{
        if(tabIndex === 0)
        {
            const sortedBooks = readBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            console.log('year read sorted books:',sortedBooks);
            setSorted(sortedBooks);
        }
        else if(tabIndex === 1){
            const sortedBooks = wishlistBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
            console.log('year wish sorted books:',sortedBooks);
            setSorted(sortedBooks);
        }        
    }
    
   

    return (
        
        <div>
            <div className="bg-[#1313130D] rounded-2xl py-8 text-center text-[28px] font-bold font-work text-[#131313]">Books</div>

            {/* sort button */}
            <div className="text-center mt-8 mb-14">
                <details className="dropdown">
                    <summary className="m-1 btn bg-[#23BE0A] text-white font-work font-semibold text-lg">Sort By <IoIosArrowDown></IoIosArrowDown></summary>
                    <ul className="p-2 text-left text-lg shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <button onClick={()=>{setMode(1); handleRatingSort(); console.log(mode, 'rating');}}><li>Rating</li></button>
                        <button onClick={()=>{setMode(1); handlePageSort(); console.log(mode, 'pages');}}><li className="my-2">Number of Pages</li></button>
                        <button onClick={()=>{setMode(1); handleYearSort(); console.log(mode, 'year');}}><li>Published Year</li></button>
                    </ul>
                </details>
            </div>

            {/* tab */}
            <div role="tablist" className="tabs tabs-lifted mb-8">
                <a role="tab" className={`tab ${tabIndex===0 ? 'tab-active' : ''}`}><button onClick={()=>{setTabIndex(0); setDisplay(readBooks); setMode(0)}}>Read Books</button></a>
                <a role="tab" className={`tab ${tabIndex===1 ? 'tab-active' : ''}`}><button onClick={()=>{setTabIndex(1); setDisplay(wishlistBooks); setMode(0)}}>Wishlist Books</button></a>
                <a role="tab" className="tab "></a>
            </div>

            {/* books display div */}
            <div className={`flex flex-col gap-6 ${mode===1? 'hidden':''}`}>
                {
                    display.map(book => <ListedBook book={book} key={book.bookId}></ListedBook>)
                }
            </div>
            <div className={`flex flex-col gap-6 ${mode===1? '':'hidden'}`}>
                {
                    sorted.map(book => <ListedBook book={book} key={book.bookId}></ListedBook>)
                }
            </div>
        </div>
            
    );
};

export default ListedBooks;
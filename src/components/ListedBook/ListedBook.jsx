import { LuUsers } from "react-icons/lu";
import { MdOutlineFindInPage } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const ListedBook = ({book}) => {
    const {author, bookName, tags, yearOfPublishing, publisher, totalPages, category, rating, image, bookId}=book;
    return (
        <div>
            <div className="flex flex-col lg:flex-row  card border border-[#e9e4e4] p-6 card-side bg-base-100 ">
                <figure className="lg:px-12 px-2 py:2 lg:py-7 bg-[#1313130D] rounded-2xl"><img className="lg:h-44" src={image} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p>By: {author}</p>
                    <div className="flex gap-3 items-center"><span className="font-bold">Tag : </span>
                        <div className="flex gap-3">
                        {
                            tags.map((tag, index)=> <p key={index} className="font-work px-4 py-2 text-base font-medium rounded-full bg-[#23BE0A0D] text-[#23BE0A]">{tag}</p>)
                        }
                        </div>
                        <div className="ml-6 flex items-center gap-2"><CiLocationOn /> Year of Publishing: {yearOfPublishing}</div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex gap-3 items-center"><LuUsers /><span>Publisher: {publisher}</span></div>
                        <div className="flex gap-3 items-center"><MdOutlineFindInPage /><span>Page: {totalPages}</span></div>
                    </div>
                    <hr />
                    <div className="flex gap-3">
                        <button>Category: {category}</button>
                        <button>Rating: {rating}</button>
                        <Link to={`/book-details/${bookId}`}><button className="btn">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;
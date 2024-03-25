import { LuUsers } from "react-icons/lu";
import { MdOutlineFindInPage } from "react-icons/md";

const ListedBook = ({book}) => {
    const {author, bookName, tags, yearOfPublishing, publisher, totalPages, category, rating, image}=book;
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
                            tags.map(tag=> <p key={tag.index} className="font-work px-4 py-2 text-base font-medium rounded-full bg-[#23BE0A0D] text-[#23BE0A]">{tag}</p>)
                        }
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div className="flex gap-3 items-center"><LuUsers /><span>Publisher: {publisher}</span></div>
                        <div className="flex gap-3 items-center"><MdOutlineFindInPage /><span>Page: {totalPages}</span></div>
                    </div>
                    <hr />
                    <div className="flex gap-3">
                        <button>Category: {category}</button>
                        <button>Rating: {rating}</button>
                        <button className="btn">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBook;
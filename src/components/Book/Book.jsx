import { CiStar } from "react-icons/ci";

const Book = ({book}) => {
    const {bookId, bookName, author, image, rating, category, tags} = book;
    console.log(tags);
    return (
        <div>
            <div className="card p-6 border border-[#13131326]">
                <figure className="bg-[#F3F3F3] py-4 rounded-2xl"><img className="h-40" src={image} alt="Shoes" /></figure>
                <div className="mt-6">
                    <div className="flex gap-3 ">
                        {
                            tags.map(tag=> <p key={tag.index} className="font-work px-4 py-2 text-base font-medium rounded-full bg-[#23BE0A0D] text-[#23BE0A]">{tag}</p>)
                        }
                        
                        {/* <p className="font-work px-4 py-2 text-base font-medium rounded-full bg-[#23BE0A0D] text-[#23BE0A]">Young Adult</p>
                        <p className="font-work px-4 py-2 text-base font-medium rounded-full bg-[#23BE0A0D] text-[#23BE0A]">Identity</p> */}
                    </div>
                        <h2 className="my-4 font-playfair text-2xl font-bold text-[#131313">{bookName}</h2>
                        <p className="font-work text-base font-medium text-[#131313CC]">By : {author}</p>
                        <hr className="border-dashed my-5 text-[#424242]"/>
                        <div className="flex justify-between">
                            <p className="font-work text-base font-medium text-[#131313CC]">{category}</p>
                            <div className="flex gap-2 items-center"><span>{rating}</span><CiStar /></div>
                        </div> 
                </div>
            </div>
        </div>
    );
};

export default Book;
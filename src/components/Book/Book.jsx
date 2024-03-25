import { CiStar } from "react-icons/ci";

const Book = () => {
    return (
        <div>
            <div className="card p-6 border border-[#13131326]">
                <figure className="bg-[#F3F3F3] py-4 rounded-2xl"><img className="h-40" src="https://i.ibb.co/tXDcRDQ/banner-book.png" alt="Shoes" /></figure>
                <div className="mt-6">
                    <div className="flex gap-3 ">
                        <p className="font-work px-4 py-2 text-base font-medium rounded-full bg-[#23BE0A0D] text-[#23BE0A]">Young Adult</p>
                        <p className="font-work px-4 py-2 text-base font-medium rounded-full bg-[#23BE0A0D] text-[#23BE0A]">Identity</p>
                    </div>
                        <h2 className="my-4 font-playfair text-2xl font-bold text-[#131313">The Catcher in the Rye</h2>
                        <p className="font-work text-base font-medium text-[#131313CC]">By : Awlad Hossain</p>
                        <hr className="border-dashed my-5 text-[#424242]"/>
                        <div className="flex justify-between">
                            <p className="font-work text-base font-medium text-[#131313CC]">Fiction</p>
                            <div className="flex gap-2 items-center"><span>5.00</span><CiStar /></div>
                        </div> 
                </div>
            </div>
        </div>
    );
};

export default Book;
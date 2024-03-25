// import '../../assets/banner-book.png'

const Banner = () => {
    return (
        <div className="bg-[#1313130D] rounded-3xl p-16 lg:p-32 mt-12 lg:text-left text-center gap-8 flex flex-col lg:flex-row lg:justify-between items-center">
            <div>
                <h2 className="text-[56px] text-[#131313] font-bold font-playfair mb-6 lg:mb-12">Books to freshen up <br /> your bookshelf</h2>
                <button className="bg-[#23BE0A] text-white rounded-lg px-7 py-5 text-xl font-bold font-work">View The List</button>
            </div>
            <div>
                <img className="h-96 " src='https://i.ibb.co/tXDcRDQ/banner-book.png' alt="" />
            </div>
        </div>
    );
};

export default Banner;
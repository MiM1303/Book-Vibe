

const FAQ = () => {
    return (
        <div>
            <div className="bg-[#1313130D] rounded-2xl py-8 text-center lg:mb-16 text-[28px] font-bold font-work text-[#131313]">Frequently Asked Questions</div>
            <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" defaultChecked /> 
                    <div className="collapse-title text-xl font-medium">
                        How to add a book to my wishlist?
                    </div>
                    <div className="collapse-content"> 
                        <p>Click on a book to go to it's details page and you'll find the Wishlist button right there!</p>
                    </div>
                </div>
                <br />
                <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    How to I see my total reading progress?
                </div>
                <div className="collapse-content"> 
                    <p>Go to the 'Pages to Read' section to see all the pages you've read so far along with how many pages you've read each book!</p>
                </div>
                </div>
                <br />
                <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                    How do I request to add a book to the archive?
                </div>
                <div className="collapse-content"> 
                    <p>Drop in a request in the form below and we'll add it as soon as possible!</p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;
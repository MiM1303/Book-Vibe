import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";


const Categories = () => {
    const books = useLoaderData();
    const [allCategory, setCategory] = useState([]);

    useEffect(()=>{
        for(const book of books){
            console.log(book.category);
            if(!allCategory.find(book => book.category))
            {
                setCategory([...allCategory, book.category])
            }
            // if(!allCategory.includes(book.category)){
            //     setCategory([...allCategory, book.category]);
            // }
        }
        console.log(allCategory)
    },[])
    // console.log(allCategory);
    // const booksRead = books.filter(book=>storedBookId.includes(book.bookId));

    
    console.log(allCategory);

    return (
        <div>
            
        </div>
    );
};

export default Categories;
const useRatingSort = (list, setList) =>{
    list.map(book => console.log(book.rating));
    const sorted = list.sort((a, b) => b.rating - a.rating);
    sorted.map(book => console.log(book.rating))
    // useEffect((sorted)=>{
    //     setList(sorted);
    // },[])
    const handleSort = sorted =>{
        setList(sorted)
    }
    return [sorted, handleSort];
}

export default useRatingSort;

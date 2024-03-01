const RankingPage = () => {
    return (
        <div>
            {/* <div className="overflow-x-auto space-y-4">
                <p className="font-semibold capitalize flex justify-center md:text-xl">bảng xếp hạng truyện</p>
                {BookData.books.map((book, index) => (
                    <table className="table" key={index}>
                        <tbody>
                            <tr className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    <img src={book.img} className="max-w-24 rounded-md object-center bg-center" />
                                </td>
                                <td className="w-full">
                                    <p className="font-semibold flex flex-row cursor-pointer hover:text-orange-500 transition-all duration-300 ease-in-out">{book.name}</p>
                                    <div className="flex justify-start items-center flex-wrap">
                                        {book.categories.map((category, index) => (
                                            <div key={index} className="flex-row flex">
                                                <span className='text-orange-500 cursor-pointer'>{category.name}</span>
                                                {index < book.categories.length - 1 && <span className='text-gray-500 mx-1'>,</span>}
                                            </div>
                                        ))}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ))}
            </div> */}
        </div>
    );
}

export default RankingPage;
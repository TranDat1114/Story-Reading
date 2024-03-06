import BookData from "@/data/books.json"
import { Book } from "@/types/home";
import { Link } from "react-router-dom";

const RankingPage = () => {
    const databooks: Book[] = BookData.books;
    return (
        <div>
            <div className="overflow-x-auto space-y-4">
                <p className="font-semibold capitalize flex justify-center md:text-xl">bảng xếp hạng truyện</p>
                {databooks.map((book, index) => (
                    <table className="table" key={index}>
                        <tbody>
                            <tr className="hover">
                                <th>{index + 1}</th>
                                <td>
                                    <Link to={`/novels/${book.path}`} >
                                        <img src={book.img} className="max-w-24 rounded-md object-center bg-center" />
                                    </Link>
                                </td>
                                <td className="w-full">
                                    <Link to={`/novels/${book.path}`} >
                                        <p className="font-semibold flex flex-row cursor-pointer hover:text-orange-500 transition-all duration-300 ease-in-out md:text-xl">{book.name}</p>
                                    </Link>
                                    <p className="font-semibold flex flex-row cursor-pointer hover:text-orange-500 transition-all duration-300 ease-in-out md:text-lg">{book.author}</p>
                                    <div className="flex justify-start items-center flex-wrap">
                                        {book.categories.map((category, index) => (
                                            <div key={index} className="flex-row flex">
                                                <span className='text-orange-500 cursor-pointer'>{category.name}</span>
                                                {index < book.categories.length - 1 && <span className='text-gray-500 mx-1'>,</span>}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="font-semibold flex flex-row cursor-default">
                                        <span>
                                            Chương&nbsp;
                                        </span>
                                        {book.lastChapter}
                                    </p>
                                    <p className="font-semibold flex flex-row cursor-default">
                                        {book.timeReleased}
                                        <span>
                                            &nbsp;phút trước
                                        </span>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                ))}
            </div>
        </div>
    );
}

export default RankingPage;
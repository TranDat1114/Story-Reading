import BookData from "@/data/books.json";
import { Book } from "@/types/home";
import { Link } from "react-router-dom";

const NewBooksUpdate = () => {

    const databooks: Book[] = BookData.books as Book[];

    return (
        <>
            <div className="w-full space-y-4">
                {databooks.map((book, index) => (
                    <>
                        <div className="grid grid-cols-3 md:grid-cols-8 items-center gap-4 mx-2" key={index}>
                            <Link to={`/novels/${book.path}`} >
                                <img src={book.img} alt={book.name + 'Cover'} className="w-24 h-auto object-center bg-center rounded-md cursor-pointer" />
                            </Link>
                            <div className="info md:col-span-3">
                                <div className="flex flex-col">
                                    <div className="title">
                                        <p className="font-semibold md:text-2xl cursor-pointer hover:text-orange-500 transition-all duration-300 ease-in-out">{book.name}</p>
                                    </div>
                                    <div className="author">
                                        <p className="text-sm md:text-base cursor-pointer">{book.author}</p>
                                    </div>
                                    <div className="chapter">
                                        <p className="font-semibold cursor-pointer">
                                            {book.lastChapter}
                                        </p>
                                    </div>
                                    <div className="date hidden md:block">
                                        <p className="text-sm">{book.timeReleased} phút trước</p>
                                    </div>
                                </div>
                            </div>
                            <div className="category space-x-4 md:col-span-4">
                                <div className="flex flex-wrap gap-4">
                                    {book.categories.map((category, index) => (
                                        <span key={index} className="badge badge-warning">{category.name}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                    </>
                ))}
            </div>
        </>
    );
}

export default NewBooksUpdate;
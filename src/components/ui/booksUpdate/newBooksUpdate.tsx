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
                        <div className="grid grid-cols-3 items-center gap-4 mx-2" key={index}>
                            <Link to={`/novels/${book.path}`} >
                                <img src={book.img} alt={book.name + 'Cover'} className="w-24 md:w-48 h-auto object-center bg-center rounded-md cursor-pointer" />
                            </Link>
                            <div className="info">
                                <div className="title">
                                    <p className="font-semibold cursor-pointer hover:text-orange-500 transition-all duration-300 ease-in-out">{book.name}</p>
                                </div>
                                <div className="author">
                                    <p className="text-sm cursor-pointer">{book.author}</p>
                                </div>
                                <div className="chapter">
                                    <p className="font-semibold cursor-pointer">
                                        {book.lastChapter}
                                    </p>
                                </div>
                            </div>
                            <div className="category">
                                <div className="flex flex-wrap gap-4">
                                    {book.categories.map((category, index) => (
                                        <p key={index} className="text-xs bg-primary text-white rounded-md px-2 py-1 mr-2">{category.name}</p>
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
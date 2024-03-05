import BookData from "@/data/books.json";
import { Book } from "@/types/home";
import { Link } from "react-router-dom";

const FullBooksUpdate = () => {
    const databooks: Book[] = BookData.books as Book[];

    return (
        <>
            <div className="w-full space-y-4">
                {databooks.map((book, index) => (
                    <>
                        <div className="flex flex-col space-y-4 mx-4" key={index}>
                            <Link to={`/novels/${book.path}`} >
                                <p className="font-semibold text-xl hover:text-orange-500 transition-all duration-300">{book.name}</p>
                            </Link>
                            <div className="flex flex-wrap gap-4">
                                {book.categories.map((category, index) => (
                                    <p key={index} className="text-xs bg-primary text-white rounded-md px-2 py-1 mr-2">{category.name}</p>
                                ))}

                            </div>
                        </div>
                        <div className="divider"></div>
                    </>
                ))}
            </div>
        </>
    );
}

export default FullBooksUpdate;
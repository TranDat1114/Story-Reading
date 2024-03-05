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
                                <span key={index} className="badge badge-success">{book.status}</span>

                                {book.categories.map((category, index) => (
                                    <span key={index} className="badge badge-warning">{category.name}</span>
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
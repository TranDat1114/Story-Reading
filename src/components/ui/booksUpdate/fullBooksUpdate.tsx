import BookData from "@/data/books.json";
import { Book } from "@/types/home";
import { Link } from "react-router-dom";

const FullBooksUpdate = () => {
    const databooks: Book[] = BookData.books as Book[];

    return (

        <div className="w-full space-y-4 rounded-lg outline outline-1 outline-base-300 p-4">
            {databooks.filter(p => p.status === "completed").map((book, index) => (
                <div key={index}>
                    <div className="flex flex-col space-y-4 mx-4" >
                        <Link to={`/novels/${book.path}`} >
                            <p className="font-semibold text:lg md:text-xl hover:text-orange-500 transition-all duration-300">{book.name}</p>
                        </Link>
                        <div className="flex flex-wrap gap-4">
                            <span key={index} className="badge badge-success">{book.status}</span>

                            {book.categories.map((category, index) => (
                                <Link to={`/novels/?genres=${category.path}`} key={index} className="badge badge-warning">{category.name}</Link>

                            ))}

                        </div>
                    </div>
                    {
                        index !== databooks.length - 1 && <div className="divider"></div>
                    }

                </div>
            ))}
        </div>

    );
}

export default FullBooksUpdate;
import BookData from "@/data/books.json";
import { Book } from "@/types/home";
import { NotebookText, User } from "lucide-react";
import { Link } from "react-router-dom";

const NewBooksUpdate = () => {

    const databooks: Book[] = BookData.books as Book[];

    return (
        <>
            <div className="w-full space-y-4">
                {databooks.map((book, index) => (
                    <div key={index}>
                        <div className="grid grid-cols-5  items-center gap-4 mx-2" >
                            <Link to={`/novels/${book.path}`} className="col-span-2 md:col-span-1" >
                                <img src={book.img} alt={book.name + 'Cover'} className="min-w-24 h-32 object-cover object-center bg-center rounded-md cursor-pointer" />
                            </Link>
                            <div className="info col-span-3 md:col-span-2">
                                <div className="flex flex-col justify-stretch gap-2">
                                    <div className="title">
                                        <p className="md:text-xl cursor-pointer hover:text-orange-500 transition-all duration-300 ease-in-out">{book.name}</p>
                                    </div>
                                    <div className="author flex justify-start gap-x-2 items-center">
                                        <span><User size={16} /></span> <p className="text-sm md:text-base cursor-pointer">{book.author}</p>
                                    </div>
                                    <div className="chapter flex justify-start items-center gap-x-2">
                                        <span>
                                            <NotebookText size={16} />
                                        </span>
                                        <p className=" cursor-pointer">
                                            <span>
                                                Chương: &nbsp;
                                            </span>
                                            {book.lastChapter}
                                        </p>
                                    </div>
                                    <div className="date hidden md:block">
                                        <p className="text-sm">{book.timeReleased} phút trước</p>
                                    </div>
                                    <div className="flex flex-wrap gap-1 md:hidden">
                                        {book.categories.slice(0, 2).map((category, index) => (
                                            <Link to={`/novels/?genres=${category.path}`} key={index} className="badge badge-warning">{category.name}</Link>

                                        ))}
                                    </div>

                                </div>
                            </div>
                            <div className="category space-x-4 hidden md:col-span-2 md:block">
                                <div className="flex flex-wrap gap-4">
                                    {book.categories.slice(0, 6).map((category, index) => (
                                        <Link to={`/novels/?genres=${category.path}`} key={index} className="badge badge-warning">{category.name}</Link>

                                    ))}
                                </div>
                            </div>
                        </div>
                        {
                            index !== databooks.length - 1 && <div className="divider"></div>
                        }
                    </div>
                ))}
            </div>
        </>
    );
}

export default NewBooksUpdate;
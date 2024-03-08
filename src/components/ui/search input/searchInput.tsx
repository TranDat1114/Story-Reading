import { Search, SearchX } from "lucide-react";
import { useState } from "react";
import BookData from "@/data/books.json"
import { Book } from "@/types/home";


const SearchInputModal = () => {
    //* search data
    const databooks: Book[] = BookData.books;
    const [searchItem, setSearchItem] = useState('')
    const [filteredBooks, setFilteredBooks] = useState(databooks)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm)

        const filteredItems = databooks.filter((book) =>
            book.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setFilteredBooks(filteredItems);
    }
    //*

    return (
        <>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box gap-4">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg mb-4">Xin chào, chúc một ngày tốt lành!</h3>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        <input type="text" className="grow" placeholder="Tìm kiếm thông tin truyện..."
                            value={searchItem}
                            onChange={handleInputChange}
                        />
                    </label>
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        {searchItem && filteredBooks.length > 0 ? (
                            filteredBooks.map((book, index) => (
                                <div key={index} className="flex items-center p-4 border rounded-md">
                                    <a href={`/novels/${book.path}`} className="flex">
                                        <img src={book.img} alt={book.name + 'Cover'} className="w-1/2 md:w-1/3 rounded-md mr-4 cursor-pointer" />
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold mb-2 cursor-pointer hover:text-orange-500 transition-all duration-300 ease-in-out">{book.name}</h3>
                                            <h4 className="text-lg font-bold mb-2 cursor-pointer hover:text-orange-500 transition-all duration-300 ease-in-out">{book.author}</h4>
                                            <p className="text-gray-700 line-clamp-5">{book.desc}</p>
                                        </div>
                                    </a>
                                </div>
                            ))
                        ) : (
                            <div className="flex items-center gap-2 font-semibold justify-center">
                                <p>Không có kết quả tìm kiếm</p>
                                <SearchX size={18}/>
                            </div>
                        )}
                    </div>


                </div>
            </dialog>
        </>
    )
}

const SearchInputButton = () => {
    return (
        <button className="btn btn-circle btn-ghost" onClick={() => (document.getElementById('my_modal_3') as HTMLDialogElement)?.showModal()}>
            <Search size={24} />
        </button>
    );
}

export { SearchInputButton, SearchInputModal };
import { Search } from "lucide-react";

const SearchInputModal = () => {
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
                        <input type="text" className="grow" placeholder="Tìm kiếm thông tin truyện..." />
                    </label>
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
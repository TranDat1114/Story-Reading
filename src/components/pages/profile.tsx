import booksData from '@/data/books.json';
import { Book } from '@/types/home.ts';
import usersData from '@/data/user.json';
import { Users } from '@/types/users';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    const books: Book[] = booksData.books;
    const users: Users[] = usersData.users;
    return (
        <div>
            <div className="desktop-layout w-full p-4 space-y-4 hidden md:block">
                <h1 className="text-xl font-semibold">Vừa đọc</h1>
                <div className="w-full">
                    <div className="grid grid-cols-4">
                        <div className="left col-span-3">
                            <div className="p-4 bg-red-50 rounded-md">
                                <div className="flex flex-col gap-4">
                                    {books.map((book, index) => (
                                        <>
                                            <div key={index} className='flex items-center gap-4 mx-4'>
                                                <div className="img">
                                                    <Link to={`/novels/${book.path}`}>
                                                        <img src={book.img} alt={book.name + 'Cover'} className="max-w-48 rounded-md object-center bg-center cursor-pointer" />
                                                    </Link>
                                                </div>
                                                <div className="flex flex-col space-y-2">
                                                    <div className="title">
                                                        <h1 className="text-2xl font-semibold hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer">{book.name}</h1>
                                                    </div>
                                                    <div className="author">
                                                        <h1 className="text-lg font-semibold hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer">Tác giả: {book.author}</h1>
                                                    </div>
                                                    <div className="desc">
                                                        <p className="text-base line-clamp-5">
                                                            {book.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="divider"></div>
                                        </>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="right col-span-1">
                            <div className="p-4">
                                <div className="flex flex-col justify-center items-center gap-4">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={users[1].avatar} />
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-2 justify-center items-center">
                                        <div className="userName">
                                            <h1 className="text-2xl font-semibold">{users[1].name}</h1>
                                        </div>
                                        <div className="date">
                                            <p className="text-lg font-semibold text-center">Tham gia từ: {users[1].joinDate}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider"></div>
                                <div className="flex flex-col space-y-4">
                                    <div className="grid grid-cols-3 items-center">
                                        <div>
                                            <p className="font-semibold">Đã đọc</p>
                                        </div>
                                        <div className="col-span-2 flex flex-col gap-2 w-full">
                                            <div className="chapter">
                                                <p className="text-lg font-semibold">{users[1].readNovels}<span className="font-normal"> số truyện</span></p>
                                            </div>
                                            <div className="date">
                                                <p className="text-lg font-semibold">{users[1].readChapter}<span className="font-normal"> số chương</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='divider'></div>
                                    <div className="grid grid-cols-3 items-center">
                                        <div>
                                            <p className="font-semibold">Bình luận</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className='font-semibold'>
                                                {users[1].commentTotals}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='divider'></div>

                                    <div className="grid grid-cols-3 items-center">
                                        <div>
                                            <p className="font-semibold">Thích</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className='font-semibold'>
                                                {users[1].likesTotals}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='divider'></div>

                                    <div className="grid grid-cols-3 items-center">
                                        <div>
                                            <p className="font-semibold">Lưu trữ</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className='font-semibold'>
                                                {users[1].archiveChapters}
                                            </p>
                                        </div>
                                    </div>
                                    <div className='divider'></div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mobile-layout w-full p-4 space-y-4 md:hidden'>
                <div className='space-y-4'>
                    <div className="p-4">
                        <div className="flex items-center gap-4">
                            <div className="avatar">
                                <div className="w-24 rounded-full">
                                    <img src={users[1].avatar} />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2">
                                <div className="userName">
                                    <h1 className="text-2xl font-semibold">{users[1].name}</h1>
                                </div>
                                <div className="date">
                                    <h1 className="text-lg font-semibold">Tham gia từ: {users[1].joinDate}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="divider"></div>
                        <div className="flex flex-col space-y-4">
                            <div className="grid grid-cols-3 items-center">
                                <div className="">
                                    <p className="font-semibold">Đã đọc</p>
                                </div>
                                <div className="col-span-2 flex flex-col gap-2 w-full">
                                    <div className="chapter">
                                        <p className="text-lg font-semibold">{users[1].readNovels}<span className="font-normal"> số truyện</span></p>
                                    </div>
                                    <div className="date">
                                        <p className="text-lg font-semibold">{users[1].readChapter}<span className="font-normal"> số chương</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='divider'></div>
                            <div className="grid grid-cols-3 items-center">
                                <div>
                                    <p className="font-semibold">Bình luận</p>
                                </div>
                                <div className="col-span-2">
                                    <p className='font-semibold'>
                                        {users[1].commentTotals}
                                    </p>
                                </div>
                            </div>
                            <div className='divider'></div>

                            <div className="grid grid-cols-3 items-center">
                                <div>
                                    <p className="font-semibold">Thích</p>
                                </div>
                                <div className="col-span-2">
                                    <p className='font-semibold'>
                                        {users[1].likesTotals}
                                    </p>
                                </div>
                            </div>
                            <div className='divider'></div>

                            <div className="grid grid-cols-3 items-center">
                                <div>
                                    <p className="font-semibold">Lưu trữ</p>
                                </div>
                                <div className="col-span-2">
                                    <p className='font-semibold'>
                                        {users[1].archiveChapters}
                                    </p>
                                </div>
                            </div>
                            <div className='divider'></div>

                        </div>
                    </div>
                    <h1 className="text-xl font-semibold">Vừa đọc</h1>
                    <div className="flex flex-col gap-4">
                        {books.map((book, index) => (
                            <>
                                <div key={index} className='flex items-center gap-4 mx-4'>
                                    <div className="img">
                                        <Link to={`/novels/${book.path}`}>
                                            <img src={book.img} alt={book.name + 'Cover'} className="max-w-48 rounded-md object-center bg-center cursor-pointer" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-col space-y-2">
                                        <div className="title">
                                            <h1 className="text-2xl font-semibold hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer">{book.name}</h1>
                                        </div>
                                        <div className="author">
                                            <h1 className="text-lg font-semibold hover:text-orange-500 transition-all duration-300 ease-in-out cursor-pointer">Tác giả: {book.author}</h1>
                                        </div>
                                        <div className="desc">
                                            <p className="text-base line-clamp-4">
                                                {book.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="divider"></div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
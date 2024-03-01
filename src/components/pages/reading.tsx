// BookDetailComponentB.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import booksData from '@/data/books.json';
import { Book } from '@/types/home.ts';
import { ArrowDownWideNarrow, ArrowUpNarrowWide, Glasses, MoreHorizontal, NotebookText, ThumbsUp } from 'lucide-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import userData from '@/data/user.json';

interface BookDetailParams {
    bookName: string;
    [key: string]: string | undefined;
}

const ReadingPage: React.FC = () => {
    const [isUpNarrow, setIsUpNarrow] = useState(false);

    const toggleIcon = () => {
        setIsUpNarrow(!isUpNarrow);
    };

    const { bookName } = useParams<BookDetailParams>();
    const [bookDetails, setBookDetails] = useState<Book | null>(null);

    useEffect(() => {
        const selectedBook = booksData.books.find((book) => book.name === bookName);
        if (selectedBook) {

            //* có thêm field thì update ở đây

            const updatedBook: Book = {
                ...selectedBook,
                categories: selectedBook.categories || [],
                nameChapters: selectedBook.nameChapters || [],
            };
            setBookDetails(updatedBook);

            //*
        }
    }, [bookName]);

    if (!bookDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div className='space-y-4'>
            <div className="hero min-h-screen bg-base-200 rounded-2xl">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={`${bookDetails.img}`} className="max-w-sm rounded-lg shadow-2xl" alt={bookDetails.name + 'Cover'} />
                    <div className='space-y-3'>
                        <h1 className="text-5xl font-bold">{bookDetails.name}</h1>
                        <p className="py-2">{bookDetails.desc}</p>
                        <div className='grid grid-cols-3 items-center'>
                            <div className="views flex flex-col items-center space-y-4">
                                <Glasses className='w-4 h-4 block align-middle' />
                                <p className='font-semibold'>
                                    <span className='text-orange-500'>{bookDetails.views} </span>
                                    Lượt xem
                                </p>
                            </div>
                            <div className="likes flex flex-col items-center space-y-4">
                                <ThumbsUp className='w-4 h-4 block align-middle' />
                                <p className='font-semibold'>
                                    <span className='text-orange-500'>{bookDetails.likes} </span>
                                    Lượt thích
                                </p>
                            </div>
                            <div className="chapters flex flex-col items-center space-y-4">
                                <NotebookText className='w-4 h-4 block align-middle' />
                                <p className='font-semibold'>
                                    <span className='text-orange-500'>{bookDetails.chapters} </span>
                                    Chương
                                </p>
                            </div>
                        </div>
                        <div className='space-y-2'>
                            <div className='flex items-center'>
                                <p className='text-xl font-semibold'>
                                    <span >Chương mới nhất: </span>
                                    <span className='text-orange-500 cursor-pointer'>{bookDetails.chapters}</span>
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <p className='text-xl font-semibold'>
                                    <span >Tác giả: </span>
                                    <span className='text-orange-500 cursor-pointer'>{bookDetails.author}</span>
                                </p>
                            </div>
                            <div className='flex items-center'>
                                <p className='text-xl font-semibold'>
                                    <span>Thể loại: </span>
                                    {bookDetails.categories.map((category, index) => (
                                        <React.Fragment key={index}>
                                            <span className='text-orange-500 cursor-pointer'>{category.name}</span>
                                            {index < bookDetails.categories.length - 1 && <span className='text-gray-500 mx-1'>,</span>}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <div className='space-x-4'>
                            <button className="btn btn-outline">Đọc từ đầu</button>
                            <button className="btn btn-outline btn-info">Đọc mới nhất</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mx-4'>
                <Tabs>
                    <TabList>
                        <Tab>Chương</Tab>
                        <Tab>Bình luận</Tab>
                    </TabList>
                    <TabPanel>
                        <div className='space-y-4'>
                            <div className='flex items-center justify-between'>
                                <div className='flex flex-col'>
                                    <div className='title'>
                                        <p className='font-bold'>{bookDetails.chapters} chương</p>
                                    </div>
                                    <div>
                                        <p>Truyện phát hành mỗi ngày!</p>
                                    </div>
                                </div>
                                <div onClick={toggleIcon}>
                                    <div className='cursor-pointer flex items-center gap-3'>
                                        <p className='hidden md:block font-semibold'>Sắp xếp</p>
                                        {isUpNarrow ? <ArrowUpNarrowWide /> : <ArrowDownWideNarrow />}
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                {bookDetails.nameChapters.map((book, index) => (
                                    <div key={index}>
                                        <div className="flex items-center p-4 mb-4 w-full">
                                            <div className="img mr-4">
                                                <img src={book.img} alt={book.name + 'Cover'} className='rounded-md w-20 md:w-56 h-auto object-cover' />
                                            </div>
                                            <div className="info text-left flex-grow">
                                                <div className='title'>
                                                    <p className='font-bold cursor-pointer hover:text-orange-500'>{book.name}</p>
                                                </div>
                                                <div className="date italic">
                                                    <p>{book.released}</p>
                                                </div>
                                            </div>
                                            <div className="price flex items-center">
                                                <p>Miễn phí</p>
                                            </div>
                                        </div>
                                        <div className="divider"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className='space-y-4'>
                            <div className='flex items-center w-full'>
                                <div className="avatar mr-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden">
                                        <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='Avatar' className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <textarea placeholder="Nhập bình luận của bạn tại đây." className="textarea textarea-accent textarea-bordered textarea-sm w-full" ></textarea>
                                <div className='send ml-4'>
                                    <button className="btn btn-outline btn-accent">Gửi</button>
                                </div>
                            </div>
                            <div className='divider'></div>
                            <div className='w-full space-y-4'>
                                {userData.users.map((user, index) => (
                                    <div className="chat chat-start" key={index}>
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt="Tailwind CSS chat bubble component" src={user.avatar} />
                                            </div>
                                        </div>
                                        <div className="chat-header">
                                           {user.name}
                                        </div>
                                        <div className="chat-bubble">{user.contentComment}</div>
                                        <div className='chat-footer flex items-center gap-4'>
                                            <time className="text-xs opacity-50">{user.dateComment}</time>
                                            <p>Thích</p>
                                            <p>Trả lời</p>
                                            <div className="dropdown dropdown-bottom">
                                                <div tabIndex={0} role="button" className="btn btn-circle btn-ghost btn-xs m-1">
                                                    <MoreHorizontal size={12} className='block align-middle' />
                                                </div>
                                                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32 md:w-52">
                                                    <li><a>Báo cáo</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ReadingPage;

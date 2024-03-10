import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import booksData from '@/data/books.json';
import { Book } from '@/types/home.ts';
import { Flag, Glasses, MoreHorizontal, NotebookText, SendHorizonal, ThumbsUp } from 'lucide-react';
// import userData from '@/data/user.json';
import Ads from "@components/ui/banner/ads";
import { useTranslation } from "react-i18next";
import { Users } from '@/types/users';
import User from '@/data/user.json';


const NovelsPage = () => {
    const { t } = useTranslation("translation", {
        keyPrefix: "main.novels"
    });

    const userdata: Users[] = User.users as Users[];

    //* Reply Comment
    const [isReplying, setIsReplying] = useState(false);
    const handleReplyClick = () => {
        setIsReplying(!isReplying);
    };
    //* Reply Comment

    // const [isUpNarrow, setIsUpNarrow] = useState(false);

    // const toggleIcon = () => {
    //     setIsUpNarrow(!isUpNarrow);
    // };

    const { bookName } = useParams<{ bookName: string }>();

    const [bookDetails, setBookDetails] = useState<Book | undefined>(undefined);



    useEffect(() => {
        setBookDetails(booksData.books.find((book) => book.path === bookName));
    }, [bookDetails, bookName])


    const [isHideDetails, setIsHideDetails] = useState(true);

    if (!bookDetails) {
        return (
            <div>
                <h1>Không tìm thấy trang</h1>
            </div>
        );
    } else {

        return (
            <div className='space-y-4 w-full'>

                <div>
                    <div className={`hero rounded-box relative w-full my-4`}>
                        <img src={`${bookDetails.img}`} className="absolute w-full h-full object-cover rounded-box" alt={bookDetails.name + 'Cover'} />
                        <div className="hero-overlay bg-opacity-80 backdrop-blur-sm rounded-box"></div>

                        <div className="hero-content flex-col lg:flex-row lg:gap-x-8 w-full justify-evenly">
                            <img src={bookDetails.img} className="shadow-2xl  w-[265px] rounded-lg bg-transparent object-cover h-96" alt={bookDetails.name + 'Cover'} />

                            <div className="lg:w-1/2 flex flex-col gap-12 justify-stretch min-h-96">
                                <div className="prose my-4 ">
                                    <h1 className="text-center lg:text-start text-primary">{bookDetails.name}</h1>
                                </div>
                                <div className='text-white'>
                                    <div className='space-y-2'>
                                        <div className='grid grid-cols-3 lg:place-items-start lg:justify-start justify-center'>
                                            <div className="views flex justify-center flex-col lg:flex-row items-center gap-2">
                                                <Glasses size={16} />
                                                <p className='font-semibold text-primary'>
                                                    {bookDetails.views}
                                                </p>
                                                <strong>
                                                    Lượt xem
                                                </strong>
                                            </div>
                                            <div className="views flex justify-center flex-col lg:flex-row items-center gap-2">
                                                <ThumbsUp size={16} />
                                                <p className='font-semibold text-primary'>
                                                    {bookDetails.likes}
                                                </p>
                                                <strong>
                                                    Lượt thích
                                                </strong>
                                            </div>
                                            <div className="views flex justify-center flex-col lg:flex-row items-center gap-2">
                                                <NotebookText size={16} />
                                                <p className='font-semibold text-primary'>
                                                    <span>
                                                        Chương: &nbsp;
                                                    </span>
                                                    {bookDetails.lastChapter}
                                                </p>
                                                <strong>
                                                    Chương
                                                </strong>
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <p className=' font-semibold'>
                                                <span >Tác giả: </span>
                                                <span className='text-primary cursor-pointer'>{bookDetails.author}</span>
                                            </p>
                                        </div>

                                        <div className='flex items-center'>
                                            <p className=' font-semibold'>
                                                <span >Ngày ra mắt: </span>
                                                <span className='text-primary cursor-pointer'>{bookDetails.released}</span>
                                            </p>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="font-semibold">
                                                <span>Trạng thái: </span>
                                                <span className="text-primary cursor-pointer">{t(bookDetails.status)}</span>
                                            </p>
                                        </div>

                                        <div className='flex items-center'>
                                            <p className='font-semibold'>
                                                <span>Thể loại: </span>
                                                {bookDetails.categories.map((category, index) => (
                                                    <React.Fragment key={index}>
                                                        <Link to={`/novels/?genres=${category.name}`} key={index} className="badge badge-warning badge-outline">{category.name}</Link>
                                                        {index < bookDetails.categories.length - 1 && <span className='text-gray-500'>,</span>}
                                                    </React.Fragment>
                                                ))}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                                <div className='w-full lg:justify-start justify-center flex gap-x-2 text-white'>
                                    {
                                        bookDetails.chapters.length > 0 &&
                                        <Link to={
                                            `/novels/${bookDetails.path}/${bookDetails.chapters[0].path ?? ""}`
                                        } className="btn btn-sm btn-outline btn-info">Đọc ngay</Link>
                                    }

                                    <button className="btn btn-sm btn-outline btn-info">Chương mới</button>
                                    <button className="btn btn-sm btn-outline btn-info">Theo dõi</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="divider">👌</div>
                    <div className="w-full flex-col lg:flex-row items-center lg:justify-evenly lg:items-start flex gap-4 p-4">
                        <div className='prose self-start'>
                            <h1 className="text-2xl font-bold">Giới thiệu</h1>
                            <p className={`${isHideDetails ? "line-clamp-3" : ""}`}>{bookDetails.desc}</p>
                            <button onClick={() => setIsHideDetails(!isHideDetails)} className="btn btn-outline btn-accent btn-sm">{isHideDetails ? 'Xem thêm' : 'Thu gọn'}</button>
                        </div>
                        <div className=" space-y-4 prose">
                            <h1 className="text-2xl font-bold">Nội dung tương tự</h1>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full not-prose">
                                {
                                    booksData.books.slice(0, 4).map((book, index) => (
                                        <Link to={`/novels/${book.path}`} key={index} className="flex items-center justify-center flex-col w-full">
                                            <div className="img">
                                                <img src={book.img} alt={book.name + 'Cover'} className='rounded-md w-28 h-40 object-cover cursor-pointer' />
                                            </div>
                                            <div className="info text-left flex-grow">
                                                <div className='title'>
                                                    <p className='font-bold cursor-pointer hover:text-orange-500 text-xs text-center line-clamp-2'>{book.name}</p>
                                                </div>
                                            </div>
                                            <div className="italic">
                                                {
                                                    book.categories.slice(0, 2).map((category, index) => (
                                                        <React.Fragment key={index}>
                                                            <span className='badge badge-primary text-xs badge-outline cursor-pointer'>{category.name}</span>
                                                        </React.Fragment>
                                                    ))
                                                }
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="divider">💕</div>
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold p-4">Danh sách chương</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 justify-evenly p-4 bg-base-200 rounded-box gap-x-8 gap-y-2">
                            {
                                bookDetails.chapters.length > 0 ?

                                    bookDetails.chapters.map((chapter, index) => (
                                        <Link to={`/novels/${bookDetails.path}/${chapter.path}`} key={index} className="w-full prose hover:bg-base-100 p-4 rounded-box">
                                            <div className="">
                                                <div className="flex justify-start gap-x-2 items-center">

                                                    <h6 className="text-lg font-bold text-primary">Chương {index + 1}:</h6>
                                                    <p className="text-sm line-clamp-1">{chapter.title}</p>
                                                </div>
                                            </div>
                                            <p className="text-sm line-clamp-2">{chapter.desc}</p>
                                        </Link>
                                    ))

                                    : <div className="prose">
                                        <blockquote className="font-bold">
                                            "Hiện tại chưa có chương nào"
                                        </blockquote>
                                    </div>


                            }
                        </div>
                    </div>

                    <div className="divider">😘</div>

                    <div className="bg-base-200 p-4 flex justify-evenly items-center h-40 my-4">
                        <Ads />
                    </div>
                    <div>
                        <div className="space-y-4">
                            <h1 className="text-xl md:text-2xl font-bold">Bình luận</h1>
                            <div className="border border-solid border-[#f1f2f3] rounded-lg p-4">
                                <div className="flex items-center space-x-4">
                                    <div className="avatar">
                                        <div className="w-10 rounded-full">
                                            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                        </div>
                                    </div>
                                    <div className="comments w-full">
                                        <textarea className="textarea textarea-bordered w-full" placeholder="Nhập bình luận của bạn..."></textarea>
                                    </div>
                                    <div className="sendMessage">
                                        <button className="btn btn-outline btn-success btn-circle">
                                            <SendHorizonal size={18} />
                                        </button>
                                    </div>
                                </div>
                                {userdata.map((user, index) => (
                                    <div className="chat chat-start space-y-2" key={index}>
                                        <div className="chat-image avatar">
                                            <div className="w-10 rounded-full">
                                                <img alt={user.name + 'Cover'} src={user.avatar} />
                                            </div>
                                        </div>
                                        <div className="chat-header space-x-2">
                                            <span>{user.name}</span>
                                            <time className="text-xs opacity-50">{user.dateComment}</time>
                                        </div>
                                        <div className="chat-bubble">{user.contentComment}</div>
                                        <div className="chat-footer flex items-center">
                                            <div className="flex items-center gap-4">
                                                <div className="likes">
                                                    <p className="cursor-pointer">Thích</p>
                                                </div>
                                                <div className="reply">
                                                    <p className="cursor-pointer" onClick={handleReplyClick}>Trả lời</p>
                                                    {/* {isReplying && (
                                                        <div className="textarea-container">
                                                            <textarea className="textarea textarea-bordered" placeholder="Nhập bình luận của bạn..."></textarea>
                                                        </div>
                                                    )} */}
                                                </div>
                                                <div className="dropdown dropdown-bottom">
                                                    <button tabIndex={0} className="btn btn-ghost btn-circle btn-xs">
                                                        <MoreHorizontal size={18} />
                                                    </button>
                                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                        <li>
                                                            <div className="flex items-center gap-4">
                                                                <Flag size={12} className="align-middle block" />
                                                                <p>Báo cáo</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

};

export default NovelsPage;

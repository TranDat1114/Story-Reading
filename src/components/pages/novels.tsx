import { Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import booksData from '@/data/books.json';
import { Book } from '@/types/home.ts';
import { ArrowDownWideNarrow, ArrowUpNarrowWide, Glasses, MoreHorizontal, NotebookText, ThumbsUp } from 'lucide-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import userData from '@/data/user.json';
import Ads from "@components/ui/banner/ads";
import { useTranslation } from "react-i18next";
import LoadingSpinner from '@components/pages/loading'


const NovelsPage = () => {
    const { t } = useTranslation("translation", {
        keyPrefix: "main.novels"
    });

    const [isUpNarrow, setIsUpNarrow] = useState(false);

    const toggleIcon = () => {
        setIsUpNarrow(!isUpNarrow);
    };

    const { bookName } = useParams<{ bookName: string }>();

    const [bookDetails, setBookDetails] = useState<Book | undefined>(undefined);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setBookDetails(booksData.books.find((book) => book.path === bookName));
    }, [bookDetails, bookName])

    useEffect(() => {
        const fetchData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setLoading(false);
        };

        fetchData();
    }, []);

    const [isHideDetails, setIsHideDetails] = useState(true);

    if (!bookDetails) {
        return
        <div>
            <LoadingSpinner />
        </div>;
        // code Thêm trang loading ở đây
    }

    return (
        <div className='space-y-4'>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div>
                    <div className={`hero rounded-box relative w-full my-4`}>
                        <img src={`${bookDetails.img}`} className="absolute w-full h-full object-cover rounded-box" alt={bookDetails.name + 'Cover'} />
                        <div className="hero-overlay bg-opacity-80 backdrop-blur-sm rounded-box"></div>
                        {/* <div className="hero-content flex-col lg:flex-row lg:gap-x-12">
                    <img src={`${bookDetails.img}`} className="max-w-sm rounded-lg shadow-2xl" alt={bookDetails.name + 'Cover'} />
                    
                </div> */}

                        <div className="hero-content flex-col lg:flex-row lg:gap-x-8 w-full justify-evenly">
                            <img src={bookDetails.img} className="shadow-2xl max-w-sm rounded-lg bg-transparent object-cover max-h-96" alt={bookDetails.name + 'Cover'} />

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
                                            <p className='font-semibold'>
                                                <span>Thể loại: </span>
                                                {bookDetails.categories.map((category, index) => (
                                                    <React.Fragment key={index}>
                                                        <span className='badge badge-primary badge-outline cursor-pointer'>{category.name}</span>
                                                        {index < bookDetails.categories.length - 1 && <span className='text-gray-500 mx-1'>,</span>}
                                                    </React.Fragment>
                                                ))}
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
                    <div className="divider"></div>
                    <div className="w-full flex-col lg:flex-row items-center lg:justify-evenly lg:items-start flex gap-4 p-4">
                        <div className='prose'>
                            <h1 className="text-2xl font-bold">Giới thiệu</h1>
                            <p className={`min-h-40${isHideDetails ? "line-clamp-3" : ""}`}>{bookDetails.desc}</p>
                            <button onClick={() => setIsHideDetails(!isHideDetails)} className="btn btn-outline btn-accent btn-sm">{isHideDetails ? 'Xem thêm' : 'Thu gọn'}</button>
                        </div>
                        <div className=" space-y-4 prose">
                            <h1 className="text-2xl font-bold">Nội dung tương tự</h1>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full  not-prose">
                                {
                                    booksData.books.map((book, index) => (
                                        <div key={index} className="flex items-center justify-center flex-col w-full">
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

                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    </div>
                    <div className="bg-base-200 p-4 flex justify-evenly items-center h-40">
                        <Ads />
                    </div>
                    <div className='mx-auto max-w-xl lg:max-w-4xl rounded-box bg-base-200 md:p-4'>
                        <Tabs>
                            <TabList className={
                                `flex items-center justify-evenly gap-4 p-4 bg-base-100 rounded-box shadow-lg`

                            }>
                                <Tab className={
                                    `cursor-pointer text-center focus:text-info text-lg font-semibold bg-transparent`
                                }>Danh sách chương</Tab>
                                <Tab className={
                                    `cursor-pointer text-center focus:text-info text-lg font-semibold bg-transparent`
                                }>Bình luận</Tab>
                                <Tab className={
                                    `cursor-pointer text-center focus:text-info text-lg font-semibold bg-transparent`
                                }>Đánh giá</Tab>
                            </TabList>
                            <TabPanel className={
                                `p-4 bg-base-200 rounded-box shadow-lg`
                            }>
                                <div className='space-y-4'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex flex-col'>
                                            <div className='title'>
                                                <p className='font-bold'>{bookDetails.lastChapter} chương</p>
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
                                        {bookDetails.chapters?.map((book, index) => (
                                            <div key={index}>
                                                <div className="flex items-center p-4 mb-4 w-full">
                                                    <div className="img mr-4">
                                                        {/* <img src={book.img} alt={book.name + 'Cover'} className='rounded-md w-20 h-auto object-cover cursor-pointer' /> */}
                                                    </div>
                                                    <div className="info text-left flex-grow">
                                                        <div className='title'>
                                                            <p className='font-bold cursor-pointer hover:text-orange-500'>{book.title}</p>
                                                        </div>
                                                        <div className="date italic">
                                                            <p>{book.released}</p>
                                                        </div>
                                                    </div>
                                                    <div className="price flex items-center cursor-pointer">
                                                        <p>Miễn phí</p>
                                                    </div>
                                                </div>
                                                <div className="divider"></div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel className={
                                `p-4 bg-base-200 rounded-box shadow-lg`
                            }>
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
                                                <div className="chat-header ">
                                                    <div className="chat-name font-semibold">
                                                        {user.name}
                                                    </div>
                                                </div>
                                                <div className="chat-bubble">{user.contentComment}</div>
                                                <div className='chat-footer flex items-center gap-4'>
                                                    <time className="text-xs opacity-50">{user.dateComment}</time>
                                                    <div className="chapter text-xs text-gray-500">
                                                        {user["chapter-comment"]}
                                                    </div>
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
                            <TabPanel className={
                                `p-4 bg-base-200 rounded-box shadow-lg`
                            }>
                                <div>
                                    <h1>Đánh giá</h1>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NovelsPage;

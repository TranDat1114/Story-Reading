// import Lottie from 'react-lottie';
// import animationData from '@components/ui/lotties/404-animation-2.json';


const NotFound404Page = () => {
    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: animationData,
    //     rendererSettings: {
    //         preserveAspectRatio: "xMidYMid slice"
    //     }
    // };
    return (
        <div>
            <div className="flex items-center justify-center h-dvh">
                <div>
                    <div className="flex items-center justify-center flex-col max-w-sm md:max-w-6xl space-y-4 md:hidden">
                        {/* <Lottie
                            options={defaultOptions}
                            height="auto"
                            width="auto"
                        /> */}
                        <h2 className="text-3xl md:text-4xl text-center font-bold">Trang của bạn tìm kiếm hiện không khả dụng</h2>
                        <ul className="timeline timeline-vertical">
                            <li>
                                <div className="timeline-start timeline-box">Thực hiện dự án</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box">Phát hành version: v1.0</div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-start timeline-box">Sửa lỗi các vấn đề xảy ra</div>
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <hr />
                                <div className="timeline-middle">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                </div>
                                <div className="timeline-end timeline-box">Kết thúc dự án</div>
                            </li>
                        </ul>
                        <div className="flex items-center gap-4">
                            <button className="btn btn-outline btn-success">
                                <a className="link link-hover" href="/">Trang chủ</a>
                            </button>
                        </div>
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex items-center justify-center gap-12'>
                            {/* <Lottie
                                options={defaultOptions}
                                height="auto"
                                width="auto"
                            /> */}
                            <div className='flex flex-col space-y-8'>
                                <h2 className="text-4xl font-bold">Trang của bạn tìm kiếm hiện không khả dụng</h2>
                                <ul className="timeline flex flex-wrap w-full">
                                    <li>
                                        <div className="timeline-start timeline-box">Thực hiện dự án</div>
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                        </div>
                                        <hr />
                                    </li>
                                    <li>
                                        <hr />
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                        </div>
                                        <div className="timeline-end timeline-box">Phát hành version: v1.0</div>
                                        <hr />
                                    </li>
                                    <li>
                                        <hr />
                                        <div className="timeline-start timeline-box">Sửa lỗi các vấn đề xảy ra</div>
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                        </div>
                                        <hr />
                                    </li>
                                    <li>
                                        <hr />
                                        <div className="timeline-middle">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                                        </div>
                                        <div className="timeline-end timeline-box">Kêt thúc dự án</div>
                                    </li>

                                </ul>
                                <div className="flex items-center gap-4">
                                    <button className="btn btn-outline btn-success">
                                        <a className="link link-hover" href="/">Trang chủ</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound404Page;
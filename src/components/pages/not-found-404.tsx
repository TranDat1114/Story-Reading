const NotFound404Page = () => {
    return (
        <div>
            <div className="flex items-center justify-center h-dvh">
                <div>
                    <div className="flex items-center justify-center flex-col max-w-sm md:max-w-6xl space-y-4">
                        <h1 className="text-8xl font-bold">404</h1>
                        <h2 className="text-3xl md:text-4xl text-center">Trang của bạn tìm kiếm hiện không khả dụng</h2>
                        <p className="text-2xl text-center">Hãy quay về nơi bạn bắt đầu</p>
                        <div className="flex items-center gap-4">
                            <button className="btn btn-outline btn-success">
                                <a className="link link-hover" href="/">Trang chủ</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound404Page;
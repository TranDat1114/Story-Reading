const LoadingPage = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center flex-col">
            <span className="loading loading-dots loading-lg text-success"></span>
            <p className="text-2xl font-semibold">Đang tải, xin vui lòng chờ...</p>
        </div>
    );
}

export default LoadingPage;
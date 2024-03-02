const FaqsPage = () => {
    return (
        <div className="mx-4">
            <div className="w-full space-y-4">
                <h1 className="capitalize text-2xl font-bold">những câu hỏi thường gặp</h1>
                <div className="space-y-2">
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            Làm cách nào để bắt đầu đọc truyện trên trang web của bạn?
                        </div>
                        <div className="collapse-content">
                            <ul className="list-disc ml-8">
                                <li>Đăng nhập vào tài khoản của bạn hoặc đăng ký nếu bạn chưa có tài khoản.</li>
                                <li>Tìm kiếm truyện mong muốn hoặc duyệt qua danh sách thể loại.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            Tôi có thể đọc truyện offline không?
                        </div>
                        <div className="collapse-content">
                            <p>Hiện tại, chúng tôi không hỗ trợ chế độ đọc offline trực tiếp trên trang web.</p>
                        </div>
                    </div>
                    {/* <div className="collapse bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            Làm cách nào để tìm kiếm truyện theo tác giả hoặc thể loại?
                        </div>
                        <div className="collapse-content">
                            <p>Sử dụng chức năng tìm kiếm và chọn tác giả hoặc thể loại mong muốn.</p>
                        </div>
                    </div> */}
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            Tại sao tôi không thể truy cập một số truyện?
                        </div>
                        <div className="collapse-content">
                            <p>Có thể truyện đó đang trong quá trình cập nhật hoặc có giới hạn truy cập. Hãy thử lại sau hoặc kiểm tra xem có thông báo nào đó về giới hạn truy cập không.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            Làm thế nào để đề xuất một truyện mới?
                        </div>
                        <div className="collapse-content">
                            <p>Gửi ý kiến của bạn qua mục liên hệ hoặc biểu mẫu đề xuất truyện mới trên trang web.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            Trang web có hỗ trợ đọc trên điện thoại di động không?
                        </div>
                        <div className="collapse-content">
                            <p>Có, trang web của chúng tôi được tối ưu hóa để đọc trên điện thoại di động. Bạn có thể truy cập trang web từ trình duyệt di động.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            Làm thế nào để đánh giá và bình luận về một truyện?
                        </div>
                        <div className="collapse-content">
                            <p>Đăng nhập vào tài khoản của bạn và truy cập trang truyện bạn muốn đánh giá. Ở đó, bạn sẽ thấy các tùy chọn để đánh giá và bình luận.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-plus bg-base-200">
                        <input type="radio" name="my-accordion-1" />
                        <div className="collapse-title text-xl font-medium">
                            Tôi còn thắc mắc khác
                        </div>
                        <div className="collapse-content">
                            <p>Bạn có thể vào Liên hệ quản trị viên (trên web) để đặt câu hỏi.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FaqsPage;
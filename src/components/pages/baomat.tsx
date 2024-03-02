
const BaoMatPage = () => {
    
    return (
        <div className="mx-4">
            <div className="w-full space-y-4">
                <h1 className="capitalize font-bold text-2xl">chính sách bảo mật</h1>
                <div className="space-y-2">
                    <p><span className="font-bold">Truyện Chữ</span> đảm bảo các điều sau về tính riêng tư của người tham gia hoạt động tại tất cả các website trong hệ thống:</p>
                    <ul className="list-decimal ml-8">
                        <li>
                            Không tiết lộ địa chỉ email, hay các thông tin cần bảo mật khác cho bên thứ 3, trừ khi bạn vi phạm nội quy.
                        </li>
                        <li>
                            Không tiết lộ địa chỉ IP cho bên thứ 3.
                        </li>
                        <li>
                            Không tiết lộ vị trí của bạn cho bên thứ 3. Đồng thời chỉ sử dụng thông tin này để cải thiện chức năng của website. Mọi việc đều hoàn toàn tự động.
                        </li>
                        <li>
                            Hệ thống Truyện Chữ lưu trữ các hoạt động mang tính công khai khi bạn tham gia hoạt động gồm: các hoạt động chung về truyện và hoạt động chung về tài khoản
                        </li>
                        <li>
                            Các thông tin bạn nhập vào website hầu hết đều là công khai, vì vậy chúng tôi không chịu trách nhiệm về việc giữ tính riêng tư các thông tin đó.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BaoMatPage;
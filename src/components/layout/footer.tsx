import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">Về chúng tôi</a>
                    <a className="link link-hover">Liên lạc</a>
                    <a className="link link-hover">Chính sách</a>
                    <a className="link link-hover">Bảo mật</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to="https://github.com/TranDat1114/Story-Reading" className="c" target="_blank">
                            <Github size={24} />
                        </Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 - Mọi bản quyền đều thuộc về Phú Đạt</p>
                </aside>
            </footer>
        </div>
    );
}

export default Footer;
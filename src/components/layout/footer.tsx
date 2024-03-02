import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("translation", {
        keyPrefix: "footer"
    });
    return (
        <div className=" bg-base-200 w-full">
            <footer className="footer mx-auto container p-10 text-base-content justify-between">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">{t("support")}</h6>
                    <a className="link link-hover" href="/faqs" target="_blank">{t("faqs")}</a>
                    <a className="link link-hover" href="/privacy" target="_blank">{t("privacy")}</a>
                    <a className="link link-hover" href="/terms" target="_blank">{t("terms")}</a>
                </nav>
                <nav>
                    <h6 className="footer-title">{t("contact")}</h6>
                    <a className="link link-hover">{t("address")}: xxxxxxxxxxxxxxx</a>
                    <a className="link link-hover">{t("phone")}: xxxxxxxxxxxx</a>
                    <a className="link link-hover">{t("email")}: xxxxxxxxx</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>{t("copyright")}</p>
                </aside>
            </footer>
        </div>
    );
}

export default Footer;
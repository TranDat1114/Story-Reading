import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation("translation", {
        keyPrefix: "footer"
    });
    return (
        <div className=" bg-base-200 w-full">

            <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
                <div className="prose">
                    <h1>
                        Truyện chữ
                    </h1>
                </div>
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover" href="/faqs" target="_blank">{t("faqs")}</a>
                    <a className="link link-hover" href="/privacy" target="_blank">{t("privacy")}</a>
                    <a className="link link-hover" href="/terms" target="_blank">{t("terms")}</a>
                </nav>
                <aside>
                    <p>{t("copyright")}</p>
                </aside>
            </footer>
        </div>
    );
}

export default Footer;
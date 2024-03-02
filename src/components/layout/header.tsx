
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next"
import { Contact, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { routesNavLink } from "@/components/pages/routes";
import ThemeToggle from "@/components/ui/theme/theme-toggle";
import { motion, useScroll, useSpring } from "framer-motion";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export default function Header() {

    const { t } = useTranslation(
        "translation",
        { keyPrefix: "header" }
    )

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const location = useLocation().pathname.split('/').filter(x => x).pop() || '';

    const menuIcon = useRef<HTMLLabelElement>(null);

    return (
        <header className={`${isScroll ? "bg-transparent" : "bg-base-200"} px-2 w-full bg-base-200 rounded-md backdrop-blur-lg backdrop-contrast-100 backdrop-brightness-75 shadow-lg top-0 fixed z-50 transition-all drop-shadow-md`}>
            <div className="navbar p-2 container mx-auto">
                <div className="navbar-start flex items-center gap-2 justify-between">
                    <div className="drawer size-8 lg:hidden">
                        <input id="my-drawer-4" title="drawer-header" placeholder="drawer-header" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content relative size-8">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="cursor-pointer z-10 absolute top-0 left-0" onClick={
                                () => {
                                    menuIcon.current?.click()
                                }
                            } >
                                <div className="size-8"></div>
                            </label>
                            <label className="relative top-0 size-8 left-0 swap"
                                ref={menuIcon}
                            >
                                {/* this hidden checkbox controls the state */}
                                <input type="checkbox" />

                                {/* hamburger icon */}
                                <Menu size={32} className="fill-current swap-off" />

                                {/* close icon */}
                                <X size={32} className="fill-current swap-on" />
                            </label>
                        </div>
                        <div className={`drawer-side top-16`}>
                            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"
                                onClick={
                                    () => {
                                        menuIcon.current?.click()
                                    }} ></label>
                            <ul className="menu p-4 w-10/12 max-w-80 min-h-full bg-base-200 backdrop-blur-md text-base-content space-y-2">

                                {
                                    routesNavLink.map((route, index) => (
                                        <li key={index}>
                                            <Link to={route.path} className={`link link-hover ${('/' + location) === route.path ? "active" : ""}`}>
                                                <div className="badge badge-outline">
                                                    {route.icon}
                                                </div>
                                                {t(`${route.name}`)}
                                            </Link>
                                        </li>
                                    ))
                                }
                                <li>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <Link to={"/"} className={` font-bold text-lg lg:text-xl justify-start`}>
                        {t("story")}
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="menu menu-horizontal gap-2">
                        {
                            routesNavLink.map((route, index) => (
                                <li key={index}>
                                    {
                                        route.isDropdown ?
                                            <details>
                                                <summary className="link link-hover"><Contact size={16} />
                                                    <Link to={`${route.path}`} >
                                                        {t(route.name)}
                                                    </Link>
                                                </summary>
                                                <ul className="p-2 flex flex-col gap-4">
                                                    {
                                                        route.dropdownItems?.map((item, index) => (
                                                            <li key={index} >
                                                                <Link tabIndex={index} to={`${route.path}${item.path}`} className="text-nowrap">
                                                                    {item.name}</Link>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            </details> :
                                            <Link to={route.path} className={`link link-hover ${('/' + location) === route.path ? "active" : ""}`}>
                                                {route.icon}
                                                {t(`${route.name}`)}
                                            </Link>
                                    }
                                </li>
                            ))
                        }
                    </ul>

                </div>
                <div className="navbar-end items-center gap-2">
                    <div className="flex items-center md:gap-4">
                        <button className="btn btn-ghost" onClick={() => (document.getElementById('my_modal_5') as HTMLDialogElement)?.showModal()}>Đăng nhập/Đăng ký</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <Tabs>
                                    <TabList>
                                        <Tab>Đăng nhập</Tab>
                                        <Tab>Đăng ký</Tab>
                                    </TabList>
                                    <TabPanel>
                                        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                                            <form className="card-body">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Email</span>
                                                    </label>
                                                    <input type="email" placeholder="Email" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Mật khẩu</span>
                                                    </label>
                                                    <input type="password" placeholder="Mật khẩu của bạn" className="input input-bordered" required />
                                                    <label className="label">
                                                        <a href="#" className="label-text-alt link link-hover">Quên mật khẩu?</a>
                                                    </label>
                                                </div>
                                                <div className="form-control mt-6">
                                                    <button className="btn btn-primary">Đăng nhập</button>
                                                </div>
                                            </form>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="card shrink-0 w-full shadow-2xl bg-base-100">
                                            <form className="card-body">
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Email</span>
                                                    </label>
                                                    <input type="email" placeholder="Email" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Mật khẩu</span>
                                                    </label>
                                                    <input type="password" placeholder="Mật khẩu của bạn" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="label">
                                                        <span className="label-text">Nhập lại mật khẩu</span>
                                                    </label>
                                                    <input type="password" placeholder="Nhập lại mật khẩu" className="input input-bordered" required />
                                                </div>
                                                <div className="form-control">
                                                    <label className="cursor-pointer label gap-4">
                                                        <input type="checkbox" defaultChecked className="checkbox checkbox-accent" />
                                                        <span className="label-text">Tôi đã đọc và đồng ý <a className="link link-info">điều khoản đăng ký</a> và <a className="link link-info">dịch vụ sử dụng</a> của Website.</span>
                                                    </label>
                                                </div>
                                                <div className="form-control">
                                                    <button className="btn btn-primary">Đăng ký</button>
                                                </div>
                                            </form>
                                        </div>
                                    </TabPanel>
                                </Tabs>
                                <div className="modal-action">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                </div>
                            </div>
                        </dialog>
                        <ThemeToggle />
                    </div>


                </div>
            </div>
            <motion.div className="h-1 rounded-md bg-secondary w-full fixed left-0 right-0" style={{ scaleX, originX: 0 }} initial={false} transition={{ duration: 0.5 }


            }>

            </motion.div>
        </header>
    )
}
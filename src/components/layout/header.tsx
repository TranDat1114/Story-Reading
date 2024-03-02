
import { useRef } from "react";
import { useTranslation } from "react-i18next"
import { Contact, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { routesNavLink } from "@/components/pages/routes";
import ThemeToggle from "@/components/ui/theme/theme-toggle";
import { motion, useScroll, useSpring } from "framer-motion";
import SignUpSignInModal from "@/components/ui/modal/sign-up-sign-in-modal";

export default function Header() {

    const { t } = useTranslation(
        "translation",
        { keyPrefix: "header" }
    )


    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const location = useLocation().pathname.split('/').filter(x => x).pop() || '';

    const menuIcon = useRef<HTMLLabelElement>(null);

    return (
        <motion.header className={`px-2 w-full rounded-md backdrop-blur-lg backdrop-contrast-100 backdrop-brightness-75 shadow-lg top-0 fixed z-50 drop-shadow-md transition-colors duration-300 ease-in-out`}
            style={
                {
                    backgroundColor: `${scrollYProgress.get() > 0.1 ? "var(--bg-base-100)" : "transparent"}`
                }
            }
        >
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
                                    <SignUpSignInModal />
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

                    <div className="hidden md:inline-block">
                        <SignUpSignInModal />
                    </div>

                    <ThemeToggle />

                </div>
            </div>
            <motion.div className="h-1 rounded-md bg-secondary w-full fixed left-0 right-0" style={{ scaleX, originX: 0 }} initial={false} transition={{ duration: 0.5 }


            }>

            </motion.div>
        </motion.header>
    )
}
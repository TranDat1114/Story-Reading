import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { SignUpSignInModal } from "@/components/ui/modal/sign-up-sign-in-modal"
import ScrollToTop from "@/share/scroll-to-top"
import { SearchInputModal } from "../ui/search input/searchInput"
import { useLocation } from "react-router-dom"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const location = useLocation()
    const isNovelChapter = location.pathname.includes('/novels/')
    ScrollToTop()
    return (
        <div className="w-full relative space-y-2">
            <Header />

            {
                isNovelChapter ?
                    (
                        <main className="mx-auto min-h-svh space-y-2">
                            <div className="mt-20 w-full">
                                <Breadcrumbs />
                            </div>
                            {children}
                        </main>
                    )
                    :
                    (
                        <main className="container mx-auto min-h-svh space-y-2">
                            <div className="mt-20 w-full">
                                <Breadcrumbs />
                            </div>
                            {children}
                        </main>
                    )
            }

            <Footer />
            <SearchInputModal />
            <SignUpSignInModal />
        </div>
    )
}
export default Layout
import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"

interface LayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="w-full relative space-y-2">
            <Header />
            <main className="container mx-auto min-h-svh space-y-2">
                <div className="mt-20 w-full">
                    <Breadcrumbs />
                </div>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout
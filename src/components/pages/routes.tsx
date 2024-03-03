import HomePage from "@/components/pages/home"
import { Route, RouteItem } from "@/types/route"
import { Dna, Home, Sparkle } from 'lucide-react'
import NovelsPage from "@/components/pages/novels"
import rankingsData from "@/data/rankings.json"
import GenrePage from "@components/pages/genres"
import RankingPage from "@components/pages/rankings"
import DieuKhoanPage from "./dieukhoan"
import BaoMatPage from "./baomat"
import FaqsPage from "./faqs"
import NotFound404Page from "./not-found-404"
import NovelChapterPage from "./novel-chapter"
import ProfilePage from "./profile"



const routes: Route[] = [
    {
        path: '/',
        name: 'home',
        element: <HomePage />
    },
    {
        path: '/novels',
        name: 'novels',
        element: <GenrePage />,
    },
    {
        path: "/novels/?genres=:genreName",
        name: "genres",
        element: <GenrePage />
    },
    {
        path: "/novels/:bookName",
        name: "novels",
        element: <NovelsPage />,
    },
    {
        path: "/novels/:novelName/:chapterNumber",
        name: "novels",
        element: <NovelChapterPage />,
    },
    {
        path: "/rankings/:rankingName",
        name: "rankings",
        element: <RankingPage />,
    },
    {
        path: "/terms",
        name: "terms",
        element: <DieuKhoanPage />
    },
    {
        path: "/privacy",
        name: "privacy",
        element: <BaoMatPage />
    },
    {
        path: "/faqs",
        name: "faqs",
        element: <FaqsPage />
    },
    {
        path: "/rankings",
        name: "rankings",
        element: <RankingPage />,
    },
    {
        path: "/*",
        name: "not-found-404",
        element: <NotFound404Page />
    },
    {
        path: "/profile",
        name: "profile",
        element: <ProfilePage />
    }
]

const routesNavLink: Route[] = [
    {
        path: '/',
        name: 'home',
        icon: <Home size={16} />,
    },
    {
        path: "/novels",
        name: "genres",
        icon: <Dna size={16} />,
    },
    {
        path: "/rankings",
        name: "rankings",
        icon: <Sparkle size={16} />,
        isDropdown: true,
        dropdownItems: rankingsData.rankings as RouteItem[]
    }
]

export { routes, routesNavLink }
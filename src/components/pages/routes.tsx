import HomePage from "@/components/pages/home"
import { Route, RouteItem } from "@/types/route"
import { Book, Dna, Home, Sparkle } from 'lucide-react'
import NovelsPage from "@/components/pages/novels"
import rankingsData from "@/data/rankings.json"
import GenrePage from "@components/pages/genres"
import ReadingPage from "@components/pages/reading"
import  RankingPage  from "@components/pages/rankings"

const routes: Route[] = [
    {
        path: '/',
        name: 'home',
        element: <HomePage />,
        icon: <Home size={16} />,
    },
    {
        path: '/novels',
        name: 'novels',
        element: <NovelsPage />,
        icon: <Book size={16} />,
    },
    {
        path: "/novels/:novelName/:chapterNumber",
        name: "novels",
        element: <NovelsPage />,
        icon: <Book size={16} />,
    },
    {
        path: "/rankings/:rankingName",
        name: "rankings",
        element: <RankingPage />,
        icon: <Sparkle size={16} />,
    },
    {
        path: "/genres",
        name: "genres",
        element: <GenrePage />,
        icon: <Dna size={16} />,
    },
    {
        path: "/reading/:bookName",
        name: "reading",
        element: <ReadingPage />,
        icon: <Book size={16} />,
    }
]

const routesNavLink: Route[] = [
    {
        path: '/',
        name: 'home',
        element: <HomePage />,
        icon: <Home size={16} />,
    },
    {
        path: '/novels',
        name: 'novels',
        element: <NovelsPage />,
        icon: <Book size={16} />,
    },
    {
        path: "/genres",
        name: "genres",
        element: <GenrePage />,
        icon: <Dna size={16} />,
    },
    {
        path: "/rankings",
        name: "rankings",
        element: <NovelsPage />,
        icon: <Sparkle size={16} />,
        isDropdown: true,
        dropdownItems: rankingsData.rankings as RouteItem[]
    }
]

export { routes, routesNavLink }
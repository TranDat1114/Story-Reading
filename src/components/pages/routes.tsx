import HomePage from "@/components/pages/home"
import { Route, RouteItem } from "@/types/route"
import { Book, Home, Sparkle } from 'lucide-react'
import NovelsPage from "@/components/pages/novels"
import genresData from "@/data/genres.json"
import rankingsData from "@/data/rankings.json"
import GenrePage from "@components/pages/genres"
import ReadingPage from "./reading"

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
        isDropdown: true,
        dropdownItems: genresData.genres as RouteItem[]
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
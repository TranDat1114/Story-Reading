import { RouteType, RouteItem } from "@/types/route"
import { Dna, Home, Sparkle } from "lucide-react"
import rankingsData from "@/data/rankings.json"
const routesNavLink: RouteType[] = [
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



const routesdata: RouteType[] = [
    {
        path: '/',
        name: 'home',
    },
    {
        path: '/novels',
        name: 'genres',
    },
    {
        path: "/novels/?genres=:genreName",
        name: "genres",
    },
    {
        path: "/novels/:bookName",
        name: "novels",
    },
    {
        path: "/novels/:novelName/:chapterNumber",
        name: "novels",
    },
    {
        path: "/rankings/:rankingName",
        name: "rankings",
    },
    {
        path: "/terms",
        name: "terms",
    },
    {
        path: "/privacy",
        name: "privacy",
    },
    {
        path: "/faqs",
        name: "faqs",
    },
    {
        path: "/rankings",
        name: "rankings",
    },
    {
        path: "/*",
        name: "not-found-404",
    },
    {
        path: "/profile",
        name: "profile",
    }
]

export { routesNavLink, routesdata }
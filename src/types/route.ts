interface Route {
    name: string;
    path: string;
    element: React.ReactNode;
    icon?: React.ReactNode;
    isParam?: boolean;
    isDropdown?: boolean;
    dropdownItems?: RouteItem[];
}
interface RouteItem {
    id: string | number;
    name: string;
    path: string;
}

export type { Route, RouteItem }
interface RouteType {
    name: string;
    path: string;
    element?: React.LazyExoticComponent<() => JSX.Element>;
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

export type { RouteType, RouteItem }
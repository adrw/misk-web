/// <reference types="react" />
export * from "./actions";
export * from "./css";
/**
 * Common Interfaces
 */
interface IWebTab {
    slug: string;
    url_path_prefix: string;
    roles?: string[];
    services?: string[];
}
interface IDashboardTab extends IWebTab {
    name: string;
    category?: string;
}
interface IAdminDashboardTab extends IDashboardTab {
}
interface IServiceMetadata {
    admin_dashboard_url: string;
    app_name: string;
    environment: Environment;
    navbar_items?: Array<string | Element | JSX.Element>;
    navbar_status?: string | Element | JSX.Element;
}
/**
 * Environment
 */
declare enum Environment {
    TESTING = "TESTING",
    DEVELOPMENT = "DEVELOPMENT",
    STAGING = "STAGING",
    PRODUCTION = "PRODUCTION"
}
/**
 * Ducks
 */
interface IDefaultState {
    data?: any;
    error?: any;
    loading?: boolean;
    success?: boolean;
    toJS?: () => any;
}
declare const defaultState: IDefaultState;
/**
 * Binder
 */
declare enum IBinderKeys {
    NavNavbarMenu = "NavNavbarMenu",
    TabEntry = "TabEntry"
}
interface IBinder {
    multibind: (binder: IBinderKeys, key: string, value: any) => any;
}
/**
 * Window
 */
interface IWindow extends Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    Misk: {
        Binder: IBinder;
        Common: any;
        Components: any;
        History: any;
    };
    MiskTabs: {
        Config: any;
        Loader: any;
    };
    MiskBinders: any;
}
export { IWebTab, IDashboardTab, IAdminDashboardTab, IServiceMetadata, defaultState, Environment, IDefaultState, IBinder, IBinderKeys, IWindow };

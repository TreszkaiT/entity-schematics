export interface EntitySchema {
    name: string;
    modules: string[];
    srcPath: string;
    appPath: string;
    modulePath: string;
    apiPath: string;
    viewPath: string;
    authorization: boolean;
}

export enum ModulesEnum {
    //main files
    src             = 'src',
    app             = 'app',        
    //api
    api             = "api",
    authentication  = "authentication",
    authorization   = "authorization",
    //modules
    config          = "config",
    data            = "data",
    store           = "store",
    form            = "form",
    util            = "util",
    view            = "view",
    collection      = "collection",
    admin           = "admin",
    //pages
    page            = "page",
}
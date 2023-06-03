export interface EntitySchema {
    name: string;
    modules: string[];
    modulePath: string;
    apiPath: string;
    corePath: string;
    pagePath: string;
}

export enum ModulesEnum {   
    //api
    api             = "api",
    //modules
    data            = "data",
    store           = "store",
    form            = "form",
    util            = "util",
    collection      = "collection",
    admin           = "admin",
    page            = "page",
}
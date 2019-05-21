class Constants {
    //属性和方法名重名时，方法的扩展名
    public static EXPAND_NAME: string = '_g_';
    //应用图标的基准大小
    public static APP_SIZE_NUMBER: number = 64;
    //应用图标的间隙
    public static APP_PADDING: number = 8;

    public static APP_NORMAL: string = 'normal';

    public static APP_BIG: string = 'big';

    public static APP_SMALL: string = 'small';

    public static REDIRECT: string = 'redirect';

    public static ROOT: string = window._p_root || "/_p";

    public static FILTER_PATH: string = window._p_filterPath || "*"+ Constants.ROOT +"/index.html";

    //登录页面
    public static LOGINPATH = Constants.ROOT + '/login';

    public static RELOGINPATH = Constants.ROOT + '/reLogin';

    public static MAINPATH = Constants.ROOT + '/desk';

    public static SESSION_COOKIENAME = '__gsessionId';

    public static HTML_PARSER_DOM_INDEX = "__g_index_";

    //标签匹配
    public static RQUICK_EXPR = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;

    public static TYPE = {
        'string': String,
        'boolean': Boolean,
        'number': Number,
        'object': Object,
        'function': Function,
        'array': Array,
        'undefined': undefined,
        'null': null,
        'regExp': RegExp,
        'cssProperties': CSSStyleDeclaration,
        'any': Object,
    };
}
window.Constants = Constants as any;

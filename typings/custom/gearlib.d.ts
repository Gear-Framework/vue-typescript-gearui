interface GearType {
    String: string,
    Boolean: boolean,
    Number: number,
    Object: object,
    Function: Function,
    Array<T>(): Array<T>,
    Undefined: undefined,
    RegExp: RegExp,
    Null: null,
    CssProperties: CSSStyleDeclaration,
    Or<T, U>(t1: T, t2: U): T | U;
    Or<T, U, V>(t1: T, t2: U, t3: V): T | U | V;
    Or<T, U, V, W>(t1: T, t2: U, t3: V, t4: W): T | U | V | W;
    Or<T, U, V, W, X>(t1: T, t2: U, t3: V, t4: W, t5: X): T | U | V | W | X;
    Or<T, U, V, W, X, Y>(t1: T, t2: U, t3: V, t4: W, t5: X, t7: Y): T | U | V | W | X | Y;
    Or<T, U, V, W, X, Y, Z>(t1: T, t2: U, t3: V, t4: W, t5: X, t7: Y, t8: Z): T | U | V | W | X | Y | Z;
    Or(t1: any, t2: any, ...tn: any[]): any;
    VoidT<T>(): T;
    Enum<T>(): T;
    Any: any;
  }
  
  declare var GearType: GearType;
  
  interface Constants {
    EXPAND_NAME:string;
    APP_SIZE_NUMBER:number;
    APP_PADDING: number;
  
    APP_NORMAL: string;
  
    APP_BIG: string;
  
    APP_SMALL: string;
  
    REDIRECT: string;
  
    ROOT: string;
  
    FILTER_PATH: string;
  
    LOGINPATH: string;
  
    RELOGINPATH:string;
  
    MAINPATH: string;
  
    SESSION_COOKIENAME: string;
  
    RQUICK_EXPR: RegExp;
  
    TYPE: {
        String: string,
        Boolean: string,
        Number: string,
        Object: string,
        Function: string,
        Array: string,
        Undefined: string,
        Null: string,
        RegExp: string,
        CssProperties: string,
        Any: string,
    };
  
    HTML_PARSER_DOM_INDEX: string;
  }
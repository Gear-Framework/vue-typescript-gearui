export var GearType = {
    String: String,
    Boolean: Boolean,
    Number: Number,
    Object: Object,
    Function: Function,
    Array: () => {
        return Array;
    },
    Undefined: undefined,
    Null: null,
    RegExp: RegExp,
    VoidT:() => {
        return Object;
    },
    CssProperties: CSSStyleDeclaration,
    Any: Object as any,
    Enum: () => {
        return Object;
    },
    Or:(...types: any[]) => {
        return Object;
    }
}
window.GearType = GearType as any;
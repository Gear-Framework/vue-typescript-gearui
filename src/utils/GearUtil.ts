import UUID from './uuid';
export default class GearUtil {

    public static getAttributeValueType(name: string, value:string, types?: any) {
        let type: any = String;
        if(types && types[name] && types[name] != 'any') {
            return types[name];
        }
        value = value.trim();
        let valueTypeArr = value.split("::");
        if(valueTypeArr.length > 1) {
            type = Constants.TYPE[valueTypeArr[1]] || Object;
        }else {
            if(value == "true" || value == "false") {
                type = Boolean;
            }else {
                let methodReg = /[$|\w]{1,}\([\.|$|\w]{0,}\);?/;
                let match = value.match(methodReg);
                if(match && window[match[0].replace(/\([\.|$|\w]{0,}\);?/,"")]) {
                    type = Function;
                }else if(window.Events.keys.contains(name) && /^javascript:.+/.test(value)){
                    // 如果以javascript开头，则认为是脚本
                    type = 'script';
                }else {
                    if(/^\{[\s\S]+\}$/.test(value) || /^\[[\s\S]+\]$/.test(value)) {
                        try {
                            type = Constants.TYPE[typeof eval("(" + value + ")")] || Object;;
                        }catch(e) {
                        }
                    }
                }
            }
        }
        return type;
    }

    /**
     * 获取clazz
     * @param ast 
     */
    static getClassFromTag(ele: Element) {
        let attrs = ele.attributes;
        let clazz = null;
        if(attrs != null) {
            let ctype = attrs["ctype"];
            if(ctype) {
                clazz = G.components[ctype.value];
            }
        }
        if(clazz == null) {
            let tag = ele.tagName;
            if(tag) {
                if(tag.startsWith("g")) {
                    if(tag.startsWith("g-")) {
                        clazz = G.components[tag.substring(2, tag.length)];
                    }else {
                        clazz = G.components[tag.substring(1, tag.length)];
                    }
                }else if(tag == "input") {
                    let type = attrs["type"];
                    clazz = G.components[type.value];
                    if(clazz == null) {
                        clazz = G.components["text"];
                    }
                }
            }
        }
        return clazz;
    }

    /**
     * 创建一个类型
     * @param fun 
     * @param parent 
     */
    static createClass(parent: any, fun?: Function):{name: any, clazz: any}|null {
        let clazz = GearUtil.Class(fun);
        if(clazz && clazz.prototype && clazz.prototype.name) {
            clazz = clazz.implements(parent);
            let name = clazz.prototype.name;
            return {
                name: name,
                clazz: clazz
            };
        }
        return null;
    }

    static Class(fun?: Function) {
        if(fun === undefined) {
            fun = function(){};
        }
        var P:any = fun;
        var fn = P.fn || function(){};
        P.constructor = fn;
        fn.prototype = P;
        //类的继承
        fn.implements = function(F: any) {
            if(F && G.G$.isFunction(F)) {
                // var _F: any = function() {};
                // if(typeof this.prototype == "function") {
                //     _F.prototype = F.prototype;
                // }else {
                //     _F.prototype = this.prototype;
                // }
                // _F.prototype.constructor = F;
                // this.prototype = new _F();
                // this.prototype.constructor = this;
                var _F: any = function() {};
                _F.prototype = F.prototype;
                this.prototype = new _F();
                this.prototype.constructor = this;
            }
            return this;
        };
        return fn;
    }

    //转义类型名称
    static parseStyleType(styleType: string) {
        if(styleType && styleType.length > 0) {
            styleType = styleType.replace(/-\w{1}/g,function(word) {
                return word.substring(1).toLocaleUpperCase();
            });
        }
        return styleType;
    }

    //属性转换成对应的props
    static attrsToProps($props: any,$attrs: any,text: string, types?: any):any {
        let props = {};
        for(let name in $props) {
            let value = $props[name];
            let type:string = GearUtil.getAttributeValueType(name.toLowerCase(), value, types);
            if(type == undefined || value == undefined) {
                continue;
            }
            if(typeof value == 'string') {
                props[name] = GearUtil.parseAttributeValue(name, value, type);
            }else {
                props[name] = value;
            }
            
        }
        for(let name in $attrs) {
            if(props[name] == null || props[name] == undefined) {
                let value = $attrs[name];
                let type:string = GearUtil.getAttributeValueType(name.toLowerCase(), value, types);
                if(type == undefined || value == undefined) {
                    continue;
                }
                if(typeof value == 'string') {
                    props[name] = GearUtil.parseAttributeValue(name, value, type);
                }else {
                    props[name] = value;
                }
            }
        }
        // 这里当name属性未设置时默认赋原始id的值
        if(!props["name"]) {
            if(props["id"]) {
                props["name"] = props["id"];
            }else {
                props["id"] = UUID.get();
                props["name"] = props["id"];
            }
        }

        if(!props["value"]){
            if(text) {
                props["value"] = text;
            }
        }

        // disabled属性在浏览器中，设置为true时，该属性值为“disabled”
        if(props["disabled"] && (props["disabled"]==true || props["disabled"]=="disabled" || props["disabled"]=="true")){
            props["disabled"] = true;
        }else{
            props["disabled"] = false;
        }
        if(!props["text"]) {
            if(text) {
                props["text"] = text;
            }
        }
        return props;
    }

    // 解析属性值
    static parseAttributeValue(name: string,value: string, typeConstractor: any){
        // 解析value中的表达式 G{xxx} ，对表达式中的函数或变量进行解析处理
       
        value = value.replace(/\G\{([^\}]+)\}/g,function(match,m1){
            // 获得表达式，如果表达式是以“();”结尾的，去除之
            var expression = m1.replace(/\([\.|$|\w]{0,}\);?$/,"");
            // 先检查window作用域中是否存在该函数或变量
            var v = window[expression];
            if(v){
                // 如果存在
                if(typeof v =="function"){
                    // 如果是个函数，则调用它（函数应返回一个字符串值，为防止函数返回其它值，这里对返回值作了判断）
                    var r = v.call(window);
                    if(r)
                        return r;
                    else
                        return "";
                }else{
                    // 其它类型直接返回（这里应只有字符串类型，否则也会被转为字符串类型）
                    return v;
                }
            }else{
                // 如果不存在，则使用eval来解析函数
                var fun = function(){
                    try{
                        return eval(expression);
                    }catch(err){
                        console.error(err);
                        return "";
                    }
                }
                var r = fun.call(window);
                if(r)
                    return r;
                else
                    return "";                    
            }
        });

        if(window.Events.keys.contains(name.toLowerCase())){
            let values = value.split(";");
            let funs = [];
            for(let i = 0; i < values.length; i++) {
                let valueInner = values[i];
                if(typeConstractor == "script" || typeConstractor == Function) {
                    valueInner = valueInner.replace(/^javascript:/,"");
                    funs.push(function(...args: any[]){
                        try{
                            return eval(valueInner);
                        }catch(err){
                            console.error(err);
                        }
                    })
                }else {
                    let methodName = valueInner.replace(/\([\.|$|\w]{0,}\);?/,"");
                    if(window.Events.cannotSetState.contains(name)) {
                        GearUtil.removeSetStateFromCannotSetStateFunction(methodName, name);
                    }
                    let script = methodName + ".bind(this)(...arguments)";
                    // 如果该属性名称在常用事件名称列表中，这里按照事件的规则处理
                    funs.push(function(...args: any[]){
                        try{
                            return eval(script);
                        }catch(err){
                            console.error(err);
                        }
                    });
                }
            }
            if(funs.length == 1) {
                return funs[0];
            }
            return funs;
        }else{
            let type = typeConstractor;
            //回调函数
            try {
                if(type == Function){
                    let values = value.split(";");
                    let funs = [];
                    for(let i = 0; i < values.length; i++) {
                        let valueInner = values[i];
                        let methodName = valueInner.replace(/\([\.|$|\w]{0,}\);?/,"");
                        methodName = methodName.replace(/^javascript:/,"")//防止老版中，如：link属性也会有javascript:fun()写法
                        if(window[methodName] && window[methodName] instanceof Function) {
                            funs.push(window[methodName]);
                        }
                    }
                    if(funs.length == 1) {
                        return funs[0];
                    }
                    return funs;
                }else if(type == "script") {
                    let script = value.replace(/^javascript:/,"");
                    return function(...args: any[]){
                        try{
                            return eval(script);
                        }catch(err){
                            console.error(err);
                        }
                    }
                }else if(type == Boolean) {
                    if(value == "true") {
                        return true;
                    }else {
                        return false;
                    }
                }else if(type == Number && value.indexOf('\\.') != -1) {
                    return parseFloat(value);
                }else if(type == Number && value.indexOf('\\.') == -1) {
                    return parseInt(value);
                }else if(type == Object || type == Array) {
                    if(type == Array && typeof value == 'string' && value.indexOf(',') != -1) {
                        return value.split(',');
                    }
                    return eval("(" + value + ")");
                }else if(type == CSSStyleDeclaration) {
                    return GearJson.fromStyle(value).toJson();
                }else {
                    return value;
                } 
            } catch (error) {
                return value;
            }
            
        }
    }

    private static removeSetStateFromCannotSetStateFunction(methodName: string, eventName: string) {
        let method = window[methodName];
        if(method instanceof Function) {
            let methodStr:string = method.toString();
            let setStateReg = /[;|\n]{1,}[\t| ]{0,}[$|\w]{1,}\.setState[\t| |\n]{0,}\([ |\t|\n]{0,}/;
            let s = methodStr.match(setStateReg);
            if(s) {
                throw eventName + " = " + methodName + " cannot invoke setState";
            }
        }
    }

    // 按规则将其转换为控件实际可接受的属性
    static toProps(options: any){
        let props = {};
        if(options){
            for(let key in options){
                let value = options[key];
                if("class"==key.toLowerCase()){
                    props["className"] = value;
                }else if("invalidmessage"==key.toLowerCase()){
                    props["invalidMessage"] = value;
                }else if("events"==key.toLowerCase()){
                    props["events"] = value;
                }else{
                    props[key.toLowerCase()] = value;
                }
            }
        }
        if(!props["id"]){
            props["id"] = UUID.get();
        }
        return props;
    }

}
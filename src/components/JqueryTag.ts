import Vue, { VNode } from 'vue';
import Component from 'vue-class-component';
import { Prop, Watch } from 'vue-property-decorator';
import { ObjectUtil, UUID, GearUtil } from '@/utils';
const lowerFirst = require('lodash/lowerFirst');
export var props = {
    // style: GearType.CssProperties,
    width: GearType.Any,
    height: GearType.Any,
    visible: GearType.Boolean,
    id: GearType.String,
    name: GearType.String,
    title: GearType.String,
    disabled: GearType.Boolean,
    // class: GearType.String,
    className: GearType.String,
    remove: GearType.Boolean,//删除该组件节点
    //...window.Events._events
};

export interface state {
    id?: string,
    name?: string,
    title?: string,
    disabled?: boolean,
    visible?: boolean,
    className?: string,
    style?: CSSStyleDeclaration,
    remove?:number,//删除该组件节点
    ref?(ele: any): void,
    onClick?(e: any): void,  
    onDoubleClick?(e: any): void, 
    onKeyUp?(e: any): void,  
    onKeyDown?(e: any): void, 
    onKeyPress?(e: any): void,                                          
    onMouseMove?(e: any): void,
    onMouseOver?(e: any): void,
    onMouseDown?(e: any): void,
    onMouseUp?(e: any): void,
    onMouseOut?(e: any): void, 
}

@Component
export default class JqueryTag<P extends typeof props, S extends state> extends Vue {

    protected __ref!:string;
    protected props!:P;
    protected state:S = {} as any;
    protected __text__: string = "";
    //更新之后的回调
    private updateCallback: Function[] = [];

    protected concatInitial: boolean = true;

    //所有的事件
    protected events:{} = {};

    constructor() {
        super();
    }

    /**
     * 获取文本数据
     */
    protected initText() {
        let ele = this.$slots.default;
        let text = '';
        if(ele) {
            for(let i = 0; i < ele.length; i++) {
                text += this.getVNodeText(ele[i]);
            }
        }
        this.__text__ = text;
    }

    protected getVNodeText(node: VNode) {
        let text = node.text || '';
        if(node.children) {
            for(let i=0; i < node.children.length; i++) {
                text += this.getVNodeText(node.children[i]);
            }
        }
        return text;
    }
    /**
     * 将vue 的props 复制到 当前对象的强类型props
     */
    protected copyProps() {
        this.props = GearUtil.attrsToProps(this.$props, this.$attrs, this.__text__, this.constructor['types']);
    }

    private getInitState(): state {
        let initState = this.getConcatInitialState();
        let commonState = this.getCommonsState();
        initState = ObjectUtil.extend(commonState, initState);
        this.deleteFromInitState(initState);
        this.addGetterAndSetterInState(initState);
        return initState;
    }

    //子类按具体功能提供自己的state
    protected getInitialState(): state {return {};};
    //提供一個入口，可以在state生效之前刪除其中的内容
    protected deleteFromInitState(state: state):void {}

    protected getConcatInitialState() {
        let state = this.getInitialState ? this.getInitialState() : {};
        let __super = this.getSuper();
        while(__super && __super.getSuper && this.concatInitial) {
            let fn = __super.getInitialState;
            if(fn) {
                let superState = fn.bind(this)();
                state = ObjectUtil.extend(superState, state);
            }
            __super = __super.getSuper();
        }
        return state;
    }

    //获取公共state
    private getCommonsState(): state {
        // let style = this.props.style || {};
        // if(this.props.width != undefined) {
        //     if(typeof this.props.width === 'string'){
        //         if(this.props.width.indexOf("%")>-1){
        //             style.width = this.props.width || "none";
        //         }else{
        //             style.width = (parseInt(this.props.width) || "none") as any;
        //         }
        //     }else{
        //         style.width = this.props.width || "none";
        //     }
        // }
        // if(this.props.height != undefined) {
        //     if(typeof this.props.height === 'string'){
        //         if(this.props.height.indexOf("%")>-1){
        //             style.height = this.props.height || "none";
        //         }else{
        //             style.height = (parseInt(this.props.height) || "none") as any;
        //         }
        //     }else{
        //         style.height = this.props.height || "none";
        //     }
        // }
        // if(this.props.visible == false) {
        //     style.display = "none";
        // }
        let commonState:state = {
            id: this.props.id,
            name: this.props.name,
            title: this.props.title,
            disabled: this.props.disabled,
            // className: this.props.class || this.props.className,
            // children: this.props.children,
            // ref: (ele: any)=>{
            //     this.ref = ele;
            // },
            // onClick:(e)=>{
            //     this.doEvent("click",e);
            // },  
            // onDoubleClick:(e)=>{
            //     this.doEvent("dblClick",e);
            // }, 
            // onKeyUp:(e)=>{
            //     this.doEvent("keyUp",e);
            // },  
            // onKeyDown:(e)=>{
            //     this.doEvent("keyDown",e);
            // }, 
            // onKeyPress:(e)=>{
            //     this.doEvent("keyPress",e);
            // },                                          
            // onMouseMove:(e)=>{
            //     this.doEvent("mouseMove",e);
            // },
            // onMouseOver:(e)=>{
            //     this.doEvent("mouseOver",e);
            // },
            // onMouseDown:(e)=>{
            //     this.doEvent("mouseDown",e);
            // },
            // onMouseUp:(e)=>{
            //     this.doEvent("mouseUp",e);
            // },
            // onMouseOut:(e)=>{
            //     this.doEvent("mouseOut",e);
            // },
            // style: style,
            remove: this.props.remove==true? 1:0
        };
        return commonState;
    }

    protected getSuper() {
        let __proto__ = Object.getPrototypeOf(this.constructor);
        if(__proto__ && __proto__.prototype) {
            return __proto__.prototype;
        }
        return null;
    }

    protected addGetterAndSetterInState(state: any) {
        let className = this.constructor.name;
        let propsTemplete = G.tag[className] ? G.tag[className].types : null;
        if(propsTemplete) {
            for(let key in state) {
                if(key == 'test') {
                    // delete state[key];
                    Object.defineProperty(state, key, {
                        get: function() {
                            console.log("执行自定义get");
                            if(this["_" + key]) {
                                return this["_" + key];
                            }
                            return 123;
                        },
                        set: function(v) {
                            console.log("执行自定义set");
                            this["_" + key] = v;
                        }
                    });
                }
                let vInState = state[key];
                if(vInState instanceof Function && propsTemplete[key] && propsTemplete[key] != Constants.TYPE.function) {
                    let v = vInState();
                    delete state[key];
                    Object.defineProperty(state, key, {
                        get: function() {
                            if(this["_" + key]) {
                                return this["_" + key];
                            }
                            if(propsTemplete[key] == Constants.TYPE.number && ObjectUtil.isNumber(v)) {
                                if(ObjectUtil.isNumber(v)) {
                                    if(ObjectUtil.isInteger(v)) {
                                        this["_" + key] = parseInt(v + "");
                                    }else {
                                        this["_" + key] = parseFloat(v + "");
                                    }
                                }
                                return this["_" + key];
                            }
                            if(propsTemplete[key] == Constants.TYPE.string && typeof v == "string") {
                                this["_" + key] = v + "";
                                return this["_" + key];
                            }
                            if(propsTemplete[key] == Constants.TYPE.array && v instanceof Array) {
                                if(v instanceof Array){
                                    this["_" + key] = v;
                                }else {
                                    v = v + "";
                                    if(v.length>0)
                                        this["_" + key] = v.split(",");
                                    else
                                        this["_" + key] = [];
                                }
                                return this["_" + key]; 
                            }
                            this["_" + key] = v;
                            return this["_" + key];
                        },
                        set: function(v) {
                            this["_" + key] = v;
                        }
                    });
                }else if(typeof vInState == "string" && vInState.indexOf(",") != -1 && propsTemplete[key] && propsTemplete[key] != Constants.TYPE.string) {
                    Object.defineProperty(state, key, {
                        get: function() {
                            if(this["_" + key]) {
                                return this["_" + key];
                            }
                            if(propsTemplete[key] == Constants.TYPE.array) {
                                this["_" + key] = vInState.split(",");
                            }else {
                                this["_" + key] = vInState;
                            }
                            return this["_" + key];
                        },
                        set: function(v) {
                            this["_" + key] = v;
                        }
                    });
                }
            }
        }
    }

    //执行事件
    doEvent(eventName: string,...param: any[]) {
        if(eventName) {
            let resultRe:any[] = [];
            let eventArr:Array<Function> = this.events[eventName]||[];
            eventArr.map((ele) => {
                if(ele != null && (typeof ele === "function")) {
                    let result = ele.call(this,...param);
                    if(result != null) {
                        resultRe.push(result);
                    }
                }
            });
            if(resultRe.length > 0) {
                return resultRe;
            }
        }
        return true;
    }

    haveEvent(eventName: string) {
        return this.events[eventName] && this.events[eventName].length > 0;
    }

    protected bindAllEvents() {
        let props = this.props;
        for(let key in props) {
            let event = props[key] as any;
            if(event instanceof Function) {
                if(key.startsWith("on")) {
                    let keyLower = key.substring(2, key.length);
                    keyLower = lowerFirst(keyLower);
                    this.bind(keyLower, event);
                }else {
                    let keyLower = lowerFirst(key);
                    this.bind(keyLower, event);
                } 
            }else {
                if(event instanceof Array) {
                    event.forEach(element => {
                        if(key.startsWith("on")) {
                            let keyLower = key.substring(2, key.length);
                            keyLower = lowerFirst(keyLower);
                            this.bind(keyLower, element);
                        }else {
                            let keyLower = lowerFirst(key);
                            this.bind(keyLower, element);
                        } 
                    });
                }
            }
        }
    }

    //绑定事件
    bind(eventName:string,...events: Array<any>) {
        if(eventName && events.length > 0) {
            let eventArr:Array<Function> = this.events[eventName]||[];
            eventArr = eventArr.concat(events);
            this.events[eventName] = eventArr;
        }
        return this;
    }

    //取消事件的绑定
    unbind(eventName: string,fun?: Function) {
        if(eventName) {
            if(fun) {
                let events = this.events[eventName];
                let index = -1;
                events.map((ele: Function,i: number) => {
                    if(ele == fun) {
                        index = i;
                        return;
                    }
                });
                if(index >=0 ) {
                    let garr = new GearArray(events);
                    garr.remove(index);
                    this.events[eventName] = garr.toArray();
                }
            }else {
                delete this.events[eventName];
            }
        }
        return this;
    }

    protected addOnEventsMethod() {
        for(let key in window.Events) {
            if(!this[key]) {
                this[key] = (fun: Function)=>{
                    if(fun instanceof Function) {
                        let keyLower = key.substring(2, key.length);
                        keyLower = lowerFirst(keyLower);
                        this.bind(keyLower, fun);
                    }
                }
            }
        }
    }

    beforeCreate() {
        console.log('Test beforeCreate');
    }
    created() {
        G.parsed = false;
        this.__ref = UUID.get();
        G.vmdoms[this.__ref] = this;
    }

    beforeMount() {
        this.initText();
        this.copyProps();
        let state = this.getInitState();
        this.state = state as any;
        //绑定所有的props里面注册的事件
        this.bindAllEvents();
        this.addOnEventsMethod();
    }

    mounted() {
        console.log('Test mounted');
    }
    beforeDestroy() {
        console.log('Test beforeDestroy');
    }
    destroyed() {
        console.log('Test destroyed');
    }
    beforeUpdate() {
        G.parsed = false;
        console.log('Test beforeUpdate');
    }
    updated() {
        console.log('Test updated');
        while(this.updateCallback.length > 0) {
            let fun = this.updateCallback.pop();
            if(fun) {
                fun();
            }
        }
    }

    //重写setState
    setState<K extends any>(
        state: any,
        callback?: () => void
    ) {
        ObjectUtil.extend(this.state, state);
    }

    @Watch('state')
    onGearStateChange(val: S, old: S) {
        console.log("监听到state变化");
    }

    protected getSuperMethod(methodName: string, constr: any) {
        if(constr.options && constr.options.methods) {
            console.log(constr);
            let fn = constr.options.methods[methodName];
            fn = fn.bind(this);
            return fn;
        }
        return null;
    }
}
import Vue from 'vue';
import UUID from './utils/uuid';
import { WindowUtil } from './utils';
import { Emit } from 'vue-property-decorator';

export default class G {
    
    public static _name:string = UUID.get();

    private static root:Vue;

    //是否渲染完成
    static parsed: boolean = false;

    static components = {};

    static tag = {};

    //待执行的function
    static waitFuns: Array<Function> = [];

    private static vmdoms:{[key:string]: JqueryTag} = {};

    static render(renderOptions: RenderOptions) {
        if(renderOptions.el) {
            this.root = new Vue(renderOptions);
            Vue.nextTick(() => {
                this.parsed = true;
            });
        }else {
            console.error("请指定el进行渲染");
        }
    }

    static setName(name: string) {
        G._name = name;
    }

    static $(selector?:string|Element|Function|null) {
        if(typeof selector == "function") {
            if(this.parsed === true) {
                selector();
            }else {
                this.waitFuns.push(selector);
            }
        }else {
            if(this.parsed) {
                return this._$(selector);
            }else {
    
            }
        }
    }

    static _$(selector?:string|Element|Function|null) {
        if(typeof selector == "string" || selector instanceof Element) {
            let ele;
            if(typeof selector == "string") {
                if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {
                    if(window['jQuery'] && typeof window['jQuery'] === 'function') {
                        return window['jQuery'](selector);
                    }
                    return Vue.compile(selector);
                }
                ele = document.querySelector(selector);
            }else {
                ele = selector;
            }
            if(ele) {
                let __ref = ele.getAttribute("__ref");
                console.log(__ref);
                if(__ref && this.vmdoms[__ref]) {
                    return this.vmdoms[__ref];
                }else {
                    return ele;
                }
            }
        }
        if(window['jQuery'] && typeof window['jQuery'] === 'function') {
            return window['jQuery'](selector);
        }else {
            return null;
        }
    }

    /**
     * 执行排队的function
     */
    static doWaitFuns() {
        while(this.waitFuns.length > 0) {
            let fun = this.waitFuns.pop();
            if(fun) {
                fun.call(this);
            }
        }
    }
}
import Vue from 'vue';
import Button from './wrapper/basic/Button.vue';

Vue.config.productionTip = false;
import G from './Gear';
import { ObjectUtil } from './utils';
import * as Tags from './components';
import { WindowUtil } from './utils';
// import { Message } from './components/pack';
// import { Dialog } from './components/pack';
import * as utils from './utils';
WindowUtil.extendPrototype();
// const SockJs = require('sockjs-client');
let GearWeb:any = function(selector?:string|Element|Function|null) {
  return G.$.call(GearWeb, selector);
};
GearWeb = ObjectUtil.extend(true, GearWeb, G);
GearWeb = ObjectUtil.extend(true, GearWeb, window['jQuery'] || {});
window.G = GearWeb as any;
// window.G.SockJs = SockJs;
// window.G.registerCustomComponents();
// window.G.messager = Message.default;
// window.G.dialog = Dialog.default;
window.G.utils = utils;
window.G.tag = Tags.tags;
window.G.components = Tags.components;

//兼容老版的写法--------------------
window.G.http = utils.Http;
window.G.util = utils.Http;
window.onload = function() {
  for(let i = 0; document.body && document.body.children && i < document.body.children.length; i++) {
    let ele = document.body.children.item(i);
    if(ele) {
      if(ele.tagName.toLowerCase() != "script") {
        window.G.render({
          el: ele,
          components: {
              ...Tags.components
          },
          mounted: () => {
            Vue.nextTick(() => {
              window.G.parsed = true;
              window.G.doWaitFuns();
            });
          }
        });
      }
    }
  }
}


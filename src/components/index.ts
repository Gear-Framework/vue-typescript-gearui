import * as JqueryTag from './JqueryTag';
import * as Tag from './Tag';
const lowerFirst = require('lodash/lowerFirst');
// import * as Component from './Component';
// import * as HtmlTag from './HtmlTag';
// import * as VoidTag from './VoidTag';
// import * as Websocket from './Websocket';
// import * as Wrapper from './Wrapper';
import * as basic from './basic';
// import * as data from './data';
// import * as form from './form';
// import * as layout from './layout';
// import * as navigation from './navigation';
// import * as pack from './pack';
// Component.default["props"] = Component.props;
// HtmlTag.default["props"] = HtmlTag.props;
// Websocket.default["props"] = Websocket.props;
// Wrapper.default["props"] = Wrapper.props;
var tags = {
    JqueryTag: JqueryTag.default,
    Tag: Tag.default,
    // FormTag,
    // Component: Component.default,
    // HtmlTag: HtmlTag.default,
    // VoidTag: VoidTag.default,
    // websocket: Websocket.default,
    // Websocket: Websocket.default,
    // wrapper: Wrapper.default,
    // Wrapper: Wrapper.default,
}
var components = {};
// tags["component"] = Component.default;
// tags["Component"] = Component.default;
// components["component"] = Component.default;
// let component_types = {};
// for(let key in Component.props) {
//     window.possibleStandardTagNames[key.toLowerCase()] = key;
        // let type = Component.props[key];
        // component_types[key.toLowerCase()] = (typeof type == "string") ? ((type.startsWith("_g_")) ? type.substring(3, type.length) : "any") : type;
        // Component.props[key] = Object;
// }
// Component.default["types"] = component_types;
// Component.default["props"] = Component.props;
// components["g-component"] = Component.default;
// if(Component.useName) {
//     tags[Component.useName] = Component.default;
//     components[Component.useName] = Component.default;
// }
// let websocket_types = {};
// tags["websocket"] = Websocket.default;
// tags["Websocket"] = Websocket.default;
// components["websocket"] = Websocket.default;
// for(let key in Websocket.props) {
//     window.possibleStandardTagNames[key.toLowerCase()] = key;
//let type = Websocket.props[key];
        // websocket_types[key.toLowerCase()] = (typeof type == "string") ? ((type.startsWith("_g_")) ? type.substring(3, type.length) : "any") : type;
        // Websocket.props[key] = Object;
// }
// Websocket.default["types"] = websocket_types;
// Websocket.default["props"] = Websocket.props;
// components["g-websocket"] = Websocket.default;
// if(Websocket.useName) {
//     tags[Websocket.useName] = Websocket.default;
//     components[Websocket.useName] = Websocket.default;
// }
// tags["wrapper"] = Wrapper.default;
// tags["Wrapper"] = Wrapper.default;
// components["wrapper"] = Wrapper.default;
// for(let key in Wrapper.props) {
//     window.possibleStandardTagNames[key.toLowerCase()] = key;
//     let type = Wrapper.props[key];
//     window.possibleStandardTypes[key.toLowerCase()] = (typeof type == "string") ? ((type.startsWith("_g_")) ? type.substring(3, type.length) : "any") : "any";
// }
// components["gform"] = form.Form.Form;
// var addOnEventsMethod = function() {
//     for(let key in window.Events) {
//         let prototype = JqueryTag.default.prototype;
//         if(!prototype[key]) {
//             prototype[key] = function(fun: Function){
//                 if(fun instanceof Function) {
//                     let keyLower = key.substring(2, key.length);
//                     keyLower = lowerFirst(keyLower);
//                     this.bind(keyLower, fun);
//                 }
//             }
//         }
//     }
// }
// addOnEventsMethod();
var addComponents = function(params:any) {
    for(let key in params) {
        let keyLower = key.toLowerCase();
        if(key && params[key] && params[key].default && params[key].props) {
            let types = {};
            for(let keyInner in params[key].props) {
                window.possibleStandardTagNames[keyInner.toLowerCase()] = keyInner;
                let type = params[key].props[keyInner];
                types[keyInner.toLowerCase()] = (typeof type == "string") ? ((type.startsWith("_g_")) ? type.substring(3, type.length) : "any") : type;
                params[key].props[keyInner] = Object;
            }
            params[key].default["types"] = types;
            params[key].default["props"] = params[key].props;
            tags[keyLower] = params[key].default;
            tags[key] = params[key].default;
            components["g-" + keyLower] = params[key].default;
            if(params[key].useName) {
                tags[params[key].useName] = params[key].default;
                components[params[key].useName] = params[key].default;
            }
        }
    }
}
addComponents(basic);
// addComponents(data);
// addComponents(form);
// addComponents(layout);
// addComponents(navigation);
// addComponents(pack);
export {
    tags,
    components,
    JqueryTag,
    Tag,
    // FormTag,
    // Component,
    // HtmlTag,
    // VoidTag,
    // Websocket,
    // Wrapper
};
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-append-to-document"),require("react-picker-columns"),require("react-popup")):"function"==typeof define&&define.amd?define(["classnames","noop","object-assign","prop-types","react","react-append-to-document","react-picker-columns","react-popup"],t):"object"==typeof exports?exports.ReactPickerCtrl=t(require("classnames"),require("noop"),require("object-assign"),require("prop-types"),require("react"),require("react-append-to-document"),require("react-picker-columns"),require("react-popup")):e.ReactPickerCtrl=t(e.classnames,e.noop,e["object-assign"],e["prop-types"],e.react,e["react-append-to-document"],e["react-picker-columns"],e["react-popup"])}(this,function(e,t,r,n,o,a,i,c){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="/",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=r(2),a=n(o);t.default=a.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ITEMS_DONE=[{role:"ok",text:"确定",action:"ok"}],t.ITEMS_OK_CANCEL=[{role:"cancel",text:"取消",action:"cancel"},{role:"ok",text:"确定",action:"ok"}]},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s,l,u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();r(6);var f=r(11),d=n(f),h=r(10),b=n(h),v=r(7),m=n(v),y=r(8),g=n(y),k=r(9),x=n(k),_=r(13),C=n(_),w=r(14),j=n(w),O=r(12),E=n(O),N=r(1),q=(l=s=function(e){function t(e){a(this,t);var r=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r._onToolbarClick=function(e){switch(e.action){case"ok":break;case"cancel":r.reset()}r.hide()},r._onDropClick=function(e){var t=r.state.onDropClick;r.reset(),t(e)},r._onChange=function(e){var t=e.target.value;r.doChange(t)},r.state={value:e.value,onDropClick:g.default,onChange:g.default},r._initialValue=null,window.ss=r,r}return c(t,e),p(t,null,[{key:"newInstance",value:function(e){return(0,E.default)(this,e,{className:"react-picker-container"})}},{key:"createInstance",value:function(e){return this._instance=this._instance||this.newInstance(e),this._instance}},{key:"show",value:function(e){return this._instance.component.show(e)}},{key:"hide",value:function(){return this._instance.component.hide()}},{key:"destroy",value:function(){this._instance&&(this._instance.destroy(),this._instance=null)}}]),p(t,[{key:"show",value:function(e){var t=this,r=this.refs.popup,n=(e.value,o(e,["value"]),(0,x.default)(u({},this.props),e));return n.value=e.value.slice(0),this._initialValue=e.value.slice(0),new Promise(function(e){t.setState(n,function(){r.show().then(e)})})}},{key:"hide",value:function(){var e=this.refs.popup;return new Promise(function(t,r){e.hide().then(t)})}},{key:"reset",value:function(){var e=this;this.setState({value:this._initialValue},function(){e.doChange(e._initialValue)})}},{key:"doChange",value:function(e){var t=e,r=this.state.onChange;this.setState({value:t},function(){r({target:{value:t}})})}},{key:"render",value:function(){var e=this.props,t=e.className,r=(e.toolbar,o(e,["className","toolbar"])),n=this.state,a=n.items,i=n.value,c=(n.onChange,n.placeholder);return d.default.createElement(j.default,u({},r,{ref:"popup",backdropStyle:{position:"fixed",opacity:"0.01"},onDropClick:this._onDropClick,className:(0,m.default)("react-picker-ctrl",t)}),d.default.createElement("header",{className:"react-picker-ctrl-toolbar"},c&&d.default.createElement("span",{className:"react-picker-ctrl-toolbar-placeholder"},c),d.default.createElement("div",{className:"react-picker-ctrl-toolbar-inner"},this.toolbarItems)),d.default.createElement(C.default,{items:a,onChange:this._onChange,value:i}))}},{key:"toolbarItems",get:function(){var e=this,t=this.props.toolbar;return t.items.map(function(t,r){return d.default.createElement("div",{key:r,"data-role":t.role,onClick:e._onToolbarClick.bind(e,t),href:"javascript:;",className:"react-picker-ctrl-toolbar-item"},t.text)})}}]),t}(f.PureComponent),s.propTypes={className:b.default.string,toolbar:b.default.object},s.defaultProps={toolbar:{items:N.ITEMS_OK_CANCEL,onClick:g.default}},s._instance=null,l);t.default=q},function(e,t,r){t=e.exports=r(4)(),t.push([e.id,'.react-picker-ctrl{color:#000;width:100%;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.react-picker-ctrl-toolbar{position:relative;left:0;bottom:0;background:#f7f7f8;height:44px;font-size:17px}.react-picker-ctrl-toolbar-item[data-role=cancel]{color:#929292}.react-picker-ctrl-toolbar-item[data-role=ok]{color:#007aff}.react-picker-ctrl-toolbar-placeholder{color:#bbb;position:absolute;font-size:15px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.react-picker-ctrl-toolbar:before{content:"";position:absolute;left:0;top:0;bottom:auto;right:auto;height:1px;width:100%;background-color:#c4c4c4;display:block;z-index:15;-webkit-transform-origin:50% 0;transform-origin:50% 0}.react-picker-ctrl-toolbar-inner{position:absolute;left:0;top:0;width:100%;height:100%;padding:0 8px;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}',""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var r=this[t];r[2]?e.push("@media "+r[2]+"{"+r[1]+"}"):e.push(r[1])}return e.join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(n[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&n[i[0]]||(r&&!i[2]?i[2]=r:r&&(i[2]="("+i[2]+") and ("+r+")"),e.push(i))}},e}},function(e,t,r){function n(e,t){for(var r=0;r<e.length;r++){var n=e[r],o=d[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(l(n.parts[a],t))}else{for(var i=[],a=0;a<n.parts.length;a++)i.push(l(n.parts[a],t));d[n.id]={id:n.id,refs:1,parts:i}}}}function o(e){for(var t=[],r={},n=0;n<e.length;n++){var o=e[n],a=o[0],i=o[1],c=o[2],s=o[3],l={css:i,media:c,sourceMap:s};r[a]?r[a].parts.push(l):t.push(r[a]={id:a,parts:[l]})}return t}function a(e,t){var r=v(),n=g[g.length-1];if("top"===e.insertAt)n?n.nextSibling?r.insertBefore(t,n.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function c(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function l(e,t){var r,n,o;if(t.singleton){var a=y++;r=m||(m=c(t)),n=u.bind(null,r,a,!1),o=u.bind(null,r,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=s(t),n=f.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=c(t),n=p.bind(null,r),o=function(){i(r)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}function u(e,t,r,n){var o=r?"":n.css;if(e.styleSheet)e.styleSheet.cssText=k(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function p(e,t){var r=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}function f(e,t){var r=t.css,n=t.sourceMap;n&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var o=new Blob([r],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},b=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),v=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=b()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var r=o(e);return n(r,t),function(e){for(var a=[],i=0;i<r.length;i++){var c=r[i],s=d[c.id];s.refs--,a.push(s)}if(e){var l=o(e);n(l,t)}for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete d[s.id]}}}};var k=function(){var e=[];return function(t,r){return e[t]=r,e.filter(Boolean).join("\n")}}()},function(e,t,r){var n=r(3);"string"==typeof n&&(n=[[e.id,n,""]]);r(5)(n,{});n.locals&&(e.exports=n.locals)},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=a},function(e,t){e.exports=i},function(e,t){e.exports=c}])});
//# sourceMappingURL=react-picker-ctrl.js.map
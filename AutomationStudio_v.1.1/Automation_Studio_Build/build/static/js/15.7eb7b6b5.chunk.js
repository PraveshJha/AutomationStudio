(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{127:function(e,t,a){"use strict";var n=a(27),o=a(8),s=a(3),i=a.n(s),l=a(1),r=a.n(l),c=(a(18),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),d=function(e){var t,a=e.tag,s=e.className,l=e.type,d=Object(o.a)(e,["tag","className","type"]),u=i()(Object(n.a)({},l,!!l),s);return t=a||(!a&&c[l]?c[l]:"p"),r.a.createElement(t,Object.assign({},d,{className:u}))};d.defaultProps={type:"p"},t.a=d},128:function(e,t,a){"use strict";var n=a(8),o=a(1),s=a.n(o),i=(a(18),a(21)),l=a(134),r=a(135),c=a(127),d=i.a.create("page"),u=function(e){var t=e.title,a=e.breadcrumbs,o=e.tag,i=e.className,u=e.children,p=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),m=d.b("px-3",i);return s.a.createElement(o,Object.assign({className:m},p),s.a.createElement("div",{className:d.e("header")},t&&"string"===typeof t?s.a.createElement(c.a,{type:"h1",className:d.e("title")},t):t,a&&s.a.createElement(l.a,{className:d.e("breadcrumb")},s.a.createElement(r.a,null,"Home"),a.length&&a.map(function(e,t){var a=e.name,n=e.active;return s.a.createElement(r.a,{key:t,active:n},a)}))),u)};u.defaultProps={tag:"div",title:""},t.a=u},131:function(e){e.exports={APIURL:"http://192.168.1.42:49657/api/",ReportURL:"http://192.168.1.42:8887/"}},132:function(e,t,a){"use strict";var n=a(4),o=a(5),s=a(22),i=a(1),l=a.n(i),r=a(0),c=a.n(r),d=a(3),u=a.n(d),p=a(28),m=a(2),h=Object(s.a)({},p.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:m.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),b=Object(s.a)({},p.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:m.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function f(e){var t=e.tag,a=e.baseClass,s=e.baseClassActive,i=e.className,r=e.cssModule,c=e.children,d=e.innerRef,h=Object(o.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=Object(m.o)(h,m.c),f=Object(m.n)(h,m.c);return l.a.createElement(p.Transition,b,function(e){var o="entered"===e,p=Object(m.m)(u()(i,a,o&&s),r);return l.a.createElement(t,Object(n.a)({className:p},f,{ref:d}),c)})}f.propTypes=h,f.defaultProps=b,t.a=f},162:function(e,t,a){"use strict";var n=a(4),o=a(5),s=a(1),i=a.n(s),l=a(0),r=a.n(l),c=a(3),d=a.n(c),u=a(2),p={tag:u.q,className:r.a.string,cssModule:r.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(o.a)(e,["className","cssModule","tag"]),r=Object(u.m)(d()(t,"modal-body"),a);return i.a.createElement(s,Object(n.a)({},l,{className:r}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},167:function(e,t,a){"use strict";var n=a(22),o=a(4),s=a(10),i=a(6),l=a(1),r=a.n(l),c=a(0),d=a.n(c),u=a(3),p=a.n(u),m=a(19),h=a.n(m),b=a(2),f={children:d.a.node.isRequired,node:d.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(s.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),h.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(r.a.Component);g.propTypes=f;var O=g,E=a(132);function v(){}var N=d.a.shape(E.a.propTypes),y={isOpen:d.a.bool,autoFocus:d.a.bool,centered:d.a.bool,size:d.a.string,toggle:d.a.func,keyboard:d.a.bool,role:d.a.string,labelledBy:d.a.string,backdrop:d.a.oneOfType([d.a.bool,d.a.oneOf(["static"])]),onEnter:d.a.func,onExit:d.a.func,onOpened:d.a.func,onClosed:d.a.func,children:d.a.node,className:d.a.string,wrapClassName:d.a.string,modalClassName:d.a.string,backdropClassName:d.a.string,contentClassName:d.a.string,external:d.a.node,fade:d.a.bool,cssModule:d.a.object,zIndex:d.a.oneOfType([d.a.number,d.a.string]),backdropTransition:N,modalTransition:N,innerRef:d.a.oneOfType([d.a.object,d.a.string,d.a.func])},L=Object.keys(y),j={isOpen:!1,autoFocus:!0,centered:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:v,onClosed:v,modalTransition:{timeout:b.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.e.Fade}},k=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(i.a)(Object(i.a)(a))),a.handleBackdropClick=a.handleBackdropClick.bind(Object(i.a)(Object(i.a)(a))),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(i.a)(Object(i.a)(a))),a.handleEscape=a.handleEscape.bind(Object(i.a)(Object(i.a)(a))),a.handleTab=a.handleTab.bind(Object(i.a)(Object(i.a)(a))),a.onOpened=a.onOpened.bind(Object(i.a)(Object(i.a)(a))),a.onClosed=a.onClosed.bind(Object(i.a)(Object(i.a)(a))),a.state={isOpen:t.isOpen},t.isOpen&&a.init(),a}Object(s.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.onEnter&&this.props.onEnter(),this.state.isOpen&&this.props.autoFocus&&this.setFocus(),this._isMounted=!0},a.componentWillReceiveProps=function(e){e.isOpen&&!this.props.isOpen&&this.setState({isOpen:e.isOpen})},a.componentWillUpdate=function(e,t){t.isOpen&&!this.state.isOpen&&this.init()},a.componentDidUpdate=function(e,t){this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this.state.isOpen&&this.destroy(),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||v)(e,t)},a.onClosed=function(e){this.props.onClosed(),(this.props.modalTransition.onExited||v)(e),this.destroy(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.i.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){for(var t=this.getFocusableChildren(),a=t.length,n=this.getFocusedChild(),o=0,s=0;s<a;s+=1)if(t[s]===n){o=s;break}e.shiftKey&&0===o?(e.preventDefault(),t[a-1].focus()):e.shiftKey||o!==a-1||(e.preventDefault(),t[0].focus())}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._originalBodyPadding=Object(b.j)(),Object(b.g)(),document.body.appendChild(this._element),0===t.openCount&&(document.body.className=p()(document.body.className,Object(b.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){if(this._element&&(document.body.removeChild(this._element),this._element=null),this._triggeringElement&&(this._triggeringElement.focus&&this._triggeringElement.focus(),this._triggeringElement=null),t.openCount<=1){var e=Object(b.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}t.openCount-=1,Object(b.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.n)(this.props,L);return r.a.createElement("div",Object(o.a)({},a,{className:Object(b.m)(p()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),r.a.createElement("div",{className:Object(b.m)(p()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){if(this.state.isOpen){var e=this.props,t=e.wrapClassName,a=e.modalClassName,s=e.backdropClassName,i=e.cssModule,l=e.isOpen,c=e.backdrop,d=e.role,u=e.labelledBy,m=e.external,h=e.innerRef,f={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":u,role:d,tabIndex:"-1"},g=this.props.fade,v=Object(n.a)({},E.a.defaultProps,this.props.modalTransition,{baseClass:g?this.props.modalTransition.baseClass:"",timeout:g?this.props.modalTransition.timeout:0}),N=Object(n.a)({},E.a.defaultProps,this.props.backdropTransition,{baseClass:g?this.props.backdropTransition.baseClass:"",timeout:g?this.props.backdropTransition.timeout:0}),y=c&&(g?r.a.createElement(E.a,Object(o.a)({},N,{in:l&&!!c,cssModule:i,className:Object(b.m)(p()("modal-backdrop",s),i)})):r.a.createElement("div",{className:Object(b.m)(p()("modal-backdrop","show",s),i)}));return r.a.createElement(O,{node:this._element},r.a.createElement("div",{className:Object(b.m)(t)},r.a.createElement(E.a,Object(o.a)({},f,v,{in:l,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(b.m)(p()("modal",a),i),innerRef:h}),m,this.renderModalDialog()),y))}return null},t}(r.a.Component);k.propTypes=y,k.defaultProps=j,k.openCount=0;t.a=k},174:function(e,t,a){"use strict";var n=a(4),o=a(5),s=a(1),i=a.n(s),l=a(0),r=a.n(l),c=a(3),d=a.n(c),u=a(2),p={tag:u.q,wrapTag:u.q,toggle:r.a.func,className:r.a.string,cssModule:r.a.object,children:r.a.node,closeAriaLabel:r.a.string,charCode:r.a.oneOfType([r.a.string,r.a.number]),close:r.a.object},m=function(e){var t,a=e.className,s=e.cssModule,l=e.children,r=e.toggle,c=e.tag,p=e.wrapTag,m=e.closeAriaLabel,h=e.charCode,b=e.close,f=Object(o.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(u.m)(d()(a,"modal-header"),s);if(!b&&r){var O="number"===typeof h?String.fromCharCode(h):h;t=i.a.createElement("button",{type:"button",onClick:r,className:Object(u.m)("close",s),"aria-label":m},i.a.createElement("span",{"aria-hidden":"true"},O))}return i.a.createElement(p,Object(n.a)({},f,{className:g}),i.a.createElement(c,{className:Object(u.m)("modal-title",s)},l),b||t)};m.propTypes=p,m.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=m},175:function(e,t,a){"use strict";var n=a(4),o=a(5),s=a(1),i=a.n(s),l=a(0),r=a.n(l),c=a(3),d=a.n(c),u=a(2),p={tag:u.q,className:r.a.string,cssModule:r.a.object},m=function(e){var t=e.className,a=e.cssModule,s=e.tag,l=Object(o.a)(e,["className","cssModule","tag"]),r=Object(u.m)(d()(t,"modal-footer"),a);return i.a.createElement(s,Object(n.a)({},l,{className:r}))};m.propTypes=p,m.defaultProps={tag:"div"},t.a=m},510:function(e){e.exports=[{Id:{"nav-link-accountList":"",twotabsearchtextbox:"",QA:"",qa:""},Name:{},ClassName:{},XPath:{"//*[id='A']//*[@id='B']//div[contains(text(),'Pravesh')]":""},LinkText:{},PartialLinkText:{},TagName:{},CssSelector:{}}]},527:function(e,t,a){"use strict";a.r(t);var n=a(140),o=a.n(n),s=a(141),i=a(27),l=a(11),r=a(12),c=a(14),d=a(13),u=a(15),p=a(128),m=a(131),h=a(1),b=a.n(h),f=a(120),g=a(121),O=a(104),E=a(109),v=a(105),N=a(98),y=a(34),L=a(35),j=a(36),k=a(57),C=a(167),S=a(174),T=a(162),x=a(175),w=a(142),P=a.n(w),_=a(510),V=m.APIURL;m.ReportURL;function F(e){var t=e.options;return Object.keys(t).map(function(e){return b.a.createElement("option",null,t[e])})}function I(e){try{if(e.includes("+")){var t=e.split("+");e=t.join("auplussignau")}if(e.includes(":")){t=e.split(":");e=t.join("aucolumnsignau")}if(e.includes("{")){t=e.split("{");e=t.join("aucurlyopenbracketau")}if(e.includes("}")){t=e.split("}");e=t.join("aucurlyclosebracketau")}if(e.includes("[")){t=e.split("[");e=t.join("aubigopenbracketau")}if(e.includes("]")){t=e.split("]");e=t.join("aubigclosebracketau")}if(e.includes('"')){t=e.split('"');e=t.join("audoublequotesau")}if(e.includes("=")){t=e.split("=");e=t.join("auequalsignau")}}catch(a){}return e}var M=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(d.a)(t).call(this,e))).toggle=function(e){return function(){if(!e)return a.setState({modal:!a.state.modal});a.setState(Object(i.a)({},"modal_".concat(e),!a.state["modal_".concat(e)]))}},a.state={initialLocatorName:"",initialLocatorValue:"",finalLocatorName:"",finalLocatorValue:"",checkILocatorName:!1,checkILocatorValue:!1,checkFLocatorName:!1,checkFLocatorValue:!1,modalValidationText:"",listOfLocator:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"SelectILocatorName",value:function(e){var t=this;this.setState({isLoaded:!1}),this.setState({listOfLocator:[]}),this.setState({initialLocatorName:e.target.value}),this.setState({initialLocatorValue:""}),this.setState({checkILocatorName:!1});JSON.stringify(JSON.stringify(_));var a=V+"or?ilocatorname="+e.target.value+"&id=0";(function(){var e=Object(s.a)(o.a.mark(function e(){var n,s;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(a);case 2:return n=e.sent,e.next=5,n.json();case 5:s=e.sent,t.setState({listOfLocator:s});case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()(),this.setState({isLoaded:!0})}},{key:"SelectILocatorValue",value:function(e){this.setState({isLoaded:!1}),this.setState({initialLocatorValue:e.target.value}),this.setState({checkILocatorValue:!1}),this.setState({isLoaded:!0})}},{key:"SelectFLocatorName",value:function(e){this.setState({isLoaded:!1}),this.setState({finalLocatorName:e.target.value}),this.setState({checkFLocatorName:!1}),this.setState({isLoaded:!0})}},{key:"SelectFLocatorValue",value:function(e){this.setState({isLoaded:!1}),this.setState({finalLocatorValue:e.target.value}),this.setState({checkFLocatorValue:!1}),this.setState({isLoaded:!0})}},{key:"SaveLocatorProperty",value:function(){var e=this,t="",a=this.state.initialLocatorName,n=this.state.initialLocatorValue,i=this.state.finalLocatorName,l=this.state.finalLocatorValue;if(""===a.trim()&&(this.setState({checkILocatorName:!0}),t+="Initial Locator Name* can not be left blank."),""===n.trim()&&(this.setState({checkILocatorValue:!0}),t+="Initial Locator value* can not be left blank."),""===i.trim()&&(this.setState({checkFLocatorName:!0}),t+="Updated Locator Name* can not be left blank."),""===l.trim()&&(this.setState({checkFLocatorValue:!0}),t+="Updated Locator value* can not be left blank."),""!==t.trim())return this.setState({modalValidationText:t});if(a.trim()===i.trim()&n.trim()===l.trim())return this.setState({modal:!0}),this.setState({modalValidationText:"No Changes to Save"});var r={},c={};r.oldName=I(a),r.oldValue=I(n),r.newName=I(i),r.newValue=I(l),c[0]=r;var d=JSON.stringify(c),u=V+"or",p={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:d};(function(){var t=Object(s.a)(o.a.mark(function t(){var a,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(u,p);case 2:return a=t.sent,t.next=5,a.json();case 5:"true"===(n=t.sent).success.toLowerCase()?(e.state.initialLocatorName="",e.state.initialLocatorValue="",e.state.finalLocatorName="",e.state.finalLocatorValue="",e.setState({modal:!0}),e.setState({modalValidationText:n.servermessage})):(e.setState({modal:!0}),e.setState({modalValidationText:n.servermessage}));case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){return this.state.isLoaded||b.a.createElement(P.a,{type:"Puff",color:"#00BFFF",height:50,width:1e4,timeout:12e5}),b.a.createElement(p.a,{title:"Locator Property",breadcrumbs:[{name:"Locator Property",active:!0}]},b.a.createElement(f.a,null,b.a.createElement(g.a,{lg:6,md:6,sm:6,xs:12},b.a.createElement(O.a,null,b.a.createElement(E.a,null,"Initial Locator Property"),b.a.createElement(v.a,null,b.a.createElement(N.a,null,b.a.createElement(y.a,{row:!0},b.a.createElement(L.a,{for:"exampleSelect",sm:4},"Locator*"),b.a.createElement(g.a,null,b.a.createElement(j.a,{invalid:this.state.checkILocatorName,value:this.state.initialLocatorName,type:"select",name:"IlocatorName",onChange:this.SelectILocatorName.bind(this)},b.a.createElement("option",{selected:"selected"},this.state.initialLocatorName),b.a.createElement("option",null,"Id"),b.a.createElement("option",null,"Name"),b.a.createElement("option",null,"ClassName"),b.a.createElement("option",null,"XPath"),b.a.createElement("option",null,"LinkText"),b.a.createElement("option",null,"PartialLinkText"),b.a.createElement("option",null,"TagName"),b.a.createElement("option",null,"CssSelector")))),b.a.createElement(y.a,{row:!0},b.a.createElement(L.a,{for:"exampleSelect",sm:4},"Locator Property*"),b.a.createElement(g.a,null,b.a.createElement(j.a,{invalid:this.state.checkILocatorValue,value:this.state.initialLocatorValue,type:"select",name:"ILocatorValue",onChange:this.SelectILocatorValue.bind(this)},b.a.createElement("option",{selected:"selected"},this.state.initialLocatorValue),b.a.createElement(F,{options:this.state.listOfLocator})))))))),b.a.createElement(g.a,{lg:6,md:6,sm:6,xs:12},b.a.createElement(O.a,null,b.a.createElement(E.a,null,"Updated Locator Property",b.a.createElement(k.a,{onClick:this.SaveLocatorProperty.bind(this),color:"primary",name:"SaveLocatorProperty"},"Save"),b.a.createElement(C.a,{isOpen:this.state.modal,toggle:this.toggle(),className:this.props.className},b.a.createElement(S.a,{toggle:this.toggle()}," Information"),b.a.createElement(T.a,null,this.state.modalValidationText),b.a.createElement(x.a,null,b.a.createElement(k.a,{color:"secondary",onClick:this.toggle()},"OK")))),b.a.createElement(v.a,null,b.a.createElement(N.a,null,b.a.createElement(y.a,{row:!0},b.a.createElement(L.a,{for:"exampleSelect",sm:4},"Locator*"),b.a.createElement(g.a,null,b.a.createElement(j.a,{invalid:this.state.checkFLocatorName,value:this.state.finalLocatorName,type:"select",name:"Flocator",onChange:this.SelectFLocatorName.bind(this)},b.a.createElement("option",{selected:"selected"},this.state.finalLocatorName),b.a.createElement("option",null,"Id"),b.a.createElement("option",null,"Name"),b.a.createElement("option",null,"ClassName"),b.a.createElement("option",null,"XPath"),b.a.createElement("option",null,"LinkText"),b.a.createElement("option",null,"PartialLinkText"),b.a.createElement("option",null,"TagName"),b.a.createElement("option",null,"CssSelector")))),b.a.createElement(y.a,{row:!0},b.a.createElement(L.a,{for:"exampleSelect",sm:4},"Locator Property*"),b.a.createElement(g.a,null,b.a.createElement(j.a,{invalid:this.state.checkFLocatorValue,type:"input",value:this.state.finalLocatorValue,name:"updatedvalue",placeholder:"Enter Updated Property",onChange:this.SelectFLocatorValue.bind(this)})))))))))}}]),t}(b.a.Component);t.default=M}}]);
//# sourceMappingURL=15.7eb7b6b5.chunk.js.map
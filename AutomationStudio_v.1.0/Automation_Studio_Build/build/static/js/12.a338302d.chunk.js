(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{126:function(e,t,a){"use strict";var n=a(27),s=a(8),o=a(3),r=a.n(o),i=a(1),l=a.n(i),c=(a(18),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var t,a=e.tag,o=e.className,i=e.type,u=Object(s.a)(e,["tag","className","type"]),d=r()(Object(n.a)({},i,!!i),o);return t=a||(!a&&c[i]?c[i]:"p"),l.a.createElement(t,Object.assign({},u,{className:d}))};u.defaultProps={type:"p"},t.a=u},127:function(e,t,a){"use strict";var n=a(8),s=a(1),o=a.n(s),r=(a(18),a(22)),i=a(132),l=a(133),c=a(126),u=r.a.create("page"),d=function(e){var t=e.title,a=e.breadcrumbs,s=e.tag,r=e.className,d=e.children,h=Object(n.a)(e,["title","breadcrumbs","tag","className","children"]),m=u.b("px-3",r);return o.a.createElement(s,Object.assign({className:m},h),o.a.createElement("div",{className:u.e("header")},t&&"string"===typeof t?o.a.createElement(c.a,{type:"h1",className:u.e("title")},t):t,a&&o.a.createElement(i.a,{className:u.e("breadcrumb")},o.a.createElement(l.a,null,"Home"),a.length&&a.map(function(e,t){var a=e.name,n=e.active;return o.a.createElement(l.a,{key:t,active:n},a)}))),d)};d.defaultProps={tag:"div",title:""},t.a=d},130:function(e,t,a){"use strict";var n=a(4),s=a(5),o=a(23),r=a(1),i=a.n(r),l=a(0),c=a.n(l),u=a(3),d=a.n(u),h=a(28),m=a(2),p=Object(o.a)({},h.Transition.propTypes,{children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node]),tag:m.q,baseClass:c.a.string,baseClassActive:c.a.string,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])}),b=Object(o.a)({},h.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:m.e.Fade,appear:!0,enter:!0,exit:!0,in:!0});function f(e){var t=e.tag,a=e.baseClass,o=e.baseClassActive,r=e.className,l=e.cssModule,c=e.children,u=e.innerRef,p=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=Object(m.o)(p,m.c),f=Object(m.n)(p,m.c);return i.a.createElement(h.Transition,b,function(e){var s="entered"===e,h=Object(m.m)(d()(r,a,s&&o),l);return i.a.createElement(t,Object(n.a)({className:h},f,{ref:u}),c)})}f.propTypes=p,f.defaultProps=b,t.a=f},159:function(e,t,a){"use strict";var n=a(4),s=a(5),o=a(1),r=a.n(o),i=a(0),l=a.n(i),c=a(3),u=a.n(c),d=a(2),h={tag:d.q,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(t,"modal-body"),a);return r.a.createElement(o,Object(n.a)({},i,{className:l}))};m.propTypes=h,m.defaultProps={tag:"div"},t.a=m},164:function(e,t,a){"use strict";var n=a(23),s=a(4),o=a(10),r=a(6),i=a(1),l=a.n(i),c=a(0),u=a.n(c),d=a(3),h=a.n(d),m=a(19),p=a.n(m),b=a(2),f={children:u.a.node.isRequired,node:u.a.any},g=function(e){function t(){return e.apply(this,arguments)||this}Object(o.a)(t,e);var a=t.prototype;return a.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},a.render=function(){return b.f?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),p.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},t}(l.a.Component);g.propTypes=f;var y=g,v=a(130);function E(){}var C=u.a.shape(v.a.propTypes),O={isOpen:u.a.bool,autoFocus:u.a.bool,centered:u.a.bool,size:u.a.string,toggle:u.a.func,keyboard:u.a.bool,role:u.a.string,labelledBy:u.a.string,backdrop:u.a.oneOfType([u.a.bool,u.a.oneOf(["static"])]),onEnter:u.a.func,onExit:u.a.func,onOpened:u.a.func,onClosed:u.a.func,children:u.a.node,className:u.a.string,wrapClassName:u.a.string,modalClassName:u.a.string,backdropClassName:u.a.string,contentClassName:u.a.string,external:u.a.node,fade:u.a.bool,cssModule:u.a.object,zIndex:u.a.oneOfType([u.a.number,u.a.string]),backdropTransition:C,modalTransition:C,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},N=Object.keys(O),k={isOpen:!1,autoFocus:!0,centered:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:E,onClosed:E,modalTransition:{timeout:b.e.Modal},backdropTransition:{mountOnEnter:!0,timeout:b.e.Fade}},D=function(e){function t(t){var a;return(a=e.call(this,t)||this)._element=null,a._originalBodyPadding=null,a.getFocusableChildren=a.getFocusableChildren.bind(Object(r.a)(Object(r.a)(a))),a.handleBackdropClick=a.handleBackdropClick.bind(Object(r.a)(Object(r.a)(a))),a.handleBackdropMouseDown=a.handleBackdropMouseDown.bind(Object(r.a)(Object(r.a)(a))),a.handleEscape=a.handleEscape.bind(Object(r.a)(Object(r.a)(a))),a.handleTab=a.handleTab.bind(Object(r.a)(Object(r.a)(a))),a.onOpened=a.onOpened.bind(Object(r.a)(Object(r.a)(a))),a.onClosed=a.onClosed.bind(Object(r.a)(Object(r.a)(a))),a.state={isOpen:t.isOpen},t.isOpen&&a.init(),a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.props.onEnter&&this.props.onEnter(),this.state.isOpen&&this.props.autoFocus&&this.setFocus(),this._isMounted=!0},a.componentWillReceiveProps=function(e){e.isOpen&&!this.props.isOpen&&this.setState({isOpen:e.isOpen})},a.componentWillUpdate=function(e,t){t.isOpen&&!this.state.isOpen&&this.init()},a.componentDidUpdate=function(e,t){this.props.autoFocus&&this.state.isOpen&&!t.isOpen&&this.setFocus(),this._element&&e.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},a.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this.state.isOpen&&this.destroy(),this._isMounted=!1},a.onOpened=function(e,t){this.props.onOpened(),(this.props.modalTransition.onEntered||E)(e,t)},a.onClosed=function(e){this.props.onClosed(),(this.props.modalTransition.onExited||E)(e),this.destroy(),this._isMounted&&this.setState({isOpen:!1})},a.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"===typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},a.getFocusableChildren=function(){return this._element.querySelectorAll(b.i.join(", "))},a.getFocusedChild=function(){var e,t=this.getFocusableChildren();try{e=document.activeElement}catch(a){e=t[0]}return e},a.handleBackdropClick=function(e){if(e.target===this._mouseDownElement){if(e.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var t=this._dialog?this._dialog.parentNode:null;t&&e.target===t&&this.props.toggle&&this.props.toggle(e)}},a.handleTab=function(e){if(9===e.which){for(var t=this.getFocusableChildren(),a=t.length,n=this.getFocusedChild(),s=0,o=0;o<a;o+=1)if(t[o]===n){s=o;break}e.shiftKey&&0===s?(e.preventDefault(),t[a-1].focus()):e.shiftKey||s!==a-1||(e.preventDefault(),t[0].focus())}},a.handleBackdropMouseDown=function(e){this._mouseDownElement=e.target},a.handleEscape=function(e){this.props.isOpen&&this.props.keyboard&&27===e.keyCode&&this.props.toggle&&(e.preventDefault(),e.stopPropagation(),this.props.toggle(e))},a.init=function(){try{this._triggeringElement=document.activeElement}catch(e){this._triggeringElement=null}this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,this._originalBodyPadding=Object(b.j)(),Object(b.g)(),document.body.appendChild(this._element),0===t.openCount&&(document.body.className=h()(document.body.className,Object(b.m)("modal-open",this.props.cssModule))),t.openCount+=1},a.destroy=function(){if(this._element&&(document.body.removeChild(this._element),this._element=null),this._triggeringElement&&(this._triggeringElement.focus&&this._triggeringElement.focus(),this._triggeringElement=null),t.openCount<=1){var e=Object(b.m)("modal-open",this.props.cssModule),a=new RegExp("(^| )"+e+"( |$)");document.body.className=document.body.className.replace(a," ").trim()}t.openCount-=1,Object(b.p)(this._originalBodyPadding)},a.renderModalDialog=function(){var e,t=this,a=Object(b.n)(this.props,N);return l.a.createElement("div",Object(s.a)({},a,{className:Object(b.m)(h()("modal-dialog",this.props.className,(e={},e["modal-"+this.props.size]=this.props.size,e["modal-dialog-centered"]=this.props.centered,e)),this.props.cssModule),role:"document",ref:function(e){t._dialog=e}}),l.a.createElement("div",{className:Object(b.m)(h()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},a.render=function(){if(this.state.isOpen){var e=this.props,t=e.wrapClassName,a=e.modalClassName,o=e.backdropClassName,r=e.cssModule,i=e.isOpen,c=e.backdrop,u=e.role,d=e.labelledBy,m=e.external,p=e.innerRef,f={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":d,role:u,tabIndex:"-1"},g=this.props.fade,E=Object(n.a)({},v.a.defaultProps,this.props.modalTransition,{baseClass:g?this.props.modalTransition.baseClass:"",timeout:g?this.props.modalTransition.timeout:0}),C=Object(n.a)({},v.a.defaultProps,this.props.backdropTransition,{baseClass:g?this.props.backdropTransition.baseClass:"",timeout:g?this.props.backdropTransition.timeout:0}),O=c&&(g?l.a.createElement(v.a,Object(s.a)({},C,{in:i&&!!c,cssModule:r,className:Object(b.m)(h()("modal-backdrop",o),r)})):l.a.createElement("div",{className:Object(b.m)(h()("modal-backdrop","show",o),r)}));return l.a.createElement(y,{node:this._element},l.a.createElement("div",{className:Object(b.m)(t)},l.a.createElement(v.a,Object(s.a)({},f,E,{in:i,onEntered:this.onOpened,onExited:this.onClosed,cssModule:r,className:Object(b.m)(h()("modal",a),r),innerRef:p}),m,this.renderModalDialog()),O))}return null},t}(l.a.Component);D.propTypes=O,D.defaultProps=k,D.openCount=0;t.a=D},168:function(e,t,a){"use strict";var n=a(4),s=a(5),o=a(1),r=a.n(o),i=a(0),l=a.n(i),c=a(3),u=a.n(c),d=a(2),h={tag:d.q,wrapTag:d.q,toggle:l.a.func,className:l.a.string,cssModule:l.a.object,children:l.a.node,closeAriaLabel:l.a.string,charCode:l.a.oneOfType([l.a.string,l.a.number]),close:l.a.object},m=function(e){var t,a=e.className,o=e.cssModule,i=e.children,l=e.toggle,c=e.tag,h=e.wrapTag,m=e.closeAriaLabel,p=e.charCode,b=e.close,f=Object(s.a)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),g=Object(d.m)(u()(a,"modal-header"),o);if(!b&&l){var y="number"===typeof p?String.fromCharCode(p):p;t=r.a.createElement("button",{type:"button",onClick:l,className:Object(d.m)("close",o),"aria-label":m},r.a.createElement("span",{"aria-hidden":"true"},y))}return r.a.createElement(h,Object(n.a)({},f,{className:g}),r.a.createElement(c,{className:Object(d.m)("modal-title",o)},i),b||t)};m.propTypes=h,m.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215},t.a=m},169:function(e,t,a){"use strict";var n=a(4),s=a(5),o=a(1),r=a.n(o),i=a(0),l=a.n(i),c=a(3),u=a.n(c),d=a(2),h={tag:d.q,className:l.a.string,cssModule:l.a.object},m=function(e){var t=e.className,a=e.cssModule,o=e.tag,i=Object(s.a)(e,["className","cssModule","tag"]),l=Object(d.m)(u()(t,"modal-footer"),a);return r.a.createElement(o,Object(n.a)({},i,{className:l}))};m.propTypes=h,m.defaultProps={tag:"div"},t.a=m},249:function(e,t,a){"use strict";var n=a(4),s=a(5),o=a(1),r=a.n(o),i=a(0),l=a.n(i),c=a(3),u=a.n(c),d=a(2),h={children:l.a.node,tag:d.q,className:l.a.string,cssModule:l.a.object,valid:l.a.bool,tooltip:l.a.bool},m={tag:"div",valid:void 0},p=function(e){var t=e.className,a=e.cssModule,o=e.valid,i=e.tooltip,l=e.tag,c=Object(s.a)(e,["className","cssModule","valid","tooltip","tag"]),h=i?"tooltip":"feedback",m=Object(d.m)(u()(t,o?"valid-"+h:"invalid-"+h),a);return r.a.createElement(l,Object(n.a)({},c,{className:m}))};p.propTypes=h,p.defaultProps=m,t.a=p},527:function(e,t,a){"use strict";a.r(t);var n=a(137),s=a.n(n),o=a(138),r=a(27),i=a(11),l=a(12),c=a(14),u=a(13),d=a(15),h=a(127),m=a(1),p=a.n(m),b=a(119),f=a(120),g=a(103),y=a(108),v=a(104),E=a(97),C=a(33),O=a(34),N=a(35),k=a(249),D=a(56),j=a(164),S=a(168),H=a(159),w=a(169),M=a(139),T=a.n(M),P=(a(140),window.ENV.APIURL);function x(e){return e.options.map(function(e){return p.a.createElement("option",{key:e.Environment},e.Environment)})}var B=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).toggle=function(e){return function(){if(!e)return a.setState({modal:!a.state.modal});a.setState(Object(r.a)({},"modal_".concat(e),!a.state["modal_".concat(e)]))}},a.state={DefaultEnvironment:"",defaultBrowser:"",checkDashboardHistoryCount:!1,feedbackDashboardHistoryCount:"",DashBoardHistoryCount:"",checkDashboardDays:!1,feedbackDashboardDays:"",DashboardDays:"",HubMachineName:"",checkHubMachineName:!1,feedbackHubMachineName:"",HubPortNumber:"",checkHubPort:!1,feedbackHubPort:"",ConfigurationFile:[],CommonTestData:[],loader:!0},function(){var e=Object(o.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(P+"dashboard");case 2:return t=e.sent,e.next=5,t.json();case 5:(n=e.sent).success&&(a.setState({ConfigurationFile:n.Configuration}),a.setState({CommonTestData:n.CommonTestData}),a.setState({DefaultEnvironment:a.state.ConfigurationFile.DefaultEnvironment}),a.setState({defaultBrowser:a.state.ConfigurationFile.DefaultBrowser}),a.setState({DashBoardHistoryCount:a.state.ConfigurationFile.DashboardHistoryCount}),a.setState({DashboardDays:a.state.ConfigurationFile.DashboardTotalDayCount}),a.setState({HubMachineName:a.state.ConfigurationFile.HUBMachineName}),a.setState({HubPortNumber:a.state.ConfigurationFile.HUBPort}),a.setState({loader:!1}));case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()(),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"UpdateEnv",value:function(e){this.setState({DefaultEnvironment:e.target.value})}},{key:"UpdateBrowser",value:function(e){this.setState({defaultBrowser:e.target.value})}},{key:"UpdateDashBoardHistoryCount",value:function(e){this.setState({checkDashboardHistoryCount:!1}),this.setState({DashBoardHistoryCount:e.target.value})}},{key:"UpdateHubMachineName",value:function(e){this.setState({checkHubMachineName:!1}),this.setState({HubMachineName:e.target.value})}},{key:"UpdateHubPort",value:function(e){this.setState({checkHubPort:!1}),this.setState({HubPortNumber:e.target.value})}},{key:"UpdateDashBoardDays",value:function(e){this.setState({checkDashboardDays:!1}),this.setState({DashboardDays:e.target.value})}},{key:"SaveConfig",value:function(){var e=this,t=this.state.DefaultEnvironment,a=this.state.defaultBrowser,n=this.state.DashBoardHistoryCount,r=this.state.DashboardDays,i="";if((isNaN(n)||""===n.trim())&&(this.setState({checkDashboardHistoryCount:!0}),this.setState({feedbackDashboardHistoryCount:"Dashboard History Count* takes only numeric value."}),i+="Dashboard History Count* takes only numeric value.."),(isNaN(r)||""===r.trim())&&(this.setState({checkDashboardDays:!0}),this.setState({feedbackDashboardDays:"Dashboard Total Day Count* takes only numeric value."}),i+="Dashboard Total Day Count* takes only numeric value.."),""===i.trim()){this.setState({loader:!0});var l={};l.DefaultEnvironment=t,l.DefaultBrowser=a,l.DashboardHistoryCount=n,l.DashboardTotalDayCount=r;var c=JSON.stringify(l),u=P+"configuration",d={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:c};(function(){var t=Object(o.a)(s.a.mark(function t(){var a,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(u,d);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,e.setState({loader:!1}),e.setState({modal:!0}),e.setState({modalValidationText:n.servermessage});case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()}}},{key:"SaveHUBconfig",value:function(){var e=this,t="",a=this.state.HubMachineName,n=this.state.HubPortNumber;if(""===a.trim()&&(this.setState({checkHubMachineName:!0}),this.setState({feedbackHubMachineName:"Hub Machine Name* can not be blank"}),t+="Hub Machine Name* can not be blank"),isNaN(n)&&(this.setState({checkHubPort:!0}),this.setState({feedbackHubPort:"Port Number* takes only numeric value."}),t+="Port Number* takes only numeric value.."),""===n.trim()&&(this.setState({checkHubPort:!0}),this.setState({feedbackHubPort:"Port Number* can not be blank"}),t+="Port Number* can not be blank"),""===t.trim()){this.setState({loader:!0});var r={};r.HUBMachineName=a,r.HUBPort=n;var i=JSON.stringify(r),l=P+"configuration?id=1",c={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:i};(function(){var t=Object(o.a)(s.a.mark(function t(){var a,n;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(l,c);case 2:return a=t.sent,t.next=5,a.json();case 5:n=t.sent,e.setState({loader:!1}),e.setState({modal:!0}),e.setState({modalValidationText:n.servermessage});case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()}}},{key:"render",value:function(){return p.a.createElement(h.a,{title:"Configuration Setup",breadcrumbs:[{name:"Configuration",active:!0}]},p.a.createElement(T.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:12e4,visible:this.state.loader}),p.a.createElement(b.a,null,p.a.createElement(f.a,{lg:6,md:6,sm:6,xs:12},p.a.createElement(g.a,null,p.a.createElement(y.a,null,"Execution Setup"),p.a.createElement(v.a,null,p.a.createElement(E.a,null,p.a.createElement(C.a,{row:!0},p.a.createElement(O.a,{for:"exampleSelect",sm:6},"Default Environment*"),p.a.createElement(f.a,null,p.a.createElement(N.a,{type:"select",name:"envlist",value:this.state.DefaultEnvironment,onChange:this.UpdateEnv.bind(this)},p.a.createElement(x,{options:this.state.CommonTestData})))),p.a.createElement(C.a,{row:!0},p.a.createElement(O.a,{for:"exampleSelect",sm:6},"Default Browser*"),p.a.createElement(f.a,null,p.a.createElement(N.a,{type:"select",name:"defaultbrowser",value:this.state.defaultBrowser,onChange:this.UpdateBrowser.bind(this)},p.a.createElement("option",null,"CHROME"),p.a.createElement("option",null,"FIREFOX")))),p.a.createElement(C.a,{row:!0},p.a.createElement(O.a,{for:"exampleSelect",sm:6},"Dashboard History Count*"),p.a.createElement(f.a,null,p.a.createElement(N.a,{invalid:this.state.checkDashboardHistoryCount,type:"input",name:"DashboardHistory",value:this.state.DashBoardHistoryCount,onChange:this.UpdateDashBoardHistoryCount.bind(this)}),p.a.createElement(k.a,null,this.state.feedbackDashboardHistoryCount))),p.a.createElement(C.a,{row:!0},p.a.createElement(O.a,{for:"exampleSelect",sm:6},"Dashboard Total Day Count*"),p.a.createElement(f.a,null,p.a.createElement(N.a,{invalid:this.state.checkDashboardDays,type:"input",name:"DashboardDay",value:this.state.DashboardDays,onChange:this.UpdateDashBoardDays.bind(this)}),p.a.createElement(k.a,null,this.state.feedbackDashboardDays))),p.a.createElement(f.a,null,p.a.createElement(D.a,{onClick:this.SaveConfig.bind(this),color:"primary",name:"SaveConfiguration"},"Save")),p.a.createElement(j.a,{isOpen:this.state.modal,toggle:this.toggle(),className:this.props.className},p.a.createElement(S.a,{toggle:this.toggle()}," Information"),p.a.createElement(H.a,null,this.state.modalValidationText),p.a.createElement(w.a,null,p.a.createElement(D.a,{color:"secondary",onClick:this.toggle()},"OK"))))))),p.a.createElement(f.a,{lg:6,md:6,sm:6,xs:12},p.a.createElement(g.a,null,p.a.createElement(y.a,null,"Selenium Grid Setup"),p.a.createElement(v.a,null,p.a.createElement(E.a,null,p.a.createElement(C.a,{row:!0},p.a.createElement(O.a,{for:"exampleSelect",sm:6},"Hub Machine IP*"),p.a.createElement(f.a,null,p.a.createElement(N.a,{invalid:this.state.checkHubMachineName,type:"input",name:"DashboardHistory",value:this.state.HubMachineName,onChange:this.UpdateHubMachineName.bind(this)}),p.a.createElement(k.a,null,this.state.feedbackHubMachineName))),p.a.createElement(C.a,{row:!0},p.a.createElement(O.a,{for:"exampleSelect",sm:6},"Port Number*"),p.a.createElement(f.a,null,p.a.createElement(N.a,{invalid:this.state.checkHubPort,type:"input",name:"DashboardHistory",value:this.state.HubPortNumber,onChange:this.UpdateHubPort.bind(this)}),p.a.createElement(k.a,null,this.state.feedbackHubPort))),p.a.createElement(f.a,null,p.a.createElement(D.a,{onClick:this.SaveHUBconfig.bind(this),color:"primary",name:"SaveConfiguration"},"Save"))))))))}}]),t}(p.a.Component);t.default=B}}]);
//# sourceMappingURL=12.a338302d.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,t,a){"use strict";var s=a(27),n=a(8),r=a(3),l=a.n(r),i=a(1),o=a.n(i),c=(a(18),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(e){var t,a=e.tag,r=e.className,i=e.type,u=Object(n.a)(e,["tag","className","type"]),m=l()(Object(s.a)({},i,!!i),r);return t=a||(!a&&c[i]?c[i]:"p"),o.a.createElement(t,Object.assign({},u,{className:m}))};u.defaultProps={type:"p"},t.a=u},127:function(e,t,a){"use strict";var s=a(8),n=a(1),r=a.n(n),l=(a(18),a(22)),i=a(132),o=a(133),c=a(126),u=l.a.create("page"),m=function(e){var t=e.title,a=e.breadcrumbs,n=e.tag,l=e.className,m=e.children,d=Object(s.a)(e,["title","breadcrumbs","tag","className","children"]),h=u.b("px-3",l);return r.a.createElement(n,Object.assign({className:h},d),r.a.createElement("div",{className:u.e("header")},t&&"string"===typeof t?r.a.createElement(c.a,{type:"h1",className:u.e("title")},t):t,a&&r.a.createElement(i.a,{className:u.e("breadcrumb")},r.a.createElement(o.a,null,"Home"),a.length&&a.map(function(e,t){var a=e.name,s=e.active;return r.a.createElement(o.a,{key:t,active:s},a)}))),m)};m.defaultProps={tag:"div",title:""},t.a=m},136:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return n});var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"primary";return"undefined"===typeof window?null:window.getComputedStyle(document.documentElement).getPropertyValue("--".concat(e))},n=function(){return["primary","secondary","success","info","warning","danger"]}},213:function(e,t){var a=NaN,s="[object Symbol]",n=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,i=/^0o[0-7]+$/i,o=parseInt,c=Object.prototype.toString;function u(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&c.call(e)==s}(e))return a;if(u(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=u(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var m=l.test(e);return m||i.test(e)?o(e.slice(2),m?2:8):r.test(e)?a:+e}},400:function(e,t,a){"use strict";var s=a(4),n=a(5),r=a(1),l=a.n(r),i=a(0),o=a.n(i),c=a(3),u=a.n(c),m=a(213),d=a.n(m),h=a(2),p={children:o.a.node,bar:o.a.bool,multi:o.a.bool,tag:h.q,value:o.a.oneOfType([o.a.string,o.a.number]),max:o.a.oneOfType([o.a.string,o.a.number]),animated:o.a.bool,striped:o.a.bool,color:o.a.string,className:o.a.string,barClassName:o.a.string,cssModule:o.a.object},E=function(e){var t=e.children,a=e.className,r=e.barClassName,i=e.cssModule,o=e.value,c=e.max,m=e.animated,p=e.striped,E=e.color,f=e.bar,S=e.multi,v=e.tag,b=Object(n.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),g=d()(o)/d()(c)*100,y=Object(h.m)(u()(a,"progress"),i),x=Object(h.m)(u()("progress-bar",f&&a||r,m?"progress-bar-animated":null,E?"bg-"+E:null,p||m?"progress-bar-striped":null),i),w=S?t:l.a.createElement("div",{className:x,style:{width:g+"%"},role:"progressbar","aria-valuenow":o,"aria-valuemin":"0","aria-valuemax":c,children:t});return f?w:l.a.createElement(v,Object(s.a)({},b,{className:y,children:w}))};E.propTypes=p,E.defaultProps={tag:"div",value:0,max:100},t.a=E},519:function(e,t,a){"use strict";a.r(t);var s=a(137),n=a.n(s),r=a(138),l=a(27),i=a(11),o=a(12),c=a(14),u=a(13),m=a(15),d=a(146),h=a(127),p=a(1),E=a.n(p),f=a(136),S=a(165),v=a(119),b=a(120),g=a(103),y=a(108),x=a(104),w=a(97),T=a(33),P=a(34),C=a(35),O=a(56),k=a(400),F=a(164),N=a(168),j=a(159),L=a(169),R=a(170),A=a.n(R),D=(a(172),a(173),a(174)),M=a.n(D),I=a(177),V=a.n(I),B=a(139),H=a.n(B),U=(a(140),window.ENV.APIURL),W=window.ENV.ReportURL;function $(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{labels:e,datasets:[{label:"PASS",backgroundColor:Object(f.a)("success"),borderColor:Object(f.a)("success"),borderWidth:1,data:Object(d.a)(t)},{label:"FAIL",backgroundColor:Object(f.a)("danger"),borderColor:Object(f.a)("danger"),borderWidth:1,data:Object(d.a)(a)}]}}function q(e){return e.options.map(function(e){return E.a.createElement("option",{key:e.Environment},e.Environment)})}var J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleOnSelect=function(e,t){t?a.setState(function(){return{selected:[].concat(Object(d.a)(a.state.selected),[e.id])}}):a.setState(function(){return{selected:a.state.selected.filter(function(t){return t!==e.id})}})},a.handleOnSelectAll=function(e,t){var s=t.map(function(e){return e.id});e?a.setState(function(){return{selected:s}}):a.setState(function(){return{selected:[]}})},a.toggle=function(e){return function(){if(!e)return a.setState({modal:!a.state.modal});a.setState(Object(l.a)({},"modal_".concat(e),!a.state["modal_".concat(e)]))}},a.state={tabIndex:0,ENV:"",Browser:"",screenshot:"FOR EACH STEP",runAt:"LOCAL",threadCount:"1",EmailTrigger:"NO",FromEmail:"",FromPassword:"",ReceiverEmail:"",checkFromEmai:!1,checkPassword:!1,checkRecemail:!1,testSuiteResponce:[],testSuiteData:[],modal:!1,modalValidationText:"",selected:[],showProgressBar:!1,showProgressText:!1,totalexecutedTestcasen:0,scriptResponce:"Not Started",wait:!1,summaryPass:0,summaryFail:0,allModuleName:[],allModule:[],allPassModuleWise:[],allFailModuleWise:[],allHTMLHyperlink:[],ExecutionSuitePath:"",showThreadCountLabel:!0,showThreadCountValue:!0,ConfigurationFile:[],CommonTestData:[],loader:!0,loaderLoadTestScripts:!1},function(){var e=Object(r.a)(n.a.mark(function e(){var t,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(U+"dashboard");case 2:return t=e.sent,e.next=5,t.json();case 5:(s=e.sent).success&&(a.setState({ConfigurationFile:s.Configuration}),a.setState({CommonTestData:s.CommonTestData}),a.setState({ENV:a.state.ConfigurationFile.DefaultEnvironment}),a.setState({Browser:a.state.ConfigurationFile.DefaultBrowser}),function(){var e=Object(r.a)(n.a.mark(function e(){var t,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(U+"execution");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,a.setState({testSuiteResponce:s}),function(){var e=Object(r.a)(n.a.mark(function e(){var t,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(U+"testcase?moduleName=");case 2:return t=e.sent,e.next=5,t.json();case 5:s=e.sent,a.setState({allModuleName:s}),a.setState({loader:!1});case 8:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()();case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()());case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"OpenTestSummaryFile",value:function(){var e=this.state.ExecutionSuitePath;if(""!==e.trim()){var t=this.state.ENV;e.includes(t)&&window.open(W+"TestSuiteSummaryfile/"+t+"/"+e)}}},{key:"LoadallTestscripts",value:function(){this.setState({loaderLoadTestScripts:!0});var e=function(e){var t=[];return Object.keys(e).map(function(a){return t.push(e[a])}),t}(this.state.allModuleName);this.setState({allModule:e}),this.setState({showProgressBar:!1}),this.setState({showProgressText:!1});var t={},a=[],s=this.state.testSuiteResponce;Object.keys(s).map(function(e){return a.push(e)});for(var n=0,r=[],l=1;l<=a.length;l++)for(var i=s[a[l-1]],o=1;o<=i.length;o++)n+=1,t.id=n,t.moduleName=a[l-1],t.testid=i[o-1].TestID,t.testcasename=i[o-1].TestName,t.status="Not Started",r.push({id:n,moduleName:a[l-1],testid:i[o-1].TestID,testcasename:i[o-1].TestName,status:"Not Started"});this.setState({testSuiteData:r}),this.setState({selected:[]}),this.setState({loaderLoadTestScripts:!1})}},{key:"ExecuteTestScripts",value:function(){var e=this;if(this.setState({showProgressBar:!1}),this.setState({showProgressText:!1}),this.setState({totalexecutedTestcasen:0}),0===this.state.testSuiteData.length)return this.setState({modal:!0}),this.setState({modalValidationText:"Please Load test scripts before execution."});var t=this.state.EmailTrigger,a=this.state.FromEmail,s=this.state.FromPassword,l=this.state.ReceiverEmail,i="";if("YES"===t&&(""===a.trim()&&(this.setState({checkFromEmai:!0}),i="From Email can not be blank."),""===s.trim()&&(this.setState({checkPassword:!0}),i+="Password can not be blank."),""===l.trim()&&(this.setState({checkRecemail:!0}),i+="Receiver Email can not be blank."),""!==i.trim()))return this.setState({modal:!0}),this.setState({modalValidationText:i});var o=this.state.selected.length;if(0===o)return this.setState({modal:!0}),this.setState({modalValidationText:"Please select test script for execution."});var c=this.state.selected;this.setState({showProgressBar:!0}),this.setState({showProgressText:!0});var u=0;this.setState({summaryPass:0}),this.setState({summaryFail:0});for(var m=0,d=0,h=this.state.testSuiteData,p=0;p<h.length;p++){var E=h[p].status;"PASS"===E&&(m+=1,this.setState({summaryPass:m})),"FAIL"===E&&(d+=1,this.setState({summaryFail:d}))}for(var f=0,S={},v={},b=this.state.threadCount,g=[],y=0;y<b;y++)g.push("free");!function(e,t){for(var a=0,s=0;s<e.length;s++)e[s].trim().toLowerCase()===t.trim().toLowerCase()&&(a+=1)}(g,"free");o=this.state.selected.length,c=this.state.selected;var x=[],w=this.state.ENV,T=this.state.Browser,P=this.state.screenshot,C=this.state.runAt,O=this.state.ConfigurationFile.HUBMachineName,k=this.state.ConfigurationFile.HUBPort;console.log(w);for(var F=function(t){j=U+"execution?delay=1000",function(){var a=Object(r.a)(n.a.mark(function a(){var s,l,i,h,p,E,b,g;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(j);case 2:return s=a.sent,a.next=5,s.json();case 5:l=a.sent,"PASS"===l.success&&(i=e.state.testSuiteData[c[t]-1].moduleName,h=e.state.testSuiteData[c[t]-1].testid,p=e.state.testSuiteData[c[t]-1].testcasename,e.state.testSuiteData[c[t]-1].status="In-Progress",E=e.state.testSuiteData,e.setState({testSuiteData:E}),b="",g=U+"execution?module="+i+"&testid="+h+"&testcasename="+p+"&env="+w+"&browser="+T+"&runat="+C+"&screenshot="+P+"&hubmachine="+O+"&portnumber="+k,console.log(g),function(){var a=Object(r.a)(n.a.mark(function a(){var s,l,y,T,P,C,O,k,F,N,j,L,R,A,D,M;return n.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch(g);case 2:return s=a.sent,a.next=5,s.json();case 5:l=a.sent,b=l.status,y=l.htmlPath,x["RowId"+c[t]]=y,(T=e.state.allHTMLHyperlink)["RowId"+c[t]]=y,e.setState({allHTMLHyperlink:T}),P=l.testRunDuration,"PASS"===b&&(m+=1,e.setState({summaryPass:m})),"FAIL"===b&&(d+=1,e.setState({summaryFail:d})),u+=1,e.setState({totalexecutedTestcasen:u}),e.state.testSuiteData[c[t]-1].status=b,E=e.state.testSuiteData,e.setState({testSuiteData:E}),C=e.state.allModule,O=[],k=[],F=0,N=0;case 25:if(!(N<C.length)){a.next=47;break}j=0,L=0,R=F;case 29:if(!(R<e.state.testSuiteData.length)){a.next=42;break}if(e.state.testSuiteData[R].moduleName!==C[N]){a.next=37;break}"PASS"===(A=e.state.testSuiteData[R].status)&&(j+=1),"FAIL"===A&&(L+=1),a.next=39;break;case 37:return F=R,a.abrupt("break",42);case 39:R++,a.next=29;break;case 42:O.push(j),k.push(L);case 44:N++,a.next=25;break;case 47:e.setState({allPassModuleWise:O}),e.setState({allFailModuleWise:k}),(S={}).Module=i,S.testid=h,S.testcasename=p,S.status=b,y=y.split("\\").join("{"),S.reportpath=y,S.duration=P,v[t+1]=S,(f+=1)===o&&(e.setState({showProgressBar:!1}),e.setState({showProgressText:!1}),e.setState({totalexecutedTestcasen:0}),D=JSON.stringify(v),M={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:D},function(){var t=Object(r.a)(n.a.mark(function t(){var a,s,r;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(U+"execution?env="+w,M);case 2:return a=t.sent,t.next=5,a.json();case 5:"pass"===(s=t.sent).success.toLowerCase()&&(r=s.testSuitePath,e.setState({ExecutionSuitePath:r}));case 7:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()());case 60:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}()());case 8:case"end":return a.stop()}},a)}));return function(){return a.apply(this,arguments)}}()()},N=0;N<o;N++){var j;F(N)}}},{key:"updateENV",value:function(e){e.target.value;this.setState({ENV:e.target.value})}},{key:"updateBrowser",value:function(e){e.target.value;this.setState({Browser:e.target.value})}},{key:"updateScreenshot",value:function(e){e.target.value;this.setState({screenshot:e.target.value})}},{key:"updateRunAt",value:function(e){var t=e.target.value;this.setState({runAt:e.target.value}),"SELENIUM GRID"===t.trim()?(this.setState({showThreadCountLabel:!1}),this.setState({showThreadCountValue:!1})):(this.setState({showThreadCountLabel:!0}),this.setState({showThreadCountValue:!0}))}},{key:"updateThreadCount",value:function(e){e.target.value;this.setState({threadCount:e.target.value})}},{key:"updateEmailOption",value:function(e){e.target.value;this.setState({EmailTrigger:e.target.value})}},{key:"UpdateFromEmail",value:function(e){this.setState({checkFromEmai:!1}),this.setState({FromEmail:e.target.value})}},{key:"UpdatePassword",value:function(e){this.setState({checkPassword:!1}),this.setState({FromPassword:e.target.value})}},{key:"UpdateRecieverEmail",value:function(e){this.setState({checkRecemail:!1}),this.setState({ReceiverEmail:e.target.value})}},{key:"render",value:function(){var e,t,a,s=this,n={mode:"checkbox",selected:this.state.selected,onSelect:this.handleOnSelect,onSelectAll:this.handleOnSelectAll},r=[{dataField:"id",text:"#",headerStyle:{width:"50px"}},{dataField:"moduleName",text:"Module Name",headerStyle:{width:"200px"},filter:Object(I.textFilter)()},{dataField:"testid",text:"Test ID",headerStyle:{width:"120px"},filter:Object(I.textFilter)()},{dataField:"testcasename",text:"Test Case Name",filter:Object(I.textFilter)()},{dataField:"status",text:"Status",events:{onClick:function(e,t,a,n,r){var l=n.status;if("PASS"===l||"FAIL"===l){var i="RowId"+(r+1),o=s.state.allHTMLHyperlink[i];window.open(o)}}},headerStyle:{width:"120px"},filter:Object(I.textFilter)(),style:function(e){return"FAIL"===e?{backgroundColor:"#dc3545"}:"PASS"===e?{backgroundColor:"#28a745"}:void 0}}];return E.a.createElement(h.a,{title:"Execution Lab",breadcrumbs:[{name:"Execution Lab",active:!0}]},E.a.createElement(H.a,{type:"ThreeDots",color:"#00BFFF",height:50,width:100,timeout:12e4,visible:this.state.loader}),E.a.createElement(v.a,null,E.a.createElement(b.a,{lg:4,md:6,sm:6,xs:12},E.a.createElement(g.a,null,E.a.createElement(y.a,null,"Execution Configuration"),E.a.createElement(x.a,null,E.a.createElement(w.a,null,E.a.createElement(T.a,{col:!0},E.a.createElement(P.a,{for:"exampleSelect",sm:6},"Environment*"),E.a.createElement(b.a,null,E.a.createElement(C.a,{type:"select",name:"envlist",value:this.state.ENV,onChange:this.updateENV.bind(this)},E.a.createElement(q,{options:this.state.CommonTestData})))),E.a.createElement(T.a,{col:!0},E.a.createElement(P.a,{for:"exampleSelect",sm:5},"Browser*"),E.a.createElement(b.a,null,E.a.createElement(C.a,{type:"select",name:"browser",value:this.state.Browser,onChange:this.updateBrowser.bind(this)},E.a.createElement("option",null,"CHROME"),E.a.createElement("option",null,"FIREFOX")))),E.a.createElement(T.a,{col:!0},E.a.createElement(P.a,{for:"exampleSelect",sm:6},"ScreenShot*"),E.a.createElement(b.a,null,E.a.createElement(C.a,{type:"select",name:"screenshot",value:this.state.screenshot,onChange:this.updateScreenshot.bind(this)},E.a.createElement("option",null,"FOR EACH STEP"),E.a.createElement("option",null,"FOR STEP FAILURE")))))))),E.a.createElement(b.a,{lg:3,md:6,sm:6,xs:12},E.a.createElement(g.a,null,E.a.createElement(y.a,null,"Execution Setup"),E.a.createElement(x.a,null,E.a.createElement(w.a,null,E.a.createElement(T.a,{col:!0},E.a.createElement(P.a,{for:"exampleSelect",sm:6},"Run at*"),E.a.createElement(b.a,null,E.a.createElement(C.a,{type:"select",name:"runat",value:this.state.runAt,onChange:this.updateRunAt.bind(this)},E.a.createElement("option",null,"LOCAL"),E.a.createElement("option",null,"SELENIUM GRID")))),E.a.createElement(T.a,{col:!0},E.a.createElement(P.a,{style:{visibility:this.state.showThreadCountLabel?"visible":"hidden"},for:"exampleSelect",sm:10},"Thread Count per Machine*"),E.a.createElement(b.a,null,E.a.createElement(C.a,{style:{visibility:this.state.showThreadCountValue?"visible":"hidden"},type:"select",name:"threadcount",value:this.state.threadCount,onChange:this.updateThreadCount.bind(this)},E.a.createElement("option",null,"1"),E.a.createElement("option",null,"2"),E.a.createElement("option",null,"3"),E.a.createElement("option",null,"4"),E.a.createElement("option",null,"5")))))))),E.a.createElement(b.a,{lg:5,md:6,sm:6,xs:12},E.a.createElement(g.a,null,E.a.createElement(y.a,null,"Email Configuration"),E.a.createElement(x.a,null,E.a.createElement(w.a,null,E.a.createElement(T.a,{col:!0},E.a.createElement(P.a,{for:"exampleSelect",sm:5},"Email Trigger*"),E.a.createElement(b.a,null,E.a.createElement(C.a,{type:"select",name:"email",value:this.state.EmailTrigger,onChange:this.updateEmailOption.bind(this)},E.a.createElement("option",null,"YES"),E.a.createElement("option",null,"NO")))),E.a.createElement(T.a,{col:!0},E.a.createElement(P.a,{for:"exampleSelect",sm:5},"From Email"),E.a.createElement(b.a,null,E.a.createElement(C.a,(e={invalid:this.state.checkFromEmai,type:"input",value:this.state.FromEmail,onChange:this.UpdateFromEmail.bind(this)},Object(l.a)(e,"type","input"),Object(l.a)(e,"name","fromemail"),Object(l.a)(e,"placeholder","enter your Email Address"),e))))," ",E.a.createElement(T.a,{col:!0},E.a.createElement(P.a,{for:"exampleSelect",sm:5},"Password"),E.a.createElement(b.a,null,E.a.createElement(C.a,{invalid:this.state.checkPassword,type:"input",value:this.state.FromPassword,onChange:this.UpdatePassword.bind(this),name:"fromPassword",placeholder:"enter your Password"})))," ",E.a.createElement(T.a,{col:!0},E.a.createElement(P.a,{for:"exampleSelect",sm:5},"Receiver Email"),E.a.createElement(b.a,null,E.a.createElement(C.a,{invalid:this.state.checkRecemail,type:"input",value:this.state.ReceiverEmail,onChange:this.UpdateRecieverEmail.bind(this),name:"receiveremail",placeholder:"enter your Receiver email"})))," "))))),E.a.createElement(v.a,null,E.a.createElement(b.a,{lg:12,md:6,sm:6,xs:12},E.a.createElement(g.a,null,E.a.createElement(y.a,null,"Executable Test Scripts",E.a.createElement(O.a,{onClick:this.LoadallTestscripts.bind(this),name:"loadTestSuite",color:"primary"},"Load Test Scripts"),E.a.createElement(O.a,{onClick:this.ExecuteTestScripts.bind(this),name:"executeTC",color:"primary"},"Execute Test Scripts"),E.a.createElement("div",{style:{visibility:this.state.showProgressText?"visible":"hidden"},className:"text-center"},this.state.totalexecutedTestcasen," of ",this.state.selected.length),E.a.createElement(H.a,{type:"ThreeDots",color:"#00BFFF",height:30,width:100,timeout:12e4,visible:this.state.loaderLoadTestScripts}),E.a.createElement(k.a,{style:{visibility:this.state.showProgressBar?"visible":"hidden"},value:this.state.totalexecutedTestcasen,max:this.state.selected.length}),E.a.createElement(F.a,{isOpen:this.state.modal,toggle:this.toggle(),className:this.props.className},E.a.createElement(N.a,{toggle:this.toggle()}," Information"),E.a.createElement(j.a,null,this.state.modalValidationText),E.a.createElement(L.a,null,E.a.createElement(O.a,{color:"secondary",onClick:this.toggle()},"OK")))),E.a.createElement(x.a,null,E.a.createElement(A.a,{keyField:"id",data:this.state.testSuiteData,columns:r,striped:!0,hover:!0,condensed:!0,pagination:M()({sizePerPage:10,hideSizePerPage:!0,hidePageListOnlyOnePage:!0}),selectRow:n,filter:V()()}))))),E.a.createElement(v.a,null,E.a.createElement(b.a,{lg:4,md:6,sm:6,xs:12},E.a.createElement(g.a,null,E.a.createElement(y.a,null,"Total Pass Fail Count"),E.a.createElement(x.a,{onClick:this.OpenTestSummaryFile.bind(this)},E.a.createElement(S.d,{data:(t=this.state.summaryPass,a=this.state.summaryFail,{datasets:[{data:[t,a],backgroundColor:[Object(f.a)("success"),Object(f.a)("danger")]}],labels:["PASS","FAIL"]})})))),E.a.createElement(b.a,{lg:8,md:6,sm:6,xs:12},E.a.createElement(g.a,null,E.a.createElement(y.a,null,"Pass Fail Count Module wise"),E.a.createElement(x.a,null,E.a.createElement(S.a,{data:$(this.state.allModule,this.state.allPassModuleWise,this.state.allFailModuleWise)}))))))}}]),t}(E.a.Component);t.default=J}}]);
//# sourceMappingURL=25.e537c426.chunk.js.map
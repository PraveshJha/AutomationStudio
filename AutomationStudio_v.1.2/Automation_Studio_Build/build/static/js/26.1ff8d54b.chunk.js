(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{127:function(t,e,a){"use strict";var s=a(27),n=a(8),i=a(3),o=a.n(i),r=a(1),l=a.n(r),c=(a(18),{h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6","display-1":"h1","display-2":"h1","display-3":"h1","display-4":"h1",p:"p",lead:"p",blockquote:"blockquote"}),u=function(t){var e,a=t.tag,i=t.className,r=t.type,u=Object(n.a)(t,["tag","className","type"]),m=o()(Object(s.a)({},r,!!r),i);return e=a||(!a&&c[r]?c[r]:"p"),l.a.createElement(e,Object.assign({},u,{className:m}))};u.defaultProps={type:"p"},e.a=u},128:function(t,e,a){"use strict";var s=a(8),n=a(1),i=a.n(n),o=(a(18),a(21)),r=a(134),l=a(135),c=a(127),u=o.a.create("page"),m=function(t){var e=t.title,a=t.breadcrumbs,n=t.tag,o=t.className,m=t.children,d=Object(s.a)(t,["title","breadcrumbs","tag","className","children"]),h=u.b("px-3",o);return i.a.createElement(n,Object.assign({className:h},d),i.a.createElement("div",{className:u.e("header")},e&&"string"===typeof e?i.a.createElement(c.a,{type:"h1",className:u.e("title")},e):e,a&&i.a.createElement(r.a,{className:u.e("breadcrumb")},i.a.createElement(l.a,null,"Home"),a.length&&a.map(function(t,e){var a=t.name,s=t.active;return i.a.createElement(l.a,{key:e,active:s},a)}))),m)};m.defaultProps={tag:"div",title:""},e.a=m},131:function(t){t.exports={APIURL:"http://192.168.1.42:49657/api/",ReportURL:"http://192.168.1.42:8887/"}},138:function(t){t.exports=[{ApplicationURL:"https://www.amazon.in/",Environment:"Production"}]},157:function(t,e,a){t.exports=a.p+"static/media/deleterow.9eb1ed86.JPG"},158:function(t,e,a){t.exports=a.p+"static/media/addnewrow.11af4dc5.JPG"},529:function(t,e,a){"use strict";a.r(e);var s=a(140),n=a.n(s),i=a(141),o=a(27),r=a(148),l=a(11),c=a(12),u=a(14),m=a(13),d=a(15),h=a(128),p=a(1),S=a.n(p),f=a(157),v=a.n(f),y=a(158),C=a.n(y),T=a(138),g=(a(225),a(131)),D=(a(226),a(142)),b=a.n(D),N=a(120),E=a(121),k=a(104),w=a(109),x=a(105),F=a(98),I=a(34),j=a(35),O=a(36),U=a(112),L=a(57),P=a(167),V=a(174),R=a(162),H=a(175),M=a(234),K=a(176),A=a.n(K),z=(a(178),a(179),a(180)),J=a.n(z),q=a(181),_=a.n(q),B=a(184),G=a.n(B),Y=g.APIURL;g.ReportURL;function X(t,e){}function Q(t){for(var e=Object.keys(t).length,a=[],s=1;s<=e;s++){var n=Object.keys(t)[s-1],i={id:s,commonKeyName:n,commonKeyValue:t[n]};a.push(i)}return a}function W(t){for(var e=Object.keys(t).length,a=[],s=1;s<=e;s++){var n=Object.keys(t)[s-1],i={value:n,label:n};a.push(i)}return a}function Z(t){var e=[];return Object.keys(t).map(function(t){return e.push(t)}),e}function $(t){return t.options.map(function(t){return S.a.createElement("option",null,t.Environment)})}function tt(t){var e=t.options;return Object.keys(e).map(function(t){return S.a.createElement("option",null,e[t])})}function et(t){try{if(t.includes("+")){var e=t.split("+");t=e.join("auplussignau")}if(t.includes(":")){e=t.split(":");t=e.join("aucolumnsignau")}if(t.includes("{")){e=t.split("{");t=e.join("aucurlyopenbracketau")}if(t.includes("}")){e=t.split("}");t=e.join("aucurlyclosebracketau")}if(t.includes("[")){e=t.split("[");t=e.join("aubigopenbracketau")}if(t.includes("]")){e=t.split("]");t=e.join("aubigclosebracketau")}if(t.includes('"')){e=t.split('"');t=e.join("audoublequotesau")}if(t.includes("=")){e=t.split("=");t=e.join("auequalsignau")}}catch(a){}return t}var at=function(t){function e(t){var a,s;return Object(l.a)(this,e),(s=Object(u.a)(this,Object(m.a)(e).call(this,t))).addNewCommonData=function(){var t=s.state.CommonDataItem.length;if(t>0&&""===s.state.CommonDataItem[t-1].commonKeyName.trim())return s.setState({modal:!0}),s.setState({modalValidationText:"Before adding new Common key, add previous Common key."});var e=s.state.CommonDataItem.length+1;s.setState({CommonDataItem:[].concat(Object(r.a)(s.state.CommonDataItem),[{id:"".concat(e),commonKeyName:"",commonKeyValue:""}])})},s.addNewColumnonTestData=function(){s.setState({headernameCheck:!1});var t=s.state.newHeaderName.toUpperCase();if(""===t.trim())return s.setState({headernameCheck:!0});for(var e=s.state.testDatacolumns.length,a=0;a<=e-1;a++)if(s.state.testDatacolumns[a].text===t.trim())return s.setState({headernameCheck:!0});var n=e,i="testdataColumn"+(e-1);s.setState({selectedLastHeaderColumn:n}),s.setState({testDatacolumns:[].concat(Object(r.a)(s.state.testDatacolumns),[{dataField:i,text:t,headerEvents:{onClick:function(t){s.setState({selectedHeaderColumn:t.target.innerHTML}),s.setState({selectedHeaderColumnIndex:e})}}}])});for(var o=s.state.testDataItemrowList.length,l=0;l<o;l++)s.state.testDataItemrowList[l][i]="";s.setState({newHeaderName:""})},s.addNewTestSteps=function(){var t=s.state.TestScriptTestData;if(t.length>0)for(var e=0;e<t.length;e++){if(""===t[e].action.trim())return s.setState({modal:!0}),s.setState({modalValidationText:"Please add the test step information for record number "+(e+1)+", before adding new record."})}var a=s.state.selectedTestStepNumber;a>t.length&&(a=0),0===a&&(a=t.length);for(var n=[],i=0;i<a;i++)n[i]=s.state.TestScriptTestData[i];var o={};try{a=parseInt(a.trim())}catch(c){}var r=a+1;o.teststepid=r,o.stepdescription="Add Test Step "+r+" description",o.action="",o.locator="",o.locatorproperty="",o.value="",o.exitIfFail="Y",n.push(o);for(var l=a;l<t.length;l++)t[l].teststepid=l+2,n.push(t[l]);s.setState({TestScriptTestData:n})},s.addNewTestDataRow=function(){s.setState({headernameCheck:!1});var t=s.state.testDatacolumns.length;if(t>1){for(var e={testdatacolid:s.state.testDataItemrowList.length+1},a=1;a<t;a++){e["testdataColumn"+(a-1)]=""}s.setState({testDataItemrowList:[].concat(Object(r.a)(s.state.testDataItemrowList),[e])})}},s.deleteTestDataRow=function(){var t=s.state.testDataItemrowList.length,e=s.state.testDataItemrowList.filter(function(e){return e.testdatacolid!==t});s.setState({testDataItemrowList:e})},s.deleteCommonData=function(){var t=s.state.CommonDataItem.length,e=s.state.CommonDataItem.filter(function(e){return e.id!==t.toString()});s.setState({CommonDataItem:e})},s.deleteTestSteps=function(){if(0!==s.state.TestScriptTestData.length){var t=s.state.selectedTestStepNumber;if(0!==t){for(var e=s.state.TestScriptTestData.filter(function(e){return e.teststepid!==t}),a=t;a<=e.length;a++)e[a-1].teststepid=a;s.setState({TestScriptTestData:e}),s.setState({selectedTestStepNumber:0}),s.setState({selectedTestStepNumber:t})}}},s.deleteTestDataColumn=function(){var t=s.state.selectedHeaderColumn;if(""!==t.trim()&&"#"!==t.trim()){for(var e=s.state.TestScriptTestData,a="",n=0;n<e.length;n++){e[n].value.trim()==="t."+t&&(a=a+","+(n+1))}if(e.length>0&&""!==a.trim())return s.setState({modal:!0}),s.setState({modalValidationText:"Before Deleting column "+t+" please remove test column reference from test step number "+a});for(var i=-1,o=0;o<s.state.testDatacolumns.length;o++)if(s.state.testDatacolumns[o].text===t){i=o;break}if(i>0){for(var r=s.state.testDatacolumns.filter(function(e){return e.text!==t}),l=i;l<r.length;l++){var c="testdataColumn"+(p=l-1);r[l].dataField=c}s.setState({testDatacolumns:r});for(var u=s.state.testDataItemrowList,m=s.state.testDataItemrowList.length,d=0;d<m;d++)for(var h=i;h<r.length;h++){c="testdataColumn"+(p=h-1);var p,S="testdataColumn"+(p+1);u[d][c]=s.state.testDataItemrowList[d][S]}s.setState({testDataItemrowList:u}),s.setState({selectedHeaderColumn:""})}}},s.handleDataChange=function(t){var e=t.dataSize;s.setState({rowCount:e})},s.handleOnSelect=function(t,e){if(e){var a=t.id,n=s.state.CommonDataItem[a-1].commonKeyName;s.setState({selectedCommonKey:n})}},s.handleOnTestStepSelect=function(t,e){if(e){var a=t.teststepid;s.setState({selectedTestStepNumber:a})}},s.handleOnUtilitySelect=function(t,e){if(e){t.utilityfunction;var a=t.id;s.setState({selectedUtilityRow:a})}},s.toggle=function(t){return function(){if(!t)return s.setState({modal:!s.state.modal});s.setState(Object(o.a)({},"modal_".concat(t),!s.state["modal_".concat(t)]))}},s.toggleUtilityFunction=function(t){return function(){if(!t)return s.setState({utilityFunction:!s.state.utilityFunction});s.setState(Object(o.a)({},"utilityFunction_".concat(t),!s.state["utilityFunction_".concat(t)]))}},s.state=(a={allModuleName:[],allTestID:[],ModuleName:"",TestScriptModuleName:"",NewTestID:"",Env:"",CommonDataallItem:[],CommonDataItemList:[],CommonDataTotalSize:0,isLoaded:!1,CommonDataItem:[],GetCommonItem:[],TestScriptTestData:[],allActionNameList:[],selectedCommonKey:"",selectedTestStepNumber:0,modal:!1,modalValidationText:"",testDatacolumns:[{dataField:"testdatacolid",text:"#",headerStyle:{width:"40px"}}],testDataItemrowList:[],selectedLastHeaderColumn:"",selectedHeaderColumn:"",headernameCheck:!1,newHeaderName:"",testscriptcheckENV:!1,testscriptcheckModule:!1,testscriptchecktestID:!1,testscriptchecktestName:!1,testCaseName:"",customFunctionName:"",customStepFrom:"",customStepTo:"",customFunctionNameCheck:!1,customFunctionstepFromCheck:!1,customFunctionstepToCheck:!1,checkNewColName:!1,NewColName:"",UtilityFunctionExpression:"",selectedUtilityRow:0,UtilityFunctionList:[],UtilityItem:[],UtilityFunction:[],selectedUtilityFunction:"",OriginalUtilityContent:[],showalert:!1,alerttext:"",showModal:!1},Object(o.a)(a,"selectedUtilityRow",0),Object(o.a)(a,"alertColor",""),a),fetch(Y+"testcase?moduleName=").then(function(t){return t.json()}).then(function(t){s.setState({allModuleName:t})}),fetch(Y+"testscript?actionname").then(function(t){return t.json()}).then(function(t){s.setState({allActionNameList:t})}),fetch(Y+"customfunction").then(function(t){return t.json()}).then(function(t){s.setState({customFunctionList:t})}),fetch(Y+"customfunction?utilityid=1").then(function(t){return t.json()}).then(function(t){s.setState({UtilityItem:t});for(var e=Object.keys(s.state.UtilityItem).length,a=[],n=1;n<=e;n++){var i={};i.id=n,i.utilityfunction=s.state.UtilityItem[n].toString(),a.push(i)}s.setState({UtilityFunctionList:a}),s.setState({OriginalUtilityContent:a})}),s}return Object(d.a)(e,t),Object(c.a)(e,[{key:"selectionCommonData",value:function(){if(""===this.state.selectedTestStepNumber)return this.setState({modal:!0}),this.setState({modalValidationText:"Please select test step number."});var t=this.state.selectedCommonKey;if(""===t.trim())return this.setState({modal:!0}),this.setState({modalValidationText:"Please select valid Key Name* from Common test data."});this.state.TestScriptTestData[this.state.selectedTestStepNumber-1].value="c."+t,this.setState({TestScriptTestData:Object(r.a)(this.state.TestScriptTestData)})}},{key:"selectionTestData",value:function(){if(""===this.state.selectedTestStepNumber)return this.setState({modal:!0}),this.setState({modalValidationText:"Please select test step number."});if(1===this.state.testDatacolumns.length)return this.setState({modal:!0}),this.setState({modalValidationText:"Please add column header in test data."});var t=this.state.selectedHeaderColumn;if(""===t.trim())return this.setState({modal:!0}),this.setState({modalValidationText:"Please click on test data column header."});this.state.TestScriptTestData[this.state.selectedTestStepNumber-1].value="t."+t,this.setState({TestScriptTestData:Object(r.a)(this.state.TestScriptTestData)})}},{key:"selectUtilityFunctionfromList",value:function(){var t=this.state.selectedUtilityRow;if(0===t)return this.setState({alertColor:"danger"}),void this.setState({UtilityFunctionExpression:"please select utility function."});var e=this.state.OriginalUtilityContent[t-1].utilityfunction,a=this.state.UtilityFunctionList[t-1].utilityfunction;return""===(a=this.state.UtilityFunctionList[t-1].utilityfunction).trim()?(this.setState({alertColor:"danger"}),void this.setState({UtilityFunctionExpression:"Utility function can not be blank."})):a.includes("(")&&a.includes(")")?e.includes("()")||e.trim()!==a.trim()?(this.setState({utilityFunction:!1}),this.setState({UtilityFunctionExpression:""}),this.setState({alertColor:""}),this.state.TestScriptTestData[this.state.selectedTestStepNumber-1].value="utility."+a.trim(),void this.setState({TestScriptTestData:Object(r.a)(this.state.TestScriptTestData)})):(this.setState({alertColor:"danger"}),void this.setState({UtilityFunctionExpression:"Please pass the argument in Utility function."})):(this.setState({alertColor:"danger"}),void this.setState({UtilityFunctionExpression:"syntax is incorrect for utility function"}))}},{key:"EvaluateCustomFunction",value:function(){var t=this,e=this.state.selectedUtilityRow;if(0===e)return this.setState({alertColor:"danger"}),void this.setState({UtilityFunctionExpression:"please select utility function."});var a=this.state.OriginalUtilityContent[e-1].utilityfunction,s=this.state.UtilityFunctionList[e-1].utilityfunction;if(""===s.trim())return this.setState({alertColor:"danger"}),void this.setState({UtilityFunctionExpression:"Utility function can not be blank."});if(!s.includes("(")||!s.includes(")"))return this.setState({alertColor:"danger"}),void this.setState({UtilityFunctionExpression:"syntax is incorrect for utility function"});if(!a.includes("()")&&a.trim()===s.trim())return this.setState({alertColor:"danger"}),void this.setState({UtilityFunctionExpression:"Please pass the argument in Utility function."});var o=Y+"evaluator?funcname=utility."+s;(function(){var e=Object(i.a)(n.a.mark(function e(){var a,s,i,r;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(o);case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,i="Fail";try{i=s.status.toLowerCase()}catch(n){}r=s.message,"pass"===i?(t.setState({alertColor:"success"}),t.setState({UtilityFunctionExpression:r})):(t.setState({alertColor:"danger"}),t.setState({UtilityFunctionExpression:r}));case 10:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()}},{key:"UpdateHeaderNameonTestData",value:function(){this.setState({headernameCheck:!1});var t=this.state.newHeaderName.toUpperCase();return""===t.trim()?this.setState({headernameCheck:!0}):1===this.state.testDatacolumns.length?(this.setState({modal:!0}),this.setState({modalValidationText:"Please add header column first"})):(this.state.testDatacolumns[this.state.selectedLastHeaderColumn-1].text=t,this.setState({testDatacolumns:Object(r.a)(this.state.testDatacolumns)}),void this.setState({newHeaderName:""}))}},{key:"selectionUtilityData",value:function(){if(0===this.state.selectedTestStepNumber)return this.setState({modal:!0}),this.setState({modalValidationText:"Please select test step number."});this.setState({selectedUtilityFunction:""});for(var t=this.state.UtilityItem,e=Object.keys(t).length,a=[],s=1;s<=e;s++){var n={};n.id=s,n.utilityfunction=t[s].toString(),a.push(n)}this.setState({UtilityFunctionList:a}),this.setState({utilityFunction:!0})}},{key:"TypeHeaderName",value:function(t){this.setState({isLoaded:!1}),this.setState({newHeaderName:t.target.value}),this.setState({headernameCheck:!1})}},{key:"TypeNewColName",value:function(t){this.setState({isLoaded:!1}),this.setState({checkNewColName:!1}),this.setState({NewColName:t.target.value})}},{key:"updateModule",value:function(t){var e=this,a=t.target.value;if(a!==this.state.ModuleName){this.setState({NewTestID:""});this.setState({testDatacolumns:[{dataField:"testdatacolid",text:"#",headerStyle:{width:"40px"}}]}),this.setState({testDataItemrowList:[]}),this.setState({testscriptcheckModule:!1}),this.setState({ModuleName:a}),fetch(Y+"testcase?moduleName="+a).then(function(t){return t.json()}).then(function(t){e.setState({allTestID:t})})}}},{key:"UpdatetestcaseName",value:function(t){this.setState({isLoaded:!1}),this.setState({testscriptchecktestName:!1}),this.setState({testCaseName:t.target.value})}},{key:"SetCustomFunctionFromStep",value:function(t){this.setState({customFunctionstepFromCheck:!1}),this.setState({customStepFrom:t.target.value})}},{key:"SetCustomToStep",value:function(t){this.setState({customFunctionstepToCheck:!1}),this.setState({customStepTo:t.target.value})}},{key:"verifyCustomFunction",value:function(t){this.setState({customFunctionNameCheck:!1}),this.setState({customFunctionName:t.target.value})}},{key:"RenameColumn",value:function(t){var e=this.state.selectedHeaderColumn,a=this.state.NewColName;if(""!==e.trim())if(""!==a.trim()){for(var s=this.state.testDatacolumns,n=0,i=1;i<s.length;i++){var o=s[i].text;if(o.trim().toUpperCase()===a.trim().toUpperCase())return void this.setState({checkNewColName:!0});if(o.trim().toUpperCase()===e.trim().toUpperCase())n=i}this.state.testDatacolumns[n].text=a.trim().toUpperCase(),this.setState({testDatacolumns:Object(r.a)(this.state.testDatacolumns)}),this.setState({selectedHeaderColumn:""}),this.setState({NewColName:""});for(var l=this.state.TestScriptTestData,c=0;c<l.length;c++){l[c].value.toString()==="t."+e.trim().toUpperCase()&&(this.state.TestScriptTestData[c].value="t."+a.trim().toUpperCase())}this.setState({TestScriptTestData:Object(r.a)(this.state.TestScriptTestData)})}else this.setState({checkNewColName:!0})}},{key:"saveCustomFunction",value:function(t){var e=this,a=this.state.customFunctionName,s=this.state.customStepFrom,o=this.state.customStepTo,r="";if(""===a.trim()&&(r="custom function name can not be blank.",this.setState({customFunctionNameCheck:!0})),""===s.trim()&&(r+="Step From can not be blank.",this.setState({customFunctionstepFromCheck:!0})),""===o.trim()&&(r+="Step To can not be blank",this.setState({customFunctionstepToCheck:!0})),""!==r.trim())return this.setState({modal:!0}),this.setState({modalValidationText:r});if(isNaN(s)&&(r+="Please provide integer value in Step From* field.",this.setState({customFunctionstepFromCheck:!0})),isNaN(o)&&(r+="Please provide integer value in Step To* field.",this.setState({customFunctionstepToCheck:!0})),""!==r.trim())return this.setState({modal:!0}),this.setState({modalValidationText:r});if(function(t,e){var a=[];Object.keys(t).map(function(e){return a.push(t[e])});for(var s=0;s<a.length;s++)if(a[s].trim().toLowerCase()===e.trim().toLowerCase())return!0;return!1}(this.state.allActionNameList,a))return this.setState({customFunctionNameCheck:!0}),this.setState({modal:!0}),this.setState({modalValidationText:"Function "+a+" is already exist."});if(s>o)return this.setState({customFunctionstepToCheck:!0}),this.setState({modal:!0}),this.setState({modalValidationText:"Step From* should be less than or equal to Step To*"});r="";var l=this.state.TestScriptTestData.length;if(l<s&&(r="Test Script does not have "+s+" steps.",this.setState({customFunctionstepFromCheck:!0})),l<o&&(r="Test Script does not have "+s+" steps.",this.setState({customFunctionstepToCheck:!0})),""!==r.trim())return this.setState({modal:!0}),this.setState({modalValidationText:r});var c={},u={},m={},d={},h=0;if(!(l>0))return this.setState({modal:!0}),this.setState({modalValidationText:"Test Steps is missing in test scripts."});for(var p=0,S=s-1;S<o;S++){p+=1,c={},m={};var f=et(this.state.TestScriptTestData[S].locator),v=et(this.state.TestScriptTestData[S].locatorproperty);c.teststepid=et(p),c.stepdescription=et(this.state.TestScriptTestData[S].stepdescription),c.action=et(this.state.TestScriptTestData[S].action),c.locator=f,c.locatorproperty=v,c.value=et(this.state.TestScriptTestData[S].value),c.exitIfFail=et(this.state.TestScriptTestData[S].exitIfFail),u[p]=c,""!==f.trim()&&""!==v.trim()&&(h+=1,m.locator=f,m.locatorproperty=v,d[h]=m)}var y=JSON.stringify(d),C=Y+"customfunction",T={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:y};(function(){var t=Object(i.a)(n.a.mark(function t(){var a,s;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(C,T);case 2:return a=t.sent,t.next=5,a.json();case 5:if((s=t.sent).success){t.next=9;break}return e.setState({modal:!0}),t.abrupt("return",e.setState({modalValidationText:s.servermessage}));case 9:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()();T={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:JSON.stringify(u)};fetch(Y+"testscript?customfunctionName="+a+"&test=",T).then(function(t){return t.json()}).then(function(t){return e.setState({postResponceresult:t}),"false"===t.success.toString().toLowerCase()?(e.setState({modal:!0}),e.setState({modalValidationText:"ISSUE: "+e.state.postResponceresult.servermessage})):(e.setState({customFunctionName:""}),e.setState({customStepFrom:""}),e.setState({customStepTo:""}),e.setState({modal:!0}),e.setState({modalValidationText:e.state.postResponceresult.servermessage}))})}},{key:"updateENV",value:function(t){var e=this,a=t.target.value,s=this.state.Env;if(a!==s){this.setState({testscriptcheckENV:""}),this.setState({CommonDataTotalSize:0}),this.setState({CommonDataItem:[]}),this.setState({Env:""}),this.setState({isLoaded:!1}),this.setState({Env:t.target.value}),fetch(Y+"testscript?commonitem="+a).then(function(t){return t.json()}).then(function(t){e.setState({CommonDataItem:Q(t)}),e.setState({CommonDataTotalSize:e.state.CommonDataItem.length});var s=e.state.ModuleName,o=e.state.NewTestID;if(""!==s.trim()&&""!==o.trim()){e.setState({testDatacolumns:[{dataField:"testdatacolid",text:"#",headerStyle:{width:"40px"}}]}),e.setState({testDataItemrowList:[]});var l=Y+"updatetestscript?env="+a+"&module="+s+"&testid="+o;(function(){var t=Object(i.a)(n.a.mark(function t(){var a,s,i,o,c,u,m,d,h,p,S,f,v;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(l);case 2:return a=t.sent,t.next=5,a.json();case 5:if(s=t.sent,i=[],s.length>0){if(o=s[0],(c=Object.keys(o).length)>0&&(u=o[1],(i=Z(u)).length>0))for(m=0;m<i.length;m++)m,d="testdataColumn"+m,e.setState({testDatacolumns:[].concat(Object(r.a)(e.state.testDatacolumns),[{dataField:d,text:i[m],headerEvents:{onClick:function(t){e.setState({selectedHeaderColumn:t.target.innerHTML})}}}])});for(h=[],p={},S=1;S<=c;S++){for((p={}).testdatacolid=S,f=0;f<i.length;f++)v=i[f],p["testdataColumn"+f]=o[S][v];h.push(p)}e.setState({testDataItemrowList:h})}case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()}})}}},{key:"updateTestID",value:function(t){var e=this,a=t.target.value;if(a!==this.state.NewTestID){this.setState({testscriptchecktestID:!1}),this.setState({isLoaded:!1}),this.setState({NewTestID:""}),this.setState({NewTestID:a});var s=this.state.Env,o=this.state.ModuleName,l=t.target.value,c=Y+"updatetestscript?module="+o+"&testid="+l;(function(){var t=Object(i.a)(n.a.mark(function t(){var a,u,m,d,h,p,S,f,v;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(c);case 2:return a=t.sent,t.next=5,a.json();case 5:for(u=t.sent,m=u[0],d=Object.keys(m).length,h={},p=[],S=1;S<=d;S++)(h={}).teststepid=m[S].teststepid,h.stepdescription=m[S].stepdescription,h.action=m[S].action,h.locator=m[S].locator,h.locatorproperty=m[S].locatorproperty,h.value=m[S].value,h.exitIfFail=m[S].exitIfFail,p.push(h);e.setState({TestScriptTestData:p}),""!==s.trim()&&(f=[{dataField:"testdatacolid",text:"#",headerStyle:{width:"40px"}}],e.setState({testDatacolumns:f}),e.setState({testDataItemrowList:[]}),v=Y+"updatetestscript?env="+s+"&module="+o+"&testid="+l,function(){var t=Object(i.a)(n.a.mark(function t(){var a,s,i,o,l,c,u,m,d,h,p,S,f;return n.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(v);case 2:return a=t.sent,t.next=5,a.json();case 5:if(s=t.sent,i=[],null!==s){t.next=9;break}return t.abrupt("return");case 9:if(s.length>0){if(o=s[0],(l=Object.keys(o).length)>0&&(c=o[1],(i=Z(c)).length>0))for(u=0;u<i.length;u++)u,m="testdataColumn"+u,e.setState({testDatacolumns:[].concat(Object(r.a)(e.state.testDatacolumns),[{dataField:m,text:i[u],headerEvents:{onClick:function(t){e.setState({selectedHeaderColumn:t.target.innerHTML})}}}])});for(d=[],h={},p=1;p<=l;p++){for((h={}).testdatacolid=p,S=0;S<i.length;S++)f=i[S],h["testdataColumn"+S]=o[p][f];d.push(h)}e.setState({testDataItemrowList:d})}case 10:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()());case 13:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()}}},{key:"SaveTestScripts",value:function(){var t=this,e="",a=this.state.Env,s=this.state.ModuleName,o=this.state.NewTestID,r=this.state.testCaseName;if(""===a.trim()&&(this.setState({testscriptcheckENV:!0}),e+="Environment** can not be left blank."),""===s.trim()&&(this.setState({testscriptcheckModule:!0}),e+="Module* can not be left blank."),""===o.trim()&&(this.setState({testscriptchecktestID:!0}),e+="TestID* can not be left blank."),""!==e.trim())return this.setState({modal:!0}),this.setState({modalValidationText:e});if(""===this.state.TestScriptTestData[0].action.trim())return this.setState({modal:!0}),this.setState({modalValidationText:"Action name can not be blank on test step."});for(var l=this.state.CommonDataTotalSize,c=this.state.CommonDataItem.length,u={},m=l;m<c;m++){var d=this.state.CommonDataItem[m].commonKeyName;if(""!==d.trim()){var h=this.state.CommonDataItem[m].commonKeyValue;u[d]=h}}var p=JSON.stringify(u);if(Object.keys(u).length>0){var S={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:p};fetch(Y+"testscript?environment="+a,S).then(function(t){return t.json()}).then(function(e){if(t.setState({postResponceresult:e}),"false"===e.success.toString().toLowerCase())return t.setState({modal:!0}),t.setState({modalValidationText:"ISSUE: "+t.state.postResponceresult.servermessage})})}var f=this.state.testDataItemrowList.length,v={},y={};if(f>0){for(var C=this.state.testDatacolumns.length,T=0;T<f;T++){v={};for(var g=1;g<C;g++){var D=this.state.testDatacolumns[g].text,b=this.state.testDatacolumns[g].dataField.toString(),N=this.state.testDataItemrowList[T][b];v[D]=N}y[T+1]=v}S={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:p=JSON.stringify(y)};fetch(Y+"testscript?environment="+a+"&module="+s+"&testId="+o,S).then(function(t){return t.json()}).then(function(e){if(t.setState({postResponceresult:e}),"false"===e.success.toString().toLowerCase())return t.setState({modal:!0}),t.setState({modalValidationText:"ISSUE: "+t.state.postResponceresult.servermessage})})}var E=this.state.TestScriptTestData.length,k={},w={},x={},F={},I=0;if(!(E>0))return this.setState({modal:!0}),this.setState({modalValidationText:"Test Steps is missing in test scripts."});for(var j=0;j<E;j++){k={},x={};var O=et(this.state.TestScriptTestData[j].locator),U=et(this.state.TestScriptTestData[j].locatorproperty);k.teststepid=et(this.state.TestScriptTestData[j].teststepid),k.stepdescription=et(this.state.TestScriptTestData[j].stepdescription),k.action=et(this.state.TestScriptTestData[j].action),k.locator=O,k.locatorproperty=U,k.value=et(this.state.TestScriptTestData[j].value),k.exitIfFail=et(this.state.TestScriptTestData[j].exitIfFail),w[j+1]=k,""!==O.trim()&&""!==U.trim()&&(I+=1,x.locator=O,x.locatorproperty=U,F[I]=x)}var L=JSON.stringify(F),P=Y+"customfunction";S={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:L};(function(){var e=Object(i.a)(n.a.mark(function e(){var a,s;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(P,S);case 2:return a=e.sent,e.next=5,a.json();case 5:if((s=e.sent).success){e.next=9;break}return t.setState({modal:!0}),e.abrupt("return",t.setState({modalValidationText:s.servermessage}));case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()();S={method:"POST",headers:{Accept:"application/json; odata=verbose","Content-type":"application/x-www-form-urlencoded"},body:p=JSON.stringify(w)};fetch(Y+"updatetestscript?module="+s+"&testId="+o+"&testcasename="+r+"&test=",S).then(function(t){return t.json()}).then(function(e){return t.setState({postResponceresult:e}),"false"===e.success.toString().toLowerCase()?(t.setState({modal:!0}),t.setState({modalValidationText:"ISSUE: "+t.state.postResponceresult.servermessage})):(t.setState({NewColName:""}),t.setState({selectedHeaderColumn:""}),t.setState({TestScriptTestData:[]}),t.setState({Env:""}),t.setState({ModuleName:""}),t.setState({NewTestID:""}),t.setState({testCaseName:""}),t.setState({CommonDataItem:[]}),t.setState({testDatacolumns:[{dataField:"testdatacolid",text:"#",headerStyle:{width:"40px"}}]}),t.setState({TestScriptTestData:[]}),t.setState({testDataItemrowList:[]}),t.setState({customFunctionName:""}),t.setState({customStepFrom:""}),t.setState({customStepTo:""}),t.setState({customFunctionNameCheck:!1}),t.setState({customFunctionstepFromCheck:!1}),t.setState({customFunctionstepToCheck:!1}),fetch(Y+"testcase?moduleName=").then(function(t){return t.json()}).then(function(e){t.setState({allModuleName:e})}),fetch(Y+"testscript?actionname").then(function(t){return t.json()}).then(function(e){t.setState({allActionNameList:e})}),t.setState({modal:!0}),t.setState({modalValidationText:"Test scripts is successfully updated."}))})}},{key:"render",value:function(){var t=this;this.state.isLoaded||S.a.createElement(b.a,{type:"Puff",color:"#00BFFF",height:50,width:1e4,timeout:12e5});var e={mode:"radio",onSelect:this.handleOnSelect},a={mode:"radio",onSelect:this.handleOnUtilitySelect},s={mode:"radio",onSelect:this.handleOnTestStepSelect},n={onClick:function(t,e,a){}},i={sizePerPage:5,hideSizePerPage:!0,hidePageListOnlyOnePage:!0},o=[{dataField:"id",text:"#",headerStyle:{width:"40px"},Cell:function(t){return S.a.createElement("div",null,S.a.createElement("span",{title:t.value},t.value))}},{dataField:"commonKeyName",text:"Key Name*",filter:Object(B.textFilter)(),validator:function(e,a,s){if(""===e.trim())return{valid:!1,message:"Key Name* can not be blank."};for(var n=t.state.CommonDataItem.length,i=0;i<n;i++){if(t.state.CommonDataItem[i].commonKeyName.trim().toLowerCase()===e.trim().toLowerCase())return{valid:!1,message:"Key Name* can not be duplicate."}}return!0}},{dataField:"commonKeyValue",text:"Key Value",filter:Object(B.textFilter)()}],r=[{dataField:"id",text:"#",headerStyle:{width:"40px"},Cell:function(t){return S.a.createElement("div",null,S.a.createElement("span",{title:t.value},t.value))}},{dataField:"utilityfunction",text:"Utility Function*",filter:Object(B.textFilter)()}],l=[{dataField:"teststepid",text:"#",headerStyle:{width:"40px"}},{dataField:"stepdescription",text:"Step description*",headerStyle:{backgroundColor:"#c8e6c9"},validator:function(t,e,a){return""!==t.trim()||{valid:!1,message:"Step description* can not be blank."}}},{dataField:"action",text:"Action*",headerStyle:{backgroundColor:"#c8e6c9",width:"110px"},editor:{type:z.Type.SELECT,options:W(this.state.allActionNameList)},validator:function(t,e,a){return""!==t.trim()||{valid:!1,message:"Action* can not be blank."}}},{dataField:"locator",text:"Locator",headerStyle:{backgroundColor:"#c8e6c9",width:"100px"},editor:{type:z.Type.SELECT,options:[{value:"id",label:"Id"},{value:"name",label:"Name"},{value:"classname",label:"ClassName"},{value:"xpath",label:"XPath"},{value:"linktext",label:"LinkText"},{value:"partiallinktext",label:"PartialLinkText"},{value:"tagname",label:"TagName"},{value:"cssselector",label:"CssSelector"}]}},{dataField:"locatorproperty",text:"Locator Property",headerStyle:{backgroundColor:"#c8e6c9"}},{dataField:"value",text:"Value",headerStyle:{backgroundColor:"#c8e6c9"}},{dataField:"exitIfFail",text:"Exit",headerStyle:{backgroundColor:"#c8e6c9",width:"60px"},editor:{type:z.Type.SELECT,options:[{value:"Y",label:"Y"},{value:"N",label:"N"}]}}];return S.a.createElement(h.a,{title:"Update Test Scripts",breadcrumbs:[{name:"Update Test Scripts",active:!0}]},S.a.createElement(N.a,null,S.a.createElement(E.a,{lg:6,md:6,sm:6,xs:12},S.a.createElement(k.a,null,S.a.createElement(w.a,null,"Test Script Setup"),S.a.createElement(x.a,null,S.a.createElement(F.a,null,S.a.createElement(I.a,{col:!0},S.a.createElement(j.a,{for:"exampleSelect",sm:6},"Environment*"),S.a.createElement(E.a,null,S.a.createElement(O.a,{invalid:this.state.testscriptcheckENV,type:"select",name:"env",value:this.state.Env,onChange:this.updateENV.bind(this)},S.a.createElement("option",{selected:"selected"},this.state.Env),S.a.createElement($,{options:T})))),S.a.createElement(I.a,{col:!0},S.a.createElement(j.a,{for:"exampleSelect",sm:6},"Module*"),S.a.createElement(E.a,null,S.a.createElement(O.a,{type:"select",value:this.state.ModuleName,invalid:this.state.testscriptcheckModule,name:"testscriptModule",onChange:this.updateModule.bind(this)},S.a.createElement("option",{selected:"selected"},this.state.ModuleName),S.a.createElement(tt,{options:this.state.allModuleName})))),S.a.createElement(I.a,{col:!0},S.a.createElement(j.a,{for:"exampleSelect",sm:5},"TestID*"),S.a.createElement(E.a,null,S.a.createElement(O.a,{value:this.state.NewTestID,type:"select",invalid:this.state.testscriptchecktestID,name:"testscriptTestID",onChange:this.updateTestID.bind(this)},S.a.createElement("option",{selected:"selected"},this.state.NewTestID),S.a.createElement(tt,{options:this.state.allTestID})))))))),S.a.createElement(E.a,{lg:6,md:6,sm:6,xs:12},S.a.createElement(k.a,null,S.a.createElement(w.a,null,"Common Test Data",S.a.createElement(U.a,{className:"card-img-right",src:C.a,style:{width:"auto",height:30},onClick:function(){return t.addNewCommonData()}}),S.a.createElement(U.a,{className:"card-img-right",src:v.a,style:{width:"auto",height:30},onClick:function(){return t.deleteCommonData()}})),S.a.createElement(x.a,null,S.a.createElement(A.a,{keyField:"id",data:this.state.CommonDataItem,columns:o,striped:!0,hover:!0,condensed:!0,pagination:_()(i),rowEvents:n,onDataSizeChange:this.handleDataChange,filter:G()(),selectRow:e,cellEdit:J()({mode:"click",blurToSave:!0,afterSaveCell:X})}))))),S.a.createElement(N.a,null,S.a.createElement(E.a,{lg:12,md:6,sm:6,xs:12},S.a.createElement(k.a,null,S.a.createElement(w.a,null,"Test Specific Data",S.a.createElement(F.a,{inline:!0},S.a.createElement(E.a,null,S.a.createElement(O.a,{invalid:this.state.headernameCheck,type:"input",name:"headername",placeholder:"add header name",value:this.state.newHeaderName,onChange:this.TypeHeaderName.bind(this)}),S.a.createElement(U.a,{className:"card-img-right",src:C.a,style:{width:"auto",height:30},onClick:function(){return t.addNewColumnonTestData()}}),S.a.createElement(U.a,{className:"card-img-right",src:v.a,style:{width:"auto",height:30},onClick:function(){return t.deleteTestDataColumn()}}),S.a.createElement(O.a,{type:"input",disabled:"true",name:"oldercolName",value:this.state.selectedHeaderColumn}),S.a.createElement(O.a,{invalid:this.state.checkNewColName,type:"input",name:"newColName",placeholder:"Rename Colum name",value:this.state.NewColName,onChange:this.TypeNewColName.bind(this)}),S.a.createElement(L.a,{onClick:this.RenameColumn.bind(this),color:"primary",name:"RenameCol"},"Rename Column")),S.a.createElement(U.a,{className:"card-img-right",src:C.a,style:{width:"auto",height:30},onClick:function(){return t.addNewTestDataRow()}}),S.a.createElement(U.a,{className:"card-img-right",src:v.a,style:{width:"auto",height:30},onClick:function(){return t.deleteTestDataRow()}}))),S.a.createElement(x.a,null,S.a.createElement(A.a,{keyField:"testdatacolid",data:this.state.testDataItemrowList,columns:this.state.testDatacolumns,striped:!0,hover:!0,condensed:!0,pagination:_()(i),cellEdit:J()({mode:"click",blurToSave:!0})}))))),S.a.createElement(N.a,null,S.a.createElement(E.a,{lg:12,md:12,sm:12,xs:12},S.a.createElement(k.a,null,S.a.createElement(w.a,null,"Test Steps",S.a.createElement(U.a,{className:"card-img-right",src:C.a,style:{width:"auto",height:30},onClick:function(){return t.addNewTestSteps()}}),S.a.createElement(U.a,{className:"card-img-right",src:v.a,style:{width:"auto",height:30},onClick:function(){return t.deleteTestSteps()}}),S.a.createElement(L.a,{color:"primary",onClick:this.selectionTestData.bind(this),name:"selectTestData"},"Select Test Data"),S.a.createElement(L.a,{color:"primary",onClick:this.selectionCommonData.bind(this),name:"selectCommonData"},"Select Common Data"),S.a.createElement(L.a,{color:"primary",onClick:this.selectionUtilityData.bind(this),name:"selectUtilityFunction"},"Select Utility Data"),S.a.createElement(L.a,{color:"primary",onClick:this.SaveTestScripts.bind(this),name:"saveTestScript"},"Save Test Script"),S.a.createElement(P.a,{isOpen:this.state.modal,toggle:this.toggle(),className:this.props.className},S.a.createElement(V.a,{toggle:this.toggle()}," Information"),S.a.createElement(R.a,null,this.state.modalValidationText),S.a.createElement(H.a,null,S.a.createElement(L.a,{color:"secondary",onClick:this.toggle()},"OK"))),S.a.createElement(P.a,{isOpen:this.state.utilityFunction,toggle:this.toggleUtilityFunction(),backdrop:"static",className:this.props.className},S.a.createElement(V.a,{toggle:this.toggleUtilityFunction()},"Utility Function"),S.a.createElement(w.a,null,S.a.createElement(M.a,{color:this.state.alertColor},this.state.UtilityFunctionExpression)),S.a.createElement(R.a,null,S.a.createElement(A.a,{keyField:"id",data:this.state.UtilityFunctionList,columns:r,striped:!0,hover:!0,condensed:!0,pagination:_()({sizePerPage:5,hideSizePerPage:!0,hidePageListOnlyOnePage:!0}),selectRow:a,filter:G()(),cellEdit:J()({mode:"click",blurToSave:!0})})),S.a.createElement(H.a,null,S.a.createElement(L.a,{onClick:this.EvaluateCustomFunction.bind(this),color:"secondary"},"Evaluate"),S.a.createElement(L.a,{color:"secondary",onClick:this.selectUtilityFunctionfromList.bind(this)},"Select Utility Data")))),S.a.createElement(x.a,null,S.a.createElement(A.a,{keyField:"teststepid",data:this.state.TestScriptTestData,columns:l,striped:!0,hover:!0,condensed:!0,pagination:_()({sizePerPage:10,hideSizePerPage:!0,hidePageListOnlyOnePage:!0}),rowEvents:n,onDataSizeChange:this.handleDataChange,selectRow:s,cellEdit:J()({mode:"click",blurToSave:!0})}))))),S.a.createElement(N.a,null,S.a.createElement(E.a,{lg:12,md:12,sm:12,xs:12},S.a.createElement(k.a,null,S.a.createElement(w.a,null,"Create New Custom Function"),S.a.createElement(x.a,null,S.a.createElement(F.a,{inline:!0},S.a.createElement(I.a,{col:!0},S.a.createElement(j.a,{for:"exampleSelect"},"Custom Function Name*"),S.a.createElement(E.a,null,S.a.createElement(O.a,{invalid:this.state.customFunctionNameCheck,value:this.state.customFunctionName,onChange:this.verifyCustomFunction.bind(this),type:"input",name:"custtomfunction",placeholder:"new custom function"})),S.a.createElement(j.a,{for:"exampleSelect"},"Step From*"),S.a.createElement(E.a,null,S.a.createElement(O.a,{invalid:this.state.customFunctionstepFromCheck,value:this.state.customStepFrom,onChange:this.SetCustomFunctionFromStep.bind(this),size:"2",type:"input",name:"fromstep"})),S.a.createElement(j.a,{for:"exampleSelect"},"Step To*"),S.a.createElement(E.a,null,S.a.createElement(O.a,{invalid:this.state.customFunctionstepToCheck,value:this.state.customStepTo,onChange:this.SetCustomToStep.bind(this),size:"2",type:"input",name:"tostep"}))),S.a.createElement(I.a,{col:!0},S.a.createElement(E.a,null,S.a.createElement(L.a,{onClick:this.saveCustomFunction.bind(this),color:"primary",name:"customfunc"},"Save")))," "))))))}}]),e}(S.a.Component);e.default=at}}]);
//# sourceMappingURL=26.1ff8d54b.chunk.js.map
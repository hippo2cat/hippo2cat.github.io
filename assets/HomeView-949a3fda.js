import{F as ro,i as ph,C as mh,T as Tu,d as Yt,a as Eu,c as qe,b as re,r as Rn,p as so,w as xr,e as gh,o as Pr,f as _h,g as vh,h as Hn,j as xh,k as Go,l as Vo,n as ao,m as bs,q as Au,s as yh,t as bh,u as Mh,v as Ho,x as Wo,y as Sh,z as jo,_ as wh}from"./index-fa3ab946.js";function Kn(r){return Kn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Kn(r)}function Th(r,e){if(Kn(r)!=="object"||r===null)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(Kn(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function Cu(r){var e=Th(r,"string");return Kn(e)==="symbol"?e:String(e)}function $e(r,e,t){return e=Cu(e),e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function Xo(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(r,i).enumerable})),t.push.apply(t,n)}return t}function Ae(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?Xo(Object(t),!0).forEach(function(n){$e(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):Xo(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function Zn(){return Zn=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r},Zn.apply(this,arguments)}var Eh=Array.isArray,Ah=function(e){return typeof e=="string"},Ch=function(e){return e!==null&&Kn(e)==="object"};function fr(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0;return typeof r=="function"?r(e):r??t}function Rr(){for(var r=[],e=0;e<arguments.length;e++){var t=e<0||arguments.length<=e?void 0:arguments[e];if(t){if(Ah(t))r.push(t);else if(Eh(t))for(var n=0;n<t.length;n++){var i=Rr(t[n]);i&&r.push(i)}else if(Ch(t))for(var s in t)t[s]&&r.push(s)}}return r.join(" ")}function Lh(r){if(Array.isArray(r))return r}function Ph(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n,i,s,o,a=[],l=!0,c=!1;try{if(s=(t=t.call(r)).next,e===0){if(Object(t)!==t)return;l=!1}else for(;!(l=(n=s.call(t)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(f){c=!0,i=f}finally{try{if(!l&&t.return!=null&&(o=t.return(),Object(o)!==o))return}finally{if(c)throw i}}return a}}function Ta(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function Lu(r,e){if(r){if(typeof r=="string")return Ta(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ta(r,e)}}function Rh(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function qo(r,e){return Lh(r)||Ph(r,e)||Lu(r,e)||Rh()}function Dh(r){if(Array.isArray(r))return Ta(r)}function Ih(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function Oh(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function gs(r){return Dh(r)||Ih(r)||Lu(r)||Oh()}var Nh=function(e){return e!=null&&e!==""};const Fh=Nh;var Uh=function(e,t){var n=Ae({},e);return Object.keys(t).forEach(function(i){var s=n[i];if(s)s.type||s.default?s.default=t[i]:s.def?s.def(t[i]):n[i]={type:s,default:t[i]};else throw new Error("not have ".concat(i," prop"))}),n};const kh=Uh;var Pu=function r(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,n=Array.isArray(e)?e:[e],i=[];return n.forEach(function(s){Array.isArray(s)?i.push.apply(i,gs(r(s,t))):s&&s.type===ro?i.push.apply(i,gs(r(s.children,t))):s&&ph(s)?t&&!Ru(s)?i.push(s):t||i.push(s):Fh(s)&&i.push(s)}),i},$o=function(e){for(var t,n=(e==null||(t=e.vnode)===null||t===void 0?void 0:t.el)||e&&(e.$el||e);n&&!n.tagName;)n=n.nextSibling;return n};function Ru(r){return r&&(r.type===mh||r.type===ro&&r.children.length===0||r.type===Tu&&r.children.trim()==="")}function Du(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=[];return r.forEach(function(t){Array.isArray(t)?e.push.apply(e,gs(t)):(t==null?void 0:t.type)===ro?e.push.apply(e,gs(Du(t.children))):e.push(t)}),e.filter(function(t){return!Ru(t)})}var Iu=function(e){return setTimeout(e,16)},Ou=function(e){return clearTimeout(e)};typeof window<"u"&&"requestAnimationFrame"in window&&(Iu=function(e){return window.requestAnimationFrame(e)},Ou=function(e){return window.cancelAnimationFrame(e)});var Yo=0,oo=new Map;function Nu(r){oo.delete(r)}function Ea(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;Yo+=1;var t=Yo;function n(i){if(i===0)Nu(t),r();else{var s=Iu(function(){n(i-1)});oo.set(t,s)}}return n(e),t}Ea.cancel=function(r){var e=oo.get(r);return Nu(e),Ou(e)};var zh=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t},Fu=function(e){var t=e;return t.install=function(n){n.component(t.displayName||t.name,e)},e};function Bh(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,s;for(s=0;s<n.length;s++)i=n[s],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}function Uu(r,e){if(r==null)return{};var t=Bh(r,e),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(i=0;i<s.length;i++)n=s[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}const Gh={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages"};var Vh={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"Ok",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"};const Hh=Vh;var Wh={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};const ku=Wh;var jh={lang:Ae({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},Hh),timePickerLocale:Ae({},ku)};const Ko=jh;var Ct="${label} is not a valid ${type}",Xh={locale:"en",Pagination:Gh,DatePicker:Ko,TimePicker:ku,Calendar:Ko,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No Data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Ct,method:Ct,array:Ct,object:Ct,number:Ct,date:Ct,boolean:Ct,integer:Ct,float:Ct,regexp:Ct,email:Ct,url:Ct,hex:Ct},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"}};const Aa=Xh,zu=Yt({compatConfig:{MODE:3},name:"LocaleReceiver",props:{componentName:String,defaultLocale:{type:[Object,Function]},children:{type:Function}},setup:function(e,t){var n=t.slots,i=Eu("localeData",{}),s=qe(function(){var a=e.componentName,l=a===void 0?"global":a,c=e.defaultLocale,f=c||Aa[l||"global"],u=i.antLocale,h=l&&u?u[l]:{};return Ae(Ae({},typeof f=="function"?f():f),h||{})}),o=qe(function(){var a=i.antLocale,l=a&&a.locale;return a&&a.exist&&!l?Aa.locale:l});return function(){var a=e.children||n.default,l=i.antLocale;return a==null?void 0:a(s.value,o.value,l)}}});var Bu=function(){var e=ai("empty",{}),t=e.getPrefixCls,n=t("empty-img-default");return re("svg",{class:n,width:"184",height:"152",viewBox:"0 0 184 152"},[re("g",{fill:"none","fill-rule":"evenodd"},[re("g",{transform:"translate(24 31.67)"},[re("ellipse",{class:"".concat(n,"-ellipse"),cx:"67.797",cy:"106.89",rx:"67.797",ry:"12.668"},null),re("path",{class:"".concat(n,"-path-1"),d:"M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"},null),re("path",{class:"".concat(n,"-path-2"),d:"M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z",transform:"translate(13.56)"},null),re("path",{class:"".concat(n,"-path-3"),d:"M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"},null),re("path",{class:"".concat(n,"-path-4"),d:"M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"},null)]),re("path",{class:"".concat(n,"-path-5"),d:"M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"},null),re("g",{class:"".concat(n,"-g"),transform:"translate(149.65 15.383)"},[re("ellipse",{cx:"20.654",cy:"3.167",rx:"2.849",ry:"2.815"},null),re("path",{d:"M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"},null)])])])};Bu.PRESENTED_IMAGE_DEFAULT=!0;const qh=Bu;var Gu=function(){var e=ai("empty",{}),t=e.getPrefixCls,n=t("empty-img-simple");return re("svg",{class:n,width:"64",height:"41",viewBox:"0 0 64 41"},[re("g",{transform:"translate(0 1)",fill:"none","fill-rule":"evenodd"},[re("ellipse",{class:"".concat(n,"-ellipse"),fill:"#F5F5F5",cx:"32",cy:"33",rx:"32",ry:"7"},null),re("g",{class:"".concat(n,"-g"),"fill-rule":"nonzero",stroke:"#D9D9D9"},[re("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"},null),re("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",fill:"#FAFAFA",class:"".concat(n,"-path")},null)])])])};Gu.PRESENTED_IMAGE_SIMPLE=!0;const $h=Gu;function Zo(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Vu(r,e,t){return e&&Zo(r.prototype,e),t&&Zo(r,t),r}function us(){return(us=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n])}return r}).apply(this,arguments)}function Hu(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}function Wu(r,e){if(r==null)return{};var t,n,i={},s=Object.keys(r);for(n=0;n<s.length;n++)e.indexOf(t=s[n])>=0||(i[t]=r[t]);return i}function Jo(r){return((e=r)!=null&&typeof e=="object"&&Array.isArray(e)===!1)==1&&Object.prototype.toString.call(r)==="[object Object]";var e}var ju=Object.prototype,Xu=ju.toString,Yh=ju.hasOwnProperty,qu=/^\s*function (\w+)/;function Qo(r){var e,t=(e=r==null?void 0:r.type)!==null&&e!==void 0?e:r;if(t){var n=t.toString().match(qu);return n?n[1]:""}return""}var Jn=function(r){var e,t;return Jo(r)!==!1&&typeof(e=r.constructor)=="function"&&Jo(t=e.prototype)!==!1&&t.hasOwnProperty("isPrototypeOf")!==!1},Kh=function(r){return r},bt=Kh,yr=function(r,e){return Yh.call(r,e)},Zh=Number.isInteger||function(r){return typeof r=="number"&&isFinite(r)&&Math.floor(r)===r},Oi=Array.isArray||function(r){return Xu.call(r)==="[object Array]"},Ni=function(r){return Xu.call(r)==="[object Function]"},_s=function(r){return Jn(r)&&yr(r,"_vueTypes_name")},$u=function(r){return Jn(r)&&(yr(r,"type")||["_vueTypes_name","validator","default","required"].some(function(e){return yr(r,e)}))};function lo(r,e){return Object.defineProperty(r.bind(e),"__original",{value:r})}function si(r,e,t){var n;t===void 0&&(t=!1);var i=!0,s="";n=Jn(r)?r:{type:r};var o=_s(n)?n._vueTypes_name+" - ":"";if($u(n)&&n.type!==null){if(n.type===void 0||n.type===!0||!n.required&&e===void 0)return i;Oi(n.type)?(i=n.type.some(function(u){return si(u,e,!0)===!0}),s=n.type.map(function(u){return Qo(u)}).join(" or ")):i=(s=Qo(n))==="Array"?Oi(e):s==="Object"?Jn(e):s==="String"||s==="Number"||s==="Boolean"||s==="Function"?function(u){if(u==null)return"";var h=u.constructor.toString().match(qu);return h?h[1]:""}(e)===s:e instanceof n.type}if(!i){var a=o+'value "'+e+'" should be of type "'+s+'"';return t===!1?(bt(a),!1):a}if(yr(n,"validator")&&Ni(n.validator)){var l=bt,c=[];if(bt=function(u){c.push(u)},i=n.validator(e),bt=l,!i){var f=(c.length>1?"* ":"")+c.join(`
* `);return c.length=0,t===!1?(bt(f),i):f}}return i}function Nt(r,e){var t=Object.defineProperties(e,{_vueTypes_name:{value:r,writable:!0},isRequired:{get:function(){return this.required=!0,this}},def:{value:function(i){return i!==void 0||this.default?Ni(i)||si(this,i,!0)===!0?(this.default=Oi(i)?function(){return[].concat(i)}:Jn(i)?function(){return Object.assign({},i)}:i,this):(bt(this._vueTypes_name+' - invalid default value: "'+i+'"'),this):this}}}),n=t.validator;return Ni(n)&&(t.validator=lo(n,t)),t}function tn(r,e){var t=Nt(r,e);return Object.defineProperty(t,"validate",{value:function(n){return Ni(this.validator)&&bt(this._vueTypes_name+` - calling .validate() will overwrite the current custom validator function. Validator info:
`+JSON.stringify(this)),this.validator=lo(n,this),this}})}function el(r,e,t){var n,i,s=(n=e,i={},Object.getOwnPropertyNames(n).forEach(function(u){i[u]=Object.getOwnPropertyDescriptor(n,u)}),Object.defineProperties({},i));if(s._vueTypes_name=r,!Jn(t))return s;var o,a,l=t.validator,c=Wu(t,["validator"]);if(Ni(l)){var f=s.validator;f&&(f=(a=(o=f).__original)!==null&&a!==void 0?a:o),s.validator=lo(f?function(u){return f.call(this,u)&&l.call(this,u)}:l,s)}return Object.assign(s,c)}function Ms(r){return r.replace(/^(?!\s*$)/gm,"  ")}var Jh=function(){return tn("any",{})},Qh=function(){return tn("function",{type:Function})},ed=function(){return tn("boolean",{type:Boolean})},td=function(){return tn("string",{type:String})},nd=function(){return tn("number",{type:Number})},id=function(){return tn("array",{type:Array})},rd=function(){return tn("object",{type:Object})},sd=function(){return Nt("integer",{type:Number,validator:function(r){return Zh(r)}})},ad=function(){return Nt("symbol",{validator:function(r){return typeof r=="symbol"}})};function od(r,e){if(e===void 0&&(e="custom validation failed"),typeof r!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return Nt(r.name||"<<anonymous function>>",{validator:function(t){var n=r(t);return n||bt(this._vueTypes_name+" - "+e),n}})}function ld(r){if(!Oi(r))throw new TypeError("[VueTypes error]: You must provide an array as argument.");var e='oneOf - value should be one of "'+r.join('", "')+'".',t=r.reduce(function(n,i){if(i!=null){var s=i.constructor;n.indexOf(s)===-1&&n.push(s)}return n},[]);return Nt("oneOf",{type:t.length>0?t:void 0,validator:function(n){var i=r.indexOf(n)!==-1;return i||bt(e),i}})}function cd(r){if(!Oi(r))throw new TypeError("[VueTypes error]: You must provide an array as argument");for(var e=!1,t=[],n=0;n<r.length;n+=1){var i=r[n];if($u(i)){if(_s(i)&&i._vueTypes_name==="oneOf"){t=t.concat(i.type);continue}if(Ni(i.validator)&&(e=!0),i.type!==!0&&i.type){t=t.concat(i.type);continue}}t.push(i)}return t=t.filter(function(s,o){return t.indexOf(s)===o}),Nt("oneOfType",e?{type:t,validator:function(s){var o=[],a=r.some(function(l){var c=si(_s(l)&&l._vueTypes_name==="oneOf"?l.type||null:l,s,!0);return typeof c=="string"&&o.push(c),c===!0});return a||bt("oneOfType - provided value does not match any of the "+o.length+` passed-in validators:
`+Ms(o.join(`
`))),a}}:{type:t})}function ud(r){return Nt("arrayOf",{type:Array,validator:function(e){var t,n=e.every(function(i){return(t=si(r,i,!0))===!0});return n||bt(`arrayOf - value validation error:
`+Ms(t)),n}})}function fd(r){return Nt("instanceOf",{type:r})}function hd(r){return Nt("objectOf",{type:Object,validator:function(e){var t,n=Object.keys(e).every(function(i){return(t=si(r,e[i],!0))===!0});return n||bt(`objectOf - value validation error:
`+Ms(t)),n}})}function dd(r){var e=Object.keys(r),t=e.filter(function(i){var s;return!!(!((s=r[i])===null||s===void 0)&&s.required)}),n=Nt("shape",{type:Object,validator:function(i){var s=this;if(!Jn(i))return!1;var o=Object.keys(i);if(t.length>0&&t.some(function(l){return o.indexOf(l)===-1})){var a=t.filter(function(l){return o.indexOf(l)===-1});return bt(a.length===1?'shape - required property "'+a[0]+'" is not defined.':'shape - required properties "'+a.join('", "')+'" are not defined.'),!1}return o.every(function(l){if(e.indexOf(l)===-1)return s._vueTypes_isLoose===!0||(bt('shape - shape definition does not include a "'+l+'" property. Allowed keys: "'+e.join('", "')+'".'),!1);var c=si(r[l],i[l],!0);return typeof c=="string"&&bt('shape - "'+l+`" property validation error:
 `+Ms(c)),c===!0})}});return Object.defineProperty(n,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(n,"loose",{get:function(){return this._vueTypes_isLoose=!0,this}}),n}var Zt=function(){function r(){}return r.extend=function(e){var t=this;if(Oi(e))return e.forEach(function(u){return t.extend(u)}),this;var n=e.name,i=e.validate,s=i!==void 0&&i,o=e.getter,a=o!==void 0&&o,l=Wu(e,["name","validate","getter"]);if(yr(this,n))throw new TypeError('[VueTypes error]: Type "'+n+'" already defined');var c,f=l.type;return _s(f)?(delete l.type,Object.defineProperty(this,n,a?{get:function(){return el(n,f,l)}}:{value:function(){var u,h=el(n,f,l);return h.validator&&(h.validator=(u=h.validator).bind.apply(u,[h].concat([].slice.call(arguments)))),h}})):(c=a?{get:function(){var u=Object.assign({},l);return s?tn(n,u):Nt(n,u)},enumerable:!0}:{value:function(){var u,h,d=Object.assign({},l);return u=s?tn(n,d):Nt(n,d),d.validator&&(u.validator=(h=d.validator).bind.apply(h,[u].concat([].slice.call(arguments)))),u},enumerable:!0},Object.defineProperty(this,n,c))},Vu(r,null,[{key:"any",get:function(){return Jh()}},{key:"func",get:function(){return Qh().def(this.defaults.func)}},{key:"bool",get:function(){return ed().def(this.defaults.bool)}},{key:"string",get:function(){return td().def(this.defaults.string)}},{key:"number",get:function(){return nd().def(this.defaults.number)}},{key:"array",get:function(){return id().def(this.defaults.array)}},{key:"object",get:function(){return rd().def(this.defaults.object)}},{key:"integer",get:function(){return sd().def(this.defaults.integer)}},{key:"symbol",get:function(){return ad()}}]),r}();function Yu(r){var e;return r===void 0&&(r={func:function(){},bool:!0,string:"",number:0,array:function(){return[]},object:function(){return{}},integer:0}),(e=function(t){function n(){return t.apply(this,arguments)||this}return Hu(n,t),Vu(n,null,[{key:"sensibleDefaults",get:function(){return us({},this.defaults)},set:function(i){this.defaults=i!==!1?us({},i!==!0?i:r):{}}}]),n}(Zt)).defaults=us({},r),e}Zt.defaults={},Zt.custom=od,Zt.oneOf=ld,Zt.instanceOf=fd,Zt.oneOfType=cd,Zt.arrayOf=ud,Zt.objectOf=hd,Zt.shape=dd,Zt.utils={validate:function(r,e){return si(e,r,!0)===!0},toType:function(r,e,t){return t===void 0&&(t=!1),t?tn(r,e):Nt(r,e)}};(function(r){function e(){return r.apply(this,arguments)||this}return Hu(e,r),e})(Yu());var Ku=Yu({func:void 0,bool:void 0,string:void 0,number:void 0,array:void 0,object:void 0,integer:void 0});Ku.extend([{name:"looseBool",getter:!0,type:Boolean,default:void 0},{name:"style",getter:!0,type:[String,Object],default:void 0},{name:"VueNode",getter:!0,type:null}]);const Ca=Ku;var pd=["image","description","imageStyle","class"],Zu=re(qh,null,null),Ju=re($h,null,null),Hi=function(e,t){var n,i=t.slots,s=i===void 0?{}:i,o=t.attrs,a=ai("empty",e),l=a.direction,c=a.prefixCls,f=c.value,u=Ae(Ae({},e),o),h=u.image,d=h===void 0?Zu:h,g=u.description,m=g===void 0?((n=s.description)===null||n===void 0?void 0:n.call(s))||void 0:g,p=u.imageStyle,_=u.class,M=_===void 0?"":_,y=Uu(u,pd);return re(zu,{componentName:"Empty",children:function(b){var w,C=typeof m<"u"?m:b.description,v=typeof C=="string"?C:"empty",E=null;return typeof d=="string"?E=re("img",{alt:v,src:d},null):E=d,re("div",Ae({class:Rr(f,M,(w={},$e(w,"".concat(f,"-normal"),d===Ju),$e(w,"".concat(f,"-rtl"),l.value==="rtl"),w))},y),[re("div",{class:"".concat(f,"-image"),style:p},[E]),C&&re("p",{class:"".concat(f,"-description")},[C]),s.default&&re("div",{class:"".concat(f,"-footer")},[Du(s.default())])])}},null)};Hi.displayName="AEmpty";Hi.PRESENTED_IMAGE_DEFAULT=Zu;Hi.PRESENTED_IMAGE_SIMPLE=Ju;Hi.inheritAttrs=!1;Hi.props={prefixCls:String,image:Ca.any,description:Ca.any,imageStyle:{type:Object,default:void 0}};const Ji=Fu(Hi);var md=function(e){var t=ai("empty",e),n=t.prefixCls,i=function(o){switch(o){case"Table":case"List":return re(Ji,{image:Ji.PRESENTED_IMAGE_SIMPLE},null);case"Select":case"TreeSelect":case"Cascader":case"Transfer":case"Mentions":return re(Ji,{image:Ji.PRESENTED_IMAGE_SIMPLE,class:"".concat(n.value,"-small")},null);default:return re(Ji,null,null)}};return i(e.componentName)};function Qu(r){return re(md,{componentName:r},null)}var tl={};function gd(r,e){}function _d(r,e,t){!e&&!tl[t]&&(r(!1,t),tl[t]=!0)}function ef(r,e){_d(gd,r,e)}const vd=function(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";ef(r,"[antdv: ".concat(e,"] ").concat(t))};var La="internalMark",fs=Yt({compatConfig:{MODE:3},name:"ALocaleProvider",props:{locale:{type:Object},ANT_MARK__:String},setup:function(e,t){var n=t.slots;vd(e.ANT_MARK__===La,"LocaleProvider","`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead");var i=Rn({antLocale:Ae(Ae({},e.locale),{},{exist:!0}),ANT_MARK__:La});return so("localeData",i),xr(function(){return e.locale},function(){i.antLocale=Ae(Ae({},e.locale),{},{exist:!0})},{immediate:!0}),function(){var s;return(s=n.default)===null||s===void 0?void 0:s.call(n)}}});fs.install=function(r){return r.component(fs.name,fs),r};const xd=Fu(fs);zh("bottomLeft","bottomRight","topLeft","topRight");var yd=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=Ae(e?{name:e,appear:!0,appearActiveClass:"".concat(e),appearToClass:"".concat(e,"-appear ").concat(e,"-appear-active"),enterFromClass:"".concat(e,"-appear ").concat(e,"-enter ").concat(e,"-appear-prepare ").concat(e,"-enter-prepare"),enterActiveClass:"".concat(e),enterToClass:"".concat(e,"-enter ").concat(e,"-appear ").concat(e,"-appear-active ").concat(e,"-enter-active"),leaveActiveClass:"".concat(e," ").concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-active")}:{css:!1},t);return n};const bd=Yt({name:"Notice",inheritAttrs:!1,props:["prefixCls","duration","updateMark","noticeKey","closeIcon","closable","props","onClick","onClose","holder","visible"],setup:function(e,t){var n=t.attrs,i=t.slots,s,o=qe(function(){return e.duration===void 0?1.5:e.duration}),a=function(){o.value&&(s=setTimeout(function(){c()},o.value*1e3))},l=function(){s&&(clearTimeout(s),s=null)},c=function(h){h&&h.stopPropagation(),l();var d=e.onClose,g=e.noticeKey;d&&d(g)},f=function(){l(),a()};return Pr(function(){a()}),_h(function(){l()}),xr([o,function(){return e.updateMark},function(){return e.visible}],function(u,h){var d=qo(u,3),g=d[0],m=d[1],p=d[2],_=qo(h,3),M=_[0],y=_[1],x=_[2];(g!==M||m!==y||p!==x&&x)&&f()},{flush:"post"}),function(){var u,h,d=e.prefixCls,g=e.closable,m=e.closeIcon,p=m===void 0?(u=i.closeIcon)===null||u===void 0?void 0:u.call(i):m,_=e.onClick,M=e.holder,y=n.class,x=n.style,b="".concat(d,"-notice"),w=Object.keys(n).reduce(function(v,E){return(E.substr(0,5)==="data-"||E.substr(0,5)==="aria-"||E==="role")&&(v[E]=n[E]),v},{}),C=re("div",Ae({class:Rr(b,y,$e({},"".concat(b,"-closable"),g)),style:x,onMouseenter:l,onMouseleave:a,onClick:_},w),[re("div",{class:"".concat(b,"-content")},[(h=i.default)===null||h===void 0?void 0:h.call(i)]),g?re("a",{tabindex:0,onClick:c,class:"".concat(b,"-close")},[p||re("span",{class:"".concat(b,"-close-x")},null)]):null]);return M?re(vh,{to:M},{default:function(){return C}}):C}}});var Md=["name","getContainer","appContext","prefixCls","rootPrefixCls","transitionName","hasTransitionName"],nl=0,Sd=Date.now();function il(){var r=nl;return nl+=1,"rcNotification_".concat(Sd,"_").concat(r)}var Pa=Yt({name:"Notification",inheritAttrs:!1,props:["prefixCls","transitionName","animation","maxCount","closeIcon"],setup:function(e,t){var n=t.attrs,i=t.expose,s=t.slots,o=new Map,a=Hn([]),l=qe(function(){var u=e.prefixCls,h=e.animation,d=h===void 0?"fade":h,g=e.transitionName;return!g&&d&&(g="".concat(u,"-").concat(d)),yd(g)}),c=function(h,d){var g=h.key||il(),m=Ae(Ae({},h),{},{key:g}),p=e.maxCount,_=a.value.map(function(y){return y.notice.key}).indexOf(g),M=a.value.concat();_!==-1?M.splice(_,1,{notice:m,holderCallback:d}):(p&&a.value.length>=p&&(m.key=M[0].notice.key,m.updateMark=il(),m.userPassKey=g,M.shift()),M.push({notice:m,holderCallback:d})),a.value=M},f=function(h){a.value=a.value.filter(function(d){var g=d.notice,m=g.key,p=g.userPassKey,_=p||m;return _!==h})};return i({add:c,remove:f,notices:a}),function(){var u,h,d=e.prefixCls,g=e.closeIcon,m=g===void 0?(u=s.closeIcon)===null||u===void 0?void 0:u.call(s,{prefixCls:d}):g,p=a.value.map(function(M,y){var x=M.notice,b=M.holderCallback,w=y===a.value.length-1?x.updateMark:void 0,C=x.key,v=x.userPassKey,E=x.content,I=Ae(Ae(Ae({prefixCls:d,closeIcon:typeof m=="function"?m({prefixCls:d}):m},x),x.props),{},{key:C,noticeKey:v||C,updateMark:w,onClose:function(K){var N;f(K),(N=x.onClose)===null||N===void 0||N.call(x)},onClick:x.onClick});return b?re("div",{key:C,class:"".concat(d,"-hook-holder"),ref:function(K){typeof C>"u"||(K?(o.set(C,K),b(K,I)):o.delete(C))}},null):re(bd,I,{default:function(){return[typeof E=="function"?E({prefixCls:d}):E]}})}),_=(h={},$e(h,d,1),$e(h,n.class,!!n.class),h);return re("div",{class:_,style:n.style||{top:"65px",left:"50%"}},[re(xh,Ae({tag:"div"},l.value),{default:function(){return[p]}})])}}});Pa.newInstance=function(e,t){var n=e||{},i=n.name,s=i===void 0?"notification":i,o=n.getContainer,a=n.appContext,l=n.prefixCls,c=n.rootPrefixCls,f=n.transitionName,u=n.hasTransitionName,h=Uu(n,Md),d=document.createElement("div");if(o){var g=o();g.appendChild(d)}else document.body.appendChild(d);var m=Yt({compatConfig:{MODE:3},name:"NotificationWrapper",setup:function(M,y){var x=y.attrs,b=Hn();return Pr(function(){t({notice:function(C){var v;(v=b.value)===null||v===void 0||v.add(C)},removeNotice:function(C){var v;(v=b.value)===null||v===void 0||v.remove(C)},destroy:function(){Go(null,d),d.parentNode&&d.parentNode.removeChild(d)},component:b})}),function(){var w=Dt,C=w.getPrefixCls(s,l),v=w.getRootPrefixCls(c,C),E=u?f:"".concat(v,"-").concat(f);return re(mr,Ae(Ae({},w),{},{notUpdateGlobalConfig:!0,prefixCls:v}),{default:function(){return[re(Pa,Ae(Ae({ref:b},x),{},{prefixCls:C,transitionName:E}),null)]}})}}}),p=re(m,h);p.appContext=a||p.appContext,Go(p,d)};const tf=Pa;var wd={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"};const Td=wd;function ct(r,e){Ed(r)&&(r="100%");var t=Ad(r);return r=e===360?r:Math.min(e,Math.max(0,parseFloat(r))),t&&(r=parseInt(String(r*e),10)/100),Math.abs(r-e)<1e-6?1:(e===360?r=(r<0?r%e+e:r%e)/parseFloat(String(e)):r=r%e/parseFloat(String(e)),r)}function Nr(r){return Math.min(1,Math.max(0,r))}function Ed(r){return typeof r=="string"&&r.indexOf(".")!==-1&&parseFloat(r)===1}function Ad(r){return typeof r=="string"&&r.indexOf("%")!==-1}function nf(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Fr(r){return r<=1?"".concat(Number(r)*100,"%"):r}function Wn(r){return r.length===1?"0"+r:String(r)}function Cd(r,e,t){return{r:ct(r,255)*255,g:ct(e,255)*255,b:ct(t,255)*255}}function rl(r,e,t){r=ct(r,255),e=ct(e,255),t=ct(t,255);var n=Math.max(r,e,t),i=Math.min(r,e,t),s=0,o=0,a=(n+i)/2;if(n===i)o=0,s=0;else{var l=n-i;switch(o=a>.5?l/(2-n-i):l/(n+i),n){case r:s=(e-t)/l+(e<t?6:0);break;case e:s=(t-r)/l+2;break;case t:s=(r-e)/l+4;break}s/=6}return{h:s,s:o,l:a}}function Rs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*(6*t):t<1/2?e:t<2/3?r+(e-r)*(2/3-t)*6:r}function Ld(r,e,t){var n,i,s;if(r=ct(r,360),e=ct(e,100),t=ct(t,100),e===0)i=t,s=t,n=t;else{var o=t<.5?t*(1+e):t+e-t*e,a=2*t-o;n=Rs(a,o,r+1/3),i=Rs(a,o,r),s=Rs(a,o,r-1/3)}return{r:n*255,g:i*255,b:s*255}}function Ra(r,e,t){r=ct(r,255),e=ct(e,255),t=ct(t,255);var n=Math.max(r,e,t),i=Math.min(r,e,t),s=0,o=n,a=n-i,l=n===0?0:a/n;if(n===i)s=0;else{switch(n){case r:s=(e-t)/a+(e<t?6:0);break;case e:s=(t-r)/a+2;break;case t:s=(r-e)/a+4;break}s/=6}return{h:s,s:l,v:o}}function Pd(r,e,t){r=ct(r,360)*6,e=ct(e,100),t=ct(t,100);var n=Math.floor(r),i=r-n,s=t*(1-e),o=t*(1-i*e),a=t*(1-(1-i)*e),l=n%6,c=[t,o,s,s,a,t][l],f=[a,t,t,o,s,s][l],u=[s,s,a,t,t,o][l];return{r:c*255,g:f*255,b:u*255}}function Da(r,e,t,n){var i=[Wn(Math.round(r).toString(16)),Wn(Math.round(e).toString(16)),Wn(Math.round(t).toString(16))];return n&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function Rd(r,e,t,n,i){var s=[Wn(Math.round(r).toString(16)),Wn(Math.round(e).toString(16)),Wn(Math.round(t).toString(16)),Wn(Dd(n))];return i&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))&&s[3].startsWith(s[3].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0)+s[3].charAt(0):s.join("")}function Dd(r){return Math.round(parseFloat(r)*255).toString(16)}function sl(r){return Rt(r)/255}function Rt(r){return parseInt(r,16)}function Id(r){return{r:r>>16,g:(r&65280)>>8,b:r&255}}var Ia={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function Ti(r){var e={r:0,g:0,b:0},t=1,n=null,i=null,s=null,o=!1,a=!1;return typeof r=="string"&&(r=Fd(r)),typeof r=="object"&&(ln(r.r)&&ln(r.g)&&ln(r.b)?(e=Cd(r.r,r.g,r.b),o=!0,a=String(r.r).substr(-1)==="%"?"prgb":"rgb"):ln(r.h)&&ln(r.s)&&ln(r.v)?(n=Fr(r.s),i=Fr(r.v),e=Pd(r.h,n,i),o=!0,a="hsv"):ln(r.h)&&ln(r.s)&&ln(r.l)&&(n=Fr(r.s),s=Fr(r.l),e=Ld(r.h,n,s),o=!0,a="hsl"),Object.prototype.hasOwnProperty.call(r,"a")&&(t=r.a)),t=nf(t),{ok:o,format:r.format||a,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:t}}var Od="[-\\+]?\\d+%?",Nd="[-\\+]?\\d*\\.\\d+%?",Cn="(?:".concat(Nd,")|(?:").concat(Od,")"),Ds="[\\s|\\(]+(".concat(Cn,")[,|\\s]+(").concat(Cn,")[,|\\s]+(").concat(Cn,")\\s*\\)?"),Is="[\\s|\\(]+(".concat(Cn,")[,|\\s]+(").concat(Cn,")[,|\\s]+(").concat(Cn,")[,|\\s]+(").concat(Cn,")\\s*\\)?"),Xt={CSS_UNIT:new RegExp(Cn),rgb:new RegExp("rgb"+Ds),rgba:new RegExp("rgba"+Is),hsl:new RegExp("hsl"+Ds),hsla:new RegExp("hsla"+Is),hsv:new RegExp("hsv"+Ds),hsva:new RegExp("hsva"+Is),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Fd(r){if(r=r.trim().toLowerCase(),r.length===0)return!1;var e=!1;if(Ia[r])r=Ia[r],e=!0;else if(r==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var t=Xt.rgb.exec(r);return t?{r:t[1],g:t[2],b:t[3]}:(t=Xt.rgba.exec(r),t?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=Xt.hsl.exec(r),t?{h:t[1],s:t[2],l:t[3]}:(t=Xt.hsla.exec(r),t?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=Xt.hsv.exec(r),t?{h:t[1],s:t[2],v:t[3]}:(t=Xt.hsva.exec(r),t?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=Xt.hex8.exec(r),t?{r:Rt(t[1]),g:Rt(t[2]),b:Rt(t[3]),a:sl(t[4]),format:e?"name":"hex8"}:(t=Xt.hex6.exec(r),t?{r:Rt(t[1]),g:Rt(t[2]),b:Rt(t[3]),format:e?"name":"hex"}:(t=Xt.hex4.exec(r),t?{r:Rt(t[1]+t[1]),g:Rt(t[2]+t[2]),b:Rt(t[3]+t[3]),a:sl(t[4]+t[4]),format:e?"name":"hex8"}:(t=Xt.hex3.exec(r),t?{r:Rt(t[1]+t[1]),g:Rt(t[2]+t[2]),b:Rt(t[3]+t[3]),format:e?"name":"hex"}:!1)))))))))}function ln(r){return Boolean(Xt.CSS_UNIT.exec(String(r)))}var Os=function(){function r(e,t){e===void 0&&(e=""),t===void 0&&(t={});var n;if(e instanceof r)return e;typeof e=="number"&&(e=Id(e)),this.originalInput=e;var i=Ti(e);this.originalInput=e,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=(n=t.format)!==null&&n!==void 0?n:i.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return r.prototype.isDark=function(){return this.getBrightness()<128},r.prototype.isLight=function(){return!this.isDark()},r.prototype.getBrightness=function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},r.prototype.getLuminance=function(){var e=this.toRgb(),t,n,i,s=e.r/255,o=e.g/255,a=e.b/255;return s<=.03928?t=s/12.92:t=Math.pow((s+.055)/1.055,2.4),o<=.03928?n=o/12.92:n=Math.pow((o+.055)/1.055,2.4),a<=.03928?i=a/12.92:i=Math.pow((a+.055)/1.055,2.4),.2126*t+.7152*n+.0722*i},r.prototype.getAlpha=function(){return this.a},r.prototype.setAlpha=function(e){return this.a=nf(e),this.roundA=Math.round(100*this.a)/100,this},r.prototype.isMonochrome=function(){var e=this.toHsl().s;return e===0},r.prototype.toHsv=function(){var e=Ra(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}},r.prototype.toHsvString=function(){var e=Ra(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),i=Math.round(e.v*100);return this.a===1?"hsv(".concat(t,", ").concat(n,"%, ").concat(i,"%)"):"hsva(".concat(t,", ").concat(n,"%, ").concat(i,"%, ").concat(this.roundA,")")},r.prototype.toHsl=function(){var e=rl(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}},r.prototype.toHslString=function(){var e=rl(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),i=Math.round(e.l*100);return this.a===1?"hsl(".concat(t,", ").concat(n,"%, ").concat(i,"%)"):"hsla(".concat(t,", ").concat(n,"%, ").concat(i,"%, ").concat(this.roundA,")")},r.prototype.toHex=function(e){return e===void 0&&(e=!1),Da(this.r,this.g,this.b,e)},r.prototype.toHexString=function(e){return e===void 0&&(e=!1),"#"+this.toHex(e)},r.prototype.toHex8=function(e){return e===void 0&&(e=!1),Rd(this.r,this.g,this.b,this.a,e)},r.prototype.toHex8String=function(e){return e===void 0&&(e=!1),"#"+this.toHex8(e)},r.prototype.toHexShortString=function(e){return e===void 0&&(e=!1),this.a===1?this.toHexString(e):this.toHex8String(e)},r.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},r.prototype.toRgbString=function(){var e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return this.a===1?"rgb(".concat(e,", ").concat(t,", ").concat(n,")"):"rgba(".concat(e,", ").concat(t,", ").concat(n,", ").concat(this.roundA,")")},r.prototype.toPercentageRgb=function(){var e=function(t){return"".concat(Math.round(ct(t,255)*100),"%")};return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}},r.prototype.toPercentageRgbString=function(){var e=function(t){return Math.round(ct(t,255)*100)};return this.a===1?"rgb(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%)"):"rgba(".concat(e(this.r),"%, ").concat(e(this.g),"%, ").concat(e(this.b),"%, ").concat(this.roundA,")")},r.prototype.toName=function(){if(this.a===0)return"transparent";if(this.a<1)return!1;for(var e="#"+Da(this.r,this.g,this.b,!1),t=0,n=Object.entries(Ia);t<n.length;t++){var i=n[t],s=i[0],o=i[1];if(e===o)return s}return!1},r.prototype.toString=function(e){var t=Boolean(e);e=e??this.format;var n=!1,i=this.a<1&&this.a>=0,s=!t&&i&&(e.startsWith("hex")||e==="name");return s?e==="name"&&this.a===0?this.toName():this.toRgbString():(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString())},r.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},r.prototype.clone=function(){return new r(this.toString())},r.prototype.lighten=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l+=e/100,t.l=Nr(t.l),new r(t)},r.prototype.brighten=function(e){e===void 0&&(e=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(255*-(e/100)))),t.g=Math.max(0,Math.min(255,t.g-Math.round(255*-(e/100)))),t.b=Math.max(0,Math.min(255,t.b-Math.round(255*-(e/100)))),new r(t)},r.prototype.darken=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.l-=e/100,t.l=Nr(t.l),new r(t)},r.prototype.tint=function(e){return e===void 0&&(e=10),this.mix("white",e)},r.prototype.shade=function(e){return e===void 0&&(e=10),this.mix("black",e)},r.prototype.desaturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s-=e/100,t.s=Nr(t.s),new r(t)},r.prototype.saturate=function(e){e===void 0&&(e=10);var t=this.toHsl();return t.s+=e/100,t.s=Nr(t.s),new r(t)},r.prototype.greyscale=function(){return this.desaturate(100)},r.prototype.spin=function(e){var t=this.toHsl(),n=(t.h+e)%360;return t.h=n<0?360+n:n,new r(t)},r.prototype.mix=function(e,t){t===void 0&&(t=50);var n=this.toRgb(),i=new r(e).toRgb(),s=t/100,o={r:(i.r-n.r)*s+n.r,g:(i.g-n.g)*s+n.g,b:(i.b-n.b)*s+n.b,a:(i.a-n.a)*s+n.a};return new r(o)},r.prototype.analogous=function(e,t){e===void 0&&(e=6),t===void 0&&(t=30);var n=this.toHsl(),i=360/t,s=[this];for(n.h=(n.h-(i*e>>1)+720)%360;--e;)n.h=(n.h+i)%360,s.push(new r(n));return s},r.prototype.complement=function(){var e=this.toHsl();return e.h=(e.h+180)%360,new r(e)},r.prototype.monochromatic=function(e){e===void 0&&(e=6);for(var t=this.toHsv(),n=t.h,i=t.s,s=t.v,o=[],a=1/e;e--;)o.push(new r({h:n,s:i,v:s})),s=(s+a)%1;return o},r.prototype.splitcomplement=function(){var e=this.toHsl(),t=e.h;return[this,new r({h:(t+72)%360,s:e.s,l:e.l}),new r({h:(t+216)%360,s:e.s,l:e.l})]},r.prototype.onBackground=function(e){var t=this.toRgb(),n=new r(e).toRgb(),i=t.a+n.a*(1-t.a);return new r({r:(t.r*t.a+n.r*n.a*(1-t.a))/i,g:(t.g*t.a+n.g*n.a*(1-t.a))/i,b:(t.b*t.a+n.b*n.a*(1-t.a))/i,a:i})},r.prototype.triad=function(){return this.polyad(3)},r.prototype.tetrad=function(){return this.polyad(4)},r.prototype.polyad=function(e){for(var t=this.toHsl(),n=t.h,i=[this],s=360/e,o=1;o<e;o++)i.push(new r({h:(n+o*s)%360,s:t.s,l:t.l}));return i},r.prototype.equals=function(e){return this.toRgbString()===new r(e).toRgbString()},r}(),Ur=2,al=.16,Ud=.05,kd=.05,zd=.15,rf=5,sf=4,Bd=[{index:7,opacity:.15},{index:6,opacity:.25},{index:5,opacity:.3},{index:5,opacity:.45},{index:5,opacity:.65},{index:5,opacity:.85},{index:4,opacity:.9},{index:3,opacity:.95},{index:2,opacity:.97},{index:1,opacity:.98}];function ol(r){var e=r.r,t=r.g,n=r.b,i=Ra(e,t,n);return{h:i.h*360,s:i.s,v:i.v}}function kr(r){var e=r.r,t=r.g,n=r.b;return"#".concat(Da(e,t,n,!1))}function Gd(r,e,t){var n=t/100,i={r:(e.r-r.r)*n+r.r,g:(e.g-r.g)*n+r.g,b:(e.b-r.b)*n+r.b};return i}function ll(r,e,t){var n;return Math.round(r.h)>=60&&Math.round(r.h)<=240?n=t?Math.round(r.h)-Ur*e:Math.round(r.h)+Ur*e:n=t?Math.round(r.h)+Ur*e:Math.round(r.h)-Ur*e,n<0?n+=360:n>=360&&(n-=360),n}function cl(r,e,t){if(r.h===0&&r.s===0)return r.s;var n;return t?n=r.s-al*e:e===sf?n=r.s+al:n=r.s+Ud*e,n>1&&(n=1),t&&e===rf&&n>.1&&(n=.1),n<.06&&(n=.06),Number(n.toFixed(2))}function ul(r,e,t){var n;return t?n=r.v+kd*e:n=r.v-zd*e,n>1&&(n=1),Number(n.toFixed(2))}function br(r){for(var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=[],n=Ti(r),i=rf;i>0;i-=1){var s=ol(n),o=kr(Ti({h:ll(s,i,!0),s:cl(s,i,!0),v:ul(s,i,!0)}));t.push(o)}t.push(kr(n));for(var a=1;a<=sf;a+=1){var l=ol(n),c=kr(Ti({h:ll(l,a),s:cl(l,a),v:ul(l,a)}));t.push(c)}return e.theme==="dark"?Bd.map(function(f){var u=f.index,h=f.opacity,d=kr(Gd(Ti(e.backgroundColor||"#141414"),Ti(t[u]),h*100));return d}):t}var Ns={red:"#F5222D",volcano:"#FA541C",orange:"#FA8C16",gold:"#FAAD14",yellow:"#FADB14",lime:"#A0D911",green:"#52C41A",cyan:"#13C2C2",blue:"#1890FF",geekblue:"#2F54EB",purple:"#722ED1",magenta:"#EB2F96",grey:"#666666"},Fs={},Us={};Object.keys(Ns).forEach(function(r){Fs[r]=br(Ns[r]),Fs[r].primary=Fs[r][5],Us[r]=br(Ns[r],{theme:"dark",backgroundColor:"#141414"}),Us[r].primary=Us[r][5]});var fl=[],Qi=[],Vd="insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";function Hd(){var r=document.createElement("style");return r.setAttribute("type","text/css"),r}function Wd(r,e){if(e=e||{},r===void 0)throw new Error(Vd);var t=e.prepend===!0?"prepend":"append",n=e.container!==void 0?e.container:document.querySelector("head"),i=fl.indexOf(n);i===-1&&(i=fl.push(n)-1,Qi[i]={});var s;return Qi[i]!==void 0&&Qi[i][t]!==void 0?s=Qi[i][t]:(s=Qi[i][t]=Hd(),t==="prepend"?n.insertBefore(s,n.childNodes[0]):n.appendChild(s)),r.charCodeAt(0)===65279&&(r=r.substr(1,r.length)),s.styleSheet?s.styleSheet.cssText+=r:s.textContent+=r,s}function hl(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){jd(r,i,t[i])})}return r}function jd(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function dl(r){return typeof r=="object"&&typeof r.name=="string"&&typeof r.theme=="string"&&(typeof r.icon=="object"||typeof r.icon=="function")}function Oa(r,e,t){return t?Vo(r.tag,hl({key:e},t,r.attrs),(r.children||[]).map(function(n,i){return Oa(n,"".concat(e,"-").concat(r.tag,"-").concat(i))})):Vo(r.tag,hl({key:e},r.attrs),(r.children||[]).map(function(n,i){return Oa(n,"".concat(e,"-").concat(r.tag,"-").concat(i))}))}function af(r){return br(r)[0]}function of(r){return r?Array.isArray(r)?r:[r]:[]}var Xd=`
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,pl=!1,qd=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Xd;ao(function(){pl||(typeof window<"u"&&window.document&&window.document.documentElement&&Wd(e,{prepend:!0}),pl=!0)})},$d=["icon","primaryColor","secondaryColor"];function Yd(r,e){if(r==null)return{};var t=Kd(r,e),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(i=0;i<s.length;i++)n=s[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function Kd(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,s;for(s=0;s<n.length;s++)i=n[s],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}function hs(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){Zd(r,i,t[i])})}return r}function Zd(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var pr={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function Jd(r){var e=r.primaryColor,t=r.secondaryColor;pr.primaryColor=e,pr.secondaryColor=t||af(e),pr.calculated=!!t}function Qd(){return hs({},pr)}var Wi=function(e,t){var n=hs({},e,t.attrs),i=n.icon,s=n.primaryColor,o=n.secondaryColor,a=Yd(n,$d),l=pr;if(s&&(l={primaryColor:s,secondaryColor:o||af(s)}),qd(),dl(i),!dl(i))return null;var c=i;return c&&typeof c.icon=="function"&&(c=hs({},c,{icon:c.icon(l.primaryColor,l.secondaryColor)})),Oa(c.icon,"svg-".concat(c.name),hs({},a,{"data-icon":c.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"}))};Wi.props={icon:Object,primaryColor:String,secondaryColor:String,focusable:String};Wi.inheritAttrs=!1;Wi.displayName="IconBase";Wi.getTwoToneColors=Qd;Wi.setTwoToneColors=Jd;const co=Wi;function ep(r,e){return rp(r)||ip(r,e)||np(r,e)||tp()}function tp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function np(r,e){if(r){if(typeof r=="string")return ml(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ml(r,e)}}function ml(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function ip(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],i=!0,s=!1,o,a;try{for(t=t.call(r);!(i=(o=t.next()).done)&&(n.push(o.value),!(e&&n.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&t.return!=null&&t.return()}finally{if(s)throw a}}return n}}function rp(r){if(Array.isArray(r))return r}function lf(r){var e=of(r),t=ep(e,2),n=t[0],i=t[1];return co.setTwoToneColors({primaryColor:n,secondaryColor:i})}function sp(){var r=co.getTwoToneColors();return r.calculated?[r.primaryColor,r.secondaryColor]:r.primaryColor}var ap=["class","icon","spin","rotate","tabindex","twoToneColor","onClick"];function op(r,e){return fp(r)||up(r,e)||cp(r,e)||lp()}function lp(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cp(r,e){if(r){if(typeof r=="string")return gl(r,e);var t=Object.prototype.toString.call(r).slice(8,-1);if(t==="Object"&&r.constructor&&(t=r.constructor.name),t==="Map"||t==="Set")return Array.from(r);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return gl(r,e)}}function gl(r,e){(e==null||e>r.length)&&(e=r.length);for(var t=0,n=new Array(e);t<e;t++)n[t]=r[t];return n}function up(r,e){var t=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(t!=null){var n=[],i=!0,s=!1,o,a;try{for(t=t.call(r);!(i=(o=t.next()).done)&&(n.push(o.value),!(e&&n.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&t.return!=null&&t.return()}finally{if(s)throw a}}return n}}function fp(r){if(Array.isArray(r))return r}function _l(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){Na(r,i,t[i])})}return r}function Na(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function hp(r,e){if(r==null)return{};var t=dp(r,e),n,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(i=0;i<s.length;i++)n=s[i],!(e.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(r,n)&&(t[n]=r[n])}return t}function dp(r,e){if(r==null)return{};var t={},n=Object.keys(r),i,s;for(s=0;s<n.length;s++)i=n[s],!(e.indexOf(i)>=0)&&(t[i]=r[i]);return t}lf("#1890ff");var ji=function(e,t){var n,i=_l({},e,t.attrs),s=i.class,o=i.icon,a=i.spin,l=i.rotate,c=i.tabindex,f=i.twoToneColor,u=i.onClick,h=hp(i,ap),d=(n={anticon:!0},Na(n,"anticon-".concat(o.name),Boolean(o.name)),Na(n,s,s),n),g=a===""||a||o.name==="loading"?"anticon-spin":"",m=c;m===void 0&&u&&(m=-1,h.tabindex=m);var p=l?{msTransform:"rotate(".concat(l,"deg)"),transform:"rotate(".concat(l,"deg)")}:void 0,_=of(f),M=op(_,2),y=M[0],x=M[1];return re("span",_l({role:"img","aria-label":o.name},h,{onClick:u,class:d}),[re(co,{class:g,icon:o,primaryColor:y,secondaryColor:x,style:p},null)])};ji.props={spin:Boolean,rotate:Number,icon:Object,twoToneColor:String};ji.displayName="AntdIcon";ji.inheritAttrs=!1;ji.getTwoToneColor=sp;ji.setTwoToneColor=lf;const rn=ji;function vl(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){pp(r,i,t[i])})}return r}function pp(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var uo=function(e,t){var n=vl({},e,t.attrs);return re(rn,vl({},n,{icon:Td}),null)};uo.displayName="LoadingOutlined";uo.inheritAttrs=!1;const Fa=uo;var mp={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"exclamation-circle",theme:"filled"};const gp=mp;function xl(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){_p(r,i,t[i])})}return r}function _p(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var fo=function(e,t){var n=xl({},e,t.attrs);return re(rn,xl({},n,{icon:gp}),null)};fo.displayName="ExclamationCircleFilled";fo.inheritAttrs=!1;const vp=fo;var xp={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"}}]},name:"close-circle",theme:"filled"};const yp=xp;function yl(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){bp(r,i,t[i])})}return r}function bp(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var ho=function(e,t){var n=yl({},e,t.attrs);return re(rn,yl({},n,{icon:yp}),null)};ho.displayName="CloseCircleFilled";ho.inheritAttrs=!1;const Mp=ho;var Sp={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"}}]},name:"check-circle",theme:"filled"};const wp=Sp;function bl(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){Tp(r,i,t[i])})}return r}function Tp(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var po=function(e,t){var n=bl({},e,t.attrs);return re(rn,bl({},n,{icon:wp}),null)};po.displayName="CheckCircleFilled";po.inheritAttrs=!1;const Ep=po;var Ap={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},name:"info-circle",theme:"filled"};const Cp=Ap;function Ml(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){Lp(r,i,t[i])})}return r}function Lp(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var mo=function(e,t){var n=Ml({},e,t.attrs);return re(rn,Ml({},n,{icon:Cp}),null)};mo.displayName="InfoCircleFilled";mo.inheritAttrs=!1;const Pp=mo;var cf=3,uf,Mt,Rp=1,ff="",hf="move-up",df=!1,pf=function(){return document.body},mf,gf=!1;function Dp(){return Rp++}function Ip(r){r.top!==void 0&&(uf=r.top,Mt=null),r.duration!==void 0&&(cf=r.duration),r.prefixCls!==void 0&&(ff=r.prefixCls),r.getContainer!==void 0&&(pf=r.getContainer,Mt=null),r.transitionName!==void 0&&(hf=r.transitionName,Mt=null,df=!0),r.maxCount!==void 0&&(mf=r.maxCount,Mt=null),r.rtl!==void 0&&(gf=r.rtl)}function Op(r,e){if(Mt){e(Mt);return}tf.newInstance({appContext:r.appContext,prefixCls:r.prefixCls||ff,rootPrefixCls:r.rootPrefixCls,transitionName:hf,hasTransitionName:df,style:{top:uf},getContainer:pf||r.getPopupContainer,maxCount:mf,name:"message"},function(t){if(Mt){e(Mt);return}Mt=t,e(t)})}var Np={info:Pp,success:Ep,error:Mp,warning:vp,loading:Fa};function Fp(r){var e=r.duration!==void 0?r.duration:cf,t=r.key||Dp(),n=new Promise(function(s){var o=function(){return typeof r.onClose=="function"&&r.onClose(),s(!0)};Op(r,function(a){a.notice({key:t,duration:e,style:r.style||{},class:r.class,content:function(c){var f,u=c.prefixCls,h=Np[r.type],d=h?re(h,null,null):"",g=Rr("".concat(u,"-custom-content"),(f={},$e(f,"".concat(u,"-").concat(r.type),r.type),$e(f,"".concat(u,"-rtl"),gf===!0),f));return re("div",{class:g},[typeof r.icon=="function"?r.icon():r.icon||d,re("span",null,[typeof r.content=="function"?r.content():r.content])])},onClose:o,onClick:r.onClick})})}),i=function(){Mt&&Mt.removeNotice(t)};return i.then=function(s,o){return n.then(s,o)},i.promise=n,i}function Up(r){return Object.prototype.toString.call(r)==="[object Object]"&&!!r.content}var vs={open:Fp,config:Ip,destroy:function(e){if(Mt)if(e){var t=Mt,n=t.removeNotice;n(e)}else{var i=Mt,s=i.destroy;s(),Mt=null}}};function kp(r,e){r[e]=function(t,n,i){return Up(t)?r.open(Ae(Ae({},t),{},{type:e})):(typeof n=="function"&&(i=n,n=void 0),r.open({content:t,duration:n,type:e,onClose:i}))}}["success","info","warning","error","loading"].forEach(function(r){return kp(vs,r)});vs.warn=vs.warning;const zp=vs;var Ua={},Bp={get exports(){return Ua},set exports(r){Ua=r}},ka={},Gp={get exports(){return ka},set exports(r){ka=r}};(function(r){function e(t){return r.exports=e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r.exports.__esModule=!0,r.exports.default=r.exports,e(t)}r.exports=e,r.exports.__esModule=!0,r.exports.default=r.exports})(Gp);(function(r){var e=ka.default;function t(){r.exports=t=function(){return n},r.exports.__esModule=!0,r.exports.default=r.exports;var n={},i=Object.prototype,s=i.hasOwnProperty,o=Object.defineProperty||function(P,R,F){P[R]=F.value},a=typeof Symbol=="function"?Symbol:{},l=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function u(P,R,F){return Object.defineProperty(P,R,{value:F,enumerable:!0,configurable:!0,writable:!0}),P[R]}try{u({},"")}catch{u=function(F,k,j){return F[k]=j}}function h(P,R,F,k){var j=R&&R.prototype instanceof m?R:m,H=Object.create(j.prototype),se=new K(k||[]);return o(H,"_invoke",{value:v(P,F,se)}),H}function d(P,R,F){try{return{type:"normal",arg:P.call(R,F)}}catch(k){return{type:"throw",arg:k}}}n.wrap=h;var g={};function m(){}function p(){}function _(){}var M={};u(M,l,function(){return this});var y=Object.getPrototypeOf,x=y&&y(y(N([])));x&&x!==i&&s.call(x,l)&&(M=x);var b=_.prototype=m.prototype=Object.create(M);function w(P){["next","throw","return"].forEach(function(R){u(P,R,function(F){return this._invoke(R,F)})})}function C(P,R){function F(j,H,se,B){var J=d(P[j],P,H);if(J.type!=="throw"){var te=J.arg,ne=te.value;return ne&&e(ne)=="object"&&s.call(ne,"__await")?R.resolve(ne.__await).then(function(W){F("next",W,se,B)},function(W){F("throw",W,se,B)}):R.resolve(ne).then(function(W){te.value=W,se(te)},function(W){return F("throw",W,se,B)})}B(J.arg)}var k;o(this,"_invoke",{value:function(H,se){function B(){return new R(function(J,te){F(H,se,J,te)})}return k=k?k.then(B,B):B()}})}function v(P,R,F){var k="suspendedStart";return function(j,H){if(k==="executing")throw new Error("Generator is already running");if(k==="completed"){if(j==="throw")throw H;return U()}for(F.method=j,F.arg=H;;){var se=F.delegate;if(se){var B=E(se,F);if(B){if(B===g)continue;return B}}if(F.method==="next")F.sent=F._sent=F.arg;else if(F.method==="throw"){if(k==="suspendedStart")throw k="completed",F.arg;F.dispatchException(F.arg)}else F.method==="return"&&F.abrupt("return",F.arg);k="executing";var J=d(P,R,F);if(J.type==="normal"){if(k=F.done?"completed":"suspendedYield",J.arg===g)continue;return{value:J.arg,done:F.done}}J.type==="throw"&&(k="completed",F.method="throw",F.arg=J.arg)}}}function E(P,R){var F=R.method,k=P.iterator[F];if(k===void 0)return R.delegate=null,F==="throw"&&P.iterator.return&&(R.method="return",R.arg=void 0,E(P,R),R.method==="throw")||F!=="return"&&(R.method="throw",R.arg=new TypeError("The iterator does not provide a '"+F+"' method")),g;var j=d(k,P.iterator,R.arg);if(j.type==="throw")return R.method="throw",R.arg=j.arg,R.delegate=null,g;var H=j.arg;return H?H.done?(R[P.resultName]=H.value,R.next=P.nextLoc,R.method!=="return"&&(R.method="next",R.arg=void 0),R.delegate=null,g):H:(R.method="throw",R.arg=new TypeError("iterator result is not an object"),R.delegate=null,g)}function I(P){var R={tryLoc:P[0]};1 in P&&(R.catchLoc=P[1]),2 in P&&(R.finallyLoc=P[2],R.afterLoc=P[3]),this.tryEntries.push(R)}function Y(P){var R=P.completion||{};R.type="normal",delete R.arg,P.completion=R}function K(P){this.tryEntries=[{tryLoc:"root"}],P.forEach(I,this),this.reset(!0)}function N(P){if(P){var R=P[l];if(R)return R.call(P);if(typeof P.next=="function")return P;if(!isNaN(P.length)){var F=-1,k=function j(){for(;++F<P.length;)if(s.call(P,F))return j.value=P[F],j.done=!1,j;return j.value=void 0,j.done=!0,j};return k.next=k}}return{next:U}}function U(){return{value:void 0,done:!0}}return p.prototype=_,o(b,"constructor",{value:_,configurable:!0}),o(_,"constructor",{value:p,configurable:!0}),p.displayName=u(_,f,"GeneratorFunction"),n.isGeneratorFunction=function(P){var R=typeof P=="function"&&P.constructor;return!!R&&(R===p||(R.displayName||R.name)==="GeneratorFunction")},n.mark=function(P){return Object.setPrototypeOf?Object.setPrototypeOf(P,_):(P.__proto__=_,u(P,f,"GeneratorFunction")),P.prototype=Object.create(b),P},n.awrap=function(P){return{__await:P}},w(C.prototype),u(C.prototype,c,function(){return this}),n.AsyncIterator=C,n.async=function(P,R,F,k,j){j===void 0&&(j=Promise);var H=new C(h(P,R,F,k),j);return n.isGeneratorFunction(R)?H:H.next().then(function(se){return se.done?se.value:H.next()})},w(b),u(b,f,"Generator"),u(b,l,function(){return this}),u(b,"toString",function(){return"[object Generator]"}),n.keys=function(P){var R=Object(P),F=[];for(var k in R)F.push(k);return F.reverse(),function j(){for(;F.length;){var H=F.pop();if(H in R)return j.value=H,j.done=!1,j}return j.done=!0,j}},n.values=N,K.prototype={constructor:K,reset:function(R){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(Y),!R)for(var F in this)F.charAt(0)==="t"&&s.call(this,F)&&!isNaN(+F.slice(1))&&(this[F]=void 0)},stop:function(){this.done=!0;var R=this.tryEntries[0].completion;if(R.type==="throw")throw R.arg;return this.rval},dispatchException:function(R){if(this.done)throw R;var F=this;function k(te,ne){return se.type="throw",se.arg=R,F.next=te,ne&&(F.method="next",F.arg=void 0),!!ne}for(var j=this.tryEntries.length-1;j>=0;--j){var H=this.tryEntries[j],se=H.completion;if(H.tryLoc==="root")return k("end");if(H.tryLoc<=this.prev){var B=s.call(H,"catchLoc"),J=s.call(H,"finallyLoc");if(B&&J){if(this.prev<H.catchLoc)return k(H.catchLoc,!0);if(this.prev<H.finallyLoc)return k(H.finallyLoc)}else if(B){if(this.prev<H.catchLoc)return k(H.catchLoc,!0)}else{if(!J)throw new Error("try statement without catch or finally");if(this.prev<H.finallyLoc)return k(H.finallyLoc)}}}},abrupt:function(R,F){for(var k=this.tryEntries.length-1;k>=0;--k){var j=this.tryEntries[k];if(j.tryLoc<=this.prev&&s.call(j,"finallyLoc")&&this.prev<j.finallyLoc){var H=j;break}}H&&(R==="break"||R==="continue")&&H.tryLoc<=F&&F<=H.finallyLoc&&(H=null);var se=H?H.completion:{};return se.type=R,se.arg=F,H?(this.method="next",this.next=H.finallyLoc,g):this.complete(se)},complete:function(R,F){if(R.type==="throw")throw R.arg;return R.type==="break"||R.type==="continue"?this.next=R.arg:R.type==="return"?(this.rval=this.arg=R.arg,this.method="return",this.next="end"):R.type==="normal"&&F&&(this.next=F),g},finish:function(R){for(var F=this.tryEntries.length-1;F>=0;--F){var k=this.tryEntries[F];if(k.finallyLoc===R)return this.complete(k.completion,k.afterLoc),Y(k),g}},catch:function(R){for(var F=this.tryEntries.length-1;F>=0;--F){var k=this.tryEntries[F];if(k.tryLoc===R){var j=k.completion;if(j.type==="throw"){var H=j.arg;Y(k)}return H}}throw new Error("illegal catch attempt")},delegateYield:function(R,F,k){return this.delegate={iterator:N(R),resultName:F,nextLoc:k},this.method==="next"&&(this.arg=void 0),g}},n}r.exports=t,r.exports.__esModule=!0,r.exports.default=r.exports})(Bp);var ks=Ua();try{regeneratorRuntime=ks}catch{typeof globalThis=="object"?globalThis.regeneratorRuntime=ks:Function("r","regeneratorRuntime = r")(ks)}var Vp={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"};const Hp=Vp;function Sl(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){Wp(r,i,t[i])})}return r}function Wp(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var go=function(e,t){var n=Sl({},e,t.attrs);return re(rn,Sl({},n,{icon:Hp}),null)};go.displayName="CheckCircleOutlined";go.inheritAttrs=!1;const jp=go;var Xp={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"}}]},name:"info-circle",theme:"outlined"};const qp=Xp;function wl(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){$p(r,i,t[i])})}return r}function $p(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var _o=function(e,t){var n=wl({},e,t.attrs);return re(rn,wl({},n,{icon:qp}),null)};_o.displayName="InfoCircleOutlined";_o.inheritAttrs=!1;const Yp=_o;var Kp={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"}},{tag:"path",attrs:{d:"M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"close-circle",theme:"outlined"};const Zp=Kp;function Tl(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){Jp(r,i,t[i])})}return r}function Jp(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var vo=function(e,t){var n=Tl({},e,t.attrs);return re(rn,Tl({},n,{icon:Zp}),null)};vo.displayName="CloseCircleOutlined";vo.inheritAttrs=!1;const Qp=vo;var em={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"}}]},name:"exclamation-circle",theme:"outlined"};const tm=em;function El(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){nm(r,i,t[i])})}return r}function nm(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var xo=function(e,t){var n=El({},e,t.attrs);return re(rn,El({},n,{icon:tm}),null)};xo.displayName="ExclamationCircleOutlined";xo.inheritAttrs=!1;const im=xo;var rm={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"};const sm=rm;function Al(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},n=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(t).filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),n.forEach(function(i){am(r,i,t[i])})}return r}function am(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var yo=function(e,t){var n=Al({},e,t.attrs);return re(rn,Al({},n,{icon:sm}),null)};yo.displayName="CloseOutlined";yo.inheritAttrs=!1;const om=yo;var Gn={},_f=4.5,vf="24px",xf="24px",za="",yf="topRight",bf=function(){return document.body},Mf=null,Ba=!1,Sf;function lm(r){var e=r.duration,t=r.placement,n=r.bottom,i=r.top,s=r.getContainer,o=r.closeIcon,a=r.prefixCls;a!==void 0&&(za=a),e!==void 0&&(_f=e),t!==void 0&&(yf=t),n!==void 0&&(xf=typeof n=="number"?"".concat(n,"px"):n),i!==void 0&&(vf=typeof i=="number"?"".concat(i,"px"):i),s!==void 0&&(bf=s),o!==void 0&&(Mf=o),r.rtl!==void 0&&(Ba=r.rtl),r.maxCount!==void 0&&(Sf=r.maxCount)}function cm(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vf,t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:xf,n;switch(r){case"topLeft":n={left:"0px",top:e,bottom:"auto"};break;case"topRight":n={right:"0px",top:e,bottom:"auto"};break;case"bottomLeft":n={left:"0px",top:"auto",bottom:t};break;default:n={right:"0px",top:"auto",bottom:t};break}return n}function um(r,e){var t=r.prefixCls,n=r.placement,i=n===void 0?yf:n,s=r.getContainer,o=s===void 0?bf:s,a=r.top,l=r.bottom,c=r.closeIcon,f=c===void 0?Mf:c,u=r.appContext,h=Tm(),d=h.getPrefixCls,g=d("notification",t||za),m="".concat(g,"-").concat(i,"-").concat(Ba),p=Gn[m];if(p){Promise.resolve(p).then(function(M){e(M)});return}var _=Rr("".concat(g,"-").concat(i),$e({},"".concat(g,"-rtl"),Ba===!0));tf.newInstance({name:"notification",prefixCls:t||za,class:_,style:cm(i,a,l),appContext:u,getContainer:o,closeIcon:function(y){var x=y.prefixCls,b=re("span",{class:"".concat(x,"-close-x")},[fr(f,{},re(om,{class:"".concat(x,"-close-icon")},null))]);return b},maxCount:Sf,hasTransitionName:!0},function(M){Gn[m]=M,e(M)})}var fm={success:jp,info:Yp,error:Qp,warning:im};function hm(r){var e=r.icon,t=r.type,n=r.description,i=r.message,s=r.btn,o=r.duration===void 0?_f:r.duration;um(r,function(a){a.notice({content:function(c){var f=c.prefixCls,u="".concat(f,"-notice"),h=null;if(e)h=function(){return re("span",{class:"".concat(u,"-icon")},[fr(e)])};else if(t){var d=fm[t];h=function(){return re(d,{class:"".concat(u,"-icon ").concat(u,"-icon-").concat(t)},null)}}return re("div",{class:h?"".concat(u,"-with-icon"):""},[h&&h(),re("div",{class:"".concat(u,"-message")},[!n&&h?re("span",{class:"".concat(u,"-message-single-line-auto-margin")},null):null,fr(i)]),re("div",{class:"".concat(u,"-description")},[fr(n)]),s?re("span",{class:"".concat(u,"-btn")},[fr(s)]):null])},duration:o,closable:!0,onClose:r.onClose,onClick:r.onClick,key:r.key,style:r.style||{},class:r.class})})}var Mr={open:hm,close:function(e){Object.keys(Gn).forEach(function(t){return Promise.resolve(Gn[t]).then(function(n){n.removeNotice(e)})})},config:lm,destroy:function(){Object.keys(Gn).forEach(function(e){Promise.resolve(Gn[e]).then(function(t){t.destroy()}),delete Gn[e]})}},dm=["success","info","warning","error"];dm.forEach(function(r){Mr[r]=function(e){return Mr.open(Ae(Ae({},e),{},{type:r}))}});Mr.warn=Mr.warning;const pm=Mr;function wf(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var mm="vc-util-key";function Tf(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=r.mark;return e?e.startsWith("data-")?e:"data-".concat(e):mm}function bo(r){if(r.attachTo)return r.attachTo;var e=document.querySelector("head");return e||document.body}function Cl(r){var e,t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!wf())return null;var n=document.createElement("style");if((e=t.csp)!==null&&e!==void 0&&e.nonce){var i;n.nonce=(i=t.csp)===null||i===void 0?void 0:i.nonce}n.innerHTML=r;var s=bo(t),o=s.firstChild;return t.prepend&&s.prepend?s.prepend(n):t.prepend&&o?s.insertBefore(n,o):s.appendChild(n),n}var Ga=new Map;function gm(r){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=bo(e);return Array.from(Ga.get(t).children).find(function(n){return n.tagName==="STYLE"&&n.getAttribute(Tf(e))===r})}function _m(r,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=bo(t);if(!Ga.has(n)){var i=Cl("",t),s=i.parentNode;Ga.set(n,s),s.removeChild(i)}var o=gm(e,t);if(o){var a,l;if((a=t.csp)!==null&&a!==void 0&&a.nonce&&o.nonce!==((l=t.csp)===null||l===void 0?void 0:l.nonce)){var c;o.nonce=(c=t.csp)===null||c===void 0?void 0:c.nonce}return o.innerHTML!==r&&(o.innerHTML=r),o}var f=Cl(r,t);return f.setAttribute(Tf(t),e),f}const Ef=function(r,e,t){ef(r,"[ant-design-vue: ".concat(e,"] ").concat(t))};var vm="-ant-".concat(Date.now(),"-").concat(Math.random());function xm(r,e){var t={},n=function(f,u){var h=f.clone();return h=(u==null?void 0:u(h))||h,h.toRgbString()},i=function(f,u){var h=new Os(f),d=br(h.toRgbString());t["".concat(u,"-color")]=n(h),t["".concat(u,"-color-disabled")]=d[1],t["".concat(u,"-color-hover")]=d[4],t["".concat(u,"-color-active")]=d[6],t["".concat(u,"-color-outline")]=h.clone().setAlpha(.2).toRgbString(),t["".concat(u,"-color-deprecated-bg")]=d[1],t["".concat(u,"-color-deprecated-border")]=d[3]};if(e.primaryColor){i(e.primaryColor,"primary");var s=new Os(e.primaryColor),o=br(s.toRgbString());o.forEach(function(c,f){t["primary-".concat(f+1)]=c}),t["primary-color-deprecated-l-35"]=n(s,function(c){return c.lighten(35)}),t["primary-color-deprecated-l-20"]=n(s,function(c){return c.lighten(20)}),t["primary-color-deprecated-t-20"]=n(s,function(c){return c.tint(20)}),t["primary-color-deprecated-t-50"]=n(s,function(c){return c.tint(50)}),t["primary-color-deprecated-f-12"]=n(s,function(c){return c.setAlpha(c.getAlpha()*.12)});var a=new Os(o[0]);t["primary-color-active-deprecated-f-30"]=n(a,function(c){return c.setAlpha(c.getAlpha()*.3)}),t["primary-color-active-deprecated-d-02"]=n(a,function(c){return c.darken(2)})}e.successColor&&i(e.successColor,"success"),e.warningColor&&i(e.warningColor,"warning"),e.errorColor&&i(e.errorColor,"error"),e.infoColor&&i(e.infoColor,"info");var l=Object.keys(t).map(function(c){return"--".concat(r,"-").concat(c,": ").concat(t[c],";")});wf()?_m(`
  :root {
    `.concat(l.join(`
`),`
  }
  `),"".concat(vm,"-dynamic-theme")):Ef(!1,"ConfigProvider","SSR do not support dynamic theme with css variables.")}var ym=Symbol("GlobalFormContextKey"),bm=function(e){so(ym,e)},Mm=function(){return{getTargetContainer:{type:Function},getPopupContainer:{type:Function},prefixCls:String,getPrefixCls:{type:Function},renderEmpty:{type:Function},transformCellText:{type:Function},csp:{type:Object,default:void 0},input:{type:Object},autoInsertSpaceInButton:{type:Boolean,default:void 0},locale:{type:Object,default:void 0},pageHeader:{type:Object},componentSize:{type:String},direction:{type:String},space:{type:Object},virtual:{type:Boolean,default:void 0},dropdownMatchSelectWidth:{type:[Number,Boolean],default:!0},form:{type:Object,default:void 0},notUpdateGlobalConfig:Boolean}},Sm="ant";function Pi(){return Dt.prefixCls||Sm}var Va=Rn({}),Af=Rn({}),Dt=Rn({});bs(function(){Zn(Dt,Va,Af),Dt.prefixCls=Pi(),Dt.getPrefixCls=function(r,e){return e||(r?"".concat(Dt.prefixCls,"-").concat(r):Dt.prefixCls)},Dt.getRootPrefixCls=function(r,e){return r||(Dt.prefixCls?Dt.prefixCls:e&&e.includes("-")?e.replace(/^(.*)-[^-]*$/,"$1"):Pi())}});var zs,wm=function(e){zs&&zs(),zs=bs(function(){Zn(Af,Rn(e)),Zn(Dt,Rn(e))}),e.theme&&xm(Pi(),e.theme)},Tm=function(){return{getPrefixCls:function(t,n){return n||(t?"".concat(Pi(),"-").concat(t):Pi())},getRootPrefixCls:function(t,n){return t||(Dt.prefixCls?Dt.prefixCls:n&&n.includes("-")?n.replace(/^(.*)-[^-]*$/,"$1"):Pi())}}},mr=Yt({compatConfig:{MODE:3},name:"AConfigProvider",inheritAttrs:!1,props:Mm(),setup:function(e,t){var n=t.slots,i=function(u,h){var d=e.prefixCls,g=d===void 0?"ant":d;return h||(u?"".concat(g,"-").concat(u):g)},s=function(u){var h=e.renderEmpty||n.renderEmpty||Qu;return h(u)},o=function(u,h){var d=e.prefixCls;if(h)return h;var g=d||i("");return u?"".concat(g,"-").concat(u):g},a=Rn(Ae(Ae({},e),{},{getPrefixCls:o,renderEmpty:s}));Object.keys(e).forEach(function(f){xr(function(){return e[f]},function(){a[f]=e[f]})}),e.notUpdateGlobalConfig||(Zn(Va,a),xr(a,function(){Zn(Va,a)}));var l=qe(function(){var f={};if(e.locale){var u,h;f=((u=e.locale.Form)===null||u===void 0?void 0:u.defaultValidateMessages)||((h=Aa.Form)===null||h===void 0?void 0:h.defaultValidateMessages)||{}}return e.form&&e.form.validateMessages&&(f=Ae(Ae({},f),e.form.validateMessages)),f});bm({validateMessages:l}),so("configProvider",a);var c=function(u){var h;return re(xd,{locale:e.locale||u,ANT_MARK__:La},{default:function(){return[(h=n.default)===null||h===void 0?void 0:h.call(n)]}})};return bs(function(){e.direction&&(zp.config({rtl:e.direction==="rtl"}),pm.config({rtl:e.direction==="rtl"}))}),function(){return re(zu,{children:function(u,h,d){return c(d)}},null)}}}),Em=Rn({getPrefixCls:function(e,t){return t||(e?"ant-".concat(e):"ant")},renderEmpty:Qu,direction:"ltr"});mr.config=wm;mr.install=function(r){r.component(mr.name,mr)};const ai=function(r,e){var t=Eu("configProvider",Em),n=qe(function(){return t.getPrefixCls(r,e.prefixCls)}),i=qe(function(){var M;return(M=e.direction)!==null&&M!==void 0?M:t.direction}),s=qe(function(){return t.getPrefixCls()}),o=qe(function(){return t.autoInsertSpaceInButton}),a=qe(function(){return t.renderEmpty}),l=qe(function(){return t.space}),c=qe(function(){return t.pageHeader}),f=qe(function(){return t.form}),u=qe(function(){return e.getTargetContainer||t.getTargetContainer}),h=qe(function(){return e.getPopupContainer||t.getPopupContainer}),d=qe(function(){var M;return(M=e.dropdownMatchSelectWidth)!==null&&M!==void 0?M:t.dropdownMatchSelectWidth}),g=qe(function(){return(e.virtual===void 0?t.virtual!==!1:e.virtual!==!1)&&d.value!==!1}),m=qe(function(){return e.size||t.componentSize}),p=qe(function(){var M;return e.autocomplete||((M=t.input)===null||M===void 0?void 0:M.autocomplete)}),_=qe(function(){return t.csp});return{configProvider:t,prefixCls:n,direction:i,size:m,getTargetContainer:u,getPopupContainer:h,space:l,pageHeader:c,form:f,autoInsertSpaceInButton:o,renderEmpty:a,virtual:g,dropdownMatchSelectWidth:d,rootPrefixCls:s,getPrefixCls:t.getPrefixCls,autocomplete:p,csp:_}};var Bs={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},Gs={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},Ei=[],Ai=[];function Am(){var r=document.createElement("div"),e=r.style;"AnimationEvent"in window||(delete Bs.animationstart.animation,delete Gs.animationend.animation),"TransitionEvent"in window||(delete Bs.transitionstart.transition,delete Gs.transitionend.transition);function t(n,i){for(var s in n)if(n.hasOwnProperty(s)){var o=n[s];for(var a in o)if(a in e){i.push(o[a]);break}}}t(Bs,Ei),t(Gs,Ai)}typeof window<"u"&&typeof document<"u"&&Am();function Ll(r,e,t){r.addEventListener(e,t,!1)}function Pl(r,e,t){r.removeEventListener(e,t,!1)}var Cm={startEvents:Ei,addStartEventListener:function(e,t){if(Ei.length===0){setTimeout(t,0);return}Ei.forEach(function(n){Ll(e,n,t)})},removeStartEventListener:function(e,t){Ei.length!==0&&Ei.forEach(function(n){Pl(e,n,t)})},endEvents:Ai,addEndEventListener:function(e,t){if(Ai.length===0){setTimeout(t,0);return}Ai.forEach(function(n){Ll(e,n,t)})},removeEndEventListener:function(e,t){Ai.length!==0&&Ai.forEach(function(n){Pl(e,n,t)})}};const zr=Cm;var yn;function Rl(r){return!r||r.offsetParent===null}function Lm(r){var e=(r||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return e&&e[1]&&e[2]&&e[3]?!(e[1]===e[2]&&e[2]===e[3]):!0}const Pm=Yt({compatConfig:{MODE:3},name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(e,t){var n=t.slots,i=t.expose,s=yh(),o=ai("",e),a=o.csp,l=o.prefixCls;i({csp:a});var c=null,f=null,u=null,h=!1,d=null,g=!1,m=function(w){if(!g){var C=$o(s);!w||w.target!==C||h||y(C)}},p=function(w){!w||w.animationName!=="fadeEffect"||y(w.target)},_=function(){var w=e.insertExtraNode;return w?"".concat(l.value,"-click-animating"):"".concat(l.value,"-click-animating-without-extra-node")},M=function(w,C){var v=e.insertExtraNode,E=e.disabled;if(!(E||!w||Rl(w)||w.className.indexOf("-leave")>=0)){d=document.createElement("div"),d.className="".concat(l.value,"-click-animating-node");var I=_();if(w.removeAttribute(I),w.setAttribute(I,"true"),yn=yn||document.createElement("style"),C&&C!=="#ffffff"&&C!=="rgb(255, 255, 255)"&&Lm(C)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(C)&&C!=="transparent"){var Y;(Y=a.value)!==null&&Y!==void 0&&Y.nonce&&(yn.nonce=a.value.nonce),d.style.borderColor=C,yn.innerHTML=`
        [`.concat(l.value,"-click-animating-without-extra-node='true']::after, .").concat(l.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(C,`;
        }`),document.body.contains(yn)||document.body.appendChild(yn)}v&&w.appendChild(d),zr.addStartEventListener(w,m),zr.addEndEventListener(w,p)}},y=function(w){if(!(!w||w===d||!(w instanceof Element))){var C=e.insertExtraNode,v=_();w.setAttribute(v,"false"),yn&&(yn.innerHTML=""),C&&d&&w.contains(d)&&w.removeChild(d),zr.removeStartEventListener(w,m),zr.removeEndEventListener(w,p)}},x=function(w){if(!(!w||!w.getAttribute||w.getAttribute("disabled")||w.className.indexOf("disabled")>=0)){var C=function(E){if(!(E.target.tagName==="INPUT"||Rl(E.target))){y(w);var I=getComputedStyle(w).getPropertyValue("border-top-color")||getComputedStyle(w).getPropertyValue("border-color")||getComputedStyle(w).getPropertyValue("background-color");f=setTimeout(function(){return M(w,I)},0),Ea.cancel(u),h=!0,u=Ea(function(){h=!1},10)}};return w.addEventListener("click",C,!0),{cancel:function(){w.removeEventListener("click",C,!0)}}}};return Pr(function(){ao(function(){var b=$o(s);b.nodeType===1&&(c=x(b))})}),Au(function(){c&&c.cancel(),clearTimeout(f),g=!0}),function(){var b;return(b=n.default)===null||b===void 0?void 0:b.call(n)[0]}}});var Rm=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:Ca.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const Dm=Rm;var Dl=function(e){e&&(e.style.width="0px",e.style.opacity="0",e.style.transform="scale(0)")},Il=function(e){ao(function(){e&&(e.style.width="".concat(e.scrollWidth,"px"),e.style.opacity="1",e.style.transform="scale(1)")})},Ol=function(e){e&&e.style&&(e.style.width=null,e.style.opacity=null,e.style.transform=null)};const Im=Yt({compatConfig:{MODE:3},name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(e){return function(){var t=e.existIcon,n=e.prefixCls,i=e.loading;if(t)return re("span",{class:"".concat(n,"-loading-icon")},[re(Fa,null,null)]);var s=!!i;return re(gh,{name:"".concat(n,"-loading-icon-motion"),onBeforeEnter:Dl,onEnter:Il,onAfterEnter:Ol,onBeforeLeave:Il,onLeave:function(a){setTimeout(function(){Dl(a)})},onAfterLeave:Ol},{default:function(){return[s?re("span",{class:"".concat(n,"-loading-icon")},[re(Fa,null,null)]):null]}})}}});var Nl=/^[\u4e00-\u9fa5]{2}$/,Fl=Nl.test.bind(Nl);function Br(r){return r==="text"||r==="link"}const gr=Yt({compatConfig:{MODE:3},name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:kh(Dm(),{type:"default"}),slots:["icon"],setup:function(e,t){var n=t.slots,i=t.attrs,s=t.emit,o=ai("btn",e),a=o.prefixCls,l=o.autoInsertSpaceInButton,c=o.direction,f=o.size,u=Hn(null),h=Hn(void 0),d=!1,g=Hn(!1),m=Hn(!1),p=qe(function(){return l.value!==!1}),_=qe(function(){return Kn(e.loading)==="object"&&e.loading.delay?e.loading.delay||!0:!!e.loading});xr(_,function(w){clearTimeout(h.value),typeof _.value=="number"?h.value=setTimeout(function(){g.value=w},_.value):g.value=w},{immediate:!0});var M=qe(function(){var w,C=e.type,v=e.shape,E=v===void 0?"default":v,I=e.ghost,Y=e.block,K=e.danger,N=a.value,U={large:"lg",small:"sm",middle:void 0},P=f.value,R=P&&U[P]||"";return w={},$e(w,"".concat(N),!0),$e(w,"".concat(N,"-").concat(C),C),$e(w,"".concat(N,"-").concat(E),E!=="default"&&E),$e(w,"".concat(N,"-").concat(R),R),$e(w,"".concat(N,"-loading"),g.value),$e(w,"".concat(N,"-background-ghost"),I&&!Br(C)),$e(w,"".concat(N,"-two-chinese-chars"),m.value&&p.value),$e(w,"".concat(N,"-block"),Y),$e(w,"".concat(N,"-dangerous"),!!K),$e(w,"".concat(N,"-rtl"),c.value==="rtl"),w}),y=function(){var C=u.value;if(!(!C||l.value===!1)){var v=C.textContent;d&&Fl(v)?m.value||(m.value=!0):m.value&&(m.value=!1)}},x=function(C){if(g.value||e.disabled){C.preventDefault();return}s("click",C)},b=function(C,v){var E=v?" ":"";if(C.type===Tu){var I=C.children.trim();return Fl(I)&&(I=I.split("").join(E)),re("span",null,[I])}return C};return bs(function(){Ef(!(e.ghost&&Br(e.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),Pr(y),bh(y),Au(function(){h.value&&clearTimeout(h.value)}),function(){var w,C,v=e.icon,E=v===void 0?(w=n.icon)===null||w===void 0?void 0:w.call(n):v,I=Pu((C=n.default)===null||C===void 0?void 0:C.call(n));d=I.length===1&&!E&&!Br(e.type);var Y=e.type,K=e.htmlType,N=e.disabled,U=e.href,P=e.title,R=e.target,F=e.onMousedown,k=g.value?"loading":E,j=Ae(Ae({},i),{},{title:P,disabled:N,class:[M.value,i.class,$e({},"".concat(a.value,"-icon-only"),I.length===0&&!!k)],onClick:x,onMousedown:F});N||delete j.disabled;var H=E&&!g.value?E:re(Im,{existIcon:!!E,prefixCls:a.value,loading:!!g.value},null),se=I.map(function(J){return b(J,d&&p.value)});if(U!==void 0)return re("a",Ae(Ae({},j),{},{href:U,target:R,ref:u}),[H,se]);var B=re("button",Ae(Ae({},j),{},{ref:u,type:K}),[H,se]);return Br(Y)?B:re(Pm,{ref:"wave",disabled:!!g.value},{default:function(){return[B]}})}}});function Ul(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,Cu(n.key),n)}}function Om(r,e,t){return e&&Ul(r.prototype,e),t&&Ul(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function Nm(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var Fm=Om(function r(e){Nm(this,r),this.error=new Error("unreachable case: ".concat(JSON.stringify(e)))}),Um=function(){return{prefixCls:String,size:{type:String}}};const Ha=Yt({compatConfig:{MODE:3},name:"AButtonGroup",props:Um(),setup:function(e,t){var n=t.slots,i=ai("btn-group",e),s=i.prefixCls,o=i.direction,a=qe(function(){var l,c=e.size,f="";switch(c){case"large":f="lg";break;case"small":f="sm";break;case"middle":case void 0:break;default:console.warn(new Fm(c).error)}return l={},$e(l,"".concat(s.value),!0),$e(l,"".concat(s.value,"-").concat(f),f),$e(l,"".concat(s.value,"-rtl"),o.value==="rtl"),l});return function(){var l;return re("div",{class:a.value},[Pu((l=n.default)===null||l===void 0?void 0:l.call(n))])}}});gr.Group=Ha;gr.install=function(r){return r.component(gr.name,gr),r.component(Ha.name,Ha),r};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mo="149",ci={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},km=0,kl=1,zm=2,Cf=1,Bm=2,hr=3,xn=0,Ot=1,gn=2,Pn=0,Ri=1,zl=2,Bl=3,Gl=4,Gm=5,Ci=100,Vm=101,Hm=102,Vl=103,Hl=104,Wm=200,jm=201,Xm=202,qm=203,Lf=204,Pf=205,$m=206,Ym=207,Km=208,Zm=209,Jm=210,Qm=0,eg=1,tg=2,Wa=3,ng=4,ig=5,rg=6,sg=7,Rf=0,ag=1,og=2,vn=0,lg=1,cg=2,ug=3,fg=4,hg=5,Df=300,Fi=301,Ui=302,ja=303,Xa=304,Ss=306,ki=1e3,Bt=1001,xs=1002,lt=1003,qa=1004,ds=1005,Tt=1006,If=1007,Qn=1008,ei=1009,dg=1010,pg=1011,Of=1012,mg=1013,jn=1014,Ln=1015,Sr=1016,gg=1017,_g=1018,Di=1020,vg=1021,Gt=1023,xg=1024,yg=1025,$n=1026,zi=1027,bg=1028,Mg=1029,Sg=1030,wg=1031,Tg=1033,Vs=33776,Hs=33777,Ws=33778,js=33779,Wl=35840,jl=35841,Xl=35842,ql=35843,Eg=36196,$l=37492,Yl=37496,Kl=37808,Zl=37809,Jl=37810,Ql=37811,ec=37812,tc=37813,nc=37814,ic=37815,rc=37816,sc=37817,ac=37818,oc=37819,lc=37820,cc=37821,Xs=36492,Ag=36283,uc=36284,fc=36285,hc=36286,wr=2300,Bi=2301,qs=2302,dc=2400,pc=2401,mc=2402,Cg=2500,Lg=0,Nf=1,$a=2,ti=3e3,ze=3001,Pg=3200,Rg=3201,Ff=0,Dg=1,Jt="srgb",Tr="srgb-linear",$s=7680,Ig=519,Ya=35044,gc="300 es",Ka=1035;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _c=1234567;const _r=Math.PI/180,Er=180/Math.PI;function qt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dt[r&255]+dt[r>>8&255]+dt[r>>16&255]+dt[r>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]).toLowerCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function So(r,e){return(r%e+e)%e}function Og(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function Ng(r,e,t){return r!==e?(t-r)/(e-r):0}function vr(r,e,t){return(1-t)*r+t*e}function Fg(r,e,t,n){return vr(r,e,1-Math.exp(-t*n))}function Ug(r,e=1){return e-Math.abs(So(r,e*2)-e)}function kg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function zg(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Bg(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Gg(r,e){return r+Math.random()*(e-r)}function Vg(r){return r*(.5-Math.random())}function Hg(r){r!==void 0&&(_c=r);let e=_c+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Wg(r){return r*_r}function jg(r){return r*Er}function Za(r){return(r&r-1)===0&&r!==0}function Uf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ys(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Xg(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),f=o((e+n)/2),u=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*f,l*u,l*h,a*c);break;case"YZY":r.set(l*h,a*f,l*u,a*c);break;case"ZXZ":r.set(l*u,l*h,a*f,a*c);break;case"XZX":r.set(a*f,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*f,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*f,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function _n(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function We(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var qg=Object.freeze({__proto__:null,DEG2RAD:_r,RAD2DEG:Er,ceilPowerOfTwo:Uf,clamp:pt,damp:Fg,degToRad:Wg,denormalize:_n,euclideanModulo:So,floorPowerOfTwo:ys,generateUUID:qt,inverseLerp:Ng,isPowerOfTwo:Za,lerp:vr,mapLinear:Og,normalize:We,pingpong:Ug,radToDeg:jg,randFloat:Gg,randFloatSpread:Vg,randInt:Bg,seededRandom:Hg,setQuaternionFromProperEuler:Xg,smootherstep:zg,smoothstep:kg});class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=i,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],d=n[5],g=n[8],m=i[0],p=i[3],_=i[6],M=i[1],y=i[4],x=i[7],b=i[2],w=i[5],C=i[8];return s[0]=o*m+a*M+l*b,s[3]=o*p+a*y+l*w,s[6]=o*_+a*x+l*C,s[1]=c*m+f*M+u*b,s[4]=c*p+f*y+u*w,s[7]=c*_+f*x+u*C,s[2]=h*m+d*M+g*b,s[5]=h*p+d*y+g*w,s[8]=h*_+d*x+g*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-n*s*f+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=f*o-a*c,h=a*l-f*s,d=c*s-o*l,g=t*u+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return e[0]=u*m,e[1]=(i*c-f*n)*m,e[2]=(a*n-i*o)*m,e[3]=h*m,e[4]=(f*t-i*l)*m,e[5]=(i*s-a*t)*m,e[6]=d*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ys.makeScale(e,t)),this}rotate(e){return this.premultiply(Ys.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ys.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ys=new It;function kf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ar(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ps(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Ks={[Jt]:{[Tr]:Yn},[Tr]:{[Jt]:ps}},_t={legacyMode:!0,get workingColorSpace(){return Tr},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(Ks[e]&&Ks[e][t]!==void 0){const n=Ks[e][t];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},zf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tt={r:0,g:0,b:0},Ht={h:0,s:0,l:0},Gr={h:0,s:0,l:0};function Zs(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Vr(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Te{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=So(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zs(o,s,e+1/3),this.g=Zs(o,s,e),this.b=Zs(o,s,e-1/3)}return _t.toWorkingColorSpace(this,i),this}setStyle(e,t=Jt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,_t.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,_t.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,f,t)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,_t.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,_t.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Jt){const n=zf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return _t.fromWorkingColorSpace(Vr(this,tt),e),pt(tt.r*255,0,255)<<16^pt(tt.g*255,0,255)<<8^pt(tt.b*255,0,255)<<0}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(Vr(this,tt),t);const n=tt.r,i=tt.g,s=tt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(Vr(this,tt),t),e.r=tt.r,e.g=tt.g,e.b=tt.b,e}getStyle(e=Jt){return _t.fromWorkingColorSpace(Vr(this,tt),e),e!==Jt?`color(${e} ${tt.r} ${tt.g} ${tt.b})`:`rgb(${tt.r*255|0},${tt.g*255|0},${tt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(Ht),Ht.h+=e,Ht.s+=t,Ht.l+=n,this.setHSL(Ht.h,Ht.s,Ht.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ht),e.getHSL(Gr);const n=vr(Ht.h,Gr.h,t),i=vr(Ht.s,Gr.s,t),s=vr(Ht.l,Gr.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Te.NAMES=zf;let fi;class Bf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fi===void 0&&(fi=Ar("canvas")),fi.width=e.width,fi.height=e.height;const n=fi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=fi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Gf{constructor(e=null){this.isSource=!0,this.uuid=qt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Js(i[o].image)):s.push(Js(i[o]))}else s=Js(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Js(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Bf.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $g=0;class ut extends oi{constructor(e=ut.DEFAULT_IMAGE,t=ut.DEFAULT_MAPPING,n=Bt,i=Bt,s=Tt,o=Qn,a=Gt,l=ei,c=ut.DEFAULT_ANISOTROPY,f=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$g++}),this.uuid=qt(),this.name="",this.source=new Gf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Df)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ki:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ki:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ut.DEFAULT_IMAGE=null;ut.DEFAULT_MAPPING=Df;ut.DEFAULT_ANISOTROPY=1;class je{constructor(e=0,t=0,n=0,i=1){je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],g=l[9],m=l[2],p=l[6],_=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,x=(d+1)/2,b=(_+1)/2,w=(f+h)/4,C=(u+m)/4,v=(g+p)/4;return y>x&&y>b?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=w/n,s=C/n):x>b?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=w/i,s=v/i):b<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(b),n=C/s,i=v/s),this.set(n,i,s,t),this}let M=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(h-f)*(h-f));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(u-m)/M,this.z=(h-f)/M,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ni extends oi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new je(0,0,e,t),this.scissorTest=!1,this.viewport=new je(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new ut(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Tt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Gf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vf extends ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yg extends ut{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=lt,this.minFilter=lt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],f=n[i+2],u=n[i+3];const h=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=m;return}if(u!==m||l!==h||c!==d||f!==g){let p=1-a;const _=l*h+c*d+f*g+u*m,M=_>=0?1:-1,y=1-_*_;if(y>Number.EPSILON){const b=Math.sqrt(y),w=Math.atan2(b,_*M);p=Math.sin(p*w)/b,a=Math.sin(a*w)/b}const x=a*M;if(l=l*p+h*x,c=c*p+d*x,f=f*p+g*x,u=u*p+m*x,p===1-a){const b=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=b,c*=b,f*=b,u*=b}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],f=n[i+3],u=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+f*u+l*d-c*h,e[t+1]=l*g+f*h+c*u-a*d,e[t+2]=c*g+f*d+a*h-l*u,e[t+3]=f*g-a*u-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(i/2),u=a(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"YXZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"ZXY":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"ZYX":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"YZX":this._x=h*f*u+c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u-h*d*g;break;case"XZY":this._x=h*f*u-c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=n+a+u;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){const d=2*Math.sqrt(1+n-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){const d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+f)/d}else{const d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+o*a+i*c-s*l,this._y=i*f+o*l+s*a-n*c,this._z=s*f+o*c+n*l-i*a,this._w=o*f-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),u=Math.sin((1-t)*f)/c,h=Math.sin(t*f)/c;return this._w=o*u+this._w*h,this._x=n*u+this._x*h,this._y=i*u+this._y*h,this._z=s*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,n=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,f=l*n+a*t-s*i,u=l*i+s*n-o*t,h=-s*t-o*n-a*i;return this.x=c*l+h*-s+f*-a-u*-o,this.y=f*l+h*-o+u*-s-c*-a,this.z=u*l+h*-a+c*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qs.copy(this).projectOnVector(e),this.sub(Qs)}reflect(e){return this.sub(Qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qs=new O,vc=new nn;class Xi{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const f=e[l],u=e[l+1],h=e[l+2];f<t&&(t=f),u<n&&(n=u),h<i&&(i=h),f>s&&(s=f),u>o&&(o=u),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const f=e.getX(l),u=e.getY(l),h=e.getZ(l);f<t&&(t=f),u<n&&(n=u),h<i&&(i=h),f>s&&(s=f),u>o&&(o=u),h>a&&(a=h)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Fn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Fn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Fn)}else n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox),ea.applyMatrix4(e.matrixWorld),this.union(ea);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),Hr.subVectors(this.max,er),hi.subVectors(e.a,er),di.subVectors(e.b,er),pi.subVectors(e.c,er),bn.subVectors(di,hi),Mn.subVectors(pi,di),Un.subVectors(hi,pi);let t=[0,-bn.z,bn.y,0,-Mn.z,Mn.y,0,-Un.z,Un.y,bn.z,0,-bn.x,Mn.z,0,-Mn.x,Un.z,0,-Un.x,-bn.y,bn.x,0,-Mn.y,Mn.x,0,-Un.y,Un.x,0];return!ta(t,hi,di,pi,Hr)||(t=[1,0,0,0,1,0,0,0,1],!ta(t,hi,di,pi,Hr))?!1:(Wr.crossVectors(bn,Mn),t=[Wr.x,Wr.y,Wr.z],ta(t,hi,di,pi,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Fn.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const cn=[new O,new O,new O,new O,new O,new O,new O,new O],Fn=new O,ea=new Xi,hi=new O,di=new O,pi=new O,bn=new O,Mn=new O,Un=new O,er=new O,Hr=new O,Wr=new O,kn=new O;function ta(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){kn.fromArray(r,s);const a=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),l=e.dot(kn),c=t.dot(kn),f=n.dot(kn);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Kg=new Xi,tr=new O,na=new O;class qi{constructor(e=new O,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Kg.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(na.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(na)),this.expandByPoint(tr.copy(e.center).sub(na))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const un=new O,ia=new O,jr=new O,Sn=new O,ra=new O,Xr=new O,sa=new O;class ws{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,un)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=un.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(un.copy(this.direction).multiplyScalar(t).add(this.origin),un.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ia.copy(e).add(t).multiplyScalar(.5),jr.copy(t).sub(e).normalize(),Sn.copy(this.origin).sub(ia);const s=e.distanceTo(t)*.5,o=-this.direction.dot(jr),a=Sn.dot(this.direction),l=-Sn.dot(jr),c=Sn.lengthSq(),f=Math.abs(1-o*o);let u,h,d,g;if(f>0)if(u=o*l-a,h=o*a-l,g=s*f,u>=0)if(h>=-g)if(h<=g){const m=1/f;u*=m,h*=m,d=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(jr).multiplyScalar(h).add(ia),d}intersectSphere(e,t){un.subVectors(e.center,this.origin);const n=un.dot(this.direction),i=un.dot(un)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,un)!==null}intersectTriangle(e,t,n,i,s){ra.subVectors(t,e),Xr.subVectors(n,e),sa.crossVectors(ra,Xr);let o=this.direction.dot(sa),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,e);const l=a*this.direction.dot(Xr.crossVectors(Sn,Xr));if(l<0)return null;const c=a*this.direction.dot(ra.cross(Sn));if(c<0||l+c>o)return null;const f=-a*Sn.dot(sa);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,f,u,h,d,g,m,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=f,_[10]=u,_[14]=h,_[3]=d,_[7]=g,_[11]=m,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/mi.setFromMatrixColumn(e,0).length(),s=1/mi.setFromMatrixColumn(e,1).length(),o=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*f,d=o*u,g=a*f,m=a*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=h-m*c,t[9]=-a*l,t[2]=m-h*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){const h=l*f,d=l*u,g=c*f,m=c*u;t[0]=h+m*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*f,t[9]=-a,t[2]=d*a-g,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*f,d=l*u,g=c*f,m=c*u;t[0]=h-m*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*f,t[9]=m-h*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*f,d=o*u,g=a*f,m=a*u;t[0]=l*f,t[4]=g*c-d,t[8]=h*c+m,t[1]=l*u,t[5]=m*c+h,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*f,t[4]=m-h*u,t[8]=g*u+d,t[1]=u,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=d*u+g,t[10]=h-m*u}else if(e.order==="XZY"){const h=o*l,d=o*c,g=a*l,m=a*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+m,t[5]=o*f,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*f,t[10]=m*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Zg,e,Jg)}lookAt(e,t,n){const i=this.elements;return Lt.subVectors(e,t),Lt.lengthSq()===0&&(Lt.z=1),Lt.normalize(),wn.crossVectors(n,Lt),wn.lengthSq()===0&&(Math.abs(n.z)===1?Lt.x+=1e-4:Lt.z+=1e-4,Lt.normalize(),wn.crossVectors(n,Lt)),wn.normalize(),qr.crossVectors(Lt,wn),i[0]=wn.x,i[4]=qr.x,i[8]=Lt.x,i[1]=wn.y,i[5]=qr.y,i[9]=Lt.y,i[2]=wn.z,i[6]=qr.z,i[10]=Lt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],d=n[13],g=n[2],m=n[6],p=n[10],_=n[14],M=n[3],y=n[7],x=n[11],b=n[15],w=i[0],C=i[4],v=i[8],E=i[12],I=i[1],Y=i[5],K=i[9],N=i[13],U=i[2],P=i[6],R=i[10],F=i[14],k=i[3],j=i[7],H=i[11],se=i[15];return s[0]=o*w+a*I+l*U+c*k,s[4]=o*C+a*Y+l*P+c*j,s[8]=o*v+a*K+l*R+c*H,s[12]=o*E+a*N+l*F+c*se,s[1]=f*w+u*I+h*U+d*k,s[5]=f*C+u*Y+h*P+d*j,s[9]=f*v+u*K+h*R+d*H,s[13]=f*E+u*N+h*F+d*se,s[2]=g*w+m*I+p*U+_*k,s[6]=g*C+m*Y+p*P+_*j,s[10]=g*v+m*K+p*R+_*H,s[14]=g*E+m*N+p*F+_*se,s[3]=M*w+y*I+x*U+b*k,s[7]=M*C+y*Y+x*P+b*j,s[11]=M*v+y*K+x*R+b*H,s[15]=M*E+y*N+x*F+b*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],d=e[14],g=e[3],m=e[7],p=e[11],_=e[15];return g*(+s*l*u-i*c*u-s*a*h+n*c*h+i*a*d-n*l*d)+m*(+t*l*d-t*c*h+s*o*h-i*o*d+i*c*f-s*l*f)+p*(+t*c*u-t*a*d-s*o*u+n*o*d+s*a*f-n*c*f)+_*(-i*a*f-t*l*u+t*a*h+i*o*u-n*o*h+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],d=e[11],g=e[12],m=e[13],p=e[14],_=e[15],M=u*p*c-m*h*c+m*l*d-a*p*d-u*l*_+a*h*_,y=g*h*c-f*p*c-g*l*d+o*p*d+f*l*_-o*h*_,x=f*m*c-g*u*c+g*a*d-o*m*d-f*a*_+o*u*_,b=g*u*l-f*m*l-g*a*h+o*m*h+f*a*p-o*u*p,w=t*M+n*y+i*x+s*b;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=M*C,e[1]=(m*h*s-u*p*s-m*i*d+n*p*d+u*i*_-n*h*_)*C,e[2]=(a*p*s-m*l*s+m*i*c-n*p*c-a*i*_+n*l*_)*C,e[3]=(u*l*s-a*h*s-u*i*c+n*h*c+a*i*d-n*l*d)*C,e[4]=y*C,e[5]=(f*p*s-g*h*s+g*i*d-t*p*d-f*i*_+t*h*_)*C,e[6]=(g*l*s-o*p*s-g*i*c+t*p*c+o*i*_-t*l*_)*C,e[7]=(o*h*s-f*l*s+f*i*c-t*h*c-o*i*d+t*l*d)*C,e[8]=x*C,e[9]=(g*u*s-f*m*s-g*n*d+t*m*d+f*n*_-t*u*_)*C,e[10]=(o*m*s-g*a*s+g*n*c-t*m*c-o*n*_+t*a*_)*C,e[11]=(f*a*s-o*u*s-f*n*c+t*u*c+o*n*d-t*a*d)*C,e[12]=b*C,e[13]=(f*m*i-g*u*i+g*n*h-t*m*h-f*n*p+t*u*p)*C,e[14]=(g*a*i-o*m*i-g*n*l+t*m*l+o*n*p-t*a*p)*C,e[15]=(o*u*i-f*a*i+f*n*l-t*u*l-o*n*h+t*a*h)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,f*a+n,f*l-i*o,0,c*l-i*a,f*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,f=o+o,u=a+a,h=s*c,d=s*f,g=s*u,m=o*f,p=o*u,_=a*u,M=l*c,y=l*f,x=l*u,b=n.x,w=n.y,C=n.z;return i[0]=(1-(m+_))*b,i[1]=(d+x)*b,i[2]=(g-y)*b,i[3]=0,i[4]=(d-x)*w,i[5]=(1-(h+_))*w,i[6]=(p+M)*w,i[7]=0,i[8]=(g+y)*C,i[9]=(p-M)*C,i[10]=(1-(h+m))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=mi.set(i[0],i[1],i[2]).length();const o=mi.set(i[4],i[5],i[6]).length(),a=mi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Wt.copy(this);const c=1/s,f=1/o,u=1/a;return Wt.elements[0]*=c,Wt.elements[1]*=c,Wt.elements[2]*=c,Wt.elements[4]*=f,Wt.elements[5]*=f,Wt.elements[6]*=f,Wt.elements[8]*=u,Wt.elements[9]*=u,Wt.elements[10]*=u,t.setFromRotationMatrix(Wt),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),f=(t+e)/(t-e),u=(n+i)/(n-i),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=f,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),f=1/(o-s),u=(t+e)*l,h=(n+i)*c,d=(o+s)*f;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*f,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new O,Wt=new Pe,Zg=new O(0,0,0),Jg=new O(1,1,1),wn=new O,qr=new O,Lt=new O,xc=new Pe,yc=new nn;class Ts{constructor(e=0,t=0,n=0,i=Ts.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],f=i[9],u=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ts.DEFAULT_ORDER="XYZ";class wo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Qg=0;const bc=new O,gi=new nn,fn=new Pe,$r=new O,nr=new O,e0=new O,t0=new nn,Mc=new O(1,0,0),Sc=new O(0,1,0),wc=new O(0,0,1),n0={type:"added"},Tc={type:"removed"};class Ye extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=qt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const e=new O,t=new Ts,n=new nn,i=new O(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new It}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(Mc,e)}rotateY(e){return this.rotateOnAxis(Sc,e)}rotateZ(e){return this.rotateOnAxis(wc,e)}translateOnAxis(e,t){return bc.copy(e).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mc,e)}translateY(e){return this.translateOnAxis(Sc,e)}translateZ(e){return this.translateOnAxis(wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$r.copy(e):$r.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(nr,$r,this.up):fn.lookAt($r,nr,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),gi.setFromRotationMatrix(fn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(n0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Tc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,e0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ye.DEFAULT_UP=new O(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new O,hn=new O,aa=new O,dn=new O,_i=new O,vi=new O,Ec=new O,oa=new O,la=new O,ca=new O;class mn{constructor(e=new O,t=new O,n=new O){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),jt.subVectors(e,t),i.cross(jt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){jt.subVectors(i,t),hn.subVectors(n,t),aa.subVectors(e,t);const o=jt.dot(jt),a=jt.dot(hn),l=jt.dot(aa),c=hn.dot(hn),f=hn.dot(aa),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const h=1/u,d=(c*l-a*f)*h,g=(o*f-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,dn),dn.x>=0&&dn.y>=0&&dn.x+dn.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,dn),l.set(0,0),l.addScaledVector(s,dn.x),l.addScaledVector(o,dn.y),l.addScaledVector(a,dn.z),l}static isFrontFacing(e,t,n,i){return jt.subVectors(n,t),hn.subVectors(e,t),jt.cross(hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),jt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return mn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;_i.subVectors(i,n),vi.subVectors(s,n),oa.subVectors(e,n);const l=_i.dot(oa),c=vi.dot(oa);if(l<=0&&c<=0)return t.copy(n);la.subVectors(e,i);const f=_i.dot(la),u=vi.dot(la);if(f>=0&&u<=f)return t.copy(i);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(_i,o);ca.subVectors(e,s);const d=_i.dot(ca),g=vi.dot(ca);if(g>=0&&d<=g)return t.copy(s);const m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(vi,a);const p=f*g-d*u;if(p<=0&&u-f>=0&&d-g>=0)return Ec.subVectors(s,i),a=(u-f)/(u-f+(d-g)),t.copy(i).addScaledVector(Ec,a);const _=1/(p+m+h);return o=m*_,a=h*_,t.copy(n).addScaledVector(_i,o).addScaledVector(vi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let i0=0;class en extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i0++}),this.uuid=qt(),this.name="",this.type="Material",this.blending=Ri,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lf,this.blendDst=Pf,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Wa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ri&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xn extends en{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Rf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const et=new O,Yr=new Se;class St{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ya,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Yr.fromBufferAttribute(this,t),Yr.applyMatrix3(e),this.setXY(t,Yr.x,Yr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix3(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyMatrix4(e),this.setXYZ(t,et.x,et.y,et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.applyNormalMatrix(e),this.setXYZ(t,et.x,et.y,et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)et.fromBufferAttribute(this,t),et.transformDirection(e),this.setXYZ(t,et.x,et.y,et.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=_n(t,this.array)),t}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=_n(t,this.array)),t}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=_n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=_n(t,this.array)),t}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array),s=We(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ya&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Hf extends St{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wf extends St{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $t extends St{constructor(e,t,n){super(new Float32Array(e),t,n)}}let r0=0;const kt=new Pe,ua=new Ye,xi=new O,Pt=new Xi,ir=new Xi,ot=new O;class Kt extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=qt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(kf(e)?Wf:Hf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new It().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return kt.makeRotationFromQuaternion(e),this.applyMatrix4(kt),this}rotateX(e){return kt.makeRotationX(e),this.applyMatrix4(kt),this}rotateY(e){return kt.makeRotationY(e),this.applyMatrix4(kt),this}rotateZ(e){return kt.makeRotationZ(e),this.applyMatrix4(kt),this}translate(e,t,n){return kt.makeTranslation(e,t,n),this.applyMatrix4(kt),this}scale(e,t,n){return kt.makeScale(e,t,n),this.applyMatrix4(kt),this}lookAt(e){return ua.lookAt(e),ua.updateMatrix(),this.applyMatrix4(ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Pt.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Pt.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Pt.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Pt.min),this.boundingBox.expandByPoint(Pt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new O,1/0);return}if(e){const n=this.boundingSphere.center;if(Pt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ir.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Pt.min,ir.min),Pt.expandByPoint(ot),ot.addVectors(Pt.max,ir.max),Pt.expandByPoint(ot)):(Pt.expandByPoint(ir.min),Pt.expandByPoint(ir.max))}Pt.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ot.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)ot.fromBufferAttribute(a,c),l&&(xi.fromBufferAttribute(e,c),ot.add(xi)),i=Math.max(i,n.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new St(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],f=[];for(let I=0;I<a;I++)c[I]=new O,f[I]=new O;const u=new O,h=new O,d=new O,g=new Se,m=new Se,p=new Se,_=new O,M=new O;function y(I,Y,K){u.fromArray(i,I*3),h.fromArray(i,Y*3),d.fromArray(i,K*3),g.fromArray(o,I*2),m.fromArray(o,Y*2),p.fromArray(o,K*2),h.sub(u),d.sub(u),m.sub(g),p.sub(g);const N=1/(m.x*p.y-p.x*m.y);isFinite(N)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(N),M.copy(d).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(N),c[I].add(_),c[Y].add(_),c[K].add(_),f[I].add(M),f[Y].add(M),f[K].add(M))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let I=0,Y=x.length;I<Y;++I){const K=x[I],N=K.start,U=K.count;for(let P=N,R=N+U;P<R;P+=3)y(n[P+0],n[P+1],n[P+2])}const b=new O,w=new O,C=new O,v=new O;function E(I){C.fromArray(s,I*3),v.copy(C);const Y=c[I];b.copy(Y),b.sub(C.multiplyScalar(C.dot(Y))).normalize(),w.crossVectors(v,Y);const N=w.dot(f[I])<0?-1:1;l[I*4]=b.x,l[I*4+1]=b.y,l[I*4+2]=b.z,l[I*4+3]=N}for(let I=0,Y=x.length;I<Y;++I){const K=x[I],N=K.start,U=K.count;for(let P=N,R=N+U;P<R;P+=3)E(n[P+0]),E(n[P+1]),E(n[P+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new St(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,f=new O,u=new O;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),m=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,p),f.subVectors(o,s),u.subVectors(i,s),f.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(f),l.add(f),c.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),f.subVectors(o,s),u.subVectors(i,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f);let d=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*f;for(let _=0;_<f;_++)h[g++]=c[d++]}return new St(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Kt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,u=c.length;f<u;f++){const h=c[f],d=e(h,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const d=c[u];f.push(d.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ac=new Pe,yi=new ws,fa=new qi,rr=new O,sr=new O,ar=new O,ha=new O,Kr=new O,Zr=new Se,Jr=new Se,Qr=new Se,da=new O,es=new O;class Vt extends Ye{constructor(e=new Kt,t=new Xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Kr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],u=s[l];f!==0&&(ha.fromBufferAttribute(u,e),o?Kr.addScaledVector(ha,f):Kr.addScaledVector(ha.sub(t),f))}t.add(Kr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(s),e.ray.intersectsSphere(fa)===!1)||(Ac.copy(s).invert(),yi.copy(e.ray).applyMatrix4(Ac),n.boundingBox!==null&&yi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,f=n.attributes.uv2,u=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){const m=u[d],p=i[m.materialIndex],_=Math.max(m.start,h.start),M=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=_,x=M;y<x;y+=3){const b=a.getX(y),w=a.getX(y+1),C=a.getX(y+2);o=ts(this,p,e,yi,c,f,b,w,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const d=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=d,p=g;m<p;m+=3){const _=a.getX(m),M=a.getX(m+1),y=a.getX(m+2);o=ts(this,i,e,yi,c,f,_,M,y),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let d=0,g=u.length;d<g;d++){const m=u[d],p=i[m.materialIndex],_=Math.max(m.start,h.start),M=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=_,x=M;y<x;y+=3){const b=y,w=y+1,C=y+2;o=ts(this,p,e,yi,c,f,b,w,C),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=m.materialIndex,t.push(o))}}else{const d=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let m=d,p=g;m<p;m+=3){const _=m,M=m+1,y=m+2;o=ts(this,i,e,yi,c,f,_,M,y),o&&(o.faceIndex=Math.floor(m/3),t.push(o))}}}}function s0(r,e,t,n,i,s,o,a){let l;if(e.side===Ot?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===xn,a),l===null)return null;es.copy(a),es.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(es);return c<t.near||c>t.far?null:{distance:c,point:es.clone(),object:r}}function ts(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,rr),r.getVertexPosition(a,sr),r.getVertexPosition(l,ar);const c=s0(r,e,t,n,rr,sr,ar,da);if(c){i&&(Zr.fromBufferAttribute(i,o),Jr.fromBufferAttribute(i,a),Qr.fromBufferAttribute(i,l),c.uv=mn.getUV(da,rr,sr,ar,Zr,Jr,Qr,new Se)),s&&(Zr.fromBufferAttribute(s,o),Jr.fromBufferAttribute(s,a),Qr.fromBufferAttribute(s,l),c.uv2=mn.getUV(da,rr,sr,ar,Zr,Jr,Qr,new Se));const f={a:o,b:a,c:l,normal:new O,materialIndex:0};mn.getNormal(rr,sr,ar,f.normal),c.face=f}return c}class Dr extends Kt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],u=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(u,2));function g(m,p,_,M,y,x,b,w,C,v,E){const I=x/C,Y=b/v,K=x/2,N=b/2,U=w/2,P=C+1,R=v+1;let F=0,k=0;const j=new O;for(let H=0;H<R;H++){const se=H*Y-N;for(let B=0;B<P;B++){const J=B*I-K;j[m]=J*M,j[p]=se*y,j[_]=U,c.push(j.x,j.y,j.z),j[m]=0,j[p]=0,j[_]=w>0?1:-1,f.push(j.x,j.y,j.z),u.push(B/C),u.push(1-H/v),F+=1}}for(let H=0;H<v;H++)for(let se=0;se<C;se++){const B=h+se+P*H,J=h+se+P*(H+1),te=h+(se+1)+P*(H+1),ne=h+(se+1)+P*H;l.push(B,J,ne),l.push(J,te,ne),k+=6}a.addGroup(d,k,E),d+=k,h+=F}}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gi(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function xt(r){const e={};for(let t=0;t<r.length;t++){const n=Gi(r[t]);for(const i in n)e[i]=n[i]}return e}function a0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function jf(r){return r.getRenderTarget()===null&&r.outputEncoding===ze?Jt:Tr}const o0={clone:Gi,merge:xt};var l0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends en{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l0,this.fragmentShader=c0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gi(e.uniforms),this.uniformsGroups=a0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Xf extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class yt extends Xf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Er*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Er*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_r*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bi=-90,Mi=1;class u0 extends Ye{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new yt(bi,Mi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new yt(bi,Mi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new yt(bi,Mi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new yt(bi,Mi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new yt(bi,Mi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new yt(bi,Mi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,f=e.getRenderTarget(),u=e.toneMapping,h=e.xr.enabled;e.toneMapping=vn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(f),e.toneMapping=u,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class qf extends ut{constructor(e,t,n,i,s,o,a,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,i,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class f0 extends ni{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new qf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Dr(5,5,5),s=new ii({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:Pn});s.uniforms.tEquirect.value=t;const o=new Vt(i,s),a=t.minFilter;return t.minFilter===Qn&&(t.minFilter=Tt),new u0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const pa=new O,h0=new O,d0=new It;class zn{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pa.subVectors(n,t).cross(h0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(pa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||d0.getNormalMatrix(e),i=this.coplanarPoint(pa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new qi,ns=new O;class To{constructor(e=new zn,t=new zn,n=new zn,i=new zn,s=new zn,o=new zn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],f=n[6],u=n[7],h=n[8],d=n[9],g=n[10],m=n[11],p=n[12],_=n[13],M=n[14],y=n[15];return t[0].setComponents(a-i,u-l,m-h,y-p).normalize(),t[1].setComponents(a+i,u+l,m+h,y+p).normalize(),t[2].setComponents(a+s,u+c,m+d,y+_).normalize(),t[3].setComponents(a-s,u-c,m-d,y-_).normalize(),t[4].setComponents(a-o,u-f,m-g,y-M).normalize(),t[5].setComponents(a+o,u+f,m+g,y+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSprite(e){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ns.x=i.normal.x>0?e.max.x:e.min.x,ns.y=i.normal.y>0?e.max.y:e.min.y,ns.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $f(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function p0(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,f){const u=c.array,h=c.usage,d=r.createBuffer();r.bindBuffer(f,d),r.bufferData(f,u,h),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,f,u){const h=f.array,d=f.updateRange;r.bindBuffer(u,c),d.count===-1?r.bufferSubData(u,0,h):(t?r.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):r.bufferSubData(u,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),f.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f&&(r.deleteBuffer(f.buffer),n.delete(c))}function l(c,f){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,f)):u.version<c.version&&(s(u.buffer,c,f),u.version=c.version)}return{get:o,remove:a,update:l}}class Eo extends Kt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,f=l+1,u=e/a,h=t/l,d=[],g=[],m=[],p=[];for(let _=0;_<f;_++){const M=_*h-o;for(let y=0;y<c;y++){const x=y*u-s;g.push(x,-M,0),m.push(0,0,1),p.push(y/a),p.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<a;M++){const y=M+c*_,x=M+c*(_+1),b=M+1+c*(_+1),w=M+1+c*_;d.push(y,x,w),d.push(x,b,w)}this.setIndex(d),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(p,2))}static fromJSON(e){return new Eo(e.width,e.height,e.widthSegments,e.heightSegments)}}var m0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,g0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,v0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,x0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,b0="vec3 transformed = vec3( position );",M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,w0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,T0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,C0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,P0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,R0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,D0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,I0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,O0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,F0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,U0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,k0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,G0="gl_FragColor = linearToOutputTexel( gl_FragColor );",V0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,H0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,q0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,e_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,r_=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,s_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,u_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,f_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,d_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,p_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,__=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,v_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,y_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,b_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,M_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,S_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,E_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,A_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,C_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,L_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,I_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,O_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,N_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,F_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,U_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,B_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,V_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,H_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X_=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,q_=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Y_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,K_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,J_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ev=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,sv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,av=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,ov=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,lv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,cv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,fv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,hv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xv=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,yv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,bv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ev=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Av=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ov=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,kv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Vv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hv=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,jv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ee={alphamap_fragment:m0,alphamap_pars_fragment:g0,alphatest_fragment:_0,alphatest_pars_fragment:v0,aomap_fragment:x0,aomap_pars_fragment:y0,begin_vertex:b0,beginnormal_vertex:M0,bsdfs:S0,iridescence_fragment:w0,bumpmap_pars_fragment:T0,clipping_planes_fragment:E0,clipping_planes_pars_fragment:A0,clipping_planes_pars_vertex:C0,clipping_planes_vertex:L0,color_fragment:P0,color_pars_fragment:R0,color_pars_vertex:D0,color_vertex:I0,common:O0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:F0,displacementmap_pars_vertex:U0,displacementmap_vertex:k0,emissivemap_fragment:z0,emissivemap_pars_fragment:B0,encodings_fragment:G0,encodings_pars_fragment:V0,envmap_fragment:H0,envmap_common_pars_fragment:W0,envmap_pars_fragment:j0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:r_,envmap_vertex:q0,fog_vertex:$0,fog_pars_vertex:Y0,fog_fragment:K0,fog_pars_fragment:Z0,gradientmap_pars_fragment:J0,lightmap_fragment:Q0,lightmap_pars_fragment:e_,lights_lambert_fragment:t_,lights_lambert_pars_fragment:n_,lights_pars_begin:i_,lights_toon_fragment:s_,lights_toon_pars_fragment:a_,lights_phong_fragment:o_,lights_phong_pars_fragment:l_,lights_physical_fragment:c_,lights_physical_pars_fragment:u_,lights_fragment_begin:f_,lights_fragment_maps:h_,lights_fragment_end:d_,logdepthbuf_fragment:p_,logdepthbuf_pars_fragment:m_,logdepthbuf_pars_vertex:g_,logdepthbuf_vertex:__,map_fragment:v_,map_pars_fragment:x_,map_particle_fragment:y_,map_particle_pars_fragment:b_,metalnessmap_fragment:M_,metalnessmap_pars_fragment:S_,morphcolor_vertex:w_,morphnormal_vertex:T_,morphtarget_pars_vertex:E_,morphtarget_vertex:A_,normal_fragment_begin:C_,normal_fragment_maps:L_,normal_pars_fragment:P_,normal_pars_vertex:R_,normal_vertex:D_,normalmap_pars_fragment:I_,clearcoat_normal_fragment_begin:O_,clearcoat_normal_fragment_maps:N_,clearcoat_pars_fragment:F_,iridescence_pars_fragment:U_,output_fragment:k_,packing:z_,premultiplied_alpha_fragment:B_,project_vertex:G_,dithering_fragment:V_,dithering_pars_fragment:H_,roughnessmap_fragment:W_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:X_,shadowmap_pars_vertex:q_,shadowmap_vertex:$_,shadowmask_pars_fragment:Y_,skinbase_vertex:K_,skinning_pars_vertex:Z_,skinning_vertex:J_,skinnormal_vertex:Q_,specularmap_fragment:ev,specularmap_pars_fragment:tv,tonemapping_fragment:nv,tonemapping_pars_fragment:iv,transmission_fragment:rv,transmission_pars_fragment:sv,uv_pars_fragment:av,uv_pars_vertex:ov,uv_vertex:lv,uv2_pars_fragment:cv,uv2_pars_vertex:uv,uv2_vertex:fv,worldpos_vertex:hv,background_vert:dv,background_frag:pv,backgroundCube_vert:mv,backgroundCube_frag:gv,cube_vert:_v,cube_frag:vv,depth_vert:xv,depth_frag:yv,distanceRGBA_vert:bv,distanceRGBA_frag:Mv,equirect_vert:Sv,equirect_frag:wv,linedashed_vert:Tv,linedashed_frag:Ev,meshbasic_vert:Av,meshbasic_frag:Cv,meshlambert_vert:Lv,meshlambert_frag:Pv,meshmatcap_vert:Rv,meshmatcap_frag:Dv,meshnormal_vert:Iv,meshnormal_frag:Ov,meshphong_vert:Nv,meshphong_frag:Fv,meshphysical_vert:Uv,meshphysical_frag:kv,meshtoon_vert:zv,meshtoon_frag:Bv,points_vert:Gv,points_frag:Vv,shadow_vert:Hv,shadow_frag:Wv,sprite_vert:jv,sprite_frag:Xv},ae={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new It},uv2Transform:{value:new It},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new It}}},Qt={basic:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:xt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:xt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:xt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new Te(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:xt([ae.points,ae.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:xt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:xt([ae.common,ae.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:xt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:xt([ae.sprite,ae.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:xt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:xt([ae.lights,ae.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Qt.physical={uniforms:xt([Qt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Se(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const is={r:0,b:0,g:0};function qv(r,e,t,n,i,s,o){const a=new Te(0);let l=s===!0?0:1,c,f,u=null,h=0,d=null;function g(p,_){let M=!1,y=_.isScene===!0?_.background:null;y&&y.isTexture&&(y=(_.backgroundBlurriness>0?t:e).get(y));const x=r.xr,b=x.getSession&&x.getSession();b&&b.environmentBlendMode==="additive"&&(y=null),y===null?m(a,l):y&&y.isColor&&(m(y,1),M=!0),(r.autoClear||M)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Ss)?(f===void 0&&(f=new Vt(new Dr(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Gi(Qt.backgroundCube.uniforms),vertexShader:Qt.backgroundCube.vertexShader,fragmentShader:Qt.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(w,C,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),f.material.uniforms.envMap.value=y,f.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,f.material.toneMapped=y.encoding!==ze,(u!==y||h!==y.version||d!==r.toneMapping)&&(f.material.needsUpdate=!0,u=y,h=y.version,d=r.toneMapping),f.layers.enableAll(),p.unshift(f,f.geometry,f.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Vt(new Eo(2,2),new ii({name:"BackgroundMaterial",uniforms:Gi(Qt.background.uniforms),vertexShader:Qt.background.vertexShader,fragmentShader:Qt.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=y.encoding!==ze,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function m(p,_){p.getRGB(is,jf(r)),n.buffers.color.setClear(is.r,is.g,is.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),l=_,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,m(a,l)},render:g}}function $v(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,f=!1;function u(U,P,R,F,k){let j=!1;if(o){const H=m(F,R,P);c!==H&&(c=H,d(c.object)),j=_(U,F,R,k),j&&M(U,F,R,k)}else{const H=P.wireframe===!0;(c.geometry!==F.id||c.program!==R.id||c.wireframe!==H)&&(c.geometry=F.id,c.program=R.id,c.wireframe=H,j=!0)}k!==null&&t.update(k,34963),(j||f)&&(f=!1,v(U,P,R,F),k!==null&&r.bindBuffer(34963,t.get(k).buffer))}function h(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function d(U){return n.isWebGL2?r.bindVertexArray(U):s.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?r.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function m(U,P,R){const F=R.wireframe===!0;let k=a[U.id];k===void 0&&(k={},a[U.id]=k);let j=k[P.id];j===void 0&&(j={},k[P.id]=j);let H=j[F];return H===void 0&&(H=p(h()),j[F]=H),H}function p(U){const P=[],R=[],F=[];for(let k=0;k<i;k++)P[k]=0,R[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:R,attributeDivisors:F,object:U,attributes:{},index:null}}function _(U,P,R,F){const k=c.attributes,j=P.attributes;let H=0;const se=R.getAttributes();for(const B in se)if(se[B].location>=0){const te=k[B];let ne=j[B];if(ne===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(ne=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(ne=U.instanceColor)),te===void 0||te.attribute!==ne||ne&&te.data!==ne.data)return!0;H++}return c.attributesNum!==H||c.index!==F}function M(U,P,R,F){const k={},j=P.attributes;let H=0;const se=R.getAttributes();for(const B in se)if(se[B].location>=0){let te=j[B];te===void 0&&(B==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),B==="instanceColor"&&U.instanceColor&&(te=U.instanceColor));const ne={};ne.attribute=te,te&&te.data&&(ne.data=te.data),k[B]=ne,H++}c.attributes=k,c.attributesNum=H,c.index=F}function y(){const U=c.newAttributes;for(let P=0,R=U.length;P<R;P++)U[P]=0}function x(U){b(U,0)}function b(U,P){const R=c.newAttributes,F=c.enabledAttributes,k=c.attributeDivisors;R[U]=1,F[U]===0&&(r.enableVertexAttribArray(U),F[U]=1),k[U]!==P&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,P),k[U]=P)}function w(){const U=c.newAttributes,P=c.enabledAttributes;for(let R=0,F=P.length;R<F;R++)P[R]!==U[R]&&(r.disableVertexAttribArray(R),P[R]=0)}function C(U,P,R,F,k,j){n.isWebGL2===!0&&(R===5124||R===5125)?r.vertexAttribIPointer(U,P,R,k,j):r.vertexAttribPointer(U,P,R,F,k,j)}function v(U,P,R,F){if(n.isWebGL2===!1&&(U.isInstancedMesh||F.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const k=F.attributes,j=R.getAttributes(),H=P.defaultAttributeValues;for(const se in j){const B=j[se];if(B.location>=0){let J=k[se];if(J===void 0&&(se==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),se==="instanceColor"&&U.instanceColor&&(J=U.instanceColor)),J!==void 0){const te=J.normalized,ne=J.itemSize,W=t.get(J);if(W===void 0)continue;const be=W.buffer,ge=W.type,pe=W.bytesPerElement;if(J.isInterleavedBufferAttribute){const ue=J.data,Ge=ue.stride,we=J.offset;if(ue.isInstancedInterleavedBuffer){for(let xe=0;xe<B.locationSize;xe++)b(B.location+xe,ue.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<B.locationSize;xe++)x(B.location+xe);r.bindBuffer(34962,be);for(let xe=0;xe<B.locationSize;xe++)C(B.location+xe,ne/B.locationSize,ge,te,Ge*pe,(we+ne/B.locationSize*xe)*pe)}else{if(J.isInstancedBufferAttribute){for(let ue=0;ue<B.locationSize;ue++)b(B.location+ue,J.meshPerAttribute);U.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ue=0;ue<B.locationSize;ue++)x(B.location+ue);r.bindBuffer(34962,be);for(let ue=0;ue<B.locationSize;ue++)C(B.location+ue,ne/B.locationSize,ge,te,ne*pe,ne/B.locationSize*ue*pe)}}else if(H!==void 0){const te=H[se];if(te!==void 0)switch(te.length){case 2:r.vertexAttrib2fv(B.location,te);break;case 3:r.vertexAttrib3fv(B.location,te);break;case 4:r.vertexAttrib4fv(B.location,te);break;default:r.vertexAttrib1fv(B.location,te)}}}}w()}function E(){K();for(const U in a){const P=a[U];for(const R in P){const F=P[R];for(const k in F)g(F[k].object),delete F[k];delete P[R]}delete a[U]}}function I(U){if(a[U.id]===void 0)return;const P=a[U.id];for(const R in P){const F=P[R];for(const k in F)g(F[k].object),delete F[k];delete P[R]}delete a[U.id]}function Y(U){for(const P in a){const R=a[P];if(R[U.id]===void 0)continue;const F=R[U.id];for(const k in F)g(F[k].object),delete F[k];delete R[U.id]}}function K(){N(),f=!0,c!==l&&(c=l,d(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:K,resetDefaultState:N,dispose:E,releaseStatesOfGeometry:I,releaseStatesOfProgram:Y,initAttributes:y,enableAttribute:x,disableUnusedAttributes:w}}function Yv(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,f){r.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,u){if(u===0)return;let h,d;if(i)h=r,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,f,u),t.update(f,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Kv(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),h=r.getParameter(35660),d=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),p=r.getParameter(36347),_=r.getParameter(36348),M=r.getParameter(36349),y=h>0,x=o||e.has("OES_texture_float"),b=y&&x,w=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:f,maxTextures:u,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:b,maxSamples:w}}function Zv(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new zn,a=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const d=u.length!==0||h||n!==0||i;return i=h,n=u.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,d){const g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,_=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?f(null):c();else{const M=s?0:n,y=M*4;let x=_.clippingState||null;l.value=x,x=f(g,h,y,d);for(let b=0;b!==y;++b)x[b]=t[b];_.clippingState=x,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,d,g){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const _=d+m*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<_)&&(p=new Float32Array(_));for(let y=0,x=d;y!==m;++y,x+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(p,x),p[x+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,p}}function Jv(r){let e=new WeakMap;function t(o,a){return a===ja?o.mapping=Fi:a===Xa&&(o.mapping=Ui),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===ja||a===Xa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new f0(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Ao extends Xf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,Cc=[.125,.215,.35,.446,.526,.582],Vn=20,ma=new Ao,Lc=new Te;let ga=null;const Bn=(1+Math.sqrt(5))/2,wi=1/Bn,Pc=[new O(1,1,1),new O(-1,1,1),new O(1,1,-1),new O(-1,1,-1),new O(0,Bn,wi),new O(0,Bn,-wi),new O(wi,0,Bn),new O(-wi,0,Bn),new O(Bn,wi,0),new O(-Bn,wi,0)];class Rc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ga=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ga),e.scissorTest=!1,rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Ui?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ga=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Tt,minFilter:Tt,generateMipmaps:!1,type:Sr,format:Gt,encoding:ti,depthBuffer:!1},i=Dc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qv(s)),this._blurMaterial=ex(s,e,t)}return i}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,ma)}_sceneToCubeUV(e,t,n,i){const a=new yt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,h=f.toneMapping;f.getClearColor(Lc),f.toneMapping=vn,f.autoClear=!1;const d=new Xn({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1}),g=new Vt(new Dr,d);let m=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,m=!0):(d.color.copy(Lc),m=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(a.up.set(0,l[_],0),a.lookAt(c[_],0,0)):M===1?(a.up.set(0,0,l[_]),a.lookAt(0,c[_],0)):(a.up.set(0,l[_],0),a.lookAt(0,0,c[_]));const y=this._cubeSize;rs(i,M*y,_>2?y:0,y,y),f.setRenderTarget(i),m&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=h,f.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Fi||e.mapping===Ui;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;rs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Pc[(i-1)%Pc.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new Vt(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Vn-1),m=s/g,p=isFinite(s)?1+Math.floor(f*m):Vn;p>Vn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Vn}`);const _=[];let M=0;for(let C=0;C<Vn;++C){const v=C/m,E=Math.exp(-v*v/2);_.push(E),C===0?M+=E:C<p&&(M+=2*E)}for(let C=0;C<_.length;C++)_[C]=_[C]/M;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const x=this._sizeLods[i],b=3*x*(i>y-Li?i-y+Li:0),w=4*(this._cubeSize-x);rs(t,b,w,3*x,2*x),l.setRenderTarget(t),l.render(u,ma)}}function Qv(r){const e=[],t=[],n=[];let i=r;const s=r-Li+1+Cc.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-Li?l=Cc[o-r+Li-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],d=6,g=6,m=3,p=2,_=1,M=new Float32Array(m*g*d),y=new Float32Array(p*g*d),x=new Float32Array(_*g*d);for(let w=0;w<d;w++){const C=w%3*2/3-1,v=w>2?0:-1,E=[C,v,0,C+2/3,v,0,C+2/3,v+1,0,C,v,0,C+2/3,v+1,0,C,v+1,0];M.set(E,m*g*w),y.set(h,p*g*w);const I=[w,w,w,w,w,w];x.set(I,_*g*w)}const b=new Kt;b.setAttribute("position",new St(M,m)),b.setAttribute("uv",new St(y,p)),b.setAttribute("faceIndex",new St(x,_)),e.push(b),i>Li&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dc(r,e,t){const n=new ni(r,e,t);return n.texture.mapping=Ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function ex(r,e,t){const n=new Float32Array(Vn),i=new O(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Vn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Ic(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Oc(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Co(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Co(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tx(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ja||l===Xa,f=l===Fi||l===Ui;if(c||f)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Rc(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||f&&u&&i(u)){t===null&&(t=new Rc(r));const h=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function nx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ix(r,e,t,n){const i={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(u,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const g in h)e.update(h[g],34962);const d=u.morphAttributes;for(const g in d){const m=d[g];for(let p=0,_=m.length;p<_;p++)e.update(m[p],34962)}}function c(u){const h=[],d=u.index,g=u.attributes.position;let m=0;if(d!==null){const M=d.array;m=d.version;for(let y=0,x=M.length;y<x;y+=3){const b=M[y+0],w=M[y+1],C=M[y+2];h.push(b,w,w,C,C,b)}}else{const M=g.array;m=g.version;for(let y=0,x=M.length/3-1;y<x;y+=3){const b=y+0,w=y+1,C=y+2;h.push(b,w,w,C,C,b)}}const p=new(kf(h)?Wf:Hf)(h,1);p.version=m;const _=s.get(u);_&&e.remove(_),s.set(u,p)}function f(u){const h=s.get(u);if(h){const d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function rx(r,e,t,n){const i=n.isWebGL2;let s;function o(h){s=h}let a,l;function c(h){a=h.type,l=h.bytesPerElement}function f(h,d){r.drawElements(s,d,a,h*l),t.update(d,s,1)}function u(h,d,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,d,a,h*l,g),t.update(d,s,g)}this.setMode=o,this.setIndex=c,this.render=f,this.renderInstances=u}function sx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ax(r,e){return r[0]-e[0]}function ox(r,e){return Math.abs(e[1])-Math.abs(r[1])}function lx(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new je,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,f,u,h){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,m=g!==void 0?g.length:0;let p=s.get(f);if(p===void 0||p.count!==m){let P=function(){N.dispose(),s.delete(f),f.removeEventListener("dispose",P)};p!==void 0&&p.texture.dispose();const y=f.morphAttributes.position!==void 0,x=f.morphAttributes.normal!==void 0,b=f.morphAttributes.color!==void 0,w=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],v=f.morphAttributes.color||[];let E=0;y===!0&&(E=1),x===!0&&(E=2),b===!0&&(E=3);let I=f.attributes.position.count*E,Y=1;I>e.maxTextureSize&&(Y=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const K=new Float32Array(I*Y*4*m),N=new Vf(K,I,Y,m);N.type=Ln,N.needsUpdate=!0;const U=E*4;for(let R=0;R<m;R++){const F=w[R],k=C[R],j=v[R],H=I*Y*4*R;for(let se=0;se<F.count;se++){const B=se*U;y===!0&&(o.fromBufferAttribute(F,se),K[H+B+0]=o.x,K[H+B+1]=o.y,K[H+B+2]=o.z,K[H+B+3]=0),x===!0&&(o.fromBufferAttribute(k,se),K[H+B+4]=o.x,K[H+B+5]=o.y,K[H+B+6]=o.z,K[H+B+7]=0),b===!0&&(o.fromBufferAttribute(j,se),K[H+B+8]=o.x,K[H+B+9]=o.y,K[H+B+10]=o.z,K[H+B+11]=j.itemSize===4?o.w:1)}}p={count:m,texture:N,size:new Se(I,Y)},s.set(f,p),f.addEventListener("dispose",P)}let _=0;for(let y=0;y<d.length;y++)_+=d[y];const M=f.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",M),h.getUniforms().setValue(r,"morphTargetInfluences",d),h.getUniforms().setValue(r,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}else{const g=d===void 0?0:d.length;let m=n[f.id];if(m===void 0||m.length!==g){m=[];for(let x=0;x<g;x++)m[x]=[x,0];n[f.id]=m}for(let x=0;x<g;x++){const b=m[x];b[0]=x,b[1]=d[x]}m.sort(ox);for(let x=0;x<8;x++)x<g&&m[x][1]?(a[x][0]=m[x][0],a[x][1]=m[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(ax);const p=f.morphAttributes.position,_=f.morphAttributes.normal;let M=0;for(let x=0;x<8;x++){const b=a[x],w=b[0],C=b[1];w!==Number.MAX_SAFE_INTEGER&&C?(p&&f.getAttribute("morphTarget"+x)!==p[w]&&f.setAttribute("morphTarget"+x,p[w]),_&&f.getAttribute("morphNormal"+x)!==_[w]&&f.setAttribute("morphNormal"+x,_[w]),i[x]=C,M+=C):(p&&f.hasAttribute("morphTarget"+x)===!0&&f.deleteAttribute("morphTarget"+x),_&&f.hasAttribute("morphNormal"+x)===!0&&f.deleteAttribute("morphNormal"+x),i[x]=0)}const y=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",y),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function cx(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,f=l.geometry,u=e.get(l,f);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Yf=new ut,Kf=new Vf,Zf=new Yg,Jf=new qf,Nc=[],Fc=[],Uc=new Float32Array(16),kc=new Float32Array(9),zc=new Float32Array(4);function $i(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Nc[i];if(s===void 0&&(s=new Float32Array(i),Nc[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function nt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function it(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Es(r,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function ux(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2fv(this.addr,e),it(t,e)}}function hx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nt(t,e))return;r.uniform3fv(this.addr,e),it(t,e)}}function dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4fv(this.addr,e),it(t,e)}}function px(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;zc.set(n),r.uniformMatrix2fv(this.addr,!1,zc),it(t,n)}}function mx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;kc.set(n),r.uniformMatrix3fv(this.addr,!1,kc),it(t,n)}}function gx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(nt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),it(t,e)}else{if(nt(t,n))return;Uc.set(n),r.uniformMatrix4fv(this.addr,!1,Uc),it(t,n)}}function _x(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2iv(this.addr,e),it(t,e)}}function xx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3iv(this.addr,e),it(t,e)}}function yx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4iv(this.addr,e),it(t,e)}}function bx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Mx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nt(t,e))return;r.uniform2uiv(this.addr,e),it(t,e)}}function Sx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nt(t,e))return;r.uniform3uiv(this.addr,e),it(t,e)}}function wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nt(t,e))return;r.uniform4uiv(this.addr,e),it(t,e)}}function Tx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Yf,i)}function Ex(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Zf,i)}function Ax(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Jf,i)}function Cx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Kf,i)}function Lx(r){switch(r){case 5126:return ux;case 35664:return fx;case 35665:return hx;case 35666:return dx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return _x;case 35667:case 35671:return vx;case 35668:case 35672:return xx;case 35669:case 35673:return yx;case 5125:return bx;case 36294:return Mx;case 36295:return Sx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Tx;case 35679:case 36299:case 36307:return Ex;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Cx}}function Px(r,e){r.uniform1fv(this.addr,e)}function Rx(r,e){const t=$i(e,this.size,2);r.uniform2fv(this.addr,t)}function Dx(r,e){const t=$i(e,this.size,3);r.uniform3fv(this.addr,t)}function Ix(r,e){const t=$i(e,this.size,4);r.uniform4fv(this.addr,t)}function Ox(r,e){const t=$i(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Nx(r,e){const t=$i(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Fx(r,e){const t=$i(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ux(r,e){r.uniform1iv(this.addr,e)}function kx(r,e){r.uniform2iv(this.addr,e)}function zx(r,e){r.uniform3iv(this.addr,e)}function Bx(r,e){r.uniform4iv(this.addr,e)}function Gx(r,e){r.uniform1uiv(this.addr,e)}function Vx(r,e){r.uniform2uiv(this.addr,e)}function Hx(r,e){r.uniform3uiv(this.addr,e)}function Wx(r,e){r.uniform4uiv(this.addr,e)}function jx(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Yf,s[o])}function Xx(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Zf,s[o])}function qx(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Jf,s[o])}function $x(r,e,t){const n=this.cache,i=e.length,s=Es(t,i);nt(n,s)||(r.uniform1iv(this.addr,s),it(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Kf,s[o])}function Yx(r){switch(r){case 5126:return Px;case 35664:return Rx;case 35665:return Dx;case 35666:return Ix;case 35674:return Ox;case 35675:return Nx;case 35676:return Fx;case 5124:case 35670:return Ux;case 35667:case 35671:return kx;case 35668:case 35672:return zx;case 35669:case 35673:return Bx;case 5125:return Gx;case 36294:return Vx;case 36295:return Hx;case 36296:return Wx;case 35678:case 36198:case 36298:case 36306:case 35682:return jx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return qx;case 36289:case 36303:case 36311:case 36292:return $x}}class Kx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Lx(t.type)}}class Zx{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Yx(t.type)}}class Jx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const _a=/(\w+)(\])?(\[|\.)?/g;function Bc(r,e){r.seq.push(e),r.map[e.id]=e}function Qx(r,e,t){const n=r.name,i=n.length;for(_a.lastIndex=0;;){const s=_a.exec(n),o=_a.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Bc(t,c===void 0?new Kx(a,r,e):new Zx(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Jx(a),Bc(t,u)),t=u}}}class ms{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Qx(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Gc(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let ey=0;function ty(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ny(r){switch(r){case ti:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Vc(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+ty(r.getShaderSource(e),o)}else return i}function iy(r,e){const t=ny(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function ry(r,e){let t;switch(e){case lg:t="Linear";break;case cg:t="Reinhard";break;case ug:t="OptimizedCineon";break;case fg:t="ACESFilmic";break;case hg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sy(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function ay(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function oy(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function dr(r){return r!==""}function Hc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(r){return r.replace(ly,cy)}function cy(r,e){const t=Ee[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ja(t)}const uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(r){return r.replace(uy,fy)}function fy(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Xc(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function hy(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bm?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function dy(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Fi:case Ui:e="ENVMAP_TYPE_CUBE";break;case Ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function py(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ui:e="ENVMAP_MODE_REFRACTION";break}return e}function my(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Rf:e="ENVMAP_BLENDING_MULTIPLY";break;case ag:e="ENVMAP_BLENDING_MIX";break;case og:e="ENVMAP_BLENDING_ADD";break}return e}function gy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _y(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=hy(t),c=dy(t),f=py(t),u=my(t),h=gy(t),d=t.isWebGL2?"":sy(t),g=ay(s),m=i.createProgram();let p,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(dr).join(`
`),p.length>0&&(p+=`
`),_=[d,g].filter(dr).join(`
`),_.length>0&&(_+=`
`)):(p=[Xc(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),_=[d,Xc(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==vn?"#define TONE_MAPPING":"",t.toneMapping!==vn?Ee.tonemapping_pars_fragment:"",t.toneMapping!==vn?ry("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.encodings_pars_fragment,iy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),o=Ja(o),o=Hc(o,t),o=Wc(o,t),a=Ja(a),a=Hc(a,t),a=Wc(a,t),o=jc(o),a=jc(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=M+p+o,x=M+_+a,b=Gc(i,35633,y),w=Gc(i,35632,x);if(i.attachShader(m,b),i.attachShader(m,w),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const E=i.getProgramInfoLog(m).trim(),I=i.getShaderInfoLog(b).trim(),Y=i.getShaderInfoLog(w).trim();let K=!0,N=!0;if(i.getProgramParameter(m,35714)===!1){K=!1;const U=Vc(i,b,"vertex"),P=Vc(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+E+`
`+U+`
`+P)}else E!==""?console.warn("THREE.WebGLProgram: Program Info Log:",E):(I===""||Y==="")&&(N=!1);N&&(this.diagnostics={runnable:K,programLog:E,vertexShader:{log:I,prefix:p},fragmentShader:{log:Y,prefix:_}})}i.deleteShader(b),i.deleteShader(w);let C;this.getUniforms=function(){return C===void 0&&(C=new ms(i,m)),C};let v;return this.getAttributes=function(){return v===void 0&&(v=oy(i,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=ey++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=w,this}let vy=0;class xy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new yy(e),t.set(e,n)),n}}class yy{constructor(e){this.id=vy++,this.code=e,this.usedTimes=0}}function by(r,e,t,n,i,s,o){const a=new wo,l=new xy,c=[],f=i.isWebGL2,u=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,E,I,Y,K){const N=Y.fog,U=K.geometry,P=v.isMeshStandardMaterial?Y.environment:null,R=(v.isMeshStandardMaterial?t:e).get(v.envMap||P),F=R&&R.mapping===Ss?R.image.height:null,k=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const j=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,H=j!==void 0?j.length:0;let se=0;U.morphAttributes.position!==void 0&&(se=1),U.morphAttributes.normal!==void 0&&(se=2),U.morphAttributes.color!==void 0&&(se=3);let B,J,te,ne;if(k){const Ge=Qt[k];B=Ge.vertexShader,J=Ge.fragmentShader}else B=v.vertexShader,J=v.fragmentShader,l.update(v),te=l.getVertexShaderID(v),ne=l.getFragmentShaderID(v);const W=r.getRenderTarget(),be=v.alphaTest>0,ge=v.clearcoat>0,pe=v.iridescence>0;return{isWebGL2:f,shaderID:k,shaderName:v.type,vertexShader:B,fragmentShader:J,defines:v.defines,customVertexShaderID:te,customFragmentShaderID:ne,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:K.isInstancedMesh===!0,instancingColor:K.isInstancedMesh===!0&&K.instanceColor!==null,supportsVertexTextures:h,outputEncoding:W===null?r.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:ti,map:!!v.map,matcap:!!v.matcap,envMap:!!R,envMapMode:R&&R.mapping,envMapCubeUVHeight:F,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===Dg,tangentSpaceNormalMap:v.normalMapType===Ff,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===ze,clearcoat:ge,clearcoatMap:ge&&!!v.clearcoatMap,clearcoatRoughnessMap:ge&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:ge&&!!v.clearcoatNormalMap,iridescence:pe,iridescenceMap:pe&&!!v.iridescenceMap,iridescenceThicknessMap:pe&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ri,alphaMap:!!v.alphaMap,alphaTest:be,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!U.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!N,useFog:v.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:u,skinning:K.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:H,morphTextureStride:se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:v.toneMapped?r.toneMapping:vn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===gn,flipSided:v.side===Ot,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)E.push(I),E.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(_(E,v),M(E,v),E.push(r.outputEncoding)),E.push(v.customProgramCacheKey),E.join()}function _(v,E){v.push(E.precision),v.push(E.outputEncoding),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.combine),v.push(E.vertexUvs),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.map&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.lightMap&&a.enable(7),E.aoMap&&a.enable(8),E.emissiveMap&&a.enable(9),E.bumpMap&&a.enable(10),E.normalMap&&a.enable(11),E.objectSpaceNormalMap&&a.enable(12),E.tangentSpaceNormalMap&&a.enable(13),E.clearcoat&&a.enable(14),E.clearcoatMap&&a.enable(15),E.clearcoatRoughnessMap&&a.enable(16),E.clearcoatNormalMap&&a.enable(17),E.iridescence&&a.enable(18),E.iridescenceMap&&a.enable(19),E.iridescenceThicknessMap&&a.enable(20),E.displacementMap&&a.enable(21),E.specularMap&&a.enable(22),E.roughnessMap&&a.enable(23),E.metalnessMap&&a.enable(24),E.gradientMap&&a.enable(25),E.alphaMap&&a.enable(26),E.alphaTest&&a.enable(27),E.vertexColors&&a.enable(28),E.vertexAlphas&&a.enable(29),E.vertexUvs&&a.enable(30),E.vertexTangents&&a.enable(31),E.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.physicallyCorrectLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.specularIntensityMap&&a.enable(15),E.specularColorMap&&a.enable(16),E.transmission&&a.enable(17),E.transmissionMap&&a.enable(18),E.thicknessMap&&a.enable(19),E.sheen&&a.enable(20),E.sheenColorMap&&a.enable(21),E.sheenRoughnessMap&&a.enable(22),E.decodeVideoTexture&&a.enable(23),E.opaque&&a.enable(24),v.push(a.mask)}function y(v){const E=g[v.type];let I;if(E){const Y=Qt[E];I=o0.clone(Y.uniforms)}else I=v.uniforms;return I}function x(v,E){let I;for(let Y=0,K=c.length;Y<K;Y++){const N=c[Y];if(N.cacheKey===E){I=N,++I.usedTimes;break}}return I===void 0&&(I=new _y(r,E,v,s),c.push(I)),I}function b(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function w(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:x,releaseProgram:b,releaseShaderCache:w,programs:c,dispose:C}}function My(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Sy(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function qc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $c(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,h,d,g,m,p){let _=r[e];return _===void 0?(_={id:u.id,object:u,geometry:h,material:d,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},r[e]=_):(_.id=u.id,_.object=u,_.geometry=h,_.material=d,_.groupOrder=g,_.renderOrder=u.renderOrder,_.z=m,_.group=p),e++,_}function a(u,h,d,g,m,p){const _=o(u,h,d,g,m,p);d.transmission>0?n.push(_):d.transparent===!0?i.push(_):t.push(_)}function l(u,h,d,g,m,p){const _=o(u,h,d,g,m,p);d.transmission>0?n.unshift(_):d.transparent===!0?i.unshift(_):t.unshift(_)}function c(u,h){t.length>1&&t.sort(u||Sy),n.length>1&&n.sort(h||qc),i.length>1&&i.sort(h||qc)}function f(){for(let u=e,h=r.length;u<h;u++){const d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:f,sort:c}}function wy(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new $c,r.set(n,[o])):i>=s.length?(o=new $c,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ty(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Te};break;case"SpotLight":t={position:new O,direction:new O,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new O,halfWidth:new O,halfHeight:new O};break}return r[e.id]=t,t}}}function Ey(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Ay=0;function Cy(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Ly(r,e){const t=new Ty,n=Ey(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)i.probe.push(new O);const s=new O,o=new Pe,a=new Pe;function l(f,u){let h=0,d=0,g=0;for(let Y=0;Y<9;Y++)i.probe[Y].set(0,0,0);let m=0,p=0,_=0,M=0,y=0,x=0,b=0,w=0,C=0,v=0;f.sort(Cy);const E=u!==!0?Math.PI:1;for(let Y=0,K=f.length;Y<K;Y++){const N=f[Y],U=N.color,P=N.intensity,R=N.distance,F=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)h+=U.r*P*E,d+=U.g*P*E,g+=U.b*P*E;else if(N.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(N.sh.coefficients[k],P);else if(N.isDirectionalLight){const k=t.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const j=N.shadow,H=n.get(N);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=F,i.directionalShadowMatrix[m]=N.shadow.matrix,x++}i.directional[m]=k,m++}else if(N.isSpotLight){const k=t.get(N);k.position.setFromMatrixPosition(N.matrixWorld),k.color.copy(U).multiplyScalar(P*E),k.distance=R,k.coneCos=Math.cos(N.angle),k.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),k.decay=N.decay,i.spot[_]=k;const j=N.shadow;if(N.map&&(i.spotLightMap[C]=N.map,C++,j.updateMatrices(N),N.castShadow&&v++),i.spotLightMatrix[_]=j.matrix,N.castShadow){const H=n.get(N);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=F,w++}_++}else if(N.isRectAreaLight){const k=t.get(N);k.color.copy(U).multiplyScalar(P),k.halfWidth.set(N.width*.5,0,0),k.halfHeight.set(0,N.height*.5,0),i.rectArea[M]=k,M++}else if(N.isPointLight){const k=t.get(N);if(k.color.copy(N.color).multiplyScalar(N.intensity*E),k.distance=N.distance,k.decay=N.decay,N.castShadow){const j=N.shadow,H=n.get(N);H.shadowBias=j.bias,H.shadowNormalBias=j.normalBias,H.shadowRadius=j.radius,H.shadowMapSize=j.mapSize,H.shadowCameraNear=j.camera.near,H.shadowCameraFar=j.camera.far,i.pointShadow[p]=H,i.pointShadowMap[p]=F,i.pointShadowMatrix[p]=N.shadow.matrix,b++}i.point[p]=k,p++}else if(N.isHemisphereLight){const k=t.get(N);k.skyColor.copy(N.color).multiplyScalar(P*E),k.groundColor.copy(N.groundColor).multiplyScalar(P*E),i.hemi[y]=k,y++}}M>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;const I=i.hash;(I.directionalLength!==m||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==M||I.hemiLength!==y||I.numDirectionalShadows!==x||I.numPointShadows!==b||I.numSpotShadows!==w||I.numSpotMaps!==C)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=M,i.point.length=p,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=w,i.spotShadowMap.length=w,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=w+C-v,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=v,I.directionalLength=m,I.pointLength=p,I.spotLength=_,I.rectAreaLength=M,I.hemiLength=y,I.numDirectionalShadows=x,I.numPointShadows=b,I.numSpotShadows=w,I.numSpotMaps=C,i.version=Ay++)}function c(f,u){let h=0,d=0,g=0,m=0,p=0;const _=u.matrixWorldInverse;for(let M=0,y=f.length;M<y;M++){const x=f[M];if(x.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),h++}else if(x.isSpotLight){const b=i.spot[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(_),g++}else if(x.isRectAreaLight){const b=i.rectArea[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),a.identity(),o.copy(x.matrixWorld),o.premultiply(_),a.extractRotation(o),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),m++}else if(x.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(_),d++}else if(x.isHemisphereLight){const b=i.hemi[p];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(_),p++}}}return{setup:l,setupView:c,state:i}}function Yc(r,e){const t=new Ly(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Py(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Yc(r,e),t.set(s,[l])):o>=a.length?(l=new Yc(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class Ry extends en{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dy extends en{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new O,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Oy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ny(r,e,t){let n=new To;const i=new Se,s=new Se,o=new je,a=new Ry({depthPacking:Rg}),l=new Dy,c={},f=t.maxTextureSize,u={[xn]:Ot,[Ot]:xn,[gn]:gn},h=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Iy,fragmentShader:Oy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new St(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Vt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cf,this.render=function(x,b,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const C=r.getRenderTarget(),v=r.getActiveCubeFace(),E=r.getActiveMipmapLevel(),I=r.state;I.setBlending(Pn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let Y=0,K=x.length;Y<K;Y++){const N=x[Y],U=N.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;i.copy(U.mapSize);const P=U.getFrameExtents();if(i.multiply(P),s.copy(U.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/P.x),i.x=s.x*P.x,U.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/P.y),i.y=s.y*P.y,U.mapSize.y=s.y)),U.map===null){const F=this.type!==hr?{minFilter:lt,magFilter:lt}:{};U.map=new ni(i.x,i.y,F),U.map.texture.name=N.name+".shadowMap",U.camera.updateProjectionMatrix()}r.setRenderTarget(U.map),r.clear();const R=U.getViewportCount();for(let F=0;F<R;F++){const k=U.getViewport(F);o.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),I.viewport(o),U.updateMatrices(N,F),n=U.getFrustum(),y(b,w,U.camera,N,this.type)}U.isPointLightShadow!==!0&&this.type===hr&&_(U,w),U.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(C,v,E)};function _(x,b){const w=e.update(m);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ni(i.x,i.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(b,null,w,h,m,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(b,null,w,d,m,null)}function M(x,b,w,C,v,E){let I=null;const Y=w.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(Y!==void 0)I=Y;else if(I=w.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const K=I.uuid,N=b.uuid;let U=c[K];U===void 0&&(U={},c[K]=U);let P=U[N];P===void 0&&(P=I.clone(),U[N]=P),I=P}return I.visible=b.visible,I.wireframe=b.wireframe,E===hr?I.side=b.shadowSide!==null?b.shadowSide:b.side:I.side=b.shadowSide!==null?b.shadowSide:u[b.side],I.alphaMap=b.alphaMap,I.alphaTest=b.alphaTest,I.map=b.map,I.clipShadows=b.clipShadows,I.clippingPlanes=b.clippingPlanes,I.clipIntersection=b.clipIntersection,I.displacementMap=b.displacementMap,I.displacementScale=b.displacementScale,I.displacementBias=b.displacementBias,I.wireframeLinewidth=b.wireframeLinewidth,I.linewidth=b.linewidth,w.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(w.matrixWorld),I.nearDistance=C,I.farDistance=v),I}function y(x,b,w,C,v){if(x.visible===!1)return;if(x.layers.test(b.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&v===hr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,x.matrixWorld);const Y=e.update(x),K=x.material;if(Array.isArray(K)){const N=Y.groups;for(let U=0,P=N.length;U<P;U++){const R=N[U],F=K[R.materialIndex];if(F&&F.visible){const k=M(x,F,C,w.near,w.far,v);r.renderBufferDirect(w,null,Y,k,x,R)}}}else if(K.visible){const N=M(x,K,C,w.near,w.far,v);r.renderBufferDirect(w,null,Y,N,x,null)}}const I=x.children;for(let Y=0,K=I.length;Y<K;Y++)y(I[Y],b,w,C,v)}}function Fy(r,e,t){const n=t.isWebGL2;function i(){let D=!1;const q=new je;let Q=null;const fe=new je(0,0,0,0);return{setMask:function(_e){Q!==_e&&!D&&(r.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){D=_e},setClear:function(_e,Be,st,ht,Dn){Dn===!0&&(_e*=ht,Be*=ht,st*=ht),q.set(_e,Be,st,ht),fe.equals(q)===!1&&(r.clearColor(_e,Be,st,ht),fe.copy(q))},reset:function(){D=!1,Q=null,fe.set(-1,0,0,0)}}}function s(){let D=!1,q=null,Q=null,fe=null;return{setTest:function(_e){_e?be(2929):ge(2929)},setMask:function(_e){q!==_e&&!D&&(r.depthMask(_e),q=_e)},setFunc:function(_e){if(Q!==_e){switch(_e){case Qm:r.depthFunc(512);break;case eg:r.depthFunc(519);break;case tg:r.depthFunc(513);break;case Wa:r.depthFunc(515);break;case ng:r.depthFunc(514);break;case ig:r.depthFunc(518);break;case rg:r.depthFunc(516);break;case sg:r.depthFunc(517);break;default:r.depthFunc(515)}Q=_e}},setLocked:function(_e){D=_e},setClear:function(_e){fe!==_e&&(r.clearDepth(_e),fe=_e)},reset:function(){D=!1,q=null,Q=null,fe=null}}}function o(){let D=!1,q=null,Q=null,fe=null,_e=null,Be=null,st=null,ht=null,Dn=null;return{setTest:function(Xe){D||(Xe?be(2960):ge(2960))},setMask:function(Xe){q!==Xe&&!D&&(r.stencilMask(Xe),q=Xe)},setFunc:function(Xe,an,Ut){(Q!==Xe||fe!==an||_e!==Ut)&&(r.stencilFunc(Xe,an,Ut),Q=Xe,fe=an,_e=Ut)},setOp:function(Xe,an,Ut){(Be!==Xe||st!==an||ht!==Ut)&&(r.stencilOp(Xe,an,Ut),Be=Xe,st=an,ht=Ut)},setLocked:function(Xe){D=Xe},setClear:function(Xe){Dn!==Xe&&(r.clearStencil(Xe),Dn=Xe)},reset:function(){D=!1,q=null,Q=null,fe=null,_e=null,Be=null,st=null,ht=null,Dn=null}}}const a=new i,l=new s,c=new o,f=new WeakMap,u=new WeakMap;let h={},d={},g=new WeakMap,m=[],p=null,_=!1,M=null,y=null,x=null,b=null,w=null,C=null,v=null,E=!1,I=null,Y=null,K=null,N=null,U=null;const P=r.getParameter(35661);let R=!1,F=0;const k=r.getParameter(7938);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),R=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),R=F>=2);let j=null,H={};const se=r.getParameter(3088),B=r.getParameter(2978),J=new je().fromArray(se),te=new je().fromArray(B);function ne(D,q,Q){const fe=new Uint8Array(4),_e=r.createTexture();r.bindTexture(D,_e),r.texParameteri(D,10241,9728),r.texParameteri(D,10240,9728);for(let Be=0;Be<Q;Be++)r.texImage2D(q+Be,0,6408,1,1,0,6408,5121,fe);return _e}const W={};W[3553]=ne(3553,3553,1),W[34067]=ne(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),be(2929),l.setFunc(Wa),Ze(!1),mt(kl),be(2884),rt(Pn);function be(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function ge(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function pe(D,q){return d[D]!==q?(r.bindFramebuffer(D,q),d[D]=q,n&&(D===36009&&(d[36160]=q),D===36160&&(d[36009]=q)),!0):!1}function ue(D,q){let Q=m,fe=!1;if(D)if(Q=g.get(q),Q===void 0&&(Q=[],g.set(q,Q)),D.isWebGLMultipleRenderTargets){const _e=D.texture;if(Q.length!==_e.length||Q[0]!==36064){for(let Be=0,st=_e.length;Be<st;Be++)Q[Be]=36064+Be;Q.length=_e.length,fe=!0}}else Q[0]!==36064&&(Q[0]=36064,fe=!0);else Q[0]!==1029&&(Q[0]=1029,fe=!0);fe&&(t.isWebGL2?r.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Ge(D){return p!==D?(r.useProgram(D),p=D,!0):!1}const we={[Ci]:32774,[Vm]:32778,[Hm]:32779};if(n)we[Vl]=32775,we[Hl]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(we[Vl]=D.MIN_EXT,we[Hl]=D.MAX_EXT)}const xe={[Wm]:0,[jm]:1,[Xm]:768,[Lf]:770,[Jm]:776,[Km]:774,[$m]:772,[qm]:769,[Pf]:771,[Zm]:775,[Ym]:773};function rt(D,q,Q,fe,_e,Be,st,ht){if(D===Pn){_===!0&&(ge(3042),_=!1);return}if(_===!1&&(be(3042),_=!0),D!==Gm){if(D!==M||ht!==E){if((y!==Ci||w!==Ci)&&(r.blendEquation(32774),y=Ci,w=Ci),ht)switch(D){case Ri:r.blendFuncSeparate(1,771,1,771);break;case zl:r.blendFunc(1,1);break;case Bl:r.blendFuncSeparate(0,769,0,1);break;case Gl:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ri:r.blendFuncSeparate(770,771,1,771);break;case zl:r.blendFunc(770,1);break;case Bl:r.blendFuncSeparate(0,769,0,1);break;case Gl:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}x=null,b=null,C=null,v=null,M=D,E=ht}return}_e=_e||q,Be=Be||Q,st=st||fe,(q!==y||_e!==w)&&(r.blendEquationSeparate(we[q],we[_e]),y=q,w=_e),(Q!==x||fe!==b||Be!==C||st!==v)&&(r.blendFuncSeparate(xe[Q],xe[fe],xe[Be],xe[st]),x=Q,b=fe,C=Be,v=st),M=D,E=!1}function ft(D,q){D.side===gn?ge(2884):be(2884);let Q=D.side===Ot;q&&(Q=!Q),Ze(Q),D.blending===Ri&&D.transparent===!1?rt(Pn):rt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),a.setMask(D.colorWrite);const fe=D.stencilWrite;c.setTest(fe),fe&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ke(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?be(32926):ge(32926)}function Ze(D){I!==D&&(D?r.frontFace(2304):r.frontFace(2305),I=D)}function mt(D){D!==km?(be(2884),D!==Y&&(D===kl?r.cullFace(1029):D===zm?r.cullFace(1028):r.cullFace(1032))):ge(2884),Y=D}function Ke(D){D!==K&&(R&&r.lineWidth(D),K=D)}function ke(D,q,Q){D?(be(32823),(N!==q||U!==Q)&&(r.polygonOffset(q,Q),N=q,U=Q)):ge(32823)}function Ft(D){D?be(3089):ge(3089)}function wt(D){D===void 0&&(D=33984+P-1),j!==D&&(r.activeTexture(D),j=D)}function A(D,q,Q){Q===void 0&&(j===null?Q=33984+P-1:Q=j);let fe=H[Q];fe===void 0&&(fe={type:void 0,texture:void 0},H[Q]=fe),(fe.type!==D||fe.texture!==q)&&(j!==Q&&(r.activeTexture(Q),j=Q),r.bindTexture(D,q||W[D]),fe.type=D,fe.texture=q)}function S(){const D=H[j];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function L(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(D){J.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),J.copy(D))}function de(D){te.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),te.copy(D))}function Re(D,q){let Q=u.get(q);Q===void 0&&(Q=new WeakMap,u.set(q,Q));let fe=Q.get(D);fe===void 0&&(fe=r.getUniformBlockIndex(q,D.name),Q.set(D,fe))}function De(D,q){const fe=u.get(q).get(D);f.get(q)!==fe&&(r.uniformBlockBinding(q,fe,D.__bindingPointIndex),f.set(q,fe))}function He(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},j=null,H={},d={},g=new WeakMap,m=[],p=null,_=!1,M=null,y=null,x=null,b=null,w=null,C=null,v=null,E=!1,I=null,Y=null,K=null,N=null,U=null,J.set(0,0,r.canvas.width,r.canvas.height),te.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:be,disable:ge,bindFramebuffer:pe,drawBuffers:ue,useProgram:Ge,setBlending:rt,setMaterial:ft,setFlipSided:Ze,setCullFace:mt,setLineWidth:Ke,setPolygonOffset:ke,setScissorTest:Ft,activeTexture:wt,bindTexture:A,unbindTexture:S,compressedTexImage2D:X,compressedTexImage3D:ee,texImage2D:he,texImage3D:le,updateUBOMapping:Re,uniformBlockBinding:De,texStorage2D:z,texStorage3D:ce,texSubImage2D:ie,texSubImage3D:oe,compressedTexSubImage2D:ye,compressedTexSubImage3D:L,scissor:me,viewport:de,reset:He}}function Uy(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,f=i.maxTextureSize,u=i.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,S){return _?new OffscreenCanvas(A,S):Ar("canvas")}function y(A,S,X,ee){let ie=1;if((A.width>ee||A.height>ee)&&(ie=ee/Math.max(A.width,A.height)),ie<1||S===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const oe=S?ys:Math.floor,ye=oe(ie*A.width),L=oe(ie*A.height);m===void 0&&(m=M(ye,L));const z=X?M(ye,L):m;return z.width=ye,z.height=L,z.getContext("2d").drawImage(A,0,0,ye,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ye+"x"+L+")."),z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function x(A){return Za(A.width)&&Za(A.height)}function b(A){return a?!1:A.wrapS!==Bt||A.wrapT!==Bt||A.minFilter!==lt&&A.minFilter!==Tt}function w(A,S){return A.generateMipmaps&&S&&A.minFilter!==lt&&A.minFilter!==Tt}function C(A){r.generateMipmap(A)}function v(A,S,X,ee,ie=!1){if(a===!1)return S;if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe=S;return S===6403&&(X===5126&&(oe=33326),X===5131&&(oe=33325),X===5121&&(oe=33321)),S===33319&&(X===5126&&(oe=33328),X===5131&&(oe=33327),X===5121&&(oe=33323)),S===6408&&(X===5126&&(oe=34836),X===5131&&(oe=34842),X===5121&&(oe=ee===ze&&ie===!1?35907:32856),X===32819&&(oe=32854),X===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function E(A,S,X){return w(A,X)===!0||A.isFramebufferTexture&&A.minFilter!==lt&&A.minFilter!==Tt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function I(A){return A===lt||A===qa||A===ds?9728:9729}function Y(A){const S=A.target;S.removeEventListener("dispose",Y),N(S),S.isVideoTexture&&g.delete(S)}function K(A){const S=A.target;S.removeEventListener("dispose",K),P(S)}function N(A){const S=n.get(A);if(S.__webglInit===void 0)return;const X=A.source,ee=p.get(X);if(ee){const ie=ee[S.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&U(A),Object.keys(ee).length===0&&p.delete(X)}n.remove(A)}function U(A){const S=n.get(A);r.deleteTexture(S.__webglTexture);const X=A.source,ee=p.get(X);delete ee[S.__cacheKey],o.memory.textures--}function P(A){const S=A.texture,X=n.get(A),ee=n.get(S);if(ee.__webglTexture!==void 0&&(r.deleteTexture(ee.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++)r.deleteFramebuffer(X.__webglFramebuffer[ie]),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer[ie]);else{if(r.deleteFramebuffer(X.__webglFramebuffer),X.__webglDepthbuffer&&r.deleteRenderbuffer(X.__webglDepthbuffer),X.__webglMultisampledFramebuffer&&r.deleteFramebuffer(X.__webglMultisampledFramebuffer),X.__webglColorRenderbuffer)for(let ie=0;ie<X.__webglColorRenderbuffer.length;ie++)X.__webglColorRenderbuffer[ie]&&r.deleteRenderbuffer(X.__webglColorRenderbuffer[ie]);X.__webglDepthRenderbuffer&&r.deleteRenderbuffer(X.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ie=0,oe=S.length;ie<oe;ie++){const ye=n.get(S[ie]);ye.__webglTexture&&(r.deleteTexture(ye.__webglTexture),o.memory.textures--),n.remove(S[ie])}n.remove(S),n.remove(A)}let R=0;function F(){R=0}function k(){const A=R;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),R+=1,A}function j(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.encoding),S.join()}function H(A,S){const X=n.get(A);if(A.isVideoTexture&&Ft(A),A.isRenderTargetTexture===!1&&A.version>0&&X.__version!==A.version){const ee=A.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(X,A,S);return}}t.bindTexture(3553,X.__webglTexture,33984+S)}function se(A,S){const X=n.get(A);if(A.version>0&&X.__version!==A.version){ge(X,A,S);return}t.bindTexture(35866,X.__webglTexture,33984+S)}function B(A,S){const X=n.get(A);if(A.version>0&&X.__version!==A.version){ge(X,A,S);return}t.bindTexture(32879,X.__webglTexture,33984+S)}function J(A,S){const X=n.get(A);if(A.version>0&&X.__version!==A.version){pe(X,A,S);return}t.bindTexture(34067,X.__webglTexture,33984+S)}const te={[ki]:10497,[Bt]:33071,[xs]:33648},ne={[lt]:9728,[qa]:9984,[ds]:9986,[Tt]:9729,[If]:9985,[Qn]:9987};function W(A,S,X){if(X?(r.texParameteri(A,10242,te[S.wrapS]),r.texParameteri(A,10243,te[S.wrapT]),(A===32879||A===35866)&&r.texParameteri(A,32882,te[S.wrapR]),r.texParameteri(A,10240,ne[S.magFilter]),r.texParameteri(A,10241,ne[S.minFilter])):(r.texParameteri(A,10242,33071),r.texParameteri(A,10243,33071),(A===32879||A===35866)&&r.texParameteri(A,32882,33071),(S.wrapS!==Bt||S.wrapT!==Bt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(A,10240,I(S.magFilter)),r.texParameteri(A,10241,I(S.minFilter)),S.minFilter!==lt&&S.minFilter!==Tt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(S.magFilter===lt||S.minFilter!==ds&&S.minFilter!==Qn||S.type===Ln&&e.has("OES_texture_float_linear")===!1||a===!1&&S.type===Sr&&e.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||n.get(S).__currentAnisotropy)&&(r.texParameterf(A,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy)}}function be(A,S){let X=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",Y));const ee=S.source;let ie=p.get(ee);ie===void 0&&(ie={},p.set(ee,ie));const oe=j(S);if(oe!==A.__cacheKey){ie[oe]===void 0&&(ie[oe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,X=!0),ie[oe].usedTimes++;const ye=ie[A.__cacheKey];ye!==void 0&&(ie[A.__cacheKey].usedTimes--,ye.usedTimes===0&&U(S)),A.__cacheKey=oe,A.__webglTexture=ie[oe].texture}return X}function ge(A,S,X){let ee=3553;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ee=35866),S.isData3DTexture&&(ee=32879);const ie=be(A,S),oe=S.source;t.bindTexture(ee,A.__webglTexture,33984+X);const ye=n.get(oe);if(oe.version!==ye.__version||ie===!0){t.activeTexture(33984+X),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const L=b(S)&&x(S.image)===!1;let z=y(S.image,L,!1,f);z=wt(S,z);const ce=x(z)||a,he=s.convert(S.format,S.encoding);let le=s.convert(S.type),me=v(S.internalFormat,he,le,S.encoding,S.isVideoTexture);W(ee,S,ce);let de;const Re=S.mipmaps,De=a&&S.isVideoTexture!==!0,He=ye.__version===void 0||ie===!0,D=E(S,z,ce);if(S.isDepthTexture)me=6402,a?S.type===Ln?me=36012:S.type===jn?me=33190:S.type===Di?me=35056:me=33189:S.type===Ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===$n&&me===6402&&S.type!==Of&&S.type!==jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=jn,le=s.convert(S.type)),S.format===zi&&me===6402&&(me=34041,S.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Di,le=s.convert(S.type))),He&&(De?t.texStorage2D(3553,1,me,z.width,z.height):t.texImage2D(3553,0,me,z.width,z.height,0,he,le,null));else if(S.isDataTexture)if(Re.length>0&&ce){De&&He&&t.texStorage2D(3553,D,me,Re[0].width,Re[0].height);for(let q=0,Q=Re.length;q<Q;q++)de=Re[q],De?t.texSubImage2D(3553,q,0,0,de.width,de.height,he,le,de.data):t.texImage2D(3553,q,me,de.width,de.height,0,he,le,de.data);S.generateMipmaps=!1}else De?(He&&t.texStorage2D(3553,D,me,z.width,z.height),t.texSubImage2D(3553,0,0,0,z.width,z.height,he,le,z.data)):t.texImage2D(3553,0,me,z.width,z.height,0,he,le,z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&He&&t.texStorage3D(35866,D,me,Re[0].width,Re[0].height,z.depth);for(let q=0,Q=Re.length;q<Q;q++)de=Re[q],S.format!==Gt?he!==null?De?t.compressedTexSubImage3D(35866,q,0,0,0,de.width,de.height,z.depth,he,de.data,0,0):t.compressedTexImage3D(35866,q,me,de.width,de.height,z.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(35866,q,0,0,0,de.width,de.height,z.depth,he,le,de.data):t.texImage3D(35866,q,me,de.width,de.height,z.depth,0,he,le,de.data)}else{De&&He&&t.texStorage2D(3553,D,me,Re[0].width,Re[0].height);for(let q=0,Q=Re.length;q<Q;q++)de=Re[q],S.format!==Gt?he!==null?De?t.compressedTexSubImage2D(3553,q,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(3553,q,me,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(3553,q,0,0,de.width,de.height,he,le,de.data):t.texImage2D(3553,q,me,de.width,de.height,0,he,le,de.data)}else if(S.isDataArrayTexture)De?(He&&t.texStorage3D(35866,D,me,z.width,z.height,z.depth),t.texSubImage3D(35866,0,0,0,0,z.width,z.height,z.depth,he,le,z.data)):t.texImage3D(35866,0,me,z.width,z.height,z.depth,0,he,le,z.data);else if(S.isData3DTexture)De?(He&&t.texStorage3D(32879,D,me,z.width,z.height,z.depth),t.texSubImage3D(32879,0,0,0,0,z.width,z.height,z.depth,he,le,z.data)):t.texImage3D(32879,0,me,z.width,z.height,z.depth,0,he,le,z.data);else if(S.isFramebufferTexture){if(He)if(De)t.texStorage2D(3553,D,me,z.width,z.height);else{let q=z.width,Q=z.height;for(let fe=0;fe<D;fe++)t.texImage2D(3553,fe,me,q,Q,0,he,le,null),q>>=1,Q>>=1}}else if(Re.length>0&&ce){De&&He&&t.texStorage2D(3553,D,me,Re[0].width,Re[0].height);for(let q=0,Q=Re.length;q<Q;q++)de=Re[q],De?t.texSubImage2D(3553,q,0,0,he,le,de):t.texImage2D(3553,q,me,he,le,de);S.generateMipmaps=!1}else De?(He&&t.texStorage2D(3553,D,me,z.width,z.height),t.texSubImage2D(3553,0,0,0,he,le,z)):t.texImage2D(3553,0,me,he,le,z);w(S,ce)&&C(ee),ye.__version=oe.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function pe(A,S,X){if(S.image.length!==6)return;const ee=be(A,S),ie=S.source;t.bindTexture(34067,A.__webglTexture,33984+X);const oe=n.get(ie);if(ie.version!==oe.__version||ee===!0){t.activeTexture(33984+X),r.pixelStorei(37440,S.flipY),r.pixelStorei(37441,S.premultiplyAlpha),r.pixelStorei(3317,S.unpackAlignment),r.pixelStorei(37443,0);const ye=S.isCompressedTexture||S.image[0].isCompressedTexture,L=S.image[0]&&S.image[0].isDataTexture,z=[];for(let q=0;q<6;q++)!ye&&!L?z[q]=y(S.image[q],!1,!0,c):z[q]=L?S.image[q].image:S.image[q],z[q]=wt(S,z[q]);const ce=z[0],he=x(ce)||a,le=s.convert(S.format,S.encoding),me=s.convert(S.type),de=v(S.internalFormat,le,me,S.encoding),Re=a&&S.isVideoTexture!==!0,De=oe.__version===void 0||ee===!0;let He=E(S,ce,he);W(34067,S,he);let D;if(ye){Re&&De&&t.texStorage2D(34067,He,de,ce.width,ce.height);for(let q=0;q<6;q++){D=z[q].mipmaps;for(let Q=0;Q<D.length;Q++){const fe=D[Q];S.format!==Gt?le!==null?Re?t.compressedTexSubImage2D(34069+q,Q,0,0,fe.width,fe.height,le,fe.data):t.compressedTexImage2D(34069+q,Q,de,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+q,Q,0,0,fe.width,fe.height,le,me,fe.data):t.texImage2D(34069+q,Q,de,fe.width,fe.height,0,le,me,fe.data)}}}else{D=S.mipmaps,Re&&De&&(D.length>0&&He++,t.texStorage2D(34067,He,de,z[0].width,z[0].height));for(let q=0;q<6;q++)if(L){Re?t.texSubImage2D(34069+q,0,0,0,z[q].width,z[q].height,le,me,z[q].data):t.texImage2D(34069+q,0,de,z[q].width,z[q].height,0,le,me,z[q].data);for(let Q=0;Q<D.length;Q++){const _e=D[Q].image[q].image;Re?t.texSubImage2D(34069+q,Q+1,0,0,_e.width,_e.height,le,me,_e.data):t.texImage2D(34069+q,Q+1,de,_e.width,_e.height,0,le,me,_e.data)}}else{Re?t.texSubImage2D(34069+q,0,0,0,le,me,z[q]):t.texImage2D(34069+q,0,de,le,me,z[q]);for(let Q=0;Q<D.length;Q++){const fe=D[Q];Re?t.texSubImage2D(34069+q,Q+1,0,0,le,me,fe.image[q]):t.texImage2D(34069+q,Q+1,de,le,me,fe.image[q])}}}w(S,he)&&C(34067),oe.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ue(A,S,X,ee,ie){const oe=s.convert(X.format,X.encoding),ye=s.convert(X.type),L=v(X.internalFormat,oe,ye,X.encoding);n.get(S).__hasExternalTextures||(ie===32879||ie===35866?t.texImage3D(ie,0,L,S.width,S.height,S.depth,0,oe,ye,null):t.texImage2D(ie,0,L,S.width,S.height,0,oe,ye,null)),t.bindFramebuffer(36160,A),ke(S)?h.framebufferTexture2DMultisampleEXT(36160,ee,ie,n.get(X).__webglTexture,0,Ke(S)):(ie===3553||ie>=34069&&ie<=34074)&&r.framebufferTexture2D(36160,ee,ie,n.get(X).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ge(A,S,X){if(r.bindRenderbuffer(36161,A),S.depthBuffer&&!S.stencilBuffer){let ee=33189;if(X||ke(S)){const ie=S.depthTexture;ie&&ie.isDepthTexture&&(ie.type===Ln?ee=36012:ie.type===jn&&(ee=33190));const oe=Ke(S);ke(S)?h.renderbufferStorageMultisampleEXT(36161,oe,ee,S.width,S.height):r.renderbufferStorageMultisample(36161,oe,ee,S.width,S.height)}else r.renderbufferStorage(36161,ee,S.width,S.height);r.framebufferRenderbuffer(36160,36096,36161,A)}else if(S.depthBuffer&&S.stencilBuffer){const ee=Ke(S);X&&ke(S)===!1?r.renderbufferStorageMultisample(36161,ee,35056,S.width,S.height):ke(S)?h.renderbufferStorageMultisampleEXT(36161,ee,35056,S.width,S.height):r.renderbufferStorage(36161,34041,S.width,S.height),r.framebufferRenderbuffer(36160,33306,36161,A)}else{const ee=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let ie=0;ie<ee.length;ie++){const oe=ee[ie],ye=s.convert(oe.format,oe.encoding),L=s.convert(oe.type),z=v(oe.internalFormat,ye,L,oe.encoding),ce=Ke(S);X&&ke(S)===!1?r.renderbufferStorageMultisample(36161,ce,z,S.width,S.height):ke(S)?h.renderbufferStorageMultisampleEXT(36161,ce,z,S.width,S.height):r.renderbufferStorage(36161,z,S.width,S.height)}}r.bindRenderbuffer(36161,null)}function we(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const ee=n.get(S.depthTexture).__webglTexture,ie=Ke(S);if(S.depthTexture.format===$n)ke(S)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,ee,0,ie):r.framebufferTexture2D(36160,36096,3553,ee,0);else if(S.depthTexture.format===zi)ke(S)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,ee,0,ie):r.framebufferTexture2D(36160,33306,3553,ee,0);else throw new Error("Unknown depthTexture format")}function xe(A){const S=n.get(A),X=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");we(S.__webglFramebuffer,A)}else if(X){S.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)t.bindFramebuffer(36160,S.__webglFramebuffer[ee]),S.__webglDepthbuffer[ee]=r.createRenderbuffer(),Ge(S.__webglDepthbuffer[ee],A,!1)}else t.bindFramebuffer(36160,S.__webglFramebuffer),S.__webglDepthbuffer=r.createRenderbuffer(),Ge(S.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function rt(A,S,X){const ee=n.get(A);S!==void 0&&ue(ee.__webglFramebuffer,A,A.texture,36064,3553),X!==void 0&&xe(A)}function ft(A){const S=A.texture,X=n.get(A),ee=n.get(S);A.addEventListener("dispose",K),A.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=S.version,o.memory.textures++);const ie=A.isWebGLCubeRenderTarget===!0,oe=A.isWebGLMultipleRenderTargets===!0,ye=x(A)||a;if(ie){X.__webglFramebuffer=[];for(let L=0;L<6;L++)X.__webglFramebuffer[L]=r.createFramebuffer()}else{if(X.__webglFramebuffer=r.createFramebuffer(),oe)if(i.drawBuffers){const L=A.texture;for(let z=0,ce=L.length;z<ce;z++){const he=n.get(L[z]);he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&ke(A)===!1){const L=oe?S:[S];X.__webglMultisampledFramebuffer=r.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,X.__webglMultisampledFramebuffer);for(let z=0;z<L.length;z++){const ce=L[z];X.__webglColorRenderbuffer[z]=r.createRenderbuffer(),r.bindRenderbuffer(36161,X.__webglColorRenderbuffer[z]);const he=s.convert(ce.format,ce.encoding),le=s.convert(ce.type),me=v(ce.internalFormat,he,le,ce.encoding,A.isXRRenderTarget===!0),de=Ke(A);r.renderbufferStorageMultisample(36161,de,me,A.width,A.height),r.framebufferRenderbuffer(36160,36064+z,36161,X.__webglColorRenderbuffer[z])}r.bindRenderbuffer(36161,null),A.depthBuffer&&(X.__webglDepthRenderbuffer=r.createRenderbuffer(),Ge(X.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ie){t.bindTexture(34067,ee.__webglTexture),W(34067,S,ye);for(let L=0;L<6;L++)ue(X.__webglFramebuffer[L],A,S,36064,34069+L);w(S,ye)&&C(34067),t.unbindTexture()}else if(oe){const L=A.texture;for(let z=0,ce=L.length;z<ce;z++){const he=L[z],le=n.get(he);t.bindTexture(3553,le.__webglTexture),W(3553,he,ye),ue(X.__webglFramebuffer,A,he,36064+z,3553),w(he,ye)&&C(3553)}t.unbindTexture()}else{let L=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?L=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,ee.__webglTexture),W(L,S,ye),ue(X.__webglFramebuffer,A,S,36064,L),w(S,ye)&&C(L),t.unbindTexture()}A.depthBuffer&&xe(A)}function Ze(A){const S=x(A)||a,X=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ee=0,ie=X.length;ee<ie;ee++){const oe=X[ee];if(w(oe,S)){const ye=A.isWebGLCubeRenderTarget?34067:3553,L=n.get(oe).__webglTexture;t.bindTexture(ye,L),C(ye),t.unbindTexture()}}}function mt(A){if(a&&A.samples>0&&ke(A)===!1){const S=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],X=A.width,ee=A.height;let ie=16384;const oe=[],ye=A.stencilBuffer?33306:36096,L=n.get(A),z=A.isWebGLMultipleRenderTargets===!0;if(z)for(let ce=0;ce<S.length;ce++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let ce=0;ce<S.length;ce++){oe.push(36064+ce),A.depthBuffer&&oe.push(ye);const he=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(he===!1&&(A.depthBuffer&&(ie|=256),A.stencilBuffer&&(ie|=1024)),z&&r.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ce]),he===!0&&(r.invalidateFramebuffer(36008,[ye]),r.invalidateFramebuffer(36009,[ye])),z){const le=n.get(S[ce]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,le,0)}r.blitFramebuffer(0,0,X,ee,0,0,X,ee,ie,9728),d&&r.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),z)for(let ce=0;ce<S.length;ce++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+ce,36161,L.__webglColorRenderbuffer[ce]);const he=n.get(S[ce]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),r.framebufferTexture2D(36009,36064+ce,3553,he,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function Ke(A){return Math.min(u,A.samples)}function ke(A){const S=n.get(A);return a&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ft(A){const S=o.render.frame;g.get(A)!==S&&(g.set(A,S),A.update())}function wt(A,S){const X=A.encoding,ee=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ka||X!==ti&&(X===ze?a===!1?e.has("EXT_sRGB")===!0&&ee===Gt?(A.format=Ka,A.minFilter=Tt,A.generateMipmaps=!1):S=Bf.sRGBToLinear(S):(ee!==Gt||ie!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",X)),S}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=H,this.setTexture2DArray=se,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=rt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ke}function ky(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===ei)return 5121;if(s===gg)return 32819;if(s===_g)return 32820;if(s===dg)return 5120;if(s===pg)return 5122;if(s===Of)return 5123;if(s===mg)return 5124;if(s===jn)return 5125;if(s===Ln)return 5126;if(s===Sr)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===vg)return 6406;if(s===Gt)return 6408;if(s===xg)return 6409;if(s===yg)return 6410;if(s===$n)return 6402;if(s===zi)return 34041;if(s===Ka)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===bg)return 6403;if(s===Mg)return 36244;if(s===Sg)return 33319;if(s===wg)return 33320;if(s===Tg)return 36249;if(s===Vs||s===Hs||s===Ws||s===js)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Vs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Hs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ws)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===js)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Vs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Hs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ws)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===js)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wl||s===jl||s===Xl||s===ql)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xl)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ql)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Eg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$l||s===Yl)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===$l)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Yl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kl||s===Zl||s===Jl||s===Ql||s===ec||s===tc||s===nc||s===ic||s===rc||s===sc||s===ac||s===oc||s===lc||s===cc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Kl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Zl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Jl)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Ql)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ec)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tc)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nc)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ic)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rc)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sc)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ac)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===oc)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lc)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cc)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Xs)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Xs)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ag||s===uc||s===fc||s===hc)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Xs)return a.COMPRESSED_RED_RGTC1_EXT;if(s===uc)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===fc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===hc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Di?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class zy extends yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class qn extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const By={type:"move"};class va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const m of e.hand.values()){const p=t.getJointPose(m,n),_=this._getHandJoint(c,m);p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(By)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Gy extends ut{constructor(e,t,n,i,s,o,a,l,c,f){if(f=f!==void 0?f:$n,f!==$n&&f!==zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===$n&&(n=jn),n===void 0&&f===zi&&(n=Di),super(null,i,s,o,a,l,f,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:lt,this.minFilter=l!==void 0?l:lt,this.flipY=!1,this.generateMipmaps=!1}}class Vy extends oi{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,g=null;const m=t.getContextAttributes();let p=null,_=null;const M=[],y=[],x=new Set,b=new Map,w=new yt;w.layers.enable(1),w.viewport=new je;const C=new yt;C.layers.enable(2),C.viewport=new je;const v=[w,C],E=new zy;E.layers.enable(1),E.layers.enable(2);let I=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let J=M[B];return J===void 0&&(J=new va,M[B]=J),J.getTargetRaySpace()},this.getControllerGrip=function(B){let J=M[B];return J===void 0&&(J=new va,M[B]=J),J.getGripSpace()},this.getHand=function(B){let J=M[B];return J===void 0&&(J=new va,M[B]=J),J.getHandSpace()};function K(B){const J=y.indexOf(B.inputSource);if(J===-1)return;const te=M[J];te!==void 0&&te.dispatchEvent({type:B.type,data:B.inputSource})}function N(){i.removeEventListener("select",K),i.removeEventListener("selectstart",K),i.removeEventListener("selectend",K),i.removeEventListener("squeeze",K),i.removeEventListener("squeezestart",K),i.removeEventListener("squeezeend",K),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",U);for(let B=0;B<M.length;B++){const J=y[B];J!==null&&(y[B]=null,M[B].disconnect(J))}I=null,Y=null,e.setRenderTarget(p),d=null,h=null,u=null,i=null,_=null,se.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(B){if(i=B,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",K),i.addEventListener("selectstart",K),i.addEventListener("selectend",K),i.addEventListener("squeeze",K),i.addEventListener("squeezestart",K),i.addEventListener("squeezeend",K),i.addEventListener("end",N),i.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:d}),_=new ni(d.framebufferWidth,d.framebufferHeight,{format:Gt,type:ei,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let J=null,te=null,ne=null;m.depth&&(ne=m.stencil?35056:33190,J=m.stencil?zi:$n,te=m.stencil?Di:jn);const W={colorFormat:32856,depthFormat:ne,scaleFactor:s};u=new XRWebGLBinding(i,t),h=u.createProjectionLayer(W),i.updateRenderState({layers:[h]}),_=new ni(h.textureWidth,h.textureHeight,{format:Gt,type:ei,depthTexture:new Gy(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const be=e.properties.get(_);be.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),se.setContext(i),se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function U(B){for(let J=0;J<B.removed.length;J++){const te=B.removed[J],ne=y.indexOf(te);ne>=0&&(y[ne]=null,M[ne].disconnect(te))}for(let J=0;J<B.added.length;J++){const te=B.added[J];let ne=y.indexOf(te);if(ne===-1){for(let be=0;be<M.length;be++)if(be>=y.length){y.push(te),ne=be;break}else if(y[be]===null){y[be]=te,ne=be;break}if(ne===-1)break}const W=M[ne];W&&W.connect(te)}}const P=new O,R=new O;function F(B,J,te){P.setFromMatrixPosition(J.matrixWorld),R.setFromMatrixPosition(te.matrixWorld);const ne=P.distanceTo(R),W=J.projectionMatrix.elements,be=te.projectionMatrix.elements,ge=W[14]/(W[10]-1),pe=W[14]/(W[10]+1),ue=(W[9]+1)/W[5],Ge=(W[9]-1)/W[5],we=(W[8]-1)/W[0],xe=(be[8]+1)/be[0],rt=ge*we,ft=ge*xe,Ze=ne/(-we+xe),mt=Ze*-we;J.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(mt),B.translateZ(Ze),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const Ke=ge+Ze,ke=pe+Ze,Ft=rt-mt,wt=ft+(ne-mt),A=ue*pe/ke*Ke,S=Ge*pe/ke*Ke;B.projectionMatrix.makePerspective(Ft,wt,A,S,Ke,ke)}function k(B,J){J===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(J.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(i===null)return;E.near=C.near=w.near=B.near,E.far=C.far=w.far=B.far,(I!==E.near||Y!==E.far)&&(i.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,Y=E.far);const J=B.parent,te=E.cameras;k(E,J);for(let W=0;W<te.length;W++)k(te[W],J);E.matrixWorld.decompose(E.position,E.quaternion,E.scale),B.matrix.copy(E.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale);const ne=B.children;for(let W=0,be=ne.length;W<be;W++)ne[W].updateMatrixWorld(!0);te.length===2?F(E,w,C):E.projectionMatrix.copy(w.projectionMatrix)},this.getCamera=function(){return E},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)},this.getPlanes=function(){return x};let j=null;function H(B,J){if(f=J.getViewerPose(c||o),g=J,f!==null){const te=f.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let ne=!1;te.length!==E.cameras.length&&(E.cameras.length=0,ne=!0);for(let W=0;W<te.length;W++){const be=te[W];let ge=null;if(d!==null)ge=d.getViewport(be);else{const ue=u.getViewSubImage(h,be);ge=ue.viewport,W===0&&(e.setRenderTargetTextures(_,ue.colorTexture,h.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(_))}let pe=v[W];pe===void 0&&(pe=new yt,pe.layers.enable(W),pe.viewport=new je,v[W]=pe),pe.matrix.fromArray(be.transform.matrix),pe.projectionMatrix.fromArray(be.projectionMatrix),pe.viewport.set(ge.x,ge.y,ge.width,ge.height),W===0&&E.matrix.copy(pe.matrix),ne===!0&&E.cameras.push(pe)}}for(let te=0;te<M.length;te++){const ne=y[te],W=M[te];ne!==null&&W!==void 0&&W.update(ne,J,c||o)}if(j&&j(B,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let te=null;for(const ne of x)J.detectedPlanes.has(ne)||(te===null&&(te=[]),te.push(ne));if(te!==null)for(const ne of te)x.delete(ne),b.delete(ne),n.dispatchEvent({type:"planeremoved",data:ne});for(const ne of J.detectedPlanes)if(!x.has(ne))x.add(ne),b.set(ne,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ne});else{const W=b.get(ne);ne.lastChangedTime>W&&(b.set(ne,ne.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ne}))}}g=null}const se=new $f;se.setAnimationLoop(H),this.setAnimationLoop=function(B){j=B},this.dispose=function(){}}}function Hy(r,e){function t(m,p){p.color.getRGB(m.fogColor.value,jf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,_,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),f(m,p)):p.isMeshPhongMaterial?(i(m,p),c(m,p)):p.isMeshStandardMaterial?(i(m,p),u(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,_,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Ot&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Ot&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const x=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let M;p.map?M=p.map:p.specularMap?M=p.specularMap:p.displacementMap?M=p.displacementMap:p.normalMap?M=p.normalMap:p.bumpMap?M=p.bumpMap:p.roughnessMap?M=p.roughnessMap:p.metalnessMap?M=p.metalnessMap:p.alphaMap?M=p.alphaMap:p.emissiveMap?M=p.emissiveMap:p.clearcoatMap?M=p.clearcoatMap:p.clearcoatNormalMap?M=p.clearcoatNormalMap:p.clearcoatRoughnessMap?M=p.clearcoatRoughnessMap:p.iridescenceMap?M=p.iridescenceMap:p.iridescenceThicknessMap?M=p.iridescenceThicknessMap:p.specularIntensityMap?M=p.specularIntensityMap:p.specularColorMap?M=p.specularColorMap:p.transmissionMap?M=p.transmissionMap:p.thicknessMap?M=p.thicknessMap:p.sheenColorMap?M=p.sheenColorMap:p.sheenRoughnessMap&&(M=p.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),m.uvTransform.value.copy(M.matrix));let y;p.aoMap?y=p.aoMap:p.lightMap&&(y=p.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uv2Transform.value.copy(y.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,_,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=M*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let y;p.map?y=p.map:p.alphaMap&&(y=p.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ot&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Wy(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(M,y){const x=y.program;n.uniformBlockBinding(M,x)}function c(M,y){let x=i[M.id];x===void 0&&(g(M),x=f(M),i[M.id]=x,M.addEventListener("dispose",p));const b=y.program;n.updateUBOMapping(M,b);const w=e.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function f(M){const y=u();M.__bindingPointIndex=y;const x=r.createBuffer(),b=M.__size,w=M.usage;return r.bindBuffer(35345,x),r.bufferData(35345,b,w),r.bindBuffer(35345,null),r.bindBufferBase(35345,y,x),x}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const y=i[M.id],x=M.uniforms,b=M.__cache;r.bindBuffer(35345,y);for(let w=0,C=x.length;w<C;w++){const v=x[w];if(d(v,w,b)===!0){const E=v.__offset,I=Array.isArray(v.value)?v.value:[v.value];let Y=0;for(let K=0;K<I.length;K++){const N=I[K],U=m(N);typeof N=="number"?(v.__data[0]=N,r.bufferSubData(35345,E+Y,v.__data)):N.isMatrix3?(v.__data[0]=N.elements[0],v.__data[1]=N.elements[1],v.__data[2]=N.elements[2],v.__data[3]=N.elements[0],v.__data[4]=N.elements[3],v.__data[5]=N.elements[4],v.__data[6]=N.elements[5],v.__data[7]=N.elements[0],v.__data[8]=N.elements[6],v.__data[9]=N.elements[7],v.__data[10]=N.elements[8],v.__data[11]=N.elements[0]):(N.toArray(v.__data,Y),Y+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,E,v.__data)}}r.bindBuffer(35345,null)}function d(M,y,x){const b=M.value;if(x[y]===void 0){if(typeof b=="number")x[y]=b;else{const w=Array.isArray(b)?b:[b],C=[];for(let v=0;v<w.length;v++)C.push(w[v].clone());x[y]=C}return!0}else if(typeof b=="number"){if(x[y]!==b)return x[y]=b,!0}else{const w=Array.isArray(x[y])?x[y]:[x[y]],C=Array.isArray(b)?b:[b];for(let v=0;v<w.length;v++){const E=w[v];if(E.equals(C[v])===!1)return E.copy(C[v]),!0}}return!1}function g(M){const y=M.uniforms;let x=0;const b=16;let w=0;for(let C=0,v=y.length;C<v;C++){const E=y[C],I={boundary:0,storage:0},Y=Array.isArray(E.value)?E.value:[E.value];for(let K=0,N=Y.length;K<N;K++){const U=Y[K],P=m(U);I.boundary+=P.boundary,I.storage+=P.storage}if(E.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=x,C>0){w=x%b;const K=b-w;w!==0&&K-I.boundary<0&&(x+=b-w,E.__offset=x)}x+=I.storage}return w=x%b,w>0&&(x+=b-w),M.__size=x,M.__cache={},this}function m(M){const y={boundary:0,storage:0};return typeof M=="number"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function p(M){const y=M.target;y.removeEventListener("dispose",p);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function _(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:_}}function jy(){const r=Ar("canvas");return r.style.display="block",r}function Qf(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:jy(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=r.alpha!==void 0?r.alpha:!1;let u=null,h=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ti,this.physicallyCorrectLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;const m=this;let p=!1,_=0,M=0,y=null,x=-1,b=null;const w=new je,C=new je;let v=null,E=e.width,I=e.height,Y=1,K=null,N=null;const U=new je(0,0,E,I),P=new je(0,0,E,I);let R=!1;const F=new To;let k=!1,j=!1,H=null;const se=new Pe,B=new Se,J=new O,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ne(){return y===null?Y:1}let W=t;function be(T,V){for(let $=0;$<T.length;$++){const G=T[$],Z=e.getContext(G,V);if(Z!==null)return Z}return null}try{const T={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mo}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Re,!1),W===null){const V=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&V.shift(),W=be(V,T),W===null)throw be(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ge,pe,ue,Ge,we,xe,rt,ft,Ze,mt,Ke,ke,Ft,wt,A,S,X,ee,ie,oe,ye,L,z,ce;function he(){ge=new nx(W),pe=new Kv(W,ge,r),ge.init(pe),L=new ky(W,ge,pe),ue=new Fy(W,ge,pe),Ge=new sx,we=new My,xe=new Uy(W,ge,ue,we,pe,L,Ge),rt=new Jv(m),ft=new tx(m),Ze=new p0(W,pe),z=new $v(W,ge,Ze,pe),mt=new ix(W,Ze,Ge,z),Ke=new cx(W,mt,Ze,Ge),ie=new lx(W,pe,xe),S=new Zv(we),ke=new by(m,rt,ft,ge,pe,z,S),Ft=new Hy(m,we),wt=new wy,A=new Py(ge,pe),ee=new qv(m,rt,ft,ue,Ke,f,o),X=new Ny(m,Ke,pe),ce=new Wy(W,Ge,pe,ue),oe=new Yv(W,ge,Ge,pe),ye=new rx(W,ge,Ge,pe),Ge.programs=ke.programs,m.capabilities=pe,m.extensions=ge,m.properties=we,m.renderLists=wt,m.shadowMap=X,m.state=ue,m.info=Ge}he();const le=new Vy(m,W);this.xr=le,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const T=ge.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ge.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(T){T!==void 0&&(Y=T,this.setSize(E,I,!1))},this.getSize=function(T){return T.set(E,I)},this.setSize=function(T,V,$){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}E=T,I=V,e.width=Math.floor(T*Y),e.height=Math.floor(V*Y),$!==!1&&(e.style.width=T+"px",e.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set(E*Y,I*Y).floor()},this.setDrawingBufferSize=function(T,V,$){E=T,I=V,Y=$,e.width=Math.floor(T*$),e.height=Math.floor(V*$),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(w)},this.getViewport=function(T){return T.copy(U)},this.setViewport=function(T,V,$,G){T.isVector4?U.set(T.x,T.y,T.z,T.w):U.set(T,V,$,G),ue.viewport(w.copy(U).multiplyScalar(Y).floor())},this.getScissor=function(T){return T.copy(P)},this.setScissor=function(T,V,$,G){T.isVector4?P.set(T.x,T.y,T.z,T.w):P.set(T,V,$,G),ue.scissor(C.copy(P).multiplyScalar(Y).floor())},this.getScissorTest=function(){return R},this.setScissorTest=function(T){ue.setScissorTest(R=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){N=T},this.getClearColor=function(T){return T.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor.apply(ee,arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha.apply(ee,arguments)},this.clear=function(T=!0,V=!0,$=!0){let G=0;T&&(G|=16384),V&&(G|=256),$&&(G|=1024),W.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Re,!1),wt.dispose(),A.dispose(),we.dispose(),rt.dispose(),ft.dispose(),Ke.dispose(),z.dispose(),ce.dispose(),ke.dispose(),le.dispose(),le.removeEventListener("sessionstart",fe),le.removeEventListener("sessionend",_e),H&&(H.dispose(),H=null),Be.stop()};function me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const T=Ge.autoReset,V=X.enabled,$=X.autoUpdate,G=X.needsUpdate,Z=X.type;he(),Ge.autoReset=T,X.enabled=V,X.autoUpdate=$,X.needsUpdate=G,X.type=Z}function Re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function De(T){const V=T.target;V.removeEventListener("dispose",De),He(V)}function He(T){D(T),we.remove(T)}function D(T){const V=we.get(T).programs;V!==void 0&&(V.forEach(function($){ke.releaseProgram($)}),T.isShaderMaterial&&ke.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,$,G,Z,ve){V===null&&(V=te);const Me=Z.isMesh&&Z.matrixWorld.determinant()<0,Ce=uh(T,V,$,G,Z);ue.setMaterial(G,Me);let Le=$.index,Ue=1;G.wireframe===!0&&(Le=mt.getWireframeAttribute($),Ue=2);const Ie=$.drawRange,Oe=$.attributes.position;let Je=Ie.start*Ue,Et=(Ie.start+Ie.count)*Ue;ve!==null&&(Je=Math.max(Je,ve.start*Ue),Et=Math.min(Et,(ve.start+ve.count)*Ue)),Le!==null?(Je=Math.max(Je,0),Et=Math.min(Et,Le.count)):Oe!=null&&(Je=Math.max(Je,0),Et=Math.min(Et,Oe.count));const on=Et-Je;if(on<0||on===1/0)return;z.setup(Z,G,Ce,$,Le);let In,Qe=oe;if(Le!==null&&(In=Ze.get(Le),Qe=ye,Qe.setIndex(In)),Z.isMesh)G.wireframe===!0?(ue.setLineWidth(G.wireframeLinewidth*ne()),Qe.setMode(1)):Qe.setMode(4);else if(Z.isLine){let Ne=G.linewidth;Ne===void 0&&(Ne=1),ue.setLineWidth(Ne*ne()),Z.isLineSegments?Qe.setMode(1):Z.isLineLoop?Qe.setMode(2):Qe.setMode(3)}else Z.isPoints?Qe.setMode(0):Z.isSprite&&Qe.setMode(4);if(Z.isInstancedMesh)Qe.renderInstances(Je,on,Z.count);else if($.isInstancedBufferGeometry){const Ne=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,As=Math.min($.instanceCount,Ne);Qe.renderInstances(Je,on,As)}else Qe.render(Je,on)},this.compile=function(T,V){function $(G,Z,ve){G.transparent===!0&&G.side===gn&&G.forceSinglePass===!1?(G.side=Ot,G.needsUpdate=!0,Ut(G,Z,ve),G.side=xn,G.needsUpdate=!0,Ut(G,Z,ve),G.side=gn):Ut(G,Z,ve)}h=A.get(T),h.init(),g.push(h),T.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights(m.physicallyCorrectLights),T.traverse(function(G){const Z=G.material;if(Z)if(Array.isArray(Z))for(let ve=0;ve<Z.length;ve++){const Me=Z[ve];$(Me,T,G)}else $(Z,T,G)}),g.pop(),h=null};let q=null;function Q(T){q&&q(T)}function fe(){Be.stop()}function _e(){Be.start()}const Be=new $f;Be.setAnimationLoop(Q),typeof self<"u"&&Be.setContext(self),this.setAnimationLoop=function(T){q=T,le.setAnimationLoop(T),T===null?Be.stop():Be.start()},le.addEventListener("sessionstart",fe),le.addEventListener("sessionend",_e),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(V),V=le.getCamera()),T.isScene===!0&&T.onBeforeRender(m,T,V,y),h=A.get(T,g.length),h.init(),g.push(h),se.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),F.setFromProjectionMatrix(se),j=this.localClippingEnabled,k=S.init(this.clippingPlanes,j),u=wt.get(T,d.length),u.init(),d.push(u),st(T,V,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(K,N),k===!0&&S.beginShadows();const $=h.state.shadowsArray;if(X.render($,T,V),k===!0&&S.endShadows(),this.info.autoReset===!0&&this.info.reset(),ee.render(u,T),h.setupLights(m.physicallyCorrectLights),V.isArrayCamera){const G=V.cameras;for(let Z=0,ve=G.length;Z<ve;Z++){const Me=G[Z];ht(u,T,Me,Me.viewport)}}else ht(u,T,V);y!==null&&(xe.updateMultisampleRenderTarget(y),xe.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(m,T,V),z.resetDefaultState(),x=-1,b=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,d.pop(),d.length>0?u=d[d.length-1]:u=null};function st(T,V,$,G){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||F.intersectsSprite(T)){G&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Me=Ke.update(T),Ce=T.material;Ce.visible&&u.push(T,Me,Ce,$,J.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==Ge.render.frame&&(T.skeleton.update(),T.skeleton.frame=Ge.render.frame),!T.frustumCulled||F.intersectsObject(T))){G&&J.setFromMatrixPosition(T.matrixWorld).applyMatrix4(se);const Me=Ke.update(T),Ce=T.material;if(Array.isArray(Ce)){const Le=Me.groups;for(let Ue=0,Ie=Le.length;Ue<Ie;Ue++){const Oe=Le[Ue],Je=Ce[Oe.materialIndex];Je&&Je.visible&&u.push(T,Me,Je,$,J.z,Oe)}}else Ce.visible&&u.push(T,Me,Ce,$,J.z,null)}}const ve=T.children;for(let Me=0,Ce=ve.length;Me<Ce;Me++)st(ve[Me],V,$,G)}function ht(T,V,$,G){const Z=T.opaque,ve=T.transmissive,Me=T.transparent;h.setupLightsView($),k===!0&&S.setGlobalState(m.clippingPlanes,$),ve.length>0&&Dn(Z,V,$),G&&ue.viewport(w.copy(G)),Z.length>0&&Xe(Z,V,$),ve.length>0&&Xe(ve,V,$),Me.length>0&&Xe(Me,V,$),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Dn(T,V,$){const G=pe.isWebGL2;H===null&&(H=new ni(1,1,{generateMipmaps:!0,type:ge.has("EXT_color_buffer_half_float")?Sr:ei,minFilter:Qn,samples:G&&s===!0?4:0})),m.getDrawingBufferSize(B),G?H.setSize(B.x,B.y):H.setSize(ys(B.x),ys(B.y));const Z=m.getRenderTarget();m.setRenderTarget(H),m.clear();const ve=m.toneMapping;m.toneMapping=vn,Xe(T,V,$),m.toneMapping=ve,xe.updateMultisampleRenderTarget(H),xe.updateRenderTargetMipmap(H),m.setRenderTarget(Z)}function Xe(T,V,$){const G=V.isScene===!0?V.overrideMaterial:null;for(let Z=0,ve=T.length;Z<ve;Z++){const Me=T[Z],Ce=Me.object,Le=Me.geometry,Ue=G===null?Me.material:G,Ie=Me.group;Ce.layers.test($.layers)&&an(Ce,V,$,Le,Ue,Ie)}}function an(T,V,$,G,Z,ve){T.onBeforeRender(m,V,$,G,Z,ve),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Z.onBeforeRender(m,V,$,G,T,ve),Z.transparent===!0&&Z.side===gn&&Z.forceSinglePass===!1?(Z.side=Ot,Z.needsUpdate=!0,m.renderBufferDirect($,V,G,Z,T,ve),Z.side=xn,Z.needsUpdate=!0,m.renderBufferDirect($,V,G,Z,T,ve),Z.side=gn):m.renderBufferDirect($,V,G,Z,T,ve),T.onAfterRender(m,V,$,G,Z,ve)}function Ut(T,V,$){V.isScene!==!0&&(V=te);const G=we.get(T),Z=h.state.lights,ve=h.state.shadowsArray,Me=Z.state.version,Ce=ke.getParameters(T,Z.state,ve,V,$),Le=ke.getProgramCacheKey(Ce);let Ue=G.programs;G.environment=T.isMeshStandardMaterial?V.environment:null,G.fog=V.fog,G.envMap=(T.isMeshStandardMaterial?ft:rt).get(T.envMap||G.environment),Ue===void 0&&(T.addEventListener("dispose",De),Ue=new Map,G.programs=Ue);let Ie=Ue.get(Le);if(Ie!==void 0){if(G.currentProgram===Ie&&G.lightsStateVersion===Me)return ko(T,Ce),Ie}else Ce.uniforms=ke.getUniforms(T),T.onBuild($,Ce,m),T.onBeforeCompile(Ce,m),Ie=ke.acquireProgram(Ce,Le),Ue.set(Le,Ie),G.uniforms=Ce.uniforms;const Oe=G.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Oe.clippingPlanes=S.uniform),ko(T,Ce),G.needsLights=hh(T),G.lightsStateVersion=Me,G.needsLights&&(Oe.ambientLightColor.value=Z.state.ambient,Oe.lightProbe.value=Z.state.probe,Oe.directionalLights.value=Z.state.directional,Oe.directionalLightShadows.value=Z.state.directionalShadow,Oe.spotLights.value=Z.state.spot,Oe.spotLightShadows.value=Z.state.spotShadow,Oe.rectAreaLights.value=Z.state.rectArea,Oe.ltc_1.value=Z.state.rectAreaLTC1,Oe.ltc_2.value=Z.state.rectAreaLTC2,Oe.pointLights.value=Z.state.point,Oe.pointLightShadows.value=Z.state.pointShadow,Oe.hemisphereLights.value=Z.state.hemi,Oe.directionalShadowMap.value=Z.state.directionalShadowMap,Oe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Oe.spotShadowMap.value=Z.state.spotShadowMap,Oe.spotLightMatrix.value=Z.state.spotLightMatrix,Oe.spotLightMap.value=Z.state.spotLightMap,Oe.pointShadowMap.value=Z.state.pointShadowMap,Oe.pointShadowMatrix.value=Z.state.pointShadowMatrix);const Je=Ie.getUniforms(),Et=ms.seqWithValue(Je.seq,Oe);return G.currentProgram=Ie,G.uniformsList=Et,Ie}function ko(T,V){const $=we.get(T);$.outputEncoding=V.outputEncoding,$.instancing=V.instancing,$.skinning=V.skinning,$.morphTargets=V.morphTargets,$.morphNormals=V.morphNormals,$.morphColors=V.morphColors,$.morphTargetsCount=V.morphTargetsCount,$.numClippingPlanes=V.numClippingPlanes,$.numIntersection=V.numClipIntersection,$.vertexAlphas=V.vertexAlphas,$.vertexTangents=V.vertexTangents,$.toneMapping=V.toneMapping}function uh(T,V,$,G,Z){V.isScene!==!0&&(V=te),xe.resetTextureUnits();const ve=V.fog,Me=G.isMeshStandardMaterial?V.environment:null,Ce=y===null?m.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:ti,Le=(G.isMeshStandardMaterial?ft:rt).get(G.envMap||Me),Ue=G.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ie=!!G.normalMap&&!!$.attributes.tangent,Oe=!!$.morphAttributes.position,Je=!!$.morphAttributes.normal,Et=!!$.morphAttributes.color,on=G.toneMapped?m.toneMapping:vn,In=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qe=In!==void 0?In.length:0,Ne=we.get(G),As=h.state.lights;if(k===!0&&(j===!0||T!==b)){const At=T===b&&G.id===x;S.setState(G,T,At)}let at=!1;G.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==As.state.version||Ne.outputEncoding!==Ce||Z.isInstancedMesh&&Ne.instancing===!1||!Z.isInstancedMesh&&Ne.instancing===!0||Z.isSkinnedMesh&&Ne.skinning===!1||!Z.isSkinnedMesh&&Ne.skinning===!0||Ne.envMap!==Le||G.fog===!0&&Ne.fog!==ve||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==S.numPlanes||Ne.numIntersection!==S.numIntersection)||Ne.vertexAlphas!==Ue||Ne.vertexTangents!==Ie||Ne.morphTargets!==Oe||Ne.morphNormals!==Je||Ne.morphColors!==Et||Ne.toneMapping!==on||pe.isWebGL2===!0&&Ne.morphTargetsCount!==Qe)&&(at=!0):(at=!0,Ne.__version=G.version);let On=Ne.currentProgram;at===!0&&(On=Ut(G,V,Z));let zo=!1,Zi=!1,Cs=!1;const gt=On.getUniforms(),Nn=Ne.uniforms;if(ue.useProgram(On.program)&&(zo=!0,Zi=!0,Cs=!0),G.id!==x&&(x=G.id,Zi=!0),zo||b!==T){if(gt.setValue(W,"projectionMatrix",T.projectionMatrix),pe.logarithmicDepthBuffer&&gt.setValue(W,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),b!==T&&(b=T,Zi=!0,Cs=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const At=gt.map.cameraPosition;At!==void 0&&At.setValue(W,J.setFromMatrixPosition(T.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&gt.setValue(W,"isOrthographic",T.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||Z.isSkinnedMesh)&&gt.setValue(W,"viewMatrix",T.matrixWorldInverse)}if(Z.isSkinnedMesh){gt.setOptional(W,Z,"bindMatrix"),gt.setOptional(W,Z,"bindMatrixInverse");const At=Z.skeleton;At&&(pe.floatVertexTextures?(At.boneTexture===null&&At.computeBoneTexture(),gt.setValue(W,"boneTexture",At.boneTexture,xe),gt.setValue(W,"boneTextureSize",At.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ls=$.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0&&pe.isWebGL2===!0)&&ie.update(Z,$,G,On),(Zi||Ne.receiveShadow!==Z.receiveShadow)&&(Ne.receiveShadow=Z.receiveShadow,gt.setValue(W,"receiveShadow",Z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Nn.envMap.value=Le,Nn.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Zi&&(gt.setValue(W,"toneMappingExposure",m.toneMappingExposure),Ne.needsLights&&fh(Nn,Cs),ve&&G.fog===!0&&Ft.refreshFogUniforms(Nn,ve),Ft.refreshMaterialUniforms(Nn,G,Y,I,H),ms.upload(W,Ne.uniformsList,Nn,xe)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ms.upload(W,Ne.uniformsList,Nn,xe),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&gt.setValue(W,"center",Z.center),gt.setValue(W,"modelViewMatrix",Z.modelViewMatrix),gt.setValue(W,"normalMatrix",Z.normalMatrix),gt.setValue(W,"modelMatrix",Z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const At=G.uniformsGroups;for(let Ps=0,dh=At.length;Ps<dh;Ps++)if(pe.isWebGL2){const Bo=At[Ps];ce.update(Bo,On),ce.bind(Bo,On)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return On}function fh(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function hh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,V,$){we.get(T.texture).__webglTexture=V,we.get(T.depthTexture).__webglTexture=$;const G=we.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=$===void 0,G.__autoAllocateDepthBuffer||ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,V){const $=we.get(T);$.__webglFramebuffer=V,$.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(T,V=0,$=0){y=T,_=V,M=$;let G=!0,Z=null,ve=!1,Me=!1;if(T){const Le=we.get(T);Le.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),G=!1):Le.__webglFramebuffer===void 0?xe.setupRenderTarget(T):Le.__hasExternalTextures&&xe.rebindTextures(T,we.get(T.texture).__webglTexture,we.get(T.depthTexture).__webglTexture);const Ue=T.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Me=!0);const Ie=we.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Z=Ie[V],ve=!0):pe.isWebGL2&&T.samples>0&&xe.useMultisampledRTT(T)===!1?Z=we.get(T).__webglMultisampledFramebuffer:Z=Ie,w.copy(T.viewport),C.copy(T.scissor),v=T.scissorTest}else w.copy(U).multiplyScalar(Y).floor(),C.copy(P).multiplyScalar(Y).floor(),v=R;if(ue.bindFramebuffer(36160,Z)&&pe.drawBuffers&&G&&ue.drawBuffers(T,Z),ue.viewport(w),ue.scissor(C),ue.setScissorTest(v),ve){const Le=we.get(T.texture);W.framebufferTexture2D(36160,36064,34069+V,Le.__webglTexture,$)}else if(Me){const Le=we.get(T.texture),Ue=V||0;W.framebufferTextureLayer(36160,36064,Le.__webglTexture,$||0,Ue)}x=-1},this.readRenderTargetPixels=function(T,V,$,G,Z,ve,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=we.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ce=Ce[Me]),Ce){ue.bindFramebuffer(36160,Ce);try{const Le=T.texture,Ue=Le.format,Ie=Le.type;if(Ue!==Gt&&L.convert(Ue)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ie===Sr&&(ge.has("EXT_color_buffer_half_float")||pe.isWebGL2&&ge.has("EXT_color_buffer_float"));if(Ie!==ei&&L.convert(Ie)!==W.getParameter(35738)&&!(Ie===Ln&&(pe.isWebGL2||ge.has("OES_texture_float")||ge.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-G&&$>=0&&$<=T.height-Z&&W.readPixels(V,$,G,Z,L.convert(Ue),L.convert(Ie),ve)}finally{const Le=y!==null?we.get(y).__webglFramebuffer:null;ue.bindFramebuffer(36160,Le)}}},this.copyFramebufferToTexture=function(T,V,$=0){const G=Math.pow(2,-$),Z=Math.floor(V.image.width*G),ve=Math.floor(V.image.height*G);xe.setTexture2D(V,0),W.copyTexSubImage2D(3553,$,0,0,T.x,T.y,Z,ve),ue.unbindTexture()},this.copyTextureToTexture=function(T,V,$,G=0){const Z=V.image.width,ve=V.image.height,Me=L.convert($.format),Ce=L.convert($.type);xe.setTexture2D($,0),W.pixelStorei(37440,$.flipY),W.pixelStorei(37441,$.premultiplyAlpha),W.pixelStorei(3317,$.unpackAlignment),V.isDataTexture?W.texSubImage2D(3553,G,T.x,T.y,Z,ve,Me,Ce,V.image.data):V.isCompressedTexture?W.compressedTexSubImage2D(3553,G,T.x,T.y,V.mipmaps[0].width,V.mipmaps[0].height,Me,V.mipmaps[0].data):W.texSubImage2D(3553,G,T.x,T.y,Me,Ce,V.image),G===0&&$.generateMipmaps&&W.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(T,V,$,G,Z=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=T.max.x-T.min.x+1,Me=T.max.y-T.min.y+1,Ce=T.max.z-T.min.z+1,Le=L.convert(G.format),Ue=L.convert(G.type);let Ie;if(G.isData3DTexture)xe.setTexture3D(G,0),Ie=32879;else if(G.isDataArrayTexture)xe.setTexture2DArray(G,0),Ie=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,G.flipY),W.pixelStorei(37441,G.premultiplyAlpha),W.pixelStorei(3317,G.unpackAlignment);const Oe=W.getParameter(3314),Je=W.getParameter(32878),Et=W.getParameter(3316),on=W.getParameter(3315),In=W.getParameter(32877),Qe=$.isCompressedTexture?$.mipmaps[0]:$.image;W.pixelStorei(3314,Qe.width),W.pixelStorei(32878,Qe.height),W.pixelStorei(3316,T.min.x),W.pixelStorei(3315,T.min.y),W.pixelStorei(32877,T.min.z),$.isDataTexture||$.isData3DTexture?W.texSubImage3D(Ie,Z,V.x,V.y,V.z,ve,Me,Ce,Le,Ue,Qe.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ie,Z,V.x,V.y,V.z,ve,Me,Ce,Le,Qe.data)):W.texSubImage3D(Ie,Z,V.x,V.y,V.z,ve,Me,Ce,Le,Ue,Qe),W.pixelStorei(3314,Oe),W.pixelStorei(32878,Je),W.pixelStorei(3316,Et),W.pixelStorei(3315,on),W.pixelStorei(32877,In),Z===0&&G.generateMipmaps&&W.generateMipmap(Ie),ue.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?xe.setTextureCube(T,0):T.isData3DTexture?xe.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?xe.setTexture2DArray(T,0):xe.setTexture2D(T,0),ue.unbindTexture()},this.resetState=function(){_=0,M=0,y=null,ue.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Xy extends Qf{}Xy.prototype.isWebGL1Renderer=!0;class qy extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class $y{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ya,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=qt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const vt=new O;class Lo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyMatrix4(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.applyNormalMatrix(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)vt.fromBufferAttribute(this,t),vt.transformDirection(e),this.setXYZ(t,vt.x,vt.y,vt.z);return this}setX(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=We(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=_n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=_n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=_n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=_n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=We(t,this.array),n=We(n,this.array),i=We(i,this.array),s=We(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new St(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Lo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Kc=new O,Zc=new je,Jc=new je,Yy=new O,Qc=new Pe;class Ky extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new je,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;Zc.fromBufferAttribute(i.attributes.skinIndex,e),Jc.fromBufferAttribute(i.attributes.skinWeight,e),Kc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Jc.getComponent(s);if(o!==0){const a=Zc.getComponent(s);Qc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Yy.copy(Kc).applyMatrix4(Qc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class eh extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zy extends ut{constructor(e=null,t=1,n=1,i,s,o,a,l,c=lt,f=lt,u,h){super(null,o,a,l,c,f,i,s,u,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eu=new Pe,Jy=new Pe;class Po{constructor(e=[],t=[]){this.uuid=qt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Pe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Jy;eu.multiplyMatrices(a,t[s]),eu.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Po(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Uf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Zy(t,e,e,Gt,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new eh),this.bones.push(o),this.boneInverses.push(new Pe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class tu extends St{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const nu=new Pe,iu=new Pe,ss=[],Qy=new Pe,or=new Vt;class eb extends Vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new tu(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Qy)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,nu),iu.multiplyMatrices(n,nu),or.matrixWorld=iu,or.raycast(e,ss);for(let o=0,a=ss.length;o<a;o++){const l=ss[o];l.instanceId=s,l.object=this,t.push(l)}ss.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new tu(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ro extends en{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ru=new O,su=new O,au=new Pe,xa=new ws,as=new qi;class Do extends Ye{constructor(e=new Kt,t=new Ro){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ru.fromBufferAttribute(t,i-1),su.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ru.distanceTo(su);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(i),as.radius+=s,e.ray.intersectsSphere(as)===!1)return;au.copy(i).invert(),xa.copy(e.ray).applyMatrix4(au);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new O,f=new O,u=new O,h=new O,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const _=Math.max(0,o.start),M=Math.min(g.count,o.start+o.count);for(let y=_,x=M-1;y<x;y+=d){const b=g.getX(y),w=g.getX(y+1);if(c.fromBufferAttribute(p,b),f.fromBufferAttribute(p,w),xa.distanceSqToSegment(c,f,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const v=e.ray.origin.distanceTo(h);v<e.near||v>e.far||t.push({distance:v,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let y=_,x=M-1;y<x;y+=d){if(c.fromBufferAttribute(p,y),f.fromBufferAttribute(p,y+1),xa.distanceSqToSegment(c,f,h,u)>l)continue;h.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(h);w<e.near||w>e.far||t.push({distance:w,point:u.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const ou=new O,lu=new O;class th extends Do{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ou.fromBufferAttribute(t,i),lu.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ou.distanceTo(lu);e.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class tb extends Do{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nh extends en{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const cu=new Pe,Qa=new ws,os=new qi,ls=new O;class nb extends Ye{constructor(e=new Kt,t=new nh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),os.copy(n.boundingSphere),os.applyMatrix4(i),os.radius+=s,e.ray.intersectsSphere(os)===!1)return;cu.copy(i).invert(),Qa.copy(e.ray).applyMatrix4(cu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,m=d;g<m;g++){const p=c.getX(g);ls.fromBufferAttribute(u,p),uu(ls,p,l,i,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=h,m=d;g<m;g++)ls.fromBufferAttribute(u,g),uu(ls,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function uu(r,e,t,n,i,s,o){const a=Qa.distanceSqToPoint(r);if(a<t){const l=new O;Qa.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Io extends en{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ff,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class li extends Io{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Tn(r,e,t){return ih(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function cs(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function ih(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ib(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function fu(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function rh(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class Ir{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rb extends Ir{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:dc,endingEnd:dc}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case pc:s=e,a=2*t-n;break;case mc:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pc:o=e,l=2*n-t;break;case mc:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,f=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),m=g*g,p=m*g,_=-h*p+2*h*m-h*g,M=(1+h)*p+(-1.5-2*h)*m+(-.5+h)*g+1,y=(-1-d)*p+(1.5+d)*m+.5*g,x=d*p-d*m;for(let b=0;b!==a;++b)s[b]=_*o[f+b]+M*o[c+b]+y*o[l+b]+x*o[u+b];return s}}class sb extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,f=(n-t)/(i-t),u=1-f;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*f;return s}}class ab extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cs(t,this.TimeBufferType),this.values=cs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cs(e.times,Array),values:cs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ab(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case wr:t=this.InterpolantFactoryMethodDiscrete;break;case Bi:t=this.InterpolantFactoryMethodLinear;break;case qs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return wr;case this.InterpolantFactoryMethodLinear:return Bi;case this.InterpolantFactoryMethodSmooth:return qs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Tn(n,s,o),this.values=Tn(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ih(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Tn(this.times),t=Tn(this.values),n=this.getValueSize(),i=this.getInterpolation()===qs,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],f=e[a+1];if(c!==f&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,h=u-n,d=u+n;for(let g=0;g!==n;++g){const m=t[u+g];if(m!==t[h+g]||m!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Tn(e,0,o),this.values=Tn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Tn(this.times,0),t=Tn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=Bi;class Yi extends sn{}Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=wr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class sh extends sn{}sh.prototype.ValueTypeName="color";class Cr extends sn{}Cr.prototype.ValueTypeName="number";class ob extends Ir{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let f=c+a;c!==f;c+=4)nn.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ri extends sn{InterpolantFactoryMethodLinear(e){return new ob(this.times,this.values,this.getValueSize(),e)}}ri.prototype.ValueTypeName="quaternion";ri.prototype.DefaultInterpolation=Bi;ri.prototype.InterpolantFactoryMethodSmooth=void 0;class Ki extends sn{}Ki.prototype.ValueTypeName="string";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=wr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Lr extends sn{}Lr.prototype.ValueTypeName="vector";class lb{constructor(e,t=-1,n,i=Cg){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=qt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ub(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(sn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const f=ib(l);l=fu(l,1,f),c=fu(c,1,f),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Cr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],f=c.name.match(s);if(f&&f.length>1){const u=f[1];let h=i[u];h||(i[u]=h=[]),h.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,h,d,g,m){if(d.length!==0){const p=[],_=[];rh(d,p,_,g),p.length!==0&&m.push(new u(h,p,_))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const h=c[u].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let g;for(g=0;g<h.length;g++)if(h[g].morphTargets)for(let m=0;m<h[g].morphTargets.length;m++)d[h[g].morphTargets[m]]=-1;for(const m in d){const p=[],_=[];for(let M=0;M!==h[g].morphTargets.length;++M){const y=h[g];p.push(y.time),_.push(y.morphTarget===m?1:0)}i.push(new Cr(".morphTargetInfluence["+m+"]",p,_))}l=d.length*o}else{const d=".bones["+t[u].name+"]";n(Lr,d+".position",h,"pos",i),n(ri,d+".quaternion",h,"rot",i),n(Lr,d+".scale",h,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function cb(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cr;case"vector":case"vector2":case"vector3":case"vector4":return Lr;case"color":return sh;case"quaternion":return ri;case"bool":case"boolean":return Yi;case"string":return Ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ub(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cb(r.type);if(r.times===void 0){const t=[],n=[];rh(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Vi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class fb{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){a++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){const u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){const d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null}}}const hb=new fb;class Or{constructor(e){this.manager=e!==void 0?e:hb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const pn={};class db extends Error{constructor(e,t){super(e),this.response=t}}class ah extends Or{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(pn[e]!==void 0){pn[e].push({onLoad:t,onProgress:n,onError:i});return}pn[e]=[],pn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const f=pn[e],u=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,g=d!==0;let m=0;const p=new ReadableStream({start(_){M();function M(){u.read().then(({done:y,value:x})=>{if(y)_.close();else{m+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let w=0,C=f.length;w<C;w++){const v=f[w];v.onProgress&&v.onProgress(b)}_.enqueue(x),M()}})}}});return new Response(p)}else throw new db(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),h=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{Vi.add(e,c);const f=pn[e];delete pn[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const f=pn[e];if(f===void 0)throw this.manager.itemError(e),c;delete pn[e];for(let u=0,h=f.length;u<h;u++){const d=f[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class pb extends Or{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ar("img");function l(){f(),Vi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){f(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class mb extends Or{constructor(e){super(e)}load(e,t,n,i){const s=new ut,o=new pb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Oo extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const ya=new Pe,hu=new O,du=new O;class No{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new To,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;hu.setFromMatrixPosition(e.matrixWorld),t.position.copy(hu),du.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(du),t.updateMatrixWorld(),ya.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gb extends No{constructor(){super(new yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Er*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _b extends Oo{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pu=new Pe,lr=new O,ba=new O;class vb extends No{constructor(){super(new yt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new je(2,1,1,1),new je(0,1,1,1),new je(3,1,1,1),new je(1,1,1,1),new je(3,0,1,1),new je(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),lr.setFromMatrixPosition(e.matrixWorld),n.position.copy(lr),ba.copy(n.position),ba.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ba),n.updateMatrixWorld(),i.makeTranslation(-lr.x,-lr.y,-lr.z),pu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pu)}}class xb extends Oo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yb extends No{constructor(){super(new Ao(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class oh extends Oo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new yb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eo{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class bb extends Or{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Vi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const Fo="\\[\\]\\.:\\/",Mb=new RegExp("["+Fo+"]","g"),Uo="[^"+Fo+"]",Sb="[^"+Fo.replace("\\.","")+"]",wb=/((?:WC+[\/:])*)/.source.replace("WC",Uo),Tb=/(WCOD+)?/.source.replace("WCOD",Sb),Eb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uo),Ab=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uo),Cb=new RegExp("^"+wb+Tb+Eb+Ab+"$"),Lb=["material","materials","bones","map"];class Pb{constructor(e,t,n){const i=n||Ve.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ve{constructor(e,t,n){this.path=t,this.parsedPath=n||Ve.parseTrackName(t),this.node=Ve.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ve.Composite(e,t,n):new Ve(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mb,"")}static parseTrackName(e){const t=Cb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Lb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Ve.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let f=0;f<e.length;f++)if(e[f].name===c){c=f;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ve.Composite=Pb;Ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ve.prototype.GetterByBindingType=[Ve.prototype._getValue_direct,Ve.prototype._getValue_array,Ve.prototype._getValue_arrayElement,Ve.prototype._getValue_toArray];Ve.prototype.SetterByBindingTypeAndVersioning=[[Ve.prototype._setValue_direct,Ve.prototype._setValue_direct_setNeedsUpdate,Ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_array,Ve.prototype._setValue_array_setNeedsUpdate,Ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_arrayElement,Ve.prototype._setValue_arrayElement_setNeedsUpdate,Ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ve.prototype._setValue_fromArray,Ve.prototype._setValue_fromArray_setNeedsUpdate,Ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Rb{constructor(e,t,n=0,i=1/0){this.ray=new ws(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new wo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return to(e,this,n,t),n.sort(mu),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)to(e[i],this,n,t);return n.sort(mu),n}}function mu(r,e){return r.distance-e.distance}function to(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)to(i[s],e,t,!0)}}class gu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(pt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Db extends th{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new Kt;i.setAttribute("position",new $t(t,3)),i.setAttribute("color",new $t(n,3));const s=new Ro({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Te,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mo);function _u(r,e){if(e===Lg)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===$a||e===Nf){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===$a)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class Ib extends Or{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Nb(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new $b(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=eo.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new ah(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(f){t(f),s.manager.itemEnd(e)},a)}catch(f){a(f)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===lh){try{o[Fe.KHR_BINARY_GLTF]=new Yb(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Fe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new lM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let f=0;f<this.pluginCallbacks.length;f++){const u=this.pluginCallbacks[f](c);a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let f=0;f<s.extensionsUsed.length;++f){const u=s.extensionsUsed[f],h=s.extensionsRequired||[];switch(u){case Fe.KHR_MATERIALS_UNLIT:o[u]=new Fb;break;case Fe.KHR_DRACO_MESH_COMPRESSION:o[u]=new Kb(s,this.dracoLoader);break;case Fe.KHR_TEXTURE_TRANSFORM:o[u]=new Zb;break;case Fe.KHR_MESH_QUANTIZATION:o[u]=new Jb;break;default:h.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function Ob(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Fe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Nb{constructor(e){this.parser=e,this.name=Fe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const f=new Te(16777215);l.color!==void 0&&f.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new oh(f),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xb(f),c.distance=u;break;case"spot":c=new _b(f),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,An(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class Fb{constructor(){this.name=Fe.KHR_MATERIALS_UNLIT}getMaterialType(){return Xn}extendParams(e,t,n){const i=[];e.color=new Te(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,ze))}return Promise.all(i)}}class Ub{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class kb{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Se(a,a)}return Promise.all(s)}}class zb{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class Bb{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Te(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,ze)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Gb{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Vb{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Te(a[0],a[1],a[2]),Promise.all(s)}}class Hb{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Wb{constructor(e){this.parser=e,this.name=Fe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:li}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Te(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,ze)),Promise.all(s)}}class jb{constructor(e){this.parser=e,this.name=Fe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Xb{constructor(e){this.parser=e,this.name=Fe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qb{constructor(e){this.name=Fe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,f=i.count,u=i.byteStride,h=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(f,u,h,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(f*u);return o.decodeGltfBuffer(new Uint8Array(d),f,u,h,i.mode,i.filter),d})})}else return null}}class $b{constructor(e){this.name=Fe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==zt.TRIANGLES&&c.mode!==zt.TRIANGLE_STRIP&&c.mode!==zt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(f=>(l[c]=f,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const f=c.pop(),u=f.isGroup?f.children:[f],h=c[0].count,d=[];for(const g of u){const m=new Pe,p=new O,_=new nn,M=new O(1,1,1),y=new eb(g.geometry,g.material,h);for(let x=0;x<h;x++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,x),l.SCALE&&M.fromBufferAttribute(l.SCALE,x),y.setMatrixAt(x,m.compose(p,_,M));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);Ye.prototype.copy.call(y,g),y.frustumCulled=!1,this.parser.assignFinalMaterial(y),d.push(y)}return f.isGroup?(f.clear(),f.add(...d),f):d[0]}))}}const lh="glTF",cr=12,vu={JSON:1313821514,BIN:5130562};class Yb{constructor(e){this.name=Fe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,cr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==lh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-cr,s=new DataView(e,cr);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===vu.JSON){const c=new Uint8Array(e,cr+o,a);this.content=n.decode(c)}else if(l===vu.BIN){const c=cr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Kb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Fe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const f in o){const u=no[f]||f.toLowerCase();a[u]=o[f]}for(const f in e.attributes){const u=no[f]||f.toLowerCase();if(o[f]!==void 0){const h=n.accessors[e.attributes[f]],d=Ii[h.componentType];c[u]=d.name,l[u]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(f){return new Promise(function(u){i.decodeDracoFile(f,function(h){for(const d in h.attributes){const g=h.attributes[d],m=l[d];m!==void 0&&(g.normalized=m)}u(h)},a,c)})})}}class Zb{constructor(){this.name=Fe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Jb{constructor(){this.name=Fe.KHR_MESH_QUANTIZATION}}class ch extends Ir{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,f=i-t,u=(n-t)/f,h=u*u,d=h*u,g=e*c,m=g-c,p=-2*d+3*h,_=d-h,M=1-p,y=_-h+u;for(let x=0;x!==a;x++){const b=o[m+x+a],w=o[m+x+l]*f,C=o[g+x+a],v=o[g+x]*f;s[x]=M*b+y*w+p*C+_*v}return s}}const Qb=new nn;class eM extends ch{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return Qb.fromArray(s).normalize().toArray(s),s}}const zt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ii={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xu={9728:lt,9729:Tt,9984:qa,9985:If,9986:ds,9987:Qn},yu={33071:Bt,33648:xs,10497:ki},Ma={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},no={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},En={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tM={CUBICSPLINE:void 0,LINEAR:Bi,STEP:wr},Sa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nM(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Io({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:xn})),r.DefaultMaterial}function ur(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function An(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iM(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,f=e.length;c<f;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,f=e.length;c<f;c++){const u=e[c];if(n){const h=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(h)}if(i){const h=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(h)}if(s){const h=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const f=c[0],u=c[1],h=c[2];return n&&(r.morphAttributes.position=f),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function rM(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sM(r){const e=r.extensions&&r.extensions[Fe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+bu(e.attributes):t=r.indices+":"+bu(r.attributes)+":"+r.mode,t}function bu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function io(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function aM(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const oM=new Pe;class lM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Ob,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new mb(this.options.manager):this.textureLoader=new bb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ah(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};ur(s,a,i),An(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,f]of o.children.entries())s(f,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Fe.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(eo.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ma[i.type],a=Ii[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new St(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Ma[i.type],c=Ii[i.componentType],f=c.BYTES_PER_ELEMENT,u=f*l,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let m,p;if(d&&d!==u){const _=Math.floor(h/d),M="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let y=t.cache.get(M);y||(m=new c(a,_*d,i.count*d/f),y=new $y(m,d/f),t.cache.add(M,y)),p=new Lo(y,l,h%d/f,g)}else a===null?m=new c(i.count*l):m=new c(a,h,i.count*l),p=new St(m,l,g);if(i.sparse!==void 0){const _=Ma.SCALAR,M=Ii[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,b=new M(o[1],y,i.sparse.count*_),w=new c(o[2],x,i.sparse.count*l);a!==null&&(p=new St(p.array.slice(),p.itemSize,p.normalized));for(let C=0,v=b.length;C<v;C++){const E=b[C];if(p.setX(E,w[C*l]),l>=2&&p.setY(E,w[C*l+1]),l>=3&&p.setZ(E,w[C*l+2]),l>=4&&p.setW(E,w[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(f){f.flipY=!1,f.name=o.name||a.name||"";const h=(s.samplers||{})[o.sampler]||{};return f.magFilter=xu[h.magFilter]||Tt,f.minFilter=xu[h.minFilter]||Qn,f.wrapS=yu[h.wrapS]||ki,f.wrapT=yu[h.wrapT]||ki,i.associations.set(f,{textures:e}),f}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const h=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(h),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const f=Promise.resolve(l).then(function(u){return new Promise(function(h,d){let g=h;t.isImageBitmapLoader===!0&&(g=function(m){const p=new ut(m);p.needsUpdate=!0,h(p)}),t.load(eo.resolveURL(u,s.path),g,void 0,d)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||aM(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=f,f}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Fe.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Fe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Fe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new nh,en.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Ro,en.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Io}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Fe.KHR_MATERIALS_UNLIT]){const u=i[Fe.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Te(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const h=u.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,ze)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=gn);const f=s.alphaMode||Sa.OPAQUE;if(f===Sa.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,f===Sa.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Xn&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Se(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&o!==Xn&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Xn&&(a.emissive=new Te().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==Xn&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,ze)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),An(u,s),t.associations.set(u,{materials:e}),s.extensions&&ur(i,u,s),u})}createUniqueName(e){const t=Ve.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Fe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Mu(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],f=sM(c),u=i[f];if(u)o.push(u.promise);else{let h;c.extensions&&c.extensions[Fe.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Mu(new Kt,c,t),i[f]={primitive:c,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const f=o[l].material===void 0?nM(this.cache):this.getDependency("material",o[l].material);a.push(f)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),f=l[l.length-1],u=[];for(let d=0,g=f.length;d<g;d++){const m=f[d],p=o[d];let _;const M=c[d];if(p.mode===zt.TRIANGLES||p.mode===zt.TRIANGLE_STRIP||p.mode===zt.TRIANGLE_FAN||p.mode===void 0)_=s.isSkinnedMesh===!0?new Ky(m,M):new Vt(m,M),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),p.mode===zt.TRIANGLE_STRIP?_.geometry=_u(_.geometry,Nf):p.mode===zt.TRIANGLE_FAN&&(_.geometry=_u(_.geometry,$a));else if(p.mode===zt.LINES)_=new th(m,M);else if(p.mode===zt.LINE_STRIP)_=new Do(m,M);else if(p.mode===zt.LINE_LOOP)_=new tb(m,M);else if(p.mode===zt.POINTS)_=new nb(m,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&rM(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),An(_,s),p.extensions&&ur(i,_,p),t.assignFinalMaterial(_),u.push(_)}for(let d=0,g=u.length;d<g;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return u[0];const h=new qn;t.associations.set(h,{meshes:e});for(let d=0,g=u.length;d<g;d++)h.add(u[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new yt(qg.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ao(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),An(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this.getDependency("node",t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,f=o.length;c<f;c++){const u=o[c];if(u){a.push(u);const h=new Pe;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Po(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,f=n.channels.length;c<f;c++){const u=n.channels[c],h=n.samplers[u.sampler],d=u.target,g=d.node,m=n.parameters!==void 0?n.parameters[h.input]:h.input,p=n.parameters!==void 0?n.parameters[h.output]:h.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",m)),o.push(this.getDependency("accessor",p)),a.push(h),l.push(d)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const f=c[0],u=c[1],h=c[2],d=c[3],g=c[4],m=[];for(let _=0,M=f.length;_<M;_++){const y=f[_],x=u[_],b=h[_],w=d[_],C=g[_];if(y===void 0)continue;y.updateMatrix();let v;switch(En[C.path]){case En.weights:v=Cr;break;case En.rotation:v=ri;break;case En.position:case En.scale:default:v=Lr;break}const E=y.name?y.name:y.uuid,I=w.interpolation!==void 0?tM[w.interpolation]:Bi,Y=[];En[C.path]===En.weights?y.traverse(function(N){N.morphTargetInfluences&&Y.push(N.name?N.name:N.uuid)}):Y.push(E);let K=b.array;if(b.normalized){const N=io(K.constructor),U=new Float32Array(K.length);for(let P=0,R=K.length;P<R;P++)U[P]=K[P]*N;K=U}for(let N=0,U=Y.length;N<U;N++){const P=new v(Y[N]+"."+En[C.path],x.array,K,I);w.interpolation==="CUBICSPLINE"&&(P.createInterpolant=function(F){const k=this instanceof ri?eM:ch;return new k(this.times,this.values,this.getValueSize()/3,F)},P.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),m.push(P)}}const p=n.name?n.name:"animation_"+e;return new lb(p,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this.extensions,i=this,s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"";return function(){const a=[],l=i._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(e)});l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(h){return i._getNodeRef(i.cameraCache,s.camera,h)})),i._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(e)}).forEach(function(h){a.push(h)});const c=[],f=s.children||[];for(let h=0,d=f.length;h<d;h++)c.push(i.getDependency("node",f[h]));const u=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([Promise.all(a),Promise.all(c),u])}().then(function(a){const l=a[0],c=a[1],f=a[2];let u;if(s.isBone===!0?u=new eh:l.length>1?u=new qn:l.length===1?u=l[0]:u=new Ye,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(s.name&&(u.userData.name=s.name,u.name=o),An(u,s),s.extensions&&ur(n,u,s),s.matrix!==void 0){const h=new Pe;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,f!==null&&u.traverse(function(h){h.isSkinnedMesh&&h.bind(f,oM)});for(let h=0,d=c.length;h<d;h++)u.add(c[h]);return u})}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new qn;n.name&&(s.name=i.createUniqueName(n.name)),An(s,n),n.extensions&&ur(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let f=0,u=l.length;f<u;f++)s.add(l[f]);const c=f=>{const u=new Map;for(const[h,d]of i.associations)(h instanceof en||h instanceof ut)&&u.set(h,d);return f.traverse(h=>{const d=i.associations.get(h);d!=null&&u.set(h,d)}),u};return i.associations=c(s),s})}}function cM(r,e,t){const n=e.attributes,i=new Xi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new O(l[0],l[1],l[2]),new O(c[0],c[1],c[2])),a.normalized){const f=io(Ii[a.componentType]);i.min.multiplyScalar(f),i.max.multiplyScalar(f)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new O,l=new O;for(let c=0,f=s.length;c<f;c++){const u=s[c];if(u.POSITION!==void 0){const h=t.json.accessors[u.POSITION],d=h.min,g=h.max;if(d!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),h.normalized){const m=io(Ii[h.componentType]);l.multiplyScalar(m)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new qi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Mu(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=no[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return An(r,e),cM(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iM(r,e.targets,t):r})}const Su={type:"change"},wa={type:"start"},wu={type:"end"};class uM extends oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:ui.ROTATE,TWO:ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",wt),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Su),n.update(),s=i.NONE},this.update=function(){const L=new O,z=new nn().setFromUnitVectors(e.up,new O(0,1,0)),ce=z.clone().invert(),he=new O,le=new nn,me=2*Math.PI;return function(){const Re=n.object.position;L.copy(Re).sub(n.target),L.applyQuaternion(z),a.setFromVector3(L),n.autoRotate&&s===i.NONE&&E(C()),n.enableDamping?(a.theta+=l.theta*n.dampingFactor,a.phi+=l.phi*n.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let De=n.minAzimuthAngle,He=n.maxAzimuthAngle;return isFinite(De)&&isFinite(He)&&(De<-Math.PI?De+=me:De>Math.PI&&(De-=me),He<-Math.PI?He+=me:He>Math.PI&&(He-=me),De<=He?a.theta=Math.max(De,Math.min(He,a.theta)):a.theta=a.theta>(De+He)/2?Math.max(De,a.theta):Math.min(He,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),L.setFromSpherical(a),L.applyQuaternion(ce),Re.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),f.set(0,0,0)),c=1,u||he.distanceToSquared(n.object.position)>o||8*(1-le.dot(n.object.quaternion))>o?(n.dispatchEvent(Su),he.copy(n.object.position),le.copy(n.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",X),n.domElement.removeEventListener("pointerdown",rt),n.domElement.removeEventListener("pointercancel",mt),n.domElement.removeEventListener("wheel",Ft),n.domElement.removeEventListener("pointermove",ft),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",wt)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,a=new gu,l=new gu;let c=1;const f=new O;let u=!1;const h=new Se,d=new Se,g=new Se,m=new Se,p=new Se,_=new Se,M=new Se,y=new Se,x=new Se,b=[],w={};function C(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function E(L){l.theta-=L}function I(L){l.phi-=L}const Y=function(){const L=new O;return function(ce,he){L.setFromMatrixColumn(he,0),L.multiplyScalar(-ce),f.add(L)}}(),K=function(){const L=new O;return function(ce,he){n.screenSpacePanning===!0?L.setFromMatrixColumn(he,1):(L.setFromMatrixColumn(he,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ce),f.add(L)}}(),N=function(){const L=new O;return function(ce,he){const le=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;L.copy(me).sub(n.target);let de=L.length();de*=Math.tan(n.object.fov/2*Math.PI/180),Y(2*ce*de/le.clientHeight,n.object.matrix),K(2*he*de/le.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Y(ce*(n.object.right-n.object.left)/n.object.zoom/le.clientWidth,n.object.matrix),K(he*(n.object.top-n.object.bottom)/n.object.zoom/le.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(L){n.object.isPerspectiveCamera?c/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function P(L){n.object.isPerspectiveCamera?c*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(L){h.set(L.clientX,L.clientY)}function F(L){M.set(L.clientX,L.clientY)}function k(L){m.set(L.clientX,L.clientY)}function j(L){d.set(L.clientX,L.clientY),g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const z=n.domElement;E(2*Math.PI*g.x/z.clientHeight),I(2*Math.PI*g.y/z.clientHeight),h.copy(d),n.update()}function H(L){y.set(L.clientX,L.clientY),x.subVectors(y,M),x.y>0?U(v()):x.y<0&&P(v()),M.copy(y),n.update()}function se(L){p.set(L.clientX,L.clientY),_.subVectors(p,m).multiplyScalar(n.panSpeed),N(_.x,_.y),m.copy(p),n.update()}function B(L){L.deltaY<0?P(v()):L.deltaY>0&&U(v()),n.update()}function J(L){let z=!1;switch(L.code){case n.keys.UP:L.ctrlKey||L.metaKey||L.shiftKey?I(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),z=!0;break;case n.keys.BOTTOM:L.ctrlKey||L.metaKey||L.shiftKey?I(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),z=!0;break;case n.keys.LEFT:L.ctrlKey||L.metaKey||L.shiftKey?E(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),z=!0;break;case n.keys.RIGHT:L.ctrlKey||L.metaKey||L.shiftKey?E(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),z=!0;break}z&&(L.preventDefault(),n.update())}function te(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),z=.5*(b[0].pageY+b[1].pageY);h.set(L,z)}}function ne(){if(b.length===1)m.set(b[0].pageX,b[0].pageY);else{const L=.5*(b[0].pageX+b[1].pageX),z=.5*(b[0].pageY+b[1].pageY);m.set(L,z)}}function W(){const L=b[0].pageX-b[1].pageX,z=b[0].pageY-b[1].pageY,ce=Math.sqrt(L*L+z*z);M.set(0,ce)}function be(){n.enableZoom&&W(),n.enablePan&&ne()}function ge(){n.enableZoom&&W(),n.enableRotate&&te()}function pe(L){if(b.length==1)d.set(L.pageX,L.pageY);else{const ce=ye(L),he=.5*(L.pageX+ce.x),le=.5*(L.pageY+ce.y);d.set(he,le)}g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const z=n.domElement;E(2*Math.PI*g.x/z.clientHeight),I(2*Math.PI*g.y/z.clientHeight),h.copy(d)}function ue(L){if(b.length===1)p.set(L.pageX,L.pageY);else{const z=ye(L),ce=.5*(L.pageX+z.x),he=.5*(L.pageY+z.y);p.set(ce,he)}_.subVectors(p,m).multiplyScalar(n.panSpeed),N(_.x,_.y),m.copy(p)}function Ge(L){const z=ye(L),ce=L.pageX-z.x,he=L.pageY-z.y,le=Math.sqrt(ce*ce+he*he);y.set(0,le),x.set(0,Math.pow(y.y/M.y,n.zoomSpeed)),U(x.y),M.copy(y)}function we(L){n.enableZoom&&Ge(L),n.enablePan&&ue(L)}function xe(L){n.enableZoom&&Ge(L),n.enableRotate&&pe(L)}function rt(L){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",ft),n.domElement.addEventListener("pointerup",Ze)),ee(L),L.pointerType==="touch"?A(L):Ke(L))}function ft(L){n.enabled!==!1&&(L.pointerType==="touch"?S(L):ke(L))}function Ze(L){ie(L),b.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",ft),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(wu),s=i.NONE}function mt(L){ie(L)}function Ke(L){let z;switch(L.button){case 0:z=n.mouseButtons.LEFT;break;case 1:z=n.mouseButtons.MIDDLE;break;case 2:z=n.mouseButtons.RIGHT;break;default:z=-1}switch(z){case ci.DOLLY:if(n.enableZoom===!1)return;F(L),s=i.DOLLY;break;case ci.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;k(L),s=i.PAN}else{if(n.enableRotate===!1)return;R(L),s=i.ROTATE}break;case ci.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;R(L),s=i.ROTATE}else{if(n.enablePan===!1)return;k(L),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(wa)}function ke(L){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;j(L);break;case i.DOLLY:if(n.enableZoom===!1)return;H(L);break;case i.PAN:if(n.enablePan===!1)return;se(L);break}}function Ft(L){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(L.preventDefault(),n.dispatchEvent(wa),B(L),n.dispatchEvent(wu))}function wt(L){n.enabled===!1||n.enablePan===!1||J(L)}function A(L){switch(oe(L),b.length){case 1:switch(n.touches.ONE){case ui.ROTATE:if(n.enableRotate===!1)return;te(),s=i.TOUCH_ROTATE;break;case ui.PAN:if(n.enablePan===!1)return;ne(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ui.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;be(),s=i.TOUCH_DOLLY_PAN;break;case ui.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ge(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(wa)}function S(L){switch(oe(L),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;pe(L),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(L),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;we(L),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;xe(L),n.update();break;default:s=i.NONE}}function X(L){n.enabled!==!1&&L.preventDefault()}function ee(L){b.push(L)}function ie(L){delete w[L.pointerId];for(let z=0;z<b.length;z++)if(b[z].pointerId==L.pointerId){b.splice(z,1);return}}function oe(L){let z=w[L.pointerId];z===void 0&&(z=new Se,w[L.pointerId]=z),z.set(L.pageX,L.pageY)}function ye(L){const z=L.pointerId===b[0].pointerId?b[1]:b[0];return w[z.pointerId]}n.domElement.addEventListener("contextmenu",X),n.domElement.addEventListener("pointerdown",rt),n.domElement.addEventListener("pointercancel",mt),n.domElement.addEventListener("wheel",Ft,{passive:!1}),this.update()}}const fM={class:"wrapper"},hM={class:"operate"},dM=Yt({__name:"HomeView",setup(r){const e=Hn();let t,n,i,s,o;const a=new Rb;function l(){const x=new Qf({canvas:e.value});return x.setSize(1200,900),x.outputEncoding=ze,x}function c(){return new qy}function f(){return new yt(45,1.3333333333333333,.1,2e3)}function u(){return new oh("#ffffff",2)}function h(x){const b=new uM(x,e.value);return b.listenToKeyEvents(window),b}function d(x){return new Promise((b,w)=>{new Ib().load(x,v=>{b(v)},v=>{console.log(v.loaded/v.total*100+"% loaded")},v=>{w(v)})})}function g(){t.render(n,i),s.update(),window.requestAnimationFrame(g)}function m(){const x=Math.floor(Math.random()*29)+2,b=n.getObjectByName(`1-${x}Fwaiqiang`);b.material.color=new Te("#ff0000")}function p(){new Array(29).fill(0).forEach((x,b)=>{const w=n.getObjectByName(`1-${b+2}Fwaiqiang`);w.material.color=new Te("#ffffff")})}function _(x){var b;if(e.value){const w=(b=e.value)==null?void 0:b.getBoundingClientRect();return{x:(x.clientX-w.left)*e.value.width/w.width,y:(x.clientY-w.top)*e.value.height/w.height}}return{x:-1e5,y:-1e5}}function M(x,b,w){const C=_(x);if(e.value){const v=C.x/e.value.width*2-1,E=C.y/e.value.height*-2+1;a.setFromCamera({x:v,y:E},b);const I=a.intersectObjects(w);console.log(I)}}function y(x,b){var w;(w=e.value)==null||w.addEventListener("click",C=>M(C,x,b))}return Pr(async()=>{t=l(),n=c(),o=u(),o.position.set(-1e3,1e3,-1e3),n.add(o);const x=await d("/gltf/scene.glb");n.add(x.scene),i=f(),i.position.set(-500,500,-500),i.lookAt(0,0,0),n.add(new Db(5e3)),s=h(i),y(i,n.children),g()}),(x,b)=>{const w=gr;return Sh(),Mh("div",fM,[Ho("canvas",{ref_key:"canvasRef",ref:e},null,512),Ho("div",hM,[re(w,{type:"primary",onClick:m},{default:Wo(()=>[jo("生成告警")]),_:1}),re(w,{onClick:p},{default:Wo(()=>[jo("重置")]),_:1})])])}}});const mM=wh(dM,[["__scopeId","data-v-b0314dca"]]);export{mM as default};

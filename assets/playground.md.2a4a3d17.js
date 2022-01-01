var te=Object.defineProperty,ne=Object.defineProperties;var se=Object.getOwnPropertyDescriptors;var G=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var T=(i,e,t)=>e in i?te(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,D=(i,e)=>{for(var t in e||(e={}))oe.call(e,t)&&T(i,t,e[t]);if(G)for(var t of G(e))ae.call(e,t)&&T(i,t,e[t]);return i},I=(i,e)=>ne(i,se(e));import{r as B,g as le,b as M,w as k,d as re,e as A,_ as R,c as m,o as c,f as r,h as z,i as W,j as _,n as L,k as ue,t as F,l as de,m as ce,p as me,q as y,s as E,F as $,u as j,v as S,x as O,y as w,z as H}from"./app.aadb58c3.js";const P=i=>i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),X=i=>i.replace(/^0+(0$|[^0])/,"$1"),U=(i,e)=>(i.match(new RegExp(P(e),"g"))||[]).length,pe=(i,e)=>i.substring(0,i.indexOf(e));var N;(function(i){i.symbol="symbol",i.narrowSymbol="narrowSymbol",i.code="code",i.name="name",i.hidden="hidden"})(N||(N={}));var x;(function(i){i.precision="precision",i.thousands="thousands",i.millions="millions",i.billions="billions"})(x||(x={}));const q=[",",".","\u066B"],J="(0|[1-9]\\d*)";class ge{constructor(e){var g,f,v,V,C,p;const{currency:t,currencyDisplay:s,locale:o,precision:a,accountingSign:u}=e;this.locale=o,this.options={style:"currency",currency:t,currencySign:u?"accounting":void 0,currencyDisplay:s!==N.hidden?s:void 0};const d=new Intl.NumberFormat(o,this.options),l=d.formatToParts(123456);this.currency=(g=l.find(({type:b})=>b==="currency"))==null?void 0:g.value,this.digits=[0,1,2,3,4,5,6,7,8,9].map(b=>b.toLocaleString(o)),this.decimalSymbol=(f=l.find(({type:b})=>b==="decimal"))==null?void 0:f.value,this.groupingSymbol=(v=l.find(({type:b})=>b==="group"))==null?void 0:v.value,this.minusSign=(V=d.formatToParts(-1).find(({type:b})=>b==="minusSign"))==null?void 0:V.value,this.decimalSymbol===void 0?this.minimumFractionDigits=this.maximumFractionDigits=0:typeof a=="number"?this.minimumFractionDigits=this.maximumFractionDigits=a:(this.minimumFractionDigits=(C=a==null?void 0:a.min)!=null?C:d.resolvedOptions().minimumFractionDigits,this.maximumFractionDigits=(p=a==null?void 0:a.max)!=null?p:d.resolvedOptions().maximumFractionDigits);const h=b=>pe(b,this.digits[1]),n=b=>b.substring(b.lastIndexOf(this.decimalSymbol?this.digits[0]:this.digits[1])+1);this.prefix=h(d.format(1)),this.suffix=n(d.format(1)),this.negativePrefix=h(d.format(-1)),this.negativeSuffix=n(d.format(-1))}parse(e){if(e){const t=this.isNegative(e);e=this.normalizeDigits(e),e=this.stripCurrency(e,t),e=this.stripSignLiterals(e);const s=this.decimalSymbol?`(?:${P(this.decimalSymbol)}(\\d*))?`:"",o=this.stripGroupingSeparator(e).match(new RegExp(`^${J}${s}$`));if(o&&this.isValidIntegerFormat(this.decimalSymbol?e.split(this.decimalSymbol)[0]:e,Number(o[1])))return Number(`${t?"-":""}${this.onlyDigits(o[1])}.${this.onlyDigits(o[2]||"")}`)}return null}isValidIntegerFormat(e,t){const s=I(D({},this.options),{minimumFractionDigits:0});return[this.stripCurrency(this.normalizeDigits(t.toLocaleString(this.locale,I(D({},s),{useGrouping:!0}))),!1),this.stripCurrency(this.normalizeDigits(t.toLocaleString(this.locale,I(D({},s),{useGrouping:!1}))),!1)].includes(e)}format(e,t={minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits}){return e!=null?e.toLocaleString(this.locale,D(D({},this.options),t)):""}toFraction(e){return`${this.digits[0]}${this.decimalSymbol}${this.onlyLocaleDigits(e.substr(1)).substr(0,this.maximumFractionDigits)}`}isFractionIncomplete(e){return!!this.normalizeDigits(this.stripGroupingSeparator(e)).match(new RegExp(`^${J}${P(this.decimalSymbol)}$`))}isNegative(e){return e.startsWith(this.negativePrefix)||this.minusSign===void 0&&(e.startsWith("(")||e.startsWith("-"))||this.minusSign!==void 0&&e.replace("-",this.minusSign).startsWith(this.minusSign)}insertCurrency(e,t){return`${t?this.negativePrefix:this.prefix}${e}${t?this.negativeSuffix:this.suffix}`}stripGroupingSeparator(e){return this.groupingSymbol!==void 0?e.replace(new RegExp(P(this.groupingSymbol),"g"),""):e}stripSignLiterals(e){return this.minusSign!==void 0?e.replace("-",this.minusSign).replace(this.minusSign,""):e.replace(/[-()]/g,"")}stripCurrency(e,t){return e.replace(t?this.negativePrefix:this.prefix,"").replace(t?this.negativeSuffix:this.suffix,"")}normalizeDecimalSeparator(e,t){return q.forEach(s=>{e=e.substr(0,t)+e.substr(t).replace(s,this.decimalSymbol)}),e}normalizeDigits(e){return this.digits[0]!=="0"&&this.digits.forEach((t,s)=>{e=e.replace(new RegExp(t,"g"),String(s))}),e}onlyDigits(e){return this.normalizeDigits(e).replace(/\D+/g,"")}onlyLocaleDigits(e){return e.replace(new RegExp(`[^${this.digits.join("")}]*`,"g"),"")}}class Y{constructor(e){this.currencyFormat=e}}class he extends Y{conformToMask(e,t=""){const s=this.currencyFormat.isNegative(e),o=V=>V===""&&s&&!(this.currencyFormat.minusSign===void 0?t===this.currencyFormat.negativePrefix+this.currencyFormat.negativeSuffix:t===this.currencyFormat.negativePrefix),a=V=>{if(o(V))return"";if(this.currencyFormat.maximumFractionDigits>0){if(this.currencyFormat.isFractionIncomplete(V))return V;if(V.startsWith(this.currencyFormat.decimalSymbol))return this.currencyFormat.toFraction(V)}return null};let u=e;u=this.currencyFormat.stripCurrency(u,s),u=this.currencyFormat.stripSignLiterals(u);const d=a(u);if(d!=null)return this.currencyFormat.insertCurrency(d,s);const[l,...h]=u.split(this.currencyFormat.decimalSymbol),n=X(this.currencyFormat.onlyDigits(l)),g=this.currencyFormat.onlyDigits(h.join("")).substr(0,this.currencyFormat.maximumFractionDigits),f=h.length>0&&g.length===0,v=n===""&&s&&(this.currencyFormat.minusSign===void 0?t===e.slice(0,-2)+this.currencyFormat.negativeSuffix:t===e.slice(0,-1));return f||v||o(n)?t:n.match(/\d+/)?{numberValue:Number(`${s?"-":""}${n}.${g}`),fractionDigits:g}:""}}class fe extends Y{conformToMask(e,t=""){if(e===""||this.currencyFormat.parse(t)===0&&this.currencyFormat.stripCurrency(t,!0).slice(0,-1)===this.currencyFormat.stripCurrency(e,!0))return"";const s=this.currencyFormat.isNegative(e),o=this.currencyFormat.stripSignLiterals(e)===""?-0:Number(`${s?"-":""}${X(this.currencyFormat.onlyDigits(e))}`)/Math.pow(10,this.currencyFormat.maximumFractionDigits);return{numberValue:o,fractionDigits:o.toFixed(this.currencyFormat.maximumFractionDigits).slice(-this.currencyFormat.maximumFractionDigits)}}}const be={locale:void 0,currency:void 0,currencyDisplay:void 0,exportValueAsInteger:!1,hideGroupingSeparatorOnFocus:!0,hideCurrencySymbolOnFocus:!0,hideNegligibleDecimalDigitsOnFocus:!0,precision:void 0,autoDecimalDigits:!1,valueRange:void 0,autoSign:!0,useGrouping:!0,valueScaling:void 0};class ye{constructor(e,t){this.el=e,this.numberValue=null,this.addEventListener(),this.init(t),this.setValue(this.currencyFormat.parse(this.el.value))}setOptions(e){this.init(e),this.applyFixedFractionFormat(this.numberValue,!0)}getValue(){return{number:this.valueScaling&&this.numberValue!=null?this.toInteger(this.numberValue,this.valueScaling):this.numberValue,formatted:this.formattedValue}}setValue(e){const t=this.valueScaling!==void 0&&e!=null?this.toFloat(e,this.valueScaling):e;t!==this.numberValue&&this.applyFixedFractionFormat(t)}dispatchEvent(e){this.el.dispatchEvent(new CustomEvent(e,{detail:this.getValue()}))}init(e){this.options=D(D({},be),e),this.options.autoDecimalDigits?(this.options.hideNegligibleDecimalDigitsOnFocus=!1,this.el.setAttribute("inputmode","numeric")):this.el.setAttribute("inputmode","decimal"),this.currencyFormat=new ge(this.options),this.numberMask=this.options.autoDecimalDigits?new fe(this.currencyFormat):new he(this.currencyFormat);const t={[x.precision]:this.currencyFormat.maximumFractionDigits,[x.thousands]:3,[x.millions]:6,[x.billions]:9};this.options.exportValueAsInteger?this.valueScaling=t[x.precision]:this.valueScaling=this.options.valueScaling?t[this.options.valueScaling]:void 0,this.valueScalingFractionDigits=this.valueScaling!==void 0&&this.options.valueScaling!==x.precision?this.valueScaling+this.currencyFormat.maximumFractionDigits:this.currencyFormat.maximumFractionDigits,this.minValue=this.getMinValue(),this.maxValue=this.getMaxValue()}getMinValue(){var t,s;let e=this.toFloat(-Number.MAX_SAFE_INTEGER);return((t=this.options.valueRange)==null?void 0:t.min)!==void 0&&(e=Math.max((s=this.options.valueRange)==null?void 0:s.min,this.toFloat(-Number.MAX_SAFE_INTEGER))),!this.options.autoSign&&e<0&&(e=0),e}getMaxValue(){var t,s;let e=this.toFloat(Number.MAX_SAFE_INTEGER);return((t=this.options.valueRange)==null?void 0:t.max)!==void 0&&(e=Math.min((s=this.options.valueRange)==null?void 0:s.max,this.toFloat(Number.MAX_SAFE_INTEGER))),!this.options.autoSign&&e<0&&(e=this.toFloat(Number.MAX_SAFE_INTEGER)),e}toFloat(e,t){return e/Math.pow(10,t!=null?t:this.valueScalingFractionDigits)}toInteger(e,t){return Number(e.toFixed(t!=null?t:this.valueScalingFractionDigits).split(".").join(""))}validateValueRange(e){return e!=null?Math.min(Math.max(e,this.minValue),this.maxValue):e}applyFixedFractionFormat(e,t=!1){this.format(this.currencyFormat.format(this.validateValueRange(e))),(e!==this.numberValue||t)&&this.dispatchEvent("change")}format(e,t=!1){if(e!=null){this.decimalSymbolInsertedAt!==void 0&&(e=this.currencyFormat.normalizeDecimalSeparator(e,this.decimalSymbolInsertedAt),this.decimalSymbolInsertedAt=void 0);const s=this.numberMask.conformToMask(e,this.formattedValue);let o;if(typeof s=="object"){const{numberValue:a,fractionDigits:u}=s;let{maximumFractionDigits:d,minimumFractionDigits:l}=this.currencyFormat;this.focus?l=t?u.replace(/0+$/,"").length:Math.min(d,u.length):Number.isInteger(a)&&!this.options.autoDecimalDigits&&(this.options.precision===void 0||l===0)&&(l=d=0),o=this.toInteger(Math.abs(a))>Number.MAX_SAFE_INTEGER?this.formattedValue:this.currencyFormat.format(a,{useGrouping:this.options.useGrouping&&!(this.focus&&this.options.hideGroupingSeparatorOnFocus),minimumFractionDigits:l,maximumFractionDigits:d})}else o=s;this.options.autoSign&&(this.maxValue<=0&&!this.currencyFormat.isNegative(o)&&this.currencyFormat.parse(o)!==0&&(o=o.replace(this.currencyFormat.prefix,this.currencyFormat.negativePrefix)),this.minValue>=0&&(o=o.replace(this.currencyFormat.negativePrefix,this.currencyFormat.prefix))),(this.options.currencyDisplay===N.hidden||this.focus&&this.options.hideCurrencySymbolOnFocus)&&(o=o.replace(this.currencyFormat.negativePrefix,this.currencyFormat.minusSign!==void 0?this.currencyFormat.minusSign:"(").replace(this.currencyFormat.negativeSuffix,this.currencyFormat.minusSign!==void 0?"":")").replace(this.currencyFormat.prefix,"").replace(this.currencyFormat.suffix,"")),this.el.value=o,this.numberValue=this.currencyFormat.parse(o)}else this.el.value="",this.numberValue=null;this.formattedValue=this.el.value,this.dispatchEvent("input")}addEventListener(){this.el.addEventListener("input",e=>{if(!e.detail){const{value:t,selectionStart:s}=this.el,o=e;if(s&&o.data&&q.includes(o.data)&&(this.decimalSymbolInsertedAt=s-1),this.format(t),this.focus&&s!=null){const a=()=>{const{prefix:u,suffix:d,decimalSymbol:l,maximumFractionDigits:h,groupingSymbol:n}=this.currencyFormat;let g=t.length-s;const f=this.formattedValue.length;if(this.currencyFormat.minusSign===void 0&&(t.startsWith("(")||t.startsWith("-"))&&!t.endsWith(")"))return f-this.currencyFormat.negativeSuffix.length>1?this.formattedValue.substring(s).length:1;if(this.formattedValue.substr(s,1)===n&&U(this.formattedValue,n)===U(t,n)+1)return f-g-1;if(f<g)return s;if(l!==void 0&&t.indexOf(l)!==-1){const v=t.indexOf(l)+1;if(Math.abs(f-t.length)>1&&s<=v)return this.formattedValue.indexOf(l)+1;!this.options.autoDecimalDigits&&s>v&&this.currencyFormat.onlyDigits(t.substr(v)).length-1===h&&(g-=1)}return this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===N.hidden?f-g:Math.max(f-Math.max(g,d.length),u.length)};this.setCaretPosition(a())}}},{capture:!0}),this.el.addEventListener("focus",()=>{this.focus=!0,setTimeout(()=>{const{value:e,selectionStart:t,selectionEnd:s}=this.el;if(this.format(e,this.options.hideNegligibleDecimalDigitsOnFocus),t!=null&&s!=null&&Math.abs(t-s)>0)this.setCaretPosition(0,this.el.value.length);else if(t!=null){const o=this.getCaretPositionOnFocus(e,t);this.setCaretPosition(o)}})}),this.el.addEventListener("blur",()=>{this.focus=!1,this.applyFixedFractionFormat(this.numberValue)}),this.el.addEventListener("change",e=>{e.detail||this.dispatchEvent("change")},{capture:!0})}getCaretPositionOnFocus(e,t){if(this.numberValue==null)return t;const{prefix:s,negativePrefix:o,suffix:a,negativeSuffix:u,groupingSymbol:d,currency:l}=this.currencyFormat,h=this.numberValue<0,n=h?o:s,g=n.length;if(this.options.hideCurrencySymbolOnFocus||this.options.currencyDisplay===N.hidden){if(h){if(t<=1)return 1;if(e.endsWith(")")&&t>e.indexOf(")"))return this.formattedValue.length-1}}else{const v=h?u.length:a.length;if(t>=e.length-v)return this.formattedValue.length-v;if(t<g)return g}let f=t;return this.options.hideCurrencySymbolOnFocus&&this.options.currencyDisplay!==N.hidden&&t>=g&&l!==void 0&&n.includes(l)&&(f-=g,h&&(f+=1)),this.options.hideGroupingSeparatorOnFocus&&d!==void 0&&(f-=U(e.substring(0,t),d)),f}setCaretPosition(e,t=e){this.el.setSelectionRange(e,t)}}const ve=i=>(i==null?void 0:i.matches("input"))?i:i==null?void 0:i.querySelector("input");var Ve=i=>{var C;let e,t;const s=B(null),o=B(null),a=le(),u=(p,b)=>a==null?void 0:a.emit(p,b),d=(C=a==null?void 0:a.attrs.modelModifiers)==null?void 0:C.lazy,l=M(()=>a==null?void 0:a.props.modelValue),h="update:modelValue",n=d?"update:modelValue":"change",g=!d,f=d||!(a==null?void 0:a.attrs.onChange),v=p=>{p.detail&&(l.value!==p.detail.number&&u(h,p.detail.number),o.value=p.detail.formatted)},V=p=>{p.detail&&(u(n,p.detail.number),o.value=p.detail.formatted)};return k(s,p=>{var b;p?(t=ve((b=p==null?void 0:p.$el)!=null?b:p),t?(e=new ye(t,i),g&&t.addEventListener("input",v),f&&t.addEventListener("change",V),e.setValue(l.value)):console.error('No input element found. Please make sure that the "inputRef" template ref is properly assigned.')):e=null}),re(()=>{g&&(t==null||t.removeEventListener("input",v)),f&&(t==null||t.removeEventListener("change",V))}),{inputRef:s,formattedValue:o,setValue:p=>e==null?void 0:e.setValue(p),setOptions:p=>e==null?void 0:e.setOptions(p)}};const Fe=A({name:"CurrencyInput",props:{modelValue:{type:Number,default:null},options:{type:Object,required:!0}},setup(i){const{inputRef:e,setOptions:t,setValue:s}=Ve(i.options);return k(()=>i.options,o=>{t(o)}),k(()=>i.modelValue,o=>{s(o)}),{inputRef:e}}}),Se={ref:"inputRef",type:"text"};function De(i,e,t,s,o,a){return c(),m("input",Se,null,512)}var K=R(Fe,[["render",De]]);const Ee={name:"Dialog",props:{modelValue:Boolean},emits:["update:modelValue"]},$e={class:"max-w-md md:relative m-auto p-8 bg-white rounded w-full h-auto shadow"};function xe(i,e,t,s,o,a){return t.modelValue?(c(),m("div",{key:0,class:"w-screen h-screen fixed z-50 inset-0 flex bg-gray-600 bg-opacity-50",onClick:e[0]||(e[0]=W(u=>i.$emit("update:modelValue",!1),["self"]))},[r("div",$e,[z(i.$slots,"default")])])):_("",!0)}var Z=R(Ee,[["render",xe]]);const Re=A({name:"Switch",props:{modelValue:Boolean},emits:["update:modelValue"]}),Oe=["aria-checked"];function we(i,e,t,s,o,a){return c(),m("div",{tabindex:"0",role:"checkbox","aria-checked":i.modelValue,class:"transition-all cursor-pointer flex justify-between items-center rounded-full focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 ring-offset-1",onKeydown:e[0]||(e[0]=ue(W(u=>i.$emit("update:modelValue",!i.modelValue),["prevent"]),["space"])),onClick:e[1]||(e[1]=u=>i.$emit("update:modelValue",!i.modelValue))},[r("div",{class:L(["w-10 h-6 flex items-center bg-gray-300 rounded-full p-1 duration-300 ease-in-out",{"bg-primary":i.modelValue}])},[r("div",{class:L(["bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out",{"translate-x-4":i.modelValue}])},null,2)],2)],40,Oe)}var Q=R(Re,[["render",we]]);const Ne={name:"OptionSection",components:{Switch:Q},props:{label:{type:String,required:!0},description:{type:String,default:void 0},modelValue:{type:Boolean,default:void 0}},emits:["update:modelValue"]},Me={class:"mb-12 min-w-0"},Ce={class:"flex items-center justify-between mb-3"},Ie={class:"text-xl font-medium"},ke={key:0,class:"mb-3"};function Pe(i,e,t,s,o,a){const u=Q;return c(),m("section",Me,[r("div",Ce,[r("span",Ie,F(t.label),1),t.modelValue!==void 0?(c(),de(u,{key:0,"model-value":t.modelValue,"onUpdate:modelValue":e[0]||(e[0]=d=>i.$emit("update:modelValue",d))},null,8,["model-value"])):_("",!0)]),t.description?(c(),m("div",ke,F(t.description),1)):_("",!0),z(i.$slots,"default")])}var ee=R(Ne,[["render",Pe]]);const Ae={name:"Checkbox",props:{modelValue:Boolean,disabled:{type:Boolean,default:!1},label:{type:String,required:!0}},emits:["update:modelValue"]},_e=["checked","disabled"];function Le(i,e,t,s,o,a){return c(),m("label",{class:L(["flex items-center",{"text-gray-300 cursor-not-allowed":t.disabled,"cursor-pointer":!t.disabled}])},[r("input",{checked:t.modelValue,disabled:t.disabled,type:"checkbox",class:"w-5 h-5 mr-2 rounded rounded border-gray-300 shadow-sm disabled:text-gray-300 disabled:cursor-not-allowed not-disabled:text-primary not-disabled:cursor-pointer focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50",onInput:e[0]||(e[0]=u=>i.$emit("update:modelValue",u.target.checked))},null,40,_e),r("span",null,F(t.label),1)],2)}var ie=R(Ae,[["render",Le]]);const Ue=A({name:"Demo",components:{Checkbox:ie,OptionSection:ee,Dialog:Z,CurrencyInput:K},setup(){const i=(t,s)=>Array(s-t).fill(t).map((o,a)=>o+a),e=ce({exportDialogVisible:!1,value:1234.5,localeEnabled:!1,locale:"de-DE",locales:["de-DE","de-CH","en-US","en-IN","nl-NL","sv-SE","fr-FR","es-ES","pt-PT","pt-BR","zh-ZH","ja-JP","ar-SA","fa-IR","bg-BG"],currency:"EUR",currencyDisplay:"symbol",currencies:["EUR","USD","JPY","GBP","BRL","INR","CNY","JPY","SAR","IRR","BGN"],currencyDisplays:[{value:"symbol",label:"Symbol"},{value:"narrowSymbol",label:"Narrow symbol"},{value:"code",label:"Code"},{value:"name",label:"Name"},{value:"hidden",label:"Hidden"}],valueScalingEnabled:!1,valueScaling:"precision",valueScalingOptions:[{value:"precision",label:"Precision"},{value:"thousands",label:"Thousands"},{value:"millions",label:"Millions"},{value:"billions",label:"Billions"}],hideCurrencySymbolOnFocus:!0,hideGroupingSeparatorOnFocus:!0,hideNegligibleDecimalDigitsOnFocusEnabled:!0,hideNegligibleDecimalDigitsOnFocus:!0,precisionEnabled:!1,precisionRangeEnabled:!1,precisionRangeMinValue:2,precisionRangeMaxValue:5,precision:2,precisionOptions:M(()=>i(1,16)),precisionRangeMinOptions:M(()=>i(1,e.precisionRangeMaxValue+1)),precisionRangeMaxOptions:M(()=>i(e.precisionRangeMinValue,16)),valueRangeEnabled:!1,minValue:void 0,maxValue:void 0,autoDecimalDigitsEnabled:!0,autoDecimalDigits:!1,exportValueAsInteger:!1,autoSign:!0,accountingSign:!1,useGrouping:!0,options:M(()=>({locale:e.localeEnabled?e.locale:void 0,currency:e.currency,currencyDisplay:e.currencyDisplay,valueRange:e.valueRangeEnabled?{min:e.minValue===""?void 0:e.minValue,max:e.maxValue===""?void 0:e.maxValue}:void 0,precision:e.precisionEnabled?e.precisionRangeEnabled?{min:e.precisionRangeMinValue,max:e.precisionRangeMaxValue}:e.precision:void 0,hideCurrencySymbolOnFocus:e.hideCurrencySymbolOnFocus,hideGroupingSeparatorOnFocus:e.hideGroupingSeparatorOnFocus,hideNegligibleDecimalDigitsOnFocus:e.hideNegligibleDecimalDigitsOnFocus,autoDecimalDigits:e.autoDecimalDigits,valueScaling:e.valueScalingEnabled?e.valueScaling:void 0,autoSign:e.autoSign,useGrouping:e.useGrouping,accountingSign:e.accountingSign})),stringifiedOptions:M(()=>JSON.stringify(e.options,null,2))});return k(()=>e.autoDecimalDigits,t=>{e.hideNegligibleDecimalDigitsOnFocusEnabled=!t,e.hideNegligibleDecimalDigitsOnFocus=!t}),me(e)}}),Ge={class:"grid gap-y-4 md:grid-cols-2 md:gap-x-8 items-center my-8"},Te=j(" Number value: "),Be={class:"ml-2"},ze={class:"flex items-center justify-between mb-2"},We=r("span",{class:"text-2xl font-bold"},"Options",-1),je={class:"white--text m-0",style:{margin:"0"}},He=r("hr",{class:"mb-8"},null,-1),Xe={class:"grid grid-cols-1 md:grid-cols-2 gap-x-8"},qe=["disabled"],Je=["value"],Ye={class:"flex items-center space-x-4"},Ke=["disabled"],Ze=r("span",{class:"text-center"},"to",-1),Qe=["disabled"],ei={key:0,class:"flex items-center space-x-4"},ii=["disabled"],ti=["value"],ni=r("span",{class:"text-center"},"to",-1),si=["disabled"],oi=["value"],ai=["disabled"],li=["value"],ri=["disabled"],ui=["value"];function di(i,e,t,s,o,a){const u=K,d=Z,l=ee,h=ie;return c(),m($,null,[r("div",Ge,[y(u,{modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=n=>i.value=n),options:i.options,class:"form-input"},null,8,["modelValue","options"]),r("div",null,[Te,r("code",Be,F(i.value!=null?i.value:"null"),1)])]),r("div",ze,[We,r("div",null,[r("button",{class:"transition-all bg-white hover:bg-gray-100 text-gray-800 font-semibold text-sm py-2 px-4 border border-gray-300 rounded shadow focus:outline-none focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50",onClick:e[1]||(e[1]=n=>i.exportDialogVisible=!0)}," Export "),y(d,{modelValue:i.exportDialogVisible,"onUpdate:modelValue":e[2]||(e[2]=n=>i.exportDialogVisible=n)},{default:E(()=>[r("pre",je,F(i.stringifiedOptions),1)]),_:1},8,["modelValue"])])]),He,r("div",Xe,[r("div",null,[y(l,{modelValue:i.localeEnabled,"onUpdate:modelValue":e[4]||(e[4]=n=>i.localeEnabled=n),label:"Locale"},{default:E(()=>[S(r("select",{"onUpdate:modelValue":e[3]||(e[3]=n=>i.locale=n),disabled:!i.localeEnabled,class:"form-input form-select"},[(c(!0),m($,null,w(i.locales,n=>(c(),m("option",{key:n},F(n),1))),128))],8,qe),[[O,i.locale]])]),_:1},8,["modelValue"]),y(l,{label:"Currency"},{default:E(()=>[S(r("select",{"onUpdate:modelValue":e[5]||(e[5]=n=>i.currency=n),class:"form-input form-select"},[(c(!0),m($,null,w(i.currencies,n=>(c(),m("option",{key:n},F(n),1))),128))],512),[[O,i.currency]])]),_:1}),y(l,{label:"Currency Display",description:"How to display the currency in the formatting."},{default:E(()=>[S(r("select",{"onUpdate:modelValue":e[6]||(e[6]=n=>i.currencyDisplay=n),class:"form-input form-select"},[(c(!0),m($,null,w(i.currencyDisplays,n=>(c(),m("option",{key:n.value,value:n.value},F(n.label),9,Je))),128))],512),[[O,i.currencyDisplay]])]),_:1}),y(l,{modelValue:i.accountingSign,"onUpdate:modelValue":e[7]||(e[7]=n=>i.accountingSign=n),label:"Accounting Sign",description:"Whether to use accounting sign formatting."},null,8,["modelValue"]),y(l,{modelValue:i.useGrouping,"onUpdate:modelValue":e[8]||(e[8]=n=>i.useGrouping=n),label:"Use Grouping",description:"Whether to use grouping separators such as thousands/lakh/crore separators."},null,8,["modelValue"]),y(l,{label:"Distraction Free Input",description:"Hide various parts of the formatting on focus for easier input."},{default:E(()=>[y(h,{modelValue:i.hideCurrencySymbolOnFocus,"onUpdate:modelValue":e[9]||(e[9]=n=>i.hideCurrencySymbolOnFocus=n),label:"Hide currency symbol",class:"mb-1"},null,8,["modelValue"]),y(h,{modelValue:i.hideGroupingSeparatorOnFocus,"onUpdate:modelValue":e[10]||(e[10]=n=>i.hideGroupingSeparatorOnFocus=n),label:"Hide grouping separator",class:"mb-1"},null,8,["modelValue"]),y(h,{modelValue:i.hideNegligibleDecimalDigitsOnFocus,"onUpdate:modelValue":e[11]||(e[11]=n=>i.hideNegligibleDecimalDigitsOnFocus=n),disabled:!i.hideNegligibleDecimalDigitsOnFocusEnabled,label:"Hide negligible decimal digits"},null,8,["modelValue","disabled"])]),_:1})]),r("div",null,[y(l,{modelValue:i.autoSign,"onUpdate:modelValue":e[12]||(e[12]=n=>i.autoSign=n),label:"Auto Sign",description:"Whether the minus symbol is automatically inserted or prevented to be inputted depending the current value range."},null,8,["modelValue"]),y(l,{modelValue:i.valueRangeEnabled,"onUpdate:modelValue":e[15]||(e[15]=n=>i.valueRangeEnabled=n),label:"Value Range",description:"The validation is triggered on blur and automatically sets the respective threshold if out of range."},{default:E(()=>[r("div",Ye,[S(r("input",{"onUpdate:modelValue":e[13]||(e[13]=n=>i.minValue=n),disabled:!i.valueRangeEnabled,type:"number",placeholder:"Min",class:"form-input min-w-0"},null,8,Ke),[[H,i.minValue,void 0,{lazy:!0}]]),Ze,S(r("input",{"onUpdate:modelValue":e[14]||(e[14]=n=>i.maxValue=n),disabled:!i.valueRangeEnabled,type:"number",placeholder:"Max",class:"form-input min-w-0"},null,8,Qe),[[H,i.maxValue,void 0,{lazy:!0}]])])]),_:1},8,["modelValue"]),y(l,{modelValue:i.precisionEnabled,"onUpdate:modelValue":e[20]||(e[20]=n=>i.precisionEnabled=n),label:"Precision",description:"Override the number of displayed decimal digits. Can only be applied for currencies that support decimal digits."},{default:E(()=>[r("div",null,[y(h,{modelValue:i.precisionRangeEnabled,"onUpdate:modelValue":e[16]||(e[16]=n=>i.precisionRangeEnabled=n),label:"Use range",disabled:!i.precisionEnabled,class:"mb-2"},null,8,["modelValue","disabled"]),i.precisionRangeEnabled?(c(),m("div",ei,[S(r("select",{"onUpdate:modelValue":e[17]||(e[17]=n=>i.precisionRangeMinValue=n),disabled:!i.precisionEnabled,class:"form-input form-select"},[(c(!0),m($,null,w(i.precisionRangeMinOptions,n=>(c(),m("option",{key:n,value:n},F(n),9,ti))),128))],8,ii),[[O,i.precisionRangeMinValue]]),ni,S(r("select",{"onUpdate:modelValue":e[18]||(e[18]=n=>i.precisionRangeMaxValue=n),disabled:!i.precisionEnabled,class:"form-input form-select"},[(c(!0),m($,null,w(i.precisionRangeMaxOptions,n=>(c(),m("option",{key:n,value:n},F(n),9,oi))),128))],8,si),[[O,i.precisionRangeMaxValue]])])):S((c(),m("select",{key:1,"onUpdate:modelValue":e[19]||(e[19]=n=>i.precision=n),disabled:!i.precisionEnabled,class:"form-input form-select"},[(c(!0),m($,null,w(i.precisionOptions,n=>(c(),m("option",{key:n,value:n},F(n),9,li))),128))],8,ai)),[[O,i.precision]])])]),_:1},8,["modelValue"]),y(l,{modelValue:i.valueScalingEnabled,"onUpdate:modelValue":e[22]||(e[22]=n=>i.valueScalingEnabled=n),label:"Value Scaling",description:"Applies a scaling on the exported value."},{default:E(()=>[S(r("select",{"onUpdate:modelValue":e[21]||(e[21]=n=>i.valueScaling=n),disabled:!i.valueScalingEnabled,class:"cursor-pointer transition-all w-full shadow-sm disabled:cursor-not-allowed disabled:border-gray-300 disabled:text-gray-300 rounded-md text-base focus:border-primary focus:ring focus:ring-offset-0 focus:ring-primary focus:ring-opacity-50"},[(c(!0),m($,null,w(i.valueScalingOptions,n=>(c(),m("option",{key:n.value,value:n.value},F(n.label),9,ui))),128))],8,ri),[[O,i.valueScaling]])]),_:1},8,["modelValue"]),y(l,{modelValue:i.autoDecimalDigits,"onUpdate:modelValue":e[23]||(e[23]=n=>i.autoDecimalDigits=n),label:"Auto Decimal Digits",description:"Whether the decimal symbol is inserted automatically, using the last inputted digits as decimal digits."},null,8,["modelValue"])])])],64)}var ci=R(Ue,[["render",di]]);const bi='{"title":"Playground","description":"","frontmatter":{},"relativePath":"playground.md","lastUpdated":1641039546488}',mi={},pi=r("h1",{id:"playground",tabindex:"-1"},[j("Playground "),r("a",{class:"header-anchor",href:"#playground","aria-hidden":"true"},"#")],-1);function gi(i,e,t,s,o,a){const u=ci;return c(),m("div",null,[pi,y(u)])}var yi=R(mi,[["render",gi]]);export{bi as __pageData,yi as default};

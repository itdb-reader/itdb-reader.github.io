import{a as u,u as ve,k as g,v as K,l as _,L as pe,p as w,i as j,m as N,M as me,N as ge,H as he,E as be,y as ye,O as Ce,P as qe,h as i,I as E,T as _e,c as Z,j as k,n as xe,s as we}from"./index.89df8e12.js";import{Q as ee,b as Be}from"./QSpinner.a99441ee.js";import{h as x}from"./dom.74cd8572.js";const ue={dark:{type:Boolean,default:null}};function ie(e,o){return u(()=>e.dark===null?o.dark.isActive:e.dark)}let T,I=0;const f=new Array(256);for(let e=0;e<256;e++)f[e]=(e+256).toString(16).substring(1);const Se=(()=>{const e=typeof crypto!="undefined"?crypto:typeof window!="undefined"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return o=>{const r=new Uint8Array(o);return e.getRandomValues(r),r}}return o=>{const r=[];for(let t=o;t>0;t--)r.push(Math.floor(Math.random()*256));return r}})(),oe=4096;function L(){(T===void 0||I+16>oe)&&(I=0,T=Se(oe));const e=Array.prototype.slice.call(T,I,I+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,f[e[0]]+f[e[1]]+f[e[2]]+f[e[3]]+"-"+f[e[4]]+f[e[5]]+"-"+f[e[6]]+f[e[7]]+"-"+f[e[8]]+f[e[9]]+"-"+f[e[10]]+f[e[11]]+f[e[12]]+f[e[13]]+f[e[14]]+f[e[15]]}function Fe(e){return e==null?null:e}function te(e,o){return e==null?o===!0?`f_${L()}`:null:e}function Re({getValue:e,required:o=!0}={}){if(ve.value===!0){const r=e!==void 0?g(Fe(e())):g(null);return o===!0&&r.value===null&&K(()=>{r.value=`f_${L()}`}),e!==void 0&&_(e,t=>{r.value=te(t,o)}),r}return e!==void 0?u(()=>te(e(),o)):g(`f_${L()}`)}const re=/^on[A-Z]/;function Ae(){const{attrs:e,vnode:o}=w(),r={listeners:g({}),attributes:g({})};function t(){const s={},d={};for(const n in e)n!=="class"&&n!=="style"&&re.test(n)===!1&&(s[n]=e[n]);for(const n in o.props)re.test(n)===!0&&(d[n]=o.props[n]);r.attributes.value=s,r.listeners.value=d}return pe(t),t(),r}function ke({validate:e,resetValidation:o,requiresQForm:r}){const t=j(me,!1);if(t!==!1){const{props:s,proxy:d}=w();Object.assign(d,{validate:e,resetValidation:o}),_(()=>s.disable,n=>{n===!0?(typeof o=="function"&&o(),t.unbindComponent(d)):t.bindComponent(d)}),K(()=>{s.disable!==!0&&t.bindComponent(d)}),N(()=>{s.disable!==!0&&t.unbindComponent(d)})}else r===!0&&console.error("Parent QForm not found on useFormChild()!")}const le=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ne=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,ae=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,D=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,O=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,H={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>le.test(e),hexaColor:e=>ne.test(e),hexOrHexaColor:e=>ae.test(e),rgbColor:e=>D.test(e),rgbaColor:e=>O.test(e),rgbOrRgbaColor:e=>D.test(e)||O.test(e),hexOrRgbColor:e=>le.test(e)||D.test(e),hexaOrRgbaColor:e=>ne.test(e)||O.test(e),anyColor:e=>ae.test(e)||D.test(e)||O.test(e)},$e=[!0,!1,"ondemand"],Ve={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],default:!1,validator:e=>$e.includes(e)}};function Ee(e,o){const{props:r,proxy:t}=w(),s=g(!1),d=g(null),n=g(!1);ke({validate:F,resetValidation:S});let c=0,h;const $=u(()=>r.rules!==void 0&&r.rules!==null&&r.rules.length!==0),b=u(()=>r.disable!==!0&&$.value===!0&&o.value===!1),B=u(()=>r.error===!0||s.value===!0),Q=u(()=>typeof r.errorMessage=="string"&&r.errorMessage.length!==0?r.errorMessage:d.value);_(()=>r.modelValue,()=>{n.value=!0,b.value===!0&&r.lazyRules===!1&&C()});function V(){r.lazyRules!=="ondemand"&&b.value===!0&&n.value===!0&&C()}_(()=>r.reactiveRules,y=>{y===!0?h===void 0&&(h=_(()=>r.rules,V,{immediate:!0,deep:!0})):h!==void 0&&(h(),h=void 0)},{immediate:!0}),_(()=>r.lazyRules,V),_(e,y=>{y===!0?n.value=!0:b.value===!0&&r.lazyRules!=="ondemand"&&C()});function S(){c++,o.value=!1,n.value=!1,s.value=!1,d.value=null,C.cancel()}function F(y=r.modelValue){if(r.disable===!0||$.value===!1)return!0;const R=++c,z=o.value!==!0?()=>{n.value=!0}:()=>{},q=(v,p)=>{v===!0&&z(),s.value=v,d.value=p||null,o.value=!1},A=[];for(let v=0;v<r.rules.length;v++){const p=r.rules[v];let m;if(typeof p=="function"?m=p(y,H):typeof p=="string"&&H[p]!==void 0&&(m=H[p](y)),m===!1||typeof m=="string")return q(!0,m),!1;m!==!0&&m!==void 0&&A.push(m)}return A.length===0?(q(!1),!0):(o.value=!0,Promise.all(A).then(v=>{if(v===void 0||Array.isArray(v)===!1||v.length===0)return R===c&&q(!1),!0;const p=v.find(m=>m===!1||typeof m=="string");return R===c&&q(p!==void 0,p),p===void 0},v=>(R===c&&(console.error(v),q(!0)),!1)))}const C=ge(F,0);return N(()=>{h!==void 0&&h(),C.cancel()}),Object.assign(t,{resetValidation:S,validate:F}),he(t,"hasError",()=>B.value),{isDirtyModel:n,hasRules:$,hasError:B,errorMessage:Q,validate:F,resetValidation:S}}let U=[],Pe=[];function Ie(e){Pe.length===0?e():U.push(e)}function De(e){U=U.filter(o=>o!==e)}function Oe(e){return e!=null&&(""+e).length!==0}const Qe={...ue,...Ve,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String},He={...Qe,maxlength:[Number,String]},je=["update:modelValue","clear","focus","blur"];function Le({requiredForAttr:e=!0,tagProp:o,changeEvent:r=!1}={}){const{props:t,proxy:s}=w(),d=ie(t,s.$q),n=Re({required:e,getValue:()=>t.for});return{requiredForAttr:e,changeEvent:r,tag:o===!0?u(()=>t.tag):{value:"label"},isDark:d,editable:u(()=>t.disable!==!0&&t.readonly!==!0),innerLoading:g(!1),focused:g(!1),hasPopupOpen:!1,splitAttrs:Ae(),targetUid:n,rootRef:g(null),targetRef:g(null),controlRef:g(null)}}function Ue(e){const{props:o,emit:r,slots:t,attrs:s,proxy:d}=w(),{$q:n}=d;let c=null;e.hasValue===void 0&&(e.hasValue=u(()=>Oe(o.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{r("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:G,onFocusout:J}),Object.assign(e,{clearValue:M,onControlFocusin:G,onControlFocusout:J,focus:p}),e.computedCounter===void 0&&(e.computedCounter=u(()=>{if(o.counter!==!1){const l=typeof o.modelValue=="string"||typeof o.modelValue=="number"?(""+o.modelValue).length:Array.isArray(o.modelValue)===!0?o.modelValue.length:0,a=o.maxlength!==void 0?o.maxlength:o.maxValues;return l+(a!==void 0?" / "+a:"")}}));const{isDirtyModel:h,hasRules:$,hasError:b,errorMessage:B,resetValidation:Q}=Ee(e.focused,e.innerLoading),V=e.floatingLabel!==void 0?u(()=>o.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):u(()=>o.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),S=u(()=>o.bottomSlots===!0||o.hint!==void 0||$.value===!0||o.counter===!0||o.error!==null),F=u(()=>o.filled===!0?"filled":o.outlined===!0?"outlined":o.borderless===!0?"borderless":o.standout?"standout":"standard"),C=u(()=>`q-field row no-wrap items-start q-field--${F.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(o.rounded===!0?" q-field--rounded":"")+(o.square===!0?" q-field--square":"")+(V.value===!0?" q-field--float":"")+(R.value===!0?" q-field--labeled":"")+(o.dense===!0?" q-field--dense":"")+(o.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(b.value===!0?" q-field--error":"")+(b.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(o.hideBottomSpace!==!0&&S.value===!0?" q-field--with-bottom":"")+(o.disable===!0?" q-field--disabled":o.readonly===!0?" q-field--readonly":"")),y=u(()=>"q-field__control relative-position row no-wrap"+(o.bgColor!==void 0?` bg-${o.bgColor}`:"")+(b.value===!0?" text-negative":typeof o.standout=="string"&&o.standout.length!==0&&e.focused.value===!0?` ${o.standout}`:o.color!==void 0?` text-${o.color}`:"")),R=u(()=>o.labelSlot===!0||o.label!==void 0),z=u(()=>"q-field__label no-pointer-events absolute ellipsis"+(o.labelColor!==void 0&&b.value!==!0?` text-${o.labelColor}`:"")),q=u(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:V.value,modelValue:o.modelValue,emitValue:e.emitValue})),A=u(()=>{const l={};return e.targetUid.value&&(l.for=e.targetUid.value),o.disable===!0&&(l["aria-disabled"]="true"),l});function v(){const l=document.activeElement;let a=e.targetRef!==void 0&&e.targetRef.value;a&&(l===null||l.id!==e.targetUid.value)&&(a.hasAttribute("tabindex")===!0||(a=a.querySelector("[tabindex]")),a&&a!==l&&a.focus({preventScroll:!0}))}function p(){Ie(v)}function m(){De(v);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function G(l){c!==null&&(clearTimeout(c),c=null),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,r("focus",l))}function J(l,a){c!==null&&clearTimeout(c),c=setTimeout(()=>{c=null,!(document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1))&&(e.focused.value===!0&&(e.focused.value=!1,r("blur",l)),a!==void 0&&a())})}function M(l){be(l),n.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),o.type==="file"&&(e.inputRef.value.value=null),r("update:modelValue",null),e.changeEvent===!0&&r("change",null),r("clear",o.modelValue),ye(()=>{const a=h.value;Q(),h.value=a})}function se(l){[13,32].includes(l.keyCode)&&M(l)}function de(){const l=[];return t.prepend!==void 0&&l.push(i("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:E},t.prepend())),l.push(i("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},ce())),b.value===!0&&o.noErrorIcon===!1&&l.push(P("error",[i(ee,{name:n.iconSet.field.error,color:"negative"})])),o.loading===!0||e.innerLoading.value===!0?l.push(P("inner-loading-append",t.loading!==void 0?t.loading():[i(Be,{color:o.color})])):o.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(P("inner-clearable-append",[i(ee,{class:"q-field__focusable-action",name:o.clearIcon||n.iconSet.field.clear,tabindex:0,role:"button","aria-hidden":"false","aria-label":n.lang.label.clear,onKeyup:se,onClick:M})])),t.append!==void 0&&l.push(i("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:E},t.append())),e.getInnerAppend!==void 0&&l.push(P("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function ce(){const l=[];return o.prefix!==void 0&&o.prefix!==null&&l.push(i("div",{class:"q-field__prefix no-pointer-events row items-center"},o.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):t.rawControl!==void 0?l.push(t.rawControl()):t.control!==void 0&&l.push(i("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0},t.control(q.value))),R.value===!0&&l.push(i("div",{class:z.value},x(t.label,o.label))),o.suffix!==void 0&&o.suffix!==null&&l.push(i("div",{class:"q-field__suffix no-pointer-events row items-center"},o.suffix)),l.concat(x(t.default))}function fe(){let l,a;b.value===!0?B.value!==null?(l=[i("div",{role:"alert"},B.value)],a=`q--slot-error-${B.value}`):(l=x(t.error),a="q--slot-error"):(o.hideHint!==!0||e.focused.value===!0)&&(o.hint!==void 0?(l=[i("div",o.hint)],a=`q--slot-hint-${o.hint}`):(l=x(t.hint),a="q--slot-hint"));const X=o.counter===!0||t.counter!==void 0;if(o.hideBottomSpace===!0&&X===!1&&l===void 0)return;const Y=i("div",{key:a,class:"q-field__messages col"},l);return i("div",{class:"q-field__bottom row items-start q-field__bottom--"+(o.hideBottomSpace!==!0?"animated":"stale"),onClick:E},[o.hideBottomSpace===!0?Y:i(_e,{name:"q-transition--field-message"},()=>Y),X===!0?i("div",{class:"q-field__counter"},t.counter!==void 0?t.counter():e.computedCounter.value):null])}function P(l,a){return a===null?null:i("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},a)}let W=!1;return Ce(()=>{W=!0}),qe(()=>{W===!0&&o.autofocus===!0&&d.focus()}),o.autofocus===!0&&K(()=>{d.focus()}),N(()=>{c!==null&&clearTimeout(c)}),Object.assign(d,{focus:p,blur:m}),function(){const a=e.getControl===void 0&&t.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":o.autofocus===!0||void 0,...A.value}:A.value;return i(e.tag.value,{ref:e.rootRef,class:[C.value,s.class],style:s.style,...a},[t.before!==void 0?i("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:E},t.before()):null,i("div",{class:"q-field__inner relative-position col self-stretch"},[i("div",{ref:e.controlRef,class:y.value,tabindex:-1,...e.controlEvents},de()),S.value===!0?fe():null]),t.after!==void 0?i("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:E},t.after()):null])}}const Ke={name:String};function Ne(e){return u(()=>e.name||e.for)}function Ze(e,o){function r(){const t=e.modelValue;try{const s="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(t)===t&&("length"in t?Array.from(t):[t]).forEach(d=>{s.items.add(d)}),{files:s.files}}catch{return{files:void 0}}}return o===!0?u(()=>{if(e.type==="file")return r()}):u(r)}var Ge=Z({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:o}){const r=u(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>i(e.tag,{class:r.value},x(o.default))}}),Je=Z({name:"QCard",props:{...ue,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:o}){const{proxy:{$q:r}}=w(),t=ie(e,r),s=u(()=>"q-card"+(t.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>i(e.tag,{class:s.value},x(o.default))}}),We=Z({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:o}){const{proxy:{$q:r}}=w(),t=j(xe,k);if(t===k)return console.error("QPage needs to be a deep child of QLayout"),k;if(j(we,k)===k)return console.error("QPage needs to be child of QPageContainer"),k;const d=u(()=>{const c=(t.header.space===!0?t.header.size:0)+(t.footer.space===!0?t.footer.size:0);if(typeof e.styleFn=="function"){const h=t.isContainer.value===!0?t.containerHeight.value:r.screen.height;return e.styleFn(c,h)}return{minHeight:t.isContainer.value===!0?t.containerHeight.value-c+"px":r.screen.height===0?c!==0?`calc(100vh - ${c}px)`:"100vh":r.screen.height-c+"px"}}),n=u(()=>`q-page${e.padding===!0?" q-layout-padding":""}`);return()=>i("main",{class:n.value,style:d.value},x(o.default))}}),Xe=(e,o)=>{const r=e.__vccOpts||e;for(const[t,s]of o)r[t]=s;return r};export{We as Q,Xe as _,ie as a,Qe as b,Ke as c,je as d,Le as e,Ne as f,Ze as g,Ue as h,Oe as i,Ge as j,Je as k,He as l,Ie as m,Re as n,L as o,ue as u};

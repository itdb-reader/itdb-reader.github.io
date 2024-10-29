import{a,p as K}from"./index.89df8e12.js";function j(t){return t.appContext.config.globalProperties.$router!==void 0}function L(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}function P(t,r){return(t.aliasOf||t)===(r.aliasOf||r)}function q(t,r){for(const o in r){const e=r[o],u=t[o];if(typeof e=="string"){if(e!==u)return!1}else if(Array.isArray(u)===!1||u.length!==e.length||e.some((g,p)=>g!==u[p]))return!1}return!0}function $(t,r){return Array.isArray(r)===!0?t.length===r.length&&t.every((o,e)=>o===r[e]):t.length===1&&t[0]===r}function B(t,r){return Array.isArray(t)===!0?$(t,r):Array.isArray(r)===!0?$(r,t):t===r}function M(t,r){if(Object.keys(t).length!==Object.keys(r).length)return!1;for(const o in t)if(B(t[o],r[o])===!1)return!1;return!0}const V={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},E={...V,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function H({fallbackTag:t,useDisableForRouterLinkProps:r=!0}={}){const o=K(),{props:e,proxy:u,emit:g}=o,p=j(o),h=a(()=>e.disable!==!0&&e.href!==void 0),C=r===!0?a(()=>p===!0&&e.disable!==!0&&h.value!==!0&&e.to!==void 0&&e.to!==null&&e.to!==""):a(()=>p===!0&&h.value!==!0&&e.to!==void 0&&e.to!==null&&e.to!==""),f=a(()=>C.value===!0?A(e.to):null),s=a(()=>f.value!==null),k=a(()=>h.value===!0||s.value===!0),O=a(()=>e.type==="a"||k.value===!0?"a":e.tag||t||"div"),S=a(()=>h.value===!0?{href:e.href,target:e.target}:s.value===!0?{href:f.value.href,target:e.target}:{}),m=a(()=>{if(s.value===!1)return-1;const{matched:n}=f.value,{length:l}=n,i=n[l-1];if(i===void 0)return-1;const c=u.$route.matched;if(c.length===0)return-1;const v=c.findIndex(P.bind(null,i));if(v!==-1)return v;const R=L(n[l-2]);return l>1&&L(i)===R&&c[c.length-1].path!==R?c.findIndex(P.bind(null,n[l-2])):v}),d=a(()=>s.value===!0&&m.value!==-1&&q(u.$route.params,f.value.params)),y=a(()=>d.value===!0&&m.value===u.$route.matched.length-1&&M(u.$route.params,f.value.params)),b=a(()=>s.value===!0?y.value===!0?` ${e.exactActiveClass} ${e.activeClass}`:e.exact===!0?"":d.value===!0?` ${e.activeClass}`:"":"");function A(n){try{return u.$router.resolve(n)}catch{}return null}function x(n,{returnRouterError:l,to:i=e.to,replace:c=e.replace}={}){if(e.disable===!0)return n.preventDefault(),Promise.resolve(!1);if(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey||n.button!==void 0&&n.button!==0||e.target==="_blank")return Promise.resolve(!1);n.preventDefault();const v=u.$router[c===!0?"replace":"push"](i);return l===!0?v:v.then(()=>{}).catch(()=>{})}function I(n){if(s.value===!0){const l=i=>x(n,i);g("click",n,l),n.defaultPrevented!==!0&&l()}else g("click",n)}return{hasRouterLink:s,hasHrefLink:h,hasLink:k,linkTag:O,resolvedLink:f,linkIsActive:d,linkIsExactActive:y,linkClass:b,linkAttrs:S,getLink:A,navigateToRouterLink:x,navigateOnClick:I}}export{H as a,V as b,E as u,j as v};

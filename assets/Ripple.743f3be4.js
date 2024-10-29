import{Q as w,R as x,S as C,U as R,F as E,V as g}from"./index.89df8e12.js";import{c as T}from"./dom.74cd8572.js";function L(r,t=250){let e=!1,a;return function(){return e===!1&&(e=!0,setTimeout(()=>{e=!1},t),a=r.apply(this,arguments)),a}}function h(r,t,e,a){e.modifiers.stop===!0&&E(r);const s=e.modifiers.color;let l=e.modifiers.center;l=l===!0||a===!0;const i=document.createElement("span"),o=document.createElement("span"),d=g(r),{left:$,top:k,width:n,height:c}=t.getBoundingClientRect(),p=Math.sqrt(n*n+c*c),f=p/2,m=`${(n-p)/2}px`,v=l?m:`${d.left-$-f}px`,y=`${(c-p)/2}px`,b=l?y:`${d.top-k-f}px`;o.className="q-ripple__inner",T(o,{height:`${p}px`,width:`${p}px`,transform:`translate3d(${v},${b},0) scale3d(.2,.2,1)`,opacity:0}),i.className=`q-ripple${s?" text-"+s:""}`,i.setAttribute("dir","ltr"),i.appendChild(o),t.appendChild(i);const _=()=>{i.remove(),clearTimeout(u)};e.abort.push(_);let u=setTimeout(()=>{o.classList.add("q-ripple__inner--enter"),o.style.transform=`translate3d(${m},${y},0) scale3d(1,1,1)`,o.style.opacity=.2,u=setTimeout(()=>{o.classList.remove("q-ripple__inner--enter"),o.classList.add("q-ripple__inner--leave"),o.style.opacity=0,u=setTimeout(()=>{i.remove(),e.abort.splice(e.abort.indexOf(_),1)},275)},250)},50)}function q(r,{modifiers:t,value:e,arg:a}){const s=Object.assign({},r.cfg.ripple,t,e);r.modifiers={early:s.early===!0,stop:s.stop===!0,center:s.center===!0,color:s.color||a,keyCodes:[].concat(s.keyCodes||13)}}var O=w({name:"ripple",beforeMount(r,t){const e=t.instance.$.appContext.config.globalProperties.$q.config||{};if(e.ripple===!1)return;const a={cfg:e,enabled:t.value!==!1,modifiers:{},abort:[],start(s){a.enabled===!0&&s.qSkipRipple!==!0&&s.type===(a.modifiers.early===!0?"pointerdown":"click")&&h(s,r,a,s.qKeyEvent===!0)},keystart:L(s=>{a.enabled===!0&&s.qSkipRipple!==!0&&x(s,a.modifiers.keyCodes)===!0&&s.type===`key${a.modifiers.early===!0?"down":"up"}`&&h(s,r,a,!0)},300)};q(a,t),r.__qripple=a,C(a,"main",[[r,"pointerdown","start","passive"],[r,"click","start","passive"],[r,"keydown","keystart","passive"],[r,"keyup","keystart","passive"]])},updated(r,t){if(t.oldValue!==t.value){const e=r.__qripple;e!==void 0&&(e.enabled=t.value!==!1,e.enabled===!0&&Object(t.value)===t.value&&q(e,t))}},beforeUnmount(r){const t=r.__qripple;t!==void 0&&(t.abort.forEach(e=>{e()}),R(t,"main"),delete r._qripple)}});export{O as R};

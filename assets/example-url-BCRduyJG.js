import{r as s,j as e}from"./chunk-62JRHF6Z-Dmcs-9-F.js";import{a$ as Mn,b0 as ga,b1 as Ge,b2 as xn,b3 as fa,b4 as ha,I as w,b5 as me,Y as U,m as oe,U as Nn,H as E,b6 as it,b7 as va,aA as ba,X as Ln,b8 as _a,b9 as xa,ba as ka,bb as Sa,bc as ya,bd as ja,be as Ta,bf as Ea,N as ve,a as en,d as Oe,bg as Ze,a9 as vt,c as C,V as Ca,bh as On,aU as Pa,r as f,aI as Ra,A as X,h as B,x as ie,L as ge,a0 as wa,ap as Da,B as At,O as De,b as z,C as G,e as ye,f as Ie,g as Ae,D as Be,i as dt,n as re,at as dn,E as Na,j as Ke,F as nn,k as ct,l as pe,o as L,an as Mt,ae as Ht,av as La,ab as Oa,p as K,M as In,R as V,P as mt,q as cn,ad as Ia,a7 as Ba,a4 as Aa,K as Ma,Q as Ha,s as tn,S as Va,t as $e,u as he,v as je,w as ce,z as q,T as I,aY as Fa,y as Vt,G as be,$ as Ft,a8 as zt,aR as Gt,aG as Kt,Z as $t,J as on}from"./Pagination-dtDE87RV.js";const za=(n={})=>{const{initialValue:t=""}=n,a=s.useRef({past:[],future:[],current:{value:t,cursorPosition:0}});return{initialize:(g,h=0)=>{!a.current.past.length&&!a.current.future.length&&(a.current.current={value:g,cursorPosition:h})},pushState:(g,h,k)=>{const _=a.current.current.value,S=k?k.selectionEnd||0:a.current.current.cursorPosition;_!==g&&(a.current={past:[...a.current.past,{value:_,cursorPosition:S}],future:[],current:{value:g,cursorPosition:h}})},undo:g=>{if(a.current.past.length===0)return null;const h={value:a.current.current.value,cursorPosition:g},k=a.current.past.pop();return k?(a.current={past:[...a.current.past],future:[h,...a.current.future],current:k},k):null},redo:g=>{if(a.current.future.length===0)return null;const h={value:a.current.current.value,cursorPosition:g},k=a.current.future.shift();return k?(a.current={past:[...a.current.past,h],future:[...a.current.future],current:k},k):null},updateCursorPosition:g=>{a.current.current.cursorPosition=g},getCurrentValue:()=>a.current.current.value,getCurrentPosition:()=>a.current.current.cursorPosition}},Ga=2,Ka=(n,t)=>t?new RegExp(`\\d|-|${xn(n)}`):/\d|-/,$a=(n,t)=>t?new RegExp(`[^\\d-${xn(n)}]`,"g"):/[^\d-]/g,qt=(n,t=!1,a=!1)=>ha[n]+Number(t)+Number(a),an=(n,t,a,l,r,i)=>{const d=/[^\d]/g,c=xn(a),m=new RegExp(`[^\\d${c}-]|(?!^)-`,"g"),p=/[^\d-]|(?!^)-/g;let g;if(t==="number"){if(g=l?n.replace(m,""):n.replace(p,""),l){const S=(g.match(new RegExp(xn(a),"g"))||[]).length;g=fa(g,a),S>1&&i?.("duplicateDecimalSeparator");const b=g.split(a);if(b.length===2){const u=b[1].length;b[1]=b[1].substring(0,r),b[1].length<u&&i?.("maxDecimalsReached"),g=b.join(a)}}}else g=n.replace(d,"");const h=g.includes(a),k=g.includes("-"),_=qt(t,h,k);return _&&g.length>_&&(g=g.substring(0,_),t==="number"&&i?.("maxDigitsReached")),g};function mn(n,t,a){const l=n.indexOf(t);if(l===-1)return 0;const r=n.length-l-1;return Math.min(r,a)}function Hn(n,t){const a=n.replace(/^-/,""),l=a.indexOf(t);return Math.max(l===-1?a.length:l,1)}const qa=n=>["Alt","AltGraph","Control","Meta","Shift"].some(a=>n.getModifierState(a)),un=(n,t,a)=>{let l=0,r=0,i=0;for(;r<t&&i<n.length;)a.test(n[i])&&(r++,l=i+1),i++;return l};function Vn(n,t,a){return n.substring(0,t).replace(a,"").length}const te=({type:n,initialValue:t="",locale:a="nb-NO",allowDecimals:l=!1,maxFractionDigits:r=Ga})=>{const i=r>0?l:!1,d=i?r:0,c=s.useRef(a),m=s.useMemo(()=>new Mn(a),[a]),p=m.getDecimalSeparator(),g=n==="number"?m.getThousandSeparator():ga,h=s.useMemo(()=>Ka(p,i),[p,i]),k=s.useMemo(()=>$a(p,i),[p,i]),[_,S]=s.useState(()=>an(t,n,p,i,d)),[b,u]=s.useState("valid"),[x,y]=s.useState(0),A=s.useRef(null),H=s.useRef(0),v=_.includes(p),R=s.useEffectEvent(T=>{const D=new Mn(c.current).getDecimalSeparator(),M=_.includes(D),P=i&&M?mn(_,D,d):0,$=Hn(_,D),ae=Ge({value:new Mn(c.current).parse(_).toString(),type:n,locale:T,options:{maximumFractionDigits:d,minimumFractionDigits:P,minimumIntegerDigits:$}}).value;S(an(ae,n,p,i,d)),c.current=T});s.useEffect(()=>{R(a)},[a]);const N=i&&v?mn(_,p,d):0,Y=Hn(_,p),Z=Ge({value:_,type:n,locale:a,options:{maximumFractionDigits:d,minimumFractionDigits:N,minimumIntegerDigits:Y}}),O="valueWithDecimalTail"in Z?Z.valueWithDecimalTail??"":Z.value,W=s.useCallback((T,D,M,P=!1)=>{const $=H.current+1;H.current=$,A.current={input:T,start:D,end:D,expectedValue:M,revision:$},P&&y(ae=>ae+1)},[]),xe=s.useCallback(()=>{const T=A.current;T&&T.revision===H.current&&T.input.value===T.expectedValue&&(T.input.setSelectionRange(T.start,T.end),A.current=null)},[]);s.useLayoutEffect(()=>{xe()},[O,x,xe]);const j=za({initialValue:O}),J=s.useCallback((T,D,M)=>{const P=j.undo(M);if(P){T.preventDefault();const $=an(P.value,n,p,i,d);S($);const ae=Math.min(P.cursorPosition,P.value.length);W(D,ae,P.value)}},[j,n,p,i,d,W]),Q=s.useCallback((T,D,M)=>{const P=j.redo(M);if(P){T.preventDefault();const $=an(P.value,n,p,i,d);S($);const ae=Math.min(P.cursorPosition,P.value.length);W(D,ae,P.value)}},[j,n,p,i,d,W]),ee=s.useCallback((T,D)=>{if(D>0){const M=_.slice(0,D-1)+_.slice(D);S(M);const P=Ge({value:M,type:n,locale:a}).value,$=un(P,D-1,h);W(T,$,P),j.pushState(P,$,T)}},[_,n,a,h,j,W]),ne=s.useCallback((T,D)=>{if(D<_.length){const M=_.slice(0,D)+_.slice(D+1);S(M);const P=Ge({value:M,type:n,locale:a}).value,$=un(P,D,h);W(T,$,P),j.pushState(P,$,T)}},[_,n,a,h,j,W]),ke=s.useCallback((T,D)=>{if(D<_.length){const M=_.slice(0,D)+_.slice(D+1);S(M);const P=Ge({value:M,type:n,locale:a}).value,$=un(P,D,h);W(T,$,P),j.pushState(P,$,T)}},[_,n,a,h,j,W]),Se=s.useCallback(T=>{const D=T.currentTarget,M=D.selectionEnd||0,P=D.value,$=P[M-1]===g,ae=P[M]===g,Me=(D.selectionEnd||0)-(D.selectionStart||0),He=qa(T);if(j.initialize(P,M),u("valid"),(T.ctrlKey||T.metaKey)&&(T.key==="y"||T.shiftKey&&T.key==="z")){Q(T,D,M);return}if((T.ctrlKey||T.metaKey)&&T.key==="z"&&!T.shiftKey){J(T,D,M);return}if(T.key==="Backspace"&&!He&&Me===0){if($&&M>1){T.preventDefault();const de=Vn(P,M-1,k);ee(D,de)}else if(M>0&&!$&&h.test(P[M-1])){j.updateCursorPosition(M);return}}if(T.key==="Delete"&&!He&&Me===0){const de=Vn(P,M,k);ae?(T.preventDefault(),ne(D,de)):M<P.length&&h.test(P[M])&&(T.preventDefault(),ke(D,de))}const Xe=qt(n,v);if(Xe&&_.length>=Xe&&/^[0-9]$/.test(T.key)&&!He&&Me===0&&(T.preventDefault(),n==="number"&&u("maxDigitsReached")),n==="number"&&i&&v&&/^[0-9]$/.test(T.key)&&!He&&Me===0){const de=P.indexOf(p);M>de&&mn(_,p,d+1)>=d&&(T.preventDefault(),u("maxDecimalsReached"))}n==="number"&&i&&v&&T.key===p&&!He&&Me===0&&(T.preventDefault(),u("duplicateDecimalSeparator"))},[_,n,g,j,h,k,J,Q,ee,ne,ke,v,i,p,d]),Re=s.useCallback(T=>{const D=T.target,M=D.value,P=D.selectionStart||0,$=Vn(M,P,k),ae=an(M,n,p,i,d,u);S(ae);const Me=i?mn(ae,p,d):0,He=Hn(ae,p),Xe=Ge({value:ae,type:n,locale:a,options:{maximumFractionDigits:d,minimumFractionDigits:Me,minimumIntegerDigits:He}}),de="valueWithDecimalTail"in Xe?Xe.valueWithDecimalTail??"":Xe.value,ht=de.startsWith(`0${p}`)&&M.startsWith(p)?$+1:$,An=un(de,ht,h);if(W(D,An,de),j.getCurrentValue()!==de)j.pushState(de,An);else{const pa=P-1;W(D,pa,de,!0)}},[n,a,p,i,d,h,k,j,W]);return{value:O,onChange:Re,onKeyDown:Se,rawValue:_,numberValue:n==="number"?m.parse(_):void 0,status:b}},kn=e.jsx("path",{d:"M18 13c.6 0 1 .4 1 .9v.9h2c.6 0 1 .4 1 .9v4.2c0 .5-.4.9-1 .9h-8c-.6 0-1-.4-1-.9v-4.2c0-.5.4-.9 1-.9h2v-.9c0-.5.4-.9 1-.9h2Zm-8 0c.6 0 1.1 0 1.6.1-.1.2-2.3 1.3-1.7 5.9H2v-2c0-2.2 3.6-4 8-4Zm8 1h-2v.899h2V14ZM10 3c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4Z"});function NS(n){return e.jsx(w,{...n,svgPath:kn})}const ut=e.jsx("path",{d:"M19 10.75H13.25V5H10.75V10.75H5V13.25H10.75V19H13.25V13.25H19V10.75Z"});function LS(n){return e.jsx(w,{...n,svgPath:ut})}const pt=e.jsx("path",{d:"M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm0-18C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2Zm1 5h-2v4H7v2h4v4h2v-4h4v-2h-4V7Z"});function OS(n){return e.jsx(w,{...n,svgPath:pt})}const Jt=e.jsx("path",{d:"M20 21H4V10h2v9h12v-9h2v11M3 3h18v6H3V3m6.5 8h5c.28 0 .5.22.5.5V13H9v-1.5c0-.28.22-.5.5-.5M5 5v2h14V5H5Z"});function IS(n){return e.jsx(w,{...n,svgPath:Jt})}const Wt=e.jsx("path",{d:"M20 9.86L12 3L4 9.86L5.67 11.8L10.75 7.45V21H13.25V7.45L18.33 11.8L20 9.86Z"});function BS(n){return e.jsx(w,{...n,svgPath:Wt})}const at=e.jsx("path",{d:"M7 4L12 8.95937L10.6364 10.2719L7.96364 7.61875V20H6.03636V7.61875L3.36364 10.2719L2 8.95937L7 4ZM17 21L12 16.0406L13.3636 14.7281L16.0364 17.3813V5H17.9636V17.3813L20.6364 14.7281L22 16.0406L17 21Z",fillRule:"evenodd",clipRule:"evenodd"});function AS(n){return e.jsx(w,{...n,svgPath:at})}const Ja=e.jsx("path",{d:"m19 2-5 4.5v11l5-4.5V2ZM6.5 5C4.55 5 2.45 5.4 1 6.5v14.66c0 .25.25.5.5.5.1 0 .15-.07.25-.07 1.35-.65 3.3-1.09 4.75-1.09 1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.31 4.75 1.06.1.05.15.03.25.03.25 0 .5-.25.5-.5V6.5c-.6-.45-1.25-.75-2-1V19c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V6.5C10.55 5.4 8.45 5 6.5 5Z"});function Wa(n){return e.jsx(w,{...n,svgPath:Ja})}const rt=e.jsx("path",{d:"M20.89 8.51v9.99c0 .55-.45 1-1 1H4.66c0 1.1.89 1.5 2 1.5h14c.91 0 1.73-.53 1.73-1.5v-9c0-1.02-.51-1.87-1.5-1.99 M9 1.5h4c1.1 0 2 .9 2 2v2h3c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-9c0-1.11.89-2 2-2h3v-2c0-1.11.89-2 2-2m4 4v-2H9v2z"});function MS(n){return e.jsx(w,{...n,svgPath:rt})}const bn=e.jsx("path",{d:"M21,8.5v9c0,1.1-.9,2-2,2H7.9l12.7-12.2c.3.3.4.7.4,1.2Z M21.6,3.7l-.4-.4-1-1-4.2,4v-1.8c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v2h-3c-1.1,0-2,.9-2,2v9c0,.4.1.7.3,1l-1.9,1.8,1.4,1.4h0S21.6,3.7,21.6,3.7ZM10,4.5h4v2h-4v-2Z"});function HS(n){return e.jsx(w,{...n,svgPath:bn})}const Xt=e.jsx("path",{d:"M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm0 2v4h10V4H7Zm0 6v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Zm-8 4v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Zm-8 4v2h2v-2H7Zm4 0v2h2v-2h-2Zm4 0v2h2v-2h-2Z"});function VS(n){return e.jsx(w,{...n,svgPath:Xt})}const Ut=e.jsx("path",{d:"M10.5 18.3689L12.8625 16H19.5V7H4.5V16H10.5V18.3689ZM10.2 22.21L13.9 18.5H20C20.5304 18.5 21.0391 18.2893 21.4142 17.9142C21.7893 17.5391 22 17.0304 22 16.5V6.5C22 5.96957 21.7893 5.46086 21.4142 5.08579C21.0391 4.71071 20.5304 4.5 20 4.5H4C3.46957 4.5 2.96086 4.71071 2.58579 5.08579C2.21071 5.46086 2 5.96957 2 6.5V16.5C2 17.0304 2.21071 17.5391 2.58579 17.9142C2.96086 18.2893 3.46957 18.5 4 18.5H8V21.5C8 21.7652 8.10536 22.0196 8.29289 22.2071C8.48043 22.3946 8.73478 22.5 9 22.5H9.5C9.75 22.5 10 22.4 10.2 22.21Z",fillRule:"evenodd",clipRule:"evenodd"});function FS(n){return e.jsx(w,{...n,svgPath:Ut})}const Zt=e.jsx("path",{d:"M15.9 12.05h-.05V8.5c0-.225-.25-.35-.425-.2L10.9 12.05V8.5c0-.225-.25-.35-.425-.2L5.95 12.05V3.175h-2.8v17.7h17.7V8.5c0-.225-.25-.35-.425-.2L15.9 12.05Z"});function zS(n){return e.jsx(w,{...n,svgPath:Zt})}const Bn=e.jsx("path",{d:"M19 21H8V7h11v14Zm0-16H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"});function GS(n){return e.jsx(w,{...n,svgPath:Bn})}const gt=e.jsx("path",{d:"M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9ZM7 6h10v13H7V6Zm2 2v9h2V8H9Zm4 0v9h2V8h-2Z"});function KS(n){return e.jsx(w,{...n,svgPath:gt})}const _n=e.jsx("path",{d:"m2.19 19.169 4.09-4.08c-.21-.3-.36-.62-.45-.97l-3.64 3.64v1.41Zm0 2.83H3.6l4.77-4.76-1.42-1.41-4.76 4.76v1.41Zm4.24 0 3.64-3.64c-.34-.09-.67-.24-.97-.45l-4.08 4.09h1.41Zm2.64-5.47-1.41-1.41 1.41 1.41Zm5.66-7.07c-.78-.78-.78-2.05 0-2.83.78-.78 2.05-.78 2.83 0 .77.78.78 2.05 0 2.83-.78.78-2.05.78-2.83 0Zm7.07-7.07S16.85.268 11.19 5.929c-2.19 2.19-3.5 4.6-4.35 6.71-.28.75-.09 1.57.46 2.13l2.13 2.12c.55.56 1.37.74 2.12.46a19.1 19.1 0 0 0 6.71-4.35c5.66-5.66 3.54-10.61 3.54-10.61ZM5.83 12.499 2 10.869l6.1-2.77c-.91 1.36-1.69 2.83-2.27 4.4Zm7.49 9.69-1.63-3.83c1.57-.58 3.04-1.36 4.4-2.27l-2.77 6.1Z"});function $S(n){return e.jsx(w,{...n,svgPath:_n})}const Yt=e.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"});function Qt(n){return e.jsx(w,{...n,svgPath:Yt})}const ea=e.jsx("path",{d:"M13 9h5.5L13 3.5V9ZM6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2Zm9 16v-2H6v2h9Zm3-4v-2H6v2h12Z"});function qS(n){return e.jsx(w,{...n,svgPath:ea})}const na=e.jsx("path",{d:"m15.07 11.25-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 1 0-4 0H8a4 4 0 0 1 8 0 3.2 3.2 0 0 1-.93 2.25ZM13 19h-2v-2h2v2ZM12 2C6.477 2 2 6.477 2 12a10 10 0 0 0 20 0c0-5.53-4.5-10-10-10Z"});function JS(n){return e.jsx(w,{...n,svgPath:na})}const ta=e.jsx("path",{d:"M13 9h-2V7h2v2Zm0 8h-2v-6h2v6ZM12 2C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2Z"});function Xa(n){return e.jsx(w,{...n,svgPath:ta})}const Ne=e.jsx("path",{d:"M18 3H6v4h12V3Zm1 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm-3 7H8v-5h8v5Zm3-11H5a3 3 0 0 0-3 3v6h4v4h12v-4h4v-6a3 3 0 0 0-3-3Z"});function WS(n){return e.jsx(w,{...n,svgPath:Ne})}const aa=e.jsx("path",{d:"M15 9H5V5h10v4Zm-3 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm5-16H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7l-4-4Z"});function XS(n){return e.jsx(w,{...n,svgPath:aa})}const ra=e.jsx("path",{d:"M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm0-18C6.477 2 2 6.477 2 12A10 10 0 1 0 12 2Zm4.24 5.76A5.95 5.95 0 0 0 12 6v6l-4.24 4.24a6 6 0 0 0 8.48 0 5.982 5.982 0 0 0 0-8.48Z"});function US(n){return e.jsx(w,{...n,svgPath:ra})}const oa=e.jsx("path",{d:"M19.35,11.76c-.06-2.09-.92-4.11-2.39-5.59-1.54-1.56-3.59-2.42-5.77-2.42s-4.24.86-5.8,2.43c-1.54,1.56-2.4,3.63-2.4,5.83,0,2.2.85,4.27,2.39,5.83,1.54,1.56,3.6,2.41,5.78,2.41,1.46,0,2.89-.4,4.15-1.14l.28-.16-1.81-1.82-.16.08c-.77.37-1.6.56-2.45.56-1.52,0-2.95-.6-4.03-1.68-2.22-2.24-2.22-5.9,0-8.14,1.08-1.08,2.51-1.68,4.03-1.68s2.95.6,4.03,1.68c1.01,1.01,1.61,2.39,1.64,3.83h-4.86l5.51,5.56,5.51-5.56h-3.65Z"});function ZS(n){return e.jsx(w,{...n,svgPath:oa})}const Ua=e.jsx("path",{d:"M12 2 1 21h22L12 2Zm0 4 7.53 13H4.47L12 6Zm-1 4v4h2v-4h-2Zm0 6v2h2v-2"});function Za(n){return e.jsx(w,{...n,svgPath:Ua})}const Ya=e.jsx("path",{d:"m11.504 23.1 3.6 2.8c-1 .5-1.6 1.6-1.6 2.7 0 1.7 1.4 3.1 3.1 3.1h11.7c.6 0 1-.4 1-1 0-.5-.4-1-1-1h-11.8c-.6 0-1.1-.5-1.1-1.1 0-.5.3-.9.8-1l12.8-3.3 1.7-.3c.4-.1.9-.1 1.3 0l3.3 1.2 8.2-1.3v9.7l-6.8.2-.5.8c-.3.4-.7.7-1.2.8l-14.8 2.6c-.5.1-1.1-.1-1.5-.4l-14-11.5c-1.2-1-.8-2.9.7-3.2l2.3-.6c1.3-.3 2.7 0 3.8.8Zm14 0-6.9 1.8c-.6.1-1.1-.3-1.1-.9 0-.5.4-.9.9-.9h7.1Zm3.5-5.8c.6 0 1 .4 1 1V20c0 .6-.4 1-1 1h-10.6c-.6 0-1-.4-1-1v-1.7c0-.6.4-1 1-1h10.6Zm-.2-7.3c.6 0 1.1.4 1.2 1l.1 1.7c.1.6-.3 1.1-.9 1.1l-10.6.8c-.6.1-1.1-.3-1.1-.9l-.1-1.7c-.1-.6.3-1.1.9-1.1l10.5-.9Z"});function Qa(n){return e.jsx(w,{...n,svgPath:Ya,size:n.size==="large"?n.size:"medium",variant:"themeIcon"})}const sa=e.jsx("path",{d:"M22.1,35c0-6.63,5.37-12,12-12,3.13,0,5.97,1.21,8.11,3.17.51-.06.96-.28,1.3-.66.36-.42.54-.94.48-1.5l-.18-2.3c-.08-1.06-.98-1.88-2.04-1.88h-.12l-.96.06c-.38-1.06-.78-2.42-1.16-3.74-.46-1.64-.94-3.32-1.42-4.52-.32-.78-1.04-1.28-1.84-1.3-4.02-.08-8.1-.14-12.14-.14s-8.1.06-12.12.14c-.8.02-1.52.52-1.84,1.3-.48,1.2-.96,2.88-1.42,4.52-.38,1.32-.78,2.68-1.16,3.74l-1.04-.06h-.12c-1.06,0-1.96.82-2.04,1.88l-.18,2.3c-.06.56.12,1.08.48,1.5.36.4.84.64,1.38.68l.24.02v6.56c0,.06,0,.12.02.16-.02.06-.02.12-.02.18v2.68c0,1.12.9,2.02,2.02,2.02h5.02c1.1,0,2-.9,2-2.02v-.62c2.25.08,4.51.09,6.76.11,0-.09-.01-.18-.01-.28ZM12.21,29.49c-1.18,0-2.14-.98-2.14-2.2s.96-2.18,2.14-2.18,2.14.98,2.14,2.18-.96,2.2-2.14,2.2ZM12.67,21.83h-.04c-.48,0-.74-.38-.66-.82.24-1.68,1.14-5.32,1.72-6.96.1-.28.38-.46.7-.48,3.24-.08,6.5-.12,9.74-.12s6.5.04,9.76.12c.32.02.6.2.7.48.58,1.64,1.48,5.28,1.72,6.96.06.44-.2.82-.66.82h-.04c-3.82-.1-7.64-.16-11.48-.16s-7.64.06-11.46.16Z M42.54,34.75c-.13-4.03-3.45-7.27-7.52-7.27-1.42,0-2.8.4-4.01,1.17l-.26.17,1.68,1.68.16-.09c.73-.4,1.57-.61,2.43-.61,2.79,0,5.07,2.2,5.2,4.95h-3.07l4.24,4.24,4.24-4.24h-3.08Z M37.45,39.6c-.73.4-1.57.61-2.43.61-2.79,0-5.07-2.2-5.2-4.95h3.07l-4.24-4.24-4.24,4.24h3.08c.13,4.03,3.45,7.27,7.52,7.27,1.42,0,2.8-.4,4.01-1.17l.26-.17-1.68-1.68-.16.09Z"});function YS(n){return e.jsx(w,{...n,svgPath:sa,size:n.size==="large"?n.size:"medium",variant:"themeIcon"})}const la=e.jsx("path",{d:"M30 7c1.4 0 2.9.6 4 1.7 2.2 2.2 2.2 5.8 0 8-1.5 1.5-4 2.2-6.3 2.6H41V42H7V19.3h13.1c-2.2-.3-4.8-1.1-6.3-2.6-2.2-2.2-2.2-5.8 0-8 1.1-1.1 2.5-1.7 4-1.7 1.4 0 2.9.6 4 1.7 1 1 1.7 2.4 2.1 3.9.5-1.5 1.1-2.9 2.1-3.9C27.1 7.6 28.6 7 30 7Zm3.4 16H14.5c0 2.1-1.7 3.8-3.8 3.8v7.6c2.1 0 3.8 1.7 3.8 3.8h18.9c0-2.1 1.7-3.8 3.8-3.8v-7.6a3.796 3.796 0 0 1-3.8-3.8ZM24 25a5.7 5.7 0 1 1 0 11.4A5.7 5.7 0 0 1 24 25Zm6.1-15a2.73 2.73 0 0 0-1.9.8c-1.1 1-1.7 3.4-1.9 5.8 2.4-.3 4.7-1 5.7-2 1-1.1 1-2.8 0-3.8-.5-.5-1.2-.8-1.9-.8Zm-12.2 0c-.7 0-1.4.3-1.9.8-1 1-1 2.7.1 3.7 1 1 3.3 1.7 5.7 2-.3-2.3-1-4.7-2-5.7-.5-.5-1.2-.8-1.9-.8Z"});function QS(n){return e.jsx(w,{...n,svgPath:la,variant:"themeIcon",size:n.size==="large"?n.size:"medium"})}const ia=e.jsx("path",{d:"M41.708 21.957v-7.103c0-.39-.486-.681-.778-.39l-8.952 7.395h-.097v-7.102c0-.39-.486-.681-.778-.39l-8.952 7.395V14.66c0-.389-.486-.68-.778-.389l-8.951 7.395V6.097h-5.74v35.027h6.129v-1.848s0-4.67 8.173-4.67 8.173 4.67 8.173 4.67v1.848h2.335v-1.848c-.097-1.849-.973-3.503-2.433-4.67 7.103.389 7.103 4.67 7.103 4.67v1.848h5.546V21.957ZM20.984 32.562c-2.238 0-4.087-1.848-4.087-4.086 0-2.238 1.849-4.087 4.087-4.087 2.238 0 4.086 1.849 4.086 4.087 0 2.238-1.848 4.086-4.086 4.086Zm7.005 0c-.778 0-1.557-.194-2.238-.68a5.845 5.845 0 0 0 0-6.812c.681-.486 1.46-.68 2.238-.68 2.238 0 4.087 1.848 4.087 4.086 0 2.238-1.849 4.086-4.087 4.086Z"});function ey(n){return e.jsx(w,{...n,svgPath:ia,size:n.size==="large"?n.size:"medium",variant:"themeIcon"})}const da=e.jsx("path",{d:"m40.12 37-2.78-7.38h1.54a.51.51 0 0 0 .46-.72L33.25 16h1.68a.5.5 0 0 0 .4-.79l-6.69-9.29a.51.51 0 0 0-.81 0l-5.55 7.68a1.5 1.5 0 0 0 .95 2.4l-1.61 3.42-3.29-4.92a.499.499 0 0 0-.84 0L10 25.74a.5.5 0 0 0 .41.78h2.05L7.89 36.94a.5.5 0 0 0 .46.7h7.72v4.64h3.68v-4.64h6.64v4.64h3.68v-4.64h9.58a.499.499 0 0 0 .47-.64Z"});function ny(n){return e.jsx(w,{...n,svgPath:da,size:n.size==="large"?n.size:"medium",variant:"themeIcon"})}const er=(n,t)=>{const a=/[\s.,:-]+/g;return n.filter(l=>(l.title??l.description).replace(a,"").toLowerCase().indexOf(t.replace(a,"").toLowerCase())>-1).map(l=>l)},nr="_modal_yb8es_5",tr="_modalContainer_yb8es_35",ar="_modalHeading_yb8es_38",rr="_modalHeadingNoPadding_yb8es_41",or="_modalIllustration_yb8es_44",sr="_modalContent_yb8es_51",lr="_closeButton_yb8es_70",ir="_srOnly_yb8es_81",we={modal:nr,modalContainer:tr,modalHeading:ar,modalHeadingNoPadding:rr,modalIllustration:or,modalContent:sr,closeButton:lr,srOnly:ir},fe=({ref:n,id:t,className:a="",classNames:l,lang:r,"data-testid":i,dismissOnEsc:d=!0,dismissOnOutsideClick:c=!0,hideCloseButton:m=!1,hideTitle:p=!1,imageSource:g,imageSourceAltText:h,padding:k="l",title:_,variant:S="outline",shadowRootNode:b,onClose:u,renderIcon:x,children:y})=>{const A=`modalHeadingId-${s.useId()}`,{t:H}=me("ds_overlays",{i18n:U}),v=s.useRef({mouseDownCaptured:!1,hasUserInteractionBeforeOpen:!1,isOpenedAtLeastOnce:!1}),R=s.useRef(null);s.useImperativeHandle(n,()=>R?.current);const[N,Y]=s.useState();s.useEffect(()=>{const j=R.current;if(j){const Q=j.showModal;j.showModal=function(...ne){v.current.isOpenedAtLeastOnce=!0,Y(!v.current.hasUserInteractionBeforeOpen),Q.apply(j,ne)}}const J=()=>{v.current.isOpenedAtLeastOnce||(v.current.hasUserInteractionBeforeOpen=!0)};return document.addEventListener("mousedown",J),document.addEventListener("keydown",J),()=>{document.removeEventListener("mousedown",J),document.removeEventListener("keydown",J)}},[]),s.useEffect(()=>{const j=R.current,J=()=>{if(N){Y(!1),v.current.hasUserInteractionBeforeOpen=!0;const Q=b?b.querySelector("#topbanner-focus-target"):document.querySelector("#topbanner-focus-target");if(Q)Q?.focus();else{const ee=document.body.tabIndex;document.body.tabIndex=-1,document.body.focus(),document.body.tabIndex=ee}}};return j&&j.addEventListener("close",J),()=>{j&&j.removeEventListener("close",J)}},[N,b]),s.useEffect(()=>{const j=setTimeout(()=>{!d&&R.current?.open&&document.activeElement?.nodeName==="BODY"&&R.current.focus()},0);return()=>clearTimeout(j)},[y,d]);const Z=j=>{if(!(j.currentTarget instanceof HTMLElement))return!0;const J=j.currentTarget.getBoundingClientRect();return J.left>j.clientX||J.right<j.clientX||J.top>j.clientY||J.bottom<j.clientY},O=j=>{!c||!(j.target instanceof HTMLElement)||(j.type==="mousedown"&&(v.current.mouseDownCaptured=!1),Z(j)&&(j.type==="mouseup"&&v.current.mouseDownCaptured?(u?.(),R.current?.close()):v.current.mouseDownCaptured=!0))},W=p?we.srOnly:"",xe=k==="mega"?we.modalHeadingNoPadding:"";return e.jsx("dialog",{ref:R,id:t,className:`${we.modal} ${a} ${l?.container??""}`.trim(),lang:r,"data-testid":i,"aria-labelledby":A,"data-variant":S,autoFocus:!0,onCancel:j=>!d&&j.preventDefault(),onKeyDown:j=>{j.key==="Escape"&&(d?(u?.(),R.current?.close()):j.preventDefault())},onMouseUp:O,onMouseDown:O,children:e.jsxs("div",{tabIndex:-1,className:we.modalContainer,children:[!m&&e.jsx(oe,{className:we.closeButton,svgPath:Nn,title:H("modal.CloseModal"),onClick:()=>{u?.(),R.current?.close()}}),g&&e.jsx("img",{src:g,alt:h??"",className:`${we.modalIllustration} ${l?.image??""}`.trim()}),e.jsxs("div",{className:we.modalContent,"data-padding":k,"data-no-padding-top":g?"true":void 0,children:[x&&e.jsx("div",{children:x?.()}),e.jsx(E,{className:`${we.modalHeading} ${xe} ${W}`.trim(),id:A,as:"h1",level:3,hasSpacing:!0,children:_}),y]})]})})};fe.displayName="Modal";try{fe.displayName="Modal",fe.__docgenInfo={description:"Modal",displayName:"Modal",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDialogElement>"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"{ container?: string; image?: string; } | undefined"}},children:{defaultValue:null,description:"Innhold",name:"children",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"outline"},description:"Definerer stilen til Modal.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"outline"'},{value:'"plain"'}]}},padding:{defaultValue:{value:"l"},description:"Padding rundt Modal",name:"padding",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"none"'},{value:'"m"'},{value:'"l"'},{value:'"mega"'}]}},title:{defaultValue:null,description:"Overskrift",name:"title",required:!0,type:{name:"string"}},hideTitle:{defaultValue:{value:!1},description:"Skjuler overskriften, men fremdeles synlig for skjermleser",name:"hideTitle",required:!1,type:{name:"boolean"}},hideCloseButton:{defaultValue:{value:!1},description:"Om lukkekryss skal skjules",name:"hideCloseButton",required:!1,type:{name:"boolean"}},dismissOnOutsideClick:{defaultValue:{value:!0},description:"Om autolukking skal skrus på/av. Autolukking er skrudd på som default.",name:"dismissOnOutsideClick",required:!1,type:{name:"boolean"}},dismissOnEsc:{defaultValue:{value:!0},description:`Om modalen kan lukkes ved Esc-trykk. Modalen lukkes ved Esc-trykk som
default.`,name:"dismissOnEsc",required:!1,type:{name:"boolean"}},imageSource:{defaultValue:null,description:"Source til illustrasjonsbilde øverst i Modal",name:"imageSource",required:!1,type:{name:"string"}},imageSourceAltText:{defaultValue:null,description:`Alt tekst til illustrasjonsbilde. Hvis bildet er meningsbærende, legg på
alt tekst.`,name:"imageSourceAltText",required:!1,type:{name:"string"}},renderIcon:{defaultValue:null,description:"Icon-komponent som en funksjon som vises over overskriften",name:"renderIcon",required:!1,type:{name:"(() => ReactElement<IconProps, string | JSXElementConstructor<any>>)"}},shadowRootNode:{defaultValue:null,description:"Modal i shadowndom.",name:"shadowRootNode",required:!1,type:{name:"Document | ShadowRoot"}},onClose:{defaultValue:null,description:`Callback når modalen lukkes (lukkeknapp, Esc-tast, eller klikk utenfor).
Kjøres ikke når modalen lukkes programmatisk med ref.current.close().`,name:"onClose",required:!1,type:{name:"(() => void)"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const Ye=s.createContext({});try{Ye.displayName="PopoverContext",Ye.__docgenInfo={description:"",displayName:"PopoverContext",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"PopoverContextProps"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const dr="_popover_1t7tm_1",cr="_popover_forest_1t7tm_9",mr="_popover_ochre_1t7tm_13",ur="_popover_white_1t7tm_17",pr="_popoverContent_1t7tm_21",gr="_popoverContentWrapper_1t7tm_26",fr="_popoverContentCloseButton_1t7tm_36",hr="_popoverArrow_1t7tm_44",vr="_popoverArrow_top_1t7tm_53",br="_popoverArrow_bottom_1t7tm_57",_r="_popoverArrow_left_1t7tm_61",xr="_popoverArrow_right_1t7tm_65",Ve={popover:dr,popover_forest:cr,popover_ochre:mr,popover_white:ur,popoverContent:pr,popoverContentWrapper:gr,popoverContentCloseButton:fr,popoverArrow:hr,popoverArrow_top:vr,popoverArrow_bottom:br,popoverArrow_left:_r,popoverArrow_right:xr},sn=({ref:n,id:t,className:a="",classNames:l,lang:r,"data-testid":i,as:d="div",children:c})=>{const{floatingData:m,interactions:p,arrowRef:g,isOpen:h,setIsOpen:k,color:_="forest",shouldRestoreFocus:S=!0,onClose:b}=s.useContext(Ye),{refs:u,floatingStyles:x,placement:y,middlewareData:A}=m,{getFloatingProps:H}=p,{t:v}=me("Shared",{i18n:U}),R=y.split("-")[0],N=Ve[`popover_${_}`],Y=Ve[`popoverArrow_${R}`],Z=it([u.setFloating,n]),O={top:"bottom",right:"left",bottom:"top",left:"right"}[R];return h?e.jsxs(d,{...H(),ref:Z,style:x,id:t,lang:r,"data-testid":i,className:`${Ve.popover} ${N} ${a}`.trim(),children:[e.jsxs(d,{className:Ve.popoverContent,children:[e.jsx(d,{className:`${Ve.popoverContentWrapper} ${l?.contentWrapper??""}`.trim(),children:c}),e.jsx(oe,{className:`${Ve.popoverContentCloseButton} ${l?.closeButton??""}`.trim(),svgPath:Nn,title:v("shared.Close"),onClick:()=>{b?.(),k(!1),S&&u.domReference.current?.focus()}})]}),e.jsx(d,{ref:g,style:{left:A.arrow?.x,top:A.arrow?.y,...O?{[O]:`-${(g.current?.offsetWidth??0)/2}px`}:{}},className:`${Ve.popoverArrow} ${Y}`.trim()})]}):null};sn.displayName="PopoverContent";try{sn.displayName="PopoverContent",sn.__docgenInfo={description:"",displayName:"PopoverContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"{ contentWrapper?: string; closeButton?: string; } | undefined"}},children:{defaultValue:null,description:`Innhold i popup-boksen. NB! Hvis as-prop er satt til span, må innholdet
være en string eller et HTML-element som er tillatt i en span. Finn ut
hvilke elementer som er tillatt i en span:
{@link https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content}.`,name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:{value:"div"},description:"HTML-element til innholdet.",name:"as",required:!1,type:{name:"enum",value:[{value:'"div"'},{value:'"span"'}]}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const Sn=({ref:n,id:t,className:a="",lang:l,"data-testid":r,title:i,ariaDescribedby:d,size:c,svgPath:m,hideOutline:p=!1,onClick:g,onBlur:h,onFocus:k})=>{const _=i??va(),{floatingData:S,setIsOpen:b,isOpen:u}=s.useContext(Ye),{setReference:x}=S.refs,y=it([x,n]);return e.jsx(oe,{ref:y,id:t,className:a,lang:l,"data-testid":r,title:_,svgPath:m??ba,size:c,ariaDescribedby:d,ariaExpanded:u,isOutlined:!p,onClick:A=>{g?.(A),b(!u)},onBlur:h,onFocus:k})};Sn.displayName="PopoverTrigger";try{Sn.displayName="PopoverTrigger",Sn.__docgenInfo={description:"",displayName:"PopoverTrigger",props:{className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},hideOutline:{defaultValue:{value:!1},description:"Om rammen til knappen skal skjules",name:"hideOutline",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},svgPath:{defaultValue:null,description:`HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke.
Alternativt kan custom path sendes.`,name:"svgPath",required:!1,type:{name:"ReactElement<SVGPathElement, string | JSXElementConstructor<any>>"}},ariaDescribedby:{defaultValue:null,description:"",name:"ariaDescribedby",required:!1,type:{name:"string"}},size:{defaultValue:null,description:"Størrelse på knappen.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<HTMLButtonElement>"}}}}}catch{}const F=(n=>{const{isOpen:t,position:a="bottomStart",disableAutoDismiss:l,disableAutoDismissOnMobile:r,children:i,onClose:d}=n,c=s.useRef(null),[m,p]=s.useState(!1),g=t??m,h=!Ln("(min-width: 640px)"),k=!!(!l&&(!h||!r&&h)),_=c.current?.offsetWidth??0,S=Math.sqrt(2*_**2)/2,u=_a({open:g,onOpenChange:H=>{p(H),H||d?.()},strategy:"fixed",placement:(H=>H.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase())(a),whileElementsMounted:xa,middleware:[ka({mainAxis:S,alignmentAxis:-32}),Sa(),ya(),ja({element:c})]}),x=Ta(u.context,{enabled:k,ancestorScroll:!1}),y=Ea([x]);s.useEffect(()=>{if(!g||!k)return;const H=()=>{p(!1),d?.()};return window.addEventListener("resize",H),()=>{window.removeEventListener("resize",H)}},[g,k,d]);const A=s.useMemo(()=>({floatingData:u,interactions:y,arrowRef:c,isOpen:g,setIsOpen:p,isMobile:h,...n}),[y,n,u,c,g,p,h]);return e.jsx(Ye.Provider,{value:A,children:i})});F.displayName="Popover";F.Content=sn;F.Content.displayName="Popover.Content";F.Trigger=Sn;F.Trigger.displayName="Popover.Trigger";try{F.displayName="Popover",F.__docgenInfo={description:"Popover",displayName:"Popover",props:{position:{defaultValue:null,description:"Plassering av popover",name:"position",required:!1,type:{name:"enum",value:[{value:'"topStart"'},{value:'"topEnd"'},{value:'"bottomStart"'},{value:'"bottomEnd"'}]}},color:{defaultValue:null,description:"Bakgrunnsfarge",name:"color",required:!1,type:{name:"enum",value:[{value:'"white"'},{value:'"ochre"'},{value:'"forest"'}]}},disableAutoDismiss:{defaultValue:null,description:"Om autolukking skal skrus av",name:"disableAutoDismiss",required:!1,type:{name:"boolean"}},disableAutoDismissOnMobile:{defaultValue:null,description:`Om autolukking skal skrus av på enheter med smal skjerm. Gjelder også selv
om disableAutoDismiss er satt til false.`,name:"disableAutoDismissOnMobile",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Om Popover er synlig",name:"isOpen",required:!1,type:{name:"boolean"}},shouldRestoreFocus:{defaultValue:null,description:`Om fokus skal settes tilbake til trigger ved bruk av lukkekrysset. Hvis
denne settes til false, så må fokus håndteres manuelt.`,name:"shouldRestoreFocus",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback når Popover lukkes",name:"onClose",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Popover.Content og Popover.Trigger",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Pe={me:"rolepicker.me",person:"rolepicker.person",deceasedPerson:"rolepicker.person.deceased",business:"rolepicker.business",businessSubunit:"rolepicker.business.subunit",discontinuedBusiness:"rolepicker.business.discontinued",logout:"rolepicker.logout"},kr=["AS","DA","ANS","ASA","SE","BA","SA","SCE","STI","IKS","KF","FKF","RHF","HF","NUF"],Fn=n=>{let t=n.name;return kr.includes(n.unitType)||(t+=` ${n.unitType}`),n.isDeleted&&(t+=` (${U.t("ds_overlays:rolepicker.Deleted")})`),t},Qe=s.createContext(null);try{Qe.displayName="RolePickerContext",Qe.__docgenInfo={description:"",displayName:"RolePickerContext",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"RolePickerContextProps | null"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Sr="_withAlert_1842b_1",yr={withAlert:Sr};function Le({id:n,title:t,description:a,svgPath:l,titleAs:r,webAnalyticsId:i,onClick:d}){const c=s.useContext(Qe),m=s.useRef(null),p=c?.error?.entityId===n,g=()=>{c?.setError(void 0),m.current?.focus()};return e.jsxs("div",{children:[e.jsx(ve,{ref:h=>{m.current=h,h&&i&&h?.setAttribute("data-webanalytics-id",i)},href:"#",className:`${p?yr.withAlert:""}`,titleAs:r??"h3",title:t,svgPath:l,hasSpinner:c?.loadingEntityId===n,size:"medium",description:a,onClick:async h=>{h.preventDefault(),d?.(h)}}),e.jsx(en,{variant:"warning",showAlert:p,onClose:g,children:c?.error?.message})]})}Le.displayName="RolePickerRow";try{Le.displayName="RolePickerRow",Le.__docgenInfo={description:"",displayName:"RolePickerRow",props:{id:{defaultValue:null,description:"",name:"id",required:!0,type:{name:"string"}},webAnalyticsId:{defaultValue:null,description:"",name:"webAnalyticsId",required:!1,type:{name:"enum",value:[{value:'"rolepicker.me"'},{value:'"rolepicker.person"'},{value:'"rolepicker.person.deceased"'},{value:'"rolepicker.business"'},{value:'"rolepicker.business.subunit"'},{value:'"rolepicker.business.discontinued"'},{value:'"rolepicker.logout"'}]}},title:{defaultValue:null,description:"Tittel",name:"title",required:!0,type:{name:"string | number | string[] | number[]"}},description:{defaultValue:null,description:"Beskrivelse",name:"description",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement>"}},svgPath:{defaultValue:null,description:`HTML-path node. Forhåndsdefinerte paths kan importeres fra ds-icons pakke.
Alternativt kan custom path sendes.`,name:"svgPath",required:!1,type:{name:"ReactElement<SVGPathElement, string | JSXElementConstructor<any>>"}},titleAs:{defaultValue:null,description:"Rendrer tittel som heading på gitt nivå",name:"titleAs",required:!1,type:{name:"enum",value:[{value:'"h1"'},{value:'"h2"'},{value:'"h3"'},{value:'"h4"'},{value:'"h5"'},{value:'"h6"'}]}}}}}catch{}const jr="_businessList_3mzou_1",Tr="_checkboxGroup_3mzou_9",Er="_showAllButtonWrapper_3mzou_21",Cr="_subUnitsList_3mzou_26",Pr="_subUnit_3mzou_26",rn={businessList:jr,checkboxGroup:Tr,showAllButtonWrapper:Er,subUnitsList:Cr,subUnit:Pr},bt=5,yn=({businesses:n,filterQuery:t,showInactiveBusinesses:a,showSubunits:l})=>{const{t:r}=me("ds_overlays",{i18n:U}),i=s.useContext(Qe),[d,c]=s.useState(!1),[m,p]=s.useState(a),[g,h]=s.useState(l),k=s.useRef(null),_=()=>{const v=k.current?.querySelectorAll("a").length??1;c(!0),k.current?.querySelectorAll("a")[v-1].focus()},S=()=>{c(!1),k.current?.querySelectorAll("a")[0].focus()},b=async v=>{i?.onEntitySelect?.(v)},u=s.useMemo(()=>{let v=JSON.parse(JSON.stringify(n.list));return v=m?v:v.filter(R=>!R.isDeleted),t?v=v.filter(R=>{const N=(R.name+R.unitType).toLowerCase().includes(t.toLowerCase())||R.organizationNumber.includes(t.toLowerCase())||R.mainOrganizationNumber?.includes(t.toLowerCase()),Y=g&&R.subunits?.some(Z=>(Z.name.toLowerCase()+Z.unitType.toLowerCase()).includes(t.toLowerCase())&&(m||!Z.isDeleted));if(N)return!0;if(Y){const Z=R.subunits?.filter(O=>(O.name.toLowerCase()+O.unitType.toLowerCase()).includes(t.toLowerCase())&&(m||!O.isDeleted));return R.subunits=Z,!0}return!1}):v=d?v:v.slice(0,bt),v},[n.list,m,t,g,d]),x=n.list.some(v=>v.isDeleted||v.subunits?.some(R=>R.isDeleted)),y=n.list.some(v=>v.subunits),A=s.useCallback(()=>g&&m?n.total:g?n.list.filter(v=>!v.isDeleted).reduce((v,R)=>{const N=R.subunits?.filter(Y=>!Y.isDeleted).length??0;return v+1+N},0):m?n.list.length:n.list.filter(v=>!v.isDeleted).length,[n.list,n.total,m,g]),H=!t&&n.list?.length>bt;return e.jsxs("div",{children:[e.jsx(E,{as:"h2",level:3,id:"businessesHeadingId",children:t?`${u.length} ${r("rolepicker.BusinessHits")}`:r("rolepicker.BusinessesHeading")}),x||y?e.jsxs("div",{className:rn.checkboxGroup,children:[x?e.jsx(Oe,{checked:m,onChange:v=>p(v.target.checked),children:r("rolepicker.ShowInactiveBusinessesHeader")}):null,y?e.jsx(Oe,{checked:g,onChange:v=>h(v.target.checked),children:r("rolepicker.ShowSubBusinessesHeading")}):null]}):null,e.jsx("nav",{ref:k,"aria-labelledby":"businessesHeadingId",children:e.jsx("ul",{className:rn.businessList,children:u?.map(v=>{if(g&&v.subunits){const R=m?v.subunits:v.subunits.filter(N=>!N.isDeleted);return e.jsxs("li",{children:[e.jsx(Le,{id:v.organizationNumber,title:Fn(v),description:e.jsxs(e.Fragment,{children:[r("rolepicker.BusinessDescriptionPrefix")," ",Ze(v.organizationNumber)," ",e.jsxs("em",{children:["(",r("rolepicker.MainBusiness"),")"]})]}),svgPath:v.isDeleted?bn:rt,webAnalyticsId:v.isDeleted?Pe.discontinuedBusiness:Pe.business,onClick:()=>{b(v)}}),e.jsx("ul",{className:rn.subUnitsList,children:R.map(N=>e.jsx("li",{className:rn.subUnit,children:e.jsx(Le,{id:N.organizationNumber,title:Fn(N),titleAs:"h4",description:e.jsxs(e.Fragment,{children:[r("rolepicker.BusinessDescriptionPrefix")," ",Ze(N.organizationNumber)," ",e.jsxs("em",{children:["(",r("rolepicker.SubUnit"),")"]})]}),svgPath:N.isDeleted?bn:vt,webAnalyticsId:Pe.businessSubunit,onClick:()=>{b(N)}})},N.organizationNumber))})]},v.organizationNumber)}else{const R=v.subunits?rt:vt;return e.jsx("li",{children:e.jsx(Le,{id:v.organizationNumber,title:Fn(v),description:`${r("rolepicker.BusinessDescriptionPrefix")} ${Ze(v.organizationNumber)}`,svgPath:v.isDeleted?bn:R,webAnalyticsId:v.isDeleted?Pe.discontinuedBusiness:Pe.business,onClick:()=>{b(v)}})},v.organizationNumber)}})})}),H?e.jsx("div",{className:rn.showAllButtonWrapper,children:d?e.jsx(C,{variant:"tertiary",onClick:S,children:r("rolepicker.ShowLess")}):e.jsx(C,{variant:"tertiary",onClick:_,children:`${r("rolepicker.ShowAll")} ${r("rolepicker.Businesses")} (${A()})`})}):null]})};yn.displayName="RolePickerBusinessList";try{yn.displayName="RolePickerBusinessList",yn.__docgenInfo={description:"",displayName:"RolePickerBusinessList",props:{filterQuery:{defaultValue:null,description:"",name:"filterQuery",required:!1,type:{name:"string"}},businesses:{defaultValue:null,description:"",name:"businesses",required:!0,type:{name:"Paginated<Business>"}},showInactiveBusinesses:{defaultValue:null,description:"",name:"showInactiveBusinesses",required:!1,type:{name:"boolean"}},showSubunits:{defaultValue:null,description:"",name:"showSubunits",required:!1,type:{name:"boolean"}}}}}catch{}const Rr="_searchContainer_1058c_5",wr="_topContainer_1058c_12",Dr="_label_1058c_18",Nr="_clearButton_1058c_26",Lr="_filterIcon_1058c_33",Or="_inputWrapper_1058c_41",Ir="_input_1058c_41",Br="_srOnly_1058c_82",Ee={searchContainer:Rr,topContainer:wr,label:Dr,clearButton:Nr,filterIcon:Lr,inputWrapper:Or,input:Ir,srOnly:Br},jn=({label:n,value:t,onChange:a,onClear:l})=>{const{t:r}=me("ds_forms",{i18n:U}),{t:i}=me("ds_overlays",{i18n:U}),d=s.useRef(null),[c,m]=s.useState(""),[p,g]=s.useState(!!t);return s.useEffect(()=>{m("");const h=setTimeout(()=>{m(i("rolepicker.SearchResultUpdated"))},100);return()=>clearTimeout(h)},[t,i]),e.jsx("div",{className:Ee.topContainer,children:e.jsxs("div",{className:Ee.searchContainer,children:[e.jsx("label",{className:Ee.label,htmlFor:"filterInputId",children:n}),e.jsx("div",{className:Ee.srOnly,id:"liveSearchId",children:i("rolepicker.SearchResultDescription")}),e.jsx("div",{className:Ee.srOnly,"aria-live":"assertive","aria-atomic":"true",children:t?e.jsx("div",{children:c}):null}),e.jsxs("div",{className:Ee.inputWrapper,children:[e.jsx("input",{ref:d,id:"filterInputId","aria-describedby":"liveSearchId",className:Ee.input,name:"filter",value:t,type:"search",onChange:h=>{a?.(h),h.target.value.length?g(!0):g(!1)}}),p&&e.jsx(oe,{className:Ee.clearButton,size:"small",svgPath:Nn,title:r("searchfield.ClearButtonTitle"),onClick:h=>{l?.(h),g(!1),d.current?.focus()}}),e.jsx(w,{svgPath:Ca,className:Ee.filterIcon})]})]})})};jn.displayName="RolePickerFilterInput";try{jn.displayName="RolePickerFilterInput",jn.__docgenInfo={description:"",displayName:"RolePickerFilterInput",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},onClear:{defaultValue:null,description:"",name:"onClear",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const ca=(n,t)=>{const a=t==="en_GB"?"en-GB":"no-NO",l=a==="en-GB"?{day:"numeric",month:"long",year:"numeric"}:{day:"2-digit",month:"2-digit",year:"numeric"};return n.toLocaleDateString(a,l)},ma=({dateOfBirth:n,personId:t})=>{const{t:a,language:l}=U;return n?`${a("ds_overlays:rolepicker.DateOfBirth")} ${ca(n,l)}`:`${a("ds_overlays:rolepicker.PeopleDescriptionPrefix")} ${On(t)}`},Ar="_peopleList_10bzt_1",Mr="_showDeceasedChecbox_10bzt_9",Hr="_showAllButtonWrapper_10bzt_13",zn={peopleList:Ar,showDeceasedChecbox:Mr,showAllButtonWrapper:Hr},Gn=5,ot=({people:n,filterQuery:t,showDeceasedPeople:a})=>{const{t:l}=me("ds_overlays",{i18n:U}),[r,i]=s.useState(!1),[d,c]=s.useState(a),m=s.useContext(Qe),p=s.useRef(null),g=()=>{i(!0),p.current?.querySelectorAll("a")[Gn-1].focus()},h=()=>{i(!1),p.current?.querySelectorAll("a")[0].focus()},k=async u=>{m?.onEntitySelect?.(u)},_=s.useMemo(()=>{let u=n.list.slice();return u=d?u:u.filter(x=>!x.isDeleted),t?u.filter(x=>{const y=x.dateOfBirth?ca(x.dateOfBirth,U.language):x.personId;return x.name.toLowerCase().includes(t.toLowerCase())||y.includes(t.toLowerCase())}):r?u:u.slice(0,Gn)},[n.list,d,t,r]),S=s.useCallback(()=>d?n.total:n.list.filter(u=>!u.isDeleted).length,[n.list,n.total,d]),b=!t&&n.total>Gn;return e.jsxs("div",{children:[e.jsx(E,{as:"h2",level:3,id:"otherPeopleHeadingId",children:t?`${_.length} ${l("rolepicker.PeopleHits")}`:l("rolepicker.PeopleHeading")}),n.list.some(u=>u.isDeleted)?e.jsx(Oe,{className:zn.showDeceasedChecbox,checked:d,onChange:u=>c(u.target.checked),children:l("rolepicker.ShowDeceasedPersons")}):null,e.jsx("nav",{ref:p,"aria-labelledby":"otherPeopleHeadingId",children:e.jsx("ul",{className:zn.peopleList,children:_.map(u=>e.jsx("li",{children:e.jsx(Le,{id:u.personId,title:`${u.name}${u.isDeleted?` (${l("rolepicker.Deceased")})`:""}`,description:ma(u),svgPath:Pa,webAnalyticsId:u.isDeleted?Pe.deceasedPerson:Pe.person,onClick:()=>k(u)})},u.personId))})}),b?e.jsx("div",{className:zn.showAllButtonWrapper,children:r?e.jsx(C,{variant:"tertiary",onClick:h,children:l("rolepicker.ShowLess")}):e.jsx(C,{variant:"tertiary",onClick:g,children:`${l("rolepicker.ShowAll")} ${l("rolepicker.People")} (${S()})`})}):null]})};try{ot.displayName="RolePickerPeopleList",ot.__docgenInfo={description:"",displayName:"RolePickerPeopleList",props:{filterQuery:{defaultValue:null,description:"",name:"filterQuery",required:!1,type:{name:"string"}},people:{defaultValue:null,description:"",name:"people",required:!0,type:{name:"Paginated<Person>"}},showDeceasedPeople:{defaultValue:null,description:"",name:"showDeceasedPeople",required:!0,type:{name:"boolean"}}}}}catch{}const Vr="_rolePicker_60zyl_1",Fr="_rolePickerFooter_60zyl_7",zr="_container_60zyl_13",Kn={rolePicker:Vr,rolePickerFooter:Fr,container:zr},_e=({ref:n,id:t,className:a="",lang:l,"data-testid":r,me:i,businesses:d,people:c,title:m,dismissOnEsc:p=!0,dismissOnOutsideClick:g=!0,hideCloseButton:h=!1,minimumEntitiesForSearch:k=11,showInactiveBusinesses:_=!1,showSubunits:S=!0,showDeceasedPeople:b=!1,onClose:u,onEntitySelect:x,onLogout:y,children:A})=>{const[H,v]=s.useState(""),[R,N]=s.useState(void 0),[Y,Z]=s.useState(void 0),{t:O}=me("ds_overlays",{i18n:U}),W=s.useDeferredValue(H),xe=d?d.total:0,j=c?c.total:0,J=xe+j>=k,Q=s.useRef(null);s.useImperativeHandle(n,()=>Q.current);const ee=()=>{Z(void 0),N(void 0),u?.()},ne=()=>{Q.current?.close(),ee()},ke=()=>c&&c.total>0&&d&&d.total>0?e.jsxs(f,{children:[O("rolepicker.YouCanRepresent"),e.jsx("strong",{children:` ${c.total} ${c.total>1?O("rolepicker.People"):O("rolepicker.Person")} ${O("rolepicker.And")} ${d.total} ${d.total>1?O("rolepicker.Businesses"):O("rolepicker.Business")}.`})]}):c&&c.total>0?e.jsxs(f,{children:[O("rolepicker.YouCanRepresent"),e.jsx("strong",{children:` ${c.total} ${c.total>1?O("rolepicker.People"):O("rolepicker.Person")}.`})]}):d&&d.total>0?e.jsxs(f,{children:[O("rolepicker.YouCanRepresent"),e.jsx("strong",{children:` ${d.total} ${d.total>1?O("rolepicker.Businesses"):O("rolepicker.Business")}.`})]}):null,Se=`${Kn.container} ${a}`.trim(),Re=!i&&!c&&d&&d.total===0;let T=m??O("rolepicker.Heading");Re&&(T=O("rolepicker.NoBusinessesErrorTitle"));const D=s.useCallback(P=>{const $="personId"in P?P.personId:P.organizationNumber;N($),x?.(P).then(ae=>{Z(ae?.error?{entityId:$,message:ae.error}:void 0),N(void 0)})},[x]),M=s.useMemo(()=>({onEntitySelect:D,error:Y,setError:Z,loadingEntityId:R,setLoadingEntityId:N}),[Y,D,R]);return e.jsx(Qe.Provider,{value:M,children:e.jsx(fe,{ref:Q,id:t,className:Se,lang:l,title:T,"data-testid":r,dismissOnEsc:p,dismissOnOutsideClick:g,hideCloseButton:h,onClose:ee,children:e.jsxs("div",{children:[e.jsxs("div",{className:Kn.rolePicker,children:[i?e.jsx(Le,{id:i.personId,title:O("rolepicker.MeHeading"),description:ma(i),svgPath:Yt,titleAs:"h2",webAnalyticsId:Pe.me,onClick:()=>D(i)}):null,ke(),J?e.jsx(jn,{label:O("rolepicker.SearchText"),value:H,onChange:P=>v(P.target.value),onClear:()=>v("")}):null,c&&c?.total>0?e.jsx(ot,{people:c,filterQuery:W,showDeceasedPeople:b}):null,d&&d.total>0?e.jsx(yn,{businesses:d,filterQuery:W,showSubunits:S,showInactiveBusinesses:_}):null,Re?e.jsxs(f,{children:[O("rolepicker.NoBusinessesDescription")," ",e.jsxs("strong",{children:[O("rolepicker.Business"),"."]})]}):null,A]}),e.jsx("div",{className:Kn.rolePickerFooter,children:Re?e.jsx(C,{href:"https://skatt.skatteetaten.no/web/minside/person",children:O("rolepicker.GoToMyPage")}):e.jsxs(e.Fragment,{children:[e.jsx(C,{ref:P=>{P?.setAttribute("data-webanalytics-id",Pe.logout)},variant:"secondary",svgPath:Ra,onClick:y,children:O("rolepicker.Logout")}),h?null:e.jsx(C,{variant:"secondary",onClick:ne,children:O("rolepicker.Cancel")})]})})]})})})};_e.displayName="RolePicker";try{_e.displayName="RolePicker",_e.__docgenInfo={description:"RolePicker",displayName:"RolePicker",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDialogElement>"}},title:{defaultValue:null,description:"Egendefinert tittel på modal.",name:"title",required:!1,type:{name:"string"}},me:{defaultValue:null,description:"Den nåværende brukeren representert som et Person-objekt.",name:"me",required:!1,type:{name:"Person"}},people:{defaultValue:null,description:"En paginert liste over personer.",name:"people",required:!1,type:{name:"Paginated<Person>"}},businesses:{defaultValue:null,description:"En paginert liste over virksomheter.",name:"businesses",required:!1,type:{name:"Paginated<Business>"}},minimumEntitiesForSearch:{defaultValue:{value:11},description:`Minimum antall personer/virksomheter som kreves for at søkefelt skal være
synlig.`,name:"minimumEntitiesForSearch",required:!1,type:{name:"number"}},showInactiveBusinesses:{defaultValue:{value:!1},description:"Om avviklede virksomheter skal vises som standard når rollevelger åpnes.",name:"showInactiveBusinesses",required:!1,type:{name:"boolean"}},showSubunits:{defaultValue:{value:!0},description:`Om underenheter av virksomheter skal vises som standard når rollevelger
åpnes.`,name:"showSubunits",required:!1,type:{name:"boolean"}},showDeceasedPeople:{defaultValue:{value:!1},description:"Om avdøde personer skal vises som standard når rollevelger åpnes.",name:"showDeceasedPeople",required:!1,type:{name:"boolean"}},onEntitySelect:{defaultValue:null,description:"Tilbakekallingsfunksjon for å håndtere valg av virksomhet/person.",name:"onEntitySelect",required:!1,type:{name:"((entity: Entity) => Promise<void | { error: string; }>)"}},onLogout:{defaultValue:null,description:"Tilbakekallingsfunksjon for å håndtere utlogging.",name:"onLogout",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Eventuelt annet innhold som rendres etter listen med roller.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:`Callback når modalen lukkes (lukkeknapp, Esc-tast, eller klikk utenfor).
Kjøres ikke når modalen lukkes programmatisk med ref.current.close().`,name:"onClose",required:!1,type:{name:"(() => void)"}},dismissOnEsc:{defaultValue:{value:!0},description:`Om modalen kan lukkes ved Esc-trykk. Modalen lukkes ved Esc-trykk som
default.`,name:"dismissOnEsc",required:!1,type:{name:"boolean"}},dismissOnOutsideClick:{defaultValue:{value:!0},description:"Om autolukking skal skrus på/av. Autolukking er skrudd på som default.",name:"dismissOnOutsideClick",required:!1,type:{name:"boolean"}},hideCloseButton:{defaultValue:{value:!1},description:"Om lukkekryss skal skjules",name:"hideCloseButton",required:!1,type:{name:"boolean"}}}}}catch{}const Gr="_wordInfoContent_nsjku_1",Kr="_contentWrapper_nsjku_6",$r="_closeButton_nsjku_10",$n={wordInfoContent:Gr,contentWrapper:Kr,closeButton:$r},Tn=({ref:n,id:t,className:a="",lang:l,"data-testid":r,children:i})=>e.jsx(sn,{ref:n,id:t,className:`${$n.wordInfoContent} ${a}`.trim(),classNames:{contentWrapper:$n.contentWrapper,closeButton:$n.closeButton},lang:l,"data-testid":r,as:"span",children:i});Tn.displayName="WordInfoContent";try{Tn.displayName="WordInfoContent",Tn.__docgenInfo={description:"",displayName:"WordInfoContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}},children:{defaultValue:null,description:`Innhold i popup-boksen. Må være string eller et HTML-element som er tillatt
i en span. Finn ut hvilke [elementer som er tillatt i en
span](https://developer.mozilla.org/en-US/docs/Web/HTML/Guides/Content_categories#phrasing_content).`,name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const qr="_wordInfoTrigger_1p1sf_5",Jr="_icon_1p1sf_20",Wr="_srOnly_1p1sf_45",qn={wordInfoTrigger:qr,icon:Jr,srOnly:Wr},En=({ref:n,id:t,className:a="",lang:l,"data-testid":r,hasIcon:i=!0,children:d,onClick:c})=>{const{floatingData:m,setIsOpen:p,isOpen:g}=s.useContext(Ye),{setReference:h}=m.refs,k=it([h,n]),{t:_}=me("ds_overlays",{i18n:U});return e.jsxs("button",{ref:k,id:t,className:`${qn.wordInfoTrigger} ${a}`.trim(),type:"button",lang:l,"data-testid":r,"aria-expanded":g,onClick:S=>{c?.(S),p(!g)},children:[d,e.jsxs("span",{className:qn.srOnly,children:[" ",_("wordinfo.WordExplanation")]}),i&&e.jsx(Wa,{className:qn.icon})]})};En.displayName="WordInfoTrigger";try{En.displayName="WordInfoTrigger",En.__docgenInfo={description:"",displayName:"WordInfoTrigger",props:{className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},hasIcon:{defaultValue:{value:!0},description:"Om bok-ikonet er synlig",name:"hasIcon",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Tekst som trenger ordforklaring",name:"children",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>"}}}}}catch{}const Te=(n=>e.jsx(F,{...n}));Te.displayName="WordInfo";Te.Content=Tn;Te.Content.displayName="WordInfo.Content";Te.Trigger=En;Te.Trigger.displayName="WordInfo.Trigger";try{Te.displayName="WordInfo",Te.__docgenInfo={description:"WordInfo",displayName:"WordInfo",props:{isOpen:{defaultValue:null,description:"Om popup-boksen er synlig",name:"isOpen",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Callback når popup-boksen lukkes",name:"onClose",required:!1,type:{name:"(() => void)"}},position:{defaultValue:null,description:"Plassering av popup-boksen i forhold til teksten",name:"position",required:!1,type:{name:"enum",value:[{value:'"topStart"'},{value:'"topEnd"'},{value:'"bottomStart"'},{value:'"bottomEnd"'}]}},children:{defaultValue:null,description:"WordInfo.Trigger og WordInfo.Content",name:"children",required:!1,type:{name:"ReactNode"}},disableAutoDismiss:{defaultValue:null,description:"Om autolukking skal skrus av",name:"disableAutoDismiss",required:!1,type:{name:"boolean"}},shouldRestoreFocus:{defaultValue:null,description:`Om fokus skal settes tilbake til trigger ved bruk av lukkekrysset. Hvis
denne settes til false, så må fokus håndteres manuelt.`,name:"shouldRestoreFocus",required:!1,type:{name:"boolean"}}}}}catch{}function Xr(){return e.jsxs(X,{color:"ochre",iconPosition:"right",children:[e.jsx(X.Item,{title:"Informasjon fra skattemeldingen",children:e.jsx(f,{children:"Samlet informasjon som er relevant for vurdering av saken."})}),e.jsx(X.Item,{title:"Heftelser",children:e.jsx(f,{children:"Oversikt over registrerte heftelser som påvirker videre behandling."})}),e.jsx(X.Item,{title:"Pågående saker",children:e.jsx(f,{children:"Viser saker som allerede er under behandling."})})]})}const Ur=Object.freeze(Object.defineProperty({__proto__:null,default:Xr},Symbol.toStringTag,{value:"Module"}));function Zr(){return e.jsxs(X,{size:"small",iconPosition:"left",children:[e.jsx(X.Item,{title:"Restskatt på 1 000 kroner eller mer",children:e.jsx(f,{children:"Liten variant med venstre ikon for kompakt visning av samme innhold."})}),e.jsx(X.Item,{title:"Restskatt under 1 000 kroner",children:e.jsx(f,{children:"Brukes når du trenger mindre visuell vekt, men samme struktur."})})]})}const Yr=Object.freeze(Object.defineProperty({__proto__:null,default:Zr},Symbol.toStringTag,{value:"Module"}));function Qr(){return e.jsxs(X,{id:"virksomhet",size:"small",children:[e.jsx(X.Item,{title:`987 654 321
Stødig Sjappe 1`,svgPath:Zt,children:e.jsxs(B,{children:[e.jsx(B.Element,{term:"Virksomhetsnavn",children:"Stødig Sjappe 1"}),e.jsxs(B.Element,{term:`Organisasjons-
nummer`,children:["999 999 999",e.jsx(oe,{svgPath:Bn,title:"Kopier organisasjonsnummeret",size:"small",onClick:()=>{navigator.clipboard.writeText("999999999")}})]}),e.jsx(B.Element,{term:"Telefonnummer",children:"+47 99 99 99 99"}),e.jsxs(B.Element,{term:"Forretningsadresse",children:[e.jsx("div",{children:"Norges vei 1"}),e.jsx("div",{children:"4878 Grimstad"})]}),e.jsx(B.Element,{term:"Status",children:e.jsx(ie,{color:"burgundy",children:"Konkurs 27.11.24"})}),e.jsx(B.Element,{term:"Org.form",children:"Aksjeselskap"}),e.jsx(B.Element,{term:"Næringskode",children:"65.102"}),e.jsx(B.Element,{term:"Virksomhetsnavn",children:"Stødig Sjappe 1"}),e.jsx(ge,{href:"#",children:"Gå til partssoversikt"})]})}),e.jsx(X.Item,{title:"Roller",svgPath:wa,children:e.jsxs(B,{children:[e.jsx(B.Element,{term:"Eier",children:e.jsx(ge,{href:"#eier",children:"Chad-Henning Krøger"})}),e.jsx(B.Element,{term:"Styreleder",children:e.jsx(ge,{href:"#",children:"Fredrik Durst"})})]})}),e.jsx(X.Item,{title:"Alle dokumenter på part",svgPath:Da,children:e.jsx("em",{children:"Dokumentasjon og historikk her"})}),e.jsx(X.Item,{title:"Alle notater på part",svgPath:Ut,children:e.jsx("em",{children:"Notater fra saksbehandler her"})})]})}const eo=Object.freeze(Object.defineProperty({__proto__:null,default:Qr},Symbol.toStringTag,{value:"Module"}));function no(){return e.jsxs(X,{iconPosition:"right",children:[e.jsx(X.Item,{title:"Restskatt på 1 000 kroner eller mer",children:e.jsx(f,{children:"Du får betalingsinformasjon og frister for restskatten i dette steget."})}),e.jsx(X.Item,{title:"Restskatt under 1 000 kroner",children:e.jsxs(f,{children:["Hvis restskatten er under 1 000 kroner, gjelder egne regler for","innbetaling."]})})]})}const to=Object.freeze(Object.defineProperty({__proto__:null,default:no},Symbol.toStringTag,{value:"Module"})),ao="_accordionColumn_n05yu_1",ro={accordionColumn:ao};function oo(){return e.jsxs("div",{className:ro.accordionColumn,children:[e.jsx(X,{size:"small",children:e.jsx(X.Item,{title:"Liten",children:e.jsx(f,{children:"Liten størrelse passer når innholdet skal ta lite plass."})})}),e.jsx(X,{size:"medium",children:e.jsx(X.Item,{title:"Medium",children:e.jsx(f,{children:"Medium størrelse er standard og passer i de fleste tilfeller."})})}),e.jsx(X,{size:"large",children:e.jsx(X.Item,{title:"Stor",children:e.jsx(f,{children:"Stor størrelse gir innholdet mer luft og visuell vekt."})})})]})}const so=Object.freeze(Object.defineProperty({__proto__:null,default:oo},Symbol.toStringTag,{value:"Module"}));function lo(){return e.jsxs(X,{iconPosition:"right",children:[e.jsx(X.Item,{title:"Skatteoppgjør",isDefaultExpanded:!0,children:e.jsx(f,{children:"Dette panelet er åpnet som standard."})}),e.jsx(X.Item,{title:"Betaling og frister",children:e.jsx(f,{children:"Dette panelet er lukket til brukeren åpner det."})})]})}const io=Object.freeze(Object.defineProperty({__proto__:null,default:lo},Symbol.toStringTag,{value:"Module"}));function co(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:'Denne advarselen er synlig når siden lastes, og har derfor fått overstyrt aria-live="off" .'}),e.jsx(en,{variant:"warning",ariaLive:"off",showAlert:!0,children:"Hvis du henter frem skatteopplysninger for en person, blir det synlig for denne personen."})]})}const mo=Object.freeze(Object.defineProperty({__proto__:null,default:co},Symbol.toStringTag,{value:"Module"}));function uo(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:'Dette varselet får aria-live="assertive" som standard, og er ment til kritiske situasjoner og tidssensitive meldinger. '}),e.jsx(en,{variant:"danger",ariaLive:"assertive",showAlert:!0,children:"Strengt fortrolig (Kode 6)"})]})}const po=Object.freeze(Object.defineProperty({__proto__:null,default:uo},Symbol.toStringTag,{value:"Module"}));function go(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:'Vi antar at feil vises dynamisk og får aria-live="polite" som standard:'}),e.jsx(en,{variant:"error",showAlert:!0,children:"Avvist av kortutsteder."})]})}const fo=Object.freeze(Object.defineProperty({__proto__:null,default:go},Symbol.toStringTag,{value:"Module"}));function ho(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:'Denne beskjeden er synlig på siden når siden lastes og overstyres derfor med aria-live="off". '}),e.jsx(en,{variant:"info",ariaLive:"off",showAlert:!0,children:"Vi jobber med å utvikle denne siden, og du vil kunne se flere av sakene dine etter hvert."})]})}const vo=Object.freeze(Object.defineProperty({__proto__:null,default:ho},Symbol.toStringTag,{value:"Module"}));function bo(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:'Dynamiske varsler får aria-live="polite" som standard når de ikke er kritiske.'}),e.jsx(en,{variant:"success",ariaLive:"polite",showAlert:!0,children:"Filen ble lastet opp"})]})}const _o=Object.freeze(Object.defineProperty({__proto__:null,default:bo},Symbol.toStringTag,{value:"Module"}));function xo(){return e.jsxs(At,{borderColor:"forest",children:["«God design handler om ",e.jsx("strong",{children:"klarhet"}),", men også om ",e.jsx("em",{children:"forståelse"})," og intensjon.»"]})}const ko=Object.freeze(Object.defineProperty({__proto__:null,default:xo},Symbol.toStringTag,{value:"Module"})),So="_blockquoteTagWrapper_11zg5_1",yo={blockquoteTagWrapper:So};function jo(){const[n,t]=s.useState(!0);return e.jsx(De,{title:n?"Skjul regelverk":"Vis regelverk",iconPosition:"right",size:"medium",isExpanded:n,onClick:()=>t(a=>!a),children:e.jsxs(At,{borderColor:"graphite",children:[e.jsx("div",{className:yo.blockquoteTagWrapper,children:e.jsx(ie,{color:"graphite",size:"small",children:"§ Regelverk"})}),e.jsx(f,{hasSpacing:!0,children:"(1) Denne loven får anvendelse i merverdiavgiftsområdet."}),e.jsx(f,{hasSpacing:!0,children:"(2) Med merverdiavgiftsområdet menes det norske fastlandet og alt område innenfor territorialgrensen, men ikke Svalbard, Jan Mayen eller de norske bilandene."})]})})}const To=Object.freeze(Object.defineProperty({__proto__:null,default:jo},Symbol.toStringTag,{value:"Module"}));function Eo(){return e.jsx(z,{children:e.jsxs(z.List,{shouldCollapse:!1,children:[e.jsx(z.Item,{children:e.jsx(z.Link,{href:"#arbeidsliste",children:"Arbeidsliste"})}),e.jsx(z.Item,{children:e.jsx(z.Link,{href:"#eplepress-as",children:"Eplepress AS"})}),e.jsx(z.Item,{children:e.jsx(z.Link,{href:"#arbeidsoppgave",children:"Arbeidsoppgave"})}),e.jsx(z.Item,{children:e.jsx(z.Link,{href:"#informasjon",children:"Tittel knyttet til oppgave"})})]})})}const Co=Object.freeze(Object.defineProperty({__proto__:null,default:Eo},Symbol.toStringTag,{value:"Module"}));function Po(){return e.jsx(z,{children:e.jsxs(z.List,{children:[e.jsx(z.Item,{children:e.jsx(z.Link,{href:"#min-side",children:"Min side"})}),e.jsx(z.Item,{children:e.jsx(z.Link,{href:"#frister-og-oppgaver",children:"Frister og oppgaver"})}),e.jsx(z.Item,{children:e.jsx(z.Link,{href:"#frist",children:"Frist"})})]})})}const Ro=Object.freeze(Object.defineProperty({__proto__:null,default:Po},Symbol.toStringTag,{value:"Module"})),wo="_buttonModalActions_1sy79_1",Do="_buttonModalActionsGroup_1sy79_10",_t={buttonModalActions:wo,buttonModalActionsGroup:Do};function No(){const n=s.useRef(null),t=()=>{n.current?.showModal()},a=()=>{n.current?.close()};return e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"primary",onClick:t,children:"Åpne modal"}),e.jsxs(fe,{ref:n,title:"Bekreft handling",children:[e.jsx(f,{hasSpacing:!0,children:"Du er i ferd med å slette en melding. Velg handling under."}),e.jsxs("div",{className:_t.buttonModalActions,children:[e.jsxs("div",{className:_t.buttonModalActionsGroup,children:[e.jsx(C,{variant:"primary",onClick:a,children:"Bekreft"}),e.jsx(C,{variant:"secondary",onClick:a,children:"Avbryt"})]}),e.jsx(C,{variant:"danger",svgPath:gt,onClick:a,children:"Slett melding"})]})]})]})}const Lo=Object.freeze(Object.defineProperty({__proto__:null,default:No},Symbol.toStringTag,{value:"Module"}));function Oo(){const[n,t]=s.useState(!1),a=()=>{n||(t(!0),window.setTimeout(()=>{t(!1)},2e3))};return e.jsx(C,{variant:"primary",hasSpinner:n,onClick:a,children:"Send inn"})}const Io=Object.freeze(Object.defineProperty({__proto__:null,default:Oo},Symbol.toStringTag,{value:"Module"})),Bo="_buttonRow_vfra0_1",Ao={buttonRow:Bo};function Mo(){return e.jsxs("div",{className:Ao.buttonRow,children:[e.jsx(C,{variant:"primary",children:"Send inn"}),e.jsx(C,{variant:"secondary",children:"Avbryt"})]})}const Ho=Object.freeze(Object.defineProperty({__proto__:null,default:Mo},Symbol.toStringTag,{value:"Module"}));function Vo(){return e.jsx(C,{href:"/min-side",variant:"primary",children:"Til Min side"})}const Fo=Object.freeze(Object.defineProperty({__proto__:null,default:Vo},Symbol.toStringTag,{value:"Module"})),zo="_buttonRow_vfra0_1",Go={buttonRow:zo};function Ko(){return e.jsxs("div",{className:Go.buttonRow,children:[e.jsx(C,{variant:"primary",children:"Send inn"}),e.jsx(C,{variant:"secondary",children:"Avbryt"}),e.jsx(C,{variant:"tertiary",children:"Se detaljer"}),e.jsx(C,{variant:"danger",children:"Slett"})]})}const $o=Object.freeze(Object.defineProperty({__proto__:null,default:Ko},Symbol.toStringTag,{value:"Module"})),qo="_cardColors_1awuc_1",Jo={cardColors:qo};function Wo(){return e.jsx("div",{className:Jo.cardColors,children:["white","ochre","forest","burgundy","denim","graphite"].map(n=>e.jsxs(G,{color:n,spacing:"s",children:[e.jsx(G.Header,{children:e.jsx(E,{as:"h3",children:n})}),e.jsxs(G.Content,{children:["Eksempel på Card med farge ",e.jsx("strong",{children:n}),"."]})]},n))})}const Xo=Object.freeze(Object.defineProperty({__proto__:null,default:Wo},Symbol.toStringTag,{value:"Module"}));function Uo(){return e.jsxs(G,{color:"white",spacing:"m",children:[e.jsxs(G.Alert,{variant:"warning",title:"Frist nærmer seg",showAlert:!0,onClose:()=>{},children:["Fristen for å levere er 30. april. Sørg for at alle opplysninger er","riktige."]}),e.jsx(G.Header,{children:e.jsx(E,{as:"h3",children:"Skattemelding 2026"})}),e.jsx(G.Content,{children:"Kontroller opplysningene dine og send inn skattemeldingen."}),e.jsx(G.Actions,{children:e.jsx(C,{href:"#",children:"Gå til skattemeldingen"})})]})}const Zo=Object.freeze(Object.defineProperty({__proto__:null,default:Uo},Symbol.toStringTag,{value:"Module"}));function Yo(){return e.jsxs(G,{color:"graphite",children:[e.jsx(G.Header,{rightContent:e.jsx(ie,{children:"Status"}),children:e.jsx(E,{as:"h3",children:"Tittel på kortet"})}),e.jsxs(G.Content,{children:["Alle som har laget en nettside, trengt litt fylltekst eller bare","surfet rundt på nettet har antageligvis sett disse ordene, etterfulgt","av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger."]}),e.jsx(G.Actions,{children:e.jsx(C,{href:"#",children:"Gå til tjenesten"})})]})}const Qo=Object.freeze(Object.defineProperty({__proto__:null,default:Yo},Symbol.toStringTag,{value:"Module"}));function es(){return e.jsx(Oe,{children:"Jeg bekrefter at opplysningene er korrekte"})}const ns=Object.freeze(Object.defineProperty({__proto__:null,default:es},Symbol.toStringTag,{value:"Module"}));function ts(){return e.jsxs(ye,{legend:"Hva vil du varsles om?",children:[e.jsx(ye.Checkbox,{children:"Ny melding i innboks"}),e.jsx(ye.Checkbox,{children:"Endring i skattekortet"}),e.jsx(ye.Checkbox,{children:"Frist nærmer seg"})]})}const as=Object.freeze(Object.defineProperty({__proto__:null,default:ts},Symbol.toStringTag,{value:"Module"})),rs=["Drammen","Oslo","Bergen","Trondheim"];function os(){const[n,t]=s.useState(rs);return e.jsxs("div",{children:[e.jsx(E,{level:5,as:"h2",id:"saker-fra-heading",hasSpacing:!0,children:"Viser saker fra"}),e.jsx(Ie,{ariaLabelledBy:"saker-fra-heading",children:n.map(a=>e.jsx(Ie.Removable,{onClose:()=>{t(l=>l.filter(r=>r!==a))},children:a},a))})]})}const ss=Object.freeze(Object.defineProperty({__proto__:null,default:os},Symbol.toStringTag,{value:"Module"})),Jn=["Mandag","Tirsdag","Onsdag","Torsdag","Fredag"];function ls(){const[n,t]=s.useState([Jn[0],Jn[2]]);return e.jsxs("div",{children:[e.jsx(E,{level:5,as:"h2",id:"kontakt-dager-heading",hasSpacing:!0,children:"Jeg kan kontaktes på"}),e.jsx(Ie,{ariaLabelledBy:"kontakt-dager-heading",children:Jn.map(a=>e.jsx(Ie.Toggle,{isSelected:n.includes(a),onClick:()=>{t(l=>l.includes(a)?l.filter(r=>r!==a):[...l,a])},children:a},a))})]})}const is=Object.freeze(Object.defineProperty({__proto__:null,default:ls},Symbol.toStringTag,{value:"Module"})),Wn=["Drammen","Oslo","Bergen","Trondheim"];function ds(){const[n,t]=s.useState([Wn[1],Wn[3]]);return e.jsxs("div",{children:[e.jsx(E,{level:5,as:"h2",id:"kontorsted-heading",hasSpacing:!0,children:"Kontorsted"}),e.jsx(Ie,{ariaLabelledBy:"kontorsted-heading",children:Wn.map(a=>e.jsx(Ie.Toggle,{showCheckmark:!1,isSelected:n.includes(a),onClick:()=>{t(l=>l.includes(a)?l.filter(r=>r!==a):[...l,a])},children:a},a))})]})}const cs=Object.freeze(Object.defineProperty({__proto__:null,default:ds},Symbol.toStringTag,{value:"Module"}));function ms(n){const t=["Inntekt","Merverdiavgift","Arbeidsgiveravgift","Folkeregister","Skattemelding","Skattekort","Verdsettelse","Klage","Kontroll","Saksbehandling","Utbetaling","Veiledning","Sikkerhet","Internasjonal","Næring","Pensjon","IT"],a=["Nord","Sør","Øst","Vest"];return Array.from({length:n},(l,r)=>{const i=r+1,d=t[r%t.length],c=a[r%a.length];return{value:`avdeling-${i}`,label:`${d} ${c} ${i}`}})}const us=()=>{const[n,t]=s.useState(!1),[a,l]=s.useState([]),r=d=>{t(!0),l([]);const c=performance.now(),p=ms(5e3).filter(k=>k.label.toLowerCase().includes(d.toLowerCase())),g=performance.now()-c,h=Math.max(g+100,500);window.setTimeout(()=>{l(p),t(!1)},h)},i=d=>{d.length>=2?r(d):(t(!1),l([]))};return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:"Eksempel på bruk av combobox med lastetilstander og asynkront søk med 5000 elementer. Skriv minst 2 tegn i søkefeltet for å simulere et API-kall som henter og filtrerer alternativer."}),e.jsx(Ae,{label:"Gruppe",description:"Skriv minst 2 tegn for å søke",isLoading:n,options:a,minSearchLength:2,onInputChange:i})]})},ps=Object.freeze(Object.defineProperty({__proto__:null,default:us},Symbol.toStringTag,{value:"Module"})),gs=[{value:"akershus",label:"Akershus"},{value:"buskerud",label:"Buskerud"},{value:"finnmark",label:"Finnmark"},{value:"innlandet",label:"Innlandet"},{value:"møre-og-romsdal",label:"Møre og Romsdal"},{value:"nordland",label:"Nordland"},{value:"oslo",label:"Oslo"},{value:"rogaland",label:"Rogaland"},{value:"telemark",label:"Telemark"},{value:"troms",label:"Troms"},{value:"trøndelag",label:"Trøndelag"},{value:"vestfold",label:"Vestfold"},{value:"østfold",label:"Østfold"},{value:"vestland",label:"Vestland"},{value:"agder",label:"Agder"}];function fs(){return e.jsx(Ae,{label:"Fylke",options:gs})}const hs=Object.freeze(Object.defineProperty({__proto__:null,default:fs},Symbol.toStringTag,{value:"Module"})),vs=[{value:"baerum",label:"Bærum",group:"Akershus"},{value:"lillestrom",label:"Lillestrøm",group:"Akershus"},{value:"as",label:"Ås",group:"Akershus"},{value:"bergen",label:"Bergen",group:"Vestland"},{value:"sogndal",label:"Sogndal",group:"Vestland"},{value:"askoy",label:"Askøy",group:"Vestland"},{value:"trondheim",label:"Trondheim",group:"Trøndelag"},{value:"stjordal",label:"Stjørdal",group:"Trøndelag"},{value:"levanger",label:"Levanger",group:"Trøndelag"}];function bs(){return e.jsx(Ae,{label:"Kommune",options:vs})}const _s=Object.freeze(Object.defineProperty({__proto__:null,default:bs},Symbol.toStringTag,{value:"Module"})),xs=[{value:"akershus",label:"Akershus"},{value:"buskerud",label:"Buskerud"},{value:"finnmark",label:"Finnmark"},{value:"innlandet",label:"Innlandet"},{value:"møre-og-romsdal",label:"Møre og Romsdal"},{value:"nordland",label:"Nordland"},{value:"oslo",label:"Oslo"},{value:"rogaland",label:"Rogaland"},{value:"telemark",label:"Telemark"},{value:"troms",label:"Troms"},{value:"trøndelag",label:"Trøndelag"},{value:"vestfold",label:"Vestfold"},{value:"østfold",label:"Østfold"},{value:"vestland",label:"Vestland"},{value:"agder",label:"Agder"}];function ks(){return e.jsx(Ae,{label:"Fylker",options:xs,description:"Velg inntil tre",maxSelected:3,multiple:!0})}const Ss=Object.freeze(Object.defineProperty({__proto__:null,default:ks},Symbol.toStringTag,{value:"Module"})),ys=new Date(2026,0,1),js=new Date(2026,11,31);function Ts(){return e.jsx(Be,{label:"Velg dato i 2026",minDate:ys,maxDate:js,helpText:"Du kan bare velge datoer i inneværende år."})}const Es=Object.freeze(Object.defineProperty({__proto__:null,default:Ts},Symbol.toStringTag,{value:"Module"}));function Cs(){return e.jsx(Be,{label:"Delg dato for innsending"})}const Ps=Object.freeze(Object.defineProperty({__proto__:null,default:Cs},Symbol.toStringTag,{value:"Module"}));function Rs(){return e.jsxs(B,{variant:"horizontal",isVerticalOnMobile:!1,children:[e.jsx(B.Element,{term:"Referansenummer",children:"123456"}),e.jsx(B.Element,{term:"Status",children:"Sendt inn"})]})}const ws=Object.freeze(Object.defineProperty({__proto__:null,default:Rs},Symbol.toStringTag,{value:"Module"}));function Ds(){return e.jsxs(B,{children:[e.jsx(B.Element,{term:"Saksbehandler",children:"Kenneth Performance"}),e.jsx(B.Element,{term:"Status",children:"Under behandling"}),e.jsx(B.Element,{term:"Sist endret",children:"30.12.2013"})]})}const Ns=Object.freeze(Object.defineProperty({__proto__:null,default:Ds},Symbol.toStringTag,{value:"Module"}));function Ls(){return e.jsx(B,{termWeight:"regular",descriptionWeight:"bold",descriptionDirection:"vertical",children:e.jsx(B.Element,{term:"Beløp til gode",children:"4 250 kr"})})}const Os=Object.freeze(Object.defineProperty({__proto__:null,default:Ls},Symbol.toStringTag,{value:"Module"})),Is="_flex_13dn4_1",Bs="_gapM_13dn4_6",As="_cardWidth_13dn4_10",Xn={flex:Is,gapM:Bs,cardWidth:As};function Ms(){const n=s.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:"Delestrek brukt som dekorelement og skjult for skjermleser"}),e.jsxs("div",{className:`${Xn.flex} ${Xn.gapM}`,children:[e.jsx(Qa,{size:"extraLarge"}),e.jsx(E,{as:"h1",level:2,children:"Arbeid, trygd og pensjon"})]}),e.jsx(dt,{spacingTop:"xs",spacingBottom:"l",ariaHidden:!0}),e.jsxs(G,{className:Xn.cardWidth,children:[e.jsx(G.Header,{children:e.jsx(E,{ref:n,as:"h3",canBeManuallyFocused:!0,children:"Andre inntekter"})}),e.jsx(G.Content,{children:e.jsx(B,{children:e.jsx(B.Element,{term:"Beløp",children:"654 321"})})}),e.jsx(G.Actions,{children:e.jsx(re,{svgPath:dn,children:"Endre"})})]})]})}const Hs=Object.freeze(Object.defineProperty({__proto__:null,default:Ms},Symbol.toStringTag,{value:"Module"})),Vs="_dividerCard_1wt1z_1",Fs="_flexGrow_1wt1z_5",zs="_descriptionList_1wt1z_9",pn={dividerCard:Vs,flexGrow:Fs,descriptionList:zs};function Gs(){return e.jsxs(e.Fragment,{children:[e.jsxs(f,{hasSpacing:!0,children:["Delestrek (nedtonet) som er meningsbærende og dermed ikke skjult for","skjermleser."]}),e.jsxs(G,{className:pn.dividerCard,children:[e.jsx(G.Header,{children:e.jsx(E,{as:"h3",children:"Utregning"})}),e.jsxs(G.Content,{classNames:{children:pn.flexGrow},children:[e.jsxs(B,{className:pn.descriptionList,descriptionWeight:"regular",termWeight:"regular",children:[e.jsx(B.Element,{term:"Tall nummer 1",children:"99 000"}),e.jsx(B.Element,{term:"Tall nummer 2",children:"100 000"}),e.jsx(B.Element,{term:"Tall nummer 3",children:"110 000"})]}),e.jsx(dt,{}),e.jsx(B,{className:pn.descriptionList,descriptionWeight:"bold",termWeight:"bold",children:e.jsx(B.Element,{term:"Sum",children:"200 000"})})]})]})]})}const Ks=Object.freeze(Object.defineProperty({__proto__:null,default:Gs},Symbol.toStringTag,{value:"Module"}));function $s(){return e.jsx(dt,{variant:"strong",spacingTop:"m",spacingBottom:"m"})}const qs=Object.freeze(Object.defineProperty({__proto__:null,default:$s},Symbol.toStringTag,{value:"Module"}));function Js(){return e.jsx(Na,{showError:!0,children:"Postnummer må fylles ut."})}const Ws=Object.freeze(Object.defineProperty({__proto__:null,default:Js},Symbol.toStringTag,{value:"Module"}));function Xs(){return e.jsxs(Ke,{title:"Du må rette disse feilene før du kan sende inn:",showErrorSummary:!0,children:[e.jsx(Ke.Error,{referenceId:"fornavn",children:"Fornavn må fylles ut."}),e.jsx(Ke.Error,{referenceId:"fodselsnummer",children:"Fødselsnummer er ikke skrevet på riktig format."})]})}const Us=Object.freeze(Object.defineProperty({__proto__:null,default:Xs},Symbol.toStringTag,{value:"Module"})),Zs="_inlineBlock_1rfba_1",Ys="_exampleSpacing_1rfba_5",Un={inlineBlock:Zs,exampleSpacing:Ys};function Qs(){return e.jsxs(nn,{legend:"Hvilken periode trenger du bekreftelse for?",helpText:"Legg inn hvilken periode du trenger bekreftelse for.",children:[e.jsx(Be,{className:`${Un.inlineBlock} ${Un.exampleSpacing}`,label:"Fra dato (dd.mm.åååå)"}),e.jsx(Be,{className:Un.inlineBlock,label:"Til dato (dd.mm.åååå)"})]})}const el=Object.freeze(Object.defineProperty({__proto__:null,default:Qs},Symbol.toStringTag,{value:"Module"}));function nl(){return e.jsx(nn,{legend:"Hvilken periode trenger du bekreftelse for?",children:e.jsx(f,{children:"Innhold"})})}const tl=Object.freeze(Object.defineProperty({__proto__:null,default:nl},Symbol.toStringTag,{value:"Module"}));function al(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:"Når opplasting ikke kan starte står feilmeldingen under feltet."}),e.jsx(ct,{label:"Last opp dokumentasjon",acceptedFileFormats:[".pdf"],errorMessage:"Filtypen og filendelsen stemmer ikke overens, for eksempel kan en Word-fil ha filendelsen .pdf. Lagre filen på nytt i et støttet format og prøv igjen."})]})}const rl=Object.freeze(Object.defineProperty({__proto__:null,default:al},Symbol.toStringTag,{value:"Module"})),ol=[{id:"vedlegg-1",name:"kvittering.pdf",href:"#"},{id:"vedlegg-2",name:"avtale.jpg",href:"#"}];function sl(){return e.jsx(ct,{label:"Last opp dokumentasjon",acceptedFileFormats:[".pdf",".jpg",".png"],uploadedFiles:ol})}const ll=Object.freeze(Object.defineProperty({__proto__:null,default:sl},Symbol.toStringTag,{value:"Module"}));function il(){return e.jsx(ct,{label:"Last opp vedlegg",acceptedFileFormats:[".pdf",".jpg",".png"],acceptedFileFormatsDisplay:"PDF, JPG eller PNG"})}const dl=Object.freeze(Object.defineProperty({__proto__:null,default:il},Symbol.toStringTag,{value:"Module"}));function cl(){return e.jsxs(pe,{titleFirstColumn:"Om Skatteetaten",titleSecondColumn:"Følg oss",titleThirdColumn:"Presse",secondColumn:e.jsx(L,{color:"white",children:e.jsx(L.Link,{href:"#",children:"Se våre kontoer i sosiale medier"})}),thirdColumn:e.jsxs(e.Fragment,{children:[e.jsxs(f,{hasSpacing:!0,children:["Pressemeldinger, pressekontakter og annen informasjon for","journalister."]}),e.jsx(L,{color:"white",hasSpacing:!0,children:e.jsx(L.Link,{href:"#",children:"Se vart presserom"})}),e.jsx(E,{as:"h2",level:3,hasSpacing:!0,children:"Bruke data fra Skatteetaten"}),e.jsxs(f,{hasSpacing:!0,children:["Skatteetaten deler data som andre virksomheter og etater kan","gjenbruke for å forenkle og effektivisere eksisterende og nye","digitale tjenester."]}),e.jsx(L,{color:"white",children:e.jsx(L.Link,{href:"#",children:"Hvordan få tilgang til data"})})]}),openDefaultLinksInNewTab:!1,children:[e.jsx(pe.LinkFirstColumn,{href:"#",children:"Jobb i Skatteetaten"}),e.jsx(pe.LinkFirstColumn,{href:"#",children:"Om oss"}),e.jsx(pe.LinkFirstColumn,{href:"#",children:"Analyse og rapporter"}),e.jsx(pe.LinkFirstColumn,{href:"#",children:"Forskning"}),e.jsx(pe.Link,{href:"#",children:"Satser"}),e.jsx(pe.Link,{href:"#",children:"Skjema og tjenester"}),e.jsx(pe.Link,{href:"#",children:"RSS"}),e.jsx(pe.Link,{href:"#",children:"Tips oss"}),e.jsx(pe.Link,{href:"#",isExternal:!0,children:"Koronatiltak"})]})}const ml=Object.freeze(Object.defineProperty({__proto__:null,default:cl},Symbol.toStringTag,{value:"Module"}));function ul(){return e.jsx(pe,{contactUsURL:"#",securityURL:"#",accessibilityURL:"#"})}const pl=Object.freeze(Object.defineProperty({__proto__:null,default:ul},Symbol.toStringTag,{value:"Module"})),gl="_topHeading_cbcvp_1",fl={topHeading:gl};function hl(){return e.jsxs(E,{as:"h1",level:2,hasSpacing:!0,children:[e.jsx("span",{className:fl.topHeading,children:"Arbeidsoppgave"}),"Tittel på arbeidsoppgave"]})}const vl=Object.freeze(Object.defineProperty({__proto__:null,default:hl},Symbol.toStringTag,{value:"Module"}));function bl(){return e.jsxs("div",{children:[e.jsx(E,{as:"h1",level:5,children:"Kontaktinformasjon"}),e.jsx(E,{as:"h2",level:2,hasSpacing:!0,children:"Mine opplysninger"})]})}const _l=Object.freeze(Object.defineProperty({__proto__:null,default:bl},Symbol.toStringTag,{value:"Module"}));function xl(){return e.jsxs(E,{as:"h1",children:[e.jsx(w,{svgPath:Mt,size:"extraLarge"})," Skjemaet er sendt inn."]})}const kl=Object.freeze(Object.defineProperty({__proto__:null,default:xl},Symbol.toStringTag,{value:"Module"}));function Sl(){return e.jsxs("div",{children:[e.jsx(E,{as:"h1",hasSpacing:!0,children:"Overskriftsnivå 1"}),e.jsx(E,{as:"h2",hasSpacing:!0,children:"Overskriftsnivå 2"}),e.jsx(E,{as:"h3",hasSpacing:!0,children:"Overskriftsnivå 3"}),e.jsx(E,{as:"h4",hasSpacing:!0,children:"Overskriftsnivå 4"}),e.jsx(E,{as:"h5",hasSpacing:!0,children:"Overskriftsnivå 5"}),e.jsx(E,{as:"h6",hasSpacing:!0,children:"Overskriftsnivå 6"})]})}const yl=Object.freeze(Object.defineProperty({__proto__:null,default:Sl},Symbol.toStringTag,{value:"Module"}));function jl(){return e.jsxs(e.Fragment,{children:[e.jsx(w,{svgPath:_n,size:"medium"}),e.jsx(w,{svgPath:_n,size:"large"}),e.jsx(w,{svgPath:_n,size:"extraLarge"})]})}const Tl=Object.freeze(Object.defineProperty({__proto__:null,default:jl},Symbol.toStringTag,{value:"Module"}));function El(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:"Systemikoner er vanlige og enkle ikoner som brukes på ulike steder:"}),e.jsx(w,{svgPath:Bn,variant:"systemIcon"}),e.jsx(w,{svgPath:Xt,variant:"systemIcon"}),e.jsx(w,{svgPath:Ht,variant:"systemIcon"}),e.jsx(w,{svgPath:La,variant:"systemIcon"})]})}const Cl=Object.freeze(Object.defineProperty({__proto__:null,default:El},Symbol.toStringTag,{value:"Module"}));function Pl(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:"Temaikoner har en viss størrelse med plass til detaljer."}),e.jsx(w,{svgPath:la,variant:"themeIcon"}),e.jsx(w,{svgPath:da,variant:"themeIcon"}),e.jsx(w,{svgPath:ia,variant:"themeIcon"}),e.jsx(w,{svgPath:sa,variant:"themeIcon"})]})}const Rl=Object.freeze(Object.defineProperty({__proto__:null,default:Pl},Symbol.toStringTag,{value:"Module"})),wl=e.jsx("path",{d:"M12 2.5l2.84 5.76 6.36.93-4.6 4.48 1.09 6.33L12 17.02 6.31 20l1.09-6.33-4.6-4.48 6.36-.93L12 2.5z"});function Dl(){return e.jsx(oe,{svgPath:wl,title:"Favoritt"})}const Nl=Object.freeze(Object.defineProperty({__proto__:null,default:Dl},Symbol.toStringTag,{value:"Module"}));function Ll(){const[n,t]=s.useState(!1),a=()=>{n||(t(!0),setTimeout(()=>{t(!1)},2e3))};return e.jsx(oe,{svgPath:Ne,title:"Skriv ut",hasSpinner:n,spinnerTitle:"Laster inn...",onClick:a})}const Ol=Object.freeze(Object.defineProperty({__proto__:null,default:Ll},Symbol.toStringTag,{value:"Module"})),Il="_iconbuttonRow_1vlnl_1",Bl={iconbuttonRow:Il};function Al(){return e.jsxs("div",{className:Bl.iconbuttonRow,children:[e.jsx(oe,{svgPath:Ne,title:"Skriv ut"}),e.jsx(oe,{svgPath:Ne,title:"Skriv ut",isOutlined:!0})]})}const Ml=Object.freeze(Object.defineProperty({__proto__:null,default:Al},Symbol.toStringTag,{value:"Module"}));function Hl(){return e.jsx(oe,{svgPath:Ne,title:"Skriv ut"})}const Vl=Object.freeze(Object.defineProperty({__proto__:null,default:Hl},Symbol.toStringTag,{value:"Module"})),Fl="_iconbuttonRow_u7w7t_1",zl={iconbuttonRow:Fl};function Gl(){return e.jsxs("div",{className:zl.iconbuttonRow,children:[e.jsx(oe,{svgPath:Ne,title:"Skriv ut",size:"small"}),e.jsx(oe,{svgPath:Ne,title:"Skriv ut",size:"medium"}),e.jsx(oe,{svgPath:Ne,title:"Skriv ut",size:"large"})]})}const Kl=Object.freeze(Object.defineProperty({__proto__:null,default:Gl},Symbol.toStringTag,{value:"Module"}));function $l(){return e.jsx(re,{svgPath:Jt,iconPosition:"right",children:"Lagre i arkiv"})}const ql=Object.freeze(Object.defineProperty({__proto__:null,default:$l},Symbol.toStringTag,{value:"Module"}));function Jl(){const[n,t]=s.useState(!1),a=()=>{n||(t(!0),setTimeout(()=>{t(!1)},2e3))};return e.jsx(re,{hasSpinner:n,spinnerTitle:"Lagre melding...",onClick:a,children:"Lagre melding"})}const Wl=Object.freeze(Object.defineProperty({__proto__:null,default:Jl},Symbol.toStringTag,{value:"Module"}));function Xl(){return e.jsx(re,{svgPath:pt,children:"Legg til rapport"})}const Ul=Object.freeze(Object.defineProperty({__proto__:null,default:Xl},Symbol.toStringTag,{value:"Module"}));function Zl(){return e.jsx(re,{children:"Lukk melding"})}const Yl=Object.freeze(Object.defineProperty({__proto__:null,default:Zl},Symbol.toStringTag,{value:"Module"}));function Ql(){return e.jsx(ge,{href:"https://www.altinn.no",isExternal:!0,children:"Til altinn.no"})}const ei=Object.freeze(Object.defineProperty({__proto__:null,default:Ql},Symbol.toStringTag,{value:"Module"}));function ni(){return e.jsx(ge,{href:"#ledig-dato",svgPath:Oa,children:"Finn ledig dato"})}const ti=Object.freeze(Object.defineProperty({__proto__:null,default:ni},Symbol.toStringTag,{value:"Module"}));function ai(){return e.jsx(ge,{href:"#pendler",children:"Er du pendler?"})}const ri=Object.freeze(Object.defineProperty({__proto__:null,default:ai},Symbol.toStringTag,{value:"Module"}));function oi(){return e.jsxs(f,{children:["Er det noe du er usikker på, kan du lese"," ",e.jsx(ge,{href:"https://www.nav.no",target:"_blank",isExternal:!0,children:"rettledningen hos Nav (åpnes i ny fane)"}),"."]})}const si=Object.freeze(Object.defineProperty({__proto__:null,default:oi},Symbol.toStringTag,{value:"Module"}));function li(){return e.jsxs(L,{variant:"anchors",children:[e.jsx(L.Link,{href:"#",children:"Ankerlenke 1"}),e.jsx(L.Link,{href:"#",children:"Ankerlenke 2"}),e.jsx(L.Link,{href:"#",children:"Ankerlenke 3"}),e.jsx(L.Link,{href:"#",children:"Ankerlenke 4"})]})}const ii=Object.freeze(Object.defineProperty({__proto__:null,default:li},Symbol.toStringTag,{value:"Module"}));function di(){return e.jsxs(L,{variant:"list",children:[e.jsx(L.Link,{href:"#",children:"Lenke nummer 1"}),e.jsx(L.Link,{href:"#",children:"Lenke nummer 2"}),e.jsx(L.Link,{href:"#",children:"Lenke nummer 3"}),e.jsx(L.Link,{href:"#",isExternal:!0,children:"Ekstern lenke"})]})}const ci=Object.freeze(Object.defineProperty({__proto__:null,default:di},Symbol.toStringTag,{value:"Module"}));function mi(){return e.jsxs(K,{children:[e.jsxs(K.Element,{children:["Første punkt med ",e.jsx("strong",{children:"utheving"})," og ",e.jsx("em",{children:"betoning"})," i samme linje."]},"element_1"),e.jsx(K.Element,{children:"Andre punkt uten utheving."},"element_2")]})}const ui=Object.freeze(Object.defineProperty({__proto__:null,default:mi},Symbol.toStringTag,{value:"Module"}));function pi(){return e.jsxs(K,{as:"ol",children:[e.jsx(K.Element,{children:"Kontroller personopplysninger"}),e.jsx(K.Element,{children:"Legg til vedlegg"}),e.jsx(K.Element,{children:"Send inn skjema"})]})}const gi=Object.freeze(Object.defineProperty({__proto__:null,default:pi},Symbol.toStringTag,{value:"Module"}));function fi(){return e.jsxs(K,{children:[e.jsx(K.Element,{children:"Skatteoppgjør"}),e.jsx(K.Element,{children:"Skattekort"}),e.jsx(K.Element,{children:"Meldinger"})]})}const hi=Object.freeze(Object.defineProperty({__proto__:null,default:fi},Symbol.toStringTag,{value:"Module"}));function vi(){const[n,t]=s.useState(!1),a=()=>{n||(t(!0),setTimeout(()=>{t(!1)},2e3))};return e.jsx(In,{type:"button",hasSpinner:n,spinnerTitle:"Laster tjeneste",onClick:a,children:"Se eller endre skattekortet"})}const bi=Object.freeze(Object.defineProperty({__proto__:null,default:vi},Symbol.toStringTag,{value:"Module"}));function _i(){return e.jsx(In,{href:"#",isExternal:!0,children:"Hent opplysninger om kjøretøy"})}const xi=Object.freeze(Object.defineProperty({__proto__:null,default:_i},Symbol.toStringTag,{value:"Module"}));function ki(){return e.jsx(In,{type:"button",children:"Se eller endre skattekortet"})}const Si=Object.freeze(Object.defineProperty({__proto__:null,default:ki},Symbol.toStringTag,{value:"Module"})),yi="_bold_1kln7_1",ji="_exampleSpacing_1kln7_5",xt={bold:yi,exampleSpacing:ji},Ti="640px";function Ei(){const n=s.useRef(null),t=Ln(`(min-width: ${Ti})`);return e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"secondary",onClick:()=>n.current?.showModal(),children:"Åpne feilmelding"}),e.jsxs(fe,{ref:n,title:"Beklager, noe gikk galt",padding:t?"mega":"m",renderIcon:()=>e.jsx(Za,{size:"extraLarge"}),children:[e.jsx(f,{hasSpacing:!0,children:"Vi klarte ikke å hente skjemet akkurat nå."}),e.jsx(f,{className:xt.bold,children:"Du kan prøve å"}),e.jsxs(K,{hasSpacing:!0,children:[e.jsxs(K.Element,{children:["vente noen minutter og ",e.jsx("a",{href:"#link",children:"laste inn siden på nytt"})]}),e.jsx(K.Element,{children:e.jsx("a",{href:"#link",children:"gå tilbake til forrige side"})})]}),e.jsxs(f,{hasSpacing:!0,children:["Hvis du fortsatt har problemer kan du ",e.jsx("a",{href:"#link",children:"kontakte oss"})]}),e.jsx(C,{className:xt.exampleSpacing,svgPath:oa,onClick:()=>n.current?.close(),children:"Last inn siden på nytt"}),e.jsx(C,{variant:"secondary",href:"#",children:"Gå til forsiden"})]})]})}const Ci=Object.freeze(Object.defineProperty({__proto__:null,default:Ei},Symbol.toStringTag,{value:"Module"})),Pi="_buttonRow_1panr_1",Ri="_actionRow_1panr_7",Zn={buttonRow:Pi,actionRow:Ri};function wi(){const n=s.useRef(null),t=s.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:"Vi har to varianter av modal: standard (med ramme) og enkel (uten ramme)."}),e.jsxs("div",{className:Zn.buttonRow,children:[e.jsx(C,{onClick:()=>n.current?.showModal(),children:"Åpne standard modal"}),e.jsx(C,{variant:"secondary",onClick:()=>t.current?.showModal(),children:"Åpne enkel modal"})]}),e.jsxs(fe,{ref:n,title:"Standard modal (med ramme)",variant:"outline",children:[e.jsx(f,{hasSpacing:!0,children:"Denne varianten brukes i de fleste tilfeller der du trenger en tydelig dialog."}),e.jsx("div",{className:Zn.actionRow,children:e.jsx(C,{variant:"secondary",onClick:()=>n.current?.close(),children:"Lukk meg"})})]}),e.jsxs(fe,{ref:t,title:"Enkel modal (uten ramme)",variant:"plain",children:[e.jsx(f,{hasSpacing:!0,children:"Denne varianten brukes når rammen skal få mindre visuell oppmerksomhet."}),e.jsx("div",{className:Zn.actionRow,children:e.jsx(C,{variant:"secondary",onClick:()=>t.current?.close(),children:"Lukk meg"})})]})]})}const Di=Object.freeze(Object.defineProperty({__proto__:null,default:wi},Symbol.toStringTag,{value:"Module"})),Ni="_replaceButton_uvwme_1",Li={replaceButton:Ni};function Oi(){const n=s.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(C,{onClick:()=>n.current?.showModal(),children:"Vis modal med bekreftelse"}),e.jsxs(fe,{ref:n,title:"Vil du erstatte nye opplysninger fra fil?",children:[e.jsx(f,{hasSpacing:!0,children:"Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?"}),e.jsxs("div",{className:"flex",children:[e.jsx(C,{className:Li.replaceButton,children:"Erstatt opplysninger"}),e.jsx(C,{variant:"secondary",onClick:()=>n.current?.close(),children:"Avbryt"})]})]})]})}const Ii=Object.freeze(Object.defineProperty({__proto__:null,default:Oi},Symbol.toStringTag,{value:"Module"})),Bi="_actionRow_1ge1g_1",Ai={actionRow:Bi};function Mi(){const n=s.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(C,{onClick:()=>n.current?.showModal(),children:"Vis modal med tvungen handling"}),e.jsxs(fe,{ref:n,title:"Tvungen handling",dismissOnEsc:!1,dismissOnOutsideClick:!1,hideCloseButton:!0,children:[e.jsx(f,{hasSpacing:!0,children:"I denne modalen finnes det ikke noe lukkekryss, og den blir stående åpen også når brukeren klikker utenfor."}),e.jsxs("div",{className:Ai.actionRow,children:[e.jsx(C,{onClick:()=>n.current?.close(),children:"Bekreft handling"}),e.jsx(C,{variant:"secondary",href:"#",onClick:()=>n.current?.close(),children:"Avbryt"})]})]})]})}const Hi=Object.freeze(Object.defineProperty({__proto__:null,default:Mi},Symbol.toStringTag,{value:"Module"})),ua=12e5,Vi=5e3,Fi=()=>{const n=s.useRef(null),[t,a]=s.useState(ua),l=s.useRef(new Date().getTime()),r=()=>{l.current=new Date().getTime()},i=()=>{n.current?.close(),r()},d=()=>{n.current?.showModal()};return s.useEffect(()=>{const m=setInterval(()=>{new Date().getTime()-l.current>=t&&d()},1e3);return()=>clearInterval(m)},[t]),s.useEffect(()=>{const c=new AbortController,{signal:m}=c;return window.addEventListener("keydown",r,{signal:m}),window.addEventListener("mousemove",r,{signal:m}),window.addEventListener("scroll",r,{signal:m}),window.addEventListener("resize",r,{signal:m}),()=>{c.abort()}},[]),{refModalWait:n,time:t,setTime:a,closeDialog:i,openDialog:d}},zi="_triggerButton_1i8tv_1",Gi={triggerButton:zi},Ki=new URL("/designsystemet/assets/wait-alert-illustration-Hpaypitd.png",import.meta.url).href;function $i(){const{refModalWait:n,time:t,setTime:a,closeDialog:l,openDialog:r}=Fi();return e.jsxs(e.Fragment,{children:[e.jsx(C,{variant:"secondary",className:Gi.triggerButton,onClick:r,children:"Vis ventevarsel"}),e.jsxs(V,{legend:"Ventevarseleksempel åpnes automatisk etter",helpText:"Hver gang du beveger musepekeren, scroller eller gjør et tastetrykk, resettes timeren.",value:t,onChange:i=>a(Number(i.target.value)),children:[e.jsx(V.Radio,{value:ua,children:"20 minutter (anbefalt i løsninger)"}),e.jsx(V.Radio,{value:Vi,children:"5 sekunder"})]}),e.jsxs(fe,{ref:n,title:U.t("ds_overlays:modal.WaitNoticeTitle"),imageSource:Ki,imageSourceAltText:U.t("ds_overlays:modal.WaitNoticeImageAltText"),onClose:l,children:[e.jsx(f,{hasSpacing:!0,children:U.t("ds_overlays:modal.WaitNoticeParagraph")}),e.jsx(C,{onClick:l,children:U.t("ds_overlays:modal.StayLoggedIn")})]})]})}const qi=Object.freeze(Object.defineProperty({__proto__:null,default:$i},Symbol.toStringTag,{value:"Module"})),Ji="_container_45kb6_1",Wi={container:Ji};function Xi(){return e.jsxs(e.Fragment,{children:[e.jsx(E,{as:"h2",hasSpacing:!0,children:"Min overskrift"}),e.jsxs("nav",{className:Wi.container,"aria-label":"Navigasjonsflater under min overskrift",children:[e.jsx(ve,{title:"Skatt",description:"Skattekort • Selvangivelse • Fradrag",href:"#",titleAs:"h3"}),e.jsx(ve,{title:"Arbeidsgiver",description:"A-melding • Lønn • Oppgjør",href:"#",titleAs:"h3"}),e.jsx(ve,{title:"Merverdiavgift",description:"Mva-melding • Inntekter • Fradrag",href:"#",titleAs:"h3"})]})]})}const Ui=Object.freeze(Object.defineProperty({__proto__:null,default:Xi},Symbol.toStringTag,{value:"Module"})),Zi="_container_6nuzr_1",Yi={container:Zi},Qi="Næring",ed="Næringsinntekt • Kostnader • Avskrivning";function nd(){const[n,t]=s.useState(!1),a=l=>{l.preventDefault(),t(!0),setTimeout(()=>t(!1),2e3)};return e.jsx("nav",{className:Yi.container,"aria-label":"Eksempel med spinner",children:e.jsx(ve,{title:Qi,description:ed,href:"#",hasSpinner:n,onClick:a})})}const td=Object.freeze(Object.defineProperty({__proto__:null,default:nd},Symbol.toStringTag,{value:"Module"})),ad="_container_f0241_1",rd={container:ad};function od(){return e.jsxs("nav",{className:rd.container,"aria-label":"Beskrivelse av navigasjonsflater",children:[e.jsx(ve,{title:"Skatt",description:"Inntekt • Formue • Gjeld",href:"#",size:"extraLarge",svgPath:kn}),e.jsx(ve,{title:"Arbeidsgiver",description:"Ansatte • Kostnader • Fradrag",href:"#",size:"extraLarge",svgPath:kn})]})}const sd=Object.freeze(Object.defineProperty({__proto__:null,default:od},Symbol.toStringTag,{value:"Module"})),ld="_container_6nuzr_1",id={container:ld},dd="Arbeidsgiver",cd="A-melding • Skattemelding • Sluttoppgjør • Refusjon";function md(){return e.jsx("nav",{className:id.container,"aria-label":"Eksempel uten pilikon",children:e.jsx(ve,{title:dd,description:cd,href:"#",hideArrowIcon:!0})})}const ud=Object.freeze(Object.defineProperty({__proto__:null,default:md},Symbol.toStringTag,{value:"Module"})),pd="_container_6nuzr_1",gd={container:pd};function fd(){return e.jsxs("nav",{className:gd.container,"aria-label":"Eksempel på størrelser",children:[e.jsx(ve,{title:"Medium",description:"Litt mindre skriftsstørrelse",href:"#",size:"medium"}),e.jsx(ve,{title:"Large",description:"Standard størrelse",href:"#",size:"large"}),e.jsx(ve,{title:"Extra large",description:"Midtstilt med ikon",href:"#",size:"extraLarge",svgPath:kn})]})}const hd=Object.freeze(Object.defineProperty({__proto__:null,default:fd},Symbol.toStringTag,{value:"Module"}));function vd(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:"Høyrestilt ikon kan gi et roligere visuelt inntrykk og bedre plassutnyttelse på mobil. Vestrejustert ikon kan samtidig være et bedre valg for universell utforming, siden ikonet kommer først i leserekkefølgen og blir synlig tidligere ved zoom."}),e.jsx(De,{title:"Hva er aksjesparekonto",iconPosition:"right",children:e.jsx(f,{children:"En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen."})})]})}const bd=Object.freeze(Object.defineProperty({__proto__:null,default:vd},Symbol.toStringTag,{value:"Module"}));function _d(){return e.jsxs(e.Fragment,{children:[e.jsx(E,{as:"h1",level:2,children:"Navn på oppgave eller tema"}),e.jsx(f,{variant:"ingress",children:"Hjelpetekst, som vi ønsker at brukeren skal lese før hen går videre, plasserer vi normalt synlig og rett etter overskriften."}),e.jsx(De,{title:"Hjelpetekst som folk kan velge å åpne",children:e.jsx(f,{children:"Denne teksten kan brukere hente frem og lese hvis de har behov for det. Den kan også bli stående oppe som ekstra støtte for prosessen videre. Det er viktig at tittelen på OpenClose-komponenten tydelig kommuniserer hva slags informasjon man kan finne ved å åpne den."})})]})}const xd=Object.freeze(Object.defineProperty({__proto__:null,default:_d},Symbol.toStringTag,{value:"Module"}));function kd(){return e.jsx(De,{title:"Hva er aksjesparekonto?",children:e.jsx(f,{children:"En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen."})})}const Sd=Object.freeze(Object.defineProperty({__proto__:null,default:kd},Symbol.toStringTag,{value:"Module"})),yd="_container_13wqg_1",jd={container:yd};function Td(){return e.jsxs("div",{className:jd.container,children:[e.jsx(De,{title:"Small OpenClose",size:"small",children:e.jsx(f,{children:"Kompakt variant for korte forklaringer."})}),e.jsx(De,{title:"Medium OpenClose",size:"medium",children:e.jsx(f,{children:"Standard variant for de fleste innholdsflater."})}),e.jsx(De,{title:"Large OpenClose",size:"large",children:e.jsx(f,{children:"Stor variant når teksten trenger mer visuell tyngde."})})]})}const Ed=Object.freeze(Object.defineProperty({__proto__:null,default:Td},Symbol.toStringTag,{value:"Module"})),kt=[{navn:"Donald Duck",dato:"25.03.20"},{navn:"Robbie Wiliams",dato:"25.03.15"},{navn:"Minnie Mouse",dato:"12.05.18"},{navn:"Katy Perry",dato:"01.01.23"},{navn:"Langbein",dato:"14.02.22"},{navn:"Justin Bieber",dato:"08.03.19"},{navn:"Daisy Duck",dato:"07.04.21"},{navn:"Ed Sheeran",dato:"17.05.20"},{navn:"Timmy Gresshoppe",dato:"21.06.19"},{navn:"Beyonce",dato:"04.07.18"},{navn:"Dovre Gubben Gra",dato:"25.12.24"},{navn:"Taylor Swift",dato:"13.08.23"},{navn:"Karius og Baktus",dato:"29.09.22"},{navn:"Ariana Grande",dato:"10.10.21"},{navn:"Askeladden",dato:"11.11.20"},{navn:"Billie Eilish",dato:"12.12.19"},{navn:"Ole Brumm",dato:"01.01.24"},{navn:"Rihanna",dato:"25.03.20"},{navn:"Pippi Langstrompe",dato:"02.02.23"},{navn:"The Weeknd",dato:"03.03.22"},{navn:"Kardemomme by",dato:"04.04.21"},{navn:"Dua Lipa",dato:"05.05.20"},{navn:"Bamse og Kylling",dato:"06.06.19"},{navn:"Coldplay",dato:"07.07.18"},{navn:"Morten Harket",dato:"08.08.23"},{navn:"Kaisa Lundquist",dato:"23.05.16"},{navn:"Reidar Olsen",dato:"15.11.16"},{navn:"Bob Egil Hansen",dato:"15.11.16"},{navn:"Leif Kare Lund",dato:"23.10.17"},{navn:"Kai Mossige",dato:"25.11.19"},{navn:"Bob Testman",dato:"01.01.20"},{navn:"Alice Middleman",dato:"25.03.20"},{navn:"Kari Saksbehandler",dato:"25.03.20"},{navn:"Frank Johansen",dato:"26.03.20"},{navn:"Tallulah Willis",dato:"01.05.20"},{navn:"Kaisa Lundquist",dato:"23.05.16"},{navn:"Reidar Olsen",dato:"15.11.16"},{navn:"Bob Egil Hansen",dato:"15.11.16"},{navn:"Leif Kare Lund",dato:"23.10.17"},{navn:"Kai Mossige",dato:"25.11.19"},{navn:"Bob Testman",dato:"01.01.20"},{navn:"Alice Middleman",dato:"25.03.20"},{navn:"Kari Saksbehandler",dato:"25.03.20"},{navn:"Frank Johansen",dato:"26.03.20"},{navn:"Tallulah Willis",dato:"01.05.20"},{navn:"Kari Nordmann",dato:"2024-02-07"},{navn:"Ola Olsen",dato:"2024-02-07"},{navn:"Anne Persen",dato:"2024-02-07"},{navn:"Bjorn Hansen",dato:"2024-02-07"},{navn:"Lisa Karlsen",dato:"2024-02-07"},{navn:"Kari Nordmann",dato:"2024-02-07"},{navn:"Ola Olsen",dato:"2024-01-30"},{navn:"Anne Hansen",dato:"2024-02-14"},{navn:"Per Pettersen",dato:"2024-02-01"},{navn:"Lisa Lie",dato:"2024-02-19"},{navn:"Martin Martinsen",dato:"2024-02-05"},{navn:"Turid Thoresen",dato:"2024-02-12"},{navn:"Knut Knutsen",dato:"2024-02-08"},{navn:"Helene Hansen",dato:"2024-02-16"},{navn:"Lars Larsen",dato:"2024-02-10"}];function Cd(){const[n,t]=s.useState(1),a=5,l=(i,d,c)=>{const m=(d-1)*c;return i.map((p,g)=>e.jsxs(K.Element,{children:[g+1," ",p.navn]},`${p.navn}-${p.dato}-${g}`)).slice(m,m+c)},r=i=>{t(i)};return e.jsxs(e.Fragment,{children:[e.jsx(K,{hasSpacing:!0,children:l(kt,n,a)}),e.jsx(mt,{pageSize:a,totalItems:kt.length,currentPage:n,onChange:r})]})}const Pd=Object.freeze(Object.defineProperty({__proto__:null,default:Cd},Symbol.toStringTag,{value:"Module"}));function Rd(){return e.jsx(mt,{defaultCurrent:1,pageSize:10,sibling:3,totalItems:70})}const wd=Object.freeze(Object.defineProperty({__proto__:null,default:Rd},Symbol.toStringTag,{value:"Module"}));function Dd(){return e.jsx(mt,{pageSize:10,totalItems:40,defaultCurrent:3})}const Nd=Object.freeze(Object.defineProperty({__proto__:null,default:Dd},Symbol.toStringTag,{value:"Module"})),Ld="_semanticArticle_1x0sk_1",Od="_bottomSpacing_1x0sk_7",Id="_dummyPanelPaddingNoMargin_1x0sk_11",Yn={semanticArticle:Ld,bottomSpacing:Od,dummyPanelPaddingNoMargin:Id};function Bd(){return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`${Yn.semanticArticle} ${Yn.bottomSpacing}`,children:[e.jsx(E,{as:"h1",level:3,children:"Tekst utenfor Panel"}),e.jsx(f,{children:"Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger."})]}),e.jsx(cn,{classNames:{padding:Yn.dummyPanelPaddingNoMargin},title:"Innholdsbredde 100%",hasResponsivePadding:!0,children:"Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger."})]})}const Ad=Object.freeze(Object.defineProperty({__proto__:null,default:Bd},Symbol.toStringTag,{value:"Module"})),Md="_articleContainer_13pvd_1",Hd="_wideContentContainer_13pvd_7",Qn={articleContainer:Md,wideContentContainer:Hd};function Vd(){return e.jsxs("div",{children:[e.jsxs("div",{className:Qn.articleContainer,children:[e.jsx(E,{as:"h2",level:2,hasSpacing:!0,children:"Panel med innhold som er justert med teksten på siden"}),e.jsxs(f,{hasSpacing:!0,children:["Denne teksten bruker bredden --semantic-responsive-article. Det er","meningen at teksten her skal starte på same linje som teksten inni","panelet."]})]}),e.jsx("div",{className:Qn.wideContentContainer,children:e.jsx(cn,{variant:"filled",spacing:"l",children:"Dette panelet ligger i en container med bredden --semantic-responsive-wide-content. Innholdet i Panel har en innebygd containerbredde på --semantic-responsive-article, for å venstre- og høyrejustere denne teksten med resten av siden."})}),e.jsx("div",{className:Qn.articleContainer,children:e.jsxs(f,{children:["Denne teksten bruker ogsa --semantic-responsive-article for a vise","samme venstre- og hoyrejustering som innholdet rundt panelet."]})})]})}const Fd=Object.freeze(Object.defineProperty({__proto__:null,default:Vd},Symbol.toStringTag,{value:"Module"}));function zd(){return e.jsx(cn,{title:"Virksomheten skal registreres som særavgiftspliktig",variant:"filled",color:"forest",spacing:"xxl",renderIcon:()=>e.jsx(Ia,{size:"extraLarge"}),children:e.jsx(f,{children:"For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."})})}const Gd=Object.freeze(Object.defineProperty({__proto__:null,default:zd},Symbol.toStringTag,{value:"Module"})),Kd="_dummySpacingTop_1jqfi_1",$d={dummySpacingTop:Kd};function qd(){return e.jsxs(cn,{title:"Når kommer skattepengene?",spacing:"xl",variant:"outline",children:[e.jsx(f,{hasSpacing:!0,children:e.jsx(ge,{href:"#",children:"Vi varsler deg når skatteoppgjøret ditt er klart."})}),e.jsx(f,{hasSpacing:!0,children:"Vi kan dessverre ikke gi deg en konkret dato for når du får oppgjøret ditt, verken på telefon, facebook eller chat."}),e.jsx(f,{children:"Logg inn:"}),e.jsx(In,{children:"Sjekk skatten"}),e.jsxs(f,{className:$d.dummySpacingTop,children:["Ser du etter skattemeldingen? Hvis du oppdager feil eller har mottatt nye eller forsinkede opplysninger, kan du fortsatt ",e.jsx(ge,{href:"#",children:"se, endre og levere skattemeldingen"}),"."]})]})}const Jd=Object.freeze(Object.defineProperty({__proto__:null,default:qd},Symbol.toStringTag,{value:"Module"}));function Wd(){return e.jsxs(e.Fragment,{children:[e.jsx(E,{as:"h1",hasSpacing:!0,children:"Flere oppgir kryptoverdier i skattemeldingen"}),e.jsx(f,{variant:"ingress",hasSpacing:!0,children:"Antall personer som oppgir kryptoverdier i skattemeldingen har økt fra 15 000 til 41 000. Skatteetaten ønsker at det skal bli pliktig for tilbydere av vekslingstjenester å rapportere om transaksjoner og eiere."}),e.jsx(f,{hasSpacing:!0,children:"– Det har vært en god vekst i antall personer som eier kryptovaluta, men fortsatt er det mange som ikke rapporterer sine verdier. Vi har økt vår innsats innen både veiledning og kontroll for at også denne delen av økonomien skal bli riktigere beskattet, sier skattedirektor Nina Schanke Funnemark."}),e.jsxs(f,{children:["Sammenlignet med ",e.jsx("a",{href:"https://www.skatteetaten.no/presse/nyhetsrommet/flere-oppgir-kryptoverdier-i-skattemeldingen/",target:"_blank",rel:"noreferrer",children:"tidligere år"})," oppgir langt flere personer at de eier kryptovaluta, og inntekt, formue og fradrag fra kryptovaluta øker også kraftig."]})]})}const Xd=Object.freeze(Object.defineProperty({__proto__:null,default:Wd},Symbol.toStringTag,{value:"Module"}));function Ud(){return e.jsxs(f,{children:[e.jsx(w,{svgPath:Ba})," Siden inneholder et filvedlegg."]})}const Zd=Object.freeze(Object.defineProperty({__proto__:null,default:Ud},Symbol.toStringTag,{value:"Module"}));function Yd(){return e.jsxs(f,{children:["Dette er et eksempel på et avsnitt med en ",e.jsx("a",{href:"https://www.skatteetaten.no/stilogtone/",target:"_blank",rel:"noreferrer",children:"lenke til stil og tone"})," og som får designsystemets typografi."]})}const Qd=Object.freeze(Object.defineProperty({__proto__:null,default:Yd},Symbol.toStringTag,{value:"Module"}));function ec(){return e.jsxs(f,{children:["Noen ganger ønsker vi å fremheve tekst med ",e.jsx("strong",{children:"tydelig utheving"}),", mens andre ganger holder det med ",e.jsx("em",{children:"lett betoning"}),". Begge deler støttes automatisk i Paragraph."]})}const nc=Object.freeze(Object.defineProperty({__proto__:null,default:ec},Symbol.toStringTag,{value:"Module"})),tc="_row_30f3z_1",ac="_triggerSpacing_30f3z_7",St={row:tc,triggerSpacing:ac};function rc(){const n="popover-controlled-heading",[t,a]=s.useState(!1);return e.jsxs("div",{className:St.row,children:[e.jsx(E,{id:n,as:"h2",children:"Controlled Popover"}),e.jsxs(F,{position:"bottomStart",color:"ochre",isOpen:t,onClose:()=>a(!1),children:[e.jsx(F.Trigger,{ariaDescribedby:n,className:St.triggerSpacing,onClick:()=>a(!t)}),e.jsx(F.Content,{children:"Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret består av en bokstav etterfulgt av fire tall, f.eks. H0101."})]})]})}const oc=Object.freeze(Object.defineProperty({__proto__:null,default:rc},Symbol.toStringTag,{value:"Module"})),sc="_container_8evs8_1",lc="_row_8evs8_7",gn={container:sc,row:lc};function ic(){return e.jsxs("div",{className:gn.container,children:[e.jsxs("div",{className:gn.row,children:[e.jsx(E,{as:"h3",level:4,children:"White"}),e.jsxs(F,{color:"white",children:[e.jsx(F.Trigger,{title:"Vis white-popover"}),e.jsx(F.Content,{children:e.jsx(f,{children:"Nøytral bakgrunn for standard hjelpetekster."})})]})]}),e.jsxs("div",{className:gn.row,children:[e.jsx(E,{as:"h3",level:4,children:"Ochre"}),e.jsxs(F,{color:"ochre",children:[e.jsx(F.Trigger,{title:"Vis ochre-popover"}),e.jsx(F.Content,{children:e.jsx(f,{children:"Fremhever viktig kontekst uten å dominere siden."})})]})]}),e.jsxs("div",{className:gn.row,children:[e.jsx(E,{as:"h3",level:4,children:"Forest"}),e.jsxs(F,{color:"forest",children:[e.jsx(F.Trigger,{title:"Vis forest-popover"}),e.jsx(F.Content,{children:e.jsx(f,{children:"Kan brukes for å markere veiledning i grønn tone."})})]})]})]})}const dc=Object.freeze(Object.defineProperty({__proto__:null,default:ic},Symbol.toStringTag,{value:"Module"})),cc="_row_nnhgy_1",mc={row:cc},uc="Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret består av en bokstav etterfulgt av fire tall, f.eks. H0101. Bolignummeret står som regel på et klistemerke i dørkarmen til inngangsdøren.";function pc(){const n="popover-heading-h3";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:mc.row,children:[e.jsx(E,{id:n,as:"h3",children:"Husk før du henter skattekortet"}),e.jsxs(F,{color:"ochre",position:"bottomEnd",children:[e.jsx(F.Trigger,{ariaDescribedby:n,size:"small"}),e.jsx(F.Content,{children:e.jsx(f,{children:uc})})]})]}),e.jsx(f,{children:"PopOver kan egne seg når overskriften er mindre eller når du vil redusere visuell vekt i tett layout."})]})}const gc=Object.freeze(Object.defineProperty({__proto__:null,default:pc},Symbol.toStringTag,{value:"Module"})),ft="large",qe=s.createContext(null);try{qe.displayName="TableContext",qe.__docgenInfo={description:"",displayName:"TableContext",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"TableContextProps | null"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}}}}}catch{}const Cn=({ref:n,children:t,...a})=>e.jsx("tbody",{ref:n,...a,children:t});Cn.displayName="TableBody";try{Cn.displayName="TableBody",Cn.__docgenInfo={description:"",displayName:"TableBody",props:{className:{defaultValue:null,description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableSectionElement>"}}}}}catch{}const fc="_dataCell_1wrs6_1",hc="_dataCell_rowspan_1wrs6_10",vc="_dataCell_small_1wrs6_14",bc="_dataCell_medium_1wrs6_17",_c="_dataCell_large_1wrs6_20",xc="_dataCell_left_1wrs6_23",kc="_dataCell_right_1wrs6_26",Sc="_dataCell_center_1wrs6_29",yc="_dataCell_extraSmall_1wrs6_32",fn={dataCell:fc,dataCell_rowspan:hc,dataCell_small:vc,dataCell_medium:bc,dataCell_large:_c,dataCell_left:xc,dataCell_right:kc,dataCell_center:Sc,dataCell_extraSmall:yc},Je=({ref:n,id:t,className:a="",lang:l,"data-testid":r,as:i="td",alignment:d="left",colSpan:c,rowSpan:m,scope:p,children:g})=>{const k=s.useContext(qe)?.size??ft,_=fn[`dataCell_${k}`],S=fn[`dataCell_${d}`],b=`${fn.dataCell} ${_} ${S} ${m?fn.dataCell_rowspan:""} ${a}`.trim();return e.jsx(i,{ref:n,id:t,className:b,lang:l,"data-testid":r,colSpan:c,rowSpan:m,scope:p??i==="th"?"row":void 0,children:g})};Je.displayName="TableDataCell";try{Je.displayName="TableDataCell",Je.__docgenInfo={description:"",displayName:"TableDataCell",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableCellElement>"}},alignment:{defaultValue:{value:"left"},description:"Tekstjustering",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},as:{defaultValue:{value:"td"},description:"HTML-element for cellen",name:"as",required:!1,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}},children:{defaultValue:null,description:"Innhold i cellen",name:"children",required:!1,type:{name:"ReactNode"}},scope:{defaultValue:null,description:"",name:"scope",required:!1,type:{name:"string"}},colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:"number"}},rowSpan:{defaultValue:null,description:"",name:"rowSpan",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const jc="_buttonCell_h1i5x_5",Tc="_buttonCell_small_h1i5x_8",Ec="_buttonCell_medium_h1i5x_11",Cc="_buttonCell_large_h1i5x_14",Pc="_buttonCell_extraSmall_h1i5x_17",Rc="_expandIconButton_extraSmall_h1i5x_21",wc="_expandButtonWithLabel_h1i5x_25",Dc="_expandButtonWithLabel_extraSmall_h1i5x_32",Nc="_expandedContent_h1i5x_41",Lc="_expandedRow_h1i5x_45",Oc="_row_noBorder_h1i5x_49",Ic="_hideIcon_h1i5x_53",Bc="_srOnly_h1i5x_57",ue={buttonCell:jc,buttonCell_small:Tc,buttonCell_medium:Ec,buttonCell_large:Cc,buttonCell_extraSmall:Pc,expandIconButton_extraSmall:Rc,expandButtonWithLabel:wc,expandButtonWithLabel_extraSmall:Dc,expandedContent:Nc,expandedRow:Lc,row_noBorder:Oc,hideIcon:Ic,srOnly:Bc},Ac=re,Mc=(n,t)=>t(n==="edit"?"tablerow.EditButtonScreenReaderText":"tablerow.ExpandButtonScreenReaderText"),ln=({ref:n,id:t,className:a="",lang:l,"data-testid":r,onExpandClick:i,classNames:d,buttonPosition:c,svgPath:m,context:p,iconButtonAriaExpanded:g,rowType:h,expandableContent:k,expandButtonTitle:_=U.t("ds_tables:tablerow.Expandable"),expandButtonAriaDescribedby:S,expandButtonProps:b,showExpandButtonTitle:u,shouldInsertExpandAreaMarkers:x,isExpanded:y=!1,isExpandButtonDisabled:A,hideIconButton:H,children:v})=>{const R=s.useRef(null),N=s.useRef(null),{t:Y}=me("ds_tables",{i18n:U}),[Z,O]=s.useState(!1);s.useImperativeHandle(n,()=>({focusButton:()=>{N?.current?.focus()},buttonRef:N,rowRef:R}));const[W,xe]=s.useState(999);s.useEffect(()=>{N.current&&(N.current.ariaExpanded=y.toString())},[y]),s.useEffect(()=>{const ne=R.current;if(!ne||!h){O(!1);return}const Se=ne.closest("table")?.querySelector(`tr[data-row-type="${h}"]`)===ne;O(Re=>Re===Se?Re:Se)},[h]),s.useEffect(()=>{if(!y)return;const ne=R.current?.cells;if(!ne)return;let ke=0;for(let Se=0;Se<ne.length;Se++)ke+=ne[Se].colSpan||1;xe(ke)},[R,y]);const j=p?.size?ue[`buttonCell_${p?.size}`]:"",J=p?.size==="extraSmall"?ue.expandButtonWithLabel_extraSmall:"",Q=p?.size==="extraSmall"?ue.expandIconButton_extraSmall:"",ee=c==="left"&&Z&&h?Mc(h,Y):void 0;return e.jsxs(e.Fragment,{children:[e.jsxs("tr",{ref:R,"data-row-type":c==="left"?h:void 0,id:t,className:`${y&&!x?ue.row_noBorder:""} ${a}`.trim(),lang:l,"data-testid":r,children:[c==="right"&&v,e.jsx(Je,{className:`${u?"":ue.buttonCell} ${u?"":j}`.trim(),alignment:c,children:u?e.jsxs(Ac,{ref:N,className:`${ue.expandButtonWithLabel} ${J}`.trim(),svgPath:m,ariaDescribedby:S,disabled:A,onClick:i,...b,children:[_,ee&&e.jsxs(e.Fragment,{children:[" ",e.jsx("span",{className:ue.srOnly,children:ee})]})]}):e.jsx(oe,{ref:N,className:`${H?ue.hideIcon:""} ${Q}`.trim(),svgPath:m,title:`${_} ${ee??""}`.trim(),size:p?.size==="extraSmall"||p?.size==="small"?"medium":p?.size,ariaDescribedby:S,ariaExpanded:g,disabled:A,onClick:i,...b})}),c==="left"&&v]}),y&&!x&&e.jsx("tr",{className:`${ue.expandedRow} ${a}`.trim(),children:e.jsx("td",{colSpan:W,children:e.jsx("div",{className:`${ue.expandedContent} ${d?.expandedContent??""}`.trim(),children:k})})}),y&&x&&e.jsxs(e.Fragment,{children:[e.jsx("tr",{className:ue.srOnly,lang:l,"data-testid":r,children:e.jsx("td",{colSpan:W,children:Y("table.ExpandAreaStart")})}),k,e.jsx("tr",{className:ue.srOnly,children:e.jsx("td",{colSpan:W,children:Y("table.ExpandAreaEnd")})})]})]})};ln.displayName="TableRowWithIconButton";try{ln.displayName="TableRowWithIconButton",ln.__docgenInfo={description:"",displayName:"TableRowWithIconButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"RefObject<RowWithExpandButtonHandle | null>"}},rowType:{defaultValue:null,description:"",name:"rowType",required:!1,type:{name:"enum",value:[{value:'"expand"'},{value:'"edit"'}]}},expandButtonTitle:{defaultValue:{value:"dsI18n.t('ds_tables:tablerow.Expandable')"},description:`Overstyring av standard title/tekst for utvidelsesknappen. Default title er
"Mer informasjon" (når showExpandButtonTitle er false). Når
showExpandButtonTitle er satt til true, vises teksten "Detaljer" som
default.`,name:"expandButtonTitle",required:!1,type:{name:"string"}},expandableContent:{defaultValue:null,description:`Innholdet som vises når raden er utvidet. Hvis det ekspanderte innholdet
skal være flere tabellrader som skal aligneres med resten av tabellen så må
radene ikke wrappes i et Fragment, i stedet kan de sendes inn som array.`,name:"expandableContent",required:!1,type:{name:"ReactNode"}},showExpandButtonTitle:{defaultValue:null,description:"Om utvidelsesknappen skal ha synlig tekst.",name:"showExpandButtonTitle",required:!1,type:{name:"boolean"}},expandButtonAriaDescribedby:{defaultValue:null,description:`Skal settes til radheader sin id dersom rad er ekspanderbar. Dette er for å
tydeliggjøre hvilken rad som ekspanderes.`,name:"expandButtonAriaDescribedby",required:!1,type:{name:"string"}},expandButtonProps:{defaultValue:null,description:`Andre props som sendes videre expandButton. Se Button-komponenten for
api-dokumentasjon.`,name:"expandButtonProps",required:!1,type:{name:'DistributiveOmit<ButtonProps, "children" | "onClick" | "ref">'}},isExpanded:{defaultValue:{value:!1},description:"Brukes til å styre ekspandert tilstand utenfor komponenten.",name:"isExpanded",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Innholdet i raden. Bruk Table.DataCell for celler.",name:"children",required:!1,type:{name:"ReactNode"}},buttonPosition:{defaultValue:null,description:"",name:"buttonPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},classNames:{defaultValue:null,description:"",name:"classNames",required:!1,type:{name:"{ expandedContent?: string; }"}},context:{defaultValue:null,description:"",name:"context",required:!0,type:{name:"TableContextProps | null"}},svgPath:{defaultValue:null,description:"",name:"svgPath",required:!0,type:{name:"ReactElement<SVGPathElement, string | JSXElementConstructor<any>>"}},hideIconButton:{defaultValue:null,description:"",name:"hideIconButton",required:!1,type:{name:"boolean"}},iconButtonAriaExpanded:{defaultValue:null,description:"",name:"iconButtonAriaExpanded",required:!1,type:{name:"boolean"}},isExpandButtonDisabled:{defaultValue:null,description:"",name:"isExpandButtonDisabled",required:!1,type:{name:"boolean"}},shouldInsertExpandAreaMarkers:{defaultValue:null,description:`Om komponenten skal sette in ekstra markører for skjermleser som indikerer
start og slutt på ekpandert område.`,name:"shouldInsertExpandAreaMarkers",required:!1,type:{name:"boolean"}},onExpandClick:{defaultValue:null,description:"",name:"onExpandClick",required:!0,type:{name:"() => void"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const Hc="_editableRow_expanded_1k5kh_5",Vc="_triangle_1k5kh_10",Fc="_expandableContent_1k5kh_16",zc="_srOnly_1k5kh_23",hn={editableRow_expanded:Hc,triangle:Vc,expandableContent:Fc,srOnly:zc},Pn=({ref:n,id:t,className:a="",lang:l,"data-testid":r,editButtonRef:i,editableContentRef:d,editableContent:c,editButtonAriaDescribedby:m,editButtonPosition:p="left",isNew:g=!1,onEdit:h,children:k})=>{const _=s.useRef(null),S=s.useRef(null);s.useImperativeHandle(i,()=>_?.current?.buttonRef?.current),s.useImperativeHandle(d,()=>S?.current),s.useImperativeHandle(n,()=>_?.current?.rowRef?.current);const b=s.useContext(qe),{t:u}=me("ds_tables",{i18n:U}),x=s.useId(),y=t??x,A=y===b?.rowInEditModeId,H=`${A?hn.editableRow_expanded:""} ${a}`.trim(),v=()=>{b?.setRowInEditModeId(void 0),setTimeout(()=>{_.current?.focusButton()},0)};return e.jsx(ln,{ref:_,id:y,lang:l,className:H,"data-testid":r,classNames:{expandedContent:hn.expandableContent},buttonPosition:p,isExpandButtonDisabled:!!b?.rowInEditModeId,isExpanded:A,rowType:"edit",expandButtonTitle:g?"":u("tablerow.Editable"),expandButtonAriaDescribedby:m,expandableContent:e.jsxs(e.Fragment,{children:[e.jsxs("svg",{width:"24",height:"14",viewBox:"0 0 24 14",className:hn.triangle,"aria-hidden":"true",focusable:"false",children:[e.jsx("polygon",{points:"0,0 24,0 12,12",fill:"var(--palette-ochre-10)",stroke:"var(--palette-ochre-50)",strokeWidth:"1"}),e.jsx("line",{x1:"0",y1:"0.5",x2:"24",y2:"0.5",stroke:"var(--palette-ochre-10)",strokeWidth:"1"})]}),!g&&e.jsx("span",{ref:S,className:hn.srOnly,tabIndex:-1,children:u("tablerow.EditData")}),c?.(v)]}),context:b,svgPath:dn,hideIconButton:A,onExpandClick:()=>{h&&h(),b?.setRowInEditModeId(y),setTimeout(()=>S.current?.focus(),0)},children:k})};Pn.displayName="TableEditableRow";try{Pn.displayName="TableEditableRow",Pn.__docgenInfo={description:"",displayName:"TableEditableRow",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableRowElement>"}},editButtonRef:{defaultValue:null,description:`Ref til redigeringsknappen. Kan brukes til å sette fokus i avanserte tabeller hvor den innebyggede
fokushåndteringen ikke er tilstrekkelig.`,name:"editButtonRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}},editableContentRef:{defaultValue:null,description:`Ref til innholdet til rad i redigeringsmodus. Kan brukes til å sette fokus i avanserte tabeller hvor den innebyggede
fokushåndteringen ikke er tilstrekkelig.`,name:"editableContentRef",required:!1,type:{name:"Ref<HTMLSpanElement>"}},editableContent:{defaultValue:null,description:`rendrer innholdet i redigeringsmodus
@param closeEditing kalles for å lukke raden som redigeres`,name:"editableContent",required:!1,type:{name:"((closeEditing: () => void) => ReactNode)"}},editButtonAriaDescribedby:{defaultValue:null,description:`Skal settes til radheader sin id dersom rad er ekspanderbar.
 Dette er for å tydeliggjøre hvilken rad som ekspanderes`,name:"editButtonAriaDescribedby",required:!1,type:{name:"string"}},editButtonPosition:{defaultValue:{value:"left"},description:"Posisjonen til ikonet: 'left', 'right'.",name:"editButtonPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isNew:{defaultValue:{value:!1},description:"Angir om raden er en ny rad for å legge til data i tabellen.\nNår `true`, rendres raden med tilpasset utseende for å legge til nye data,\nog fjerner skjult hjelpetekst til skjermleser om redigering av raden og redigering av data.",name:"isNew",required:!1,type:{name:"boolean"}},onEdit:{defaultValue:null,description:"Callback når redigerknappen trykkes.",name:"onEdit",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Innhold i raden",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const Rn=({ref:n,children:t,...a})=>e.jsx("thead",{ref:n,...a,children:t});Rn.displayName="TableHeader";try{Rn.displayName="TableHeader",Rn.__docgenInfo={description:"",displayName:"TableHeader",props:{className:{defaultValue:null,description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableSectionElement>"}}}}}catch{}const Gc="_headerCell_x375r_1",Kc="_headerCell_noPadding_x375r_9",$c="_headerCellSortButton_x375r_12",qc="_headerCellSortButtonIcon_x375r_23",Jc="_headerCell_left_x375r_52",Wc="_headerCell_right_x375r_55",Xc="_headerCell_center_x375r_58",Uc="_headerCell_row_x375r_61",Zc="_headerCell_extraSmall_x375r_64",Yc="_headerCell_small_x375r_68",Qc="_headerCell_medium_x375r_71",em="_headerCell_large_x375r_74",Fe={headerCell:Gc,headerCell_noPadding:Kc,headerCellSortButton:$c,headerCellSortButtonIcon:qc,headerCell_left:Jc,headerCell_right:Wc,headerCell_center:Xc,headerCell_row:Uc,headerCell_extraSmall:Zc,headerCell_small:Yc,headerCell_medium:Qc,headerCell_large:em},wn=({ref:n,id:t,className:a="",lang:l,"data-testid":r,alignment:i="left",as:d="th",colSpan:c,isSortDisabled:m=!1,isSortable:p=!1,scope:g,sortKey:h,children:k})=>{const{t:_}=me("ds_tables",{i18n:U}),S=s.useContext(qe),b=S?.size??ft,u=Fe[`headerCell_${i}`],x=Fe[`headerCell_${b}`],y=`${Fe.headerCell} ${p?Fe.headerCell_noPadding:x} ${g==="row"?Fe.headerCell_row:""} ${u} ${a}`.trim(),A=()=>{let N="ascending";if(S?.sortState?.sortKey===h)switch(S?.sortState?.direction){case"ascending":N="descending";break;case"descending":N="none";break}S?.setSortState&&S?.setSortState({sortKey:N!=="none"?h:void 0,direction:N}),S?.setRowInEditModeId(void 0)},H=()=>{if(S?.sortState?.sortKey!==h)return[at,_("table.Sortable")];switch(S?.sortState?.direction){case"ascending":return[Wt,_("table.SortedAscending")];case"descending":return[Aa,_("table.SortedDescending")];default:return[at,_("table.Sortable")]}},[v,R]=H();return e.jsx(d,{ref:n,id:t,className:y,lang:l,"data-testid":r,scope:g,colSpan:c,children:p?e.jsxs("button",{className:`${Fe.headerCellSortButton} ${x}`.trim(),type:"button",disabled:m,onClick:A,children:[k,e.jsx(w,{svgPath:v,className:Fe.headerCellSortButtonIcon,title:R})]}):k})};wn.displayName="TableHeaderCell";try{wn.displayName="TableHeaderCell",wn.__docgenInfo={description:"",displayName:"TableHeaderCell",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableCellElement>"}},alignment:{defaultValue:{value:"left"},description:"Tekstjustering",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},as:{defaultValue:{value:"th"},description:"HTML-element for cellen",name:"as",required:!1,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}},children:{defaultValue:null,description:"Innhold i cellen",name:"children",required:!1,type:{name:"ReactNode"}},isSortDisabled:{defaultValue:{value:!1},description:`Angir om sorteringsknappen er disabled. Gjelder kun når isSortable er satt
til true.`,name:"isSortDisabled",required:!1,type:{name:"boolean"}},scope:{defaultValue:null,description:"",name:"scope",required:!1,type:{name:"string"}},colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}},isSortable:{defaultValue:{value:!1},description:"Angir om det er mulig å sortere tabellen med",name:"isSortable",required:!1,type:{name:"boolean"}},sortKey:{defaultValue:null,description:"Tekstjustering",name:"sortKey",required:!1,type:{name:"string"}}}}}catch{}const nm=n=>Array.isArray(n)?!n?.some(t=>!s.isValidElement(t)||t.type!==We):s.isValidElement(n)&&n.type===We,We=({ref:n,id:t,className:a="",lang:l,"data-testid":r,expandButtonTitle:i,expandButtonPosition:d="left",expandButtonProps:c,expandableContent:m,expandButtonAriaDescribedby:p,showExpandButtonTitle:g=!1,isExpandable:h=!1,isExpanded:k=!1,onExpand:_,onClose:S,children:b})=>{const u=s.useRef(null);s.useImperativeHandle(n,()=>u.current?.rowRef?.current);const[x,y]=s.useState(k),A=s.useContext(qe),{t:H}=me("ds_tables",{i18n:U});s.useEffect(()=>{y(!1)},[A?.sortState]);const v=()=>{x?S?.():_?.(),y(N=>!N)},R=()=>i||H(g?"tablerow.ExpandText":"tablerow.Expandable");return h?e.jsx(ln,{ref:u,id:t,className:a,lang:l,"data-testid":r,buttonPosition:d,isExpanded:x,iconButtonAriaExpanded:x,rowType:"expand",expandButtonTitle:R(),expandButtonAriaDescribedby:p,expandableContent:m,expandButtonProps:c,showExpandButtonTitle:g,shouldInsertExpandAreaMarkers:nm(m),context:A,svgPath:x?Ma:Ha,onExpandClick:v,children:b}):e.jsx("tr",{ref:n,id:t,className:a,lang:l,"data-testid":r,children:b})};We.displayName="TableRow";try{We.displayName="TableRow",We.__docgenInfo={description:"",displayName:"TableRow",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableRowElement>"}},expandButtonTitle:{defaultValue:{value:"Mer informasjon / Detaljer"},description:`Overstyring av standard title/tekst for expandButton. Default tittel til
utvid-knappen er 'Mer informasjon'. Default tekst, som er synlig når
showExpandButtonTitle er satt til true, er 'Detaljer'.`,name:"expandButtonTitle",required:!1,type:{name:"string"}},expandButtonPosition:{defaultValue:{value:"left"},description:"Posisjonen til ikonet: 'left', 'right'.",name:"expandButtonPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},expandableContent:{defaultValue:null,description:`Innholdet som vises når raden er utvidet. Hvis det ekspanderte innholdet
skal være flere tabellrader som skal aligneres med resten av tabellen så må
radene ikke wrappes i et Fragment. I stedet kan de sendes inn som array.`,name:"expandableContent",required:!1,type:{name:"ReactNode"}},expandButtonAriaDescribedby:{defaultValue:null,description:`Skal settes til radheader sin id dersom rad er ekspanderbar. Dette er for å
tydeliggjøre hvilken rad som ekspanderes`,name:"expandButtonAriaDescribedby",required:!1,type:{name:"string"}},showExpandButtonTitle:{defaultValue:{value:!1},description:"Om utvid-knappen skal ha synlig tekst",name:"showExpandButtonTitle",required:!1,type:{name:"boolean"}},expandButtonProps:{defaultValue:null,description:`Andre props som sendes videre expandButton. Se Button-komponenten for
api-dokumentasjon.`,name:"expandButtonProps",required:!1,type:{name:'DistributiveOmit<ButtonProps, "children" | "onClick" | "ref">'}},isExpandable:{defaultValue:{value:!1},description:"Avgjør om raden kan utvides",name:"isExpandable",required:!1,type:{name:"boolean"}},isExpanded:{defaultValue:{value:!1},description:"Brukes til å styre ekspandert tilstand utenfor komponenten",name:"isExpanded",required:!1,type:{name:"boolean"}},onExpand:{defaultValue:null,description:"Callback når raden utvides",name:"onExpand",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Callback når raden lukkes",name:"onClose",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Innholdet i raden",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const tm="_sum_16rlo_1",am="_sum_topSeparator_16rlo_5",yt={sum:tm,sum_topSeparator:am},rm=()=>U.t("ds_tables:tablesum.Sum"),Dn=({ref:n,id:t,className:a,lang:l,"data-testid":r,labelAlignment:i="left",valueAlignment:d="right",colSpan:c,hasTopSeparator:m=!1,sumText:p=rm(),children:g})=>{const h=`${yt.sum} ${m?yt.sum_topSeparator:""}`.trim();return e.jsx("tfoot",{id:t,className:a,lang:l,"data-testid":r,children:e.jsxs(We,{ref:n,children:[e.jsx(Je,{className:h,as:"th",alignment:i,colSpan:c,children:p}),s.Children.map(g,k=>e.jsx(Je,{className:h,alignment:d,children:k}))]})})};Dn.displayName="TableSum";try{Dn.displayName="TableSum",Dn.__docgenInfo={description:"",displayName:"TableSum",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableRowElement>"}},sumText:{defaultValue:{value:"getDefaultTableSumText()"},description:"Overskriver default tekst i raden",name:"sumText",required:!1,type:{name:"string"}},labelAlignment:{defaultValue:{value:"left"},description:"Tekstjustering for tekst i sumrad",name:"labelAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},valueAlignment:{defaultValue:{value:"right"},description:"Tekstjustering for verdi i sumrad",name:"valueAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},hasTopSeparator:{defaultValue:{value:!1},description:"Skal det vises strek over sum",name:"hasTopSeparator",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Innholdet i datacellen til sum",name:"children",required:!1,type:{name:"ReactNode"}},colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const om=(n,t,a)=>{if(!n)return"";switch(t?.direction){case"ascending":return a("table.SortedAscending");case"descending":return a("table.SortedDescending");case"none":return a("table.NotSorted");default:return""}},sm="_wrapper_f3ntq_5",lm="_wrapper_fadeLeft_f3ntq_10",im="_table_f3ntq_15",dm="_tableCaption_f3ntq_23",cm="_tableCaption_small_f3ntq_29",mm="_tableCaption_medium_f3ntq_29",um="_tableCaption_large_f3ntq_29",pm="_tableCaption_extraSmall_f3ntq_32",gm="_table_fullWidth_f3ntq_36",fm="_table_medium_f3ntq_39",hm="_table_large_f3ntq_39",vm="_table_extraSmall_f3ntq_42",bm="_table_small_f3ntq_42",_m="_hidden_f3ntq_46",Ce={wrapper:sm,wrapper_fadeLeft:lm,table:im,tableCaption:dm,tableCaption_small:cm,tableCaption_medium:mm,tableCaption_large:um,tableCaption_extraSmall:pm,table_fullWidth:gm,table_medium:fm,table_large:hm,table_extraSmall:vm,table_small:bm,hidden:_m},o=({ref:n,id:t,className:a="",lang:l,"data-testid":r,caption:i,rowInEditModeId:d,size:c=ft,sortState:m,canBeManuallyFocused:p=!1,hasFullWidth:g=!1,showCaption:h=!1,setSortState:k,children:_})=>{const S=s.useRef(null),b=s.useRef(void 0),[u,x]=s.useState(!1),[y,A]=s.useState(!1),[H,v]=s.useState(!1),[R,N]=s.useState(d),Y=d??R;i===""&&console.error("Empty string is not a valid caption.");const{t:Z}=me("ds_tables",{i18n:U}),O=`${Ce.table} ${g?Ce.table_fullWidth:""} ${Ce[`table_${c}`]} ${a}`.trim(),W=`${Ce.tableCaption} ${h?"":Ce.hidden} ${Ce[`tableCaption_${c}`]}`.trim(),xe=`${u?Ce.wrapper:""} ${H?Ce.wrapper_fadeLeft:""}`.trim();return s.useEffect(()=>{const j=S.current,J=()=>{const Q=j?.scrollLeft||0,ee=j?.scrollWidth||0,ne=j?.clientWidth||0,ke=Q+ne/2>ee/2;v(ke)};return j?.addEventListener("scroll",J),()=>{j?.removeEventListener("scroll",J)}},[]),s.useEffect(()=>{const j=Q=>{const ee=S?.current?.scrollWidth??0,ne=Math.round(Q.contentBoxSize[0].inlineSize??0);x(ee>ne+1)},J=new ResizeObserver(Q=>{requestAnimationFrame(()=>{for(const ee of Q)j(ee)})});return S.current&&J.observe(S.current),()=>{J.disconnect()}},[]),s.useEffect(()=>{b.current&&clearTimeout(b.current),A(!0),b.current=setTimeout(()=>{A(!1),b.current=void 0},3e3)},[m]),e.jsx(qe.Provider,{value:{sortState:m,setSortState:k,size:c,rowInEditModeId:Y,setRowInEditModeId:N},children:e.jsxs("div",{ref:S,className:xe,tabIndex:u?0:void 0,children:[e.jsxs("table",{ref:n,id:t,className:O,lang:l,"data-testid":r,tabIndex:p?-1:void 0,children:[e.jsx("caption",{className:W,children:i}),_]}),m&&e.jsx("div",{className:Ce.hidden,"aria-live":"polite",children:om(y,m,Z)})]})})};o.displayName="Table";o.Header=Rn;o.Header.displayName="Table.Header";o.HeaderCell=wn;o.HeaderCell.displayName="Table.HeaderCell";o.Row=We;o.Row.displayName="Table.Row";o.EditableRow=Pn;o.EditableRow.displayName="Table.EditableRow";o.DataCell=Je;o.DataCell.displayName="Table.DataCell";o.Body=Cn;o.Body.displayName="Table.Body";o.Sum=Dn;o.Sum.displayName="Table.Sum";try{o.displayName="Table",o.__docgenInfo={description:"Table",displayName:"Table",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableElement>"}},caption:{defaultValue:null,description:"Table caption",name:"caption",required:!0,type:{name:"string"}},size:{defaultValue:{value:"large"},description:"Definerer størrelse på tabellen.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"extraSmall"'},{value:'"medium"'},{value:'"large"'}]}},sortState:{defaultValue:null,description:"Holder styr på sortering av kolonner",name:"sortState",required:!1,type:{name:"SortState"}},hasFullWidth:{defaultValue:{value:!1},description:`Styrer om tabellen skal ta opp full bredde eller tilpasse seg størrelsen på
innholdet`,name:"hasFullWidth",required:!1,type:{name:"boolean"}},showCaption:{defaultValue:{value:!1},description:"Gjør caption synlig",name:"showCaption",required:!1,type:{name:"boolean"}},setSortState:{defaultValue:null,description:"Oppdaterer sorteringstilstand når sorterbar kolonneheader klikkes",name:"setSortState",required:!1,type:{name:"Dispatch<SetStateAction<SortState>>"}},rowInEditModeId:{defaultValue:null,description:"Id til rad som skal være i redigeringsmodus når tabellen rendres.",name:"rowInEditModeId",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Innholdet i tabellen",name:"children",required:!1,type:{name:"ReactNode"}},canBeManuallyFocused:{defaultValue:{value:!1},description:"Lar komponenten være fokuserbar ved å sett tabIndex: -1",name:"canBeManuallyFocused",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{o.Header.displayName="Table.Header",o.Header.__docgenInfo={description:"",displayName:"Table.Header",props:{className:{defaultValue:null,description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableSectionElement>"}}}}}catch{}try{o.HeaderCell.displayName="Table.HeaderCell",o.HeaderCell.__docgenInfo={description:"",displayName:"Table.HeaderCell",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableCellElement>"}},alignment:{defaultValue:{value:"left"},description:"Tekstjustering",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},as:{defaultValue:{value:"th"},description:"HTML-element for cellen",name:"as",required:!1,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}},children:{defaultValue:null,description:"Innhold i cellen",name:"children",required:!1,type:{name:"ReactNode"}},isSortDisabled:{defaultValue:{value:!1},description:`Angir om sorteringsknappen er disabled. Gjelder kun når isSortable er satt
til true.`,name:"isSortDisabled",required:!1,type:{name:"boolean"}},scope:{defaultValue:null,description:"",name:"scope",required:!1,type:{name:"string"}},colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}},isSortable:{defaultValue:{value:!1},description:"Angir om det er mulig å sortere tabellen med",name:"isSortable",required:!1,type:{name:"boolean"}},sortKey:{defaultValue:null,description:"Tekstjustering",name:"sortKey",required:!1,type:{name:"string"}}}}}catch{}try{o.Row.displayName="Table.Row",o.Row.__docgenInfo={description:"",displayName:"Table.Row",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableRowElement>"}},expandButtonTitle:{defaultValue:{value:"Mer informasjon / Detaljer"},description:`Overstyring av standard title/tekst for expandButton. Default tittel til
utvid-knappen er 'Mer informasjon'. Default tekst, som er synlig når
showExpandButtonTitle er satt til true, er 'Detaljer'.`,name:"expandButtonTitle",required:!1,type:{name:"string"}},expandButtonPosition:{defaultValue:{value:"left"},description:"Posisjonen til ikonet: 'left', 'right'.",name:"expandButtonPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},expandableContent:{defaultValue:null,description:`Innholdet som vises når raden er utvidet. Hvis det ekspanderte innholdet
skal være flere tabellrader som skal aligneres med resten av tabellen så må
radene ikke wrappes i et Fragment. I stedet kan de sendes inn som array.`,name:"expandableContent",required:!1,type:{name:"ReactNode"}},expandButtonAriaDescribedby:{defaultValue:null,description:`Skal settes til radheader sin id dersom rad er ekspanderbar. Dette er for å
tydeliggjøre hvilken rad som ekspanderes`,name:"expandButtonAriaDescribedby",required:!1,type:{name:"string"}},showExpandButtonTitle:{defaultValue:{value:!1},description:"Om utvid-knappen skal ha synlig tekst",name:"showExpandButtonTitle",required:!1,type:{name:"boolean"}},expandButtonProps:{defaultValue:null,description:`Andre props som sendes videre expandButton. Se Button-komponenten for
api-dokumentasjon.`,name:"expandButtonProps",required:!1,type:{name:'DistributiveOmit<ButtonProps, "children" | "onClick" | "ref">'}},isExpandable:{defaultValue:{value:!1},description:"Avgjør om raden kan utvides",name:"isExpandable",required:!1,type:{name:"boolean"}},isExpanded:{defaultValue:{value:!1},description:"Brukes til å styre ekspandert tilstand utenfor komponenten",name:"isExpanded",required:!1,type:{name:"boolean"}},onExpand:{defaultValue:null,description:"Callback når raden utvides",name:"onExpand",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"Callback når raden lukkes",name:"onClose",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Innholdet i raden",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{o.EditableRow.displayName="Table.EditableRow",o.EditableRow.__docgenInfo={description:"",displayName:"Table.EditableRow",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableRowElement>"}},editButtonRef:{defaultValue:null,description:`Ref til redigeringsknappen. Kan brukes til å sette fokus i avanserte tabeller hvor den innebyggede
fokushåndteringen ikke er tilstrekkelig.`,name:"editButtonRef",required:!1,type:{name:"Ref<HTMLButtonElement>"}},editableContentRef:{defaultValue:null,description:`Ref til innholdet til rad i redigeringsmodus. Kan brukes til å sette fokus i avanserte tabeller hvor den innebyggede
fokushåndteringen ikke er tilstrekkelig.`,name:"editableContentRef",required:!1,type:{name:"Ref<HTMLSpanElement>"}},editableContent:{defaultValue:null,description:`rendrer innholdet i redigeringsmodus
@param closeEditing kalles for å lukke raden som redigeres`,name:"editableContent",required:!1,type:{name:"((closeEditing: () => void) => ReactNode)"}},editButtonAriaDescribedby:{defaultValue:null,description:`Skal settes til radheader sin id dersom rad er ekspanderbar.
 Dette er for å tydeliggjøre hvilken rad som ekspanderes`,name:"editButtonAriaDescribedby",required:!1,type:{name:"string"}},editButtonPosition:{defaultValue:{value:"left"},description:"Posisjonen til ikonet: 'left', 'right'.",name:"editButtonPosition",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'}]}},isNew:{defaultValue:{value:!1},description:"Angir om raden er en ny rad for å legge til data i tabellen.\nNår `true`, rendres raden med tilpasset utseende for å legge til nye data,\nog fjerner skjult hjelpetekst til skjermleser om redigering av raden og redigering av data.",name:"isNew",required:!1,type:{name:"boolean"}},onEdit:{defaultValue:null,description:"Callback når redigerknappen trykkes.",name:"onEdit",required:!1,type:{name:"(() => void)"}},children:{defaultValue:null,description:"Innhold i raden",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{o.DataCell.displayName="Table.DataCell",o.DataCell.__docgenInfo={description:"",displayName:"Table.DataCell",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableCellElement>"}},alignment:{defaultValue:{value:"left"},description:"Tekstjustering",name:"alignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},as:{defaultValue:{value:"td"},description:"HTML-element for cellen",name:"as",required:!1,type:{name:"enum",value:[{value:'"td"'},{value:'"th"'}]}},children:{defaultValue:null,description:"Innhold i cellen",name:"children",required:!1,type:{name:"ReactNode"}},scope:{defaultValue:null,description:"",name:"scope",required:!1,type:{name:"string"}},colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:"number"}},rowSpan:{defaultValue:null,description:"",name:"rowSpan",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}try{o.Body.displayName="Table.Body",o.Body.__docgenInfo={description:"",displayName:"Table.Body",props:{className:{defaultValue:null,description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"",name:"children",required:!1,type:{name:"ReactNode"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableSectionElement>"}}}}}catch{}try{o.Sum.displayName="Table.Sum",o.Sum.__docgenInfo={description:"",displayName:"Table.Sum",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLTableRowElement>"}},sumText:{defaultValue:{value:"getDefaultTableSumText()"},description:"Overskriver default tekst i raden",name:"sumText",required:!1,type:{name:"string"}},labelAlignment:{defaultValue:{value:"left"},description:"Tekstjustering for tekst i sumrad",name:"labelAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},valueAlignment:{defaultValue:{value:"right"},description:"Tekstjustering for verdi i sumrad",name:"valueAlignment",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"left"'},{value:'"right"'}]}},hasTopSeparator:{defaultValue:{value:!1},description:"Skal det vises strek over sum",name:"hasTopSeparator",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"Innholdet i datacellen til sum",name:"children",required:!1,type:{name:"ReactNode"}},colSpan:{defaultValue:null,description:"",name:"colSpan",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Html class attributt til noden.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Html id attributt.",name:"id",required:!1,type:{name:"string"}},lang:{defaultValue:null,description:"Html lang attributt.",name:"lang",required:!1,type:{name:"string"}},"data-testid":{defaultValue:null,description:"Html data attributt som brukes for tester.",name:"data-testid",required:!1,type:{name:"string"}}}}}catch{}const xm="_triggerSpacing_1349z_1",km={triggerSpacing:xm};function Sm(){const n="popover-files-cell";return e.jsxs(o,{caption:"Oppgaver",children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{children:"Referansenummer"}),e.jsx(o.HeaderCell,{children:"Dato"}),e.jsx(o.HeaderCell,{children:"Filer"}),e.jsx(o.HeaderCell,{children:"Brev"}),e.jsx(o.HeaderCell,{children:"Vedtak"})]})}),e.jsxs(o.Body,{children:[e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:"Wake Up Call"}),e.jsx(o.DataCell,{children:"10.01.2024"}),e.jsx(o.DataCell,{children:"3 filer"}),e.jsx(o.DataCell,{children:"4 brev"}),e.jsx(o.DataCell,{children:"5 vedtak"})]}),e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:"A Cat Nap"}),e.jsx(o.DataCell,{children:"09.01.2024"}),e.jsxs(o.DataCell,{children:[e.jsx("span",{id:n,children:"12 filer"}),e.jsxs(F,{position:"bottomStart",color:"ochre",children:[e.jsx(F.Trigger,{ariaDescribedby:n,size:"small",className:km.triggerSpacing}),e.jsx(F.Content,{children:"Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret består av en bokstav etterfulgt av fire tall, f.eks. H0101."})]})]}),e.jsx(o.DataCell,{children:"4 brev"}),e.jsx(o.DataCell,{children:"5 vedtak"})]}),e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:"Down and Out"}),e.jsx(o.DataCell,{children:"08.01.2024"}),e.jsx(o.DataCell,{children:"3 filer"}),e.jsx(o.DataCell,{children:"4 brev"}),e.jsx(o.DataCell,{children:"5 vedtak"})]})]})]})}const ym=Object.freeze(Object.defineProperty({__proto__:null,default:Sm},Symbol.toStringTag,{value:"Module"}));function jm(){return e.jsxs(F,{children:[e.jsx(F.Trigger,{title:"Vis forklaring"}),e.jsx(F.Content,{children:e.jsx(f,{children:"Popover brukes til korte forklaringer ved behov."})})]})}const Tm=Object.freeze(Object.defineProperty({__proto__:null,default:jm},Symbol.toStringTag,{value:"Module"}));function Em(){const[n,t]=s.useState("");return e.jsxs(V,{variant:"horizontal",legend:"Har du sendt inn skattemeldingen?",value:n,required:!0,onChange:a=>t(a.target.value),children:[e.jsx(V.Radio,{value:"ja",children:"Ja"}),e.jsx(V.Radio,{value:"nei",children:"Nei"})]})}const Cm=Object.freeze(Object.defineProperty({__proto__:null,default:Em},Symbol.toStringTag,{value:"Module"}));function Pm(){const[n,t]=s.useState(""),[a,l]=s.useState("Svar på om du har sendt inn skattemeldingen.");return e.jsxs(V,{variant:"horizontal",legend:"Har du sendt inn skattemeldingen?",value:n,errorMessage:a,required:!0,onChange:r=>{t(r.target.value),l("")},children:[e.jsx(V.Radio,{value:"ja",children:"Ja"}),e.jsx(V.Radio,{value:"nei",children:"Nei"})]})}const Rm=Object.freeze(Object.defineProperty({__proto__:null,default:Pm},Symbol.toStringTag,{value:"Module"}));function wm(){return e.jsxs(V,{legend:"Type virksomhet",value:"selskap",readOnly:!0,onChange:()=>{},children:[e.jsx(V.Radio,{value:"foretak",children:"Enkeltpersonsforetak"}),e.jsx(V.Radio,{value:"selskap",children:"Aksjeselskap"}),e.jsx(V.Radio,{value:"annet",children:"Annet"})]})}const Dm=Object.freeze(Object.defineProperty({__proto__:null,default:wm},Symbol.toStringTag,{value:"Module"}));function Nm(){const[n,t]=s.useState("skattemelding");return e.jsxs(V,{legend:"Hva trenger du hjelp til?",value:n,onChange:a=>t(a.target.value),children:[e.jsx(V.Radio,{value:"skattemelding",children:"Levere eller endre skattemelding for privatperson"}),e.jsx(V.Radio,{value:"skattekort",children:"Bestille, endre eller kontrollere skattekort"}),e.jsx(V.Radio,{value:"fradrag",children:"Få oversikt over fradrag, dokumentasjon og satser"}),e.jsx(V.Radio,{value:"betaling",children:"Betale restskatt eller søke om betalingsordning"})]})}const Lm=Object.freeze(Object.defineProperty({__proto__:null,default:Nm},Symbol.toStringTag,{value:"Module"}));function Om(){return e.jsxs(e.Fragment,{children:[e.jsx(tn,{user:{name:"Ola Nordmann",role:"meg",identifier:On("12345678901")}}),e.jsx("main",{children:e.jsx(f,{children:"Hovedinnhold"})})]})}const Im=Object.freeze(Object.defineProperty({__proto__:null,default:Om},Symbol.toStringTag,{value:"Module"}));function Bm(){return e.jsx(tn,{user:{name:"Kari Nordmann",role:"andre",identifier:On("10101012345")}})}const Am=Object.freeze(Object.defineProperty({__proto__:null,default:Bm},Symbol.toStringTag,{value:"Module"})),Mm={name:"Ola Nordmann",personId:"10101012345",dateOfBirth:new Date("1984-02-13"),type:"Person"},Hm={total:2,list:[{name:"Nordmann Regnskap AS",organizationNumber:"123456789",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Nordmann Regnskap AS Avd. Oslo",organizationNumber:"123456790",isDeleted:!1,unitType:"BEDR",type:"Organization",mainOrganizationNumber:"123456789"}]},{name:"Nordmann Konsulenttjenester ENK",organizationNumber:"987654321",isDeleted:!1,unitType:"ENK",type:"Organization"}]},Vm={total:1,list:[{name:"Kari Nordmann",personId:"12039012345",dateOfBirth:new Date("1990-03-12"),type:"Person",isDeleted:!1}]};function Fm(){const n=s.useRef(null),[t,a]=s.useState("Ingen valgt enda");return e.jsxs(e.Fragment,{children:[e.jsx(C,{onClick:()=>n.current?.showModal(),children:"Åpne representasjonsvelger"}),e.jsx(f,{hasSpacing:!0,children:`Valgt representasjon: ${t}`}),e.jsx(_e,{ref:n,me:Mm,businesses:Hm,people:Vm,showDeceasedPeople:!1,onEntitySelect:async l=>{a(l.name),n.current?.close()}})]})}const zm=Object.freeze(Object.defineProperty({__proto__:null,default:Fm},Symbol.toStringTag,{value:"Module"}));function Gm(){return e.jsxs(e.Fragment,{children:[e.jsx(f,{hasSpacing:!0,children:"ScrollToTopButton er ment å dukke opp til nede til høyre når man scroller nedover på en side. Her er den synlig hele tiden siden visibilityThreshold er satt til 0."}),e.jsx(Va,{visibilityThreshold:0})]})}const Km=Object.freeze(Object.defineProperty({__proto__:null,default:Gm},Symbol.toStringTag,{value:"Module"})),$m="_container_45kb6_1",qm={container:$m},jt=()=>{window.location.hash="treffliste"},Jm=!0;function Wm(){const[n,t]=s.useState(""),[a,l]=s.useState(""),r=d=>{jt()},i=d=>{jt()};return e.jsxs("div",{className:qm.container,children:[e.jsx($e,{label:"Søk med ikonknapp",value:n,enableSRNavigationHint:!1,hideLabel:!1,hasSearchButtonIcon:Jm,onChange:d=>t(d.target.value),onClear:()=>t(""),onSearch:i,onSearchClick:r}),e.jsx($e,{label:"Søk med tekstknapp",value:a,hasSearchButtonIcon:!1,enableSRNavigationHint:!1,hideLabel:!1,onChange:d=>l(d.target.value),onClear:()=>l(""),onSearch:i,onSearchClick:r})]})}const Xm=Object.freeze(Object.defineProperty({__proto__:null,default:Wm},Symbol.toStringTag,{value:"Module"})),Um=[{title:"Sak 24/10231",description:"Gå til sak 24/10231"},{title:"Sak 24/10387",description:"Gå til sak 24/10387"},{title:"Sak 24/10995",description:"Gå til sak 24/10995"},{title:"Sak 24/11200",description:"Gå til sak 24/11200"}];function Zm(){const[n,t]=s.useState(""),a=r=>{window.alert(`Går til saksside: ${r}`),window.location.hash=`sak-${r}`},l=s.useMemo(()=>{if(!(n.length<1))return er(Um,n)},[n]);return e.jsx($e,{label:"Gå til sak",value:n,results:l,placeholder:"Skriv saksnummer",hideLabel:!1,onChange:r=>t(r.target.value),onClear:()=>{t("")},onResultClick:r=>{const i=r.title?.replace("Sak ","")??"ukjent";a(i)},onSearch:(r,i)=>{i&&a(i)},onSearchClick:(r,i)=>{i&&a(i)}})}const Ym=Object.freeze(Object.defineProperty({__proto__:null,default:Zm},Symbol.toStringTag,{value:"Module"})),Qm="_container_45kb6_1",eu={container:Qm};function nu(){return e.jsxs("div",{className:eu.container,children:[e.jsx($e,{label:"Søk (medium)",size:"medium",hideLabel:!1}),e.jsx($e,{label:"Søk (large)",size:"large",hideLabel:!1}),e.jsx($e,{label:"Søk (extraLarge)",size:"extraLarge",hideLabel:!1})]})}const tu=Object.freeze(Object.defineProperty({__proto__:null,default:nu},Symbol.toStringTag,{value:"Module"}));function au(){const[n,t]=s.useState("");return e.jsxs(he,{label:"Fruktsort",value:n,hideLabel:!1,onChange:a=>t(a.target.value),children:[e.jsx(he.Option,{value:"banan",children:"Banan"}),e.jsx(he.Option,{value:"eple",children:"Eple"}),e.jsx(he.Option,{value:"kiwi",children:"Kiwi"}),e.jsx(he.Option,{value:"paere",children:"Pære"}),e.jsx(he.Option,{value:"sitron",children:"Sitron"})]})}const ru=Object.freeze(Object.defineProperty({__proto__:null,default:au},Symbol.toStringTag,{value:"Module"})),ou="_container_48vha_1",su="_darkBackground_48vha_8",Tt={container:ou,darkBackground:su};function lu(){return e.jsxs("div",{className:Tt.container,children:[e.jsx(je,{children:"Laster inn"}),e.jsx(je,{color:"interactive",children:"Laster inn"}),e.jsx("div",{className:Tt.darkBackground,children:e.jsx(je,{color:"white",children:"Laster inn"})})]})}const iu=Object.freeze(Object.defineProperty({__proto__:null,default:lu},Symbol.toStringTag,{value:"Module"}));function du(){const[n,t]=s.useState(!1),[a,l]=s.useState(0),r=s.useRef(void 0);return s.useEffect(()=>{a===100&&r.current&&(clearInterval(r.current),r.current=void 0)},[a]),s.useEffect(()=>()=>{r.current&&clearInterval(r.current)},[]),e.jsxs(e.Fragment,{children:[e.jsx(C,{onClick:()=>{l(0),t(!n),r.current&&(clearInterval(r.current),r.current=void 0),r.current=setInterval(()=>{l(i=>i>=100?0:i+10)},1e3)},children:"Toggle spinner"}),n&&e.jsx(je,{percentComplete:a,className:"bottomSpacingXL",size:"large",color:"interactive",titlePosition:"right"})]})}const cu=Object.freeze(Object.defineProperty({__proto__:null,default:du},Symbol.toStringTag,{value:"Module"})),mu="_container_6nuzr_1",uu={container:mu};function pu(){return e.jsxs("div",{className:uu.container,children:[e.jsx(je,{size:"small",children:"Small"}),e.jsx(je,{size:"medium",children:"Medium"}),e.jsx(je,{size:"large",children:"Large"}),e.jsx(je,{size:"extraLarge",children:"Extra large"})]})}const gu=Object.freeze(Object.defineProperty({__proto__:null,default:pu},Symbol.toStringTag,{value:"Module"})),fu="_container_6nuzr_1",hu={container:fu};function vu(){return e.jsxs("div",{className:hu.container,children:[e.jsx(je,{titlePosition:"right",children:"Tittel til hoyre"}),e.jsx(je,{titlePosition:"bottom",children:"Tittel under"})]})}const bu=Object.freeze(Object.defineProperty({__proto__:null,default:vu},Symbol.toStringTag,{value:"Module"}));function _u(){const n=s.useId(),[t,a]=s.useState(1),[l,r]=s.useState(void 0),[i,d]=s.useState(!1),c=()=>{const m=t+1;a(m)};return e.jsxs(ce,{children:[t>=1&&e.jsx(ce.Step,{id:`${n}-1`,variant:t===1?"active":"passive",title:"Hva holder du på med?",stepNumber:1,shouldAutoFocusWhenActive:!1,onEdit:t>1&&t<5?()=>a(1):void 0,onNext:c,children:"Varer og tjenester"}),t>=2&&e.jsx(ce.Step,{id:`${n}-2`,variant:t===2?"active":"passive",title:"Hva gjør du?",stepNumber:2,onEdit:t>2&&t<5?()=>a(2):void 0,onNext:c,children:"Selger"}),t>=3&&e.jsx(ce.Step,{id:`${n}-3`,variant:t===3?"active":"passive",title:"Selger du varer og tjenester for egen regning?",stepNumber:3,onEdit:t>3&&t<5?()=>a(2):void 0,onNext:()=>{l?c():d(!0)},children:t===3?e.jsxs(e.Fragment,{children:[e.jsxs(V,{legend:"Selger du varer og tjenester for egen regning og risiko?",errorMessage:i?"Kryss av hvorvidt du selger varer  og tjenester":void 0,hideLegend:!0,onChange:m=>{d(!1),r(m.target.value)},children:[e.jsx(V.Radio,{id:"step3radio",value:"ja",children:"Ja"}),e.jsx(V.Radio,{value:"nei",children:"Nei"})]}),e.jsxs(De,{title:"Hva mener vi med egen regning og risiko?",size:"small",children:[e.jsxs(f,{hasSpacing:!0,children:["At du driver for egen regning og risiko innebærer at det er du som har det økonomiske ansvaret for gjeld og forpliktelser. Det innebærer også at det er du som dekker kostnadene i virksomheten, for eksempel kostnader til materiale eller andre driftskostnader."," "]}),e.jsx(f,{children:"I tillegg vil du ha det kontraktsmessige ansvaret for at oppdrag blir utført og ansvar for å dekke et eventuelt underskudd."})]}),e.jsx(Ke,{showErrorSummary:i,children:e.jsx(Ke.Error,{referenceId:"step3radio",children:"Selger du varer og tjenester for egen regning?"})})]}):e.jsx("div",{children:l})}),t>=4&&e.jsx(ce.Step,{id:`${n}-4`,variant:t===4?"active":"passive",title:"Oppsummering før innsending",stepNumber:4,onNext:c,children:t===4?e.jsx(G,{color:"ochre",children:e.jsxs(G.Content,{children:[e.jsxs(K,{children:[e.jsx(K.Element,{children:"Du jobber med varer og tjenester"}),e.jsx(K.Element,{children:"Du selger"}),e.jsx(K.Element,{children:"Du selger for egen regning og risiko"})]}),e.jsx(Oe,{children:"Jeg bekrefter at opplysningene ovenfor stemmer"})]})}):e.jsx("div",{children:"Oppsummering"})}),t>=5&&l==="ja"&&e.jsxs(ce.Step,{id:`${n}-5`,title:"Vårt veiledende svar",variant:"positiveResult",stepNumber:5,introTitle:"Virksomheten skal registreres som særavgiftspliktig.",introTitleAs:"h4",introContent:e.jsx(f,{children:"For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere."}),children:[e.jsx(f,{children:"Du må gjøre følgende:"}),e.jsxs(K,{as:"ol",children:[e.jsx(K.Element,{children:"Du må bestemme hvilken organisasjonsform som passer best."}),e.jsxs(K.Element,{children:["Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet","registermelding"]}),e.jsxs(K.Element,{children:["Dersom bedriften din har avgiftspliktig omsetning og/eller uttak","overstiger kr 50 000 i løpet av en 12 måneders periode, må du","registrere virksomheten i Merverdiavgiftsregisteret."]})]})]}),t>=5&&l==="nei"&&e.jsx(ce.Step,{id:`${n}-5`,title:"Nøytralt resultat",variant:"neutralResult",stepNumber:5,children:"Mer brødtekst"})]})}const xu=Object.freeze(Object.defineProperty({__proto__:null,default:_u},Symbol.toStringTag,{value:"Module"}));function ku(){const[n,t]=s.useState(new Set),[a,l]=s.useState(new Set),r=[{id:"abcd",firma:"Bluth Company",timestamp:"08.04.2020 11:31:57",status:"Under behandling",eta:"Mer enn 1 dag"},{id:"ijkl",firma:"Business Engros",timestamp:"08.04.2020 11:32:16",status:"Under behandling",eta:"23 min"},{id:"uvwx",firma:"Corwood Industries",timestamp:"08.04.2020 11:32:16",status:"Ferdig",eta:"-"},{id:"cdef",firma:"Limerick Partner",timestamp:"08.04.2020 11:32:47",status:"Ferdig",eta:"-"}],i=c=>{t(m=>new Set(m).add(c))},d=async c=>{l(m=>new Set(m).add(c)),await new Promise(m=>{setTimeout(()=>{m()},2e3)}),l(m=>{const p=new Set(m);return p.delete(c),p}),t(m=>{const p=new Set(m);return p.delete(c),p})};return e.jsxs(o,{caption:"Oppgaver",children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{sortKey:"firma",scope:"col",isSortable:!0,children:"Firma"}),e.jsx(o.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(o.HeaderCell,{scope:"col",children:"Status"}),e.jsx(o.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(o.HeaderCell,{as:"td"})]})}),e.jsx(o.Body,{children:r.map(c=>{const m=n.has(c.id),p=a.has(c.id);return e.jsxs(o.Row,{expandButtonPosition:"right",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:c.id,expandButtonTitle:m?"Lagre og lukk":"Apne oppgave",expandButtonProps:{svgPath:m?aa:dn,hasSpinner:p,disabled:p},isExpanded:m,isExpandable:!0,onExpand:()=>i(c.id),onClose:()=>d(c.id),children:[e.jsx(o.DataCell,{id:c.id,children:c.firma}),e.jsx(o.DataCell,{children:c.timestamp}),e.jsx(o.DataCell,{children:c.status}),e.jsx(o.DataCell,{children:c.eta})]},c.id)})})]})}const Su=Object.freeze(Object.defineProperty({__proto__:null,default:ku},Symbol.toStringTag,{value:"Module"}));function yu(){const[n,t]=s.useState({direction:"none"}),l=[{month:"Januar",amount:5426,coverage:"100 %",revenue:"1000",id:"9f78"},{month:"Februar",amount:5432,coverage:"50 %",revenue:"500",id:"6925"},{month:"Mars",amount:4899,coverage:"20 %",revenue:"2000",id:"fc9d"},{month:"April",amount:2344,coverage:"30 %",revenue:"1055",id:"1d15"}].slice().sort((r,i)=>{const d=n.sortKey;return!d||r[d]===i[d]?0:n.direction==="ascending"?r[d]>i[d]?1:-1:r[d]<i[d]?1:-1});return e.jsxs(o,{sortState:n,setSortState:t,caption:"Månedsoversikt",children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{as:"td"}),e.jsx(o.HeaderCell,{alignment:"right",scope:"col",children:"Måned"}),e.jsx(o.HeaderCell,{scope:"col",sortKey:"amount",isSortable:!0,children:"Beløp"}),e.jsx(o.HeaderCell,{scope:"col",children:"Dekningsgrad"}),e.jsx(o.HeaderCell,{alignment:"right",scope:"col",children:"Avkastning"})]})}),e.jsx(o.Body,{children:l.map(r=>e.jsxs(o.EditableRow,{editableContent:i=>e.jsx("div",{className:"emptyExpandedTableRow",children:e.jsx(C,{onClick:()=>{i()},children:"Lukk"})}),editButtonAriaDescribedby:r.id,onEdit:()=>{console.log("redigerrer rad")},children:[e.jsx(o.DataCell,{id:r.id,alignment:"right",children:r.month}),e.jsx(o.DataCell,{alignment:"right",children:r.amount}),e.jsx(o.DataCell,{children:r.coverage}),e.jsx(o.DataCell,{alignment:"right",children:r.revenue})]},r.id))})]})}const ju=Object.freeze(Object.defineProperty({__proto__:null,default:yu},Symbol.toStringTag,{value:"Module"}));function Tu(){const[n,t]=s.useState({direction:"none"}),l=[{id:"abcd",firma:"Bluth Company",timestamp:"08.04.2020 11:31:57",status:"Under behandling",eta:"Mer enn 1 dag"},{id:"ijkl",firma:"Business Engros",timestamp:"08.04.2020 11:32:16",status:"Under behandling",eta:"23 min"},{id:"uvwx",firma:"Corwood Industries",timestamp:"08.04.2020 11:32:16",status:"Ferdig",eta:"-"},{id:"cdef",firma:"Limerick Partner",timestamp:"08.04.2020 11:32:47",status:"Ferdig",eta:"-"}].slice().sort((r,i)=>{const d=n.sortKey;return!d||r[d]===i[d]?0:n.direction==="ascending"?r[d]>i[d]?1:-1:r[d]<i[d]?1:-1});return e.jsxs(o,{caption:"Firmaoversikt",sortState:n,setSortState:t,children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{sortKey:"firma",scope:"col",isSortable:!0,children:"Firma"}),e.jsx(o.HeaderCell,{scope:"col",children:"Startet"}),e.jsx(o.HeaderCell,{scope:"col",children:"Status"}),e.jsx(o.HeaderCell,{scope:"col",children:"Forventet behandlet"}),e.jsx(o.HeaderCell,{as:"td"})]})}),e.jsx(o.Body,{children:l.map(r=>e.jsxs(o.Row,{expandButtonPosition:"right",expandableContent:e.jsx("div",{className:"emptyExpandedTableRow"}),expandButtonAriaDescribedby:r.id,isExpandable:!0,children:[e.jsx(o.DataCell,{id:r.id,children:r.firma}),e.jsx(o.DataCell,{children:r.timestamp}),e.jsx(o.DataCell,{children:r.status}),e.jsx(o.DataCell,{children:r.eta})]},r.id))})]})}const Eu=Object.freeze(Object.defineProperty({__proto__:null,default:Tu},Symbol.toStringTag,{value:"Module"})),Et=({initialData:n,onSave:t,onCancel:a,validateField:l})=>{const[r,i]=s.useState(n.personNumber),[d,c]=s.useState(n.lastName),[m,p]=s.useState(n.amount),[g,h]=s.useState(""),[k,_]=s.useState(""),[S,b]=s.useState(""),u=(y,A,H)=>{const v=l(y,A);H(v)},x=()=>{const y=l("personNumber",r),A=l("lastName",d),H=l("amount",m);h(y),_(A),b(H),!y&&!A&&!H&&t({personNumber:r,lastName:d,amount:m})};return e.jsxs("div",{className:"editableContent",children:[e.jsxs("div",{className:"flex gapM bottomSpacingXL",children:[e.jsx(q,{label:"Fødselsnummer (11 siffer)",value:r,errorMessage:g,onChange:y=>{i(y.target.value),h("")},onBlur:()=>u("personNumber",r,h)}),e.jsx(q,{label:"Etternavn",value:d,errorMessage:k,onChange:y=>{c(y.target.value),_("")},onBlur:()=>u("lastName",d,_)})]}),e.jsx(q,{label:"Beløp i kroner",className:"textField150 bottomSpacingXL",value:m,errorMessage:S,onChange:y=>{p(y.target.value),b("")},onBlur:()=>u("amount",m,b)}),e.jsxs("div",{className:"flex gapS",children:[e.jsx(C,{onClick:x,children:"Lagre"}),e.jsx(C,{variant:"secondary",onClick:a,children:"Avbryt"})]})]})};function Cu(){const[n,t]=s.useState([{id:"abc",dato:"23.7.2025",personNumber:"14487219408",firstName:"Treliters",lastName:"Geir",amount:"641693"},{id:"def",dato:"23.8.2025",personNumber:"70070903485",firstName:"Ringlete",lastName:"Under",amount:"139914"},{id:"ghi",dato:"23.9.2025",personNumber:"70168226499",firstName:"Uskikka",lastName:"Resistens",amount:"667946"}]),[a,l]=s.useState({direction:"none"}),[r,i]=s.useState(4),[d,c]=s.useState(!1),[m,p]=s.useState(null),g=s.useRef(null),h=s.useRef(null),k=n.slice().sort((b,u)=>{const x=a.sortKey;return!x||b[x]===u[x]?0:a.direction==="ascending"?b[x]>u[x]?1:-1:b[x]<u[x]?1:-1}),_=(b,u)=>{t(x=>x.map(y=>y.id===b?{...y,...u}:y))},S=(b,u)=>{if(b==="personNumber"){if(u.trim()==="")return"Fødselsnummer må fylles ut";if(u.length!==11)return"Fødselsnummer må være 11 siffer"}if(b==="lastName"&&u.trim()==="")return"Etternavn må fylles ut";if(b==="amount"){if(u.trim()==="")return"Beløp må fylles ut";if(u!==""&&Number.isNaN(Number(u)))return"Beløp må være et tall"}return""};return e.jsxs(e.Fragment,{children:[e.jsx(C,{ref:g,className:"bottomSpacingL",onClick:()=>{c(!0),setTimeout(()=>h.current?.focus(),0)},children:"Legg til person"}),e.jsxs(o,{caption:"Personoversikt",rowInEditModeId:d?"addPerson":void 0,sortState:a,setSortState:l,size:"extraSmall",children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{scope:"col",sortKey:"dato",isSortable:!0,children:"Sist endret"}),e.jsx(o.HeaderCell,{scope:"col",children:"Fødselsnummer"}),e.jsx(o.HeaderCell,{scope:"col",children:"Navn"}),e.jsx(o.HeaderCell,{scope:"col",alignment:"right",children:"Beløp"}),e.jsx(o.HeaderCell,{as:"td"})]})}),e.jsxs(o.Body,{children:[d&&e.jsx(o.EditableRow,{id:"addPerson",editButtonPosition:"right",editableContent:b=>e.jsx(Et,{initialData:{personNumber:"",lastName:"",amount:""},validateField:S,onSave:u=>{const x={id:r.toString(),dato:new Date().toLocaleDateString("no-NO"),personNumber:u.personNumber,firstName:"",lastName:u.lastName,amount:u.amount};t(y=>[x,...y]),p(x.id),i(y=>y+1),c(!1),b(),setTimeout(()=>g.current?.focus(),0),setTimeout(()=>p(null),3e3)},onCancel:()=>{c(!1),b(),setTimeout(()=>g.current?.focus(),0)}}),isNew:!0,children:e.jsx(o.DataCell,{colSpan:4,children:e.jsx("div",{ref:h,tabIndex:-1,className:"tabIndexNoOutline",children:"Legg til person"})})}),k.map(b=>e.jsxs(o.EditableRow,{className:b.id===m?"highlightRow":"",editButtonPosition:"right",editableContent:u=>e.jsx(Et,{initialData:{personNumber:b.personNumber,lastName:b.lastName,amount:b.amount},validateField:S,onSave:x=>{_(b.id,{dato:new Date().toLocaleDateString("no-NO"),personNumber:x.personNumber,lastName:x.lastName,amount:x.amount}),u()},onCancel:()=>{u()}}),children:[e.jsx(o.DataCell,{children:b.dato}),e.jsx(o.DataCell,{children:On(b.personNumber)}),e.jsx(o.DataCell,{children:`${b.firstName} ${b.lastName}`}),e.jsx(o.DataCell,{alignment:"right",children:`${b.amount} kr`})]},b.id))]})]})]})}const Pu=Object.freeze(Object.defineProperty({__proto__:null,default:Cu},Symbol.toStringTag,{value:"Module"}));function Ru(){return e.jsxs(o,{caption:"Dette er en ekstra liten tabell",children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(o.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(o.HeaderCell,{scope:"col",children:"Status"})]})}),e.jsxs(o.Body,{children:[e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:"10.03.2023"}),e.jsx(o.DataCell,{children:"Klage på vedtak"}),e.jsxs(o.DataCell,{children:[e.jsx(w,{svgPath:Mt})," ","Fullført"]})]}),e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:"11.04.2023"}),e.jsx(o.DataCell,{children:"Klage på vedtak"}),e.jsxs(o.DataCell,{children:[e.jsx(w,{svgPath:ra})," ","Under arbeid"]})]})]})]})}const wu=Object.freeze(Object.defineProperty({__proto__:null,default:Ru},Symbol.toStringTag,{value:"Module"})),Du="_srOnly_17t1l_1",et={srOnly:Du};function Nu(){const[n,t]=s.useState({direction:"none"}),l=[{deadline:"10.04.2023",task:"Mottatt tilbakemelding",name:"BARMEN OG BORGHEIM",status:"Tilgjengelig",id:"9f78"},{deadline:"12.04.2023",task:"Klage på vedtak",name:"LIMERICKS PARTNER ASA",status:"Ny",id:"4b90"},{deadline:"13.04.2023",task:"Mottatt tilbakemelding",name:"ENCKEL OG WIRCKE LØSNINGER",status:"Ny",id:"8c6f"},{deadline:"15.04.2023",task:"Klage på vedtak",name:"CORWOOD INDUSTRIES NORGE",status:"Tilgjengelig",id:"8182"},{deadline:"22.04.2023",task:"Medhold klage",name:"SLANTED N CHANTED",status:"Under arbeid",id:"85cd"}].slice().sort((r,i)=>{const d=n.sortKey;return!d||r[d]===i[d]?0:n.direction==="ascending"?r[d]>i[d]?1:-1:r[d]<i[d]?1:-1});return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:"Hvis vi har en tabell med minst 3 kolonner uten kolonnetitler så bør vi legge på sr-only tekster som th for at det skulle bli lettere for skjermleserbrukere å forstå tabellen."}),e.jsxs(o,{caption:"Arbeidsoppgaver",sortState:n,setSortState:t,children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{scope:"col",sortKey:"deadline",isSortable:!0,children:"Frist"}),e.jsx(o.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(o.HeaderCell,{alignment:"right",scope:"col",sortKey:"name",isSortable:!0,children:"navn"}),e.jsx(o.HeaderCell,{scope:"col",children:"status"}),e.jsx(o.HeaderCell,{children:e.jsx("span",{className:et.srOnly,children:"Rediger-funksjon"})}),e.jsx(o.HeaderCell,{children:e.jsx("span",{className:et.srOnly,children:"Kopier-funksjon"})}),e.jsx(o.HeaderCell,{children:e.jsx("span",{className:et.srOnly,children:"Slett-funksjon"})})]})}),e.jsx(o.Body,{children:l.map(r=>e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{id:r.id,children:r.deadline}),e.jsx(o.DataCell,{children:r.task}),e.jsx(o.DataCell,{children:r.name}),e.jsx(o.DataCell,{children:r.status}),e.jsx(o.DataCell,{children:e.jsx(re,{svgPath:dn,children:"Rediger"})}),e.jsx(o.DataCell,{children:e.jsx(re,{svgPath:Bn,children:"Kopier"})}),e.jsx(o.DataCell,{children:e.jsx(re,{svgPath:gt,children:"Slett"})})]},r.id))})]})]})}const Lu=Object.freeze(Object.defineProperty({__proto__:null,default:Nu},Symbol.toStringTag,{value:"Module"}));function Ou(){const[n,t]=s.useState({direction:"none"}),l=[{player:"Ole",score:100},{player:"Dole",score:20},{player:"Doffen",score:30}].slice().sort((r,i)=>{const d=n.sortKey;return!d||r[d]===i[d]?0:n.direction==="ascending"?r[d]>i[d]?1:-1:r[d]<i[d]?1:-1});return e.jsxs(o,{sortState:n,setSortState:t,caption:"High scores",children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{scope:"col",sortKey:"player",isSortable:!0,children:"Player"}),e.jsx(o.HeaderCell,{scope:"col",sortKey:"score",isSortable:!0,children:"High Score"})]})}),e.jsx(o.Body,{children:l.map(r=>e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{alignment:"center",children:r.player}),e.jsx(o.DataCell,{alignment:"right",children:r.score})]},r.player))})]})}const Iu=Object.freeze(Object.defineProperty({__proto__:null,default:Ou},Symbol.toStringTag,{value:"Module"}));function Bu(){const n="Klage på vedtak";return e.jsxs(e.Fragment,{children:[e.jsxs("div",{children:["Small",e.jsxs(o,{caption:"Dette er en liten tabell.",size:"small",children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(o.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(o.HeaderCell,{scope:"col",children:"Navn"}),e.jsx(o.HeaderCell,{scope:"col",children:"Status"})]})}),e.jsxs(o.Body,{children:[e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:"10.04.2023"}),e.jsx(o.DataCell,{children:n}),e.jsx(o.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(o.DataCell,{children:"NY"})]}),e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:"10.04.2023"}),e.jsx(o.DataCell,{children:n}),e.jsx(o.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(o.DataCell,{children:"NY"})]})]})]})]}),e.jsxs("div",{children:["Medium",e.jsxs(o,{caption:"Dette er en medium tabell.",size:"medium",children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(o.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(o.HeaderCell,{scope:"col",children:"Navn"}),e.jsx(o.HeaderCell,{scope:"col",children:"Status"})]})}),e.jsxs(o.Body,{children:[e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:"10.04.2023"}),e.jsx(o.DataCell,{children:n}),e.jsx(o.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(o.DataCell,{children:"NY"})]}),e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:"10.04.2023"}),e.jsx(o.DataCell,{children:n}),e.jsx(o.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(o.DataCell,{children:"NY"})]})]})]})]}),e.jsxs("div",{children:["Large",e.jsxs(o,{caption:"Dette er en stor tabell.",size:"large",children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{scope:"col",children:"Frist"}),e.jsx(o.HeaderCell,{scope:"col",children:"Arbeidsoppgave"}),e.jsx(o.HeaderCell,{scope:"col",children:"Navn"}),e.jsx(o.HeaderCell,{scope:"col",children:"Status"})]})}),e.jsxs(o.Body,{children:[e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:"10.04.2023"}),e.jsx(o.DataCell,{children:n}),e.jsx(o.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(o.DataCell,{children:"NY"})]}),e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:"10.04.2023"}),e.jsx(o.DataCell,{children:n}),e.jsx(o.DataCell,{children:"LIMERICK PARTNER ASA"}),e.jsx(o.DataCell,{children:"NY"})]})]})]})]})]})}const Au=Object.freeze(Object.defineProperty({__proto__:null,default:Bu},Symbol.toStringTag,{value:"Module"}));function Mu(){const n=[{fastsatt:"31.01.2018",avgiftstype:"OR",avgiftsgruppe:"525",beloep:"6045",status:"Iverksatt",id:"1"},{fastsatt:"31.05.2018",avgiftstype:"BR",avgiftsgruppe:"525",beloep:"6033",status:"Iverksatt",id:"2"},{fastsatt:"02.03.2018",avgiftstype:"AR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"3"},{fastsatt:"03.03.2018",avgiftstype:"DR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"4"},{fastsatt:"04.01.2018",avgiftstype:"BR",avgiftsgruppe:"525",beloep:"6064",status:"Under arbeid",id:"5"}],[t,a]=s.useState([]),[l,r]=s.useState(!1);return e.jsxs(o,{caption:"avgiftsstatus",children:[e.jsx(o.Header,{children:e.jsxs(o.Row,{children:[e.jsx(o.HeaderCell,{as:"td",children:e.jsx(Oe,{classNames:{label:"checkboxInTable"},checked:l,hideLabel:!0,onChange:()=>{l&&a([]),r(!l)},children:"velg alle rader"})}),e.jsx(o.HeaderCell,{children:"Fastsatt"}),e.jsx(o.HeaderCell,{children:"Avgiftstype"}),e.jsx(o.HeaderCell,{alignment:"right",children:"Beløp"}),e.jsx(o.HeaderCell,{children:"Status"})]})}),e.jsx(o.Body,{children:n.map((i,d)=>e.jsxs(o.Row,{children:[e.jsx(o.DataCell,{children:e.jsx(Oe,{classNames:{label:"checkboxInTable"},checked:l||t.some(c=>c===d),hideLabel:!0,onChange:c=>{l?(a(Array.from(Array(n.length).keys()).filter(m=>m!==d)),r(!1)):c.target.checked?a([d,...t]):a(t.filter(m=>m!==d))},children:`Velg ${i.fastsatt}`})}),e.jsx(o.DataCell,{as:"th",scope:"row",children:i.fastsatt}),e.jsx(o.DataCell,{children:i.avgiftstype}),e.jsx(o.DataCell,{alignment:"right",children:i.beloep}),e.jsx(o.DataCell,{children:i.status})]},i.id))})]})}const Hu=Object.freeze(Object.defineProperty({__proto__:null,default:Mu},Symbol.toStringTag,{value:"Module"})),Vu="_container_1d78u_1",Fu={container:Vu};function zu(){return e.jsx("div",{className:Fu.container,children:e.jsxs(I,{defaultValue:"tab-1",hasBorder:!0,children:[e.jsxs(I.List,{children:[e.jsx(I.Tab,{value:"tab-1",children:"Personopplysninger"}),e.jsx(I.Tab,{value:"tab-2",children:"Kontaktinformasjon"}),e.jsx(I.Tab,{value:"tab-3",children:"Betaling"})]}),e.jsx(I.Panel,{value:"tab-1",children:"Innhold med ramme rundt panelområdet."}),e.jsx(I.Panel,{value:"tab-2",children:"Innhold med ramme rundt panelområdet."}),e.jsx(I.Panel,{value:"tab-3",children:"Innhold med ramme rundt panelområdet."})]})})}const Gu=Object.freeze(Object.defineProperty({__proto__:null,default:zu},Symbol.toStringTag,{value:"Module"})),Ku="_container_18c94_1",$u={container:Ku};function qu(){return e.jsx("div",{className:$u.container,children:e.jsxs(I,{defaultValue:"tab-1",isMultiline:!0,children:[e.jsxs(I.List,{children:[e.jsx(I.Tab,{value:"tab-1",children:"Dokumenter med lang tittel for mobilvisning"}),e.jsx(I.Tab,{value:"tab-2",children:"Meldinger med lang tittel for mobilvisning"}),e.jsx(I.Tab,{value:"tab-3",children:"Historikk med lang tittel for mobilvisning"})]}),e.jsx(I.Panel,{value:"tab-1",children:"Innhold for dokumenter."}),e.jsx(I.Panel,{value:"tab-2",children:"Innhold for meldinger."}),e.jsx(I.Panel,{value:"tab-3",children:"Innhold for historikk."})]})})}const Ju=Object.freeze(Object.defineProperty({__proto__:null,default:qu},Symbol.toStringTag,{value:"Module"}));function Wu(){return e.jsxs(I,{defaultValue:"tab-1",children:[e.jsxs(I.List,{children:[e.jsx(I.Tab,{value:"tab-1",children:"Oversikt"}),e.jsx(I.Tab,{value:"tab-2",children:"Meldinger"}),e.jsx(I.Tab,{value:"tab-3",children:"Historikk"})]}),e.jsx(I.Panel,{value:"tab-1",children:"Innhold for oversikt med standardverdier."}),e.jsx(I.Panel,{value:"tab-2",children:"Innhold for meldinger med standardverdier."}),e.jsx(I.Panel,{value:"tab-3",children:"Innhold for historikk med standardverdier."})]})}const Xu=Object.freeze(Object.defineProperty({__proto__:null,default:Wu},Symbol.toStringTag,{value:"Module"})),Uu="_container_6nuzr_1",Zu={container:Uu};function Yu(){return e.jsxs("div",{className:Zu.container,children:[e.jsxs(I,{defaultValue:"standard-1",variant:"standard",children:[e.jsxs(I.List,{children:[e.jsx(I.Tab,{value:"standard-1",children:"Oversikt"}),e.jsx(I.Tab,{value:"standard-2",children:"Innboks"}),e.jsx(I.Tab,{value:"standard-3",children:"Historikk"})]}),e.jsx(I.Panel,{value:"standard-1",children:"Innhold for standard."}),e.jsx(I.Panel,{value:"standard-2",children:"Innhold for standard."}),e.jsx(I.Panel,{value:"standard-3",children:"Innhold for standard."})]}),e.jsxs(I,{defaultValue:"compact-1",variant:"compact",children:[e.jsxs(I.List,{children:[e.jsx(I.Tab,{value:"compact-1",children:"Oversikt"}),e.jsx(I.Tab,{value:"compact-2",children:"Innboks"}),e.jsx(I.Tab,{value:"compact-3",children:"Historikk"})]}),e.jsx(I.Panel,{value:"compact-1",children:"Innhold for compact."}),e.jsx(I.Panel,{value:"compact-2",children:"Innhold for compact."}),e.jsx(I.Panel,{value:"compact-3",children:"Innhold for compact."})]})]})}const Qu=Object.freeze(Object.defineProperty({__proto__:null,default:Yu},Symbol.toStringTag,{value:"Module"})),ep="_container_1csxt_1",np={container:ep};function tp(){return e.jsxs("div",{className:np.container,children:[e.jsx(ie,{color:"forest",children:"Godkjent"}),e.jsx(ie,{color:"burgundy",children:"Avvist"}),e.jsx(ie,{color:"ochre",children:"Under behandling"})]})}const ap=Object.freeze(Object.defineProperty({__proto__:null,default:tp},Symbol.toStringTag,{value:"Module"})),rp="_container_1csxt_1",op={container:rp};function sp(){return e.jsxs("div",{className:op.container,children:[e.jsx(ie,{color:"graphite",children:"Nyhet"}),e.jsx(ie,{color:"graphite",children:"Veiledning"}),e.jsx(ie,{color:"graphite",children:"Skjema"})]})}const lp=Object.freeze(Object.defineProperty({__proto__:null,default:sp},Symbol.toStringTag,{value:"Module"})),ip="_container_1csxt_1",dp={container:ip};function cp(){return e.jsxs("div",{className:dp.container,children:[e.jsx(ie,{color:"forest",svgPath:Ht,children:"Godkjent"}),e.jsx(ie,{color:"ochre",svgPath:ta,children:"Pågår"}),e.jsx(ie,{color:"burgundy",svgPath:Fa,children:"Mangler vedlegg"})]})}const mp=Object.freeze(Object.defineProperty({__proto__:null,default:cp},Symbol.toStringTag,{value:"Module"})),up="_container_hxdrn_1",pp={container:up};function gp(){return e.jsxs("div",{className:pp.container,children:[e.jsx(ie,{size:"small",color:"denim",children:"Liten"}),e.jsx(ie,{size:"medium",color:"denim",children:"Medium"})]})}const fp=Object.freeze(Object.defineProperty({__proto__:null,default:gp},Symbol.toStringTag,{value:"Module"}));function hp(){const[n,t]=s.useState("");return e.jsx(Vt,{label:"Begrunnelse",helpText:"Maks 200 tegn.",characterLimit:200,rows:4,value:n,hideLabel:!1,onChange:a=>t(a.target.value)})}const vp=Object.freeze(Object.defineProperty({__proto__:null,default:hp},Symbol.toStringTag,{value:"Module"}));function bp(){const[n,t]=s.useState("");return e.jsx(Vt,{label:"Andre opplysninger",rows:4,value:n,hideLabel:!1,onChange:a=>t(a.target.value)})}const _p=Object.freeze(Object.defineProperty({__proto__:null,default:bp},Symbol.toStringTag,{value:"Module"}));function xp(){const n=te({type:"organisationNumber",initialValue:"974761076"}),t=te({type:"nationalIdentityNumber",initialValue:"26301518292"}),a=te({type:"bankAccountNumber",initialValue:"76940524802"}),l=te({type:"phoneNumber",initialValue:"12345678"}),r=te({type:"number",initialValue:"50400,32",allowDecimals:!0});return e.jsxs(e.Fragment,{children:[e.jsx(q,{label:"Organisasjonsnummer (9 siffer)",value:n.value,hideLabel:!1,hasSpacing:!0,onChange:n.onChange,onKeyDown:n.onKeyDown}),e.jsx(q,{label:"Fødselsnummer (11 siffer)",value:t.value,hideLabel:!1,hasSpacing:!0,onChange:t.onChange,onKeyDown:t.onKeyDown}),e.jsx(q,{label:"Bankkontonummer",value:a.value,hideLabel:!1,hasSpacing:!0,onChange:a.onChange,onKeyDown:a.onKeyDown}),e.jsx(q,{label:"Telefonnummer",value:l.value,hideLabel:!1,hasSpacing:!0,onChange:l.onChange,onKeyDown:l.onKeyDown}),e.jsx(q,{label:"Beløp (NOK)",value:r.value,hideLabel:!1,onChange:r.onChange,onKeyDown:r.onKeyDown})]})}const kp=Object.freeze(Object.defineProperty({__proto__:null,default:xp},Symbol.toStringTag,{value:"Module"}));function Sp(){return e.jsx(q,{label:"Kontaktperson",description:"Hvis vi trenger å kontakte noen om saken",hideLabel:!1})}const yp=Object.freeze(Object.defineProperty({__proto__:null,default:Sp},Symbol.toStringTag,{value:"Module"}));function jp(){const[n,t]=s.useState(""),[a,l]=s.useState("Postnummer må fylles ut.");return e.jsx(q,{label:"Postnummer",value:n,errorMessage:a,pattern:"\\d{4}",maxLength:4,hideLabel:!1,required:!0,onChange:r=>{t(r.target.value),l("")},onBlur:r=>{if(r.target.validity.valueMissing){l("Postnummer må fylles ut.");return}r.target.validity.patternMismatch&&l("Postnummer må inneholde fire tall.")}})}const Tp=Object.freeze(Object.defineProperty({__proto__:null,default:jp},Symbol.toStringTag,{value:"Module"}));function Ep(){const n=te({type:"organisationNumber"});return e.jsx(q,{label:"Organisasjonsnummer (9 siffer)",helpText:"Hvis du ikke vet organisasjonsnummeret, kan du søke det opp på Brønnøysundregistrene.",value:n.value,hideLabel:!1,onChange:n.onChange,onKeyDown:n.onKeyDown})}const Cp=Object.freeze(Object.defineProperty({__proto__:null,default:Ep},Symbol.toStringTag,{value:"Module"}));function Pp(){return e.jsx(q,{label:"Navn",hideLabel:!1})}const Rp=Object.freeze(Object.defineProperty({__proto__:null,default:Pp},Symbol.toStringTag,{value:"Module"})),wp="_linkWrapper_1cs2j_1",Dp="_marginBottomXL_1cs2j_6",Np="_marginBottomS_1cs2j_10",Lp="_marginRightS_1cs2j_14",Op="_flex_1cs2j_18",Ip="_columns_1cs2j_23",Bp="_secondColumn_1cs2j_26",se={linkWrapper:wp,marginBottomXL:Dp,marginBottomS:Np,marginRightS:Lp,flex:Op,columns:Ip,secondColumn:Bp};function Ap(){const n=s.useRef(null),t=s.useRef(null),[a,l]=s.useState(),r=Ln("(min-width: 640px)"),i=u=>{const x=u.currentTarget.lang;U.changeLanguage($t[x])},d={name:"Ola Nordmann",personId:"10101012345",dateOfBirth:new Date("1984-02-13"),type:"Person"},c={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",dateOfBirth:new Date("1964-02-28"),type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",dateOfBirth:new Date("1932-10-10"),type:"Person",isDeleted:!0},{name:"Lomme filosofisk",personId:"08889674513",dateOfBirth:new Date("1944-01-26"),type:"Person",isDeleted:!0},{name:"Adelsmann varm",personId:"14892449911",dateOfBirth:new Date("1981-07-04"),type:"Person",isDeleted:!1}]},m={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]};let p;(u=>{u.PERSON_SKATT="https://www.skatteetaten.no/person/skatt/",u.PERSON_AVGIFTER="https://www.skatteetaten.no/person/avgifter/",u.PERSON_FOLKEREGISTER="https://www.skatteetaten.no/person/folkeregister/",u.PERSON_UTENLANDSK="https://www.skatteetaten.no/person/utenlandsk/",u.PERSON_BETALING_OG_INNKREVING="https://www.skatteetaten.no/person/betaling-og-innkreving/",u.PERSON_FORSIDE="https://www.skatteetaten.no/person/",u.VIRKSOMHET_SKATT="https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",u.VIRKSOMHET_AVGIFTER="https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",u.VIRKSOMHET_RAPPORTERING_OG_BRANSJER="https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",u.VIRKSOMHET_STARTE_OG_DRIVE="https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",u.VIRKSOMHET_ARBEIDSGIVER="https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",u.VIRKSOMHET_UTENLANDSK="https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",u.VIRKSOMHET_FORSIDE="https://www.skatteetaten.no/bedrift-og-organisasjon/",u.RETTSKILDER="https://www.skatteetaten.no/rettskilder/",u.PRESSE="https://www.skatteetaten.no/presse/",u.SAMARBEIDSPARTNERE="https://www.skatteetaten.no/samarbeidspartnere/",u.KONTAKT="https://www.skatteetaten.no/kontakt/"})(p||(p={}));let g;(u=>{u.SKATT="/web/mineskatteforhold/",u.FOLKEREGISTER="/web/minfolkeregisterside/",u.INNBOKS="/web/innboks/",u.KJORETOY="/web/desta/",u.AKSJEOPPGAVEN="/web/aksjeoppgaven/?referrer=min-side"})(g||(g={}));let h;(u=>{u.VIRKSOMHET_KALENDER="/virksomhet/kalender",u.VIRKSOMHET_KRAVOVERSIKT="/virksomhet/kravoversikt",u.PERSON_FORSIDE="/person",u.PERSON_ARBEIDINNTEKT="/person/arbeidinntekt",u.PERSON_EIENDOMMER="/person/eiendommer",u.PERSON_KRAVOVERSIKT="/person/kravoversikt",u.PERSON_SAKSTATUS="/person/sakstatus",u.VIRKSOMHET_SAKSTATUS="/virksomhet/sakstatus"})(h||(h={}));const k=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betaling"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],_=[{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],S=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte, drive og avslutte"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],b=[{href:"web/minside/virksomhet/",text:"Min side"},{href:"/virksomhet/kalender",text:"Kalender"},{href:"/virksomhet/kravoversikt",text:"Krav og betaling"},{href:"/virksomhet/sakstatus",text:"Mine saker"},{href:"/web/innboks/",text:"Innboks"}];return e.jsxs(e.Fragment,{children:[e.jsx(be,{ref:t,classNames:{columns:se.columns},firstColumn:a?e.jsx(G,{spacing:"s",children:e.jsxs(G.Content,{children:[e.jsxs(E,{as:"h2",level:3,children:[a.role==="meg"&&e.jsx(Qt,{className:se.marginRightS}),a.role==="andre"&&e.jsx(Ft,{className:se.marginRightS}),a.role==="virksomhet"&&e.jsx(zt,{className:se.marginRightS}),a?.role==="meg"?"Mitt innhold":a.name]}),e.jsx(f,{variant:"ingress",children:"Se, endre og send inn"}),e.jsx("ul",{className:se.linkWrapper,children:(a.role==="virksomhet"?b:k).map((u,x)=>e.jsx("li",{className:se.marginBottomS,children:e.jsx(ge,{href:u.href,onClick:y=>{y.preventDefault(),t.current?.closeMenu?.()},children:u.text})},x))})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(E,{as:"h2",level:3,className:se.flex,children:[e.jsx(Gt,{className:se.marginRightS,size:"largePlus"}),"Min side"]}),e.jsx(f,{className:se.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger."}),e.jsx(C,{svgPath:Kt,onClick:()=>n.current?.showModal(),children:"Logg inn"})]}),secondColumn:e.jsxs(e.Fragment,{children:[e.jsx(E,{as:"h2",hasSpacing:!0,children:"Alle temaer"}),e.jsxs("div",{className:se.secondColumn,children:[e.jsxs("div",{children:[e.jsx(E,{as:"h3",hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/person/",children:"For personer"})}),e.jsx(L,{className:se.marginBottomXL,children:_.map(u=>e.jsx(L.Link,{href:u.href,onClick:x=>{x.preventDefault(),t.current?.closeMenu?.()},children:u.text},u.text))}),e.jsx(E,{as:"h3",hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/",children:"For bedrifter og organisasjoner"})}),e.jsx(L,{className:se.marginBottomXL,children:S.map(u=>e.jsx(L.Link,{href:u.href,onClick:x=>{x.preventDefault(),t.current?.closeMenu?.()},children:u.text},u.text))})]}),e.jsxs("div",{children:[e.jsx(E,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/rettskilder/",children:"Rettskilder"})}),e.jsx(E,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/presse/",children:"Presse"})}),e.jsx(E,{as:"h3",level:4,className:se.marginBottomXL,children:e.jsx("a",{href:"https://www.skatteetaten.no/samarbeidspartnere/",children:"Samarbeidspartner"})}),e.jsx(E,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:"https://www.skatteetaten.no/kontakt/",children:"Kontakt oss"})})]})]})]}),searchContent:e.jsxs(e.Fragment,{children:[e.jsx(f,{className:se.marginBottomS,children:"Dette har andre søkt på:"}),e.jsxs(L,{children:[e.jsx(L.Link,{href:"#",children:"Se skatteoppgjøret ditt"}),e.jsx(L.Link,{href:"#",children:"Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift"}),e.jsx(L.Link,{href:"#",children:"Se dine skattekrav og betalinger"})]})]}),user:a,onLogOutClick:r?()=>l(void 0):void 0,onLanguageClick:i,onLogInClick:a?void 0:()=>n.current?.showModal(),onSearch:(u,x)=>{alert(`søker etter ${x}`)},onSearchClick:(u,x)=>{alert(`søker etter ${x}`)},children:a&&e.jsx(be.UserMenu,{user:a,notificationCount:1,onLogOutClick:()=>l(void 0),onSwitchUserClick:()=>n.current?.showModal()})}),e.jsx(_e,{ref:n,me:d,people:c,businesses:m,onEntitySelect:async u=>{let x;u.name===d.name?x="meg":u.type==="Organization"?x="virksomhet":x="andre",l({role:x,name:u.name,orgnr:"999 999 999"}),n.current?.close()}})]})}const Mp=Object.freeze(Object.defineProperty({__proto__:null,default:Ap},Symbol.toStringTag,{value:"Module"}));function Hp(){const n=s.useRef(null);return e.jsxs(on,{title:"MVA",description:"Arbeidsliste",logoHref:"/home",user:"Etternavnesen Fornavn",children:[e.jsx(re,{svgPath:na,brightness:"light",children:"Hjelp"}),e.jsx(re,{svgPath:ea,brightness:"light",children:"Dokumentasjon"}),e.jsx(re,{svgPath:dn,brightness:"light",children:"Opprett RF-Ørtiatten"}),e.jsxs(on.ActionMenu,{menuActionsRef:n,children:[e.jsx(re,{className:"bottomSpacingXS",svgPath:ut,onClick:()=>{n?.current?.close?.()},children:"Legg til RF-skjema ørtifemten"}),e.jsxs(L,{children:[e.jsx(L.Link,{href:"#",isExternal:!0,onClick:()=>n?.current?.close?.(),children:"Denne tingen her"}),e.jsx(L.Link,{href:"#",isExternal:!0,onClick:()=>n?.current?.close?.(),children:"En annen ting"}),e.jsx(L.Link,{href:"#",isExternal:!0,onClick:()=>n?.current?.close?.(),children:"Den tredje tingen"})]})]})]})}const Vp=Object.freeze(Object.defineProperty({__proto__:null,default:Hp},Symbol.toStringTag,{value:"Module"}));function Fp(){const n=s.useRef(null);return e.jsxs(on,{title:"Global Skatt",logoHref:"/home",children:[e.jsx($e,{label:"Søk etter sak, virksomhet, dokument",placeholder:"Søk etter sak, virksomhet, dokument..."}),e.jsxs(on.ActionMenu,{menuActionsRef:n,children:[e.jsx(re,{className:"bottomSpacingXS",svgPath:ut,onClick:()=>{n?.current?.close?.()},children:"Legg til RF-skjema ortifemten"}),e.jsxs(L,{children:[e.jsx(L.Link,{href:"#",isExternal:!0,onClick:()=>n?.current?.close?.(),children:"Denne tingen her"}),e.jsx(L.Link,{href:"#",isExternal:!0,onClick:()=>n?.current?.close?.(),children:"En annen ting"}),e.jsx(L.Link,{href:"#",isExternal:!0,onClick:()=>n?.current?.close?.(),children:"Den tredje tingen"})]})]})]})}const zp=Object.freeze(Object.defineProperty({__proto__:null,default:Fp},Symbol.toStringTag,{value:"Module"}));function Gp(){return e.jsx(on,{title:"MVA",description:"Arbeidsliste",logoHref:"/home",user:"Etternavnesen Fornavn"})}const Kp=Object.freeze(Object.defineProperty({__proto__:null,default:Gp},Symbol.toStringTag,{value:"Module"}));function $p(){return e.jsxs(f,{children:["Designsystemet støtter fra skjermbredder fra 320  ",e.jsxs(Te,{children:[e.jsx(Te.Trigger,{children:"piksler"}),e.jsx(Te.Content,{children:"En piksel er det minste enkelt-elementet (eller punktet) i et digitalt bilde på en skjerm. Tusenvis av disse små, fargede punktene settes sammen for å danne et komplett bilde."})]})," og oppover."]})}const qp=Object.freeze(Object.defineProperty({__proto__:null,default:$p},Symbol.toStringTag,{value:"Module"}));function Jp(){const[n,t]=s.useState(null),a=new Date;return e.jsx(Be,{label:"Besøksdato (dd.mm.åååå)",value:n,maxDate:a,onSelectDate:t})}const Wp=Object.freeze(Object.defineProperty({__proto__:null,default:Jp},Symbol.toStringTag,{value:"Module"})),Xp="_contentContainer_1hklk_1",Up="_timeInput_1hklk_6",Ct={contentContainer:Xp,timeInput:Up},Zp=[{value:"08:00",label:"08:00"},{value:"08:30",label:"08:30"},{value:"09:00",label:"09:00"},{value:"09:30",label:"09:30"},{value:"10:00",label:"10:00"},{value:"10:30",label:"10:30"},{value:"11:00",label:"11:00"},{value:"11:30",label:"11:30"},{value:"12:00",label:"12:00"},{value:"12:30",label:"12:30"},{value:"13:00",label:"13:00"},{value:"13:30",label:"13:30"},{value:"14:00",label:"14:00"},{value:"14:30",label:"14:30"},{value:"15:00",label:"15:00"},{value:"15:30",label:"15:30"},{value:"16:00",label:"16:00"}];function Yp(){const[n,t]=s.useState(null),[a,l]=s.useState("");return e.jsxs(nn,{legend:"Dato og tid",classNames:{contentContainer:Ct.contentContainer},hideLegend:!0,children:[e.jsx(Be,{label:"Dato (dd.mm.åååå)",value:n,onSelectDate:r=>t(r)}),e.jsx(Ae,{label:"Tid (tt:mm)",value:a,options:Zp,className:Ct.timeInput,onSelectionChange:r=>l(r?.value??"")})]})}const Qp=Object.freeze(Object.defineProperty({__proto__:null,default:Yp},Symbol.toStringTag,{value:"Module"})),eg="_contentContainer_192af_1",ng="_fieldSmall_192af_6",tg="_fieldMedium_192af_10",vn={contentContainer:eg,fieldSmall:ng,fieldMedium:tg};function ag(){const[n,t]=s.useState(""),[a,l]=s.useState(""),[r,i]=s.useState(""),d=p=>{const g=p.target.value.replace(/\D/g,"");g.length<=2&&t(g)},c=p=>{const g=p.target.value.replace(/\D/g,"");g.length<=2&&l(g)},m=p=>{const g=p.target.value.replace(/\D/g,"");g.length<=4&&i(g)};return e.jsxs(nn,{legend:"Fødselsdato",description:"For eksempel 17 5 1990",classNames:{contentContainer:vn.contentContainer},children:[e.jsx(q,{label:"Dag",value:n,maxLength:2,classNames:{textbox:vn.fieldSmall},onChange:d}),e.jsx(q,{label:"Måned",value:a,maxLength:2,classNames:{textbox:vn.fieldSmall},onChange:c}),e.jsx(q,{label:"År",value:r,maxLength:4,classNames:{textbox:vn.fieldMedium},onChange:m})]})}const rg=Object.freeze(Object.defineProperty({__proto__:null,default:ag},Symbol.toStringTag,{value:"Module"})),og="_dateInput_1v8zs_1",sg={dateInput:og};function lg(){const[n,t]=s.useState(""),a=l=>{let r=l.target.value.replace(/\D/g,"");r.length>2&&(r=`${r.slice(0,2)}.${r.slice(2)}`),r.length>5&&(r=`${r.slice(0,5)}.${r.slice(5,9)}`),t(r)};return e.jsx(q,{label:"Fødselsdato (dd.mm.åååå)",value:n,maxLength:10,classNames:{textbox:sg.dateInput},onChange:a})}const ig=Object.freeze(Object.defineProperty({__proto__:null,default:lg},Symbol.toStringTag,{value:"Module"})),dg="_contentContainer_1aaf7_1",cg={contentContainer:dg};function mg(){const[n,t]=s.useState(null),[a,l]=s.useState(null),r=n&&a&&n.getTime()>a.getTime();return e.jsxs(nn,{legend:"Periode",classNames:{contentContainer:cg.contentContainer},hideLegend:!0,children:[e.jsx(Be,{label:"Fra dato (dd.mm.åååå)",value:n,onSelectDate:t}),e.jsx(Be,{label:"Til dato (dd.mm.åååå)",value:a,errorMessage:r?"Til-datoen kan ikke være før fra-datoen":void 0,onSelectDate:l})]})}const ug=Object.freeze(Object.defineProperty({__proto__:null,default:mg},Symbol.toStringTag,{value:"Module"})),pg="_fieldContainer_gu9an_1",gg="_fieldSelectSmall_gu9an_11",fg="_timeInput_gu9an_15",nt={fieldContainer:pg,fieldSelectSmall:gg,timeInput:fg};function hg(){const[n,t]=s.useState(""),[a,l]=s.useState("AM"),[r,i]=s.useState(""),d=m=>{let p=m.target.value.replace(/\D/g,"");p.length>2&&(p=`${p.slice(0,2)}:${p.slice(2,4)}`),t(p)},c=[{label:"Europe/Oslo, Norway (GMT+1)",value:"Europe/Oslo"},{label:"Europe/London, United Kingdom (GMT+0)",value:"Europe/London"},{label:"Europe/Paris, France (GMT+1)",value:"Europe/Paris"},{label:"Europe/Berlin, Germany (GMT+1)",value:"Europe/Berlin"},{label:"America/New_York, USA (GMT-5)",value:"America/New_York"},{label:"America/Los_Angeles, USA (GMT-8)",value:"America/Los_Angeles"},{label:"Asia/Tokyo, Japan (GMT+9)",value:"Asia/Tokyo"},{label:"Asia/Shanghai, China (GMT+8)",value:"Asia/Shanghai"},{label:"Australia/Sydney, Australia (GMT+10)",value:"Australia/Sydney"},{label:"Pacific/Auckland, New Zealand (GMT+12)",value:"Pacific/Auckland"}];return e.jsxs(nn,{legend:"Klokkeslett og tidssone",classNames:{contentContainer:nt.fieldContainer},children:[e.jsx(q,{label:"Tid (hh:mm)",value:n,maxLength:5,classNames:{textbox:nt.timeInput},onChange:d}),e.jsxs(he,{label:"AM/PM",value:a,classNames:{container:nt.fieldSelectSmall},onChange:m=>l(m.target.value),children:[e.jsx(he.Option,{value:"AM",children:"AM"}),e.jsx(he.Option,{value:"PM",children:"PM"})]}),e.jsx(Ae,{label:"Tidssone",options:c,value:r,onSelectionChange:m=>i(m?.value||"")})]})}const vg=Object.freeze(Object.defineProperty({__proto__:null,default:hg},Symbol.toStringTag,{value:"Module"}));function bg(){const n=["Aksjonærregisteret","Avgifter","Borettslag og sameier","Eiendommer","Folkeregister","Innkreving","Saker og min kommunikasjon","Skatt og inntekt","Valutaregisteret"];return e.jsx(ye,{legend:"Jeg ønsker innsyn i",children:n.map(t=>e.jsx(ye.Checkbox,{children:t},t))})}const _g=Object.freeze(Object.defineProperty({__proto__:null,default:bg},Symbol.toStringTag,{value:"Module"}));function xg(){const n=[{label:"Har barn over 16 år"},{label:"Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning"},{label:"Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov"},{label:"Er enslig forsørger"}];return e.jsx(ye,{legend:"Velg det som gjelder deg",children:n.map((t,a)=>e.jsx(ye.Checkbox,{children:t.label},a))})}const kg=Object.freeze(Object.defineProperty({__proto__:null,default:xg},Symbol.toStringTag,{value:"Module"}));function Sg(){const n=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],[t,a]=s.useState([]),l=r=>{a(i=>i.includes(r)?i.filter(d=>d!==r):[...i,r])};return e.jsxs(e.Fragment,{children:[e.jsx(E,{level:5,as:"h2",id:"month-heading",hasSpacing:!0,children:"Velg måneder"}),e.jsx(Ie,{ariaLabelledBy:"month-heading",children:n.map(r=>e.jsx(Ie.Toggle,{isSelected:t.includes(r),showCheckmark:!1,onClick:()=>l(r),children:r},r))})]})}const yg=Object.freeze(Object.defineProperty({__proto__:null,default:Sg},Symbol.toStringTag,{value:"Module"}));function jg(){const n=[{label:"Agdenes",value:"agdenes"},{label:"Balestrand",value:"balestrand"},{label:"Finnøy",value:"finnoy"},{label:"Forsand",value:"forsand"},{label:"Grimstad",value:"grimstad"},{label:"Kristiansand",value:"kristiansand"},{label:"Kvalsund",value:"kvalsund"},{label:"Mandal",value:"mandal"},{label:"Meløy",value:"meloy"},{label:"Midsund",value:"midsund"},{label:"Nordre Flesberg Kommune",value:"nordre_flesberg_kommune"},{label:"Orkdal",value:"orkdal"},{label:"Rana",value:"rana"},{label:"Roller",value:"roller"},{label:"Sauda",value:"sauda"},{label:"Tromsø",value:"tromso"},{label:"Trondheim",value:"trondheim"},{label:"Vennesla",value:"vennesla"},{label:"Åmli",value:"amli"}];return e.jsx(Ae,{label:"Velg kommuner",options:n,multiple:!0})}const Tg=Object.freeze(Object.defineProperty({__proto__:null,default:jg},Symbol.toStringTag,{value:"Module"}));function Eg(){const n=[{label:"Agdenes",value:"agdenes"},{label:"Balestrand",value:"balestrand"},{label:"Finnøy",value:"finnoy"},{label:"Forsand",value:"forsand"},{label:"Grimstad",value:"grimstad"},{label:"Kristiansand",value:"kristiansand"},{label:"Kvalsund",value:"kvalsund"},{label:"Mandal",value:"mandal"},{label:"Meløy",value:"meloy"},{label:"Midsund",value:"midsund"},{label:"Nordre Flesberg Kommune",value:"nordre_flesberg_kommune"},{label:"Orkdal",value:"orkdal"},{label:"Rana",value:"rana"},{label:"Roller",value:"roller"},{label:"Sauda",value:"sauda"},{label:"Tromsø",value:"tromso"},{label:"Trondheim",value:"trondheim"},{label:"Vennesla",value:"vennesla"},{label:"Åmli",value:"amli"}];return e.jsx(Ae,{label:"Velg kommune",options:n})}const Cg=Object.freeze(Object.defineProperty({__proto__:null,default:Eg},Symbol.toStringTag,{value:"Module"})),Pg="_regionsContainer_iikx2_1",Rg="_regionCard_iikx2_8",wg="_modalActions_iikx2_15",tt={regionsContainer:Pg,regionCard:Rg,modalActions:wg};function Dg(){const n=s.useRef(null),t=["Nord-Norge","Midt-Norge","Østlandet","Vestlandet","Sørlandet"],[a,l]=s.useState(["Østlandet","Nord-Norge"]),r=()=>{n.current?.showModal()},i=()=>{n.current?.close()},d=(m,p)=>{l(p?[...a,m]:a.filter(g=>g!==m))},c=m=>{l(a.filter(p=>p!==m))};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:tt.regionsContainer,children:a.map(m=>e.jsx(G,{color:"denim",children:e.jsxs("div",{className:tt.regionCard,children:[e.jsx("div",{children:m}),e.jsx(oe,{svgPath:Nn,title:`Fjern ${m}`,onClick:()=>c(m)})]})},m))}),e.jsx(re,{svgPath:pt,onClick:r,children:"Legg til region"}),e.jsxs(fe,{ref:n,title:"Velg region",onClose:i,children:[e.jsx(ye,{legend:"Region",children:t.map(m=>e.jsx(ye.Checkbox,{checked:a.includes(m),onChange:p=>d(m,p.target.checked),children:m},m))}),e.jsxs("div",{className:tt.modalActions,children:[e.jsx(C,{onClick:()=>i(),children:"Bekreft"}),e.jsx(C,{variant:"secondary",onClick:()=>i(),children:"Avbryt"})]})]})]})}const Ng=Object.freeze(Object.defineProperty({__proto__:null,default:Dg},Symbol.toStringTag,{value:"Module"})),Lg="_phoneNumberInput_1uus3_1",Og={phoneNumberInput:Lg};function Ig(){const[n,t]=s.useState(""),[a,l]=s.useState(""),[r,i]=s.useState(""),d=te({type:"phoneNumber"});return e.jsxs(e.Fragment,{children:[e.jsxs(V,{legend:"Jeg ønsker å bli kontaktet på",value:n,hasSpacing:!0,onChange:c=>t(c.target.value),children:[e.jsx(V.Radio,{value:"email",children:"E-post"}),e.jsx(V.Radio,{value:"phone",children:"Telefon"}),e.jsx(V.Radio,{value:"sms",children:"SMS"})]}),n==="email"&&e.jsx(q,{label:"E-postadresse",value:a,inputMode:"email",hideLabel:!1,hasSpacing:!0,onChange:c=>l(c.target.value)}),n==="phone"&&e.jsxs(V,{legend:"Ønsket tidspunkt for oppringing",value:r,hasSpacing:!0,onChange:c=>i(c.target.value),children:[e.jsx(V.Radio,{value:"morning",children:"Formiddag (9–12)"}),e.jsx(V.Radio,{value:"afternoon",children:"Ettermiddag (12–16)"}),e.jsx(V.Radio,{value:"evening",children:"Kveld (16–20)"})]}),n==="sms"&&e.jsx(q,{label:"Telefonnummer",value:d.value,inputMode:"numeric",classNames:{textbox:Og.phoneNumberInput},hideLabel:!1,hasSpacing:!0,onChange:d.onChange,onKeyDown:d.onKeyDown})]})}const Bg=Object.freeze(Object.defineProperty({__proto__:null,default:Ig},Symbol.toStringTag,{value:"Module"}));function Ag(){const[n,t]=s.useState("red");return e.jsxs(V,{legend:"Favorittfarge",value:n,required:!0,onChange:a=>t(a.target.value),children:[e.jsx(V.Radio,{value:"red",children:"Rød"}),e.jsx(V.Radio,{value:"yellow",children:"Gul"}),e.jsx(V.Radio,{value:"blue",children:"Blå"})]})}const Mg=Object.freeze(Object.defineProperty({__proto__:null,default:Ag},Symbol.toStringTag,{value:"Module"}));function Hg(){const n=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],[t,a]=s.useState("Januar");return e.jsx(he,{label:"Velg måned",value:t,onChange:l=>a(l.target.value),children:n.map(l=>e.jsx(he.Option,{value:l,children:l},l))})}const Vg=Object.freeze(Object.defineProperty({__proto__:null,default:Hg},Symbol.toStringTag,{value:"Module"})),Fg={name:"Ola Nordmann",personId:"10101012345",dateOfBirth:new Date("1990-01-01"),type:"Person"},zg={total:2,list:[{name:"Nordmann Konsulenttjenester",organizationNumber:"912345678",isDeleted:!1,unitType:"ENK",type:"Organization"},{name:"Nordmann Drift AS",organizationNumber:"923456789",isDeleted:!1,unitType:"AS",type:"Organization"}]};function Gg(){const n=s.useRef(null),t=async()=>{n.current?.close()};return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:"Brukeren har få representasjoner, og kan velge direkte uten søk:"}),e.jsx(C,{onClick:()=>n.current?.showModal(),children:"Vis representasjon"}),e.jsx(_e,{ref:n,me:Fg,businesses:zg,people:void 0,showSubunits:!1,onEntitySelect:t})]})}const Kg=Object.freeze(Object.defineProperty({__proto__:null,default:Gg},Symbol.toStringTag,{value:"Module"})),Pt={name:"Ola Nordmann",personId:"10101012345",dateOfBirth:new Date("1984-02-13"),type:"Person"},$g={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",dateOfBirth:new Date("1964-02-28"),type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",dateOfBirth:new Date("1932-10-10"),type:"Person",isDeleted:!0},{name:"Lomme filosofisk",personId:"08889674513",dateOfBirth:new Date("1944-01-26"),type:"Person",isDeleted:!0},{name:"Adelsmann varm",personId:"14892449911",dateOfBirth:new Date("1981-07-04"),type:"Person",isDeleted:!1}]},qg={total:3,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},Jg=[{href:"/person",text:"Min side"},{href:"/web/mineskatteforhold/",text:"Skatt"},{href:"/web/minfolkeregisterside/",text:"Folkeregister"},{href:"/web/innboks/",text:"Innboks"},{href:"/person/sakstatus",text:"Mine saker"},{href:"/person/kravoversikt",text:"Krav og betaling"},{href:"/web/desta/",text:"Bil og andre kjøretøy"},{href:"/person/arbeidinntekt",text:"Arbeid og inntekt"},{href:"/web/aksjeoppgaven/?referrer=min-side",text:"Aksjeoppgaven"},{href:"/person/eiendommer",text:"Eiendommer"}],Wg=[{href:"https://www.skatteetaten.no/person/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/person/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/person/folkeregister/",text:"Folkeregisteret"},{href:"https://www.skatteetaten.no/person/utenlandsk/",text:"Utenlandsk"},{href:"https://www.skatteetaten.no/person/betaling-og-innkreving/",text:"Betaling og innkreving"}],Rt=[{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/",text:"Skatt"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/",text:"Avgifter"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/",text:"Rapportering og bransjer"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/",text:"Starte, drive og avslutte"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/",text:"Arbeidsgiver"},{href:"https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/",text:"Utenlandsk"}],Xg=["Se skatteoppgjøret ditt","Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift","Se dine skattekrav og betalinger"],Ue={person:"https://www.skatteetaten.no/person/",virksomhet:"https://www.skatteetaten.no/bedrift-og-organisasjon/",rettskilder:"https://www.skatteetaten.no/rettskilder/",presse:"https://www.skatteetaten.no/presse/",samarbeidspartnere:"https://www.skatteetaten.no/samarbeidspartnere/",kontakt:"https://www.skatteetaten.no/kontakt/"},Ug="_linkWrapper_1cs2j_1",Zg="_marginBottomXL_1cs2j_6",Yg="_marginBottomS_1cs2j_10",Qg="_marginRightS_1cs2j_14",ef="_flex_1cs2j_18",nf="_columns_1cs2j_23",tf="_secondColumn_1cs2j_26",le={linkWrapper:Ug,marginBottomXL:Zg,marginBottomS:Yg,marginRightS:Qg,flex:ef,columns:nf,secondColumn:tf};function af(){const n=s.useRef(null),t=s.useRef(null),[a,l]=s.useState(),r=c=>c?c.toLocaleDateString("nb-NO",{day:"2-digit",month:"2-digit",year:"numeric"}):"01.01.2001",i=Ln("(min-width: 640px)"),d=c=>{const m=c.currentTarget.lang;U.changeLanguage($t[m])};return e.jsxs(e.Fragment,{children:[e.jsx(be,{ref:t,classNames:{columns:le.columns},firstColumn:a?e.jsx(G,{spacing:"s",children:e.jsxs(G.Content,{children:[e.jsxs(E,{as:"h2",level:3,children:[a.role==="meg"&&e.jsx(Qt,{className:le.marginRightS}),a.role==="andre"&&e.jsx(Ft,{className:le.marginRightS}),a.role==="virksomhet"&&e.jsx(zt,{className:le.marginRightS}),a?.role==="meg"?"Mitt innhold":a.name]}),e.jsx(f,{variant:"ingress",children:"Se, endre og send inn"}),e.jsx("ul",{className:le.linkWrapper,children:(a.role==="virksomhet"?Rt:Jg).map((c,m)=>e.jsx("li",{className:le.marginBottomS,children:e.jsx(ge,{href:c.href,onClick:p=>{p.preventDefault(),t.current?.closeMenu?.()},children:c.text})},m))})]})}):e.jsxs(e.Fragment,{children:[e.jsxs(E,{as:"h2",level:3,className:le.flex,children:[e.jsx(Gt,{className:le.marginRightS,size:"largePlus"}),"Min side"]}),e.jsx(f,{className:le.marginBottomS,children:"Se dine oppgaver og oversikt. Les og svar på meldinger."}),e.jsx(C,{svgPath:Kt,onClick:()=>n.current?.showModal(),children:"Logg inn"})]}),secondColumn:e.jsxs(e.Fragment,{children:[e.jsx(E,{as:"h2",hasSpacing:!0,children:"Alle temaer"}),e.jsxs("div",{className:le.secondColumn,children:[e.jsxs("div",{children:[e.jsx(E,{as:"h3",hasSpacing:!0,children:e.jsx("a",{href:Ue.person,children:"For personer"})}),e.jsx(L,{className:le.marginBottomXL,children:Wg.map(c=>e.jsx(L.Link,{href:c.href,onClick:m=>{m.preventDefault(),t.current?.closeMenu?.()},children:c.text},c.text))}),e.jsx(E,{as:"h3",hasSpacing:!0,children:e.jsx("a",{href:Ue.virksomhet,children:"For bedrifter og organisasjoner"})}),e.jsx(L,{className:le.marginBottomXL,children:Rt.map(c=>e.jsx(L.Link,{href:c.href,onClick:m=>{m.preventDefault(),t.current?.closeMenu?.()},children:c.text},c.text))})]}),e.jsxs("div",{children:[e.jsx(E,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:Ue.rettskilder,children:"Rettskilder"})}),e.jsx(E,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:Ue.presse,children:"Presse"})}),e.jsx(E,{as:"h3",level:4,className:le.marginBottomXL,children:e.jsx("a",{href:Ue.samarbeidspartnere,children:"Samarbeidspartner"})}),e.jsx(E,{as:"h3",level:4,hasSpacing:!0,children:e.jsx("a",{href:Ue.kontakt,children:"Kontakt oss"})})]})]})]}),searchContent:e.jsxs(e.Fragment,{children:[e.jsx(f,{className:le.marginBottomS,children:"Dette har andre søkt på:"}),e.jsx(L,{children:Xg.map(c=>e.jsx(L.Link,{href:"#",children:c},c))})]}),user:a,onLogOutClick:i?()=>l(void 0):void 0,onLanguageClick:d,onLogInClick:a?void 0:()=>n.current?.showModal(),onSearch:(c,m)=>{alert(`søker etter ${m}`)},onSearchClick:(c,m)=>{alert(`søker etter ${m}`)},children:a&&e.jsx(be.UserMenu,{user:a,notificationCount:1,onLogOutClick:()=>l(void 0),onSwitchUserClick:()=>n.current?.showModal()})}),a&&a.role!=="meg"&&e.jsx(tn,{user:{name:a.name,role:a.role,identifier:a.role==="virksomhet"?Ze(a.orgnr??"123456789"):r(a.person?.dateOfBirth)}}),e.jsx(_e,{ref:n,me:Pt,people:$g,businesses:qg,onEntitySelect:async c=>{let m;c.name===Pt.name?m="meg":c.type==="Organization"?m="virksomhet":m="andre",l({role:m,name:c.name}),n.current?.close()}})]})}const rf=Object.freeze(Object.defineProperty({__proto__:null,default:af},Symbol.toStringTag,{value:"Module"})),of={name:"Ola Nordmann",personId:"10101012345",dateOfBirth:new Date("1990-01-01"),type:"Person"},sf={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ApS"}]},lf={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",dateOfBirth:new Date("2000-10-10"),type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",dateOfBirth:new Date("2000-10-10"),type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",dateOfBirth:new Date("2000-10-10"),type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",dateOfBirth:new Date("2000-10-10"),type:"Person",isDeleted:!1}]};function df(){const n=s.useRef(null),t=async()=>{n.current?.close()};return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:"Brukeren har mange representasjoner og kan søke i listen:"}),e.jsx(C,{onClick:()=>n.current?.showModal(),children:"Vis mange representasjoner"}),e.jsx(_e,{ref:n,me:of,businesses:sf,people:lf,onEntitySelect:t})]})}const cf=Object.freeze(Object.defineProperty({__proto__:null,default:df},Symbol.toStringTag,{value:"Module"})),mf={name:"Ola Nordmann",personId:"10101012345",dateOfBirth:new Date("1990-01-01"),type:"Person"},uf={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Toshiba AS",organizationNumber:"312643218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Hitachi AS",organizationNumber:"312743218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"},{name:"Amazon ASA",organizationNumber:"112843218",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Meta",organizationNumber:"212843218",isDeleted:!1,type:"Organization",unitType:"ApS"}]},pf={total:4,list:[{name:"Antikvitet presis",personId:"13889999726",dateOfBirth:new Date("2000-10-10"),type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",dateOfBirth:new Date("2000-10-10"),type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",dateOfBirth:new Date("2000-10-10"),type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",dateOfBirth:new Date("2000-10-10"),type:"Person",isDeleted:!1}]};function gf(){const n=s.useRef(null),t=async()=>({error:"Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang."});return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:"Brukeren bytter representasjon, men valgt representasjon mangler tilgang til tjenesten:"}),e.jsx(C,{onClick:()=>n.current?.showModal(),children:"Vis representasjon uten tilgang"}),e.jsx(_e,{ref:n,me:mf,businesses:uf,people:pf,onEntitySelect:t})]})}const ff=Object.freeze(Object.defineProperty({__proto__:null,default:gf},Symbol.toStringTag,{value:"Module"})),hf={total:3,list:[{name:"Nordmann Drift",organizationNumber:"923456789",isDeleted:!1,unitType:"AS",type:"Organization"},{name:"Nordmann Konsult",organizationNumber:"823456111",isDeleted:!1,unitType:"DA",type:"Organization"},{name:"Nordmann Transport",organizationNumber:"723456222",isDeleted:!1,unitType:"ENK",type:"Organization"}]},wt=n=>({role:"virksomhet",name:n.name,orgnr:n.organizationNumber});function vf(){const n=s.useRef(null),[t,a]=s.useState(void 0),l=async r=>{a(r),n.current?.close()};return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:"Tjenesten krever at brukeren representerer en virksomhet før hen kan fortsette:"}),e.jsx(be,{user:t?wt(t):void 0,onLogInClick:()=>n.current?.showModal(),onLogOutClick:()=>a(void 0),children:t&&e.jsx(be.UserMenu,{user:wt(t),onLogOutClick:()=>a(void 0),onSwitchUserClick:()=>n.current?.showModal()})}),t&&e.jsx(tn,{user:{name:t.name??"",role:"virksomhet",identifier:Ze(t.organizationNumber??"123456789")}}),e.jsx(_e,{ref:n,businesses:hf,onEntitySelect:l})]})}const bf=Object.freeze(Object.defineProperty({__proto__:null,default:vf},Symbol.toStringTag,{value:"Module"})),_f={name:"Ola Nordmann",personId:"10101012345",dateOfBirth:new Date("1990-01-01"),type:"Person"},xf={total:12,list:[{name:"Costco AS",organizationNumber:"123456777",isDeleted:!1,unitType:"AS",type:"Organization",subunits:[{name:"Google ASA",organizationNumber:"123456789",isDeleted:!1,type:"Organization",unitType:"ASA"},{name:"Facebook RHF",organizationNumber:"123456790",isDeleted:!0,type:"Organization",unitType:"RHF"}]},{name:"Instagram AS",organizationNumber:"312843211",isDeleted:!0,unitType:"AS",type:"Organization",subunits:[{name:"Snapchat AS",organizationNumber:"123456623",isDeleted:!0,type:"Organization",unitType:"AS"},{name:"Statoil ASA",organizationNumber:"312849218",isDeleted:!1,type:"Organization",unitType:"ASA"}]},{name:"Samsung DA",organizationNumber:"312943218",isDeleted:!1,type:"Organization",unitType:"DA"},{name:"Vanguard AS",organizationNumber:"332843218",isDeleted:!1,type:"Organization",unitType:"AS"}]},Dt={total:11,list:[{name:"Frisk Elefant",personId:"10090812345",dateOfBirth:new Date("2000-10-10"),type:"Person",isDeleted:!1},{name:"Melankolsk Aldrende Ape",personId:"13889999726",dateOfBirth:new Date("2000-10-10"),type:"Person",isDeleted:!1},{name:"Bønne elegant",personId:"18849574503",dateOfBirth:new Date("1984-02-13"),type:"Person",isDeleted:!1},{name:"Lomme filosofisk",personId:"08889674513",dateOfBirth:new Date("1984-02-13"),type:"Person",isDeleted:!1},{name:"Adelsmann varm",personId:"14892449911",dateOfBirth:new Date("1984-02-13"),type:"Person",isDeleted:!1},{name:"Kari Nordmann",personId:"10101054321",dateOfBirth:new Date("1984-02-13"),type:"Person",isDeleted:!1}]},kf={...Dt,list:Dt.list.map((n,t)=>({...n,isDeleted:t%2===0}))};function Sf(){const n=s.useRef(null),t=async()=>{n.current?.close()};return e.jsxs(e.Fragment,{children:[e.jsx(f,{children:"Brukeren har virksomheter og personer med ulike statuser i representasjonslisten:"}),e.jsx(C,{onClick:()=>n.current?.showModal(),children:"Vis representasjoner med statuser"}),e.jsx(_e,{ref:n,me:_f,businesses:xf,people:kf,showInactiveBusinesses:!0,showDeceasedPeople:!0,onEntitySelect:t})]})}const yf=Object.freeze(Object.defineProperty({__proto__:null,default:Sf},Symbol.toStringTag,{value:"Module"})),Nt={role:"andre",name:"Kari Nordmann"},jf={name:"Kari Nordmann",role:"andre",identifier:"01.01.2001"};function Tf(){return e.jsxs(e.Fragment,{children:[e.jsx(be,{user:Nt,onLogOutClick:()=>{},children:e.jsx(be.UserMenu,{user:Nt,onLogOutClick:()=>{}})}),e.jsx(tn,{user:jf}),e.jsx("main",{children:e.jsx(f,{children:"Hovedinnhold"})})]})}const Ef=Object.freeze(Object.defineProperty({__proto__:null,default:Tf},Symbol.toStringTag,{value:"Module"})),st={role:"virksomhet",name:"Nordmann Drift AS",orgnr:"923456789"},Cf={name:"Nordmann Drift AS",role:"virksomhet",identifier:Ze(st.orgnr??"923456789")};function Pf(){return e.jsxs(e.Fragment,{children:[e.jsx(be,{user:st,onLogOutClick:()=>{},children:e.jsx(be.UserMenu,{user:st,onLogOutClick:()=>{}})}),e.jsx(tn,{user:Cf}),e.jsx("main",{children:e.jsx(f,{children:"Hovedinnhold"})})]})}const Rf=Object.freeze(Object.defineProperty({__proto__:null,default:Pf},Symbol.toStringTag,{value:"Module"}));function wf(){const n=te({type:"number",initialValue:"50400,32",allowDecimals:!0});return e.jsx(q,{label:"Beløp (NOK)",value:n.value,hideLabel:!1,onChange:n.onChange,onKeyDown:n.onKeyDown})}const Df=Object.freeze(Object.defineProperty({__proto__:null,default:wf},Symbol.toStringTag,{value:"Module"}));function Nf(){const n=te({type:"number",locale:"en-GB",initialValue:"50400"});return e.jsx(q,{label:"Amount (NOK)",value:n.value,hideLabel:!1,onChange:n.onChange,onKeyDown:n.onKeyDown})}const Lf=Object.freeze(Object.defineProperty({__proto__:null,default:Nf},Symbol.toStringTag,{value:"Module"}));function Of(){const n=te({type:"number",initialValue:"50400"});return e.jsx(B,{children:e.jsx(B.Element,{term:"Beløp (NOK)",children:n.value})})}const If=Object.freeze(Object.defineProperty({__proto__:null,default:Of},Symbol.toStringTag,{value:"Module"}));function Bf(){const n=te({type:"number",initialValue:"50400"});return e.jsx(q,{label:"Beløp (NOK)",value:n.value,hideLabel:!1,onChange:n.onChange,onKeyDown:n.onKeyDown})}const Af=Object.freeze(Object.defineProperty({__proto__:null,default:Bf},Symbol.toStringTag,{value:"Module"}));function Mf(){const n=te({type:"bankAccountNumber",initialValue:"1234678910"});return e.jsx(q,{label:"Kontonummer (11 siffer)",value:n.value,hideLabel:!1,hasSpacing:!0,onChange:n.onChange,onKeyDown:n.onKeyDown})}const Hf=Object.freeze(Object.defineProperty({__proto__:null,default:Mf},Symbol.toStringTag,{value:"Module"}));function Vf(){const n=te({type:"bankAccountNumber",initialValue:"1234678910"});return e.jsx(B,{children:e.jsx(B.Element,{term:"Kontonummer",children:n.value})})}const Ff=Object.freeze(Object.defineProperty({__proto__:null,default:Vf},Symbol.toStringTag,{value:"Module"}));function zf(){const n=te({type:"nationalIdentityNumber",initialValue:"22113344566"});return e.jsx(q,{label:"Fødselsnummer (11 siffer)",value:n.value,hideLabel:!1,hasSpacing:!0,onChange:n.onChange,onKeyDown:n.onKeyDown})}const Gf=Object.freeze(Object.defineProperty({__proto__:null,default:zf},Symbol.toStringTag,{value:"Module"}));function Kf(){const n=Ge({value:"22113344566",type:"nationalIdentityNumber"});return e.jsx(B,{children:e.jsx(B.Element,{term:"Fødselsnummer",children:n.value})})}const $f=Object.freeze(Object.defineProperty({__proto__:null,default:Kf},Symbol.toStringTag,{value:"Module"}));function qf(){const n=te({type:"organisationNumber",initialValue:"987654321"});return e.jsx(q,{label:"Organisasjonsnummer (9 siffer)",value:n.value,hideLabel:!1,hasSpacing:!0,onChange:n.onChange,onKeyDown:n.onKeyDown})}const Jf=Object.freeze(Object.defineProperty({__proto__:null,default:qf},Symbol.toStringTag,{value:"Module"}));function Wf(){const n=te({type:"organisationNumber",initialValue:"987654321"});return e.jsx(B,{children:e.jsx(B.Element,{term:"Organisasjonsnummer",children:n.value})})}const Xf=Object.freeze(Object.defineProperty({__proto__:null,default:Wf},Symbol.toStringTag,{value:"Module"}));function Uf(){const n=te({type:"phoneNumber",initialValue:"12345678"});return e.jsx(q,{label:"Telefon",value:n.value,hideLabel:!1,hasSpacing:!0,onChange:n.onChange,onKeyDown:n.onKeyDown})}const Zf=Object.freeze(Object.defineProperty({__proto__:null,default:Uf},Symbol.toStringTag,{value:"Module"}));function Yf(){const n=te({type:"phoneNumber",initialValue:"12345678"});return e.jsx(B,{children:e.jsx(B.Element,{term:"Telefon",children:n.value})})}const Qf=Object.freeze(Object.defineProperty({__proto__:null,default:Yf},Symbol.toStringTag,{value:"Module"})),eh="_mainContent_1a8kh_1",nh="_article_1a8kh_10",th="_wideContent_1a8kh_16",ah="_marginBottomXL_1a8kh_22",rh="_marginTopS_1a8kh_26",ze={mainContent:eh,article:nh,wideContent:th,marginBottomXL:ah,marginTopS:rh};function oh(){const n=s.useId(),[t,a]=s.useState(1),[l,r]=s.useState(void 0),[i,d]=s.useState(!1),c=()=>{const m=t+1;a(m)};return e.jsxs(e.Fragment,{children:[e.jsx(be,{}),e.jsxs("main",{className:ze.mainContent,children:[e.jsx(z,{className:ze.marginBottomXL,children:e.jsxs(z.List,{shouldCollapse:!0,children:[e.jsx(z.Item,{children:e.jsx(z.Link,{href:"#",children:"Breadcrumb 1"})}),e.jsx(z.Item,{children:e.jsx(z.Link,{href:"#",children:"Breadcrumb 2"})}),e.jsx(z.Item,{children:e.jsx(z.Link,{href:"#",children:"Breadcrumb 3"})}),e.jsx(z.Item,{children:e.jsx(z.Link,{href:"#",children:"Breadcrumb 4"})})]})}),e.jsxs("div",{className:ze.article,children:[e.jsx(E,{as:"h1",level:2,hasSpacing:!0,children:"Eksempel på layout i publikumsløsninger"}),e.jsxs(f,{hasSpacing:!0,children:["Layouten er sentret. På større skjermer har man flere containerbredder til rådighet. På mobil er det normalt bare én. Denne teksten ligger i en container med bredden --semantic-responsive-article. Containerbredder er dokumentert på Designtokens-undersiden: ",e.jsx(ge,{href:"#",children:"Containers"}),"."]})]}),e.jsx("div",{className:ze.wideContent,children:e.jsx(cn,{className:ze.marginBottomXL,variant:"filled",titleAs:"h2",title:"Størrelser er en del av komponentene",renderIcon:()=>e.jsx(Xa,{size:"largePlus"}),children:"Denne Panelen ligger i en container med bredden --semantic-responsive-wide-content. Innholdet i Panel har en innebygd containerbredde på --semantic-responsive-article, for å venstre- og høyrejustere denne teksten med resten av siden."})}),e.jsxs(ce,{className:ze.marginBottomXL,children:[t>=1&&e.jsx(ce.Step,{id:`${n}-1`,variant:t===1?"active":"passive",title:"StepList har også en innebygd containerbredde",stepNumber:1,onNext:c,children:"Stegene i StepList har fått en bredde på --semantic-responsive-article. Dette gjør at innholdet i stegene er venstre- og høyrejustert med resten av siden."}),t>=2&&e.jsx(ce.Step,{id:`${n}-2`,variant:t===2?"active":"passive",title:"Vil du gå videre?",stepNumber:2,onEdit:t>3&&t<5?()=>a(2):void 0,onNext:()=>{l?c():d(!0)},children:t===2?e.jsxs(e.Fragment,{children:[e.jsxs(V,{legend:"Vil du gå videre?",errorMessage:i?"Kryss av om du vil gå videre":void 0,hideLegend:!0,onChange:m=>{d(!1),r(m.target.value)},children:[e.jsx(V.Radio,{id:"step2radio",value:"ja",description:"Velger du ja, vil du få et positivt resultat",children:"Ja"}),e.jsx(V.Radio,{value:"nei",description:"Velger du nei, vil du få et nøytralt resultat",children:"Nei"})]}),e.jsx(f,{hasSpacing:!0,children:"Velger du ingenting og klikker på Neste-knappen, vil du få en feilmelding."}),e.jsx(Ke,{showErrorSummary:i,children:e.jsx(Ke.Error,{referenceId:"step2radio",children:"Vil du gå videre?"})})]}):e.jsx("div",{children:l})}),t>=3&&e.jsx(ce.Step,{id:`${n}-3`,variant:t===3?"active":"passive",title:"Oppsummering før resultat",stepNumber:3,onNext:c,children:t===3?e.jsx(G,{color:"ochre",className:ze.marginTopS,children:e.jsxs(G.Content,{children:[e.jsx(f,{hasSpacing:!0,children:"Oppsummering av valget ditt:"}),e.jsxs(K,{hasSpacing:!0,children:[e.jsx(K.Element,{children:"Du har forstått innholdet"}),e.jsx(K.Element,{children:`Du vil se et ${l==="ja"?"positivt":"nøytralt"} resultat`})]}),e.jsx(Oe,{children:"Jeg bekrefter at opplysningene ovenfor stemmer"})]})}):e.jsx("div",{children:"Oppsummering"})}),t>=4&&l==="ja"&&e.jsxs(ce.Step,{id:`${n}-4`,title:"Positivt resultat",variant:"positiveResult",stepNumber:4,introTitle:"Dette er en overskrift.",introTitleAs:"h4",introContent:e.jsx(f,{children:"Husk å sette riktig overskrifts-tag til overskriften."}),children:[e.jsx(f,{hasSpacing:!0,children:"Her ligger mer utfyllende informasjon om resultatet. I veiledere pleier vi å vise resultatet sammen med StepList. I skjemaer for privatpersoner og virksomheter sender vi brukeren til en egen kvitteringsside."}),e.jsxs(L,{children:[e.jsx(L.Link,{href:"#",children:"Eksempel på kvittering"}),e.jsx(L.Link,{href:"https://www.skatteetaten.no/stilogtone/monster/skjemadesign/skjema-med-steplist/",target:"_blank",children:"Skjema med StepList"})]}),e.jsx(f,{children:"Resultatet er sentrert. Rammen har fått en maksbredde på --container-m, mens innholdet har en bredde på --semantic-responsive-article for å venstre- og høyrejustere teksten med resten av siden."})]}),t>=4&&l==="nei"&&e.jsx(ce.Step,{id:`${n}-4`,title:"Nøytralt resultat",variant:"passive",stepNumber:4,children:e.jsx(f,{hasSpacing:!0,children:"Her ligger informasjon om resultatet. Siden du valgte nei, er resultatet nøytralt."})})]})]}),e.jsx(pe,{})]})}const sh=Object.freeze(Object.defineProperty({__proto__:null,default:oh},Symbol.toStringTag,{value:"Module"})),lh=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),ih=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),dh=`[
  "standard-med-høyre-ikon",
  "bakgrunnsfarge",
  "liten-med-venstre-ikon",
  "med-tilleggsikon",
  "ulike-størrelser",
  "utvidet-fra-start"
]
`,ch=`import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AccordionBackgroundColorStateExample(): JSX.Element {
  return (
    <Accordion color={'ochre'} iconPosition={'right'}>
      <Accordion.Item title={'Informasjon fra skattemeldingen'}>
        <Paragraph>
          {'Samlet informasjon som er relevant for vurdering av saken.'}
        </Paragraph>
      </Accordion.Item>

      <Accordion.Item title={'Heftelser'}>
        <Paragraph>
          {
            'Oversikt over registrerte heftelser som påvirker videre behandling.'
          }
        </Paragraph>
      </Accordion.Item>

      <Accordion.Item title={'Pågående saker'}>
        <Paragraph>{'Viser saker som allerede er under behandling.'}</Paragraph>
      </Accordion.Item>
    </Accordion>
  );
}
`,mh=`import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AccordionSmallLeftIconStateExample(): JSX.Element {
  return (
    <Accordion size={'small'} iconPosition={'left'}>
      <Accordion.Item title={'Restskatt på 1 000 kroner eller mer'}>
        <Paragraph>
          {
            'Liten variant med venstre ikon for kompakt visning av samme innhold.'
          }
        </Paragraph>
      </Accordion.Item>

      <Accordion.Item title={'Restskatt under 1 000 kroner'}>
        <Paragraph>
          {'Brukes når du trenger mindre visuell vekt, men samme struktur.'}
        </Paragraph>
      </Accordion.Item>
    </Accordion>
  );
}
`,uh=`import { JSX } from 'react';

import { IconButton, Link } from '@skatteetaten/ds-buttons';
import { Accordion } from '@skatteetaten/ds-collections';
import { DescriptionList } from '@skatteetaten/ds-content';
import {
  AccountMultipleSVGpath,
  ChatBubbleOutlineSVGpath,
  CompanySVGpath,
  CopySVGpath,
  DescriptionSVGpath,
} from '@skatteetaten/ds-icons';
import { Tag } from '@skatteetaten/ds-status';

export default function AccordionThemeIconExample(): JSX.Element {
  return (
    <Accordion id={'virksomhet'} size={'small'}>
      <Accordion.Item
        title={'987 654 321\\nStødig Sjappe 1'}
        svgPath={CompanySVGpath}
      >
        <DescriptionList>
          <DescriptionList.Element term={'Virksomhetsnavn'}>
            {'Stødig Sjappe 1'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Organisasjons-\\nnummer'}>
            {'999 999 999'}
            <IconButton
              svgPath={CopySVGpath}
              title={'Kopier organisasjonsnummeret'}
              size={'small'}
              onClick={() => {
                navigator.clipboard.writeText('999999999');
              }}
            />
          </DescriptionList.Element>
          <DescriptionList.Element term={'Telefonnummer'}>
            {'+47 99 99 99 99'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Forretningsadresse'}>
            <div>{'Norges vei 1'}</div>
            <div>{'4878 Grimstad'}</div>
          </DescriptionList.Element>
          <DescriptionList.Element term={'Status'}>
            <Tag color={'burgundy'}>{'Konkurs 27.11.24'}</Tag>
          </DescriptionList.Element>
          <DescriptionList.Element term={'Org.form'}>
            {'Aksjeselskap'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Næringskode'}>
            {'65.102'}
          </DescriptionList.Element>
          <DescriptionList.Element term={'Virksomhetsnavn'}>
            {'Stødig Sjappe 1'}
          </DescriptionList.Element>
          <Link href={'#'}>{'Gå til partssoversikt'}</Link>
        </DescriptionList>
      </Accordion.Item>
      <Accordion.Item title={'Roller'} svgPath={AccountMultipleSVGpath}>
        <DescriptionList>
          <DescriptionList.Element term={'Eier'}>
            <Link href={'#eier'}>{'Chad-Henning Krøger'}</Link>
          </DescriptionList.Element>
          <DescriptionList.Element term={'Styreleder'}>
            <Link href={'#'}>{'Fredrik Durst'}</Link>
          </DescriptionList.Element>
        </DescriptionList>
      </Accordion.Item>
      <Accordion.Item
        title={'Alle dokumenter på part'}
        svgPath={DescriptionSVGpath}
      >
        <em>{'Dokumentasjon og historikk her'}</em>
      </Accordion.Item>
      <Accordion.Item
        title={'Alle notater på part'}
        svgPath={ChatBubbleOutlineSVGpath}
      >
        <em>{'Notater fra saksbehandler her'}</em>
      </Accordion.Item>
    </Accordion>
  );
}
`,ph=`import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AccordionStandardRightIconStateExample(): JSX.Element {
  return (
    <Accordion iconPosition={'right'}>
      <Accordion.Item title={'Restskatt på 1 000 kroner eller mer'}>
        <Paragraph>
          {
            'Du får betalingsinformasjon og frister for restskatten i dette steget.'
          }
        </Paragraph>
      </Accordion.Item>

      <Accordion.Item title={'Restskatt under 1 000 kroner'}>
        <Paragraph>
          {'Hvis restskatten er under 1 000 kroner, gjelder egne regler for'}
          {'innbetaling.'}
        </Paragraph>
      </Accordion.Item>
    </Accordion>
  );
}
`,gh=`import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function AccordionSizesExample(): JSX.Element {
  return (
    <div className={styles.accordionColumn}>
      <Accordion size={'small'}>
        <Accordion.Item title={'Liten'}>
          <Paragraph>
            {'Liten størrelse passer når innholdet skal ta lite plass.'}
          </Paragraph>
        </Accordion.Item>
      </Accordion>

      <Accordion size={'medium'}>
        <Accordion.Item title={'Medium'}>
          <Paragraph>
            {'Medium størrelse er standard og passer i de fleste tilfeller.'}
          </Paragraph>
        </Accordion.Item>
      </Accordion>

      <Accordion size={'large'}>
        <Accordion.Item title={'Stor'}>
          <Paragraph>
            {'Stor størrelse gir innholdet mer luft og visuell vekt.'}
          </Paragraph>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
`,fh=`.accordionColumn {
  display: flex;
  flex-direction: column;
  gap: var(--semantic-spacing-m, 1rem);
}
`,hh=`import { JSX } from 'react';

import { Accordion } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AccordionDefaultExpandedStateExample(): JSX.Element {
  return (
    <Accordion iconPosition={'right'}>
      <Accordion.Item title={'Skatteoppgjør'} isDefaultExpanded>
        <Paragraph>{'Dette panelet er åpnet som standard.'}</Paragraph>
      </Accordion.Item>

      <Accordion.Item title={'Betaling og frister'}>
        <Paragraph>
          {'Dette panelet er lukket til brukeren åpner det.'}
        </Paragraph>
      </Accordion.Item>
    </Accordion>
  );
}
`,vh=`import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AlertWarningStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Denne advarselen er synlig når siden lastes, og har derfor fått overstyrt aria-live="off" .'
        }
      </Paragraph>
      <Alert variant={'warning'} ariaLive={'off'} showAlert>
        {
          'Hvis du henter frem skatteopplysninger for en person, blir det synlig for denne personen.'
        }
      </Alert>
    </>
  );
}
`,bh=`import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AlertDangerStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Dette varselet får aria-live="assertive" som standard, og er ment til kritiske situasjoner og tidssensitive meldinger. '
        }
      </Paragraph>
      <Alert variant={'danger'} ariaLive={'assertive'} showAlert>
        {'Strengt fortrolig (Kode 6)'}
      </Alert>
    </>
  );
}
`,_h=`import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AlertErrorStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Vi antar at feil vises dynamisk og får aria-live="polite" som standard:'
        }
      </Paragraph>
      <Alert variant={'error'} showAlert>
        {'Avvist av kortutsteder.'}
      </Alert>
    </>
  );
}
`,xh=`import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AlertInfoStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Denne beskjeden er synlig på siden når siden lastes og overstyres derfor med aria-live="off". '
        }
      </Paragraph>
      <Alert variant={'info'} ariaLive={'off'} showAlert>
        {
          'Vi jobber med å utvikle denne siden, og du vil kunne se flere av sakene dine etter hvert.'
        }
      </Alert>
    </>
  );
}
`,kh=`import { JSX } from 'react';

import { Alert } from '@skatteetaten/ds-status';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function AlertSuccessStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Dynamiske varsler får aria-live="polite" som standard når de ikke er kritiske.'
        }
      </Paragraph>
      <Alert variant={'success'} ariaLive={'polite'} showAlert>
        {'Filen ble lastet opp'}
      </Alert>
    </>
  );
}
`,Sh=`import { JSX } from 'react';

import { Blockquote } from '@skatteetaten/ds-typography';

export default function BlockquotePreviewStateExample(): JSX.Element {
  return (
    <Blockquote borderColor={'forest'}>
      {'«God design handler om '}
      <strong>{'klarhet'}</strong>
      {', men også om '}
      <em>{'forståelse'}</em>
      {' og intensjon.»'}
    </Blockquote>
  );
}
`,yh=`import { useState, JSX } from 'react';

import { OpenClose } from '@skatteetaten/ds-collections';
import { Tag } from '@skatteetaten/ds-status';
import { Blockquote, Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function BlockquoteLegalTextStateExample(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <OpenClose
      title={isExpanded ? 'Skjul regelverk' : 'Vis regelverk'}
      iconPosition={'right'}
      size={'medium'}
      isExpanded={isExpanded}
      onClick={() => setIsExpanded((currentValue) => !currentValue)}
    >
      <Blockquote borderColor={'graphite'}>
        <div className={styles.blockquoteTagWrapper}>
          <Tag color={'graphite'} size={'small'}>
            {'§ Regelverk'}
          </Tag>
        </div>

        <Paragraph hasSpacing>
          {'(1) Denne loven får anvendelse i merverdiavgiftsområdet.'}
        </Paragraph>
        <Paragraph hasSpacing>
          {
            '(2) Med merverdiavgiftsområdet menes det norske fastlandet og alt område innenfor territorialgrensen, men ikke Svalbard, Jan Mayen eller de norske bilandene.'
          }
        </Paragraph>
      </Blockquote>
    </OpenClose>
  );
}
`,jh=`.blockquoteTagWrapper {
  margin-bottom: var(--spacing-s);
}
`,Th=`["standard", "ikke-kollapsbar"]
`,Eh=`import { JSX } from 'react';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

export default function BreadcrumbsNoCollapseStateExample(): JSX.Element {
  return (
    <Breadcrumbs>
      <Breadcrumbs.List shouldCollapse={false}>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#arbeidsliste'}>
            {'Arbeidsliste'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#eplepress-as'}>
            {'Eplepress AS'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#arbeidsoppgave'}>
            {'Arbeidsoppgave'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#informasjon'}>
            {'Tittel knyttet til oppgave'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
}
`,Ch=`import { JSX } from 'react';

import { Breadcrumbs } from '@skatteetaten/ds-navigation';

export default function BreadcrumbsStandardStateExample(): JSX.Element {
  return (
    <Breadcrumbs>
      <Breadcrumbs.List>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#min-side'}>{'Min side'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#frister-og-oppgaver'}>
            {'Frister og oppgaver'}
          </Breadcrumbs.Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Breadcrumbs.Link href={'#frist'}>{'Frist'}</Breadcrumbs.Link>
        </Breadcrumbs.Item>
      </Breadcrumbs.List>
    </Breadcrumbs>
  );
}
`,Ph=`["primær-og-sekundær", "i-modal", "med-spinner", "som-lenke", "variants"]
`,Rh=`import { useRef, JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { DeleteSVGpath } from '@skatteetaten/ds-icons';
import { Modal } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function ButtonModalActionsStateExample(): JSX.Element {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = (): void => {
    modalRef.current?.showModal();
  };

  const closeModal = (): void => {
    modalRef.current?.close();
  };

  return (
    <>
      <Button variant={'primary'} onClick={openModal}>
        {'Åpne modal'}
      </Button>

      <Modal ref={modalRef} title={'Bekreft handling'}>
        <Paragraph hasSpacing>
          {'Du er i ferd med å slette en melding. Velg handling under.'}
        </Paragraph>

        <div className={styles.buttonModalActions}>
          <div className={styles.buttonModalActionsGroup}>
            <Button variant={'primary'} onClick={closeModal}>
              {'Bekreft'}
            </Button>
            <Button variant={'secondary'} onClick={closeModal}>
              {'Avbryt'}
            </Button>
          </div>

          <Button
            variant={'danger'}
            svgPath={DeleteSVGpath}
            onClick={closeModal}
          >
            {'Slett melding'}
          </Button>
        </div>
      </Modal>
    </>
  );
}
`,wh=`.buttonModalActions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-top: var(--spacing-m);
  gap: var(--spacing-m);
}

.buttonModalActionsGroup {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-s);
}
`,Dh=`import { useState, JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';

export default function ButtonPrimarySpinnerStateExample(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (): void => {
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <Button
      variant={'primary'}
      hasSpinner={isSubmitting}
      onClick={handleSubmit}
    >
      {'Send inn'}
    </Button>
  );
}
`,Nh=`import { JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';

import styles from './index.module.scss';

export default function ButtonPrimarySecondaryRowStateExample(): JSX.Element {
  return (
    <div className={styles.buttonRow}>
      <Button variant={'primary'}>{'Send inn'}</Button>
      <Button variant={'secondary'}>{'Avbryt'}</Button>
    </div>
  );
}
`,Lh=`.buttonRow {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-m);
}
`,Oh=`import { JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';

export default function ButtonAsLinkStateExample(): JSX.Element {
  return (
    <Button href={'/min-side'} variant={'primary'}>
      {'Til Min side'}
    </Button>
  );
}
`,Ih=`import { JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';

import styles from './index.module.scss';

export default function ButtonVariantsStateExample(): JSX.Element {
  return (
    <div className={styles.buttonRow}>
      <Button variant={'primary'}>{'Send inn'}</Button>
      <Button variant={'secondary'}>{'Avbryt'}</Button>
      <Button variant={'tertiary'}>{'Se detaljer'}</Button>
      <Button variant={'danger'}>{'Slett'}</Button>
    </div>
  );
}
`,Bh=`.buttonRow {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-m);
}
`,Ah=`["standard", "fargevarianter", "med-merknad"]
`,Mh=`import { JSX } from 'react';

import { Card } from '@skatteetaten/ds-content';
import { Heading } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function CardColorsStateExample(): JSX.Element {
  return (
    <div className={styles.cardColors}>
      {(
        ['white', 'ochre', 'forest', 'burgundy', 'denim', 'graphite'] as const
      ).map((color) => (
        <Card key={color} color={color} spacing={'s'}>
          <Card.Header>
            <Heading as={'h3'}>{color}</Heading>
          </Card.Header>
          <Card.Content>
            {'Eksempel på Card med farge '}
            <strong>{color}</strong>
            {'.'}
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
`,Hh=`.cardColors {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}
`,Vh=`import { JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { Heading } from '@skatteetaten/ds-typography';

export default function CardWithAlertStateExample(): JSX.Element {
  return (
    <Card color={'white'} spacing={'m'}>
      <Card.Alert
        variant={'warning'}
        title={'Frist nærmer seg'}
        showAlert
        onClose={() => undefined}
      >
        {'Fristen for å levere er 30. april. Sørg for at alle opplysninger er'}
        {'riktige.'}
      </Card.Alert>
      <Card.Header>
        <Heading as={'h3'}>{'Skattemelding 2026'}</Heading>
      </Card.Header>
      <Card.Content>
        {'Kontroller opplysningene dine og send inn skattemeldingen.'}
      </Card.Content>
      <Card.Actions>
        <Button href={'#'}>{'Gå til skattemeldingen'}</Button>
      </Card.Actions>
    </Card>
  );
}
`,Fh=`import { JSX } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { Tag } from '@skatteetaten/ds-status';
import { Heading } from '@skatteetaten/ds-typography';

export default function CardPreviewStateExample(): JSX.Element {
  return (
    <Card color={'graphite'}>
      <Card.Header rightContent={<Tag>{'Status'}</Tag>}>
        <Heading as={'h3'}>{'Tittel på kortet'}</Heading>
      </Card.Header>
      <Card.Content>
        {'Alle som har laget en nettside, trengt litt fylltekst eller bare'}
        {
          'surfet rundt på nettet har antageligvis sett disse ordene, etterfulgt'
        }
        {
          'av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.'
        }
      </Card.Content>
      <Card.Actions>
        <Button href={'#'}>{'Gå til tjenesten'}</Button>
      </Card.Actions>
    </Card>
  );
}
`,zh=`import { JSX } from 'react';

import { Checkbox } from '@skatteetaten/ds-forms';

export default function CheckboxPreviewStateExample(): JSX.Element {
  return <Checkbox>{'Jeg bekrefter at opplysningene er korrekte'}</Checkbox>;
}
`,Gh=`import { JSX } from 'react';

import { CheckboxGroup } from '@skatteetaten/ds-forms';

export default function CheckboxGroupPreviewStateExample(): JSX.Element {
  return (
    <CheckboxGroup legend={'Hva vil du varsles om?'}>
      <CheckboxGroup.Checkbox>{'Ny melding i innboks'}</CheckboxGroup.Checkbox>
      <CheckboxGroup.Checkbox>
        {'Endring i skattekortet'}
      </CheckboxGroup.Checkbox>
      <CheckboxGroup.Checkbox>{'Frist nærmer seg'}</CheckboxGroup.Checkbox>
    </CheckboxGroup>
  );
}
`,Kh=`import { useState, JSX } from 'react';

import { Chips } from '@skatteetaten/ds-collections';
import { Heading } from '@skatteetaten/ds-typography';

const lokasjoner = ['Drammen', 'Oslo', 'Bergen', 'Trondheim'];

export default function ChipsCasesFromRemovableStateExample(): JSX.Element {
  const [filter, setFilter] = useState<string[]>(lokasjoner);

  return (
    <div>
      <Heading level={5} as={'h2'} id={'saker-fra-heading'} hasSpacing>
        {'Viser saker fra'}
      </Heading>
      <Chips ariaLabelledBy={'saker-fra-heading'}>
        {filter.map((lokasjon) => (
          <Chips.Removable
            key={lokasjon}
            onClose={() => {
              setFilter((forrige) => forrige.filter((x) => x !== lokasjon));
            }}
          >
            {lokasjon}
          </Chips.Removable>
        ))}
      </Chips>
    </div>
  );
}
`,$h=`import { useState, JSX } from 'react';

import { Chips } from '@skatteetaten/ds-collections';
import { Heading } from '@skatteetaten/ds-typography';

const dager = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag'];

export default function ChipsContactDaysToggleStateExample(): JSX.Element {
  const [valgteDager, setValgteDager] = useState<string[]>([
    dager[0],
    dager[2],
  ]);

  return (
    <div>
      <Heading level={5} as={'h2'} id={'kontakt-dager-heading'} hasSpacing>
        {'Jeg kan kontaktes på'}
      </Heading>
      <Chips ariaLabelledBy={'kontakt-dager-heading'}>
        {dager.map((dag) => (
          <Chips.Toggle
            key={dag}
            isSelected={valgteDager.includes(dag)}
            onClick={() => {
              setValgteDager((forrige) =>
                forrige.includes(dag)
                  ? forrige.filter((x) => x !== dag)
                  : [...forrige, dag]
              );
            }}
          >
            {dag}
          </Chips.Toggle>
        ))}
      </Chips>
    </div>
  );
}
`,qh=`import { useState, JSX } from 'react';

import { Chips } from '@skatteetaten/ds-collections';
import { Heading } from '@skatteetaten/ds-typography';

const lokasjoner = ['Drammen', 'Oslo', 'Bergen', 'Trondheim'];

export default function ChipsOfficeLocationToggleNoCheckmarkStateExample(): JSX.Element {
  const [valgteLokasjoner, setValgteLokasjoner] = useState<string[]>([
    lokasjoner[1],
    lokasjoner[3],
  ]);

  return (
    <div>
      <Heading level={5} as={'h2'} id={'kontorsted-heading'} hasSpacing>
        {'Kontorsted'}
      </Heading>
      <Chips ariaLabelledBy={'kontorsted-heading'}>
        {lokasjoner.map((lokasjon) => (
          <Chips.Toggle
            key={lokasjon}
            showCheckmark={false}
            isSelected={valgteLokasjoner.includes(lokasjon)}
            onClick={() => {
              setValgteLokasjoner((forrige) =>
                forrige.includes(lokasjon)
                  ? forrige.filter((x) => x !== lokasjon)
                  : [...forrige, lokasjon]
              );
            }}
          >
            {lokasjon}
          </Chips.Toggle>
        ))}
      </Chips>
    </div>
  );
}
`,Jh=`["enkeltvalg", "velge-flere", "grupperte-valg", "asynkront-søk"]
`,Wh=`import type { ComboboxOption } from '@skatteetaten/ds-forms';

export function generatePerformanceTestData(count: number): ComboboxOption[] {
  const domains = [
    'Inntekt',
    'Merverdiavgift',
    'Arbeidsgiveravgift',
    'Folkeregister',
    'Skattemelding',
    'Skattekort',
    'Verdsettelse',
    'Klage',
    'Kontroll',
    'Saksbehandling',
    'Utbetaling',
    'Veiledning',
    'Sikkerhet',
    'Internasjonal',
    'Næring',
    'Pensjon',
    'IT',
  ];
  const teams = ['Nord', 'Sør', 'Øst', 'Vest'];

  return Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const domain = domains[index % domains.length];
    const team = teams[index % teams.length];

    return {
      value: \`avdeling-\${number}\`,
      label: \`\${domain} \${team} \${number}\`,
    };
  });
}
`,Xh=`import { JSX, useState } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

import { generatePerformanceTestData } from './combobox.stories.utils';

const ComboboxLoadingStatesExample = (): JSX.Element => {
  const [asyncLoading, setAsyncLoading] = useState(false);
  const [asyncOptions, setAsyncOptions] = useState<
    ReturnType<typeof generatePerformanceTestData>
  >([]);

  const simulateAsyncSearch = (value: string): void => {
    setAsyncLoading(true);
    setAsyncOptions([]);

    const startTime = performance.now();

    const performanceData = generatePerformanceTestData(5000);
    const filteredOptions = performanceData.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );

    const processingTime = performance.now() - startTime;

    const loadingDuration = Math.max(processingTime + 100, 500); // Minimum 500ms for UX

    window.setTimeout(() => {
      setAsyncOptions(filteredOptions);
      setAsyncLoading(false);
    }, loadingDuration);
  };

  const handleInputChange = (value: string): void => {
    if (value.length >= 2) {
      simulateAsyncSearch(value);
    } else {
      setAsyncLoading(false);
      setAsyncOptions([]);
    }
  };

  return (
    <>
      <Paragraph hasSpacing>
        {
          'Eksempel på bruk av combobox med lastetilstander og asynkront søk med 5000 elementer. Skriv minst 2 tegn i søkefeltet for å simulere et API-kall som henter og filtrerer alternativer.'
        }
      </Paragraph>

      <Combobox
        label={'Gruppe'}
        description={'Skriv minst 2 tegn for å søke'}
        isLoading={asyncLoading}
        options={asyncOptions}
        minSearchLength={2}
        onInputChange={handleInputChange}
      />
    </>
  );
};

export default ComboboxLoadingStatesExample;
`,Uh=`import { JSX } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';

const options = [
  { value: 'akershus', label: 'Akershus' },
  { value: 'buskerud', label: 'Buskerud' },
  { value: 'finnmark', label: 'Finnmark' },
  { value: 'innlandet', label: 'Innlandet' },
  { value: 'møre-og-romsdal', label: 'Møre og Romsdal' },
  { value: 'nordland', label: 'Nordland' },
  { value: 'oslo', label: 'Oslo' },
  { value: 'rogaland', label: 'Rogaland' },
  { value: 'telemark', label: 'Telemark' },
  { value: 'troms', label: 'Troms' },
  { value: 'trøndelag', label: 'Trøndelag' },
  { value: 'vestfold', label: 'Vestfold' },
  { value: 'østfold', label: 'Østfold' },
  { value: 'vestland', label: 'Vestland' },
  { value: 'agder', label: 'Agder' },
];

export default function ComboboxPreviewStateExample(): JSX.Element {
  return <Combobox label={'Fylke'} options={options} />;
}
`,Zh=`import { JSX } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';

const options = [
  { value: 'baerum', label: 'Bærum', group: 'Akershus' },
  { value: 'lillestrom', label: 'Lillestrøm', group: 'Akershus' },
  { value: 'as', label: 'Ås', group: 'Akershus' },
  { value: 'bergen', label: 'Bergen', group: 'Vestland' },
  { value: 'sogndal', label: 'Sogndal', group: 'Vestland' },
  { value: 'askoy', label: 'Askøy', group: 'Vestland' },
  { value: 'trondheim', label: 'Trondheim', group: 'Trøndelag' },
  { value: 'stjordal', label: 'Stjørdal', group: 'Trøndelag' },
  { value: 'levanger', label: 'Levanger', group: 'Trøndelag' },
];

export default function ComboboxGroupedOptionsStateExample(): JSX.Element {
  return <Combobox label={'Kommune'} options={options} />;
}
`,Yh=`import { JSX } from 'react';

import { Combobox } from '@skatteetaten/ds-forms';

const options = [
  { value: 'akershus', label: 'Akershus' },
  { value: 'buskerud', label: 'Buskerud' },
  { value: 'finnmark', label: 'Finnmark' },
  { value: 'innlandet', label: 'Innlandet' },
  { value: 'møre-og-romsdal', label: 'Møre og Romsdal' },
  { value: 'nordland', label: 'Nordland' },
  { value: 'oslo', label: 'Oslo' },
  { value: 'rogaland', label: 'Rogaland' },
  { value: 'telemark', label: 'Telemark' },
  { value: 'troms', label: 'Troms' },
  { value: 'trøndelag', label: 'Trøndelag' },
  { value: 'vestfold', label: 'Vestfold' },
  { value: 'østfold', label: 'Østfold' },
  { value: 'vestland', label: 'Vestland' },
  { value: 'agder', label: 'Agder' },
];

export default function ComboboxMultipleStateExample(): JSX.Element {
  return (
    <Combobox
      label={'Fylker'}
      options={options}
      description={'Velg inntil tre'}
      maxSelected={3}
      multiple
    />
  );
}
`,Qh=`["standard", "min-og-max"]
`,ev=`import { JSX } from 'react';

import { DatePicker } from '@skatteetaten/ds-forms';

const minDate = new Date(2026, 0, 1);
const maxDate = new Date(2026, 11, 31);

export default function DatePickerWithMinMaxStateExample(): JSX.Element {
  return (
    <DatePicker
      label={'Velg dato i 2026'}
      minDate={minDate}
      maxDate={maxDate}
      helpText={'Du kan bare velge datoer i inneværende år.'}
    />
  );
}
`,nv=`import { JSX } from 'react';

import { DatePicker } from '@skatteetaten/ds-forms';

export default function DatePickerPreviewStateExample(): JSX.Element {
  return <DatePicker label={'Delg dato for innsending'} />;
}
`,tv=`["standard", "horisontal", "uthevet-verdi"]
`,av=`import { JSX } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';

export default function DescriptionListHorizontalStateExample(): JSX.Element {
  return (
    <DescriptionList variant={'horizontal'} isVerticalOnMobile={false}>
      <DescriptionList.Element term={'Referansenummer'}>
        {'123456'}
      </DescriptionList.Element>
      <DescriptionList.Element term={'Status'}>
        {'Sendt inn'}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
`,rv=`import { JSX } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';

export default function DescriptionListPreviewStateExample(): JSX.Element {
  return (
    <DescriptionList>
      <DescriptionList.Element term={'Saksbehandler'}>
        {'Kenneth Performance'}
      </DescriptionList.Element>
      <DescriptionList.Element term={'Status'}>
        {'Under behandling'}
      </DescriptionList.Element>
      <DescriptionList.Element term={'Sist endret'}>
        {'30.12.2013'}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
`,ov=`import { JSX } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';

export default function DescriptionListEmphasizedTextExample(): JSX.Element {
  return (
    <DescriptionList
      termWeight={'regular'}
      descriptionWeight={'bold'}
      descriptionDirection={'vertical'}
    >
      <DescriptionList.Element term={'Beløp til gode'}>
        {'4 250 kr'}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
`,sv=`["standard", "dekorelement", "meningsbærende"]
`,lv=`import { useRef, JSX } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { Card, DescriptionList, Divider } from '@skatteetaten/ds-content';
import { ArbeidTrygdPensjonIcon, EditSVGpath } from '@skatteetaten/ds-icons';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function DividerThemeExample(): JSX.Element {
  const headingRef = useRef<HTMLHeadingElement>(null);

  return (
    <>
      <Paragraph hasSpacing>
        {'Delestrek brukt som dekorelement og skjult for skjermleser'}
      </Paragraph>
      <div className={\`\${styles.flex} \${styles.gapM}\`}>
        <ArbeidTrygdPensjonIcon size={'extraLarge'} />
        <Heading as={'h1'} level={2}>
          {'Arbeid, trygd og pensjon'}
        </Heading>
      </div>
      <Divider spacingTop={'xs'} spacingBottom={'l'} ariaHidden />
      <Card className={styles.cardWidth}>
        <Card.Header>
          <Heading ref={headingRef} as={'h3'} canBeManuallyFocused>
            {'Andre inntekter'}
          </Heading>
        </Card.Header>
        <Card.Content>
          <DescriptionList>
            <DescriptionList.Element term={'Beløp'}>
              {'654 321'}
            </DescriptionList.Element>
          </DescriptionList>
        </Card.Content>
        <Card.Actions>
          <InlineButton svgPath={EditSVGpath}>{'Endre'}</InlineButton>
        </Card.Actions>
      </Card>
    </>
  );
}
`,iv=`.flex {
  display: flex;
  align-items: center;
}

.gapM {
  gap: var(--semantic-spacing-m, 1rem);
}

.cardWidth {
  width: 18rem;
}
`,dv=`import { JSX } from 'react';

import { Divider } from '@skatteetaten/ds-content';
import { DescriptionList } from '@skatteetaten/ds-content';
import { Card } from '@skatteetaten/ds-content';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function DividerSubtleStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {'Delestrek (nedtonet) som er meningsbærende og dermed ikke skjult for'}
        {'skjermleser.'}
      </Paragraph>
      <Card className={styles.dividerCard}>
        <Card.Header>
          <Heading as={'h3'}>{'Utregning'}</Heading>
        </Card.Header>
        <Card.Content classNames={{ children: styles.flexGrow }}>
          <DescriptionList
            className={styles.descriptionList}
            descriptionWeight={'regular'}
            termWeight={'regular'}
          >
            <DescriptionList.Element term={'Tall nummer 1'}>
              {'99 000'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Tall nummer 2'}>
              {'100 000'}
            </DescriptionList.Element>
            <DescriptionList.Element term={'Tall nummer 3'}>
              {'110 000'}
            </DescriptionList.Element>
          </DescriptionList>
          <Divider />
          <DescriptionList
            className={styles.descriptionList}
            descriptionWeight={'bold'}
            termWeight={'bold'}
          >
            <DescriptionList.Element term={'Sum'}>
              {'200 000'}
            </DescriptionList.Element>
          </DescriptionList>
        </Card.Content>
      </Card>
    </>
  );
}
`,cv=`.dividerCard {
  width: 18rem;
}

.flexGrow {
  flex-grow: 1;
}

.descriptionList {
  width: 100%;
}

.descriptionList :is(dt, dd) {
  text-align: right;
}

.descriptionList dt {
  text-align: left;
}
`,mv=`import { JSX } from 'react';

import { Divider } from '@skatteetaten/ds-content';

export default function DividerStrongStateExample(): JSX.Element {
  return <Divider variant={'strong'} spacingTop={'m'} spacingBottom={'m'} />;
}
`,uv=`import { JSX } from 'react';

import { ErrorMessage } from '@skatteetaten/ds-forms';

export default function ErrorMessagePreviewStateExample(): JSX.Element {
  return <ErrorMessage showError>{'Postnummer må fylles ut.'}</ErrorMessage>;
}
`,pv=`import { JSX } from 'react';

import { ErrorSummary } from '@skatteetaten/ds-forms';

export default function ErrorSummaryPreviewStateExample(): JSX.Element {
  return (
    <ErrorSummary
      title={'Du må rette disse feilene før du kan sende inn:'}
      showErrorSummary
    >
      <ErrorSummary.Error referenceId={'fornavn'}>
        {'Fornavn må fylles ut.'}
      </ErrorSummary.Error>
      <ErrorSummary.Error referenceId={'fodselsnummer'}>
        {'Fødselsnummer er ikke skrevet på riktig format.'}
      </ErrorSummary.Error>
    </ErrorSummary>
  );
}
`,gv=`["standard", "fra-og-til-dato"]
`,fv=`import { JSX } from 'react';

import { DatePicker, Fieldset } from '@skatteetaten/ds-forms';

import styles from './index.module.scss';

export default function FieldsetDateRangeStateExample(): JSX.Element {
  return (
    <Fieldset
      legend={'Hvilken periode trenger du bekreftelse for?'}
      helpText={'Legg inn hvilken periode du trenger bekreftelse for.'}
    >
      <DatePicker
        className={\`\${styles.inlineBlock} \${styles.exampleSpacing}\`}
        label={'Fra dato (dd.mm.åååå)'}
      />
      <DatePicker
        className={styles.inlineBlock}
        label={'Til dato (dd.mm.åååå)'}
      />
    </Fieldset>
  );
}
`,hv=`.inlineBlock {
  display: inline-block;
}

.exampleSpacing {
  margin-right: var(--semantic-spacing-s, 0.5rem);
}
`,vv=`import { JSX } from 'react';

import { Fieldset } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function FieldsetPreviewStateExample(): JSX.Element {
  return (
    <Fieldset legend={'Hvilken periode trenger du bekreftelse for?'}>
      <Paragraph>{'Innhold'}</Paragraph>
    </Fieldset>
  );
}
`,bv=`["standard", "med feil", "opplastede filer"]
`,_v=`import { JSX } from 'react';

import { FileUploader } from '@skatteetaten/ds-forms';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function FileUploaderWithErrorStateExample(): JSX.Element {
  return (
    <>
      <Paragraph hasSpacing>
        {'Når opplasting ikke kan starte står feilmeldingen under feltet.'}
      </Paragraph>
      <FileUploader
        label={'Last opp dokumentasjon'}
        acceptedFileFormats={['.pdf']}
        errorMessage={
          'Filtypen og filendelsen stemmer ikke overens, for eksempel kan en Word-fil ha filendelsen .pdf. Lagre filen på nytt i et støttet format og prøv igjen.'
        }
      />
    </>
  );
}
`,xv=`import { JSX } from 'react';

import { FileUploader } from '@skatteetaten/ds-forms';

const uploadedFiles = [
  {
    id: 'vedlegg-1',
    name: 'kvittering.pdf',
    href: '#',
  },
  {
    id: 'vedlegg-2',
    name: 'avtale.jpg',
    href: '#',
  },
];

export default function FileUploaderWithUploadedFilesStateExample(): JSX.Element {
  return (
    <FileUploader
      label={'Last opp dokumentasjon'}
      acceptedFileFormats={['.pdf', '.jpg', '.png']}
      uploadedFiles={uploadedFiles}
    />
  );
}
`,kv=`import { JSX } from 'react';

import { FileUploader } from '@skatteetaten/ds-forms';

export default function FileUploaderPreviewStateExample(): JSX.Element {
  return (
    <FileUploader
      label={'Last opp vedlegg'}
      acceptedFileFormats={['.pdf', '.jpg', '.png']}
      acceptedFileFormatsDisplay={'PDF, JPG eller PNG'}
    />
  );
}
`,Sv=`import { JSX } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';
import { Footer } from '@skatteetaten/ds-layout';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

export default function FooterWithCustomLinksStateExample(): JSX.Element {
  return (
    <Footer
      titleFirstColumn={'Om Skatteetaten'}
      titleSecondColumn={'Følg oss'}
      titleThirdColumn={'Presse'}
      secondColumn={
        <LinkGroup color={'white'}>
          <LinkGroup.Link href={'#'}>
            {'Se våre kontoer i sosiale medier'}
          </LinkGroup.Link>
        </LinkGroup>
      }
      thirdColumn={
        <>
          <Paragraph hasSpacing>
            {'Pressemeldinger, pressekontakter og annen informasjon for'}
            {'journalister.'}
          </Paragraph>
          <LinkGroup color={'white'} hasSpacing>
            <LinkGroup.Link href={'#'}>{'Se vart presserom'}</LinkGroup.Link>
          </LinkGroup>
          <Heading as={'h2'} level={3} hasSpacing>
            {'Bruke data fra Skatteetaten'}
          </Heading>
          <Paragraph hasSpacing>
            {'Skatteetaten deler data som andre virksomheter og etater kan'}
            {'gjenbruke for å forenkle og effektivisere eksisterende og nye'}
            {'digitale tjenester.'}
          </Paragraph>
          <LinkGroup color={'white'}>
            <LinkGroup.Link href={'#'}>
              {'Hvordan få tilgang til data'}
            </LinkGroup.Link>
          </LinkGroup>
        </>
      }
      openDefaultLinksInNewTab={false}
    >
      <Footer.LinkFirstColumn href={'#'}>
        {'Jobb i Skatteetaten'}
      </Footer.LinkFirstColumn>
      <Footer.LinkFirstColumn href={'#'}>{'Om oss'}</Footer.LinkFirstColumn>
      <Footer.LinkFirstColumn href={'#'}>
        {'Analyse og rapporter'}
      </Footer.LinkFirstColumn>
      <Footer.LinkFirstColumn href={'#'}>{'Forskning'}</Footer.LinkFirstColumn>
      <Footer.Link href={'#'}>{'Satser'}</Footer.Link>
      <Footer.Link href={'#'}>{'Skjema og tjenester'}</Footer.Link>
      <Footer.Link href={'#'}>{'RSS'}</Footer.Link>
      <Footer.Link href={'#'}>{'Tips oss'}</Footer.Link>
      <Footer.Link href={'#'} isExternal>
        {'Koronatiltak'}
      </Footer.Link>
    </Footer>
  );
}
`,yv=`import { JSX } from 'react';

import { Footer } from '@skatteetaten/ds-layout';

export default function FooterPreviewStateExample(): JSX.Element {
  return <Footer contactUsURL={'#'} securityURL={'#'} accessibilityURL={'#'} />;
}
`,jv=`["standard", "innbakt-stikktittel", "justert-størrelse", "med-ikon"]
`,Tv=`import { JSX } from 'react';

import { Heading } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function HeadingEmbeddedTopHeadingStateExample(): JSX.Element {
  return (
    <Heading as={'h1'} level={2} hasSpacing>
      <span className={styles.topHeading}>{'Arbeidsoppgave'}</span>
      {'Tittel på arbeidsoppgave'}
    </Heading>
  );
}
`,Ev=`.topHeading {
  display: block;
  font-size: initial;
  font-weight: initial;
}
`,Cv=`import { JSX } from 'react';

import { Heading } from '@skatteetaten/ds-typography';

export default function HeadingLevelsStateExample(): JSX.Element {
  return (
    <div>
      <Heading as={'h1'} level={5}>
        {'Kontaktinformasjon'}
      </Heading>
      <Heading as={'h2'} level={2} hasSpacing>
        {'Mine opplysninger'}
      </Heading>
    </div>
  );
}
`,Pv=`import { JSX } from 'react';

import { CompletedSVGpath, Icon } from '@skatteetaten/ds-icons';
import { Heading } from '@skatteetaten/ds-typography';

export default function HeadingWithIconStateExample(): JSX.Element {
  return (
    <Heading as={'h1'}>
      <Icon svgPath={CompletedSVGpath} size={'extraLarge'} />
      {' Skjemaet er sendt inn.'}
    </Heading>
  );
}
`,Rv=`import { JSX } from 'react';

import { Heading } from '@skatteetaten/ds-typography';

export default function HeadingLevelsStateExample(): JSX.Element {
  return (
    <div>
      <Heading as={'h1'} hasSpacing>
        {'Overskriftsnivå 1'}
      </Heading>
      <Heading as={'h2'} hasSpacing>
        {'Overskriftsnivå 2'}
      </Heading>
      <Heading as={'h3'} hasSpacing>
        {'Overskriftsnivå 3'}
      </Heading>
      <Heading as={'h4'} hasSpacing>
        {'Overskriftsnivå 4'}
      </Heading>
      <Heading as={'h5'} hasSpacing>
        {'Overskriftsnivå 5'}
      </Heading>
      <Heading as={'h6'} hasSpacing>
        {'Overskriftsnivå 6'}
      </Heading>
    </div>
  );
}
`,wv=`import { type ReactElement } from 'react';

import { DeploySVGpath, Icon } from '@skatteetaten/ds-icons';

export default function IconSizesStateExample(): ReactElement {
  return (
    <>
      <Icon svgPath={DeploySVGpath} size={'medium'} />
      <Icon svgPath={DeploySVGpath} size={'large'} />
      <Icon svgPath={DeploySVGpath} size={'extraLarge'} />
    </>
  );
}
`,Dv=`import { type ReactElement } from 'react';

import {
  CopySVGpath,
  CalculatorSVGpath,
  CheckSVGpath,
  EmailSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function IconSystemVariantStateExample(): ReactElement {
  return (
    <>
      <Paragraph hasSpacing>
        {'Systemikoner er vanlige og enkle ikoner som brukes på ulike steder:'}
      </Paragraph>
      <Icon svgPath={CopySVGpath} variant={'systemIcon'} />
      <Icon svgPath={CalculatorSVGpath} variant={'systemIcon'} />
      <Icon svgPath={CheckSVGpath} variant={'systemIcon'} />
      <Icon svgPath={EmailSVGpath} variant={'systemIcon'} />
    </>
  );
}
`,Nv=`import { type ReactElement } from 'react';

import {
  GaveArvSVGpath,
  SkogfondSVGpath,
  SelskapDeltakerfastsettingSVGpath,
  CarRecycleSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function IconThemeVariantStateExample(): ReactElement {
  return (
    <>
      <Paragraph hasSpacing>
        {'Temaikoner har en viss størrelse med plass til detaljer.'}
      </Paragraph>
      <Icon svgPath={GaveArvSVGpath} variant={'themeIcon'} />
      <Icon svgPath={SkogfondSVGpath} variant={'themeIcon'} />
      <Icon svgPath={SelskapDeltakerfastsettingSVGpath} variant={'themeIcon'} />
      <Icon svgPath={CarRecycleSVGpath} variant={'themeIcon'} />
    </>
  );
}
`,Lv=`[
  "standard",
  "med-custom-icon",
  "med-spinner",
  "outlined-og-ikke-outlined",
  "størrelser"
]
`,Ov=`import { JSX } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';

const CustomStarSVGpath = (
  <path
    d={
      'M12 2.5l2.84 5.76 6.36.93-4.6 4.48 1.09 6.33L12 17.02 6.31 20l1.09-6.33-4.6-4.48 6.36-.93L12 2.5z'
    }
  />
);

export default function IconButtonCustomSvgPathStateExample(): JSX.Element {
  return <IconButton svgPath={CustomStarSVGpath} title={'Favoritt'} />;
}
`,Iv=`import { useState, JSX } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { PrintSVGpath } from '@skatteetaten/ds-icons';

export default function IconButtonWithSpinnerStateExample(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (): void => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <IconButton
      svgPath={PrintSVGpath}
      title={'Skriv ut'}
      hasSpinner={isLoading}
      spinnerTitle={'Laster inn...'}
      onClick={handleClick}
    />
  );
}
`,Bv=`import { JSX } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { PrintSVGpath } from '@skatteetaten/ds-icons';

import styles from './index.module.scss';

export default function IconButtonOutlinedComparisonStateExample(): JSX.Element {
  return (
    <div className={styles.iconbuttonRow}>
      <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} />
      <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} isOutlined />
    </div>
  );
}
`,Av=`.iconbuttonRow {
  display: flex;
  gap: var(--spacing-s);
}
`,Mv=`import { JSX } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { PrintSVGpath } from '@skatteetaten/ds-icons';

export default function IconButtonStandardStateExample(): JSX.Element {
  return <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} />;
}
`,Hv=`import { JSX } from 'react';

import { IconButton } from '@skatteetaten/ds-buttons';
import { PrintSVGpath } from '@skatteetaten/ds-icons';

import styles from './index.module.scss';

export default function IconButtonSizeVariantsStateExample(): JSX.Element {
  return (
    <div className={styles.iconbuttonRow}>
      <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} size={'small'} />
      <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} size={'medium'} />
      <IconButton svgPath={PrintSVGpath} title={'Skriv ut'} size={'large'} />
    </div>
  );
}
`,Vv=`.iconbuttonRow {
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
}
`,Fv=`["standard", "ikon-til-høyre", "med-spinner", "uten-ikon"]
`,zv=`import { JSX } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { ArchiveOutlineSVGpath } from '@skatteetaten/ds-icons';

export default function InlineButtonIconRightStateExample(): JSX.Element {
  return (
    <InlineButton svgPath={ArchiveOutlineSVGpath} iconPosition={'right'}>
      {'Lagre i arkiv'}
    </InlineButton>
  );
}
`,Gv=`import { useState, JSX } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';

export default function InlineButtonWithSpinnerStateExample(): JSX.Element {
  const [isSaving, setIsSaving] = useState(false);

  const handleClick = (): void => {
    if (isSaving) {
      return;
    }

    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
    }, 2000);
  };

  return (
    <InlineButton
      hasSpinner={isSaving}
      spinnerTitle={'Lagre melding...'}
      onClick={handleClick}
    >
      {'Lagre melding'}
    </InlineButton>
  );
}
`,Kv=`import { JSX } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import { AddOutlineSVGpath } from '@skatteetaten/ds-icons';

export default function InlineButtonStandardStateExample(): JSX.Element {
  return (
    <InlineButton svgPath={AddOutlineSVGpath}>
      {'Legg til rapport'}
    </InlineButton>
  );
}
`,$v=`import { JSX } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';

export default function InlineButtonWithoutIconStateExample(): JSX.Element {
  return <InlineButton>{'Lukk melding'}</InlineButton>;
}
`,qv=`["standard", "ekstern-lenke", "med-ikon", "Åpne-i-ny-fane"]
`,Jv=`import { JSX } from 'react';

import { Link } from '@skatteetaten/ds-buttons';

export default function LinkExternalStateExample(): JSX.Element {
  return (
    <Link href={'https://www.altinn.no'} isExternal>
      {'Til altinn.no'}
    </Link>
  );
}
`,Wv=`import { JSX } from 'react';

import { Link } from '@skatteetaten/ds-buttons';
import { CalendarSVGpath } from '@skatteetaten/ds-icons';

export default function LinkWithIconStateExample(): JSX.Element {
  return (
    <Link href={'#ledig-dato'} svgPath={CalendarSVGpath}>
      {'Finn ledig dato'}
    </Link>
  );
}
`,Xv=`import { JSX } from 'react';

import { Link } from '@skatteetaten/ds-buttons';

export default function LinkStandardStateExample(): JSX.Element {
  return <Link href={'#pendler'}>{'Er du pendler?'}</Link>;
}
`,Uv=`import { JSX } from 'react';

import { Link } from '@skatteetaten/ds-buttons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function LinkOpenInNewTabStateExample(): JSX.Element {
  return (
    <Paragraph>
      {'Er det noe du er usikker på, kan du lese'}{' '}
      <Link href={'https://www.nav.no'} target={'_blank'} isExternal>
        {'rettledningen hos Nav (åpnes i ny fane)'}
      </Link>
      {'.'}
    </Paragraph>
  );
}
`,Zv=`import { JSX } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';

export default function LinkGroupPreviewStateExample(): JSX.Element {
  return (
    <LinkGroup variant={'anchors'}>
      <LinkGroup.Link href={'#'}>{'Ankerlenke 1'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Ankerlenke 2'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Ankerlenke 3'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Ankerlenke 4'}</LinkGroup.Link>
    </LinkGroup>
  );
}
`,Yv=`import { JSX } from 'react';

import { LinkGroup } from '@skatteetaten/ds-buttons';

export default function LinkGroupPreviewStateExample(): JSX.Element {
  return (
    <LinkGroup variant={'list'}>
      <LinkGroup.Link href={'#'}>{'Lenke nummer 1'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Lenke nummer 2'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'}>{'Lenke nummer 3'}</LinkGroup.Link>
      <LinkGroup.Link href={'#'} isExternal>
        {'Ekstern lenke'}
      </LinkGroup.Link>
    </LinkGroup>
  );
}
`,Qv=`import { JSX } from 'react';

import { List } from '@skatteetaten/ds-typography';

export default function ListUnorderedStateExample(): JSX.Element {
  return (
    <List>
      <List.Element key={'element_1'}>
        {\`Første punkt med \`}
        <strong>{'utheving'}</strong>
        {' og '}
        <em>{'betoning'}</em>
        {' i samme linje.'}
      </List.Element>
      <List.Element key={'element_2'}>
        {'Andre punkt uten utheving.'}
      </List.Element>
    </List>
  );
}
`,eb=`import { JSX } from 'react';

import { List } from '@skatteetaten/ds-typography';

export default function ListOrderedStateExample(): JSX.Element {
  return (
    <List as={'ol'}>
      <List.Element>{'Kontroller personopplysninger'}</List.Element>
      <List.Element>{'Legg til vedlegg'}</List.Element>
      <List.Element>{'Send inn skjema'}</List.Element>
    </List>
  );
}
`,nb=`import { JSX } from 'react';

import { List } from '@skatteetaten/ds-typography';

export default function ListUnorderedStateExample(): JSX.Element {
  return (
    <List>
      <List.Element>{'Skatteoppgjør'}</List.Element>
      <List.Element>{'Skattekort'}</List.Element>
      <List.Element>{'Meldinger'}</List.Element>
    </List>
  );
}
`,tb=`["standard", "med-spinner", "som-ekstern-lenke"]
`,ab=`import { useState, JSX } from 'react';

import { MegaButton } from '@skatteetaten/ds-buttons';

export default function MegaButtonWithSpinnerStateExample(): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = (): void => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <MegaButton
      type={'button'}
      hasSpinner={isLoading}
      spinnerTitle={'Laster tjeneste'}
      onClick={handleClick}
    >
      {'Se eller endre skattekortet'}
    </MegaButton>
  );
}
`,rb=`import { JSX } from 'react';

import { MegaButton } from '@skatteetaten/ds-buttons';

export default function MegaButtonExternalLinkStateExample(): JSX.Element {
  return (
    <MegaButton href={'#'} isExternal>
      {'Hent opplysninger om kjøretøy'}
    </MegaButton>
  );
}
`,ob=`import { JSX } from 'react';

import { MegaButton } from '@skatteetaten/ds-buttons';

export default function MegaButtonStandardStateExample(): JSX.Element {
  return (
    <MegaButton type={'button'}>{'Se eller endre skattekortet'}</MegaButton>
  );
}
`,sb=`import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { useMediaQuery } from '@skatteetaten/ds-core-utils';
import { UpdateSVGpath, WarningOutlineIcon } from '@skatteetaten/ds-icons';
import { Modal } from '@skatteetaten/ds-overlays';
import { List, Paragraph } from '@skatteetaten/ds-typography';

import styles from './modal.module.scss';

/* breakpoint-s: 640px (fra @skatteetaten/ds-core-designtokens) */
const breakpointS = '640px';

export default function ModalErrorExample(): ReactElement {
  const refModalFeil = useRef<HTMLDialogElement>(null);
  const isBigScreen = useMediaQuery(\`(min-width: \${breakpointS})\`);

  return (
    <>
      <Button
        variant={'secondary'}
        onClick={(): void => refModalFeil.current?.showModal()}
      >
        {'Åpne feilmelding'}
      </Button>

      <Modal
        ref={refModalFeil}
        title={'Beklager, noe gikk galt'}
        padding={isBigScreen ? 'mega' : 'm'}
        renderIcon={() => <WarningOutlineIcon size={'extraLarge'} />}
      >
        <Paragraph hasSpacing>
          {'Vi klarte ikke å hente skjemet akkurat nå.'}
        </Paragraph>

        <Paragraph className={styles.bold}>{'Du kan prøve å'}</Paragraph>

        <List hasSpacing>
          <List.Element>
            {'vente noen minutter og '}
            <a href={'#link'}>{'laste inn siden på nytt'}</a>
          </List.Element>
          <List.Element>
            <a href={'#link'}>{'gå tilbake til forrige side'}</a>
          </List.Element>
        </List>

        <Paragraph hasSpacing>
          {'Hvis du fortsatt har problemer kan du '}
          <a href={'#link'}>{'kontakte oss'}</a>
        </Paragraph>

        <Button
          className={styles.exampleSpacing}
          svgPath={UpdateSVGpath}
          onClick={(): void => refModalFeil.current?.close()}
        >
          {'Last inn siden på nytt'}
        </Button>

        <Button variant={'secondary'} href={'#'}>
          {'Gå til forsiden'}
        </Button>
      </Modal>
    </>
  );
}
`,lb=`.bold {
  font-weight: var(--font-weight-bold);
}

.exampleSpacing {
  margin-right: var(--spacing-s);
  margin-bottom: var(--spacing-s);
}
`,ib=`import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Modal } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './modal.module.scss';

export default function ModalVariantExample(): ReactElement {
  const outlineModalRef = useRef<HTMLDialogElement>(null);
  const plainModalRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Paragraph hasSpacing>
        {
          'Vi har to varianter av modal: standard (med ramme) og enkel (uten ramme).'
        }
      </Paragraph>
      <div className={styles.buttonRow}>
        <Button onClick={(): void => outlineModalRef.current?.showModal()}>
          {'Åpne standard modal'}
        </Button>
        <Button
          variant={'secondary'}
          onClick={(): void => plainModalRef.current?.showModal()}
        >
          {'Åpne enkel modal'}
        </Button>
      </div>

      <Modal
        ref={outlineModalRef}
        title={'Standard modal (med ramme)'}
        variant={'outline'}
      >
        <Paragraph hasSpacing>
          {
            'Denne varianten brukes i de fleste tilfeller der du trenger en tydelig dialog.'
          }
        </Paragraph>
        <div className={styles.actionRow}>
          <Button
            variant={'secondary'}
            onClick={(): void => outlineModalRef.current?.close()}
          >
            {'Lukk meg'}
          </Button>
        </div>
      </Modal>

      <Modal
        ref={plainModalRef}
        title={'Enkel modal (uten ramme)'}
        variant={'plain'}
      >
        <Paragraph hasSpacing>
          {
            'Denne varianten brukes når rammen skal få mindre visuell oppmerksomhet.'
          }
        </Paragraph>
        <div className={styles.actionRow}>
          <Button
            variant={'secondary'}
            onClick={(): void => plainModalRef.current?.close()}
          >
            {'Lukk meg'}
          </Button>
        </div>
      </Modal>
    </>
  );
}
`,db=`.buttonRow {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-s);
}

.actionRow {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-s);
}
`,cb=`import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Modal } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './modal.module.scss';

export default function ModalConsentExample(): ReactElement {
  const refModal = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button onClick={(): void => refModal.current?.showModal()}>
        {'Vis modal med bekreftelse'}
      </Button>
      <Modal ref={refModal} title={'Vil du erstatte nye opplysninger fra fil?'}>
        <Paragraph hasSpacing>
          {
            'Du har valgt å laste opp nye opplysninger fra fil. Vil du at disse skal gjelde fra nå av?'
          }
        </Paragraph>
        <div className={'flex'}>
          <Button className={styles.replaceButton}>
            {'Erstatt opplysninger'}
          </Button>
          <Button
            variant={'secondary'}
            onClick={(): void => refModal.current?.close()}
          >
            {'Avbryt'}
          </Button>
        </div>
      </Modal>
    </>
  );
}
`,mb=`.replaceButton {
  margin-right: var(--spacing-m);
}
`,ub=`import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Modal } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './modal.module.scss';

export default function ModalForcedActionExample(): ReactElement {
  const refModal = useRef<HTMLDialogElement>(null);

  return (
    <>
      <Button onClick={(): void => refModal.current?.showModal()}>
        {'Vis modal med tvungen handling'}
      </Button>

      <Modal
        ref={refModal}
        title={'Tvungen handling'}
        dismissOnEsc={false}
        dismissOnOutsideClick={false}
        hideCloseButton
      >
        <Paragraph hasSpacing>
          {
            'I denne modalen finnes det ikke noe lukkekryss, og den blir stående åpen også når brukeren klikker utenfor.'
          }
        </Paragraph>
        <div className={styles.actionRow}>
          <Button onClick={(): void => refModal.current?.close()}>
            {'Bekreft handling'}
          </Button>
          <Button
            variant={'secondary'}
            href={'#'}
            onClick={(): void => refModal.current?.close()}
          >
            {'Avbryt'}
          </Button>
        </div>
      </Modal>
    </>
  );
}
`,pb=`.actionRow {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-s);
}
`,gb=`import { type ReactElement } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { dsI18n } from '@skatteetaten/ds-core-utils';
import { RadioGroup } from '@skatteetaten/ds-forms';
import { Modal } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import {
  useWaitNotice,
  waitNoticeDefaultTime,
  waitNoticeDemoTime,
} from './waitNotice';

import styles from './modal.module.scss';

const waitIllustration = new URL(
  './wait-alert-illustration.png',
  import.meta.url
).href;

export default function ModalWaitNoticeExample(): ReactElement {
  const { refModalWait, time, setTime, closeDialog, openDialog } =
    useWaitNotice();

  return (
    <>
      <Button
        variant={'secondary'}
        className={styles.triggerButton}
        onClick={openDialog}
      >
        {'Vis ventevarsel'}
      </Button>

      <RadioGroup
        legend={'Ventevarseleksempel åpnes automatisk etter'}
        helpText={
          'Hver gang du beveger musepekeren, scroller eller gjør et tastetrykk, resettes timeren.'
        }
        value={time}
        onChange={(e): void => setTime(Number(e.target.value))}
      >
        <RadioGroup.Radio value={waitNoticeDefaultTime}>
          {'20 minutter (anbefalt i løsninger)'}
        </RadioGroup.Radio>
        <RadioGroup.Radio value={waitNoticeDemoTime}>
          {'5 sekunder'}
        </RadioGroup.Radio>
      </RadioGroup>

      <Modal
        ref={refModalWait}
        title={dsI18n.t('ds_overlays:modal.WaitNoticeTitle')}
        imageSource={waitIllustration}
        imageSourceAltText={dsI18n.t(
          'ds_overlays:modal.WaitNoticeImageAltText'
        )}
        onClose={closeDialog}
      >
        <Paragraph hasSpacing>
          {dsI18n.t('ds_overlays:modal.WaitNoticeParagraph')}
        </Paragraph>
        <Button onClick={closeDialog}>
          {dsI18n.t('ds_overlays:modal.StayLoggedIn')}
        </Button>
      </Modal>
    </>
  );
}
`,fb=`.triggerButton {
  margin-bottom: var(--spacing-l);
}
`,hb=`import {
  type Dispatch,
  type RefObject,
  type SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';

export const waitNoticeDefaultTime = 1200000;
export const waitNoticeDemoTime = 5000;

export interface UseWaitNoticeResult {
  refModalWait: RefObject<HTMLDialogElement | null>;
  time: number;
  setTime: Dispatch<SetStateAction<number>>;
  closeDialog: () => void;
  openDialog: () => void;
}

export const useWaitNotice = (): UseWaitNoticeResult => {
  const refModalWait = useRef<HTMLDialogElement>(null);
  const [time, setTime] = useState<number>(waitNoticeDefaultTime);
  const lastActivity = useRef<number>(new Date().getTime());

  const resetTimer = (): void => {
    lastActivity.current = new Date().getTime();
  };

  const closeDialog = (): void => {
    refModalWait.current?.close();
    resetTimer();
  };

  const openDialog = (): void => {
    refModalWait.current?.showModal();
  };

  useEffect(() => {
    const checkExpiredTime = (): void => {
      const timePassed = new Date().getTime() - lastActivity.current;

      if (timePassed >= time) {
        openDialog();
      }
    };

    const intervalId = setInterval(checkExpiredTime, 1000);
    return (): void => clearInterval(intervalId);
  }, [time]);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    window.addEventListener('keydown', resetTimer, { signal });
    window.addEventListener('mousemove', resetTimer, { signal });
    window.addEventListener('scroll', resetTimer, { signal });
    window.addEventListener('resize', resetTimer, { signal });

    return (): void => {
      abortController.abort();
    };
  }, []);

  return {
    refModalWait,
    time,
    setTime,
    closeDialog,
    openDialog,
  };
};
`,vb=`import { type ReactElement } from 'react';

import { NavigationTile } from '@skatteetaten/ds-navigation';
import { Heading } from '@skatteetaten/ds-typography';

import styles from './navigationtile.module.scss';

export default function NavigationTileHeadingExample(): ReactElement {
  return (
    <>
      <Heading as={'h2'} hasSpacing>
        {'Min overskrift'}
      </Heading>
      <nav
        className={styles.container}
        aria-label={'Navigasjonsflater under min overskrift'}
      >
        <NavigationTile
          title={'Skatt'}
          description={'Skattekort • Selvangivelse • Fradrag'}
          href={'#'}
          titleAs={'h3'}
        />
        <NavigationTile
          title={'Arbeidsgiver'}
          description={'A-melding • Lønn • Oppgjør'}
          href={'#'}
          titleAs={'h3'}
        />
        <NavigationTile
          title={'Merverdiavgift'}
          description={'Mva-melding • Inntekter • Fradrag'}
          href={'#'}
          titleAs={'h3'}
        />
      </nav>
    </>
  );
}
`,bb=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}
`,_b=`import { type ReactElement, useState } from 'react';

import { NavigationTile } from '@skatteetaten/ds-navigation';

import styles from './navigationtile.module.scss';

const title = 'Næring';
const description = 'Næringsinntekt • Kostnader • Avskrivning';

export default function NavigationTileSpinnerExample(): ReactElement {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout((): void => setIsLoading(false), 2000);
  };

  return (
    <nav className={styles.container} aria-label={'Eksempel med spinner'}>
      <NavigationTile
        title={title}
        description={description}
        href={'#'}
        hasSpinner={isLoading}
        onClick={handleClick}
      />
    </nav>
  );
}
`,xb=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}
`,kb=`import { type ReactElement } from 'react';

import { AccountEnkSVGpath } from '@skatteetaten/ds-icons';
import { NavigationTile } from '@skatteetaten/ds-navigation';

import styles from './navigationtile.module.scss';

export default function NavigationTileGridExample(): ReactElement {
  return (
    <nav
      className={styles.container}
      aria-label={'Beskrivelse av navigasjonsflater'}
    >
      <NavigationTile
        title={'Skatt'}
        description={'Inntekt • Formue • Gjeld'}
        href={'#'}
        size={'extraLarge'}
        svgPath={AccountEnkSVGpath}
      />
      <NavigationTile
        title={'Arbeidsgiver'}
        description={'Ansatte • Kostnader • Fradrag'}
        href={'#'}
        size={'extraLarge'}
        svgPath={AccountEnkSVGpath}
      />
    </nav>
  );
}
`,Sb=`.container {
  display: flex;
  gap: var(--spacing-xl);
}
`,yb=`import { type ReactElement } from 'react';

import { NavigationTile } from '@skatteetaten/ds-navigation';

import styles from './navigationtile.module.scss';

const title = 'Arbeidsgiver';
const description = 'A-melding • Skattemelding • Sluttoppgjør • Refusjon';

export default function NavigationTileHiddenArrowExample(): ReactElement {
  return (
    <nav className={styles.container} aria-label={'Eksempel uten pilikon'}>
      <NavigationTile
        title={title}
        description={description}
        href={'#'}
        hideArrowIcon
      />
    </nav>
  );
}
`,jb=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}
`,Tb=`import { type ReactElement } from 'react';

import { AccountEnkSVGpath } from '@skatteetaten/ds-icons';
import { NavigationTile } from '@skatteetaten/ds-navigation';

import styles from './navigationtile.module.scss';

export default function NavigationTileSizesExample(): ReactElement {
  return (
    <nav className={styles.container} aria-label={'Eksempel på størrelser'}>
      <NavigationTile
        title={'Medium'}
        description={'Litt mindre skriftsstørrelse'}
        href={'#'}
        size={'medium'}
      />
      <NavigationTile
        title={'Large'}
        description={'Standard størrelse'}
        href={'#'}
        size={'large'}
      />
      <NavigationTile
        title={'Extra large'}
        description={'Midtstilt med ikon'}
        href={'#'}
        size={'extraLarge'}
        svgPath={AccountEnkSVGpath}
      />
    </nav>
  );
}
`,Eb=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}
`,Cb=`["standard", "høyrestilt-ikon", "som-hjelpetekst", "størrelser"]
`,Pb=`import { type ReactElement } from 'react';

import { OpenClose } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function OpenCloseRightIconExample(): ReactElement {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'Høyrestilt ikon kan gi et roligere visuelt inntrykk og bedre plassutnyttelse på mobil. Vestrejustert ikon kan samtidig være et bedre valg for universell utforming, siden ikonet kommer først i leserekkefølgen og blir synlig tidligere ved zoom.'
        }
      </Paragraph>
      <OpenClose title={'Hva er aksjesparekonto'} iconPosition={'right'}>
        <Paragraph>
          {
            'En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen.'
          }
        </Paragraph>
      </OpenClose>
    </>
  );
}
`,Rb=`import { type ReactElement } from 'react';

import { OpenClose } from '@skatteetaten/ds-collections';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

export default function OpenCloseAsHelpTextExample(): ReactElement {
  return (
    <>
      <Heading as={'h1'} level={2}>
        {'Navn på oppgave eller tema'}
      </Heading>
      <Paragraph variant={'ingress'}>
        {
          'Hjelpetekst, som vi ønsker at brukeren skal lese før hen går videre, plasserer vi normalt synlig og rett etter overskriften.'
        }
      </Paragraph>
      <OpenClose title={'Hjelpetekst som folk kan velge å åpne'}>
        <Paragraph>
          {
            'Denne teksten kan brukere hente frem og lese hvis de har behov for det. Den kan også bli stående oppe som ekstra støtte for prosessen videre. Det er viktig at tittelen på OpenClose-komponenten tydelig kommuniserer hva slags informasjon man kan finne ved å åpne den.'
          }
        </Paragraph>
      </OpenClose>
    </>
  );
}
`,wb=`import { type ReactElement } from 'react';

import { OpenClose } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function OpenCloseStandardExample(): ReactElement {
  return (
    <OpenClose title={'Hva er aksjesparekonto?'}>
      <Paragraph>
        {
          'En aksjesparekonto er en konto hvor du kan kjøpe og selge aksjer og aksjefond skattefritt. Gevinster blir ikke skattlagt og det gis ikke fradrag for tap så lenge verdien holdes inne på kontoen.'
        }
      </Paragraph>
    </OpenClose>
  );
}
`,Db=`import { type ReactElement } from 'react';

import { OpenClose } from '@skatteetaten/ds-collections';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './openclose.module.scss';

export default function OpenCloseSizesExample(): ReactElement {
  return (
    <div className={styles.container}>
      <OpenClose title={'Small OpenClose'} size={'small'}>
        <Paragraph>{'Kompakt variant for korte forklaringer.'}</Paragraph>
      </OpenClose>

      <OpenClose title={'Medium OpenClose'} size={'medium'}>
        <Paragraph>
          {'Standard variant for de fleste innholdsflater.'}
        </Paragraph>
      </OpenClose>

      <OpenClose title={'Large OpenClose'} size={'large'}>
        <Paragraph>
          {'Stor variant når teksten trenger mer visuell tyngde.'}
        </Paragraph>
      </OpenClose>
    </div>
  );
}
`,Nb=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}
`,Lb=`["standard", "controlled", "uncontrolled"]
`,Ob=`export type PaginationExampleItem = {
  navn: string;
  dato: string;
};

export const data: PaginationExampleItem[] = [
  { navn: 'Donald Duck', dato: '25.03.20' },
  { navn: 'Robbie Wiliams', dato: '25.03.15' },
  { navn: 'Minnie Mouse', dato: '12.05.18' },
  { navn: 'Katy Perry', dato: '01.01.23' },
  { navn: 'Langbein', dato: '14.02.22' },
  { navn: 'Justin Bieber', dato: '08.03.19' },
  { navn: 'Daisy Duck', dato: '07.04.21' },
  { navn: 'Ed Sheeran', dato: '17.05.20' },
  { navn: 'Timmy Gresshoppe', dato: '21.06.19' },
  { navn: 'Beyonce', dato: '04.07.18' },
  { navn: 'Dovre Gubben Gra', dato: '25.12.24' },
  { navn: 'Taylor Swift', dato: '13.08.23' },
  { navn: 'Karius og Baktus', dato: '29.09.22' },
  { navn: 'Ariana Grande', dato: '10.10.21' },
  { navn: 'Askeladden', dato: '11.11.20' },
  { navn: 'Billie Eilish', dato: '12.12.19' },
  { navn: 'Ole Brumm', dato: '01.01.24' },
  { navn: 'Rihanna', dato: '25.03.20' },
  { navn: 'Pippi Langstrompe', dato: '02.02.23' },
  { navn: 'The Weeknd', dato: '03.03.22' },
  { navn: 'Kardemomme by', dato: '04.04.21' },
  { navn: 'Dua Lipa', dato: '05.05.20' },
  { navn: 'Bamse og Kylling', dato: '06.06.19' },
  { navn: 'Coldplay', dato: '07.07.18' },
  { navn: 'Morten Harket', dato: '08.08.23' },
  { navn: 'Kaisa Lundquist', dato: '23.05.16' },
  { navn: 'Reidar Olsen', dato: '15.11.16' },
  { navn: 'Bob Egil Hansen', dato: '15.11.16' },
  { navn: 'Leif Kare Lund', dato: '23.10.17' },
  { navn: 'Kai Mossige', dato: '25.11.19' },
  { navn: 'Bob Testman', dato: '01.01.20' },
  { navn: 'Alice Middleman', dato: '25.03.20' },
  { navn: 'Kari Saksbehandler', dato: '25.03.20' },
  { navn: 'Frank Johansen', dato: '26.03.20' },
  { navn: 'Tallulah Willis', dato: '01.05.20' },
  { navn: 'Kaisa Lundquist', dato: '23.05.16' },
  { navn: 'Reidar Olsen', dato: '15.11.16' },
  { navn: 'Bob Egil Hansen', dato: '15.11.16' },
  { navn: 'Leif Kare Lund', dato: '23.10.17' },
  { navn: 'Kai Mossige', dato: '25.11.19' },
  { navn: 'Bob Testman', dato: '01.01.20' },
  { navn: 'Alice Middleman', dato: '25.03.20' },
  { navn: 'Kari Saksbehandler', dato: '25.03.20' },
  { navn: 'Frank Johansen', dato: '26.03.20' },
  { navn: 'Tallulah Willis', dato: '01.05.20' },
  { navn: 'Kari Nordmann', dato: '2024-02-07' },
  { navn: 'Ola Olsen', dato: '2024-02-07' },
  { navn: 'Anne Persen', dato: '2024-02-07' },
  { navn: 'Bjorn Hansen', dato: '2024-02-07' },
  { navn: 'Lisa Karlsen', dato: '2024-02-07' },
  { navn: 'Kari Nordmann', dato: '2024-02-07' },
  { navn: 'Ola Olsen', dato: '2024-01-30' },
  { navn: 'Anne Hansen', dato: '2024-02-14' },
  { navn: 'Per Pettersen', dato: '2024-02-01' },
  { navn: 'Lisa Lie', dato: '2024-02-19' },
  { navn: 'Martin Martinsen', dato: '2024-02-05' },
  { navn: 'Turid Thoresen', dato: '2024-02-12' },
  { navn: 'Knut Knutsen', dato: '2024-02-08' },
  { navn: 'Helene Hansen', dato: '2024-02-16' },
  { navn: 'Lars Larsen', dato: '2024-02-10' },
];
`,Ib=`import { useState, JSX } from 'react';

import { Pagination } from '@skatteetaten/ds-navigation';
import { List } from '@skatteetaten/ds-typography';

import { data } from './data';

export default function PaginationControlledStateExample(): JSX.Element {
  const [page, setPage] = useState(1);
  const pageSize = 5;

  type DataList = typeof data;

  const exampleListWithLimit = (
    rows: DataList,
    start: number,
    size: number
  ): JSX.Element[] => {
    const itemStart = (start - 1) * size;
    return rows
      .map((e, i) => {
        return (
          <List.Element key={\`\${e.navn}-\${e.dato}-\${i}\`}>
            {i + 1} {e.navn}
          </List.Element>
        );
      })
      .slice(itemStart, itemStart + size);
  };

  const onChange = (nextPage: number): void => {
    setPage(nextPage);
  };

  return (
    <>
      <List hasSpacing>{exampleListWithLimit(data, page, pageSize)}</List>
      <Pagination
        pageSize={pageSize}
        totalItems={data.length}
        currentPage={page}
        onChange={onChange}
      />
    </>
  );
}
`,Bb=`import { JSX } from 'react';

import { Pagination } from '@skatteetaten/ds-navigation';

export default function PaginationStandardStateExample(): JSX.Element {
  return (
    <Pagination defaultCurrent={1} pageSize={10} sibling={3} totalItems={70} />
  );
}
`,Ab=`import { JSX } from 'react';

import { Pagination } from '@skatteetaten/ds-navigation';

export default function PaginationUncontrolledStateExample(): JSX.Element {
  return <Pagination pageSize={10} totalItems={40} defaultCurrent={3} />;
}
`,Mb=`["med bakgrunn", "med ramme", "justert-innhold", "custom-padding"]
`,Hb=`import { JSX } from 'react';

import { Panel } from '@skatteetaten/ds-content';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function PanelCustomPaddingStateExample(): JSX.Element {
  return (
    <>
      <div className={\`\${styles.semanticArticle} \${styles.bottomSpacing}\`}>
        <Heading as={'h1'} level={3}>
          {'Tekst utenfor Panel'}
        </Heading>
        <Paragraph>
          {
            'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.'
          }
        </Paragraph>
      </div>

      <Panel
        classNames={{
          padding: styles.dummyPanelPaddingNoMargin,
        }}
        title={'Innholdsbredde 100%'}
        hasResponsivePadding
      >
        {
          'Lorem ipsum dolor sit amet. Alle som har laget en nettside, trengt litt fylltekst eller bare surfet rundt på nettet har antageligvis sett disse ordene, etterfulgt av en tilsynelatende eviglang tekst fylt med latinske liksomsetninger.'
        }
      </Panel>
    </>
  );
}
`,Vb=`.semanticArticle {
  width: var(--semantic-responsive-article);
  max-width: 100%;
  margin: 0 auto;
}

.bottomSpacing {
  margin-bottom: var(--spacing-l);
}

.dummyPanelPaddingNoMargin > * {
  max-width: 100%;
}
`,Fb=`import { JSX } from 'react';

import { Panel } from '@skatteetaten/ds-content';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function PanelAlignedWithContainersStateExample(): JSX.Element {
  return (
    <div>
      <div className={styles.articleContainer}>
        <Heading as={'h2'} level={2} hasSpacing>
          {'Panel med innhold som er justert med teksten på siden'}
        </Heading>
        <Paragraph hasSpacing>
          {'Denne teksten bruker bredden --semantic-responsive-article. Det er'}
          {'meningen at teksten her skal starte på same linje som teksten inni'}
          {'panelet.'}
        </Paragraph>
      </div>

      <div className={styles.wideContentContainer}>
        <Panel variant={'filled'} spacing={'l'}>
          {
            'Dette panelet ligger i en container med bredden --semantic-responsive-wide-content. Innholdet i Panel har en innebygd containerbredde på --semantic-responsive-article, for å venstre- og høyrejustere denne teksten med resten av siden.'
          }
        </Panel>
      </div>

      <div className={styles.articleContainer}>
        <Paragraph>
          {'Denne teksten bruker ogsa --semantic-responsive-article for a vise'}
          {'samme venstre- og hoyrejustering som innholdet rundt panelet.'}
        </Paragraph>
      </div>
    </div>
  );
}
`,zb=`.articleContainer {
  width: var(--semantic-responsive-article);
  max-width: 100%;
  margin: 0 auto;
}

.wideContentContainer {
  width: var(--semantic-responsive-wide-content);
  max-width: 100%;
  margin: 0 auto;
}
`,Gb=`import { JSX } from 'react';

import { Panel } from '@skatteetaten/ds-content';
import { CheckIcon } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function PanelFilledColorStateExample(): JSX.Element {
  return (
    <Panel
      title={'Virksomheten skal registreres som særavgiftspliktig'}
      variant={'filled'}
      color={'forest'}
      spacing={'xxl'}
      renderIcon={() => <CheckIcon size={'extraLarge'} />}
    >
      <Paragraph>
        {
          'For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'
        }
      </Paragraph>
    </Panel>
  );
}
`,Kb=`import { JSX } from 'react';

import { Link, MegaButton } from '@skatteetaten/ds-buttons';
import { Panel } from '@skatteetaten/ds-content';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './index.module.scss';

export default function PanelPreviewStateExample(): JSX.Element {
  return (
    <Panel
      title={'Når kommer skattepengene?'}
      spacing={'xl'}
      variant={'outline'}
    >
      <Paragraph hasSpacing>
        <Link href={'#'}>
          {'Vi varsler deg når skatteoppgjøret ditt er klart.'}
        </Link>
      </Paragraph>
      <Paragraph hasSpacing>
        {
          'Vi kan dessverre ikke gi deg en konkret dato for når du får oppgjøret ditt, verken på telefon, facebook eller chat.'
        }
      </Paragraph>
      <Paragraph>{'Logg inn:'}</Paragraph>
      <MegaButton>{'Sjekk skatten'}</MegaButton>
      <Paragraph className={styles.dummySpacingTop}>
        {
          'Ser du etter skattemeldingen? Hvis du oppdager feil eller har mottatt nye eller forsinkede opplysninger, kan du fortsatt '
        }
        <Link href={'#'}>{'se, endre og levere skattemeldingen'}</Link>
        {'.'}
      </Paragraph>
    </Panel>
  );
}
`,$b=`.dummySpacingTop {
  margin-top: var(--spacing-m);
}
`,qb=`import { JSX } from 'react';

import { Heading, Paragraph } from '@skatteetaten/ds-typography';

export default function ParagraphNewsStandardStateExample(): JSX.Element {
  return (
    <>
      <Heading as={'h1'} hasSpacing>
        {'Flere oppgir kryptoverdier i skattemeldingen'}
      </Heading>
      <Paragraph variant={'ingress'} hasSpacing>
        {'Antall personer som oppgir kryptoverdier i skattemeldingen har økt fra 15 000 til 41 000. ' +
          'Skatteetaten ønsker at det skal bli pliktig for tilbydere av vekslingstjenester å rapportere om transaksjoner og eiere.'}
      </Paragraph>
      <Paragraph hasSpacing>
        {'– Det har vært en god vekst i antall personer som eier kryptovaluta, men fortsatt er det mange som ikke rapporterer sine verdier. ' +
          'Vi har økt vår innsats innen både veiledning og kontroll for at også denne delen av økonomien skal bli riktigere beskattet, sier skattedirektor Nina Schanke Funnemark.'}
      </Paragraph>
      <Paragraph>
        {'Sammenlignet med '}
        <a
          href={
            'https://www.skatteetaten.no/presse/nyhetsrommet/flere-oppgir-kryptoverdier-i-skattemeldingen/'
          }
          target={'_blank'}
          rel={'noreferrer'}
        >
          {'tidligere år'}
        </a>
        {
          ' oppgir langt flere personer at de eier kryptovaluta, og inntekt, formue og fradrag fra kryptovaluta øker også kraftig.'
        }
      </Paragraph>
    </>
  );
}
`,Jb=`import { JSX } from 'react';

import { AttachFileSVGpath, Icon } from '@skatteetaten/ds-icons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function ParagraphWithIconStateExample(): JSX.Element {
  return (
    <Paragraph>
      <Icon svgPath={AttachFileSVGpath} />
      {' Siden inneholder et filvedlegg.'}
    </Paragraph>
  );
}
`,Wb=`import { JSX } from 'react';

import { Paragraph } from '@skatteetaten/ds-typography';

export default function ParagraphWithLinkStateExample(): JSX.Element {
  return (
    <Paragraph>
      {'Dette er et eksempel på et avsnitt med en '}
      <a
        href={'https://www.skatteetaten.no/stilogtone/'}
        target={'_blank'}
        rel={'noreferrer'}
      >
        {'lenke til stil og tone'}
      </a>
      {' og som får designsystemets typografi.'}
    </Paragraph>
  );
}
`,Xb=`import { JSX } from 'react';

import { Paragraph } from '@skatteetaten/ds-typography';

export default function ParagraphWithEmphasisStateExample(): JSX.Element {
  return (
    <Paragraph>
      {'Noen ganger ønsker vi å fremheve tekst med '}
      <strong>{'tydelig utheving'}</strong>
      {', mens andre ganger holder det med '}
      <em>{'lett betoning'}</em>
      {'. Begge deler støttes automatisk i Paragraph.'}
    </Paragraph>
  );
}
`,Ub=`["standard", "controlled", "farge", "i-overskrift", "i-tabellcelle"]
`,Zb=`import { type ReactElement, useState } from 'react';

import { Popover } from '@skatteetaten/ds-overlays';
import { Heading } from '@skatteetaten/ds-typography';

import styles from './popover.module.scss';

export default function PopoverControlledExample(): ReactElement {
  const controlledId = 'popover-controlled-heading';
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.row}>
      <Heading id={controlledId} as={'h2'}>
        {'Controlled Popover'}
      </Heading>
      <Popover
        position={'bottomStart'}
        color={'ochre'}
        isOpen={isOpen}
        onClose={(): void => setIsOpen(false)}
      >
        <Popover.Trigger
          ariaDescribedby={controlledId}
          className={styles.triggerSpacing}
          onClick={(): void => setIsOpen(!isOpen)}
        />
        <Popover.Content>
          {
            'Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret består av en bokstav etterfulgt av fire tall, f.eks. H0101.'
          }
        </Popover.Content>
      </Popover>
    </div>
  );
}
`,Yb=`.row {
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
}

.triggerSpacing {
  margin-left: var(--spacing-xs);
}
`,Qb=`import { type ReactElement } from 'react';

import { Popover } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './popover.module.scss';

export default function PopoverColorExample(): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Heading as={'h3'} level={4}>
          {'White'}
        </Heading>
        <Popover color={'white'}>
          <Popover.Trigger title={'Vis white-popover'} />
          <Popover.Content>
            <Paragraph>
              {'Nøytral bakgrunn for standard hjelpetekster.'}
            </Paragraph>
          </Popover.Content>
        </Popover>
      </div>

      <div className={styles.row}>
        <Heading as={'h3'} level={4}>
          {'Ochre'}
        </Heading>
        <Popover color={'ochre'}>
          <Popover.Trigger title={'Vis ochre-popover'} />
          <Popover.Content>
            <Paragraph>
              {'Fremhever viktig kontekst uten å dominere siden.'}
            </Paragraph>
          </Popover.Content>
        </Popover>
      </div>

      <div className={styles.row}>
        <Heading as={'h3'} level={4}>
          {'Forest'}
        </Heading>
        <Popover color={'forest'}>
          <Popover.Trigger title={'Vis forest-popover'} />
          <Popover.Content>
            <Paragraph>
              {'Kan brukes for å markere veiledning i grønn tone.'}
            </Paragraph>
          </Popover.Content>
        </Popover>
      </div>
    </div>
  );
}
`,e_=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-l);
}

.row {
  display: flex;
  align-items: center;
  gap: var(--spacing-m);
}
`,n_=`import { type ReactElement } from 'react';

import { Popover } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './popover.module.scss';

const contentText =
  'Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret består av en bokstav etterfulgt av fire tall, f.eks. H0101. Bolignummeret står som regel på et klistemerke i dørkarmen til inngangsdøren.';

export default function PopoverInHeadingExample(): ReactElement {
  const h3Id = 'popover-heading-h3';

  return (
    <>
      <div className={styles.row}>
        <Heading id={h3Id} as={'h3'}>
          {'Husk før du henter skattekortet'}
        </Heading>
        <Popover color={'ochre'} position={'bottomEnd'}>
          <Popover.Trigger ariaDescribedby={h3Id} size={'small'} />
          <Popover.Content>
            <Paragraph>{contentText}</Paragraph>
          </Popover.Content>
        </Popover>
      </div>
      <Paragraph>
        {
          'PopOver kan egne seg når overskriften er mindre eller når du vil redusere visuell vekt i tett layout.'
        }
      </Paragraph>
    </>
  );
}
`,t_=`.row {
  display: flex;
  align-items: center;
  gap: var(--spacing-s);
}
`,a_=`import { type ReactElement } from 'react';

import { Popover } from '@skatteetaten/ds-overlays';
import { Table } from '@skatteetaten/ds-table';

import styles from './popover.module.scss';

export default function PopoverInTableCellExample(): ReactElement {
  const filesId = 'popover-files-cell';

  return (
    <Table caption={'Oppgaver'}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{'Referansenummer'}</Table.HeaderCell>
          <Table.HeaderCell>{'Dato'}</Table.HeaderCell>
          <Table.HeaderCell>{'Filer'}</Table.HeaderCell>
          <Table.HeaderCell>{'Brev'}</Table.HeaderCell>
          <Table.HeaderCell>{'Vedtak'}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.DataCell>{'Wake Up Call'}</Table.DataCell>
          <Table.DataCell>{'10.01.2024'}</Table.DataCell>
          <Table.DataCell>{'3 filer'}</Table.DataCell>
          <Table.DataCell>{'4 brev'}</Table.DataCell>
          <Table.DataCell>{'5 vedtak'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'A Cat Nap'}</Table.DataCell>
          <Table.DataCell>{'09.01.2024'}</Table.DataCell>
          <Table.DataCell>
            <span id={filesId}>{'12 filer'}</span>
            <Popover position={'bottomStart'} color={'ochre'}>
              <Popover.Trigger
                ariaDescribedby={filesId}
                size={'small'}
                className={styles.triggerSpacing}
              />
              <Popover.Content>
                {
                  'Bolignummeret er et nummer som unikt identifiserer en leilighet. Nummeret består av en bokstav etterfulgt av fire tall, f.eks. H0101.'
                }
              </Popover.Content>
            </Popover>
          </Table.DataCell>
          <Table.DataCell>{'4 brev'}</Table.DataCell>
          <Table.DataCell>{'5 vedtak'}</Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'Down and Out'}</Table.DataCell>
          <Table.DataCell>{'08.01.2024'}</Table.DataCell>
          <Table.DataCell>{'3 filer'}</Table.DataCell>
          <Table.DataCell>{'4 brev'}</Table.DataCell>
          <Table.DataCell>{'5 vedtak'}</Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
`,r_=`.triggerSpacing {
  margin-left: var(--spacing-xs);
}
`,o_=`import { type ReactElement } from 'react';

import { Popover } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function PopoverStandardExample(): ReactElement {
  return (
    <Popover>
      <Popover.Trigger title={'Vis forklaring'} />
      <Popover.Content>
        <Paragraph>
          {'Popover brukes til korte forklaringer ved behov.'}
        </Paragraph>
      </Popover.Content>
    </Popover>
  );
}
`,s_=`["vertikal", "horisontal", "read-only", "med-feilmelding"]
`,l_=`import { type ReactElement, useState } from 'react';

import { RadioGroup } from '@skatteetaten/ds-forms';

export default function RadioGroupHorizontalExample(): ReactElement {
  const [svar, setSvar] = useState<string>('');

  return (
    <RadioGroup
      variant={'horizontal'}
      legend={'Har du sendt inn skattemeldingen?'}
      value={svar}
      required
      onChange={(e): void => setSvar(e.target.value)}
    >
      <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
    </RadioGroup>
  );
}
`,i_=`import { type ReactElement, useState } from 'react';

import { RadioGroup } from '@skatteetaten/ds-forms';

export default function RadioGroupErrorExample(): ReactElement {
  const [svar, setSvar] = useState<string>('');
  const [svarError, setSvarError] = useState<string>(
    'Svar på om du har sendt inn skattemeldingen.'
  );

  return (
    <RadioGroup
      variant={'horizontal'}
      legend={'Har du sendt inn skattemeldingen?'}
      value={svar}
      errorMessage={svarError}
      required
      onChange={(e): void => {
        setSvar(e.target.value);
        setSvarError('');
      }}
    >
      <RadioGroup.Radio value={'ja'}>{'Ja'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
    </RadioGroup>
  );
}
`,d_=`import { type ReactElement } from 'react';

import { RadioGroup } from '@skatteetaten/ds-forms';

export default function RadioGroupReadOnlyExample(): ReactElement {
  return (
    <RadioGroup
      legend={'Type virksomhet'}
      value={'selskap'}
      readOnly
      onChange={(): void => undefined}
    >
      <RadioGroup.Radio value={'foretak'}>
        {'Enkeltpersonsforetak'}
      </RadioGroup.Radio>
      <RadioGroup.Radio value={'selskap'}>{'Aksjeselskap'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'annet'}>{'Annet'}</RadioGroup.Radio>
    </RadioGroup>
  );
}
`,c_=`import { type ReactElement, useState } from 'react';

import { RadioGroup } from '@skatteetaten/ds-forms';

export default function RadioGroupVerticalExample(): ReactElement {
  const [value, setValue] = useState<string>('skattemelding');

  return (
    <RadioGroup
      legend={'Hva trenger du hjelp til?'}
      value={value}
      onChange={(e): void => setValue(e.target.value)}
    >
      <RadioGroup.Radio value={'skattemelding'}>
        {'Levere eller endre skattemelding for privatperson'}
      </RadioGroup.Radio>
      <RadioGroup.Radio value={'skattekort'}>
        {'Bestille, endre eller kontrollere skattekort'}
      </RadioGroup.Radio>
      <RadioGroup.Radio value={'fradrag'}>
        {'Få oversikt over fradrag, dokumentasjon og satser'}
      </RadioGroup.Radio>
      <RadioGroup.Radio value={'betaling'}>
        {'Betale restskatt eller søke om betalingsordning'}
      </RadioGroup.Radio>
    </RadioGroup>
  );
}
`,m_=`import { type ReactElement } from 'react';

import { formatNationalIdentityNumber } from '@skatteetaten/ds-core-utils';
import { RoleBanner } from '@skatteetaten/ds-layout';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function RoleBannerMegSelvExample(): ReactElement {
  return (
    <>
      <RoleBanner
        user={{
          name: 'Ola Nordmann',
          role: 'meg',
          identifier: formatNationalIdentityNumber('12345678901'),
        }}
      />
      <main>
        <Paragraph>{'Hovedinnhold'}</Paragraph>
      </main>
    </>
  );
}
`,u_=`.hiddenUserMenuButton {
  display: none;
}
`,p_=`import { type ReactElement } from 'react';

import { formatNationalIdentityNumber } from '@skatteetaten/ds-core-utils';
import { RoleBanner } from '@skatteetaten/ds-layout';

export default function RoleBannerSomAndreExample(): ReactElement {
  return (
    <RoleBanner
      user={{
        name: 'Kari Nordmann',
        role: 'andre',
        identifier: formatNationalIdentityNumber('10101012345'),
      }}
    />
  );
}
`,g_=`import { type ReactElement, useRef, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  RolePicker,
  type Business,
  type Paginated,
  type Person,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  dateOfBirth: new Date('1984-02-13'),
  type: 'Person',
};

const businesses: Paginated<Business> = {
  total: 2,
  list: [
    {
      name: 'Nordmann Regnskap AS',
      organizationNumber: '123456789',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Nordmann Regnskap AS Avd. Oslo',
          organizationNumber: '123456790',
          isDeleted: false,
          unitType: 'BEDR',
          type: 'Organization',
          mainOrganizationNumber: '123456789',
        },
      ],
    },
    {
      name: 'Nordmann Konsulenttjenester ENK',
      organizationNumber: '987654321',
      isDeleted: false,
      unitType: 'ENK',
      type: 'Organization',
    },
  ],
};

const people: Paginated<Person> = {
  total: 1,
  list: [
    {
      name: 'Kari Nordmann',
      personId: '12039012345',
      dateOfBirth: new Date('1990-03-12'),
      type: 'Person',
      isDeleted: false,
    },
  ],
};

export default function RolePickerStandardExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);
  const [selectedEntity, setSelectedEntity] =
    useState<string>('Ingen valgt enda');

  return (
    <>
      <Button onClick={(): void => rolePickerRef.current?.showModal()}>
        {'Åpne representasjonsvelger'}
      </Button>
      <Paragraph
        hasSpacing
      >{\`Valgt representasjon: \${selectedEntity}\`}</Paragraph>

      <RolePicker
        ref={rolePickerRef}
        me={me}
        businesses={businesses}
        people={people}
        showDeceasedPeople={false}
        onEntitySelect={async (entity) => {
          setSelectedEntity(entity.name);
          rolePickerRef.current?.close();
        }}
      />
    </>
  );
}
`,f_=`import { type ReactElement } from 'react';

import { ScrollToTopButton } from '@skatteetaten/ds-buttons';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function ScrollToTopButtonStandardExample(): ReactElement {
  return (
    <>
      <Paragraph hasSpacing>
        {
          'ScrollToTopButton er ment å dukke opp til nede til høyre når man scroller nedover på en side. Her er den synlig hele tiden siden visibilityThreshold er satt til 0.'
        }
      </Paragraph>

      <ScrollToTopButton visibilityThreshold={0} />
    </>
  );
}
`,h_=`import {
  type KeyboardEvent,
  type MouseEvent,
  type ReactElement,
  useState,
} from 'react';

import { SearchField } from '@skatteetaten/ds-forms';

import styles from './searchfield.module.scss';

const goToResultPage = (): void => {
  window.location.hash = 'treffliste';
};

const hasSearchIconButton = true;

export default function SearchFieldIconOrTextExample(): ReactElement {
  const [valueWithIcon, setValueWithIcon] = useState<string>('');
  const [valueWithText, setValueWithText] = useState<string>('');

  const handleSearchClick = (_event: MouseEvent<HTMLButtonElement>): void => {
    goToResultPage();
  };

  const handleSearch = (_event: KeyboardEvent<HTMLInputElement>): void => {
    goToResultPage();
  };

  return (
    <div className={styles.container}>
      <SearchField
        label={'Søk med ikonknapp'}
        value={valueWithIcon}
        enableSRNavigationHint={false}
        hideLabel={false}
        hasSearchButtonIcon={hasSearchIconButton}
        onChange={(event): void => setValueWithIcon(event.target.value)}
        onClear={(): void => setValueWithIcon('')}
        onSearch={handleSearch}
        onSearchClick={handleSearchClick}
      />

      <SearchField
        label={'Søk med tekstknapp'}
        value={valueWithText}
        hasSearchButtonIcon={false}
        enableSRNavigationHint={false}
        hideLabel={false}
        onChange={(event): void => setValueWithText(event.target.value)}
        onClear={(): void => setValueWithText('')}
        onSearch={handleSearch}
        onSearchClick={handleSearchClick}
      />
    </div>
  );
}
`,v_=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}
`,b_=`import { type ReactElement, useMemo, useState } from 'react';

import {
  SearchField,
  searchInList,
  type SearchResult,
} from '@skatteetaten/ds-forms';

const options: SearchResult[] = [
  { title: 'Sak 24/10231', description: 'Gå til sak 24/10231' },
  { title: 'Sak 24/10387', description: 'Gå til sak 24/10387' },
  { title: 'Sak 24/10995', description: 'Gå til sak 24/10995' },
  { title: 'Sak 24/11200', description: 'Gå til sak 24/11200' },
];

export default function SearchFieldLookupMenuExample(): ReactElement {
  const [value, setValue] = useState<string>('');

  const navigateToCasePage = (caseId: string): void => {
    window.alert(\`Går til saksside: \${caseId}\`);
    window.location.hash = \`sak-\${caseId}\`;
  };

  const results = useMemo(() => {
    if (value.length < 1) {
      return undefined;
    }

    return searchInList(options, value);
  }, [value]);

  return (
    <SearchField
      label={'Gå til sak'}
      value={value}
      results={results}
      placeholder={'Skriv saksnummer'}
      hideLabel={false}
      onChange={(event): void => setValue(event.target.value)}
      onClear={(): void => {
        setValue('');
      }}
      onResultClick={(result): void => {
        const caseId = result.title?.replace('Sak ', '') ?? 'ukjent';
        navigateToCasePage(caseId);
      }}
      onSearch={(_, searchValue): void => {
        if (searchValue) {
          navigateToCasePage(searchValue);
        }
      }}
      onSearchClick={(_, searchValue): void => {
        if (searchValue) {
          navigateToCasePage(searchValue);
        }
      }}
    />
  );
}
`,__=`import { type ReactElement } from 'react';

import { SearchField } from '@skatteetaten/ds-forms';

import styles from './searchfield.module.scss';

export default function SearchFieldSizesExample(): ReactElement {
  return (
    <div className={styles.container}>
      <SearchField label={'Søk (medium)'} size={'medium'} hideLabel={false} />
      <SearchField label={'Søk (large)'} size={'large'} hideLabel={false} />
      <SearchField
        label={'Søk (extraLarge)'}
        size={'extraLarge'}
        hideLabel={false}
      />
    </div>
  );
}
`,x_=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-m);
}
`,k_=`["standard", "read-only"]
`,S_=`import { type ChangeEvent, type ReactElement, useState } from 'react';

import { Select } from '@skatteetaten/ds-forms';

type Fruit = '' | 'banan' | 'eple' | 'kiwi' | 'paere' | 'sitron';

export default function SelectStandardExample(): ReactElement {
  const [fruit, setFruit] = useState<Fruit>('');

  return (
    <Select
      label={'Fruktsort'}
      value={fruit}
      hideLabel={false}
      onChange={(event: ChangeEvent<HTMLSelectElement>): void =>
        setFruit(event.target.value as Fruit)
      }
    >
      <Select.Option<Fruit> value={'banan'}>{'Banan'}</Select.Option>
      <Select.Option<Fruit> value={'eple'}>{'Eple'}</Select.Option>
      <Select.Option<Fruit> value={'kiwi'}>{'Kiwi'}</Select.Option>
      <Select.Option<Fruit> value={'paere'}>{'Pære'}</Select.Option>
      <Select.Option<Fruit> value={'sitron'}>{'Sitron'}</Select.Option>
    </Select>
  );
}
`,y_=`import { type ReactElement } from 'react';

import { Spinner } from '@skatteetaten/ds-progress';

import styles from './spinner.module.scss';

export default function SpinnerColorExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Spinner>{'Laster inn'}</Spinner>
      <Spinner color={'interactive'}>{'Laster inn'}</Spinner>
      <div className={styles.darkBackground}>
        <Spinner color={'white'}>{'Laster inn'}</Spinner>
      </div>
    </div>
  );
}
`,j_=`.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xl);
}

.darkBackground {
  display: inline-flex;
  width: fit-content;
  padding: var(--spacing-m);
  border-radius: var(--border-radius-s);
  background-color: var(--palette-denim-100);
}
`,T_=`import { type ReactElement, useEffect, useRef, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { Spinner } from '@skatteetaten/ds-progress';

export default function SpinnerPercentCompleteExample(): ReactElement {
  const [showSpinner, setShowSpinner] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const interval = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    if (progress === 100 && interval.current) {
      clearInterval(interval.current);
      interval.current = undefined;
    }
  }, [progress]);

  useEffect(() => {
    return (): void => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  return (
    <>
      <Button
        onClick={(): void => {
          setProgress(0);
          setShowSpinner(!showSpinner);

          if (interval.current) {
            clearInterval(interval.current);
            interval.current = undefined;
          }

          interval.current = setInterval(() => {
            setProgress((prev) => (prev >= 100 ? 0 : prev + 10));
          }, 1000);
        }}
      >
        {'Toggle spinner'}
      </Button>

      {showSpinner && (
        <Spinner
          percentComplete={progress}
          className={'bottomSpacingXL'}
          size={'large'}
          color={'interactive'}
          titlePosition={'right'}
        />
      )}
    </>
  );
}
`,E_=`import { type ReactElement } from 'react';

import { Spinner } from '@skatteetaten/ds-progress';

import styles from './spinner.module.scss';

export default function SpinnerSizeExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Spinner size={'small'}>{'Small'}</Spinner>
      <Spinner size={'medium'}>{'Medium'}</Spinner>
      <Spinner size={'large'}>{'Large'}</Spinner>
      <Spinner size={'extraLarge'}>{'Extra large'}</Spinner>
    </div>
  );
}
`,C_=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}
`,P_=`import { type ReactElement } from 'react';

import { Spinner } from '@skatteetaten/ds-progress';

import styles from './spinner.module.scss';

export default function SpinnerTitlePositionExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Spinner titlePosition={'right'}>{'Tittel til hoyre'}</Spinner>
      <Spinner titlePosition={'bottom'}>{'Tittel under'}</Spinner>
    </div>
  );
}
`,R_=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}
`,w_=`import { type ReactElement, useId, useState } from 'react';

import { OpenClose, StepList } from '@skatteetaten/ds-collections';
import { Card } from '@skatteetaten/ds-content';
import { Checkbox, ErrorSummary, RadioGroup } from '@skatteetaten/ds-forms';
import { List, Paragraph } from '@skatteetaten/ds-typography';

export default function StepListStandardExample(): ReactElement {
  const stepId = useId();
  const [activeStep, setActiveStep] = useState(1);
  const [step3, setStep3] = useState<string | undefined>(undefined);
  const [hasStep3Error, setHasStep3Error] = useState(false);

  const onNext = (): void => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  };

  return (
    <StepList>
      {activeStep >= 1 && (
        <StepList.Step
          id={\`\${stepId}-1\`}
          variant={activeStep === 1 ? 'active' : 'passive'}
          title={'Hva holder du på med?'}
          stepNumber={1}
          shouldAutoFocusWhenActive={false}
          onEdit={
            activeStep > 1 && activeStep < 5
              ? (): void => setActiveStep(1)
              : undefined
          }
          onNext={onNext}
        >
          {'Varer og tjenester'}
        </StepList.Step>
      )}

      {activeStep >= 2 && (
        <StepList.Step
          id={\`\${stepId}-2\`}
          variant={activeStep === 2 ? 'active' : 'passive'}
          title={'Hva gjør du?'}
          stepNumber={2}
          onEdit={
            activeStep > 2 && activeStep < 5
              ? (): void => setActiveStep(2)
              : undefined
          }
          onNext={onNext}
        >
          {'Selger'}
        </StepList.Step>
      )}

      {activeStep >= 3 && (
        <StepList.Step
          id={\`\${stepId}-3\`}
          variant={activeStep === 3 ? 'active' : 'passive'}
          title={'Selger du varer og tjenester for egen regning?'}
          stepNumber={3}
          onEdit={
            activeStep > 3 && activeStep < 5
              ? (): void => setActiveStep(2)
              : undefined
          }
          onNext={(): void => {
            if (step3) {
              onNext();
            } else {
              setHasStep3Error(true);
            }
          }}
        >
          {activeStep === 3 ? (
            <>
              <RadioGroup
                legend={
                  'Selger du varer og tjenester for egen regning og risiko?'
                }
                errorMessage={
                  hasStep3Error
                    ? 'Kryss av hvorvidt du selger varer  og tjenester'
                    : undefined
                }
                hideLegend
                onChange={(event): void => {
                  setHasStep3Error(false);
                  setStep3(event.target.value);
                }}
              >
                <RadioGroup.Radio id={'step3radio'} value={'ja'}>
                  {'Ja'}
                </RadioGroup.Radio>
                <RadioGroup.Radio value={'nei'}>{'Nei'}</RadioGroup.Radio>
              </RadioGroup>

              <OpenClose
                title={'Hva mener vi med egen regning og risiko?'}
                size={'small'}
              >
                <Paragraph hasSpacing>
                  {
                    'At du driver for egen regning og risiko innebærer at det er du som har det økonomiske ansvaret for gjeld og forpliktelser. Det innebærer også at det er du som dekker kostnadene i virksomheten, for eksempel kostnader til materiale eller andre driftskostnader.'
                  }{' '}
                </Paragraph>
                <Paragraph>
                  {
                    'I tillegg vil du ha det kontraktsmessige ansvaret for at oppdrag blir utført og ansvar for å dekke et eventuelt underskudd.'
                  }
                </Paragraph>
              </OpenClose>
              <ErrorSummary showErrorSummary={hasStep3Error}>
                <ErrorSummary.Error referenceId={'step3radio'}>
                  {'Selger du varer og tjenester for egen regning?'}
                </ErrorSummary.Error>
              </ErrorSummary>
            </>
          ) : (
            <div>{step3}</div>
          )}
        </StepList.Step>
      )}

      {activeStep >= 4 && (
        <StepList.Step
          id={\`\${stepId}-4\`}
          variant={activeStep === 4 ? 'active' : 'passive'}
          title={'Oppsummering før innsending'}
          stepNumber={4}
          onNext={onNext}
        >
          {activeStep === 4 ? (
            <Card color={'ochre'}>
              <Card.Content>
                <List>
                  <List.Element>
                    {'Du jobber med varer og tjenester'}
                  </List.Element>
                  <List.Element>{'Du selger'}</List.Element>
                  <List.Element>
                    {'Du selger for egen regning og risiko'}
                  </List.Element>
                </List>
                <Checkbox>
                  {'Jeg bekrefter at opplysningene ovenfor stemmer'}
                </Checkbox>
              </Card.Content>
            </Card>
          ) : (
            <div>{'Oppsummering'}</div>
          )}
        </StepList.Step>
      )}

      {activeStep >= 5 && step3 === 'ja' && (
        <StepList.Step
          id={\`\${stepId}-5\`}
          title={'Vårt veiledende svar'}
          variant={'positiveResult'}
          stepNumber={5}
          introTitle={'Virksomheten skal registreres som særavgiftspliktig.'}
          introTitleAs={'h4'}
          introContent={
            <Paragraph>
              {
                'For å bli registrert må du sende en søknad til Skatteetaten. Nedenfor beskriver vi hvordan du går frem og hva du må dokumentere.'
              }
            </Paragraph>
          }
        >
          <Paragraph>{'Du må gjøre følgende:'}</Paragraph>
          <List as={'ol'}>
            <List.Element>
              {'Du må bestemme hvilken organisasjonsform som passer best.'}
            </List.Element>
            <List.Element>
              {
                'Registrere bedriften i Enhetsregisteret ved å fylle ut Samordnet'
              }
              {'registermelding'}
            </List.Element>
            <List.Element>
              {
                'Dersom bedriften din har avgiftspliktig omsetning og/eller uttak'
              }
              {'overstiger kr 50 000 i løpet av en 12 måneders periode, må du'}
              {'registrere virksomheten i Merverdiavgiftsregisteret.'}
            </List.Element>
          </List>
        </StepList.Step>
      )}

      {activeStep >= 5 && step3 === 'nei' && (
        <StepList.Step
          id={\`\${stepId}-5\`}
          title={'Nøytralt resultat'}
          variant={'neutralResult'}
          stepNumber={5}
        >
          {'Mer brødtekst'}
        </StepList.Step>
      )}
    </StepList>
  );
}
`,D_=`import { type ReactElement, useState } from 'react';

import { SaveSVGpath, EditSVGpath } from '@skatteetaten/ds-icons';
import { Table } from '@skatteetaten/ds-table';

export default function TableExpandableWithCustomButtonExample(): ReactElement {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [savingRows, setSavingRows] = useState<Set<string>>(new Set());

  const data = [
    {
      id: 'abcd',
      firma: 'Bluth Company',
      timestamp: '08.04.2020 11:31:57',
      status: 'Under behandling',
      eta: 'Mer enn 1 dag',
    },
    {
      id: 'ijkl',
      firma: 'Business Engros',
      timestamp: '08.04.2020 11:32:16',
      status: 'Under behandling',
      eta: '23 min',
    },
    {
      id: 'uvwx',
      firma: 'Corwood Industries',
      timestamp: '08.04.2020 11:32:16',
      status: 'Ferdig',
      eta: '-',
    },
    {
      id: 'cdef',
      firma: 'Limerick Partner',
      timestamp: '08.04.2020 11:32:47',
      status: 'Ferdig',
      eta: '-',
    },
  ];

  const handleExpand = (rowId: string): void => {
    setExpandedRows((prev) => new Set(prev).add(rowId));
  };

  const handleClose = async (rowId: string): Promise<void> => {
    setSavingRows((prev) => new Set(prev).add(rowId));

    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });

    setSavingRows((prev) => {
      const next = new Set(prev);
      next.delete(rowId);
      return next;
    });

    setExpandedRows((prev) => {
      const next = new Set(prev);
      next.delete(rowId);
      return next;
    });
  };

  return (
    <Table caption={'Oppgaver'}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell sortKey={'firma'} scope={'col'} isSortable>
            {'Firma'}
          </Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Startet'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>
            {'Forventet behandlet'}
          </Table.HeaderCell>
          <Table.HeaderCell as={'td'} />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((row) => {
          const isExpanded = expandedRows.has(row.id);
          const isSaving = savingRows.has(row.id);

          return (
            <Table.Row
              key={row.id}
              expandButtonPosition={'right'}
              expandableContent={
                <div className={'emptyExpandedTableRow'}></div>
              }
              expandButtonAriaDescribedby={row.id}
              expandButtonTitle={isExpanded ? 'Lagre og lukk' : 'Apne oppgave'}
              expandButtonProps={{
                svgPath: isExpanded ? SaveSVGpath : EditSVGpath,
                hasSpinner: isSaving,
                disabled: isSaving,
              }}
              isExpanded={isExpanded}
              isExpandable
              onExpand={() => handleExpand(row.id)}
              onClose={() => handleClose(row.id)}
            >
              <Table.DataCell id={row.id}>{row.firma}</Table.DataCell>
              <Table.DataCell>{row.timestamp}</Table.DataCell>
              <Table.DataCell>{row.status}</Table.DataCell>
              <Table.DataCell>{row.eta}</Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
`,N_=`import { type ReactElement, type ReactNode, useState } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { SortState, Table } from '@skatteetaten/ds-table';

export default function TableEditableRowExample(): ReactElement {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const data = [
    {
      month: 'Januar',
      amount: 5426,
      coverage: '100 %',
      revenue: '1000',
      id: '9f78',
    },
    {
      month: 'Februar',
      amount: 5432,
      coverage: '50 %',
      revenue: '500',
      id: '6925',
    },
    {
      month: 'Mars',
      amount: 4899,
      coverage: '20 %',
      revenue: '2000',
      id: 'fc9d',
    },
    {
      month: 'April',
      amount: 2344,
      coverage: '30 %',
      revenue: '1055',
      id: '1d15',
    },
  ];

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof (typeof data)[0];

    if (!sortKey) {
      return 0;
    }
    if (a[sortKey] === b[sortKey]) {
      return 0;
    }
    if (sortState.direction === 'ascending') {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  return (
    <Table
      sortState={sortState}
      setSortState={setSortState}
      caption={'Månedsoversikt'}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell as={'td'} />
          <Table.HeaderCell alignment={'right'} scope={'col'}>
            {'Måned'}
          </Table.HeaderCell>
          <Table.HeaderCell scope={'col'} sortKey={'amount'} isSortable>
            {'Beløp'}
          </Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Dekningsgrad'}</Table.HeaderCell>
          <Table.HeaderCell alignment={'right'} scope={'col'}>
            {'Avkastning'}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedData.map((row) => {
          return (
            <Table.EditableRow
              key={row.id}
              editableContent={(closeEditing: () => void): ReactNode => (
                <div className={'emptyExpandedTableRow'}>
                  <Button
                    onClick={(): void => {
                      closeEditing();
                    }}
                  >
                    {'Lukk'}
                  </Button>
                </div>
              )}
              editButtonAriaDescribedby={row.id}
              onEdit={(): void => {
                console.log('redigerrer rad');
              }}
            >
              <Table.DataCell id={row.id} alignment={'right'}>
                {row.month}
              </Table.DataCell>
              <Table.DataCell alignment={'right'}>{row.amount}</Table.DataCell>
              <Table.DataCell>{row.coverage}</Table.DataCell>
              <Table.DataCell alignment={'right'}>{row.revenue}</Table.DataCell>
            </Table.EditableRow>
          );
        })}
      </Table.Body>
    </Table>
  );
}
`,L_=`import { type ReactElement, useState } from 'react';

import { SortState, Table } from '@skatteetaten/ds-table';

export default function TableExpandableExample(): ReactElement {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const data = [
    {
      id: 'abcd',
      firma: 'Bluth Company',
      timestamp: '08.04.2020 11:31:57',
      status: 'Under behandling',
      eta: 'Mer enn 1 dag',
    },
    {
      id: 'ijkl',
      firma: 'Business Engros',
      timestamp: '08.04.2020 11:32:16',
      status: 'Under behandling',
      eta: '23 min',
    },
    {
      id: 'uvwx',
      firma: 'Corwood Industries',
      timestamp: '08.04.2020 11:32:16',
      status: 'Ferdig',
      eta: '-',
    },
    {
      id: 'cdef',
      firma: 'Limerick Partner',
      timestamp: '08.04.2020 11:32:47',
      status: 'Ferdig',
      eta: '-',
    },
  ];

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof (typeof data)[0];

    if (!sortKey) {
      return 0;
    }
    if (a[sortKey] === b[sortKey]) {
      return 0;
    }
    if (sortState.direction === 'ascending') {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  return (
    <Table
      caption={'Firmaoversikt'}
      sortState={sortState}
      setSortState={setSortState}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell sortKey={'firma'} scope={'col'} isSortable>
            {'Firma'}
          </Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Startet'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>
            {'Forventet behandlet'}
          </Table.HeaderCell>
          <Table.HeaderCell as={'td'} />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedData.map((row) => {
          return (
            <Table.Row
              key={row.id}
              expandButtonPosition={'right'}
              expandableContent={
                <div className={'emptyExpandedTableRow'}></div>
              }
              expandButtonAriaDescribedby={row.id}
              isExpandable
            >
              <Table.DataCell id={row.id}>{row.firma}</Table.DataCell>
              <Table.DataCell>{row.timestamp}</Table.DataCell>
              <Table.DataCell>{row.status}</Table.DataCell>
              <Table.DataCell>{row.eta}</Table.DataCell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}
`,O_=`import {
  type ChangeEvent,
  type ReactElement,
  type ReactNode,
  useRef,
  useState,
} from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import { formatNationalIdentityNumber } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';
import { SortState, Table } from '@skatteetaten/ds-table';

type PersonFormData = {
  personNumber: string;
  lastName: string;
  amount: string;
};

type EditablePersonFormProps = {
  initialData: PersonFormData;
  onSave: (data: PersonFormData) => void;
  onCancel: () => void;
  validateField: (field: string, value: string) => string;
};

const EditablePersonForm = ({
  initialData,
  onSave,
  onCancel,
  validateField,
}: EditablePersonFormProps): ReactElement => {
  const [personNumber, setPersonNumber] = useState(initialData.personNumber);
  const [lastName, setLastName] = useState(initialData.lastName);
  const [amount, setAmount] = useState(initialData.amount);
  const [personNumberError, setPersonNumberError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [amountError, setAmountError] = useState('');

  const handleBlur = (
    field: string,
    value: string,
    setError: (msg: string) => void
  ): void => {
    const error = validateField(field, value);
    setError(error);
  };

  const handleSave = (): void => {
    const personNumberErr = validateField('personNumber', personNumber);
    const lastNameErr = validateField('lastName', lastName);
    const amountErr = validateField('amount', amount);

    setPersonNumberError(personNumberErr);
    setLastNameError(lastNameErr);
    setAmountError(amountErr);

    if (!personNumberErr && !lastNameErr && !amountErr) {
      onSave({ personNumber, lastName, amount });
    }
  };

  return (
    <div className={'editableContent'}>
      <div className={'flex gapM bottomSpacingXL'}>
        <TextField
          label={'Fødselsnummer (11 siffer)'}
          value={personNumber}
          errorMessage={personNumberError}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setPersonNumber(e.target.value);
            setPersonNumberError('');
          }}
          onBlur={() =>
            handleBlur('personNumber', personNumber, setPersonNumberError)
          }
        />
        <TextField
          label={'Etternavn'}
          value={lastName}
          errorMessage={lastNameError}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value);
            setLastNameError('');
          }}
          onBlur={() => handleBlur('lastName', lastName, setLastNameError)}
        />
      </div>
      <TextField
        label={'Beløp i kroner'}
        className={'textField150 bottomSpacingXL'}
        value={amount}
        errorMessage={amountError}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          setAmount(e.target.value);
          setAmountError('');
        }}
        onBlur={() => handleBlur('amount', amount, setAmountError)}
      />
      <div className={'flex gapS'}>
        <Button onClick={handleSave}>{'Lagre'}</Button>
        <Button variant={'secondary'} onClick={onCancel}>
          {'Avbryt'}
        </Button>
      </div>
    </div>
  );
};

export default function TableAddRowExample(): ReactElement {
  const [data, setData] = useState([
    {
      id: 'abc',
      dato: '23.7.2025',
      personNumber: '14487219408',
      firstName: 'Treliters',
      lastName: 'Geir',
      amount: '641693',
    },
    {
      id: 'def',
      dato: '23.8.2025',
      personNumber: '70070903485',
      firstName: 'Ringlete',
      lastName: 'Under',
      amount: '139914',
    },
    {
      id: 'ghi',
      dato: '23.9.2025',
      personNumber: '70168226499',
      firstName: 'Uskikka',
      lastName: 'Resistens',
      amount: '667946',
    },
  ]);

  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const [nextId, setNextId] = useState(4);
  const [addRow, setAddRow] = useState<boolean>(false);
  const [highlightedRowId, setHighlightedRowId] = useState<string | null>(null);
  const addPersonButtonRef = useRef<HTMLButtonElement>(null);
  const addPersonRef = useRef<HTMLDivElement>(null);

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof (typeof data)[0];
    if (!sortKey) return 0;
    if (a[sortKey] === b[sortKey]) return 0;
    if (sortState.direction === 'ascending')
      return a[sortKey] > b[sortKey] ? 1 : -1;
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  const handleSaveRow = (
    id: string,
    updated: Partial<(typeof data)[0]>
  ): void => {
    setData((prev) =>
      prev.map((row) => (row.id === id ? { ...row, ...updated } : row))
    );
  };

  const validateField = (field: string, value: string): string => {
    if (field === 'personNumber') {
      if (value.trim() === '') return 'Fødselsnummer må fylles ut';
      if (value.length !== 11) return 'Fødselsnummer må være 11 siffer';
    }
    if (field === 'lastName') {
      if (value.trim() === '') return 'Etternavn må fylles ut';
    }
    if (field === 'amount') {
      if (value.trim() === '') return 'Beløp må fylles ut';
      if (value !== '' && Number.isNaN(Number(value)))
        return 'Beløp må være et tall';
    }
    return '';
  };

  return (
    <>
      <Button
        ref={addPersonButtonRef}
        className={'bottomSpacingL'}
        onClick={(): void => {
          setAddRow(true);
          setTimeout(() => addPersonRef.current?.focus(), 0);
        }}
      >
        {'Legg til person'}
      </Button>
      <Table
        caption={'Personoversikt'}
        rowInEditModeId={addRow ? 'addPerson' : undefined}
        sortState={sortState}
        setSortState={setSortState}
        size={'extraSmall'}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope={'col'} sortKey={'dato'} isSortable>
              {'Sist endret'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Fødselsnummer'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
            <Table.HeaderCell scope={'col'} alignment={'right'}>
              {'Beløp'}
            </Table.HeaderCell>
            <Table.HeaderCell as={'td'} />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {addRow && (
            <Table.EditableRow
              id={'addPerson'}
              editButtonPosition={'right'}
              editableContent={(closeEditing: () => void): ReactNode => (
                <EditablePersonForm
                  initialData={{ personNumber: '', lastName: '', amount: '' }}
                  validateField={validateField}
                  onSave={(formData) => {
                    const newRow = {
                      id: nextId.toString(),
                      dato: new Date().toLocaleDateString('no-NO'),
                      personNumber: formData.personNumber,
                      firstName: '',
                      lastName: formData.lastName,
                      amount: formData.amount,
                    };
                    setData((prev) => [newRow, ...prev]);
                    setHighlightedRowId(newRow.id);
                    setNextId((prev) => prev + 1);
                    setAddRow(false);
                    closeEditing();
                    setTimeout(() => addPersonButtonRef.current?.focus(), 0);
                    setTimeout(() => setHighlightedRowId(null), 3000);
                  }}
                  onCancel={() => {
                    setAddRow(false);
                    closeEditing();
                    setTimeout(() => addPersonButtonRef.current?.focus(), 0);
                  }}
                />
              )}
              isNew
            >
              <Table.DataCell colSpan={4}>
                <div
                  ref={addPersonRef}
                  tabIndex={-1}
                  className={'tabIndexNoOutline'}
                >
                  {'Legg til person'}
                </div>
              </Table.DataCell>
            </Table.EditableRow>
          )}
          {sortedData.map((person) => (
            <Table.EditableRow
              key={person.id}
              className={person.id === highlightedRowId ? 'highlightRow' : ''}
              editButtonPosition={'right'}
              editableContent={(closeEditing: () => void): ReactNode => (
                <EditablePersonForm
                  initialData={{
                    personNumber: person.personNumber,
                    lastName: person.lastName,
                    amount: person.amount,
                  }}
                  validateField={validateField}
                  onSave={(formData) => {
                    handleSaveRow(person.id, {
                      dato: new Date().toLocaleDateString('no-NO'),
                      personNumber: formData.personNumber,
                      lastName: formData.lastName,
                      amount: formData.amount,
                    });
                    closeEditing();
                  }}
                  onCancel={() => {
                    closeEditing();
                  }}
                />
              )}
            >
              <Table.DataCell>{person.dato}</Table.DataCell>
              <Table.DataCell>
                {formatNationalIdentityNumber(person.personNumber)}
              </Table.DataCell>
              <Table.DataCell>{\`\${person.firstName} \${person.lastName}\`}</Table.DataCell>
              <Table.DataCell
                alignment={'right'}
              >{\`\${person.amount} kr\`}</Table.DataCell>
            </Table.EditableRow>
          ))}
        </Table.Body>
      </Table>
    </>
  );
}
`,I_=`import { type ReactElement } from 'react';

import {
  CompletedSVGpath,
  TimelapseSVGpath,
  Icon,
} from '@skatteetaten/ds-icons';
import { Table } from '@skatteetaten/ds-table';

export default function TableWithIconsExample(): ReactElement {
  return (
    <Table caption={'Dette er en ekstra liten tabell'}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope={'col'}>{'Frist'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Arbeidsoppgave'}</Table.HeaderCell>
          <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.DataCell>{'10.03.2023'}</Table.DataCell>
          <Table.DataCell>{'Klage på vedtak'}</Table.DataCell>
          <Table.DataCell>
            <Icon svgPath={CompletedSVGpath} /> {'Fullført'}
          </Table.DataCell>
        </Table.Row>
        <Table.Row>
          <Table.DataCell>{'11.04.2023'}</Table.DataCell>
          <Table.DataCell>{'Klage på vedtak'}</Table.DataCell>
          <Table.DataCell>
            <Icon svgPath={TimelapseSVGpath} /> {'Under arbeid'}
          </Table.DataCell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
`,B_=`import { type ReactElement, useState } from 'react';

import { InlineButton } from '@skatteetaten/ds-buttons';
import {
  EditSVGpath,
  CopySVGpath,
  DeleteSVGpath,
} from '@skatteetaten/ds-icons';
import { SortState, Table } from '@skatteetaten/ds-table';
import { Paragraph } from '@skatteetaten/ds-typography';

import styles from './table.module.scss';

export default function TableWithEmptyHeaderCellsExample(): ReactElement {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const data = [
    {
      deadline: '10.04.2023',
      task: 'Mottatt tilbakemelding',
      name: 'BARMEN OG BORGHEIM',
      status: 'Tilgjengelig',
      id: '9f78',
    },
    {
      deadline: '12.04.2023',
      task: 'Klage på vedtak',
      name: 'LIMERICKS PARTNER ASA',
      status: 'Ny',
      id: '4b90',
    },
    {
      deadline: '13.04.2023',
      task: 'Mottatt tilbakemelding',
      name: 'ENCKEL OG WIRCKE LØSNINGER',
      status: 'Ny',
      id: '8c6f',
    },
    {
      deadline: '15.04.2023',
      task: 'Klage på vedtak',
      name: 'CORWOOD INDUSTRIES NORGE',
      status: 'Tilgjengelig',
      id: '8182',
    },
    {
      deadline: '22.04.2023',
      task: 'Medhold klage',
      name: 'SLANTED N CHANTED',
      status: 'Under arbeid',
      id: '85cd',
    },
  ];

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof (typeof data)[0];

    if (!sortKey) {
      return 0;
    }
    if (a[sortKey] === b[sortKey]) {
      return 0;
    }
    if (sortState.direction === 'ascending') {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  return (
    <>
      <Paragraph>
        {
          'Hvis vi har en tabell med minst 3 kolonner uten kolonnetitler så bør vi legge på sr-only tekster som th for at det skulle bli lettere for skjermleserbrukere å forstå tabellen.'
        }
      </Paragraph>
      <Table
        caption={'Arbeidsoppgaver'}
        sortState={sortState}
        setSortState={setSortState}
      >
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell scope={'col'} sortKey={'deadline'} isSortable>
              {'Frist'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>
              {'Arbeidsoppgave'}
            </Table.HeaderCell>
            <Table.HeaderCell
              alignment={'right'}
              scope={'col'}
              sortKey={'name'}
              isSortable
            >
              {'navn'}
            </Table.HeaderCell>
            <Table.HeaderCell scope={'col'}>{'status'}</Table.HeaderCell>
            <Table.HeaderCell>
              <span className={styles.srOnly}>{'Rediger-funksjon'}</span>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <span className={styles.srOnly}>{'Kopier-funksjon'}</span>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <span className={styles.srOnly}>{'Slett-funksjon'}</span>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {sortedData.map((row) => {
            return (
              <Table.Row key={row.id}>
                <Table.DataCell id={row.id}>{row.deadline}</Table.DataCell>
                <Table.DataCell>{row.task}</Table.DataCell>
                <Table.DataCell>{row.name}</Table.DataCell>
                <Table.DataCell>{row.status}</Table.DataCell>
                <Table.DataCell>
                  <InlineButton svgPath={EditSVGpath}>{'Rediger'}</InlineButton>
                </Table.DataCell>
                <Table.DataCell>
                  <InlineButton svgPath={CopySVGpath}>{'Kopier'}</InlineButton>
                </Table.DataCell>
                <Table.DataCell>
                  <InlineButton svgPath={DeleteSVGpath}>{'Slett'}</InlineButton>
                </Table.DataCell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </>
  );
}
`,A_=`.srOnly {
  position: absolute;
  overflow: hidden;
  width: 1px;
  height: 1px;
  padding: 0;
  border: 0;
  margin: -1px;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}
`,M_=`import { type ReactElement, useState } from 'react';

import { SortState, Table } from '@skatteetaten/ds-table';

export default function TableSortableColumnsExample(): ReactElement {
  const [sortState, setSortState] = useState<SortState>({
    direction: 'none',
  });

  const data = [
    {
      player: 'Ole',
      score: 100,
    },
    {
      player: 'Dole',
      score: 20,
    },
    {
      player: 'Doffen',
      score: 30,
    },
  ];

  const sortedData = data.slice().sort((a, b) => {
    const sortKey = sortState.sortKey as keyof (typeof data)[0];
    if (!sortKey) {
      return 0;
    }
    if (a[sortKey] === b[sortKey]) {
      return 0;
    }
    if (sortState.direction === 'ascending') {
      return a[sortKey] > b[sortKey] ? 1 : -1;
    }
    return a[sortKey] < b[sortKey] ? 1 : -1;
  });

  return (
    <Table
      sortState={sortState}
      setSortState={setSortState}
      caption={'High scores'}
    >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell scope={'col'} sortKey={'player'} isSortable>
            {'Player'}
          </Table.HeaderCell>
          <Table.HeaderCell scope={'col'} sortKey={'score'} isSortable>
            {'High Score'}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {sortedData.map((row) => (
          <Table.Row key={row.player}>
            <Table.DataCell alignment={'center'}>{row.player}</Table.DataCell>
            <Table.DataCell alignment={'right'}>{row.score}</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
`,H_=`import { type ReactElement } from 'react';

import { Table } from '@skatteetaten/ds-table';

export default function TableSizesExample(): ReactElement {
  const klage = 'Klage på vedtak';

  return (
    <>
      <div>
        {'Small'}
        <Table caption={'Dette er en liten tabell.'} size={'small'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'}>{'Frist'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Arbeidsoppgave'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div>
        {'Medium'}
        <Table caption={'Dette er en medium tabell.'} size={'medium'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'}>{'Frist'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Arbeidsoppgave'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>

      <div>
        {'Large'}
        <Table caption={'Dette er en stor tabell.'} size={'large'}>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope={'col'}>{'Frist'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>
                {'Arbeidsoppgave'}
              </Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Navn'}</Table.HeaderCell>
              <Table.HeaderCell scope={'col'}>{'Status'}</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
            <Table.Row>
              <Table.DataCell>{'10.04.2023'}</Table.DataCell>
              <Table.DataCell>{klage}</Table.DataCell>
              <Table.DataCell>{'LIMERICK PARTNER ASA'}</Table.DataCell>
              <Table.DataCell>{'NY'}</Table.DataCell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </>
  );
}
`,V_=`import { type ReactElement, useState } from 'react';

import { Checkbox } from '@skatteetaten/ds-forms';
import { Table } from '@skatteetaten/ds-table';

export default function TableSelectableRowsExample(): ReactElement {
  const items = [
    {
      fastsatt: '31.01.2018',
      avgiftstype: 'OR',
      avgiftsgruppe: '525',
      beloep: '6045',
      status: 'Iverksatt',
      id: '1',
    },
    {
      fastsatt: '31.05.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6033',
      status: 'Iverksatt',
      id: '2',
    },
    {
      fastsatt: '02.03.2018',
      avgiftstype: 'AR',
      avgiftsgruppe: '525',
      beloep: '6064',
      status: 'Under arbeid',
      id: '3',
    },
    {
      fastsatt: '03.03.2018',
      avgiftstype: 'DR',
      avgiftsgruppe: '525',
      beloep: '6064',
      status: 'Under arbeid',
      id: '4',
    },
    {
      fastsatt: '04.01.2018',
      avgiftstype: 'BR',
      avgiftsgruppe: '525',
      beloep: '6064',
      status: 'Under arbeid',
      id: '5',
    },
  ];

  const [checkedState, setCheckedState] = useState<Array<number>>([]);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  return (
    <Table caption={'avgiftsstatus'}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell as={'td'}>
            <Checkbox
              classNames={{ label: 'checkboxInTable' }}
              checked={isAllChecked}
              hideLabel
              onChange={() => {
                if (isAllChecked) {
                  setCheckedState([]);
                }

                setIsAllChecked(!isAllChecked);
              }}
            >
              {'velg alle rader'}
            </Checkbox>
          </Table.HeaderCell>
          <Table.HeaderCell>{'Fastsatt'}</Table.HeaderCell>
          <Table.HeaderCell>{'Avgiftstype'}</Table.HeaderCell>
          <Table.HeaderCell alignment={'right'}>{'Beløp'}</Table.HeaderCell>
          <Table.HeaderCell>{'Status'}</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item, index) => (
          <Table.Row key={item.id}>
            <Table.DataCell>
              <Checkbox
                classNames={{ label: 'checkboxInTable' }}
                checked={
                  isAllChecked || checkedState.some((it) => it === index)
                }
                hideLabel
                onChange={(event) => {
                  if (isAllChecked) {
                    setCheckedState(
                      Array.from(Array(items.length).keys()).filter(
                        (it) => it !== index
                      )
                    );
                    setIsAllChecked(false);
                  } else if (event.target.checked) {
                    setCheckedState([index, ...checkedState]);
                  } else {
                    setCheckedState(checkedState.filter((it) => it !== index));
                  }
                }}
              >{\`Velg \${item.fastsatt}\`}</Checkbox>
            </Table.DataCell>
            <Table.DataCell as={'th'} scope={'row'}>
              {item.fastsatt}
            </Table.DataCell>
            <Table.DataCell>{item.avgiftstype}</Table.DataCell>
            <Table.DataCell alignment={'right'}>{item.beloep}</Table.DataCell>
            <Table.DataCell>{item.status}</Table.DataCell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
}
`,F_=`["standard", "med-ramme", "multiline", "størrelsesvariant"]
`,z_=`import { type ReactElement } from 'react';

import { Tabs } from '@skatteetaten/ds-collections';

import styles from './tabs.module.scss';

export default function TabsWithBorderExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tabs defaultValue={'tab-1'} hasBorder>
        <Tabs.List>
          <Tabs.Tab value={'tab-1'}>{'Personopplysninger'}</Tabs.Tab>
          <Tabs.Tab value={'tab-2'}>{'Kontaktinformasjon'}</Tabs.Tab>
          <Tabs.Tab value={'tab-3'}>{'Betaling'}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'tab-1'}>
          {'Innhold med ramme rundt panelområdet.'}
        </Tabs.Panel>
        <Tabs.Panel value={'tab-2'}>
          {'Innhold med ramme rundt panelområdet.'}
        </Tabs.Panel>
        <Tabs.Panel value={'tab-3'}>
          {'Innhold med ramme rundt panelområdet.'}
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}
`,G_=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-s);
}
`,K_=`import { type ReactElement } from 'react';

import { Tabs } from '@skatteetaten/ds-collections';

import styles from './tabs.module.scss';

export default function TabsMultilineExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tabs defaultValue={'tab-1'} isMultiline>
        <Tabs.List>
          <Tabs.Tab value={'tab-1'}>
            {'Dokumenter med lang tittel for mobilvisning'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab-2'}>
            {'Meldinger med lang tittel for mobilvisning'}
          </Tabs.Tab>
          <Tabs.Tab value={'tab-3'}>
            {'Historikk med lang tittel for mobilvisning'}
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'tab-1'}>{'Innhold for dokumenter.'}</Tabs.Panel>
        <Tabs.Panel value={'tab-2'}>{'Innhold for meldinger.'}</Tabs.Panel>
        <Tabs.Panel value={'tab-3'}>{'Innhold for historikk.'}</Tabs.Panel>
      </Tabs>
    </div>
  );
}
`,$_=`.container {
  max-width: 22rem;
}
`,q_=`import { type ReactElement } from 'react';

import { Tabs } from '@skatteetaten/ds-collections';

export default function TabsStandardValuesExample(): ReactElement {
  return (
    <Tabs defaultValue={'tab-1'}>
      <Tabs.List>
        <Tabs.Tab value={'tab-1'}>{'Oversikt'}</Tabs.Tab>
        <Tabs.Tab value={'tab-2'}>{'Meldinger'}</Tabs.Tab>
        <Tabs.Tab value={'tab-3'}>{'Historikk'}</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value={'tab-1'}>
        {'Innhold for oversikt med standardverdier.'}
      </Tabs.Panel>
      <Tabs.Panel value={'tab-2'}>
        {'Innhold for meldinger med standardverdier.'}
      </Tabs.Panel>
      <Tabs.Panel value={'tab-3'}>
        {'Innhold for historikk med standardverdier.'}
      </Tabs.Panel>
    </Tabs>
  );
}
`,J_=`import { type ReactElement } from 'react';

import { Tabs } from '@skatteetaten/ds-collections';

import styles from './tabs.module.scss';

export default function TabsSizeVariantExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tabs defaultValue={'standard-1'} variant={'standard'}>
        <Tabs.List>
          <Tabs.Tab value={'standard-1'}>{'Oversikt'}</Tabs.Tab>
          <Tabs.Tab value={'standard-2'}>{'Innboks'}</Tabs.Tab>
          <Tabs.Tab value={'standard-3'}>{'Historikk'}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'standard-1'}>{'Innhold for standard.'}</Tabs.Panel>
        <Tabs.Panel value={'standard-2'}>{'Innhold for standard.'}</Tabs.Panel>
        <Tabs.Panel value={'standard-3'}>{'Innhold for standard.'}</Tabs.Panel>
      </Tabs>

      <Tabs defaultValue={'compact-1'} variant={'compact'}>
        <Tabs.List>
          <Tabs.Tab value={'compact-1'}>{'Oversikt'}</Tabs.Tab>
          <Tabs.Tab value={'compact-2'}>{'Innboks'}</Tabs.Tab>
          <Tabs.Tab value={'compact-3'}>{'Historikk'}</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value={'compact-1'}>{'Innhold for compact.'}</Tabs.Panel>
        <Tabs.Panel value={'compact-2'}>{'Innhold for compact.'}</Tabs.Panel>
        <Tabs.Panel value={'compact-3'}>{'Innhold for compact.'}</Tabs.Panel>
      </Tabs>
    </div>
  );
}
`,W_=`.container {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}
`,X_=`import { type ReactElement } from 'react';

import { Tag } from '@skatteetaten/ds-status';

import styles from './tag.module.scss';

export default function TagConveyMeaningExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tag color={'forest'}>{'Godkjent'}</Tag>
      <Tag color={'burgundy'}>{'Avvist'}</Tag>
      <Tag color={'ochre'}>{'Under behandling'}</Tag>
    </div>
  );
}
`,U_=`.container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-s);
}
`,Z_=`import { type ReactElement } from 'react';

import { Tag } from '@skatteetaten/ds-status';

import styles from './tag.module.scss';

export default function TagNonSemanticExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tag color={'graphite'}>{'Nyhet'}</Tag>
      <Tag color={'graphite'}>{'Veiledning'}</Tag>
      <Tag color={'graphite'}>{'Skjema'}</Tag>
    </div>
  );
}
`,Y_=`.container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-s);
}
`,Q_=`import { type ReactElement } from 'react';

import {
  CheckSVGpath,
  InfoSVGpath,
  WarningSVGpath,
} from '@skatteetaten/ds-icons';
import { Tag } from '@skatteetaten/ds-status';

import styles from './tag.module.scss';

export default function TagWithIconExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tag color={'forest'} svgPath={CheckSVGpath}>
        {'Godkjent'}
      </Tag>
      <Tag color={'ochre'} svgPath={InfoSVGpath}>
        {'Pågår'}
      </Tag>
      <Tag color={'burgundy'} svgPath={WarningSVGpath}>
        {'Mangler vedlegg'}
      </Tag>
    </div>
  );
}
`,ex=`.container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-s);
}
`,nx=`import { type ReactElement } from 'react';

import { Tag } from '@skatteetaten/ds-status';

import styles from './tag.module.scss';

export default function TagSizesExample(): ReactElement {
  return (
    <div className={styles.container}>
      <Tag size={'small'} color={'denim'}>
        {'Liten'}
      </Tag>
      <Tag size={'medium'} color={'denim'}>
        {'Medium'}
      </Tag>
    </div>
  );
}
`,tx=`.container {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--spacing-s);
}
`,ax=`["standard", "med-characterlimit"]
`,rx=`import { type ChangeEvent, type ReactElement, useState } from 'react';

import { TextArea } from '@skatteetaten/ds-forms';

export default function TextAreaWithCharacterLimitExample(): ReactElement {
  const [value, setValue] = useState<string>('');

  return (
    <TextArea
      label={'Begrunnelse'}
      helpText={'Maks 200 tegn.'}
      characterLimit={200}
      rows={4}
      value={value}
      hideLabel={false}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>): void =>
        setValue(event.target.value)
      }
    />
  );
}
`,ox=`import { type ChangeEvent, type ReactElement, useState } from 'react';

import { TextArea } from '@skatteetaten/ds-forms';

export default function TextAreaStandardExample(): ReactElement {
  const [value, setValue] = useState<string>('');

  return (
    <TextArea
      label={'Andre opplysninger'}
      rows={4}
      value={value}
      hideLabel={false}
      onChange={(event: ChangeEvent<HTMLTextAreaElement>): void =>
        setValue(event.target.value)
      }
    />
  );
}
`,sx=`[
  "standard",
  "formatering",
  "med-beskrivelse",
  "med-feilmelding",
  "med-hjelpetekst"
]
`,lx=`import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const organisationNumberFormatter = useFormattedInput({
    type: 'organisationNumber',
    initialValue: '974761076',
  });

  const nationalIdentityNumberFormatter = useFormattedInput({
    type: 'nationalIdentityNumber',
    initialValue: '26301518292',
  });

  const bankAccountNumberFormatter = useFormattedInput({
    type: 'bankAccountNumber',
    initialValue: '76940524802',
  });

  const phoneNumberFormatter = useFormattedInput({
    type: 'phoneNumber',
    initialValue: '12345678',
  });

  const amountFormatter = useFormattedInput({
    type: 'number',
    initialValue: '50400,32',
    allowDecimals: true,
  });

  return (
    <>
      <TextField
        label={'Organisasjonsnummer (9 siffer)'}
        value={organisationNumberFormatter.value}
        hideLabel={false}
        hasSpacing
        onChange={organisationNumberFormatter.onChange}
        onKeyDown={organisationNumberFormatter.onKeyDown}
      />

      <TextField
        label={'Fødselsnummer (11 siffer)'}
        value={nationalIdentityNumberFormatter.value}
        hideLabel={false}
        hasSpacing
        onChange={nationalIdentityNumberFormatter.onChange}
        onKeyDown={nationalIdentityNumberFormatter.onKeyDown}
      />

      <TextField
        label={'Bankkontonummer'}
        value={bankAccountNumberFormatter.value}
        hideLabel={false}
        hasSpacing
        onChange={bankAccountNumberFormatter.onChange}
        onKeyDown={bankAccountNumberFormatter.onKeyDown}
      />

      <TextField
        label={'Telefonnummer'}
        value={phoneNumberFormatter.value}
        hideLabel={false}
        hasSpacing
        onChange={phoneNumberFormatter.onChange}
        onKeyDown={phoneNumberFormatter.onKeyDown}
      />

      <TextField
        label={'Beløp (NOK)'}
        value={amountFormatter.value}
        hideLabel={false}
        onChange={amountFormatter.onChange}
        onKeyDown={amountFormatter.onKeyDown}
      />
    </>
  );
}
`,ix=`import { type ReactElement } from 'react';

import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldWithDescriptionExample(): ReactElement {
  return (
    <TextField
      label={'Kontaktperson'}
      description={'Hvis vi trenger å kontakte noen om saken'}
      hideLabel={false}
    />
  );
}
`,dx=`import { type FocusEvent, type ReactElement, useState } from 'react';

import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldWithErrorExample(): ReactElement {
  const [value, setValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>(
    'Postnummer må fylles ut.'
  );

  return (
    <TextField
      label={'Postnummer'}
      value={value}
      errorMessage={errorMessage}
      pattern={'\\\\d{4}'}
      maxLength={4}
      hideLabel={false}
      required
      onChange={(event): void => {
        setValue(event.target.value);
        setErrorMessage('');
      }}
      onBlur={(event: FocusEvent<HTMLInputElement>): void => {
        if (event.target.validity.valueMissing) {
          setErrorMessage('Postnummer må fylles ut.');
          return;
        }

        if (event.target.validity.patternMismatch) {
          setErrorMessage('Postnummer må inneholde fire tall.');
        }
      }}
    />
  );
}
`,cx=`import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldWithHelpTextExample(): ReactElement {
  const organisationNumberFormatter = useFormattedInput({
    type: 'organisationNumber',
  });

  return (
    <TextField
      label={'Organisasjonsnummer (9 siffer)'}
      helpText={
        'Hvis du ikke vet organisasjonsnummeret, kan du søke det opp på Brønnøysundregistrene.'
      }
      value={organisationNumberFormatter.value}
      hideLabel={false}
      onChange={organisationNumberFormatter.onChange}
      onKeyDown={organisationNumberFormatter.onKeyDown}
    />
  );
}
`,mx=`import { type ReactElement } from 'react';

import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldStandardExample(): ReactElement {
  return <TextField label={'Navn'} hideLabel={false} />;
}
`,ux=`import { type MouseEvent, type ReactElement, useRef, useState } from 'react';

import { Button, Link, LinkGroup } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import {
  dsI18n,
  langToLocale,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import {
  AccountMultipleIcon,
  BriefcaseIcon,
  FavoriteIcon,
  LockOutlineSVGpath,
  PersonIcon,
} from '@skatteetaten/ds-icons';
import {
  TopBannerExternal,
  type TopBannerExternalHandle,
  type User,
} from '@skatteetaten/ds-layout';
import {
  type Business,
  type Paginated,
  type Person,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import styles from './topbannerexternal.module.scss';

export default function TopBannerExternalStandardExample(): ReactElement {
  const modalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const [user, setUser] = useState<User>();
  const isDesktop = useMediaQuery('(min-width: 640px)');

  const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const lang = e.currentTarget.lang;
    dsI18n.changeLanguage(langToLocale[lang]);
  };

  const me: Person = {
    name: 'Ola Nordmann',
    personId: '10101012345',
    dateOfBirth: new Date('1984-02-13'),
    type: 'Person',
  };

  const people: Paginated<Person> = {
    total: 4,
    list: [
      {
        name: 'Antikvitet presis',
        personId: '13889999726',
        dateOfBirth: new Date('1964-02-28'),
        type: 'Person',
        isDeleted: false,
      },
      {
        name: 'Bønne elegant',
        personId: '18849574503',
        dateOfBirth: new Date('1932-10-10'),
        type: 'Person',
        isDeleted: true,
      },
      {
        name: 'Lomme filosofisk',
        personId: '08889674513',
        dateOfBirth: new Date('1944-01-26'),
        type: 'Person',
        isDeleted: true,
      },
      {
        name: 'Adelsmann varm',
        personId: '14892449911',
        dateOfBirth: new Date('1981-07-04'),
        type: 'Person',
        isDeleted: false,
      },
    ],
  };

  const businesses: Paginated<Business> = {
    total: 3,
    list: [
      {
        name: 'Costco AS',
        organizationNumber: '123456777',
        isDeleted: false,
        unitType: 'AS',
        type: 'Organization',
      },
      {
        name: 'Instagram AS',
        organizationNumber: '312843211',
        isDeleted: true,
        unitType: 'AS',
        type: 'Organization',
      },
      {
        name: 'Amazon ASA',
        organizationNumber: '112843218',
        isDeleted: false,
        type: 'Organization',
        unitType: 'ASA',
      },
    ],
  };

  enum LenkerUinnlogget {
    PERSON_SKATT = 'https://www.skatteetaten.no/person/skatt/',
    PERSON_AVGIFTER = 'https://www.skatteetaten.no/person/avgifter/',
    PERSON_FOLKEREGISTER = 'https://www.skatteetaten.no/person/folkeregister/',
    PERSON_UTENLANDSK = 'https://www.skatteetaten.no/person/utenlandsk/',
    PERSON_BETALING_OG_INNKREVING = 'https://www.skatteetaten.no/person/betaling-og-innkreving/',
    PERSON_FORSIDE = 'https://www.skatteetaten.no/person/',
    VIRKSOMHET_SKATT = 'https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/',
    VIRKSOMHET_AVGIFTER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/',
    VIRKSOMHET_RAPPORTERING_OG_BRANSJER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/',
    VIRKSOMHET_STARTE_OG_DRIVE = 'https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/',
    VIRKSOMHET_ARBEIDSGIVER = 'https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/',
    VIRKSOMHET_UTENLANDSK = 'https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/',
    VIRKSOMHET_FORSIDE = 'https://www.skatteetaten.no/bedrift-og-organisasjon/',
    RETTSKILDER = 'https://www.skatteetaten.no/rettskilder/',
    PRESSE = 'https://www.skatteetaten.no/presse/',
    SAMARBEIDSPARTNERE = 'https://www.skatteetaten.no/samarbeidspartnere/',
    KONTAKT = 'https://www.skatteetaten.no/kontakt/',
  }

  enum LenkerInnloggetIkkeMinSide {
    SKATT = '/web/mineskatteforhold/',
    FOLKEREGISTER = '/web/minfolkeregisterside/',
    INNBOKS = '/web/innboks/',
    KJORETOY = '/web/desta/',
    AKSJEOPPGAVEN = '/web/aksjeoppgaven/?referrer=min-side',
  }

  enum MinsideLenker {
    VIRKSOMHET_KALENDER = '/virksomhet/kalender',
    VIRKSOMHET_KRAVOVERSIKT = '/virksomhet/kravoversikt',
    PERSON_FORSIDE = '/person',
    PERSON_ARBEIDINNTEKT = '/person/arbeidinntekt',
    PERSON_EIENDOMMER = '/person/eiendommer',
    PERSON_KRAVOVERSIKT = '/person/kravoversikt',
    PERSON_SAKSTATUS = '/person/sakstatus',
    VIRKSOMHET_SAKSTATUS = '/virksomhet/sakstatus',
  }

  const loggedInLinks = [
    {
      href: MinsideLenker.PERSON_FORSIDE,
      text: 'Min side',
    },
    {
      href: LenkerInnloggetIkkeMinSide.SKATT,
      text: 'Skatt',
    },
    {
      href: LenkerInnloggetIkkeMinSide.FOLKEREGISTER,
      text: 'Folkeregister',
    },
    {
      href: LenkerInnloggetIkkeMinSide.INNBOKS,
      text: 'Innboks',
    },
    {
      href: MinsideLenker.PERSON_SAKSTATUS,
      text: 'Mine saker',
    },
    {
      href: MinsideLenker.PERSON_KRAVOVERSIKT,
      text: 'Krav og betaling',
    },
    {
      href: LenkerInnloggetIkkeMinSide.KJORETOY,
      text: 'Bil og andre kjøretøy',
    },
    {
      href: MinsideLenker.PERSON_ARBEIDINNTEKT,
      text: 'Arbeid og inntekt',
    },
    {
      href: LenkerInnloggetIkkeMinSide.AKSJEOPPGAVEN,
      text: 'Aksjeoppgaven',
    },
    {
      href: MinsideLenker.PERSON_EIENDOMMER,
      text: 'Eiendommer',
    },
  ];

  const personlinks = [
    {
      href: LenkerUinnlogget.PERSON_SKATT,
      text: 'Skatt',
    },
    {
      href: LenkerUinnlogget.PERSON_AVGIFTER,
      text: 'Avgifter',
    },
    {
      href: LenkerUinnlogget.PERSON_FOLKEREGISTER,
      text: 'Folkeregisteret',
    },
    {
      href: LenkerUinnlogget.PERSON_UTENLANDSK,
      text: 'Utenlandsk',
    },
    {
      href: LenkerUinnlogget.PERSON_BETALING_OG_INNKREVING,
      text: 'Betaling og innkreving',
    },
  ];

  const virksomhetlinks = [
    {
      href: LenkerUinnlogget.VIRKSOMHET_SKATT,
      text: 'Skatt',
    },
    {
      href: LenkerUinnlogget.VIRKSOMHET_AVGIFTER,
      text: 'Avgifter',
    },
    {
      href: LenkerUinnlogget.VIRKSOMHET_RAPPORTERING_OG_BRANSJER,
      text: 'Rapportering og bransjer',
    },
    {
      href: LenkerUinnlogget.VIRKSOMHET_STARTE_OG_DRIVE,
      text: 'Starte, drive og avslutte',
    },
    {
      href: LenkerUinnlogget.VIRKSOMHET_ARBEIDSGIVER,
      text: 'Arbeidsgiver',
    },
    {
      href: LenkerUinnlogget.VIRKSOMHET_UTENLANDSK,
      text: 'Utenlandsk',
    },
  ];

  const virksomhetLinks = [
    {
      href: 'web/minside/virksomhet/',
      text: 'Min side',
    },
    {
      href: MinsideLenker.VIRKSOMHET_KALENDER,
      text: 'Kalender',
    },
    {
      href: MinsideLenker.VIRKSOMHET_KRAVOVERSIKT,
      text: 'Krav og betaling',
    },
    {
      href: MinsideLenker.VIRKSOMHET_SAKSTATUS,
      text: 'Mine saker',
    },
    {
      href: LenkerInnloggetIkkeMinSide.INNBOKS,
      text: 'Innboks',
    },
  ];

  return (
    <>
      <TopBannerExternal
        ref={topBannerRef}
        classNames={{
          columns: styles.columns,
        }}
        firstColumn={
          user ? (
            <Card spacing={'s'}>
              <Card.Content>
                <Heading as={'h2'} level={3}>
                  {user.role === 'meg' && (
                    <FavoriteIcon className={styles.marginRightS} />
                  )}
                  {user.role === 'andre' && (
                    <AccountMultipleIcon className={styles.marginRightS} />
                  )}
                  {user.role === 'virksomhet' && (
                    <BriefcaseIcon className={styles.marginRightS} />
                  )}

                  {user?.role === 'meg' ? 'Mitt innhold' : user.name}
                </Heading>
                <Paragraph variant={'ingress'}>
                  {'Se, endre og send inn'}
                </Paragraph>
                <ul className={styles.linkWrapper}>
                  {(user.role === 'virksomhet'
                    ? virksomhetLinks
                    : loggedInLinks
                  ).map((link, index) => (
                    <li key={index} className={styles.marginBottomS}>
                      <Link
                        href={link.href}
                        onClick={(e): void => {
                          e.preventDefault();
                          topBannerRef.current?.closeMenu?.();
                        }}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ) : (
            <>
              <Heading as={'h2'} level={3} className={styles.flex}>
                <PersonIcon
                  className={styles.marginRightS}
                  size={'largePlus'}
                />
                {'Min side'}
              </Heading>
              <Paragraph className={styles.marginBottomS}>
                {'Se dine oppgaver og oversikt. Les og svar på meldinger.'}
              </Paragraph>
              <Button
                svgPath={LockOutlineSVGpath}
                onClick={() => modalRef.current?.showModal()}
              >
                {'Logg inn'}
              </Button>
            </>
          )
        }
        secondColumn={
          <>
            <Heading as={'h2'} hasSpacing>
              {'Alle temaer'}
            </Heading>
            <div className={styles.secondColumn}>
              <div>
                <Heading as={'h3'} hasSpacing>
                  <a href={LenkerUinnlogget.PERSON_FORSIDE}>{'For personer'}</a>
                </Heading>
                <LinkGroup className={styles.marginBottomXL}>
                  {personlinks.map((link) => (
                    <LinkGroup.Link
                      key={link.text}
                      href={link.href}
                      onClick={(e): void => {
                        e.preventDefault();
                        topBannerRef.current?.closeMenu?.();
                      }}
                    >
                      {link.text}
                    </LinkGroup.Link>
                  ))}
                </LinkGroup>
                <Heading as={'h3'} hasSpacing>
                  <a href={LenkerUinnlogget.VIRKSOMHET_FORSIDE}>
                    {'For bedrifter og organisasjoner'}
                  </a>
                </Heading>
                <LinkGroup className={styles.marginBottomXL}>
                  {virksomhetlinks.map((link) => (
                    <LinkGroup.Link
                      key={link.text}
                      href={link.href}
                      onClick={(e): void => {
                        e.preventDefault();
                        topBannerRef.current?.closeMenu?.();
                      }}
                    >
                      {link.text}
                    </LinkGroup.Link>
                  ))}
                </LinkGroup>
              </div>
              <div>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={LenkerUinnlogget.RETTSKILDER}>{'Rettskilder'}</a>
                </Heading>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={LenkerUinnlogget.PRESSE}>{'Presse'}</a>
                </Heading>
                <Heading as={'h3'} level={4} className={styles.marginBottomXL}>
                  <a href={LenkerUinnlogget.SAMARBEIDSPARTNERE}>
                    {'Samarbeidspartner'}
                  </a>
                </Heading>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={LenkerUinnlogget.KONTAKT}>{'Kontakt oss'}</a>
                </Heading>
              </div>
            </div>
          </>
        }
        searchContent={
          <>
            <Paragraph className={styles.marginBottomS}>
              {'Dette har andre søkt på:'}
            </Paragraph>
            <LinkGroup>
              <LinkGroup.Link href={'#'}>
                {'Se skatteoppgjøret ditt'}
              </LinkGroup.Link>
              <LinkGroup.Link href={'#'}>
                {
                  'Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift'
                }
              </LinkGroup.Link>
              <LinkGroup.Link href={'#'}>
                {'Se dine skattekrav og betalinger'}
              </LinkGroup.Link>
            </LinkGroup>
          </>
        }
        user={user}
        onLogOutClick={isDesktop ? (): void => setUser(undefined) : undefined}
        onLanguageClick={handleLanguageClick}
        onLogInClick={
          !user ? (): void => modalRef.current?.showModal() : undefined
        }
        onSearch={(e, value) => {
          alert(\`søker etter \${value}\`);
        }}
        onSearchClick={(e, value) => {
          alert(\`søker etter \${value}\`);
        }}
      >
        {user && (
          <TopBannerExternal.UserMenu
            user={user}
            notificationCount={1}
            onLogOutClick={() => setUser(undefined)}
            onSwitchUserClick={() => modalRef.current?.showModal()}
          />
        )}
      </TopBannerExternal>
      <RolePicker
        ref={modalRef}
        me={me}
        people={people}
        businesses={businesses}
        onEntitySelect={async (entity) => {
          let role: User['role'];
          if (entity.name === me.name) {
            role = 'meg';
          } else if (entity.type === 'Organization') {
            role = 'virksomhet';
          } else {
            role = 'andre';
          }
          setUser({
            role: role,
            name: entity.name,
            orgnr: '999 999 999',
          });
          modalRef.current?.close();
        }}
      />
    </>
  );
}
`,px=`@use '@skatteetaten/ds-core-designtokens/designtokens/breakpoints' as *;

.linkWrapper {
  padding: 0 var(--spacing-s-plus);
  list-style-type: none;
}

.marginBottomXL {
  margin-bottom: var(--spacing-xl);
}

.marginBottomS {
  margin-bottom: var(--spacing-s);
}

.marginRightS {
  margin-right: var(--spacing-s);
}

.flex {
  display: flex;
}

@media (min-width: $breakpoint-m) {
  .columns {
    grid-template-columns: 1fr 2fr;
  }

  .secondColumn {
    display: flex;
    gap: var(--spacing-xxl);
  }
}
`,gx=`["standard", "med-knapper-og-meny", "med-søkefelt"]
`,fx=`import { type ReactElement, useRef } from 'react';

import { InlineButton, LinkGroup } from '@skatteetaten/ds-buttons';
import {
  AddSVGpath,
  EditSVGpath,
  FileSVGpath,
  HelpFilledSVGpath,
} from '@skatteetaten/ds-icons';
import {
  type ActionMenuActionsRef,
  TopBannerInternal,
} from '@skatteetaten/ds-layout';

export default function TopBannerInternalWithButtonsAndMenuExample(): ReactElement {
  const menuRef = useRef<ActionMenuActionsRef>(null);

  return (
    <TopBannerInternal
      title={'MVA'}
      description={'Arbeidsliste'}
      logoHref={'/home'}
      user={'Etternavnesen Fornavn'}
    >
      <InlineButton svgPath={HelpFilledSVGpath} brightness={'light'}>
        {'Hjelp'}
      </InlineButton>
      <InlineButton svgPath={FileSVGpath} brightness={'light'}>
        {'Dokumentasjon'}
      </InlineButton>
      <InlineButton svgPath={EditSVGpath} brightness={'light'}>
        {'Opprett RF-Ørtiatten'}
      </InlineButton>
      <TopBannerInternal.ActionMenu menuActionsRef={menuRef}>
        <InlineButton
          className={'bottomSpacingXS'}
          svgPath={AddSVGpath}
          onClick={() => {
            menuRef?.current?.close?.();
          }}
        >
          {'Legg til RF-skjema ørtifemten'}
        </InlineButton>
        <LinkGroup>
          <LinkGroup.Link
            href={'#'}
            isExternal
            onClick={() => menuRef?.current?.close?.()}
          >
            {'Denne tingen her'}
          </LinkGroup.Link>
          <LinkGroup.Link
            href={'#'}
            isExternal
            onClick={() => menuRef?.current?.close?.()}
          >
            {'En annen ting'}
          </LinkGroup.Link>
          <LinkGroup.Link
            href={'#'}
            isExternal
            onClick={() => menuRef?.current?.close?.()}
          >
            {'Den tredje tingen'}
          </LinkGroup.Link>
        </LinkGroup>
      </TopBannerInternal.ActionMenu>
    </TopBannerInternal>
  );
}
`,hx=`import { type ReactElement, useRef } from 'react';

import { InlineButton, LinkGroup } from '@skatteetaten/ds-buttons';
import { SearchField } from '@skatteetaten/ds-forms';
import { AddSVGpath } from '@skatteetaten/ds-icons';
import {
  type ActionMenuActionsRef,
  TopBannerInternal,
} from '@skatteetaten/ds-layout';

export default function TopBannerInternalWithSearchExample(): ReactElement {
  const menuRef = useRef<ActionMenuActionsRef>(null);

  return (
    <TopBannerInternal title={'Global Skatt'} logoHref={'/home'}>
      <SearchField
        label={'Søk etter sak, virksomhet, dokument'}
        placeholder={'Søk etter sak, virksomhet, dokument...'}
      />
      <TopBannerInternal.ActionMenu menuActionsRef={menuRef}>
        <InlineButton
          className={'bottomSpacingXS'}
          svgPath={AddSVGpath}
          onClick={() => {
            menuRef?.current?.close?.();
          }}
        >
          {'Legg til RF-skjema ortifemten'}
        </InlineButton>
        <LinkGroup>
          <LinkGroup.Link
            href={'#'}
            isExternal
            onClick={() => menuRef?.current?.close?.()}
          >
            {'Denne tingen her'}
          </LinkGroup.Link>
          <LinkGroup.Link
            href={'#'}
            isExternal
            onClick={() => menuRef?.current?.close?.()}
          >
            {'En annen ting'}
          </LinkGroup.Link>
          <LinkGroup.Link
            href={'#'}
            isExternal
            onClick={() => menuRef?.current?.close?.()}
          >
            {'Den tredje tingen'}
          </LinkGroup.Link>
        </LinkGroup>
      </TopBannerInternal.ActionMenu>
    </TopBannerInternal>
  );
}
`,vx=`import { type ReactElement } from 'react';

import { TopBannerInternal } from '@skatteetaten/ds-layout';

export default function TopBannerInternalStandardExample(): ReactElement {
  return (
    <TopBannerInternal
      title={'MVA'}
      description={'Arbeidsliste'}
      logoHref={'/home'}
      user={'Etternavnesen Fornavn'}
    />
  );
}
`,bx=`import { type ReactElement } from 'react';

import { WordInfo } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

export default function WordInfoStandardExample(): ReactElement {
  return (
    <Paragraph>
      {'Designsystemet støtter fra skjermbredder fra 320  '}
      <WordInfo>
        <WordInfo.Trigger>{'piksler'}</WordInfo.Trigger>
        <WordInfo.Content>
          {
            'En piksel er det minste enkelt-elementet (eller punktet) i et digitalt bilde på en skjerm. Tusenvis av disse små, fargede punktene settes sammen for å danne et komplett bilde.'
          }
        </WordInfo.Content>
      </WordInfo>
      {' og oppover.'}
    </Paragraph>
  );
}
`,_x=`import { type JSX, useState } from 'react';

import { DatePicker } from '@skatteetaten/ds-forms';

export default function BesoksdatoExample(): JSX.Element {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date();

  return (
    <DatePicker
      label={'Besøksdato (dd.mm.åååå)'}
      value={selectedDate}
      maxDate={today}
      onSelectDate={setSelectedDate}
    />
  );
}
`,xx=`.contentContainer {
  display: flex;
  gap: var(--spacing-l);
}

.timeInput {
  width: 10rem;
}
`,kx=`import { type JSX, useState } from 'react';

import { Combobox, DatePicker, Fieldset } from '@skatteetaten/ds-forms';

import styles from './DatoOgTid.module.scss';

const timeOptions = [
  { value: '08:00', label: '08:00' },
  { value: '08:30', label: '08:30' },
  { value: '09:00', label: '09:00' },
  { value: '09:30', label: '09:30' },
  { value: '10:00', label: '10:00' },
  { value: '10:30', label: '10:30' },
  { value: '11:00', label: '11:00' },
  { value: '11:30', label: '11:30' },
  { value: '12:00', label: '12:00' },
  { value: '12:30', label: '12:30' },
  { value: '13:00', label: '13:00' },
  { value: '13:30', label: '13:30' },
  { value: '14:00', label: '14:00' },
  { value: '14:30', label: '14:30' },
  { value: '15:00', label: '15:00' },
  { value: '15:30', label: '15:30' },
  { value: '16:00', label: '16:00' },
];

export default function DatoOgTidExample(): JSX.Element {
  const [dato, setDato] = useState<Date | null>(null);
  const [tid, setTid] = useState<string>('');

  return (
    <Fieldset
      legend={'Dato og tid'}
      classNames={{
        contentContainer: styles.contentContainer,
      }}
      hideLegend
    >
      <DatePicker
        label={'Dato (dd.mm.åååå)'}
        value={dato}
        onSelectDate={(date: Date | null): void => setDato(date)}
      />
      <Combobox
        label={'Tid (tt:mm)'}
        value={tid}
        options={timeOptions}
        className={styles.timeInput}
        onSelectionChange={(option) => setTid(option?.value ?? '')}
      />
    </Fieldset>
  );
}
`,Sx=`.contentContainer {
  display: flex;
  gap: var(--spacing-m);
}

.fieldSmall {
  width: 2.5rem;
}

.fieldMedium {
  width: 4rem;
}
`,yx=`import { type JSX, useState } from 'react';

import { Fieldset, TextField } from '@skatteetaten/ds-forms';

import styles from './FodselsdatoSeparateFelter.module.scss';

export default function FodselsdatoSeparateFelterExample(): JSX.Element {
  const [dag, setDag] = useState('');
  const [maned, setManed] = useState('');
  const [ar, setAr] = useState('');

  const handleDagChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/\\D/g, '');
    if (value.length <= 2) {
      setDag(value);
    }
  };

  const handleManedChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/\\D/g, '');
    if (value.length <= 2) {
      setManed(value);
    }
  };

  const handleArChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value.replace(/\\D/g, '');
    if (value.length <= 4) {
      setAr(value);
    }
  };

  return (
    <Fieldset
      legend={'Fødselsdato'}
      description={'For eksempel 17 5 1990'}
      classNames={{
        contentContainer: styles.contentContainer,
      }}
    >
      <TextField
        label={'Dag'}
        value={dag}
        maxLength={2}
        classNames={{
          textbox: styles.fieldSmall,
        }}
        onChange={handleDagChange}
      />
      <TextField
        label={'Måned'}
        value={maned}
        maxLength={2}
        classNames={{
          textbox: styles.fieldSmall,
        }}
        onChange={handleManedChange}
      />
      <TextField
        label={'År'}
        value={ar}
        maxLength={4}
        classNames={{
          textbox: styles.fieldMedium,
        }}
        onChange={handleArChange}
      />
    </Fieldset>
  );
}
`,jx=`.dateInput {
  width: 6.5rem;
}
`,Tx=`import { type JSX, useState } from 'react';

import { TextField } from '@skatteetaten/ds-forms';

import styles from './FodselsdatoTextfield.module.scss';

export default function FodselsdatoTextfieldExample(): JSX.Element {
  const [dateValue, setDateValue] = useState('');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value.replace(/\\D/g, '');

    if (value.length > 2) {
      value = \`\${value.slice(0, 2)}.\${value.slice(2)}\`;
    }
    if (value.length > 5) {
      value = \`\${value.slice(0, 5)}.\${value.slice(5, 9)}\`;
    }

    setDateValue(value);
  };

  return (
    <TextField
      label={'Fødselsdato (dd.mm.åååå)'}
      value={dateValue}
      maxLength={10}
      classNames={{
        textbox: styles.dateInput,
      }}
      onChange={handleDateChange}
    />
  );
}
`,Ex=`.contentContainer {
  display: flex;
  gap: var(--spacing-l);
}

.alertContainer {
  margin-top: var(--spacing-m);
}
`,Cx=`import { type JSX, useState } from 'react';

import { DatePicker, Fieldset } from '@skatteetaten/ds-forms';

import styles from './FraTilDato.module.scss';

export default function FraTilDatoExample(): JSX.Element {
  const [fraDato, setFraDato] = useState<Date | null>(null);
  const [tilDato, setTilDato] = useState<Date | null>(null);

  const isInvalid = fraDato && tilDato && fraDato.getTime() > tilDato.getTime();

  return (
    <Fieldset
      legend={'Periode'}
      classNames={{
        contentContainer: styles.contentContainer,
      }}
      hideLegend
    >
      <DatePicker
        label={'Fra dato (dd.mm.åååå)'}
        value={fraDato}
        onSelectDate={setFraDato}
      />
      <DatePicker
        label={'Til dato (dd.mm.åååå)'}
        value={tilDato}
        errorMessage={
          isInvalid ? 'Til-datoen kan ikke være før fra-datoen' : undefined
        }
        onSelectDate={setTilDato}
      />
    </Fieldset>
  );
}
`,Px=`.fieldContainer {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-l);
}

.fieldSmall {
  flex-basis: 120px;
}

.fieldSelectSmall {
  flex-basis: 80px;
}

.timeInput {
  width: 4rem;
}
`,Rx=`import { type JSX, useState } from 'react';

import {
  Combobox,
  Fieldset,
  Select,
  TextField,
  type ComboboxOption,
} from '@skatteetaten/ds-forms';

import styles from './KlokkeOgTidssone.module.scss';

export default function KlokkeOgTidssoneExample(): JSX.Element {
  const [tid, setTid] = useState('');
  const [ampm, setAmpm] = useState('AM');
  const [tidssone, setTidssone] = useState('');

  const handleTidChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value.replace(/\\D/g, '');

    if (value.length > 2) {
      value = \`\${value.slice(0, 2)}:\${value.slice(2, 4)}\`;
    }

    setTid(value);
  };

  const tidssonerOptions: ComboboxOption[] = [
    { label: 'Europe/Oslo, Norway (GMT+1)', value: 'Europe/Oslo' },
    { label: 'Europe/London, United Kingdom (GMT+0)', value: 'Europe/London' },
    { label: 'Europe/Paris, France (GMT+1)', value: 'Europe/Paris' },
    { label: 'Europe/Berlin, Germany (GMT+1)', value: 'Europe/Berlin' },
    { label: 'America/New_York, USA (GMT-5)', value: 'America/New_York' },
    { label: 'America/Los_Angeles, USA (GMT-8)', value: 'America/Los_Angeles' },
    { label: 'Asia/Tokyo, Japan (GMT+9)', value: 'Asia/Tokyo' },
    { label: 'Asia/Shanghai, China (GMT+8)', value: 'Asia/Shanghai' },
    {
      label: 'Australia/Sydney, Australia (GMT+10)',
      value: 'Australia/Sydney',
    },
    {
      label: 'Pacific/Auckland, New Zealand (GMT+12)',
      value: 'Pacific/Auckland',
    },
  ];

  return (
    <Fieldset
      legend={'Klokkeslett og tidssone'}
      classNames={{
        contentContainer: styles.fieldContainer,
      }}
    >
      <TextField
        label={'Tid (hh:mm)'}
        value={tid}
        maxLength={5}
        classNames={{
          textbox: styles.timeInput,
        }}
        onChange={handleTidChange}
      />

      <Select
        label={'AM/PM'}
        value={ampm}
        classNames={{
          container: styles.fieldSelectSmall,
        }}
        onChange={(e): void => setAmpm(e.target.value)}
      >
        <Select.Option value={'AM'}>{'AM'}</Select.Option>
        <Select.Option value={'PM'}>{'PM'}</Select.Option>
      </Select>

      <Combobox
        label={'Tidssone'}
        options={tidssonerOptions}
        value={tidssone}
        onSelectionChange={(option): void => setTidssone(option?.value || '')}
      />
    </Fieldset>
  );
}
`,wx=`import { type JSX } from 'react';

import { CheckboxGroup } from '@skatteetaten/ds-forms';

export default function CheckboxGroupLongListExample(): JSX.Element {
  const options = [
    'Aksjonærregisteret',
    'Avgifter',
    'Borettslag og sameier',
    'Eiendommer',
    'Folkeregister',
    'Innkreving',
    'Saker og min kommunikasjon',
    'Skatt og inntekt',
    'Valutaregisteret',
  ];

  return (
    <CheckboxGroup legend={'Jeg ønsker innsyn i'}>
      {options.map((option) => (
        <CheckboxGroup.Checkbox key={option}>{option}</CheckboxGroup.Checkbox>
      ))}
    </CheckboxGroup>
  );
}
`,Dx=`import { type JSX } from 'react';

import { CheckboxGroup } from '@skatteetaten/ds-forms';

export default function CheckboxGroupExample(): JSX.Element {
  const options = [
    {
      label: 'Har barn over 16 år',
    },
    {
      label:
        'Får ekstra reisevei til jobb på grunn av levering til barnehage eller skolefritidsordning',
    },
    {
      label:
        'Har barn som er 12 år eller eldre og som har særskilt omsorgsbehov',
    },
    {
      label: 'Er enslig forsørger',
    },
  ];

  return (
    <CheckboxGroup legend={'Velg det som gjelder deg'}>
      {options.map((option, index) => {
        return (
          <CheckboxGroup.Checkbox key={index}>
            {option.label}
          </CheckboxGroup.Checkbox>
        );
      })}
    </CheckboxGroup>
  );
}
`,Nx=`import { type JSX, useState } from 'react';

import { Chips } from '@skatteetaten/ds-collections';
import { Heading } from '@skatteetaten/ds-typography';

export default function ChipsSelectionExample(): JSX.Element {
  const months = [
    'Januar',
    'Februar',
    'Mars',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const [selectedMonths, setSelectedMonths] = useState<string[]>([]);

  const toggleMonth = (month: string): void => {
    setSelectedMonths((previous) =>
      previous.includes(month)
        ? previous.filter((selected) => selected !== month)
        : [...previous, month]
    );
  };

  return (
    <>
      <Heading level={5} as={'h2'} id={'month-heading'} hasSpacing>
        {'Velg måneder'}
      </Heading>
      <Chips ariaLabelledBy={'month-heading'}>
        {months.map((month) => (
          <Chips.Toggle
            key={month}
            isSelected={selectedMonths.includes(month)}
            showCheckmark={false}
            onClick={(): void => toggleMonth(month)}
          >
            {month}
          </Chips.Toggle>
        ))}
      </Chips>
    </>
  );
}
`,Lx=`import { type JSX } from 'react';

import { Combobox, type ComboboxOption } from '@skatteetaten/ds-forms';

export default function ComboboxMultipleExample(): JSX.Element {
  const options: ComboboxOption[] = [
    { label: 'Agdenes', value: 'agdenes' },
    { label: 'Balestrand', value: 'balestrand' },
    { label: 'Finnøy', value: 'finnoy' },
    { label: 'Forsand', value: 'forsand' },
    { label: 'Grimstad', value: 'grimstad' },
    { label: 'Kristiansand', value: 'kristiansand' },
    { label: 'Kvalsund', value: 'kvalsund' },
    { label: 'Mandal', value: 'mandal' },
    { label: 'Meløy', value: 'meloy' },
    { label: 'Midsund', value: 'midsund' },
    { label: 'Nordre Flesberg Kommune', value: 'nordre_flesberg_kommune' },
    { label: 'Orkdal', value: 'orkdal' },
    { label: 'Rana', value: 'rana' },
    { label: 'Roller', value: 'roller' },
    { label: 'Sauda', value: 'sauda' },
    { label: 'Tromsø', value: 'tromso' },
    { label: 'Trondheim', value: 'trondheim' },
    { label: 'Vennesla', value: 'vennesla' },
    { label: 'Åmli', value: 'amli' },
  ];

  return <Combobox label={'Velg kommuner'} options={options} multiple />;
}
`,Ox=`import { type JSX } from 'react';

import { Combobox, type ComboboxOption } from '@skatteetaten/ds-forms';

export default function ComboboxExample(): JSX.Element {
  const options: ComboboxOption[] = [
    { label: 'Agdenes', value: 'agdenes' },
    { label: 'Balestrand', value: 'balestrand' },
    { label: 'Finnøy', value: 'finnoy' },
    { label: 'Forsand', value: 'forsand' },
    { label: 'Grimstad', value: 'grimstad' },
    { label: 'Kristiansand', value: 'kristiansand' },
    { label: 'Kvalsund', value: 'kvalsund' },
    { label: 'Mandal', value: 'mandal' },
    { label: 'Meløy', value: 'meloy' },
    { label: 'Midsund', value: 'midsund' },
    { label: 'Nordre Flesberg Kommune', value: 'nordre_flesberg_kommune' },
    { label: 'Orkdal', value: 'orkdal' },
    { label: 'Rana', value: 'rana' },
    { label: 'Roller', value: 'roller' },
    { label: 'Sauda', value: 'sauda' },
    { label: 'Tromsø', value: 'tromso' },
    { label: 'Trondheim', value: 'trondheim' },
    { label: 'Vennesla', value: 'vennesla' },
    { label: 'Åmli', value: 'amli' },
  ];

  return <Combobox label={'Velg kommune'} options={options} />;
}
`,Ix=`.regionsContainer {
  display: flex;
  flex-direction: column;
  margin-bottom: var(--spacing-m);
  gap: var(--spacing-s);
}

.regionCard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: var(--spacing-xs);
}

.modalActions {
  display: flex;
  margin-top: var(--spacing-l);
  gap: var(--spacing-m);
}
`,Bx=`import { type JSX, useRef, useState } from 'react';

import { Button, IconButton, InlineButton } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import { CheckboxGroup } from '@skatteetaten/ds-forms';
import { AddOutlineSVGpath, CancelSVGpath } from '@skatteetaten/ds-icons';
import { Modal } from '@skatteetaten/ds-overlays';

import styles from './ModalSelection.module.scss';

export default function ModalSelectionExample(): JSX.Element {
  const modalRef = useRef<HTMLDialogElement>(null);
  const allRegions = [
    'Nord-Norge',
    'Midt-Norge',
    'Østlandet',
    'Vestlandet',
    'Sørlandet',
  ];
  const [selectedRegions, setSelectedRegions] = useState<string[]>([
    'Østlandet',
    'Nord-Norge',
  ]);

  const handleAddRegion = (): void => {
    modalRef.current?.showModal();
  };

  const handleCloseModal = (): void => {
    modalRef.current?.close();
  };

  const handleRegionChange = (region: string, isChecked: boolean): void => {
    setSelectedRegions(
      isChecked
        ? [...selectedRegions, region]
        : selectedRegions.filter((r) => r !== region)
    );
  };

  const handleRemoveRegion = (region: string): void => {
    setSelectedRegions(selectedRegions.filter((r) => r !== region));
  };

  return (
    <>
      <div className={styles.regionsContainer}>
        {selectedRegions.map((region) => (
          <Card key={region} color={'denim'}>
            <div className={styles.regionCard}>
              <div>{region}</div>
              <IconButton
                svgPath={CancelSVGpath}
                title={\`Fjern \${region}\`}
                onClick={(): void => handleRemoveRegion(region)}
              />
            </div>
          </Card>
        ))}
      </div>

      <InlineButton svgPath={AddOutlineSVGpath} onClick={handleAddRegion}>
        {'Legg til region'}
      </InlineButton>

      <Modal ref={modalRef} title={'Velg region'} onClose={handleCloseModal}>
        <CheckboxGroup legend={'Region'}>
          {allRegions.map((region) => (
            <CheckboxGroup.Checkbox
              key={region}
              checked={selectedRegions.includes(region)}
              onChange={(e): void =>
                handleRegionChange(region, e.target.checked)
              }
            >
              {region}
            </CheckboxGroup.Checkbox>
          ))}
        </CheckboxGroup>

        <div className={styles.modalActions}>
          <Button onClick={(): void => handleCloseModal()}>{'Bekreft'}</Button>
          <Button
            variant={'secondary'}
            onClick={(): void => handleCloseModal()}
          >
            {'Avbryt'}
          </Button>
        </div>
      </Modal>
    </>
  );
}
`,Ax=`.phoneNumberInput {
  width: 10rem;
}
`,Mx=`import { type JSX, useState } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { RadioGroup, TextField } from '@skatteetaten/ds-forms';

import styles from './MedRadioknapper.module.scss';

export default function MutuallyExclusiveGroupsExample(): JSX.Element {
  const [contactMethod, setContactMethod] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [timeSlot, setTimeSlot] = useState<string>('');
  const phoneNumberFormatter = useFormattedInput({ type: 'phoneNumber' });

  return (
    <>
      <RadioGroup
        legend={'Jeg ønsker å bli kontaktet på'}
        value={contactMethod}
        hasSpacing
        onChange={(e): void => setContactMethod(e.target.value)}
      >
        <RadioGroup.Radio value={'email'}>{'E-post'}</RadioGroup.Radio>
        <RadioGroup.Radio value={'phone'}>{'Telefon'}</RadioGroup.Radio>
        <RadioGroup.Radio value={'sms'}>{'SMS'}</RadioGroup.Radio>
      </RadioGroup>
      {contactMethod === 'email' && (
        <TextField
          label={'E-postadresse'}
          value={email}
          inputMode={'email'}
          hideLabel={false}
          hasSpacing
          onChange={(event): void => setEmail(event.target.value)}
        />
      )}
      {contactMethod === 'phone' && (
        <RadioGroup
          legend={'Ønsket tidspunkt for oppringing'}
          value={timeSlot}
          hasSpacing
          onChange={(e): void => setTimeSlot(e.target.value)}
        >
          <RadioGroup.Radio value={'morning'}>
            {'Formiddag (9–12)'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={'afternoon'}>
            {'Ettermiddag (12–16)'}
          </RadioGroup.Radio>
          <RadioGroup.Radio value={'evening'}>
            {'Kveld (16–20)'}
          </RadioGroup.Radio>
        </RadioGroup>
      )}
      {contactMethod === 'sms' && (
        <TextField
          label={'Telefonnummer'}
          value={phoneNumberFormatter.value}
          inputMode={'numeric'}
          classNames={{ textbox: styles.phoneNumberInput }}
          hideLabel={false}
          hasSpacing
          onChange={phoneNumberFormatter.onChange}
          onKeyDown={phoneNumberFormatter.onKeyDown}
        />
      )}
    </>
  );
}
`,Hx=`import { type JSX, useState } from 'react';

import { RadioGroup } from '@skatteetaten/ds-forms';

export default function RadioGroupExample(): JSX.Element {
  const [favoriteColor, setFavoriteColor] = useState<string>('red');

  return (
    <RadioGroup
      legend={'Favorittfarge'}
      value={favoriteColor}
      required
      onChange={(e): void => setFavoriteColor(e.target.value)}
    >
      <RadioGroup.Radio value={'red'}>{'Rød'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'yellow'}>{'Gul'}</RadioGroup.Radio>
      <RadioGroup.Radio value={'blue'}>{'Blå'}</RadioGroup.Radio>
    </RadioGroup>
  );
}
`,Vx=`import { type JSX, useState } from 'react';

import { Select } from '@skatteetaten/ds-forms';

export default function SelectMonthExample(): JSX.Element {
  const months = [
    'Januar',
    'Februar',
    'Mars',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  const [selectedMonth, setSelectedMonth] = useState<string>('Januar');

  return (
    <Select
      label={'Velg måned'}
      value={selectedMonth}
      onChange={(e): void => setSelectedMonth(e.target.value)}
    >
      {months.map((month) => (
        <Select.Option key={month} value={month}>
          {month}
        </Select.Option>
      ))}
    </Select>
  );
}
`,Fx=`import {
  type Business,
  type Paginated,
  type Person,
} from '@skatteetaten/ds-overlays';

export const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  dateOfBirth: new Date('1990-01-01'),
  type: 'Person',
};

export const businesses: Paginated<Business> = {
  total: 2,
  list: [
    {
      name: 'Nordmann Konsulenttjenester',
      organizationNumber: '912345678',
      isDeleted: false,
      unitType: 'ENK',
      type: 'Organization',
    },
    {
      name: 'Nordmann Drift AS',
      organizationNumber: '923456789',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
    },
  ],
};
`,zx=`import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  type OnEntitySelectHandler,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { businesses, me } from './data';

export default function RolePickerWithoutSearchExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);

  const handleEntitySelect: OnEntitySelectHandler = async () => {
    rolePickerRef.current?.close();
  };

  return (
    <>
      <Paragraph>
        {'Brukeren har få representasjoner, og kan velge direkte uten søk:'}
      </Paragraph>
      <Button onClick={() => rolePickerRef.current?.showModal()}>
        {'Vis representasjon'}
      </Button>
      <RolePicker
        ref={rolePickerRef}
        me={me}
        businesses={businesses}
        people={undefined}
        showSubunits={false}
        onEntitySelect={handleEntitySelect}
      ></RolePicker>
    </>
  );
}
`,Gx=`@use '@skatteetaten/ds-core-designtokens/designtokens/breakpoints' as *;

.linkWrapper {
  padding: 0 var(--spacing-s-plus);
  list-style-type: none;
}

.marginBottomXL {
  margin-bottom: var(--spacing-xl);
}

.marginBottomS {
  margin-bottom: var(--spacing-s);
}

.marginRightS {
  margin-right: var(--spacing-s);
}

.flex {
  display: flex;
}

@media (min-width: $breakpoint-m) {
  .columns {
    grid-template-columns: 1fr 2fr;
  }

  .secondColumn {
    display: flex;
    gap: var(--spacing-xxl);
  }
}
`,Kx=`import {
  type Business,
  type Paginated,
  type Person,
} from '@skatteetaten/ds-overlays';

export const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  dateOfBirth: new Date('1984-02-13'),
  type: 'Person',
};

export const people: Paginated<Person> = {
  total: 4,
  list: [
    {
      name: 'Antikvitet presis',
      personId: '13889999726',
      dateOfBirth: new Date('1964-02-28'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '18849574503',
      dateOfBirth: new Date('1932-10-10'),
      type: 'Person',
      isDeleted: true,
    },
    {
      name: 'Lomme filosofisk',
      personId: '08889674513',
      dateOfBirth: new Date('1944-01-26'),
      type: 'Person',
      isDeleted: true,
    },
    {
      name: 'Adelsmann varm',
      personId: '14892449911',
      dateOfBirth: new Date('1981-07-04'),
      type: 'Person',
      isDeleted: false,
    },
  ],
};

export const businesses: Paginated<Business> = {
  total: 3,
  list: [
    {
      name: 'Costco AS',
      organizationNumber: '123456777',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
    },
    {
      name: 'Instagram AS',
      organizationNumber: '312843211',
      isDeleted: true,
      unitType: 'AS',
      type: 'Organization',
    },
    {
      name: 'Amazon ASA',
      organizationNumber: '112843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'ASA',
    },
  ],
};

export const loggedInLinks = [
  {
    href: '/person',
    text: 'Min side',
  },
  {
    href: '/web/mineskatteforhold/',
    text: 'Skatt',
  },
  {
    href: '/web/minfolkeregisterside/',
    text: 'Folkeregister',
  },
  {
    href: '/web/innboks/',
    text: 'Innboks',
  },
  {
    href: '/person/sakstatus',
    text: 'Mine saker',
  },
  {
    href: '/person/kravoversikt',
    text: 'Krav og betaling',
  },
  {
    href: '/web/desta/',
    text: 'Bil og andre kjøretøy',
  },
  {
    href: '/person/arbeidinntekt',
    text: 'Arbeid og inntekt',
  },
  {
    href: '/web/aksjeoppgaven/?referrer=min-side',
    text: 'Aksjeoppgaven',
  },
  {
    href: '/person/eiendommer',
    text: 'Eiendommer',
  },
];

export const personLinks = [
  {
    href: 'https://www.skatteetaten.no/person/skatt/',
    text: 'Skatt',
  },
  {
    href: 'https://www.skatteetaten.no/person/avgifter/',
    text: 'Avgifter',
  },
  {
    href: 'https://www.skatteetaten.no/person/folkeregister/',
    text: 'Folkeregisteret',
  },
  {
    href: 'https://www.skatteetaten.no/person/utenlandsk/',
    text: 'Utenlandsk',
  },
  {
    href: 'https://www.skatteetaten.no/person/betaling-og-innkreving/',
    text: 'Betaling og innkreving',
  },
];

export const virksomhetLinks = [
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/skatt/',
    text: 'Skatt',
  },
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/avgifter/',
    text: 'Avgifter',
  },
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/rapportering-og-bransjer/',
    text: 'Rapportering og bransjer',
  },
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/starte-og-drive/',
    text: 'Starte, drive og avslutte',
  },
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/arbeidsgiver/',
    text: 'Arbeidsgiver',
  },
  {
    href: 'https://www.skatteetaten.no/bedrift-og-organisasjon/utenlandsk/',
    text: 'Utenlandsk',
  },
];

export const virksomhetMinsideLinks = [
  {
    href: 'web/minside/virksomhet/',
    text: 'Min side',
  },
  {
    href: '/virksomhet/kalender',
    text: 'Kalender',
  },
  {
    href: '/virksomhet/kravoversikt',
    text: 'Krav og betaling',
  },
  {
    href: '/virksomhet/sakstatus',
    text: 'Mine saker',
  },
  {
    href: '/web/innboks/',
    text: 'Innboks',
  },
];

export const searchSuggestions = [
  'Se skatteoppgjøret ditt',
  'Søk om utsatt leveringsfrist for skattemeldingen – person eller bedrift',
  'Se dine skattekrav og betalinger',
];

export const pageLinks = {
  person: 'https://www.skatteetaten.no/person/',
  virksomhet: 'https://www.skatteetaten.no/bedrift-og-organisasjon/',
  rettskilder: 'https://www.skatteetaten.no/rettskilder/',
  presse: 'https://www.skatteetaten.no/presse/',
  samarbeidspartnere: 'https://www.skatteetaten.no/samarbeidspartnere/',
  kontakt: 'https://www.skatteetaten.no/kontakt/',
} as const;
`,$x=`import { type MouseEvent, type ReactElement, useRef, useState } from 'react';

import { Button, Link, LinkGroup } from '@skatteetaten/ds-buttons';
import { Card } from '@skatteetaten/ds-content';
import {
  dsI18n,
  formatOrganisationNumber,
  langToLocale,
  useMediaQuery,
} from '@skatteetaten/ds-core-utils';
import {
  AccountMultipleIcon,
  BriefcaseIcon,
  FavoriteIcon,
  LockOutlineSVGpath,
  PersonIcon,
} from '@skatteetaten/ds-icons';
import {
  RoleBanner,
  TopBannerExternal,
  type TopBannerExternalHandle,
  type User,
} from '@skatteetaten/ds-layout';
import { RolePicker } from '@skatteetaten/ds-overlays';
import { Heading, Paragraph } from '@skatteetaten/ds-typography';

import {
  businesses,
  loggedInLinks,
  me,
  pageLinks,
  people,
  personLinks,
  searchSuggestions,
  virksomhetLinks,
} from './data';

import topBannerExternalExampleStyles from './TopBannerExternalExample.module.scss';

export default function TopBannerExternalWithUserMenuExample(): ReactElement {
  const modalRef = useRef<HTMLDialogElement>(null);
  const topBannerRef = useRef<TopBannerExternalHandle>(null);
  const [user, setUser] = useState<User>();

  const formatDateOfBirth = (dateOfBirth?: Date): string =>
    dateOfBirth
      ? dateOfBirth.toLocaleDateString('nb-NO', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      : '01.01.2001';

  const isDesktop = useMediaQuery('(min-width: 640px)');

  const handleLanguageClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const lang = e.currentTarget.lang;
    dsI18n.changeLanguage(langToLocale[lang]);
  };

  return (
    <>
      <TopBannerExternal
        ref={topBannerRef}
        classNames={{
          columns: topBannerExternalExampleStyles.columns,
        }}
        firstColumn={
          user ? (
            <Card spacing={'s'}>
              <Card.Content>
                <Heading as={'h2'} level={3}>
                  {user.role === 'meg' && (
                    <FavoriteIcon
                      className={topBannerExternalExampleStyles.marginRightS}
                    />
                  )}
                  {user.role === 'andre' && (
                    <AccountMultipleIcon
                      className={topBannerExternalExampleStyles.marginRightS}
                    />
                  )}
                  {user.role === 'virksomhet' && (
                    <BriefcaseIcon
                      className={topBannerExternalExampleStyles.marginRightS}
                    />
                  )}

                  {user?.role === 'meg' ? 'Mitt innhold' : user.name}
                </Heading>
                <Paragraph variant={'ingress'}>
                  {'Se, endre og send inn'}
                </Paragraph>
                <ul className={topBannerExternalExampleStyles.linkWrapper}>
                  {(user.role === 'virksomhet'
                    ? virksomhetLinks
                    : loggedInLinks
                  ).map((link, index) => (
                    <li
                      key={index}
                      className={topBannerExternalExampleStyles.marginBottomS}
                    >
                      <Link
                        href={link.href}
                        onClick={(e): void => {
                          e.preventDefault();
                          topBannerRef.current?.closeMenu?.();
                        }}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          ) : (
            <>
              <Heading
                as={'h2'}
                level={3}
                className={topBannerExternalExampleStyles.flex}
              >
                <PersonIcon
                  className={topBannerExternalExampleStyles.marginRightS}
                  size={'largePlus'}
                />

                {'Min side'}
              </Heading>
              <Paragraph
                className={topBannerExternalExampleStyles.marginBottomS}
              >
                {'Se dine oppgaver og oversikt. Les og svar på meldinger.'}
              </Paragraph>
              <Button
                svgPath={LockOutlineSVGpath}
                onClick={() => modalRef.current?.showModal()}
              >
                {'Logg inn'}
              </Button>
            </>
          )
        }
        secondColumn={
          <>
            <Heading as={'h2'} hasSpacing>
              {'Alle temaer'}
            </Heading>
            <div className={topBannerExternalExampleStyles.secondColumn}>
              <div>
                <Heading as={'h3'} hasSpacing>
                  <a href={pageLinks.person}>{'For personer'}</a>
                </Heading>
                <LinkGroup
                  className={topBannerExternalExampleStyles.marginBottomXL}
                >
                  {personLinks.map((link) => (
                    <LinkGroup.Link
                      key={link.text}
                      href={link.href}
                      onClick={(e): void => {
                        e.preventDefault();
                        topBannerRef.current?.closeMenu?.();
                      }}
                    >
                      {link.text}
                    </LinkGroup.Link>
                  ))}
                </LinkGroup>
                <Heading as={'h3'} hasSpacing>
                  <a href={pageLinks.virksomhet}>
                    {'For bedrifter og organisasjoner'}
                  </a>
                </Heading>
                <LinkGroup
                  className={topBannerExternalExampleStyles.marginBottomXL}
                >
                  {virksomhetLinks.map((link) => (
                    <LinkGroup.Link
                      key={link.text}
                      href={link.href}
                      onClick={(e): void => {
                        e.preventDefault();
                        topBannerRef.current?.closeMenu?.();
                      }}
                    >
                      {link.text}
                    </LinkGroup.Link>
                  ))}
                </LinkGroup>
              </div>
              <div>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={pageLinks.rettskilder}>{'Rettskilder'}</a>
                </Heading>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={pageLinks.presse}>{'Presse'}</a>
                </Heading>
                <Heading
                  as={'h3'}
                  level={4}
                  className={topBannerExternalExampleStyles.marginBottomXL}
                >
                  <a href={pageLinks.samarbeidspartnere}>
                    {'Samarbeidspartner'}
                  </a>
                </Heading>
                <Heading as={'h3'} level={4} hasSpacing>
                  <a href={pageLinks.kontakt}>{'Kontakt oss'}</a>
                </Heading>
              </div>
            </div>
          </>
        }
        searchContent={
          <>
            <Paragraph className={topBannerExternalExampleStyles.marginBottomS}>
              {'Dette har andre søkt på:'}
            </Paragraph>
            <LinkGroup>
              {searchSuggestions.map((suggestion) => (
                <LinkGroup.Link key={suggestion} href={'#'}>
                  {suggestion}
                </LinkGroup.Link>
              ))}
            </LinkGroup>
          </>
        }
        user={user}
        onLogOutClick={isDesktop ? (): void => setUser(undefined) : undefined}
        onLanguageClick={handleLanguageClick}
        onLogInClick={
          !user ? (): void => modalRef.current?.showModal() : undefined
        }
        onSearch={(e, value) => {
          alert(\`søker etter \${value}\`);
        }}
        onSearchClick={(e, value) => {
          alert(\`søker etter \${value}\`);
        }}
      >
        {user && (
          <TopBannerExternal.UserMenu
            user={user}
            notificationCount={1}
            onLogOutClick={() => setUser(undefined)}
            onSwitchUserClick={() => modalRef.current?.showModal()}
          />
        )}
      </TopBannerExternal>
      {user && user.role !== 'meg' && (
        <RoleBanner
          user={{
            name: user.name,
            role: user.role,
            identifier:
              user.role === 'virksomhet'
                ? formatOrganisationNumber(user.orgnr ?? '123456789')
                : formatDateOfBirth(user.person?.dateOfBirth),
          }}
        />
      )}
      <RolePicker
        ref={modalRef}
        me={me}
        people={people}
        businesses={businesses}
        onEntitySelect={async (entity) => {
          let role: User['role'];

          if (entity.name === me.name) {
            role = 'meg';
          } else if (entity.type === 'Organization') {
            role = 'virksomhet';
          } else {
            role = 'andre';
          }

          setUser({
            role: role,
            name: entity.name,
          });
          modalRef.current?.close();
        }}
      />
    </>
  );
}
`,qx=`import {
  type Business,
  type Paginated,
  type Person,
} from '@skatteetaten/ds-overlays';

export const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  dateOfBirth: new Date('1990-01-01'),
  type: 'Person',
};

export const businesses: Paginated<Business> = {
  total: 12,
  list: [
    {
      name: 'Costco AS',
      organizationNumber: '123456777',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Google ASA',
          organizationNumber: '123456789',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA',
        },
        {
          name: 'Facebook RHF',
          organizationNumber: '123456790',
          isDeleted: true,
          type: 'Organization',
          unitType: 'RHF',
        },
      ],
    },
    {
      name: 'Instagram AS',
      organizationNumber: '312843211',
      isDeleted: true,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Snapchat AS',
          organizationNumber: '123456623',
          isDeleted: true,
          type: 'Organization',
          unitType: 'AS',
        },
        {
          name: 'Statoil ASA',
          organizationNumber: '312849218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA',
        },
      ],
    },
    {
      name: 'Samsung DA',
      organizationNumber: '312943218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'DA',
    },
    {
      name: 'Toshiba AS',
      organizationNumber: '312643218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Hitachi AS',
      organizationNumber: '312743218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Vanguard AS',
      organizationNumber: '332843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Amazon ASA',
      organizationNumber: '112843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'ASA',
    },
    {
      name: 'Meta',
      organizationNumber: '212843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'ApS',
    },
  ],
};

export const people: Paginated<Person> = {
  total: 4,
  list: [
    {
      name: 'Antikvitet presis',
      personId: '13889999726',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '18849574503',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Lomme filosofisk',
      personId: '08889674513',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Adelsmann varm',
      personId: '14892449911',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
  ],
};
`,Jx=`import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  type OnEntitySelectHandler,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { businesses, me, people } from './data';

export default function RolePickerDefaultExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);

  const handleEntitySelect: OnEntitySelectHandler = async () => {
    rolePickerRef.current?.close();
  };

  return (
    <>
      <Paragraph>
        {'Brukeren har mange representasjoner og kan søke i listen:'}
      </Paragraph>
      <Button onClick={() => rolePickerRef.current?.showModal()}>
        {'Vis mange representasjoner'}
      </Button>
      <RolePicker
        ref={rolePickerRef}
        me={me}
        businesses={businesses}
        people={people}
        onEntitySelect={handleEntitySelect}
      ></RolePicker>
    </>
  );
}
`,Wx=`import {
  type Business,
  type Paginated,
  type Person,
} from '@skatteetaten/ds-overlays';

export const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  dateOfBirth: new Date('1990-01-01'),
  type: 'Person',
};

export const businesses: Paginated<Business> = {
  total: 12,
  list: [
    {
      name: 'Costco AS',
      organizationNumber: '123456777',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Google ASA',
          organizationNumber: '123456789',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA',
        },
        {
          name: 'Facebook RHF',
          organizationNumber: '123456790',
          isDeleted: true,
          type: 'Organization',
          unitType: 'RHF',
        },
      ],
    },
    {
      name: 'Instagram AS',
      organizationNumber: '312843211',
      isDeleted: true,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Snapchat AS',
          organizationNumber: '123456623',
          isDeleted: true,
          type: 'Organization',
          unitType: 'AS',
        },
        {
          name: 'Statoil ASA',
          organizationNumber: '312849218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA',
        },
      ],
    },
    {
      name: 'Samsung DA',
      organizationNumber: '312943218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'DA',
    },
    {
      name: 'Toshiba AS',
      organizationNumber: '312643218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Hitachi AS',
      organizationNumber: '312743218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Vanguard AS',
      organizationNumber: '332843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
    {
      name: 'Amazon ASA',
      organizationNumber: '112843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'ASA',
    },
    {
      name: 'Meta',
      organizationNumber: '212843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'ApS',
    },
  ],
};

export const people: Paginated<Person> = {
  total: 4,
  list: [
    {
      name: 'Antikvitet presis',
      personId: '13889999726',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '18849574503',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Lomme filosofisk',
      personId: '08889674513',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Adelsmann varm',
      personId: '14892449911',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
  ],
};
`,Xx=`import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  type OnEntitySelectHandler,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { businesses, me, people } from './data';

export default function RolePickerWithErrorExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);

  const handleEntitySelect: OnEntitySelectHandler = async () => {
    return {
      error:
        'Du har ikke tilgang til skjemaet på vegne av denne personen. Kontakt personen hvis du trenger tilgang.',
    };
  };

  return (
    <>
      <Paragraph>
        {
          'Brukeren bytter representasjon, men valgt representasjon mangler tilgang til tjenesten:'
        }
      </Paragraph>
      <Button onClick={() => rolePickerRef.current?.showModal()}>
        {'Vis representasjon uten tilgang'}
      </Button>
      <RolePicker
        ref={rolePickerRef}
        me={me}
        businesses={businesses}
        people={people}
        onEntitySelect={handleEntitySelect}
      ></RolePicker>
    </>
  );
}
`,Ux=`import { type User } from '@skatteetaten/ds-layout';
import { type Business, type Paginated } from '@skatteetaten/ds-overlays';

export const businesses: Paginated<Business> = {
  total: 3,
  list: [
    {
      name: 'Nordmann Drift',
      organizationNumber: '923456789',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
    },
    {
      name: 'Nordmann Konsult',
      organizationNumber: '823456111',
      isDeleted: false,
      unitType: 'DA',
      type: 'Organization',
    },
    {
      name: 'Nordmann Transport',
      organizationNumber: '723456222',
      isDeleted: false,
      unitType: 'ENK',
      type: 'Organization',
    },
  ],
};

export const mapBusinessToUser = (business: Business): User => ({
  role: 'virksomhet',
  name: business.name,
  orgnr: business.organizationNumber,
});
`,Zx=`import { useRef, useState, type ReactElement } from 'react';

import { formatOrganisationNumber } from '@skatteetaten/ds-core-utils';
import { RoleBanner, TopBannerExternal } from '@skatteetaten/ds-layout';
import { Business, Entity, RolePicker } from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { businesses, mapBusinessToUser } from './data';

export default function ServiceWithRequiredRepresentationExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);
  const [business, setBusiness] = useState<Business | undefined>(undefined);

  const handleBusinessSelect = async (entity: Entity): Promise<void> => {
    const business = entity as Business;

    setBusiness(business);
    rolePickerRef.current?.close();
  };

  return (
    <>
      <Paragraph>
        {
          'Tjenesten krever at brukeren representerer en virksomhet før hen kan fortsette:'
        }
      </Paragraph>
      <TopBannerExternal
        user={business ? mapBusinessToUser(business) : undefined}
        onLogInClick={() => rolePickerRef.current?.showModal()}
        onLogOutClick={() => setBusiness(undefined)}
      >
        {business && (
          <TopBannerExternal.UserMenu
            user={mapBusinessToUser(business)}
            onLogOutClick={() => setBusiness(undefined)}
            onSwitchUserClick={() => rolePickerRef.current?.showModal()}
          />
        )}
      </TopBannerExternal>
      {business && (
        <RoleBanner
          user={{
            name: business.name ?? '',
            role: 'virksomhet',
            identifier: formatOrganisationNumber(
              business.organizationNumber ?? '123456789'
            ),
          }}
        />
      )}

      <RolePicker
        ref={rolePickerRef}
        businesses={businesses}
        onEntitySelect={handleBusinessSelect}
      />
    </>
  );
}
`,Yx=`import {
  type Business,
  type Paginated,
  type Person,
} from '@skatteetaten/ds-overlays';

export const me: Person = {
  name: 'Ola Nordmann',
  personId: '10101012345',
  dateOfBirth: new Date('1990-01-01'),
  type: 'Person',
};

export const businesses: Paginated<Business> = {
  total: 12,
  list: [
    {
      name: 'Costco AS',
      organizationNumber: '123456777',
      isDeleted: false,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Google ASA',
          organizationNumber: '123456789',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA',
        },
        {
          name: 'Facebook RHF',
          organizationNumber: '123456790',
          isDeleted: true,
          type: 'Organization',
          unitType: 'RHF',
        },
      ],
    },
    {
      name: 'Instagram AS',
      organizationNumber: '312843211',
      isDeleted: true,
      unitType: 'AS',
      type: 'Organization',
      subunits: [
        {
          name: 'Snapchat AS',
          organizationNumber: '123456623',
          isDeleted: true,
          type: 'Organization',
          unitType: 'AS',
        },
        {
          name: 'Statoil ASA',
          organizationNumber: '312849218',
          isDeleted: false,
          type: 'Organization',
          unitType: 'ASA',
        },
      ],
    },
    {
      name: 'Samsung DA',
      organizationNumber: '312943218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'DA',
    },
    {
      name: 'Vanguard AS',
      organizationNumber: '332843218',
      isDeleted: false,
      type: 'Organization',
      unitType: 'AS',
    },
  ],
};

const peopleBase: Paginated<Person> = {
  total: 11,
  list: [
    {
      name: 'Frisk Elefant',
      personId: '10090812345',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Melankolsk Aldrende Ape',
      personId: '13889999726',
      dateOfBirth: new Date('2000-10-10'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Bønne elegant',
      personId: '18849574503',
      dateOfBirth: new Date('1984-02-13'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Lomme filosofisk',
      personId: '08889674513',
      dateOfBirth: new Date('1984-02-13'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Adelsmann varm',
      personId: '14892449911',
      dateOfBirth: new Date('1984-02-13'),
      type: 'Person',
      isDeleted: false,
    },
    {
      name: 'Kari Nordmann',
      personId: '10101054321',
      dateOfBirth: new Date('1984-02-13'),
      type: 'Person',
      isDeleted: false,
    },
  ],
};

export const peopleWithDeceased: Paginated<Person> = {
  ...peopleBase,
  list: peopleBase.list.map((person, index) => ({
    ...person,
    isDeleted: index % 2 === 0,
  })),
};
`,Qx=`import { type ReactElement, useRef } from 'react';

import { Button } from '@skatteetaten/ds-buttons';
import {
  type OnEntitySelectHandler,
  RolePicker,
} from '@skatteetaten/ds-overlays';
import { Paragraph } from '@skatteetaten/ds-typography';

import { businesses, me, peopleWithDeceased } from './data';

export default function RolePickerWithStatusesExample(): ReactElement {
  const rolePickerRef = useRef<HTMLDialogElement>(null);

  const handleEntitySelect: OnEntitySelectHandler = async () => {
    rolePickerRef.current?.close();
  };

  return (
    <>
      <Paragraph>
        {
          'Brukeren har virksomheter og personer med ulike statuser i representasjonslisten:'
        }
      </Paragraph>
      <Button onClick={() => rolePickerRef.current?.showModal()}>
        {'Vis representasjoner med statuser'}
      </Button>
      <RolePicker
        ref={rolePickerRef}
        me={me}
        businesses={businesses}
        people={peopleWithDeceased}
        showInactiveBusinesses
        showDeceasedPeople
        onEntitySelect={handleEntitySelect}
      ></RolePicker>
    </>
  );
}
`,ek=`import { type User } from '@skatteetaten/ds-layout';

export const topBannerUser: User = {
  role: 'andre',
  name: 'Kari Nordmann',
};

export const roleBannerUser = {
  name: 'Kari Nordmann',
  role: 'andre' as const,
  identifier: '01.01.2001',
};
`,nk=`import { type ReactElement } from 'react';

import { RoleBanner, TopBannerExternal } from '@skatteetaten/ds-layout';
import { Paragraph } from '@skatteetaten/ds-typography';

import { roleBannerUser, topBannerUser } from './data';

export default function RoleBannerGuardianExample(): ReactElement {
  return (
    <>
      <TopBannerExternal user={topBannerUser} onLogOutClick={() => undefined}>
        <TopBannerExternal.UserMenu
          user={topBannerUser}
          onLogOutClick={() => undefined}
        />
      </TopBannerExternal>
      <RoleBanner user={roleBannerUser} />
      <main>
        <Paragraph>{'Hovedinnhold'}</Paragraph>
      </main>
    </>
  );
}
`,tk=`import { formatOrganisationNumber } from '@skatteetaten/ds-core-utils';
import { type User } from '@skatteetaten/ds-layout';

export const topBannerUser: User = {
  role: 'virksomhet',
  name: 'Nordmann Drift AS',
  orgnr: '923456789',
};

export const roleBannerUser = {
  name: 'Nordmann Drift AS',
  role: 'virksomhet' as const,
  identifier: formatOrganisationNumber(topBannerUser.orgnr ?? '923456789'),
};
`,ak=`import { type ReactElement } from 'react';

import { RoleBanner, TopBannerExternal } from '@skatteetaten/ds-layout';
import { Paragraph } from '@skatteetaten/ds-typography';

import { roleBannerUser, topBannerUser } from './data';

export default function RoleBannerBusinessExample(): ReactElement {
  return (
    <>
      <TopBannerExternal user={topBannerUser} onLogOutClick={() => undefined}>
        <TopBannerExternal.UserMenu
          user={topBannerUser}
          onLogOutClick={() => undefined}
        />
      </TopBannerExternal>
      <RoleBanner user={roleBannerUser} />
      <main>
        <Paragraph>{'Hovedinnhold'}</Paragraph>
      </main>
    </>
  );
}
`,rk=`import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const amountFormatter = useFormattedInput({
    type: 'number',
    initialValue: '50400,32',
    allowDecimals: true,
  });

  return (
    <TextField
      label={'Beløp (NOK)'}
      value={amountFormatter.value}
      hideLabel={false}
      onChange={amountFormatter.onChange}
      onKeyDown={amountFormatter.onKeyDown}
    />
  );
}
`,ok=`import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const amountFormatter = useFormattedInput({
    type: 'number',
    locale: 'en-GB',
    initialValue: '50400',
  });

  return (
    <TextField
      label={'Amount (NOK)'}
      value={amountFormatter.value}
      hideLabel={false}
      onChange={amountFormatter.onChange}
      onKeyDown={amountFormatter.onKeyDown}
    />
  );
}
`,sk=`import { type ReactElement } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { useFormattedInput } from '@skatteetaten/ds-core-utils';

export default function TextFieldFormattingExample(): ReactElement {
  const amountFormatter = useFormattedInput({
    type: 'number',
    initialValue: '50400',
  });

  return (
    <DescriptionList>
      <DescriptionList.Element term={'Beløp (NOK)'}>
        {amountFormatter.value}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
`,lk=`import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const amountFormatter = useFormattedInput({
    type: 'number',
    initialValue: '50400',
  });

  return (
    <TextField
      label={'Beløp (NOK)'}
      value={amountFormatter.value}
      hideLabel={false}
      onChange={amountFormatter.onChange}
      onKeyDown={amountFormatter.onKeyDown}
    />
  );
}
`,ik=`import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const bankAccountNumberFormatter = useFormattedInput({
    type: 'bankAccountNumber',
    initialValue: '1234678910',
  });

  return (
    <TextField
      label={'Kontonummer (11 siffer)'}
      value={bankAccountNumberFormatter.value}
      hideLabel={false}
      hasSpacing
      onChange={bankAccountNumberFormatter.onChange}
      onKeyDown={bankAccountNumberFormatter.onKeyDown}
    />
  );
}
`,dk=`import { type ReactElement } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { useFormattedInput } from '@skatteetaten/ds-core-utils';

export default function TextFieldFormattingExample(): ReactElement {
  const bankAccountNumberFormatter = useFormattedInput({
    type: 'bankAccountNumber',
    initialValue: '1234678910',
  });

  return (
    <DescriptionList>
      <DescriptionList.Element term={'Kontonummer'}>
        {bankAccountNumberFormatter.value}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
`,ck=`import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const nationalIdentityNumberFormatter = useFormattedInput({
    type: 'nationalIdentityNumber',
    initialValue: '22113344566',
  });

  return (
    <TextField
      label={'Fødselsnummer (11 siffer)'}
      value={nationalIdentityNumberFormatter.value}
      hideLabel={false}
      hasSpacing
      onChange={nationalIdentityNumberFormatter.onChange}
      onKeyDown={nationalIdentityNumberFormatter.onKeyDown}
    />
  );
}
`,mk=`import { type ReactElement } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { formatter } from '@skatteetaten/ds-core-utils';

export default function TextFieldFormattingExample(): ReactElement {
  const nationalIdentityNumber = formatter({
    value: '22113344566',
    type: 'nationalIdentityNumber',
  });

  return (
    <DescriptionList>
      <DescriptionList.Element term={'Fødselsnummer'}>
        {nationalIdentityNumber.value}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
`,uk=`import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const organisationNumberFormatter = useFormattedInput({
    type: 'organisationNumber',
    initialValue: '987654321',
  });

  return (
    <TextField
      label={'Organisasjonsnummer (9 siffer)'}
      value={organisationNumberFormatter.value}
      hideLabel={false}
      hasSpacing
      onChange={organisationNumberFormatter.onChange}
      onKeyDown={organisationNumberFormatter.onKeyDown}
    />
  );
}
`,pk=`import { type ReactElement } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { useFormattedInput } from '@skatteetaten/ds-core-utils';

export default function TextFieldFormattingExample(): ReactElement {
  const organisationNumberFormatter = useFormattedInput({
    type: 'organisationNumber',
    initialValue: '987654321',
  });

  return (
    <DescriptionList>
      <DescriptionList.Element term={'Organisasjonsnummer'}>
        {organisationNumberFormatter.value}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
`,gk=`import { type ReactElement } from 'react';

import { useFormattedInput } from '@skatteetaten/ds-core-utils';
import { TextField } from '@skatteetaten/ds-forms';

export default function TextFieldFormattingExample(): ReactElement {
  const phoneNumberFormatter = useFormattedInput({
    type: 'phoneNumber',
    initialValue: '12345678',
  });

  return (
    <TextField
      label={'Telefon'}
      value={phoneNumberFormatter.value}
      hideLabel={false}
      hasSpacing
      onChange={phoneNumberFormatter.onChange}
      onKeyDown={phoneNumberFormatter.onKeyDown}
    />
  );
}
`,fk=`import { type ReactElement } from 'react';

import { DescriptionList } from '@skatteetaten/ds-content';
import { useFormattedInput } from '@skatteetaten/ds-core-utils';

export default function TextFieldFormattingExample(): ReactElement {
  const phoneNumberFormatter = useFormattedInput({
    type: 'phoneNumber',
    initialValue: '12345678',
  });

  return (
    <DescriptionList>
      <DescriptionList.Element term={'Telefon'}>
        {phoneNumberFormatter.value}
      </DescriptionList.Element>
    </DescriptionList>
  );
}
`,hk=`@use '@skatteetaten/ds-core-designtokens/designtokens/breakpoints' as *;

.mainContent {
  width: var(--semantic-responsive-container);
  min-height: 60vh;
  box-sizing: border-box;
  flex: 1;
  padding: var(--semantic-responsive-container-spacing);
  margin: var(--spacing-m) auto;
}

.article {
  width: var(--semantic-responsive-article);
  box-sizing: border-box;
  margin: 0 auto;
}

.wideContent {
  width: var(--semantic-responsive-wide-content);
  box-sizing: border-box;
  margin: 0 auto;
}

.marginBottomXL {
  margin-bottom: var(--spacing-xl);
}

.marginTopS {
  margin-top: var(--spacing-s);
}
`,vk=`import { JSX, useState, useId } from 'react';

import { Link, LinkGroup } from '@skatteetaten/ds-buttons';
import { StepList } from '@skatteetaten/ds-collections';
import { Card, Panel } from '@skatteetaten/ds-content';
import { Checkbox, ErrorSummary, RadioGroup } from '@skatteetaten/ds-forms';
import { InfoIcon } from '@skatteetaten/ds-icons';
import { Footer, TopBannerExternal } from '@skatteetaten/ds-layout';
import { Breadcrumbs } from '@skatteetaten/ds-navigation';
import { Heading, List, Paragraph } from '@skatteetaten/ds-typography';

import styles from './ExternalLayout.module.scss';

export default function StandardSentrertLayout(): JSX.Element {
  const stepId = useId();
  const [activeStep, setActiveStep] = useState(1);
  const [step2, setStep2] = useState<string | undefined>(undefined);
  const [hasStep2Error, setHasStep2Error] = useState(false);
  const onNext = (): void => {
    const nextStep = activeStep + 1;
    setActiveStep(nextStep);
  };

  return (
    <>
      <TopBannerExternal />
      <main className={styles.mainContent}>
        <Breadcrumbs className={styles.marginBottomXL}>
          <Breadcrumbs.List shouldCollapse>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Breadcrumb 1'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Breadcrumb 2'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Breadcrumb 3'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
            <Breadcrumbs.Item>
              <Breadcrumbs.Link href={'#'}>{'Breadcrumb 4'}</Breadcrumbs.Link>
            </Breadcrumbs.Item>
          </Breadcrumbs.List>
        </Breadcrumbs>
        <div className={styles.article}>
          <Heading as={'h1'} level={2} hasSpacing>
            {'Eksempel på layout i publikumsløsninger'}
          </Heading>
          <Paragraph hasSpacing>
            {
              'Layouten er sentret. På større skjermer har man flere containerbredder til rådighet. På mobil er det normalt bare én. Denne teksten ligger i en container med bredden --semantic-responsive-article. Containerbredder er dokumentert på Designtokens-undersiden: '
            }
            <Link href={'#'}>{'Containers'}</Link>
            {'.'}
          </Paragraph>
        </div>
        <div className={styles.wideContent}>
          <Panel
            className={styles.marginBottomXL}
            variant={'filled'}
            titleAs={'h2'}
            title={'Størrelser er en del av komponentene'}
            renderIcon={(): JSX.Element => <InfoIcon size={'largePlus'} />}
          >
            {
              'Denne Panelen ligger i en container med bredden --semantic-responsive-wide-content. Innholdet i Panel har en innebygd containerbredde på --semantic-responsive-article, for å venstre- og høyrejustere denne teksten med resten av siden.'
            }
          </Panel>
        </div>
        <StepList className={styles.marginBottomXL}>
          {activeStep >= 1 && (
            <StepList.Step
              id={\`\${stepId}-1\`}
              variant={activeStep === 1 ? 'active' : 'passive'}
              title={'StepList har også en innebygd containerbredde'}
              stepNumber={1}
              onNext={onNext}
            >
              {
                'Stegene i StepList har fått en bredde på --semantic-responsive-article. Dette gjør at innholdet i stegene er venstre- og høyrejustert med resten av siden.'
              }
            </StepList.Step>
          )}

          {activeStep >= 2 && (
            <StepList.Step
              id={\`\${stepId}-2\`}
              variant={activeStep === 2 ? 'active' : 'passive'}
              title={'Vil du gå videre?'}
              stepNumber={2}
              onEdit={
                activeStep > 3 && activeStep < 5
                  ? (): void => setActiveStep(2)
                  : undefined
              }
              onNext={(): void => {
                if (step2) {
                  onNext();
                } else {
                  setHasStep2Error(true);
                }
              }}
            >
              {activeStep === 2 ? (
                <>
                  <RadioGroup
                    legend={'Vil du gå videre?'}
                    errorMessage={
                      hasStep2Error ? 'Kryss av om du vil gå videre' : undefined
                    }
                    hideLegend
                    onChange={(e): void => {
                      setHasStep2Error(false);
                      setStep2(e.target.value);
                    }}
                  >
                    <RadioGroup.Radio
                      id={'step2radio'}
                      value={'ja'}
                      description={
                        'Velger du ja, vil du få et positivt resultat'
                      }
                    >
                      {'Ja'}
                    </RadioGroup.Radio>
                    <RadioGroup.Radio
                      value={'nei'}
                      description={
                        'Velger du nei, vil du få et nøytralt resultat'
                      }
                    >
                      {'Nei'}
                    </RadioGroup.Radio>
                  </RadioGroup>
                  <Paragraph hasSpacing>
                    {
                      'Velger du ingenting og klikker på Neste-knappen, vil du få en feilmelding.'
                    }
                  </Paragraph>
                  <ErrorSummary showErrorSummary={hasStep2Error}>
                    <ErrorSummary.Error referenceId={'step2radio'}>
                      {'Vil du gå videre?'}
                    </ErrorSummary.Error>
                  </ErrorSummary>
                </>
              ) : (
                <div>{step2}</div>
              )}
            </StepList.Step>
          )}

          {activeStep >= 3 && (
            <StepList.Step
              id={\`\${stepId}-3\`}
              variant={activeStep === 3 ? 'active' : 'passive'}
              title={'Oppsummering før resultat'}
              stepNumber={3}
              onNext={onNext}
            >
              {activeStep === 3 ? (
                <Card color={'ochre'} className={styles.marginTopS}>
                  <Card.Content>
                    <Paragraph hasSpacing>
                      {'Oppsummering av valget ditt:'}
                    </Paragraph>
                    <List hasSpacing>
                      <List.Element>{'Du har forstått innholdet'}</List.Element>
                      <List.Element>{\`Du vil se et \${step2 === 'ja' ? 'positivt' : 'nøytralt'} resultat\`}</List.Element>
                    </List>
                    <Checkbox>
                      {'Jeg bekrefter at opplysningene ovenfor stemmer'}
                    </Checkbox>
                  </Card.Content>
                </Card>
              ) : (
                <div>{'Oppsummering'}</div>
              )}
            </StepList.Step>
          )}

          {activeStep >= 4 && step2 === 'ja' && (
            <StepList.Step
              id={\`\${stepId}-4\`}
              title={'Positivt resultat'}
              variant={'positiveResult'}
              stepNumber={4}
              introTitle={'Dette er en overskrift.'}
              introTitleAs={'h4'}
              introContent={
                <Paragraph>
                  {'Husk å sette riktig overskrifts-tag til overskriften.'}
                </Paragraph>
              }
            >
              <Paragraph hasSpacing>
                {
                  'Her ligger mer utfyllende informasjon om resultatet. I veiledere pleier vi å vise resultatet sammen med StepList. I skjemaer for privatpersoner og virksomheter sender vi brukeren til en egen kvitteringsside.'
                }
              </Paragraph>
              <LinkGroup>
                <LinkGroup.Link href={'#'}>
                  {'Eksempel på kvittering'}
                </LinkGroup.Link>
                <LinkGroup.Link
                  href={
                    'https://www.skatteetaten.no/stilogtone/monster/skjemadesign/skjema-med-steplist/'
                  }
                  target={'_blank'}
                >
                  {'Skjema med StepList'}
                </LinkGroup.Link>
              </LinkGroup>
              <Paragraph>
                {
                  'Resultatet er sentrert. Rammen har fått en maksbredde på --container-m, mens innholdet har en bredde på --semantic-responsive-article for å venstre- og høyrejustere teksten med resten av siden.'
                }
              </Paragraph>
            </StepList.Step>
          )}

          {activeStep >= 4 && step2 === 'nei' && (
            <StepList.Step
              id={\`\${stepId}-4\`}
              title={'Nøytralt resultat'}
              variant={'passive'}
              stepNumber={4}
            >
              <Paragraph hasSpacing>
                {
                  'Her ligger informasjon om resultatet. Siden du valgte nei, er resultatet nøytralt.'
                }
              </Paragraph>
            </StepList.Step>
          )}
        </StepList>
      </main>
      <Footer />
    </>
  );
}
`,bk="",_k=`<p>{'Eksempelet fra storybook inn her'}</p>;
`,xk=["standard-med-høyre-ikon","bakgrunnsfarge","liten-med-venstre-ikon","med-tilleggsikon","ulike-størrelser","utvidet-fra-start"],kk=Object.freeze(Object.defineProperty({__proto__:null,default:xk},Symbol.toStringTag,{value:"Module"})),Sk=["standard","ikke-kollapsbar"],yk=Object.freeze(Object.defineProperty({__proto__:null,default:Sk},Symbol.toStringTag,{value:"Module"})),jk=["primær-og-sekundær","i-modal","med-spinner","som-lenke","variants"],Tk=Object.freeze(Object.defineProperty({__proto__:null,default:jk},Symbol.toStringTag,{value:"Module"})),Ek=["standard","fargevarianter","med-merknad"],Ck=Object.freeze(Object.defineProperty({__proto__:null,default:Ek},Symbol.toStringTag,{value:"Module"})),Pk=["enkeltvalg","velge-flere","grupperte-valg","asynkront-søk"],Rk=Object.freeze(Object.defineProperty({__proto__:null,default:Pk},Symbol.toStringTag,{value:"Module"})),wk=["standard","min-og-max"],Dk=Object.freeze(Object.defineProperty({__proto__:null,default:wk},Symbol.toStringTag,{value:"Module"})),Nk=["standard","horisontal","uthevet-verdi"],Lk=Object.freeze(Object.defineProperty({__proto__:null,default:Nk},Symbol.toStringTag,{value:"Module"})),Ok=["standard","dekorelement","meningsbærende"],Ik=Object.freeze(Object.defineProperty({__proto__:null,default:Ok},Symbol.toStringTag,{value:"Module"})),Bk=["standard","fra-og-til-dato"],Ak=Object.freeze(Object.defineProperty({__proto__:null,default:Bk},Symbol.toStringTag,{value:"Module"})),Mk=["standard","med feil","opplastede filer"],Hk=Object.freeze(Object.defineProperty({__proto__:null,default:Mk},Symbol.toStringTag,{value:"Module"})),Vk=["standard","innbakt-stikktittel","justert-størrelse","med-ikon"],Fk=Object.freeze(Object.defineProperty({__proto__:null,default:Vk},Symbol.toStringTag,{value:"Module"})),zk=["standard","med-custom-icon","med-spinner","outlined-og-ikke-outlined","størrelser"],Gk=Object.freeze(Object.defineProperty({__proto__:null,default:zk},Symbol.toStringTag,{value:"Module"})),Kk=["standard","ikon-til-høyre","med-spinner","uten-ikon"],$k=Object.freeze(Object.defineProperty({__proto__:null,default:Kk},Symbol.toStringTag,{value:"Module"})),qk=["standard","ekstern-lenke","med-ikon","Åpne-i-ny-fane"],Jk=Object.freeze(Object.defineProperty({__proto__:null,default:qk},Symbol.toStringTag,{value:"Module"})),Wk=["standard","med-spinner","som-ekstern-lenke"],Xk=Object.freeze(Object.defineProperty({__proto__:null,default:Wk},Symbol.toStringTag,{value:"Module"})),Uk=["standard","høyrestilt-ikon","som-hjelpetekst","størrelser"],Zk=Object.freeze(Object.defineProperty({__proto__:null,default:Uk},Symbol.toStringTag,{value:"Module"})),Yk=["standard","controlled","uncontrolled"],Qk=Object.freeze(Object.defineProperty({__proto__:null,default:Yk},Symbol.toStringTag,{value:"Module"})),eS=["med bakgrunn","med ramme","justert-innhold","custom-padding"],nS=Object.freeze(Object.defineProperty({__proto__:null,default:eS},Symbol.toStringTag,{value:"Module"})),tS=["standard","controlled","farge","i-overskrift","i-tabellcelle"],aS=Object.freeze(Object.defineProperty({__proto__:null,default:tS},Symbol.toStringTag,{value:"Module"})),rS=["vertikal","horisontal","read-only","med-feilmelding"],oS=Object.freeze(Object.defineProperty({__proto__:null,default:rS},Symbol.toStringTag,{value:"Module"})),sS=["standard","read-only"],lS=Object.freeze(Object.defineProperty({__proto__:null,default:sS},Symbol.toStringTag,{value:"Module"})),iS=["standard","med-ramme","multiline","størrelsesvariant"],dS=Object.freeze(Object.defineProperty({__proto__:null,default:iS},Symbol.toStringTag,{value:"Module"})),cS=["standard","med-characterlimit"],mS=Object.freeze(Object.defineProperty({__proto__:null,default:cS},Symbol.toStringTag,{value:"Module"})),uS=["standard","formatering","med-beskrivelse","med-feilmelding","med-hjelpetekst"],pS=Object.freeze(Object.defineProperty({__proto__:null,default:uS},Symbol.toStringTag,{value:"Module"})),gS=["standard","med-knapper-og-meny","med-søkefelt"],fS=Object.freeze(Object.defineProperty({__proto__:null,default:gS},Symbol.toStringTag,{value:"Module"})),hS=Object.assign({"../../content/examples/components/accordion/bakgrunnsfarge/example.tsx":Ur,"../../content/examples/components/accordion/liten-med-venstre-ikon/example.tsx":Yr,"../../content/examples/components/accordion/med-tilleggsikon/example.tsx":eo,"../../content/examples/components/accordion/standard-med-høyre-ikon/example.tsx":to,"../../content/examples/components/accordion/størrelser/example.tsx":so,"../../content/examples/components/accordion/utvidet-fra-start/example.tsx":io,"../../content/examples/components/alert/advarsel/example.tsx":mo,"../../content/examples/components/alert/fare/example.tsx":po,"../../content/examples/components/alert/feil/example.tsx":fo,"../../content/examples/components/alert/info/example.tsx":vo,"../../content/examples/components/alert/suksess/example.tsx":_o,"../../content/examples/components/blockquote/standard/example.tsx":ko,"../../content/examples/components/blockquote/vise-regelverk/example.tsx":To,"../../content/examples/components/breadcrumbs/ikke-kollapsbar/example.tsx":Co,"../../content/examples/components/breadcrumbs/standard/example.tsx":Ro,"../../content/examples/components/button/i-modal/example.tsx":Lo,"../../content/examples/components/button/med-spinner/example.tsx":Io,"../../content/examples/components/button/primær-og-sekundær/example.tsx":Ho,"../../content/examples/components/button/som-lenke/example.tsx":Fo,"../../content/examples/components/button/variants/example.tsx":$o,"../../content/examples/components/card/fargevarianter/example.tsx":Xo,"../../content/examples/components/card/med-merknad/example.tsx":Zo,"../../content/examples/components/card/standard/example.tsx":Qo,"../../content/examples/components/checkbox/standard/example.tsx":ns,"../../content/examples/components/checkboxgroup/standard/example.tsx":as,"../../content/examples/components/chips/lukkbare/example.tsx":ss,"../../content/examples/components/chips/med-checkmark/example.tsx":is,"../../content/examples/components/chips/uten-checkmark/example.tsx":cs,"../../content/examples/components/combobox/asynkront-søk/example.tsx":ps,"../../content/examples/components/combobox/enkeltvalg/example.tsx":hs,"../../content/examples/components/combobox/grupperte-valg/example.tsx":_s,"../../content/examples/components/combobox/velge-flere/example.tsx":Ss,"../../content/examples/components/datepicker/min-og-max/example.tsx":Es,"../../content/examples/components/datepicker/standard/example.tsx":Ps,"../../content/examples/components/descriptionlist/horisontal/example.tsx":ws,"../../content/examples/components/descriptionlist/standard/example.tsx":Ns,"../../content/examples/components/descriptionlist/uthevet-verdi/example.tsx":Os,"../../content/examples/components/divider/dekorelement/example.tsx":Hs,"../../content/examples/components/divider/meningsbærende/example.tsx":Ks,"../../content/examples/components/divider/standard/example.tsx":qs,"../../content/examples/components/errormessage/standard/example.tsx":Ws,"../../content/examples/components/errorsummary/standard/example.tsx":Us,"../../content/examples/components/fieldset/fra-og-til-dato/example.tsx":el,"../../content/examples/components/fieldset/standard/example.tsx":tl,"../../content/examples/components/fileuploader/med feil/example.tsx":rl,"../../content/examples/components/fileuploader/opplastede filer/example.tsx":ll,"../../content/examples/components/fileuploader/standard/example.tsx":dl,"../../content/examples/components/footer/komplett/example.tsx":ml,"../../content/examples/components/footer/obligatoriske-lenker/example.tsx":pl,"../../content/examples/components/heading/innbakt-stikktittel/example.tsx":vl,"../../content/examples/components/heading/justert-størrelse/example.tsx":_l,"../../content/examples/components/heading/med-ikon/example.tsx":kl,"../../content/examples/components/heading/standard/example.tsx":yl,"../../content/examples/components/icon/størrelser/example.tsx":Tl,"../../content/examples/components/icon/systemikon/example.tsx":Cl,"../../content/examples/components/icon/temaikon/example.tsx":Rl,"../../content/examples/components/iconbutton/med-custom-icon/example.tsx":Nl,"../../content/examples/components/iconbutton/med-spinner/example.tsx":Ol,"../../content/examples/components/iconbutton/outlined-og-ikke-outlined/example.tsx":Ml,"../../content/examples/components/iconbutton/standard/example.tsx":Vl,"../../content/examples/components/iconbutton/størrelser/example.tsx":Kl,"../../content/examples/components/inlinebutton/ikon-til-høyre/example.tsx":ql,"../../content/examples/components/inlinebutton/med-spinner/example.tsx":Wl,"../../content/examples/components/inlinebutton/standard/example.tsx":Ul,"../../content/examples/components/inlinebutton/uten-ikon/example.tsx":Yl,"../../content/examples/components/link/ekstern-lenke/example.tsx":ei,"../../content/examples/components/link/med-ikon/example.tsx":ti,"../../content/examples/components/link/standard/example.tsx":ri,"../../content/examples/components/link/Åpne-i-ny-fane/example.tsx":si,"../../content/examples/components/linkgroup/ankerliste/example.tsx":ii,"../../content/examples/components/linkgroup/lenkeliste/example.tsx":ci,"../../content/examples/components/list/med-utheving/example.tsx":ui,"../../content/examples/components/list/ordnet/example.tsx":gi,"../../content/examples/components/list/uordnet/example.tsx":hi,"../../content/examples/components/megabutton/med-spinner/example.tsx":bi,"../../content/examples/components/megabutton/som-ekstern-lenke/example.tsx":xi,"../../content/examples/components/megabutton/standard/example.tsx":Si,"../../content/examples/components/modal/feilmelding/example.tsx":Ci,"../../content/examples/components/modal/rammevariant/example.tsx":Di,"../../content/examples/components/modal/samtykke/example.tsx":Ii,"../../content/examples/components/modal/tvungen-handling/example.tsx":Hi,"../../content/examples/components/modal/ventevarsel/example.tsx":qi,"../../content/examples/components/navigationtile/med-heading/example.tsx":Ui,"../../content/examples/components/navigationtile/med-spinner/example.tsx":td,"../../content/examples/components/navigationtile/plassering/example.tsx":sd,"../../content/examples/components/navigationtile/skjult-pilikon/example.tsx":ud,"../../content/examples/components/navigationtile/størrelser/example.tsx":hd,"../../content/examples/components/openclose/høyrestilt-ikon/example.tsx":bd,"../../content/examples/components/openclose/som-hjelpetekst/example.tsx":xd,"../../content/examples/components/openclose/standard/example.tsx":Sd,"../../content/examples/components/openclose/størrelser/example.tsx":Ed,"../../content/examples/components/pagination/controlled/example.tsx":Pd,"../../content/examples/components/pagination/standard/example.tsx":wd,"../../content/examples/components/pagination/uncontrolled/example.tsx":Nd,"../../content/examples/components/panel/custom-padding/example.tsx":Ad,"../../content/examples/components/panel/justert-innhold/example.tsx":Fd,"../../content/examples/components/panel/med bakgrunn/example.tsx":Gd,"../../content/examples/components/panel/med ramme/example.tsx":Jd,"../../content/examples/components/paragraph/i-artikkel/example.tsx":Xd,"../../content/examples/components/paragraph/med-ikon/example.tsx":Zd,"../../content/examples/components/paragraph/med-lenke/example.tsx":Qd,"../../content/examples/components/paragraph/med-utheving/example.tsx":nc,"../../content/examples/components/popover/controlled/example.tsx":oc,"../../content/examples/components/popover/farge/example.tsx":dc,"../../content/examples/components/popover/i-overskrift/example.tsx":gc,"../../content/examples/components/popover/i-tabellcelle/example.tsx":ym,"../../content/examples/components/popover/standard/example.tsx":Tm,"../../content/examples/components/radiogroup/horisontal/example.tsx":Cm,"../../content/examples/components/radiogroup/med-feilmelding/example.tsx":Rm,"../../content/examples/components/radiogroup/read-only/example.tsx":Dm,"../../content/examples/components/radiogroup/vertikal/example.tsx":Lm,"../../content/examples/components/rolebanner/meg-selv/example.tsx":Im,"../../content/examples/components/rolebanner/som-andre/example.tsx":Am,"../../content/examples/components/rolepicker/standard/example.tsx":zm,"../../content/examples/components/scrolltotopbutton/standard/example.tsx":Km,"../../content/examples/components/searchfield/ikon-eller-tekst/example.tsx":Xm,"../../content/examples/components/searchfield/med-oppslagsmeny/example.tsx":Ym,"../../content/examples/components/searchfield/størrelser/example.tsx":tu,"../../content/examples/components/select/standard/example.tsx":ru,"../../content/examples/components/spinner/farge/example.tsx":iu,"../../content/examples/components/spinner/prosentvis-innlasting/example.tsx":cu,"../../content/examples/components/spinner/størrelse/example.tsx":gu,"../../content/examples/components/spinner/title-position/example.tsx":bu,"../../content/examples/components/steplist/standard/example.tsx":xu,"../../content/examples/components/table/custom-ekspander-knapp/example.tsx":Su,"../../content/examples/components/table/editerbar-rad/example.tsx":ju,"../../content/examples/components/table/ekspanderbar/example.tsx":Eu,"../../content/examples/components/table/legg-til-rad/example.tsx":Pu,"../../content/examples/components/table/med-ikoner/example.tsx":wu,"../../content/examples/components/table/med-tomme-header-celler/example.tsx":Lu,"../../content/examples/components/table/sorterbare-kolonner/example.tsx":Iu,"../../content/examples/components/table/størrelser/example.tsx":Au,"../../content/examples/components/table/velge-rader/example.tsx":Hu,"../../content/examples/components/tabs/med-ramme/example.tsx":Gu,"../../content/examples/components/tabs/multiline/example.tsx":Ju,"../../content/examples/components/tabs/standard/example.tsx":Xu,"../../content/examples/components/tabs/størrelsesvariant/example.tsx":Qu,"../../content/examples/components/tag/formidle-mening/example.tsx":ap,"../../content/examples/components/tag/ikke-meningsbærende/example.tsx":lp,"../../content/examples/components/tag/med-ikon/example.tsx":mp,"../../content/examples/components/tag/størrelser/example.tsx":fp,"../../content/examples/components/textarea/med-characterlimit/example.tsx":vp,"../../content/examples/components/textarea/standard/example.tsx":_p,"../../content/examples/components/textfield/formatering/example.tsx":kp,"../../content/examples/components/textfield/med-beskrivelse/example.tsx":yp,"../../content/examples/components/textfield/med-feilmelding/example.tsx":Tp,"../../content/examples/components/textfield/med-hjelpetekst/example.tsx":Cp,"../../content/examples/components/textfield/standard/example.tsx":Rp,"../../content/examples/components/topbannerexternal/standard/example.tsx":Mp,"../../content/examples/components/topbannerinternal/med-knapper-og-meny/example.tsx":Vp,"../../content/examples/components/topbannerinternal/med-søkefelt/example.tsx":zp,"../../content/examples/components/topbannerinternal/standard/example.tsx":Kp,"../../content/examples/components/wordinfo/standard/example.tsx":qp,"../../content/examples/composed/datoer/besoksdato/example.tsx":Wp,"../../content/examples/composed/datoer/datoOgTid/example.tsx":Qp,"../../content/examples/composed/datoer/fodselsdato-separatFelter/example.tsx":rg,"../../content/examples/composed/datoer/fodselsdato-textfield/example.tsx":ig,"../../content/examples/composed/datoer/fraTilDato/example.tsx":ug,"../../content/examples/composed/datoer/klokkeOgTidssone/example.tsx":vg,"../../content/examples/composed/mange-valg/checkboxgroup-long-list/example.tsx":_g,"../../content/examples/composed/mange-valg/checkboxgroup/example.tsx":kg,"../../content/examples/composed/mange-valg/chips-selection/example.tsx":yg,"../../content/examples/composed/mange-valg/combobox-multiple/example.tsx":Tg,"../../content/examples/composed/mange-valg/combobox/example.tsx":Cg,"../../content/examples/composed/mange-valg/modal-selection/example.tsx":Ng,"../../content/examples/composed/mange-valg/mutually-exclusive-groups/med-radioknapper/example.tsx":Bg,"../../content/examples/composed/mange-valg/radiogroup/example.tsx":Mg,"../../content/examples/composed/mange-valg/select-month/example.tsx":Vg,"../../content/examples/composed/representasjon/faa-representasjoner/example.tsx":Kg,"../../content/examples/composed/representasjon/fullt-eksempel/example.tsx":rf,"../../content/examples/composed/representasjon/mange-representasjoner/example.tsx":cf,"../../content/examples/composed/representasjon/manglende-tilgang/example.tsx":ff,"../../content/examples/composed/representasjon/tjeneste-med-krav-til-representasjonstype/example.tsx":bf,"../../content/examples/composed/representasjon/ulike-statuser/example.tsx":yf,"../../content/examples/composed/representasjon/vise-aktiv-representasjon-verge/example.tsx":Ef,"../../content/examples/composed/representasjon/vise-aktiv-representasjon-virksomhet/example.tsx":Rf,"../../content/examples/formatters/amount/desimal/example.tsx":Df,"../../content/examples/formatters/amount/engelsk/example.tsx":Lf,"../../content/examples/formatters/amount/tekst/example.tsx":If,"../../content/examples/formatters/amount/uten-desimal/example.tsx":Af,"../../content/examples/formatters/bank-account/felt/example.tsx":Hf,"../../content/examples/formatters/bank-account/tekst/example.tsx":Ff,"../../content/examples/formatters/national-identity/felt/example.tsx":Gf,"../../content/examples/formatters/national-identity/tekst/example.tsx":$f,"../../content/examples/formatters/organization/felt/example.tsx":Jf,"../../content/examples/formatters/organization/tekst/example.tsx":Xf,"../../content/examples/formatters/phone/felt/example.tsx":Zf,"../../content/examples/formatters/phone/tekst/example.tsx":Qf,"../../content/examples/pages/ekstern/layout/standard-sentrert/example.tsx":sh,"../../content/examples/pages/ekstern/standard/example.tsx":lh,"../../content/examples/pages/intern/arbeidsliste/example.tsx":ih}),vS=Object.assign({"../../content/examples/components/accordion/_order.json":dh,"../../content/examples/components/accordion/bakgrunnsfarge/example.tsx":ch,"../../content/examples/components/accordion/liten-med-venstre-ikon/example.tsx":mh,"../../content/examples/components/accordion/med-tilleggsikon/example.tsx":uh,"../../content/examples/components/accordion/standard-med-høyre-ikon/example.tsx":ph,"../../content/examples/components/accordion/størrelser/example.tsx":gh,"../../content/examples/components/accordion/størrelser/index.module.scss":fh,"../../content/examples/components/accordion/utvidet-fra-start/example.tsx":hh,"../../content/examples/components/alert/advarsel/example.tsx":vh,"../../content/examples/components/alert/fare/example.tsx":bh,"../../content/examples/components/alert/feil/example.tsx":_h,"../../content/examples/components/alert/info/example.tsx":xh,"../../content/examples/components/alert/suksess/example.tsx":kh,"../../content/examples/components/blockquote/standard/example.tsx":Sh,"../../content/examples/components/blockquote/vise-regelverk/example.tsx":yh,"../../content/examples/components/blockquote/vise-regelverk/index.module.scss":jh,"../../content/examples/components/breadcrumbs/_order.json":Th,"../../content/examples/components/breadcrumbs/ikke-kollapsbar/example.tsx":Eh,"../../content/examples/components/breadcrumbs/standard/example.tsx":Ch,"../../content/examples/components/button/_order.json":Ph,"../../content/examples/components/button/i-modal/example.tsx":Rh,"../../content/examples/components/button/i-modal/index.module.scss":wh,"../../content/examples/components/button/med-spinner/example.tsx":Dh,"../../content/examples/components/button/primær-og-sekundær/example.tsx":Nh,"../../content/examples/components/button/primær-og-sekundær/index.module.scss":Lh,"../../content/examples/components/button/som-lenke/example.tsx":Oh,"../../content/examples/components/button/variants/example.tsx":Ih,"../../content/examples/components/button/variants/index.module.scss":Bh,"../../content/examples/components/card/_order.json":Ah,"../../content/examples/components/card/fargevarianter/example.tsx":Mh,"../../content/examples/components/card/fargevarianter/index.module.scss":Hh,"../../content/examples/components/card/med-merknad/example.tsx":Vh,"../../content/examples/components/card/standard/example.tsx":Fh,"../../content/examples/components/checkbox/standard/example.tsx":zh,"../../content/examples/components/checkboxgroup/standard/example.tsx":Gh,"../../content/examples/components/chips/lukkbare/example.tsx":Kh,"../../content/examples/components/chips/med-checkmark/example.tsx":$h,"../../content/examples/components/chips/uten-checkmark/example.tsx":qh,"../../content/examples/components/combobox/_order.json":Jh,"../../content/examples/components/combobox/asynkront-søk/combobox.stories.utils.ts":Wh,"../../content/examples/components/combobox/asynkront-søk/example.tsx":Xh,"../../content/examples/components/combobox/enkeltvalg/example.tsx":Uh,"../../content/examples/components/combobox/grupperte-valg/example.tsx":Zh,"../../content/examples/components/combobox/velge-flere/example.tsx":Yh,"../../content/examples/components/datepicker/_order.json":Qh,"../../content/examples/components/datepicker/min-og-max/example.tsx":ev,"../../content/examples/components/datepicker/standard/example.tsx":nv,"../../content/examples/components/descriptionlist/_order.json":tv,"../../content/examples/components/descriptionlist/horisontal/example.tsx":av,"../../content/examples/components/descriptionlist/standard/example.tsx":rv,"../../content/examples/components/descriptionlist/uthevet-verdi/example.tsx":ov,"../../content/examples/components/divider/_order.json":sv,"../../content/examples/components/divider/dekorelement/example.tsx":lv,"../../content/examples/components/divider/dekorelement/index.module.scss":iv,"../../content/examples/components/divider/meningsbærende/example.tsx":dv,"../../content/examples/components/divider/meningsbærende/index.module.scss":cv,"../../content/examples/components/divider/standard/example.tsx":mv,"../../content/examples/components/errormessage/standard/example.tsx":uv,"../../content/examples/components/errorsummary/standard/example.tsx":pv,"../../content/examples/components/fieldset/_order.json":gv,"../../content/examples/components/fieldset/fra-og-til-dato/example.tsx":fv,"../../content/examples/components/fieldset/fra-og-til-dato/index.module.scss":hv,"../../content/examples/components/fieldset/standard/example.tsx":vv,"../../content/examples/components/fileuploader/_order.json":bv,"../../content/examples/components/fileuploader/med feil/example.tsx":_v,"../../content/examples/components/fileuploader/opplastede filer/example.tsx":xv,"../../content/examples/components/fileuploader/standard/example.tsx":kv,"../../content/examples/components/footer/komplett/example.tsx":Sv,"../../content/examples/components/footer/obligatoriske-lenker/example.tsx":yv,"../../content/examples/components/heading/_order.json":jv,"../../content/examples/components/heading/innbakt-stikktittel/example.tsx":Tv,"../../content/examples/components/heading/innbakt-stikktittel/index.module.scss":Ev,"../../content/examples/components/heading/justert-størrelse/example.tsx":Cv,"../../content/examples/components/heading/med-ikon/example.tsx":Pv,"../../content/examples/components/heading/standard/example.tsx":Rv,"../../content/examples/components/icon/størrelser/example.tsx":wv,"../../content/examples/components/icon/systemikon/example.tsx":Dv,"../../content/examples/components/icon/temaikon/example.tsx":Nv,"../../content/examples/components/iconbutton/_order.json":Lv,"../../content/examples/components/iconbutton/med-custom-icon/example.tsx":Ov,"../../content/examples/components/iconbutton/med-spinner/example.tsx":Iv,"../../content/examples/components/iconbutton/outlined-og-ikke-outlined/example.tsx":Bv,"../../content/examples/components/iconbutton/outlined-og-ikke-outlined/index.module.scss":Av,"../../content/examples/components/iconbutton/standard/example.tsx":Mv,"../../content/examples/components/iconbutton/størrelser/example.tsx":Hv,"../../content/examples/components/iconbutton/størrelser/index.module.scss":Vv,"../../content/examples/components/inlinebutton/_order.json":Fv,"../../content/examples/components/inlinebutton/ikon-til-høyre/example.tsx":zv,"../../content/examples/components/inlinebutton/med-spinner/example.tsx":Gv,"../../content/examples/components/inlinebutton/standard/example.tsx":Kv,"../../content/examples/components/inlinebutton/uten-ikon/example.tsx":$v,"../../content/examples/components/link/_order.json":qv,"../../content/examples/components/link/ekstern-lenke/example.tsx":Jv,"../../content/examples/components/link/med-ikon/example.tsx":Wv,"../../content/examples/components/link/standard/example.tsx":Xv,"../../content/examples/components/link/Åpne-i-ny-fane/example.tsx":Uv,"../../content/examples/components/linkgroup/ankerliste/example.tsx":Zv,"../../content/examples/components/linkgroup/lenkeliste/example.tsx":Yv,"../../content/examples/components/list/med-utheving/example.tsx":Qv,"../../content/examples/components/list/ordnet/example.tsx":eb,"../../content/examples/components/list/uordnet/example.tsx":nb,"../../content/examples/components/megabutton/_order.json":tb,"../../content/examples/components/megabutton/med-spinner/example.tsx":ab,"../../content/examples/components/megabutton/som-ekstern-lenke/example.tsx":rb,"../../content/examples/components/megabutton/standard/example.tsx":ob,"../../content/examples/components/modal/feilmelding/example.tsx":sb,"../../content/examples/components/modal/feilmelding/modal.module.scss":lb,"../../content/examples/components/modal/rammevariant/example.tsx":ib,"../../content/examples/components/modal/rammevariant/modal.module.scss":db,"../../content/examples/components/modal/samtykke/example.tsx":cb,"../../content/examples/components/modal/samtykke/modal.module.scss":mb,"../../content/examples/components/modal/tvungen-handling/example.tsx":ub,"../../content/examples/components/modal/tvungen-handling/modal.module.scss":pb,"../../content/examples/components/modal/ventevarsel/example.tsx":gb,"../../content/examples/components/modal/ventevarsel/modal.module.scss":fb,"../../content/examples/components/modal/ventevarsel/waitNotice.ts":hb,"../../content/examples/components/navigationtile/med-heading/example.tsx":vb,"../../content/examples/components/navigationtile/med-heading/navigationtile.module.scss":bb,"../../content/examples/components/navigationtile/med-spinner/example.tsx":_b,"../../content/examples/components/navigationtile/med-spinner/navigationtile.module.scss":xb,"../../content/examples/components/navigationtile/plassering/example.tsx":kb,"../../content/examples/components/navigationtile/plassering/navigationtile.module.scss":Sb,"../../content/examples/components/navigationtile/skjult-pilikon/example.tsx":yb,"../../content/examples/components/navigationtile/skjult-pilikon/navigationtile.module.scss":jb,"../../content/examples/components/navigationtile/størrelser/example.tsx":Tb,"../../content/examples/components/navigationtile/størrelser/navigationtile.module.scss":Eb,"../../content/examples/components/openclose/_order.json":Cb,"../../content/examples/components/openclose/høyrestilt-ikon/example.tsx":Pb,"../../content/examples/components/openclose/som-hjelpetekst/example.tsx":Rb,"../../content/examples/components/openclose/standard/example.tsx":wb,"../../content/examples/components/openclose/størrelser/example.tsx":Db,"../../content/examples/components/openclose/størrelser/openclose.module.scss":Nb,"../../content/examples/components/pagination/_order.json":Lb,"../../content/examples/components/pagination/controlled/data.ts":Ob,"../../content/examples/components/pagination/controlled/example.tsx":Ib,"../../content/examples/components/pagination/standard/example.tsx":Bb,"../../content/examples/components/pagination/uncontrolled/example.tsx":Ab,"../../content/examples/components/panel/_order.json":Mb,"../../content/examples/components/panel/custom-padding/example.tsx":Hb,"../../content/examples/components/panel/custom-padding/index.module.scss":Vb,"../../content/examples/components/panel/justert-innhold/example.tsx":Fb,"../../content/examples/components/panel/justert-innhold/index.module.scss":zb,"../../content/examples/components/panel/med bakgrunn/example.tsx":Gb,"../../content/examples/components/panel/med ramme/example.tsx":Kb,"../../content/examples/components/panel/med ramme/index.module.scss":$b,"../../content/examples/components/paragraph/i-artikkel/example.tsx":qb,"../../content/examples/components/paragraph/med-ikon/example.tsx":Jb,"../../content/examples/components/paragraph/med-lenke/example.tsx":Wb,"../../content/examples/components/paragraph/med-utheving/example.tsx":Xb,"../../content/examples/components/popover/_order.json":Ub,"../../content/examples/components/popover/controlled/example.tsx":Zb,"../../content/examples/components/popover/controlled/popover.module.scss":Yb,"../../content/examples/components/popover/farge/example.tsx":Qb,"../../content/examples/components/popover/farge/popover.module.scss":e_,"../../content/examples/components/popover/i-overskrift/example.tsx":n_,"../../content/examples/components/popover/i-overskrift/popover.module.scss":t_,"../../content/examples/components/popover/i-tabellcelle/example.tsx":a_,"../../content/examples/components/popover/i-tabellcelle/popover.module.scss":r_,"../../content/examples/components/popover/standard/example.tsx":o_,"../../content/examples/components/radiogroup/_order.json":s_,"../../content/examples/components/radiogroup/horisontal/example.tsx":l_,"../../content/examples/components/radiogroup/med-feilmelding/example.tsx":i_,"../../content/examples/components/radiogroup/read-only/example.tsx":d_,"../../content/examples/components/radiogroup/vertikal/example.tsx":c_,"../../content/examples/components/rolebanner/meg-selv/example.tsx":m_,"../../content/examples/components/rolebanner/meg-selv/rolebanner.module.scss":u_,"../../content/examples/components/rolebanner/som-andre/example.tsx":p_,"../../content/examples/components/rolepicker/standard/example.tsx":g_,"../../content/examples/components/scrolltotopbutton/standard/example.tsx":f_,"../../content/examples/components/searchfield/ikon-eller-tekst/example.tsx":h_,"../../content/examples/components/searchfield/ikon-eller-tekst/searchfield.module.scss":v_,"../../content/examples/components/searchfield/med-oppslagsmeny/example.tsx":b_,"../../content/examples/components/searchfield/størrelser/example.tsx":__,"../../content/examples/components/searchfield/størrelser/searchfield.module.scss":x_,"../../content/examples/components/select/_order.json":k_,"../../content/examples/components/select/standard/example.tsx":S_,"../../content/examples/components/spinner/farge/example.tsx":y_,"../../content/examples/components/spinner/farge/spinner.module.scss":j_,"../../content/examples/components/spinner/prosentvis-innlasting/example.tsx":T_,"../../content/examples/components/spinner/størrelse/example.tsx":E_,"../../content/examples/components/spinner/størrelse/spinner.module.scss":C_,"../../content/examples/components/spinner/title-position/example.tsx":P_,"../../content/examples/components/spinner/title-position/spinner.module.scss":R_,"../../content/examples/components/steplist/standard/example.tsx":w_,"../../content/examples/components/table/custom-ekspander-knapp/example.tsx":D_,"../../content/examples/components/table/editerbar-rad/example.tsx":N_,"../../content/examples/components/table/ekspanderbar/example.tsx":L_,"../../content/examples/components/table/legg-til-rad/example.tsx":O_,"../../content/examples/components/table/med-ikoner/example.tsx":I_,"../../content/examples/components/table/med-tomme-header-celler/example.tsx":B_,"../../content/examples/components/table/med-tomme-header-celler/table.module.scss":A_,"../../content/examples/components/table/sorterbare-kolonner/example.tsx":M_,"../../content/examples/components/table/størrelser/example.tsx":H_,"../../content/examples/components/table/velge-rader/example.tsx":V_,"../../content/examples/components/tabs/_order.json":F_,"../../content/examples/components/tabs/med-ramme/example.tsx":z_,"../../content/examples/components/tabs/med-ramme/tabs.module.scss":G_,"../../content/examples/components/tabs/multiline/example.tsx":K_,"../../content/examples/components/tabs/multiline/tabs.module.scss":$_,"../../content/examples/components/tabs/standard/example.tsx":q_,"../../content/examples/components/tabs/størrelsesvariant/example.tsx":J_,"../../content/examples/components/tabs/størrelsesvariant/tabs.module.scss":W_,"../../content/examples/components/tag/formidle-mening/example.tsx":X_,"../../content/examples/components/tag/formidle-mening/tag.module.scss":U_,"../../content/examples/components/tag/ikke-meningsbærende/example.tsx":Z_,"../../content/examples/components/tag/ikke-meningsbærende/tag.module.scss":Y_,"../../content/examples/components/tag/med-ikon/example.tsx":Q_,"../../content/examples/components/tag/med-ikon/tag.module.scss":ex,"../../content/examples/components/tag/størrelser/example.tsx":nx,"../../content/examples/components/tag/størrelser/tag.module.scss":tx,"../../content/examples/components/textarea/_order.json":ax,"../../content/examples/components/textarea/med-characterlimit/example.tsx":rx,"../../content/examples/components/textarea/standard/example.tsx":ox,"../../content/examples/components/textfield/_order.json":sx,"../../content/examples/components/textfield/formatering/example.tsx":lx,"../../content/examples/components/textfield/med-beskrivelse/example.tsx":ix,"../../content/examples/components/textfield/med-feilmelding/example.tsx":dx,"../../content/examples/components/textfield/med-hjelpetekst/example.tsx":cx,"../../content/examples/components/textfield/standard/example.tsx":mx,"../../content/examples/components/topbannerexternal/standard/example.tsx":ux,"../../content/examples/components/topbannerexternal/standard/topbannerexternal.module.scss":px,"../../content/examples/components/topbannerinternal/_order.json":gx,"../../content/examples/components/topbannerinternal/med-knapper-og-meny/example.tsx":fx,"../../content/examples/components/topbannerinternal/med-søkefelt/example.tsx":hx,"../../content/examples/components/topbannerinternal/standard/example.tsx":vx,"../../content/examples/components/wordinfo/standard/example.tsx":bx,"../../content/examples/composed/datoer/besoksdato/example.tsx":_x,"../../content/examples/composed/datoer/datoOgTid/DatoOgTid.module.scss":xx,"../../content/examples/composed/datoer/datoOgTid/example.tsx":kx,"../../content/examples/composed/datoer/fodselsdato-separatFelter/FodselsdatoSeparateFelter.module.scss":Sx,"../../content/examples/composed/datoer/fodselsdato-separatFelter/example.tsx":yx,"../../content/examples/composed/datoer/fodselsdato-textfield/FodselsdatoTextfield.module.scss":jx,"../../content/examples/composed/datoer/fodselsdato-textfield/example.tsx":Tx,"../../content/examples/composed/datoer/fraTilDato/FraTilDato.module.scss":Ex,"../../content/examples/composed/datoer/fraTilDato/example.tsx":Cx,"../../content/examples/composed/datoer/klokkeOgTidssone/KlokkeOgTidssone.module.scss":Px,"../../content/examples/composed/datoer/klokkeOgTidssone/example.tsx":Rx,"../../content/examples/composed/mange-valg/checkboxgroup-long-list/example.tsx":wx,"../../content/examples/composed/mange-valg/checkboxgroup/example.tsx":Dx,"../../content/examples/composed/mange-valg/chips-selection/example.tsx":Nx,"../../content/examples/composed/mange-valg/combobox-multiple/example.tsx":Lx,"../../content/examples/composed/mange-valg/combobox/example.tsx":Ox,"../../content/examples/composed/mange-valg/modal-selection/ModalSelection.module.scss":Ix,"../../content/examples/composed/mange-valg/modal-selection/example.tsx":Bx,"../../content/examples/composed/mange-valg/mutually-exclusive-groups/med-radioknapper/MedRadioknapper.module.scss":Ax,"../../content/examples/composed/mange-valg/mutually-exclusive-groups/med-radioknapper/example.tsx":Mx,"../../content/examples/composed/mange-valg/radiogroup/example.tsx":Hx,"../../content/examples/composed/mange-valg/select-month/example.tsx":Vx,"../../content/examples/composed/representasjon/faa-representasjoner/data.ts":Fx,"../../content/examples/composed/representasjon/faa-representasjoner/example.tsx":zx,"../../content/examples/composed/representasjon/fullt-eksempel/TopBannerExternalExample.module.scss":Gx,"../../content/examples/composed/representasjon/fullt-eksempel/data.ts":Kx,"../../content/examples/composed/representasjon/fullt-eksempel/example.tsx":$x,"../../content/examples/composed/representasjon/mange-representasjoner/data.ts":qx,"../../content/examples/composed/representasjon/mange-representasjoner/example.tsx":Jx,"../../content/examples/composed/representasjon/manglende-tilgang/data.ts":Wx,"../../content/examples/composed/representasjon/manglende-tilgang/example.tsx":Xx,"../../content/examples/composed/representasjon/tjeneste-med-krav-til-representasjonstype/data.ts":Ux,"../../content/examples/composed/representasjon/tjeneste-med-krav-til-representasjonstype/example.tsx":Zx,"../../content/examples/composed/representasjon/ulike-statuser/data.ts":Yx,"../../content/examples/composed/representasjon/ulike-statuser/example.tsx":Qx,"../../content/examples/composed/representasjon/vise-aktiv-representasjon-verge/data.ts":ek,"../../content/examples/composed/representasjon/vise-aktiv-representasjon-verge/example.tsx":nk,"../../content/examples/composed/representasjon/vise-aktiv-representasjon-virksomhet/data.ts":tk,"../../content/examples/composed/representasjon/vise-aktiv-representasjon-virksomhet/example.tsx":ak,"../../content/examples/formatters/amount/desimal/example.tsx":rk,"../../content/examples/formatters/amount/engelsk/example.tsx":ok,"../../content/examples/formatters/amount/tekst/example.tsx":sk,"../../content/examples/formatters/amount/uten-desimal/example.tsx":lk,"../../content/examples/formatters/bank-account/felt/example.tsx":ik,"../../content/examples/formatters/bank-account/tekst/example.tsx":dk,"../../content/examples/formatters/national-identity/felt/example.tsx":ck,"../../content/examples/formatters/national-identity/tekst/example.tsx":mk,"../../content/examples/formatters/organization/felt/example.tsx":uk,"../../content/examples/formatters/organization/tekst/example.tsx":pk,"../../content/examples/formatters/phone/felt/example.tsx":gk,"../../content/examples/formatters/phone/tekst/example.tsx":fk,"../../content/examples/pages/ekstern/layout/standard-sentrert/ExternalLayout.module.scss":hk,"../../content/examples/pages/ekstern/layout/standard-sentrert/example.tsx":vk,"../../content/examples/pages/ekstern/standard/example.tsx":bk,"../../content/examples/pages/intern/arbeidsliste/example.tsx":_k}),bS=Object.assign({"../../content/examples/components/accordion/_order.json":kk,"../../content/examples/components/breadcrumbs/_order.json":yk,"../../content/examples/components/button/_order.json":Tk,"../../content/examples/components/card/_order.json":Ck,"../../content/examples/components/combobox/_order.json":Rk,"../../content/examples/components/datepicker/_order.json":Dk,"../../content/examples/components/descriptionlist/_order.json":Lk,"../../content/examples/components/divider/_order.json":Ik,"../../content/examples/components/fieldset/_order.json":Ak,"../../content/examples/components/fileuploader/_order.json":Hk,"../../content/examples/components/heading/_order.json":Fk,"../../content/examples/components/iconbutton/_order.json":Gk,"../../content/examples/components/inlinebutton/_order.json":$k,"../../content/examples/components/link/_order.json":Jk,"../../content/examples/components/megabutton/_order.json":Xk,"../../content/examples/components/openclose/_order.json":Zk,"../../content/examples/components/pagination/_order.json":Qk,"../../content/examples/components/panel/_order.json":nS,"../../content/examples/components/popover/_order.json":aS,"../../content/examples/components/radiogroup/_order.json":oS,"../../content/examples/components/select/_order.json":lS,"../../content/examples/components/tabs/_order.json":dS,"../../content/examples/components/textarea/_order.json":mS,"../../content/examples/components/textfield/_order.json":pS,"../../content/examples/components/topbannerinternal/_order.json":fS}),_S=n=>bS[`${n}_order.json`]?.default??[],xS=(n,t)=>{const a=new Map(t.map((l,r)=>[l,r]));return[...n].sort((l,r)=>{const i=a.get(l),d=a.get(r);return i!==void 0&&d!==void 0?i-d:i!==void 0?-1:d!==void 0?1:l.localeCompare(r,"nb")})},Lt=n=>n.replace(/\.[^.]+$/,"").split(/[-_/]/).filter(Boolean).map(t=>t.charAt(0).toUpperCase()+t.slice(1)).join(" "),kS={css:"css",jsx:"jsx",json:"json",md:"markdown",mdx:"mdx",scss:"scss",ts:"ts",tsx:"tsx"},SS=n=>{const t=n.slice(n.lastIndexOf(".")+1);return kS[t]??"text"},yS=n=>n.split("/").filter(Boolean).at(-1)??n,lt=n=>{const t=n.split("/").filter(Boolean);return t.length===1?{isDirectChildFile:!0,segment:null}:{isDirectChildFile:!1,segment:t[0]??null}},jS=n=>{const t=n.replace(/[^A-Za-z0-9_.:-]/g,"-");return/^[A-Za-z]/.test(t)?t:`file-${t}`},TS=(n,t)=>{const a=n.filter(i=>t.includes(i.path)).map(i=>{const d=yS(i.path);return{fileName:d,key:i.path,language:SS(d),source:i.source,tabValue:jS(i.path)}}),l=a.find(i=>i.fileName==="example.tsx"),r=a.filter(i=>i!==l).sort((i,d)=>i.fileName.localeCompare(d.fileName,"nb"));return l?[l,...r]:r},Ot=(n,t,a,l,r)=>{const i=l.filter(c=>lt(c.path).isDirectChildFile);if(i.length!==1)return null;const d=r.filter(c=>lt(c.path).isDirectChildFile).map(c=>c.path);return{codeFiles:TS(r,d),entryFileName:i[0].path,key:t,label:n,urlPath:a,Component:i[0].Component}},ES=n=>Object.entries(hS).filter(([t])=>t.startsWith(n)).map(([t,a])=>({path:t.slice(n.length),Component:a.default})),CS=n=>Object.entries(vS).filter(([t])=>t.startsWith(n)).filter(([t])=>!t.endsWith("/_order.json")).map(([t,a])=>({path:t.slice(n.length),source:a})),PS=(n,t)=>Array.from(new Set([...n,...t].map(a=>lt(a.path)).filter(a=>!a.isDirectChildFile).flatMap(a=>a.segment?[a.segment]:[]))).sort((a,l)=>a.localeCompare(l,"nb")),It=(n,t)=>n.filter(a=>a.path.startsWith(`${t}/`)).map(a=>({...a,path:a.path.slice(t.length+1)})),Bt=n=>{const t=n.replace(/^\/+|\/+$/g,""),a=`../../content/examples/${t}/`,l=Lt(t.split("/").filter(Boolean).at(-1)??t),r=ES(a),i=CS(a),d=PS(r,i),c=xS(d,_S(a));if(c.length>0)return c.flatMap(p=>{const g=Ot(Lt(p),p,`${t}/${p}`,It(r,p),It(i,p));return g?[g]:[]});const m=Ot(l,t,t,r,i);return m?[m]:[]},ty=n=>{const t=n.replace(/^\/+|\/+$/g,"");if(!t)return null;const a=Bt(t);if(a.length===1&&a[0].urlPath===t)return a[0];const l=t.split("/");if(l.length<2)return null;const r=l.slice(0,-1).join("/"),i=l.at(-1);return Bt(r).find(c=>c.key===i)??null},ay=(n,t=!1)=>`/example.html?${new URLSearchParams({path:n})}${t?"#embedded":""}`,ry=n=>new URLSearchParams(n).get("path");export{Za as $,NS as A,Wa as B,VS as C,KS as D,$S as E,_n as F,Qt as G,Yt as H,qS as I,ea as J,JS as K,na as L,fe as M,Xa as N,ta as O,F as P,WS as Q,_e as R,Ne as S,o as T,XS as U,aa as V,Te as W,US as X,ra as Y,ZS as Z,oa as _,ty as a,Ua as a0,Qa as a1,Ya as a2,YS as a3,sa as a4,QS as a5,la as a6,ey as a7,ia as a8,ny as a9,da as aa,Bt as ab,ay as ac,kn as b,LS as c,OS as d,pt as e,ut as f,ry as g,IS as h,Jt as i,AS as j,at as k,BS as l,Wt as m,Ja as n,MS as o,rt as p,HS as q,bn as r,Xt as s,FS as t,Ut as u,zS as v,Zt as w,GS as x,Bn as y,gt as z};

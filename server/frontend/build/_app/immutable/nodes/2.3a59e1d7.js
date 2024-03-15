import{s as Te,n as ke,b as De,r as Ce}from"../chunks/scheduler.d91956ec.js";import{S as Le,i as Me,s as d,g as n,B as Ve,f as b,c as u,h as s,j as P,C,k as t,a as Y,x as e,D as O,A as se,m as $,n as ee,o as Ee}from"../chunks/index.936bdcd5.js";import{d as He,E as qe}from"../chunks/dayjs.min.3aff367a.js";import{t as re}from"../chunks/Toaster.svelte_svelte_type_style_lang.78b4efff.js";function Pe(h){let a,l,m,L="Date",T,i,r,v,y,g="Participant Name",c,o,p,M,S="<span>REQUIRED</span>",I,f,D,F="Participant Email",A,k,z,U,_="<span>REQUIRED</span>",E,x,V,K="Participant ID (Prolific ID)",oe,R,de,Q,be="<span>REQUIRED</span>",ue,q,j,ge="Consent Form",ce,W,xe='<a href="https://drive.google.com/file/d/1qUy-EIVPdW0N2Rzimv_E2piF3h1vOAFM/view?usp=sharing" target="_blank">Consent Form Link</a>',he,B,G,me,J,ye=`I have thoroughly read and understood the content of the consent form for the research
						study. I hereby acknowledge and agree with all the terms and conditions outlined in the
						document. I willingly consent to participate in the research and understand my rights
						and responsibilities as a participant.`,pe,X,_e="<span>REQUIRED</span>",fe,Z,we='<div><button class="flex text-sm w-full font-normal rounded-lg py-1.5 px-3 bg-blue-500 hover:bg-blue-600 text-white transition-all cursor-pointer" type="submit"><div class="">Submit</div> <div class="my-auto ml-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.925A1.5 1.5 0 005.135 9.25h6.115a.75.75 0 010 1.5H5.135a1.5 1.5 0 00-1.442 1.086l-1.414 4.926a.75.75 0 00.826.95 28.896 28.896 0 0015.293-7.154.75.75 0 000-1.115A28.897 28.897 0 003.105 2.289z"></path></svg></div></button></div>',ve,Ie;return{c(){a=n("form"),l=n("div"),m=n("label"),m.textContent=L,T=d(),i=n("input"),r=d(),v=n("div"),y=n("label"),y.textContent=g,c=d(),o=n("input"),p=d(),M=n("div"),M.innerHTML=S,I=d(),f=n("div"),D=n("label"),D.textContent=F,A=d(),k=n("input"),z=d(),U=n("div"),U.innerHTML=_,E=d(),x=n("div"),V=n("label"),V.textContent=K,oe=d(),R=n("input"),de=d(),Q=n("div"),Q.innerHTML=be,ue=d(),q=n("div"),j=n("label"),j.textContent=ge,ce=d(),W=n("div"),W.innerHTML=xe,he=d(),B=n("div"),G=n("input"),me=d(),J=n("div"),J.textContent=ye,pe=d(),X=n("div"),X.innerHTML=_e,fe=d(),Z=n("div"),Z.innerHTML=we,this.h()},l(H){a=s(H,"FORM",{});var w=P(a);l=s(w,"DIV",{class:!0});var ae=P(l);m=s(ae,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),C(m)!=="svelte-6bo6bz"&&(m.textContent=L),T=u(ae),i=s(ae,"INPUT",{type:!0,id:!0,class:!0}),ae.forEach(b),r=u(w),v=s(w,"DIV",{class:!0});var te=P(v);y=s(te,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),C(y)!=="svelte-1nndf34"&&(y.textContent=g),c=u(te),o=s(te,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0,autocomplete:!0}),p=u(te),M=s(te,"DIV",{class:!0,"data-svelte-h":!0}),C(M)!=="svelte-fhtnna"&&(M.innerHTML=S),te.forEach(b),I=u(w),f=s(w,"DIV",{class:!0});var le=P(f);D=s(le,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),C(D)!=="svelte-t7hyya"&&(D.textContent=F),A=u(le),k=s(le,"INPUT",{type:!0,id:!0,class:!0,placeholder:!0,autocomplete:!0}),z=u(le),U=s(le,"DIV",{class:!0,"data-svelte-h":!0}),C(U)!=="svelte-fhtnna"&&(U.innerHTML=_),le.forEach(b),E=u(w),x=s(w,"DIV",{class:!0});var ne=P(x);V=s(ne,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),C(V)!=="svelte-1la1455"&&(V.textContent=K),oe=u(ne),R=s(ne,"INPUT",{type:!0,class:!0,placeholder:!0}),de=u(ne),Q=s(ne,"DIV",{class:!0,"data-svelte-h":!0}),C(Q)!=="svelte-fhtnna"&&(Q.innerHTML=be),ne.forEach(b),ue=u(w),q=s(w,"DIV",{class:!0});var N=P(q);j=s(N,"LABEL",{for:!0,class:!0,"data-svelte-h":!0}),C(j)!=="svelte-1r4a0h"&&(j.textContent=ge),ce=u(N),W=s(N,"DIV",{class:!0,"data-svelte-h":!0}),C(W)!=="svelte-1p4lokl"&&(W.innerHTML=xe),he=u(N),B=s(N,"DIV",{class:!0});var ie=P(B);G=s(ie,"INPUT",{type:!0,class:!0}),me=u(ie),J=s(ie,"DIV",{class:!0,"data-svelte-h":!0}),C(J)!=="svelte-7mlsla"&&(J.textContent=ye),ie.forEach(b),pe=u(N),X=s(N,"DIV",{class:!0,"data-svelte-h":!0}),C(X)!=="svelte-fhtnna"&&(X.innerHTML=_e),N.forEach(b),fe=u(w),Z=s(w,"DIV",{class:!0,"data-svelte-h":!0}),C(Z)!=="svelte-11n2baq"&&(Z.innerHTML=we),w.forEach(b),this.h()},h(){t(m,"for","date"),t(m,"class","block mb-2 text-sm text-gray-900"),i.disabled=!0,t(i,"type","date"),t(i,"id","date"),t(i,"class","bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500 disabled:bg-gray-200 block w-full p-3"),i.required=!0,t(l,"class","my-6"),t(y,"for","name"),t(y,"class","block mb-2 text-sm text-gray-900"),t(o,"type","text"),t(o,"id","name"),t(o,"class","bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500 disabled:bg-gray-200 block w-full p-3"),t(o,"placeholder","Your full name"),o.required=!0,t(o,"autocomplete","name"),t(M,"class","mt-2 text-xs text-gray-500 text-right"),t(v,"class","my-6"),t(D,"for","email"),t(D,"class","block mb-2 text-sm text-gray-900"),t(k,"type","email"),t(k,"id","email"),t(k,"class","bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500 disabled:bg-gray-200 block w-full p-3"),t(k,"placeholder","Your email address"),k.required=!0,t(k,"autocomplete","email"),t(U,"class","mt-2 text-xs text-gray-500 text-right"),t(f,"class","my-6"),t(V,"for","name"),t(V,"class","block mb-2 text-sm text-gray-900"),t(R,"type","text"),t(R,"class","bg-gray-50 border border-gray-100 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 disabled:text-gray-500 disabled:bg-gray-200 block w-full p-3"),t(R,"placeholder","Your participant ID"),R.required=!0,t(Q,"class","mt-2 text-xs text-gray-500 text-right"),t(x,"class","my-6"),t(j,"for","email"),t(j,"class","block mb-2 text-sm text-gray-900"),t(W,"class","text-sm text-purple-900 underline"),t(G,"type","checkbox"),t(G,"class","w-4 h-4 mt-1.5 mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"),G.required=!0,t(J,"class","mt-1"),t(B,"class","flex text-sm text-gray-600"),t(X,"class","mt-2 text-xs text-gray-500 text-right"),t(q,"class","my-6"),t(Z,"class","flex justify-end my-6")},m(H,w){Y(H,a,w),e(a,l),e(l,m),e(l,T),e(l,i),O(i,h[3].date),e(a,r),e(a,v),e(v,y),e(v,c),e(v,o),O(o,h[3].name),e(v,p),e(v,M),e(a,I),e(a,f),e(f,D),e(f,A),e(f,k),O(k,h[3].email),e(f,z),e(f,U),e(a,E),e(a,x),e(x,V),e(x,oe),e(x,R),O(R,h[3].externalId),e(x,de),e(x,Q),e(a,ue),e(a,q),e(q,j),e(q,ce),e(q,W),e(q,he),e(q,B),e(B,G),h[11](G),e(B,me),e(B,J),e(q,pe),e(q,X),e(a,fe),e(a,Z),ve||(Ie=[se(i,"input",h[7]),se(o,"input",h[8]),se(k,"input",h[9]),se(R,"input",h[10]),se(a,"submit",h[5])],ve=!0)},p(H,w){w&8&&O(i,H[3].date),w&8&&o.value!==H[3].name&&O(o,H[3].name),w&8&&k.value!==H[3].email&&O(k,H[3].email),w&8&&R.value!==H[3].externalId&&O(R,H[3].externalId)},d(H){H&&b(a),h[11](null),ve=!1,Ce(Ie)}}}function Ae(h){let a,l,m,L,T,i,r,v,y,g,c,o,p,M,S,I,f,D,F,A,k=`<div class="text-xl text-gray-600 font-semibold">Intervention Set-up Instructions</div> <div class="mt-2 text-sm text-gray-600 break-words"><a class="underline" href="https://drive.google.com/file/d/1eb6Xb25-2LV54AeiHnM37xRnm-cEAMWy/view?usp=drive_link" target="_blank">Click here for a video tutorial outlining the steps below</a></div> <div class="mt-2 text-sm text-gray-700 break-words"><li>Delete the Tik Tok app from your phone.</li> <li><a href="https://play.google.com/store/apps/details?id=com.kiwibrowser.browser" class="underline">Download and install the Kiwi Browser from the Google Play Store.</a></li> <li>On your phone, download the crx file which includes all of the extension contents from
					this website by submitting your email address above.</li> <li>Open the Kiwi Browser on your Android phone.</li> <li>Tap on the three vertical dots in the top-right corner to open the menu. Select
					&quot;Extensions&quot; from the menu. In the Extensions menu, enable &quot;Developer mode&quot; by toggling
					the switch.</li> <li>Tap on &quot;+ (from .zip/.crx/.user.js)&quot; and navigate to the folder where you downloaded the
					extension. Select the crx extension file and tap &quot;OK&quot; to install it.</li> <li>The extension should now be installed and visible in the Extensions menu.</li> <li>Open up the <a href="https://tiktok.com/" class="underline">Tik Tok website</a> , and a pre-study
					survey will be automatically opened. Complete this survey, and you will have officially begun
					the study!</li> <li>At this point, feel free to use the Kiwi browser with Tik Tok open as if it is the Tik Tok
					application itself. While you use Tik Tok, we will be gathering usage data for us to
					analyze after the study has been completed.</li></div>`,z,U;return{c(){a=n("div"),l=n("div"),m=$("Thanks for signing up! "),L=n("br"),T=d(),i=n("div"),r=$("You've been assigned to the '"),v=$(h[0]),y=$("' intervention. 🎉"),g=d(),c=n("br"),o=d(),p=n("div"),M=$("Download "),S=$(h[0]),I=$(" Intervention"),f=d(),D=n("hr"),F=d(),A=n("div"),A.innerHTML=k,this.h()},l(_){a=s(_,"DIV",{class:!0});var E=P(a);l=s(E,"DIV",{class:!0});var x=P(l);m=ee(x,"Thanks for signing up! "),L=s(x,"BR",{}),T=u(x),i=s(x,"DIV",{class:!0});var V=P(i);r=ee(V,"You've been assigned to the '"),v=ee(V,h[0]),y=ee(V,"' intervention. 🎉"),V.forEach(b),g=u(x),c=s(x,"BR",{}),o=u(x),p=s(x,"DIV",{class:!0});var K=P(p);M=ee(K,"Download "),S=ee(K,h[0]),I=ee(K," Intervention"),K.forEach(b),x.forEach(b),E.forEach(b),f=u(_),D=s(_,"HR",{class:!0}),F=u(_),A=s(_,"DIV",{"data-svelte-h":!0}),C(A)!=="svelte-xdimux"&&(A.innerHTML=k),this.h()},h(){t(i,"class",""),t(p,"class","mb-3 text-sm text-center font-semibold w-full rounded-lg py-4 px-5 text-green-800 bg-green-100 hover:bg-green-300 transition-all cursor-pointer"),t(l,"class","text-center text-gray-700 text-2xl font-semibold"),t(a,"class","my-6"),t(D,"class","my-6")},m(_,E){Y(_,a,E),e(a,l),e(l,m),e(l,L),e(l,T),e(l,i),e(i,r),e(i,v),e(i,y),e(l,g),e(l,c),e(l,o),e(l,p),e(p,M),e(p,S),e(p,I),Y(_,f,E),Y(_,D,E),Y(_,F,E),Y(_,A,E),z||(U=se(p,"click",h[6]),z=!0)},p(_,E){E&1&&Ee(v,_[0]),E&1&&Ee(S,_[0])},d(_){_&&(b(a),b(f),b(D),b(F),b(A)),z=!1,U()}}}function Re(h){let a,l,m,L=`<div class="flex justify-center"><img src="/sfu.png" alt="sfu logo"/></div> <div class="text-xl text-gray-600 font-semibold">Participate in a Study!</div> <div><div class="mb-5 text-sm text-gray-600 break-words">Comparing Invisible Interventions with Empowering Interventions: How Can Reduced Visibility
				or Enhanced Agency allow Users to Take Control of their Social Media Usage?</div></div>`,T,i,r;function v(c,o){return c[1]?Ae:Pe}let y=v(h),g=y(h);return{c(){a=d(),l=n("div"),m=n("div"),m.innerHTML=L,T=d(),i=n("hr"),r=d(),g.c(),this.h()},l(c){Ve("svelte-159hmbj",document.head).forEach(b),a=u(c),l=s(c,"DIV",{class:!0});var p=P(l);m=s(p,"DIV",{class:!0,"data-svelte-h":!0}),C(m)!=="svelte-ewvu88"&&(m.innerHTML=L),T=u(p),i=s(p,"HR",{class:!0}),r=u(p),g.l(p),p.forEach(b),this.h()},h(){document.title="Invisible Interventions | SFU",t(m,"class",""),t(i,"class","my-6"),t(l,"class","mx-4 mb-20")},m(c,o){Y(c,a,o),Y(c,l,o),e(l,m),e(l,T),e(l,i),e(l,r),g.m(l,null)},p(c,[o]){y===(y=v(c))&&g?g.p(c,o):(g.d(1),g=y(c),g&&(g.c(),g.m(l,null)))},i:ke,o:ke,d(c){c&&(b(a),b(l)),g.d()}}}function Ue(h,a,l){const m=["gradual-grayscale","time-limit","tap-to-scroll","vibration-scroll","shake-to-continue"];let L="",T=!1,i=null,r={date:He().format("YYYY-MM-DD"),name:"",email:"",externalId:""};const v=(I="force-login")=>{window.open(`https://github.com/tjbck/invisible-interventions/raw/main/extensions/_crx/${I}.crx`,"_self"),re.success('Add the extension by tapping on the three vertical dots in the top-right corner to open the menu and selecting "Extensions".',{duration:1e4})},y=async()=>{if(console.log(i),i.checked)if(r.email!==""&&r.name!==""){const I=await fetch(`${qe}/tracking/users/signup`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({date:r.date,email:r.email,name:r.name,external_id:r.externalId})}).then(async f=>{if(!f.ok)throw await f.json();return await f.json()}).catch(f=>(console.log(f),re.error(f.detail),null));I&&I.id!==void 0&&(l(1,T=!0),l(0,L=m[I.id%5])),console.log(r)}else re.error("Please complete all required form inputs.");else re.error("Please consent to the consent form.")},g=()=>{v(L)};function c(){r.date=this.value,l(3,r)}function o(){r.name=this.value,l(3,r)}function p(){r.email=this.value,l(3,r)}function M(){r.externalId=this.value,l(3,r)}function S(I){De[I?"unshift":"push"](()=>{i=I,l(2,i)})}return[L,T,i,r,v,y,g,c,o,p,M,S]}class Oe extends Le{constructor(a){super(),Me(this,a,Ue,Re,Te,{})}}export{Oe as component};
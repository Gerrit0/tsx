var C=Object.defineProperty;var a=(e,s)=>C(e,"name",{value:s,configurable:!0});import{r as I}from"./get-pipe-path-BHW2eJdv.mjs";import u from"node:module";import h from"node:path";import{fileURLToPath as S}from"node:url";import{parseTsconfig as W,getTsconfig as J,createFilesMatcher as Q,createPathsMatcher as k}from"get-tsconfig";import z from"node:fs";import{b as B,i as G,a as H}from"./index-BQiEz0On.mjs";import{p as R}from"./client-BQVF1NaW.mjs";const P=Object.create(null);P[".js"]=[".ts",".tsx",".js",".jsx"],P[".jsx"]=[".tsx",".ts",".jsx",".js"],P[".cjs"]=[".cts"],P[".mjs"]=[".mts"];const M=a(e=>{const[s,t]=e.split("?"),r=h.extname(s),c=P[r];if(!c)return;const o=s.slice(0,-r.length);return c.map(n=>o+n+(t?`?${t}`:""))},"mapTsExtensions"),X=a(e=>{const s=e.indexOf(":");if(s!==-1)return e.slice(0,s)},"getScheme"),T=a(e=>e[0]==="."&&(e[1]==="/"||e[1]==="."||e[2]==="/"),"isRelativePath"),K=a(e=>T(e)||h.isAbsolute(e),"isUnixPath"),V=a(e=>{if(K(e))return!0;const s=X(e);return s&&s!=="node"},"requestAcceptsQuery"),U="file://",w=/\.([cm]?ts|[tj]sx)($|\?)/,Y=/\.json($|\?)/,Z=/\/(?:$|\?)/,q=/^(?:@[^/]+\/)?[^/]+$/;let _,y,E=!1;const L=a(e=>{let s=null;if(e){const t=h.resolve(e);s={path:t,config:W(t)}}else{try{s=J()}catch{}if(!s)return}_=Q(s),y=k(s),E=s?.config.compilerOptions?.allowJs??!1},"loadTsconfig"),b=a(e=>Array.from(e).length>0?`?${e.toString()}`:"","urlSearchParamsStringify"),$=[".ts",".tsx",".jsx"],F=a((e,s)=>{for(const t of $)try{return e(s+t)}catch{}},"tryExtensions"),ee=a(e=>s=>{try{return e(s)}catch(t){const r=t;if(r.code==="MODULE_NOT_FOUND"){const c=F(e,s)||F(e,`${s}${h.sep}index`);if(c)return c}throw r}},"createImplicitResolver"),se=`${h.sep}node_modules${h.sep}`,N=a(e=>{if(!e.startsWith("data:text/javascript,"))return e;const s=e.indexOf("?");if(s===-1)return e;const r=new URLSearchParams(e.slice(s+1)).get("filePath");return r&&(u._cache[r]=u._cache[e],delete u._cache[e],e=r),e},"interopCjsExports"),j=a((e,s,t)=>{if(!(t?.filename&&w.test(t.filename))&&!E)return;const r=M(s);if(r)for(const c of r)try{return e(c)}catch(o){const{code:n}=o;if(n!=="MODULE_NOT_FOUND"&&n!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw o}},"resolveTsFilename"),te=a((e,s,t)=>{if(e.startsWith(U)&&(e=S(e)),y&&!T(e)&&!s?.filename?.includes(se)){const c=y(e);for(const o of c){const n=j(t,o,s);if(n)return n;try{return t(o)}catch{}}}const r=j(t,e,s);if(r)return r;try{return t(e)}catch(c){const o=c;if(o.code==="MODULE_NOT_FOUND"&&typeof o.path=="string"&&o.path.endsWith(`${h.sep}package.json`)){const n=o.message.match(/^Cannot find module '([^']+)'$/);if(n){const m=n[1],l=j(t,m,s);if(l)return l}const i=o.message.match(/^Cannot find module '([^']+)'. Please verify that the package.json has a valid "main" entry$/);if(i){const m=i[1],l=j(t,m,s);if(l)return l}}throw o}},"resolveRequest"),ne=a((e,s)=>(t,r,c,o)=>{let n=a(d=>e(d,r,c,o),"resolve");s&&(n=ee(n)),t=N(t);const i=t.split("?"),m=new URLSearchParams(i[1]);if(r?.filename){const x=new URLSearchParams(r.filename.split("?")[1]).get("namespace");x&&m.append("namespace",x)}if((m.get("namespace")??void 0)!==s)return n(t);let l=te(i[0],r,n);return h.isAbsolute(l)&&(l+=b(m)),l},"createResolveFilename"),re=`
//# sourceMappingURL=data:application/json;base64,`,A=a(()=>process.sourceMapsEnabled??!0,"shouldApplySourceMap"),v=a(({code:e,map:s})=>e+re+Buffer.from(JSON.stringify(s),"utf8").toString("base64"),"inlineSourceMap"),oe=[".cts",".mts",".ts",".tsx",".jsx"],ae=[".js",".cjs",".mjs"],ce=a((e,s)=>{const t=Object.assign(Object.create(null),e),r=t[".js"],c=a((o,n)=>{const[i,m]=n.split("?");if((new URLSearchParams(m).get("namespace")??void 0)!==s)return r(o,i);R?.send&&R.send({type:"dependency",path:i});const d=oe.some(f=>i.endsWith(f)),x=ae.some(f=>i.endsWith(f));if(!d&&!x)return r(o,i);let p=z.readFileSync(i,"utf8");if(i.endsWith(".cjs")){const f=B(n,p);f&&(p=A()?v(f):f.code)}else if(d||G(p)){const f=H(p,n,{tsconfigRaw:_?.(i)});p=A()?v(f):f.code}o._compile(p,i)},"transformer");t[".js"]=c;for(const o of $){const n=Object.getOwnPropertyDescriptor(t,o);Object.defineProperty(t,o,{value:c,enumerable:n?.enumerable||!s})}return Object.defineProperty(t,".mjs",{value:c,enumerable:!1}),t},"createExtensions"),D=a((e,s)=>{if(!s)throw new Error("The current file path (__filename or import.meta.url) must be provided in the second argument of tsx.require()");return(typeof s=="string"&&s.startsWith("file://")||s instanceof URL)&&(s=S(s)),h.resolve(h.dirname(s),e)},"resolveContext"),ie=a(e=>{const{sourceMapsEnabled:s}=process,{_extensions:t,_resolveFilename:r}=u;L(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0);const c=ne(r,e?.namespace);u._resolveFilename=c;const o=ce(u._extensions,e?.namespace);u._extensions=o;const n=a(()=>{s===!1&&process.setSourceMapsEnabled(!1),u._extensions=t,u._resolveFilename=r},"unregister");if(e?.namespace){const i=a((l,d)=>{const x=D(l,d),[p,f]=x.split("?"),g=new URLSearchParams(f);return e.namespace&&g.set("namespace",e.namespace),I(p+b(g))},"scopedRequire");n.require=i;const m=a((l,d,x)=>{const p=D(l,d),[f,g]=p.split("?"),O=new URLSearchParams(g);return e.namespace&&O.set("namespace",e.namespace),c(f+b(O),module,!1,x)},"scopedResolve");n.resolve=m,n.unregister=n}return n},"register");export{Y as a,v as b,V as c,Z as d,q as e,_ as f,E as g,U as h,N as i,y as j,L as l,M as m,ie as r,w as t};

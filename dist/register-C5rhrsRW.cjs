"use strict";var F=Object.defineProperty;var o=(e,s)=>F(e,"name",{value:s,configurable:!0});var C=require("./get-pipe-path-BoR10qr8.cjs"),d=require("node:module"),h=require("node:path"),O=require("node:url"),y=require("get-tsconfig"),J=require("node:fs"),j=require("./index-CoHsQGpm.cjs"),S=require("./client-D6NvIMSC.cjs");const x=Object.create(null);x[".js"]=[".ts",".tsx",".js",".jsx"],x[".jsx"]=[".tsx",".ts",".jsx",".js"],x[".cjs"]=[".cts"],x[".mjs"]=[".mts"];const T=o(e=>{const[s,t]=e.split("?"),r=h.extname(s),c=x[r];if(!c)return;const a=s.slice(0,-r.length);return c.map(n=>a+n+(t?`?${t}`:""))},"mapTsExtensions"),I=o(e=>{const s=e.indexOf(":");if(s!==-1)return e.slice(0,s)},"getScheme"),b=o(e=>e[0]==="."&&(e[1]==="/"||e[1]==="."||e[2]==="/"),"isRelativePath"),W=o(e=>b(e)||h.isAbsolute(e),"isUnixPath"),Q=o(e=>{if(W(e))return!0;const s=I(e);return s&&s!=="node"},"requestAcceptsQuery"),R="file://",U=/\.([cm]?ts|[tj]sx)($|\?)/,k=/\.json($|\?)/,B=/\/(?:$|\?)/,z=/^(?:@[^/]+\/)?[^/]+$/;exports.fileMatcher=void 0,exports.tsconfigPathsMatcher=void 0,exports.allowJs=!1;const w=o(e=>{let s=null;if(e){const t=h.resolve(e);s={path:t,config:y.parseTsconfig(t)}}else{try{s=y.getTsconfig()}catch{}if(!s)return}exports.fileMatcher=y.createFilesMatcher(s),exports.tsconfigPathsMatcher=y.createPathsMatcher(s),exports.allowJs=s?.config.compilerOptions?.allowJs??!1},"loadTsconfig"),E=o(e=>Array.from(e).length>0?`?${e.toString()}`:"","urlSearchParamsStringify"),L=[".ts",".tsx",".jsx"],$=o((e,s)=>{for(const t of L)try{return e(s+t)}catch{}},"tryExtensions"),G=o(e=>s=>{try{return e(s)}catch(t){const r=t;if(r.code==="MODULE_NOT_FOUND"){const c=$(e,s)||$(e,`${s}${h.sep}index`);if(c)return c}throw r}},"createImplicitResolver"),H=`${h.sep}node_modules${h.sep}`,N=o(e=>{if(!e.startsWith("data:text/javascript,"))return e;const s=e.indexOf("?");if(s===-1)return e;const r=new URLSearchParams(e.slice(s+1)).get("filePath");return r&&(d._cache[r]=d._cache[e],delete d._cache[e],e=r),e},"interopCjsExports"),v=o((e,s,t)=>{if(!(t?.filename&&U.test(t.filename))&&!exports.allowJs)return;const r=T(s);if(r)for(const c of r)try{return e(c)}catch(a){const{code:n}=a;if(n!=="MODULE_NOT_FOUND"&&n!=="ERR_PACKAGE_PATH_NOT_EXPORTED")throw a}},"resolveTsFilename"),X=o((e,s,t)=>{if(e.startsWith(R)&&(e=O.fileURLToPath(e)),exports.tsconfigPathsMatcher&&!b(e)&&!s?.filename?.includes(H)){const c=exports.tsconfigPathsMatcher(e);for(const a of c){const n=v(t,a,s);if(n)return n;try{return t(a)}catch{}}}const r=v(t,e,s);if(r)return r;try{return t(e)}catch(c){const a=c;if(a.code==="MODULE_NOT_FOUND"&&typeof a.path=="string"&&a.path.endsWith(`${h.sep}package.json`)){const n=a.message.match(/^Cannot find module '([^']+)'$/);if(n){const m=n[1],l=v(t,m,s);if(l)return l}const i=a.message.match(/^Cannot find module '([^']+)'. Please verify that the package.json has a valid "main" entry$/);if(i){const m=i[1],l=v(t,m,s);if(l)return l}}throw a}},"resolveRequest"),K=o((e,s)=>(t,r,c,a)=>{let n=o(u=>e(u,r,c,a),"resolve");s&&(n=G(n)),t=N(t);const i=t.split("?"),m=new URLSearchParams(i[1]);if(r?.filename){const P=new URLSearchParams(r.filename.split("?")[1]).get("namespace");P&&m.append("namespace",P)}if((m.get("namespace")??void 0)!==s)return n(t);let l=X(i[0],r,n);return h.isAbsolute(l)&&(l+=E(m)),l},"createResolveFilename"),V=`
//# sourceMappingURL=data:application/json;base64,`,A=o(()=>process.sourceMapsEnabled??!0,"shouldApplySourceMap"),_=o(({code:e,map:s})=>e+V+Buffer.from(JSON.stringify(s),"utf8").toString("base64"),"inlineSourceMap"),Y=[".cts",".mts",".ts",".tsx",".jsx"],Z=[".js",".cjs",".mjs"],q=o((e,s)=>{const t=Object.assign(Object.create(null),e),r=t[".js"],c=o((a,n)=>{const[i,m]=n.split("?");if((new URLSearchParams(m).get("namespace")??void 0)!==s)return r(a,i);S.parent?.send&&S.parent.send({type:"dependency",path:i});const u=Y.some(f=>i.endsWith(f)),P=Z.some(f=>i.endsWith(f));if(!u&&!P)return r(a,i);let p=J.readFileSync(i,"utf8");if(i.endsWith(".cjs")){const f=j.transformDynamicImport(n,p);f&&(p=A()?_(f):f.code)}else if(u||j.isESM(p)){const f=j.transformSync(p,n,{tsconfigRaw:exports.fileMatcher?.(i)});p=A()?_(f):f.code}a._compile(p,i)},"transformer");t[".js"]=c;for(const a of L){const n=Object.getOwnPropertyDescriptor(t,a);Object.defineProperty(t,a,{value:c,enumerable:n?.enumerable||!s})}return Object.defineProperty(t,".mjs",{value:c,enumerable:!1}),t},"createExtensions"),D=o((e,s)=>{if(!s)throw new Error("The current file path (__filename or import.meta.url) must be provided in the second argument of tsx.require()");return(typeof s=="string"&&s.startsWith("file://")||s instanceof URL)&&(s=O.fileURLToPath(s)),h.resolve(h.dirname(s),e)},"resolveContext"),ee=o(e=>{const{sourceMapsEnabled:s}=process,{_extensions:t,_resolveFilename:r}=d;w(process.env.TSX_TSCONFIG_PATH),process.setSourceMapsEnabled(!0);const c=K(r,e?.namespace);d._resolveFilename=c;const a=q(d._extensions,e?.namespace);d._extensions=a;const n=o(()=>{s===!1&&process.setSourceMapsEnabled(!1),d._extensions=t,d._resolveFilename=r},"unregister");if(e?.namespace){const i=o((l,u)=>{const P=D(l,u),[p,f]=P.split("?"),g=new URLSearchParams(f);return e.namespace&&g.set("namespace",e.namespace),C.require(p+E(g))},"scopedRequire");n.require=i;const m=o((l,u,P)=>{const p=D(l,u),[f,g]=p.split("?"),M=new URLSearchParams(g);return e.namespace&&M.set("namespace",e.namespace),c(f+E(M),module,!1,P)},"scopedResolve");n.resolve=m,n.unregister=n}return n},"register");exports.fileUrlPrefix=R,exports.inlineSourceMap=_,exports.interopCjsExports=N,exports.isBarePackageName=z,exports.isDirectoryPattern=B,exports.isJsonPattern=k,exports.loadTsconfig=w,exports.mapTsExtensions=T,exports.register=ee,exports.requestAcceptsQuery=Q,exports.tsExtensionsPattern=U;

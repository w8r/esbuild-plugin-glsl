/**
 * esbuild-plugin-glsl v1.1.0 build Mon Sep 19 2022
 * https://github.com/vanruesc/esbuild-plugin-glsl
 * Copyright 2022 Raoul van Rüschen
 * @license Zlib
 */
import*as g from"fs";import*as D from"util";var i=new Set(["x","y","z","w","r","g","b","a","s","t","xy"]),p=new Set(["attribute","uniform","varying","layout","centroid","flat","smooth","noperspective","patch","sample","subroutine","in","out","inout","invariant","discard","mat2","mat3","mat4","dmat2","dmat3","dmat4","mat2x2","mat2x3","mat2x4","dmat2x2","dmat2x3","dmat2x4","mat3x2","mat3x3","mat3x4","dmat3x2","dmat3x3","dmat3x4","mat4x2","mat4x3","mat4x4","dmat4x2","dmat4x3","dmat4x4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","dvec2","dvec3","dvec4","uvec2","uvec3","uvec4","lowp","mediump","highp","precision","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","samplerCubeShadow","sampler1DArray","sampler2DArray","sampler1DArrayShadow","sampler2DArrayShadow","isampler1D","isampler2D","isampler3D","isamplerCube","isampler1DArray","isampler2DArray","usampler1D","usampler2D","usampler3D","usamplerCube","usampler1DArray","usampler2DArray","sampler2DRect","sampler2DRectShadow","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","samplerCubeArray","samplerCubeArrayShadow","isamplerCubeArray","usamplerCubeArray","auto","if","break","int","case","long","char","register","continue","return","default","short","do","sizeof","double","static","else","struct","entry","switch","extern","typedef","float","union","for","unsigned","goto","while","enum","void","const","signed","volatile","byte","ushort","ubyte","define","bool","endif","floor","pow","mix","sin","cos","tan","asin","acos","atan","exp","log","sqrt","main","abs","sign","ceil","fract","mod","min","clamp","max","step","smoothstep","length","distance","dot","cross","normalize","faceforward","reflect","refract","texture2D","true","false"]);var x="a".charCodeAt(0),h=0;function u(){let e="",r=++h;do e=String.fromCharCode(x+(r-1)%26)+e,r=(r-1)/26|0;while(r!==0);return c(e)&&(e=u()),e}var c=e=>p.has(e),y=e=>/^((a_|u_|gl_)|([A-Z0-9_]+$))/.test(e),S=e=>{if(e.length>4)return!1;for(let r=0;r<e.length;++r)if(!i.has(e[r]))return!1;return!0},l=new Map,b=e=>{let r=l.get(e);return l.has(e)||(c(e)||y(e)||S(e)?r=e:r=u(),l.set(e,r)),l.get(e)},f=e=>e.replace(/[a-zA-Z_]\w*/g,b);function d(e,r){let m=/[ \t]*(?:(?:\/\*[\s\S]*?\*\/)|(?:\/\/.*\n))/g,o=/\s*([{}=*,+/><&|[\]()\-!?:;])\s*/g,s=e.replace(/\r/g,"").replace(m,""),n=!1;return s=s.split(/\n+/).reduce((a,t)=>(t=t.trim().replace(/\s{2,}|\t/," "),t[0]==="#"?(n&&a.push(`
`),a.push(t,`
`),n=!1):(t=t.replace(/(else)$/m,"$1 "),t=t.replace(o,"$1"),r&&(t=f(t)),a.push(t.replace(o,"$1")),n=!0),a),[]).join(""),s.replace(/\n{2,}/g,`
`)}function L({minify:e=!1,mangle:r=!1}={}){let m=D.promisify(g.readFile);return{name:"glsl",setup(o){async function s(n){let a=await m(n.path,"utf8");return{contents:e?d(a,r):a,loader:"text"}}o.onLoad({filter:/\.(?:frag|vert|glsl|wgsl)$/},s)}}}export{L as default,L as glsl};

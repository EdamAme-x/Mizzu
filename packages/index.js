// By https://github.com/EdamAme-x/DOM-Node-Functions
"use strict";const Tags=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","applet","basefont","big","blink","center","command","content","dir","element","font","frame","frameset","image","isindex","keygen","listing","marquee","menu","menuitem","multicol","nextid","nobr","noembed","noframes","plaintext","shadow","spacer","strike","tt","xmp","acronym","bgsound","dir","frameset","noframes","tt","video","audio","button","details","dialog","summary","template","figcaption","mark","wbr",];for(let e=0;e<Tags.length;e++)globalThis[Tags[e]]=(t,...a)=>{var i;let o=document.createElement(Tags[e]);if(t)for(let r in t){if("$"===r[0]){o.addEventListener(r.slice(1),t[r]);continue}o.setAttribute(r,t[r].toString())}for(let n=0;n<a.length;n++)if("string"==typeof a[n]||"number"==typeof a[n]||"boolean"==typeof a[n]||null===a[n]||void 0===a[n])o.appendChild(document.createTextNode((null===(i=a[n])||void 0===i?void 0:i.toString())||""));else{if(void 0===a[n])return;o.appendChild(a[n])}return o};
// By https://github.com/EdamAme-x/DOM-Node-Diff
"use strict";function DOMPatcher(t,e){if(t.isEqualNode(e))return;if(t.nodeType===Node.TEXT_NODE){t.textContent!==e.textContent&&(t.textContent=e.textContent);return}if(t.tagName!==e.tagName){t.replaceWith(e);return}let l=t.attributes,r=e.attributes;for(let n=l.length-1;n>=0;n--){let a=l[n],{name:o}=a,i=r.getNamedItem(o);i?a.value!==i.value&&t.setAttribute(o,i.value):t.removeAttribute(o),r.removeNamedItem(o)}for(let u=0;u<r.length;u++){let h=r[u],{name:d,value:m}=h;t.setAttribute(d,m)}let s=t.childNodes,f=e.childNodes;for(let g=s.length-1;g>=0;g--){let N=s[g];f[g]?DOMPatcher(N,f[g]):N.remove()}for(let c=s.length;c<f.length;c++)t.appendChild(f[c])}

// div({}, ...) . DOMPatcher(RDOM, VDOM)

function DOMdispatch(dom, tree) {
    dom.appendChild(tree())

    // dom => RDOM
    // tree() => VDOM
    setInterval(() => {
        DOMPatcher(dom, tree());
    }, 1)
}
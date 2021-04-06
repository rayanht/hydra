(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{123:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(8),a=(r(0),r(278)),c={id:"internal-fb-cluster",title:"Hydra on the internet FB Cluster"},i={unversionedId:"fb/internal-fb-cluster",id:"version-1.0/fb/internal-fb-cluster",isDocsHomePage:!1,title:"Hydra on the internet FB Cluster",description:"Support for launching jobs to the AI cluster is currently still experimental and is expected to evolve over",source:"@site/versioned_docs/version-1.0/fb/ai-cluster.md",slug:"/fb/internal-fb-cluster",permalink:"/docs/fb/internal-fb-cluster",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/fb/ai-cluster.md",version:"1.0",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1617732085,formattedLastUpdatedAt:"4/6/2021"},l=[{value:"flow-cli",id:"flow-cli",children:[]}],s={toc:l};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Support for launching jobs to the AI cluster is currently still experimental and is expected to evolve over\nthe coming months."),Object(a.b)("h2",{id:"flow-cli"},"flow-cli"),Object(a.b)("p",null,"flow-cli integration is hacky at the moment.\nSee the sample f6.sample_projects.classy_hydra_project.workflow.main for details."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example run"',title:'"Example','run"':!0},'$ CFG=\'{"config": {"overrides": ["trainer=multi_gpu","trainer.max_epochs=90","+lr_scheduler=multi_step"]}}\'\n$ ENTITLEMENT=cv_images_gpu_prod\n$ TEAM=team_computer_vision\n$ WORKFLOW=f6.sample_projects.classy_hydra_project.workflow.main\n$ flow-cli canary $WORKFLOW --run-as-secure-group $TEAM --parameters-json=$CFG --entitlement $ENTITLEMENT\n')))}u.isMDXComponent=!0},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?o.a.createElement(m,i(i({ref:t},s),{},{components:r})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
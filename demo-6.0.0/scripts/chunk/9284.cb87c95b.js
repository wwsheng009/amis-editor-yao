"use strict";(self.webpackChunkamis_editor_demo=self.webpackChunkamis_editor_demo||[]).push([[9284],{9284:function(e,t,r){r.r(t),r.d(t,{gexf:function(){return a},prepareBoxplotData:function(){return p},version:function(){return d}});var a={};r.r(a),r.d(a,{parse:function(){return i}});var n=r(11147),o=r(33051);function i(e){var t;if(!(t="string"==typeof e?(new DOMParser).parseFromString(e,"text/xml"):e)||t.getElementsByTagName("parsererror").length)return null;var r=f(t,"gexf");if(!r)return null;for(var a,n=f(r,"graph"),i=(a=f(n,"attributes"))?o.map(c(a,"attribute"),(function(e){return{id:s(e,"id"),title:s(e,"title"),type:s(e,"type")}})):[],v={},p=0;p<i.length;p++)v[i[p].id]=i[p];return{nodes:l(f(n,"nodes"),v),links:u(f(n,"edges"))}}function l(e,t){return e?o.map(c(e,"node"),(function(e){var r={id:s(e,"id"),name:s(e,"label"),itemStyle:{normal:{}}},a=f(e,"viz:size"),n=f(e,"viz:position"),o=f(e,"viz:color"),i=f(e,"attvalues");if(a&&(r.symbolSize=parseFloat(s(a,"value"))),n&&(r.x=parseFloat(s(n,"x")),r.y=parseFloat(s(n,"y"))),o&&(r.itemStyle.normal.color="rgb("+[0|s(o,"r"),0|s(o,"g"),0|s(o,"b")].join(",")+")"),i){var l=c(i,"attvalue");r.attributes={};for(var u=0;u<l.length;u++){var v=l[u],p=s(v,"for"),d=s(v,"value"),g=t[p];if(g){switch(g.type){case"integer":case"long":d=parseInt(d,10);break;case"float":case"double":d=parseFloat(d);break;case"boolean":d="true"===d.toLowerCase()}r.attributes[p]=d}}}return r})):[]}function u(e){return e?o.map(c(e,"edge"),(function(e){var t={id:s(e,"id"),name:s(e,"label"),source:s(e,"source"),target:s(e,"target"),lineStyle:{normal:{}}},r=t.lineStyle.normal,a=f(e,"viz:thickness"),n=f(e,"viz:color");return a&&(r.width=parseFloat(a.getAttribute("value"))),n&&(r.color="rgb("+[0|s(n,"r"),0|s(n,"g"),0|s(n,"b")].join(",")+")"),t})):[]}function s(e,t){return e.getAttribute(t)}function f(e,t){for(var r=e.firstChild;r;){if(1===r.nodeType&&r.nodeName.toLowerCase()===t.toLowerCase())return r;r=r.nextSibling}return null}function c(e,t){for(var r=e.firstChild,a=[];r;)r.nodeName.toLowerCase()===t.toLowerCase()&&a.push(r),r=r.nextSibling;return a}function v(e,t){var r=(e.length-1)*t+1,a=Math.floor(r),n=+e[a-1],o=r-a;return o?n+o*(e[a]-n):n}function p(e,t){for(var r,a=[],n=[],o=[],i=(t=t||{}).boundIQR,l="none"===i||0===i,u=0;u<e.length;u++){o.push(u+"");var s=((r=e[u].slice()).sort((function(e,t){return e-t})),r),f=v(s,.25),c=v(s,.5),p=v(s,.75),d=s[0],g=s[s.length-1],m=(null==i?1.5:i)*(p-f),b=l?d:Math.max(d,f-m),h=l?g:Math.min(g,p+m);a.push([b,f,c,p,h]);for(var x=0;x<s.length;x++){var y=s[x];if(y<b||y>h){var w=[u,y];"vertical"===t.layout&&w.reverse(),n.push(w)}}}return{boxData:a,outliers:n,axisData:o}}var d="1.0.0";n.dataTool&&(n.dataTool.version=d,n.dataTool.gexf=a,n.dataTool.prepareBoxplotData=p)}}]);
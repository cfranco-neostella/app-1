/*! For license information please see 460.js.LICENSE.txt */
"use strict";(self.webpackChunkapp_1=self.webpackChunkapp_1||[]).push([[460],{251:function(e,r,n){var t=n(166),o=Symbol.for("react.element"),c=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,n){var t,s={},l=null,u=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(u=r.ref),r)c.call(r,t)&&!a.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:u,props:s,_owner:i.current}}r.jsx=s,r.jsxs=s},893:function(e,r,n){e.exports=n(251)},460:function(e,r,n){n.r(r);var t=n(893),o=n(404),c=n(166),i=n(846),a=function(){return a=Object.assign||function(e){for(var r,n=1,t=arguments.length;n<t;n++)for(var o in r=arguments[n])Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o]);return e},a.apply(this,arguments)};r.default=function(){var e=(0,c.useState)(0),r=e[0],n=e[1],s=(0,i.useLocation)();return(0,t.jsxs)(o.Flex,a({color:"#000",gap:"1rem",direction:"column"},{children:[(0,t.jsxs)(o.Text,{children:["Add by one each click ",(0,t.jsx)("strong",{children:"APP-1"})]}),(0,t.jsxs)(o.Text,{children:["Your click count : ",r," "]}),(0,t.jsx)(o.Button,a({onClick:function(){return n(r+1)}},{children:"Click me"})),"/"!==s.pathname&&(0,t.jsx)(o.Button,a({as:i.Link,to:"/"},{children:"Back to container"}))]}))}}}]);
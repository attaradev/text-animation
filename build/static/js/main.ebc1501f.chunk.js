(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,n){e.exports={animatedTextContainer:"AnimatedText_animatedTextContainer__2wYF6",animatedTextContent:"AnimatedText_animatedTextContent__2Dq3A",animatedTextContentClone:"AnimatedText_animatedTextContentClone__35HvU AnimatedText_animatedTextContent__2Dq3A"}},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(3),c=n.n(r),i=(n(12),n(4)),l=n(5),s=n(1),m=n.n(s),d=function(e){var t=e.textColor,n=e.overlayColor,r=e.children,c=Object(l.a)(e,["textColor","overlayColor","children"]),s=Object(a.useRef)(null),d={x:0,y:0},u=Object(a.useState)(d),x=Object(i.a)(u,2),C=x[0],T=x[1];return o.a.createElement("section",Object.assign({className:m.a.animatedTextContainer,style:{"--maskX":C.x,"--maskY":C.y},onMouseMove:function(e){e=e.nativeEvent;var t=s.current,n=e.offsetX/t.clientWidth*100,a=e.offsetY/t.clientHeight*100;T({x:n,y:a})},onMouseOut:function(){return T(d)},ref:s},c),o.a.createElement("h1",{style:{color:t},className:m.a.animatedTextContent},r),o.a.createElement("h1",{style:{color:n},className:m.a.animatedTextContentClone},r))},u=document.getElementById("root");c.a.render(o.a.createElement(function(){return o.a.createElement("div",{className:"App"},o.a.createElement(d,{textColor:"#cd122d",overlayColor:"#fdc52c"},"MIKE PERRY Y. ATTARA"))},null),u)},6:function(e,t,n){e.exports=n(15)}},[[6,2,1]]]);
//# sourceMappingURL=main.ebc1501f.chunk.js.map
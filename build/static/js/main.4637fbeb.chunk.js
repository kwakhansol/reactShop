(this.webpackJsonpshop=this.webpackJsonpshop||[]).push([[0],{12:function(t,e,o){},13:function(t,e,o){},15:function(t,e,o){"use strict";o.r(e);var i=o(1),r=o.n(i),a=o(6),s=o.n(a),c=(o(12),o(13),o(0));function n(){return Object(c.jsx)("footer",{children:Object(c.jsx)("p",{children:"\xa9 2021 Mark Lee. All rights reserved."})})}var p=r.a.createContext();function l(){var t=Object(i.useContext)(p);return{addToOrder:t.addToOrder,remove:t.remove,removeAll:t.removeAll}}function d(){return Object(i.useContext)(p).prototypes}function h(){var t=Object(i.useContext)(p).orders,e=d(),o=l(),r=o.remove,a=o.removeAll,s=Object(i.useMemo)((function(){return t.map((function(t){var o=t.id,i=t.quantity;return e.find((function(t){return t.id===o})).price*i})).reduce((function(t,e){return t+e}),0)}),[t,e]);return 0===t.length?Object(c.jsx)("aside",{children:Object(c.jsxs)("div",{className:"empty",children:[Object(c.jsx)("div",{className:"title",children:"you dont'have any orders"}),Object(c.jsx)("div",{className:"sub-title",children:"Click on a + to add an order"})]})}):Object(c.jsx)("aside",{children:Object(c.jsxs)("div",{className:"order",children:[Object(c.jsx)("div",{className:"body",children:t.map((function(t){var o=t.id,i=e.find((function(t){return t.id===o}));return Object(c.jsxs)("div",{className:"item",children:[Object(c.jsx)("div",{className:"img",children:Object(c.jsx)("video",{src:i.thumbnail})}),Object(c.jsx)("div",{className:"content",children:Object(c.jsxs)("p",{className:"title",children:[i.title," x ",t.quantity]})}),Object(c.jsxs)("div",{className:"action",children:[Object(c.jsxs)("p",{className:"price",children:["$ ",i.price*t.quantity]}),Object(c.jsx)("button",{className:"btn btn--link",onClick:function(){r(o)},children:Object(c.jsx)("i",{className:"icon icon--cross"})})]})]},o)}))}),Object(c.jsxs)("div",{className:"total",children:[Object(c.jsx)("hr",{}),Object(c.jsxs)("div",{className:"item",children:[Object(c.jsx)("div",{className:"content",children:"Total"}),Object(c.jsx)("div",{className:"action",children:Object(c.jsxs)("div",{className:"price",children:["$",s]})}),Object(c.jsx)("button",{className:"btn btn--link",onClick:a,children:Object(c.jsx)("i",{className:"icon icon--delete"})})]}),Object(c.jsx)("button",{className:"btn btn--secondary",style:{width:"100%",marginTop:10},children:"Checkout"})]})]})})}function u(){return Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"header__container",children:[Object(c.jsx)("div",{className:"title",children:"Awesome Prototypes in Shop"}),Object(c.jsx)("div",{className:"subtitle",children:"Check out what other designers have created using ProtoPie\u2014download these examples to learn exactly how they made their interactions."}),Object(c.jsx)("div",{className:"btn__area",children:Object(c.jsx)("a",{href:"https://www.protopie.io",target:"_BLANK",rel:"noreferrer",children:Object(c.jsx)("button",{children:"Try ProtoPie Yourself"})})})]})})}function m(){var t=d(),e=l().addToOrder;return Object(c.jsx)("main",{children:Object(c.jsx)("div",{className:"prototypes",children:t.map((function(t){var o=t.id,i=t.thumbnail,r=t.title,a=t.price,s=t.desc,n=t.pieUrl;return Object(c.jsxs)("div",{className:"prototype",children:[Object(c.jsx)("a",{href:n,target:"_BLANK",rel:"noreferrer",children:Object(c.jsx)("div",{style:{padding:"25px 0 33px 0"},children:Object(c.jsx)("video",{autoPlay:!0,loop:!0,playsInline:!0,className:"prototype__artwork prototype__edit",src:i,style:{objectFit:"contain"}})})}),Object(c.jsxs)("div",{className:"prototype__body",children:[Object(c.jsxs)("div",{className:"prototype__title",children:[Object(c.jsx)("div",{className:"btn btn-primary float--right",onClick:function(){e(o)},children:Object(c.jsx)("i",{className:"icon icon--plus"})}),r]}),Object(c.jsxs)("p",{className:"prototype__price",children:["$ ",a]}),Object(c.jsx)("p",{className:"prototype__desc",children:s})]})]},o)}))})})}var b=o(7),j=o(5),y=function(t){var e=t.children,o=Object(i.useState)([{id:"pp-01",title:"Kids-story",artist:"Thomas Buisson",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Kids-story_1.mp4",price:10,pieUrl:"https://cloud.protopie.io/p/8a6461ad85"},{id:"pp-02",title:"mockyapp",artist:"Ahmed Amr",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/mockyapp.mp4",price:20,pieUrl:"https://cloud.protopie.io/p/27631ac9d5"},{id:"pp-03",title:"macOS Folder Concept",artist:"Dominik Kandrav\xfd",desc:"Folder concept prototype by Dominik Kandrav\xfd.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/macOS_Folder_Concept_-_Folder_concept.mp4",price:30,pieUrl:"https://cloud.protopie.io/p/acde5ccdf9"},{id:"pp-04",title:"Translator",artist:"Tony Kim",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Translator.mp4",price:40,pieUrl:"https://cloud.protopie.io/p/b91edba11d"},{id:"pp-05",title:"In-car voice control",artist:"Tony Kim",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/In-car_voice_control.mp4",price:50,pieUrl:"https://cloud.protopie.io/p/6ec7e70d1a"},{id:"pp-06",title:"The Adventures of Proto",artist:"Richard Oldfield",desc:"Made exclusively for Protopie Playoff 2021\n                  Shout up if you get stuck!\n                  For the full experience. View in the Protopie App.\n                  #PieDay #PlayOff #ProtoPie",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/The_Adventures_of_Proto.mp4",price:60,pieUrl:"https://cloud.protopie.io/p/95ee13709f"},{id:"pp-07",title:"Sunglasses shop app",artist:"Mustafa Alabdullah",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/sunglasses_shop_app.mp4",price:70,pieUrl:"https://cloud.protopie.io/p/6f336cac8c"},{id:"pp-08",title:"Alwritey\u2014Minimalist Text Editor",artist:"Fredo Tan",desc:"This minimalist text editor prototype was made with ProtoPie by Fredo Tan.\n                  ---\n                  Inspired by Writty, a simple writing app by Carlos Yllobre. Try out Writty at https://writtyapp.com.\n                  ---\n                  ProtoPie is an interactive prototyping tool for all digital products.\n                  ---\n                  Learn more about ProtoPie at https://protopie.io.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/minimalist-text-editor.mp4",price:80,pieUrl:"https://cloud.protopie.io/p/946f88f8d3"},{id:"pp-09",title:"Voice search for TV",artist:"Tony Kim",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/TV.mp4",price:90,pieUrl:"https://cloud.protopie.io/p/60ee64cda0"},{id:"pp-10",title:"Finance App Visual Interaction 2.0",artist:"Arpit Agrawal",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Credit_Card_App.mp4",price:90,pieUrl:"https://cloud.protopie.io/p/09ce2fdf84/21?ui=true&mockup=true&touchHint=true&scaleToFit=true&cursorType=touch"},{id:"pp-11",title:"Whack-a-mole",artist:"Changmo Kang",desc:"This prototype was made with ProtoPie, the interactive prototyping tool for all digital products.",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Whack_a_mole.mp4",price:90,pieUrl:"https://cloud.protopie.io/p/ab796f897e"},{id:"pp-12",title:"Voice Note",artist:"Haerin Song",desc:"Made by Haerin Song\n                  (Soda Design)",thumbnail:"https://prototype-shop.s3.ap-northeast-2.amazonaws.com/thumbnails/Voice_note_with_sound_wave.mp4",price:90,pieUrl:"https://cloud.protopie.io/p/7a0d6567d2"}]),r=Object(j.a)(o,1)[0],a=Object(i.useState)([]),s=Object(j.a)(a,2),n=s[0],l=s[1],d=Object(i.useCallback)((function(t){l((function(e){return void 0===e.find((function(e){return e.id===t}))?[].concat(Object(b.a)(e),[{id:t,quantity:1}]):e.map((function(e){return e.id===t?{id:t,quantity:e.quantity+1}:e}))}))}),[]),h=Object(i.useCallback)((function(t){l((function(e){return e.filter((function(e){return e.id!=t}))}))}),[]),u=Object(i.useCallback)((function(){l([])}),[]);return Object(c.jsx)(p.Provider,{value:{prototypes:r,orders:n,addToOrder:d,remove:h,removeAll:u},children:e})};var O=function(){return Object(c.jsxs)(y,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(m,{}),Object(c.jsx)(h,{}),Object(c.jsx)(n,{})]})]})},f=function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,16)).then((function(e){var o=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;o(t),i(t),r(t),a(t),s(t)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(O,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.4637fbeb.chunk.js.map
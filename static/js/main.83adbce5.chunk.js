(this["webpackJsonpbrakdag-react"]=this["webpackJsonpbrakdag-react"]||[]).push([[0],{156:function(e,t,a){"use strict";a.r(t);var n=a(6),s=a.n(n),i=a(39),c=a.n(i),r=a(3),l=a(4),o=a(7),d=a(8),j=a(13),h=a(12),u=a(0),b=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).zoekOpdracht=function(){n.props.zoekOpdracht(n.state.resultaten)},n.state={updateInput:"",error:null,isLoaded:!1,erWordtGezocht:!1,resultaten:void 0,backgroundColor:"rgb(252, 251, 238)"},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){var e=this,t=this.state.updateInput;if(!0===this.state.erWordtGezocht)if(t.length>2){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({term:this.state.updateInput})};fetch("https://brakdagflask.brakdag.nl/items/zoeken",a).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,resultaten:t}),e.zoekOpdracht()}),(function(t){e.setState({isLoaded:!0,error:t})})).then(this.setState({erWordtGezocht:!1}))}else 0===t.length&&(this.setState({resultaten:void 0,isLoaded:!1,erWordtGezocht:!1}),this.zoekOpdracht())}},{key:"render",value:function(){var e=this;return Object(u.jsx)("div",{children:Object(u.jsx)("input",{placeholder:"Zoek naar nieuws",id:"zoeken",type:"text",onChange:function(t){e.setState({updateInput:t.target.value})},onKeyDown:function(t){"Enter"===t.key&&e.setState({erWordtGezocht:!0})},onBlur:function(){e.state.updateInput},onFocus:function(e){e.target.select()}})})}}]),a}(n.Component),m=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1},n}return Object(l.a)(a,[{key:"render",value:function(){function e(e){var t=e.description.split(". ",1)[0].trim();return t.length<10?t="":"."!==t.slice(-1)&&(t+="."),Object(u.jsx)("span",{children:t})}function t(e){var t=new Date(1e3*e.timestamp),a=t.getHours()+":"+("0"+t.getMinutes()).substr(-2);return Object(u.jsx)("span",{children:a})}var a=this.props.items;return Object(u.jsx)("div",{id:"wrap",children:Object(u.jsx)("ul",{className:"lijst",children:a.map((function(a){return Object(u.jsx)("li",{children:Object(u.jsxs)("ul",{className:"lijst-item",children:[Object(u.jsxs)("li",{className:"bron",children:[Object(u.jsx)(j.b,{to:"/bron/"+a.bron_id,children:Object(u.jsx)("img",{alt:a.bron_title,src:a.logo,"data-bron":a.bron_id})}),Object(u.jsx)(t,{timestamp:a.timestamp_publicatie})]}),Object(u.jsxs)("li",{className:"title",children:[Object(u.jsx)("a",{className:"title-ref",target:"blank",href:a.link,children:a.title}),Object(u.jsx)(j.b,{to:"/item/"+a.id,children:Object(u.jsx)("summary",{className:"description",children:null!==a.description&&Object(u.jsx)(e,{description:a.description})})})]})]})},a.id)}))})})}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{id:"wrap",children:Object(u.jsx)("ul",{className:"lijst",children:Object(u.jsxs)("li",{children:[Object(u.jsx)("div",{className:"lijst-item-placeholder",children:Object(u.jsx)("div",{className:"lijst-item-logo-placeholder"})}),Object(u.jsx)("div",{className:"lijst-item-placeholder-small opac-8",children:Object(u.jsx)("div",{className:"lijst-item-logo-placeholder"})}),Object(u.jsx)("div",{className:"lijst-item-placeholder opac-7",children:Object(u.jsx)("div",{className:"lijst-item-logo-placeholder"})}),Object(u.jsx)("div",{className:"lijst-item-placeholder opac-6",children:Object(u.jsx)("div",{className:"lijst-item-logo-placeholder"})}),Object(u.jsx)("div",{className:"lijst-item-placeholder-small opac-5",children:Object(u.jsx)("div",{className:"lijst-item-logo-placeholder"})}),Object(u.jsx)("div",{className:"lijst-item-placeholder opac-3",children:Object(u.jsx)("div",{className:"lijst-item-logo-placeholder"})}),Object(u.jsx)("div",{className:"lijst-item-placeholder-small opac-2",children:Object(u.jsx)("div",{className:"lijst-item-logo-placeholder"})}),Object(u.jsx)("div",{className:"lijst-item-placeholder-small opac-1",children:Object(u.jsx)("div",{className:"lijst-item-logo-placeholder"})})]})})})}}]),a}(n.Component),p=O,x=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"niet-gezocht-placeholder",children:"Doorzoek het nieuwsarchief van 2016 tot nu."})}}]),a}(n.Component),v=x,g=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"niet-gezocht-placeholder",children:"Helaas, geen resultaten."})}}]),a}(n.Component),f=g,k=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1},document.title="Zoeken - Brakdag",n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.onZoekOpdracht;return void 0===e?Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"pagina-header",children:"Zoeken"}),Object(u.jsx)(p,{}),Object(u.jsx)(v,{})]}):0===e.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"pagina-header",children:"Zoeken"}),Object(u.jsx)(p,{}),Object(u.jsx)(f,{})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{className:"pagina-header",children:["Zoekresultaten",Object(u.jsxs)("span",{className:"pagina-header-sub",children:[e.length," artikelen"]})]}),Object(u.jsx)(m,{items:e})]})}}]),a}(n.Component),N=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={beginMap:0,eindeMap:15},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.items;return Object(u.jsx)("div",{id:"wrap",className:"wrap-overflow",children:Object(u.jsx)("ul",{className:"lijst-flex",children:e.slice(this.state.beginMap,this.state.eindeMap).map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)("div",{className:"flex-item",children:[Object(u.jsx)("div",{className:"bron",children:Object(u.jsx)("img",{alt:e.bron_title,src:e.logo,"data-bron":e.bron_id})}),Object(u.jsx)("div",{className:"title",children:Object(u.jsx)("a",{target:"blank",href:e.link,children:e.title})})]})},e.id)}))})})}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.message;return Object(u.jsxs)("div",{className:"server-fout-placeholder",children:[Object(u.jsx)("i",{class:"ri-emotion-unhappy-line"}),Object(u.jsx)("h1",{children:"Brakdag is even stuk."}),Object(u.jsx)("h5",{children:e})]})}}]),a}(n.Component),D=y,L=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,resultaten:[],resultatenUitgelicht:[],resultatenAantalUitgelicht:0,todayDate:null,resultatenAantal:0,aKey:!1},document.title="Brakdag",n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Date,a=["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"][t.getDay()],n=String(t.getDate()),s=["januari","februari","maart","april","mei","juni","juli","augustus","september","oktober","november","december"][t.getMonth()];t=a+" "+n+" "+s,this.setState({todayDate:t}),fetch("https://brakdagflask.brakdag.nl/items/uitgelicht").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,resultatenUitgelicht:t,resultatenAantalUitgelicht:t.length})}),(function(t){e.setState({isLoaded:!0,error:t})})),fetch("https://brakdagflask.brakdag.nl/items").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,resultaten:t,resultatenAantal:t.length})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.resultaten,s=e.resultatenUitgelicht;return t?Object(u.jsx)("div",{children:Object(u.jsx)(D,{message:t.message})}):a?0!==s.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"pagina-header header-unstick",children:"Uitgelicht"}),Object(u.jsx)(N,{items:s}),Object(u.jsxs)("header",{className:"pagina-header",children:[this.state.todayDate,Object(u.jsxs)("span",{className:"pagina-header-sub",children:[n.length," artikelen"]})]}),Object(u.jsx)(m,{items:n})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{className:"pagina-header",children:[this.state.todayDate,Object(u.jsxs)("span",{className:"pagina-header-sub",children:[n.length," artikelen"]})]}),Object(u.jsx)(m,{items:n})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"pagina-header"}),Object(u.jsx)(p,{})]})}}]),a}(n.Component),C=a(35),M=a.n(C),w=a(36),I=a.n(w),S=a(81),z=(a(95),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"niet-gezocht-placeholder",children:"Kies een datum om het nieuws van die dag te zien."})}}]),a}(n.Component)),B=z;Object(w.registerLocale)("nl",S.a),Object(w.setDefaultLocale)("nl");var E=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).handleDateChange=function(e){var t=M()(e).format("DD-MM-YYYY");n.setState({date:t,startDate:e}),fetch("https://brakdagflask.brakdag.nl/items/datum/"+t).then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,resultaten:e})}),(function(e){n.setState({isLoaded:!0,error:e})}))},n.state={error:null,isLoaded:!1,resultaten:[],startDate:new Date},document.title="Datum - Brakdag",n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){if(void 0!==this.props.match){var e=this.props.match.params.datumId;if(M()(e,"YYYY-MM-DD").isValid()){var t=M()(e,"DD-MM-YYYY").toDate();this.handleDateChange(t)}}}},{key:"render",value:function(){return 0===this.state.resultaten.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"pagina-header-date-pick",children:Object(u.jsx)(I.a,{peekNextMonth:!0,showMonthDropdown:!0,dropdownMode:"select",minDate:new Date("01-04-2016"),placeholderText:"Kies een datum",selected:this.state.startDate,locale:"nl",dateFormat:"EEEE d MMMM yyyy",disabledKeyboardNavigation:!0,onFocus:function(e){return e.target.blur()},onChange:this.handleDateChange})}),Object(u.jsx)(p,{}),Object(u.jsx)(B,{})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"pagina-header-date-pick",children:Object(u.jsx)(I.a,{peekNextMonth:!0,showMonthDropdown:!0,dropdownMode:"select",minDate:new Date("01-04-2016"),placeholderText:"Kies een datum",selected:this.state.startDate,locale:"nl",dateFormat:"EEEE d MMMM yyyy",disabledKeyboardNavigation:!0,onFocus:function(e){return e.target.blur()},onChange:this.handleDateChange})}),Object(u.jsx)(m,{items:this.state.resultaten})]})}}]),a}(n.Component),T=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,bronTitle:null},document.title="Bron - Brakdag",n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.bronId;fetch("https://brakdagflask.brakdag.nl"+"/items/bron/".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,resultaten:t,bronTitle:0===t.length?"":t[0].bron_title})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.resultaten;return t||!a||0===n.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"pagina-header"}),Object(u.jsx)(p,{})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{className:"pagina-header",children:[this.state.bronTitle,Object(u.jsxs)("span",{className:"pagina-header-sub",children:["laatste ",n.length," artikelen"]})]}),Object(u.jsx)(m,{items:n})]})}}]),a}(n.Component),Y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).restCall=function(e){var t={method:"GET",headers:{"Content-Type":"application/json"}};fetch("https://brakdagflask.brakdag.nl"+"/items/".concat(e),t).then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,resultaatItem:e})}),(function(e){n.setState({isLoaded:!0,error:e})})),fetch("https://brakdagflask.brakdag.nl"+"/items/vergelijkbaar/".concat(e),t).then((function(e){return e.json()})).then((function(e){n.setState({isLoaded:!0,resultatenVergelijking:e})}),(function(e){n.setState({isLoaded:!0,error:e})}))},n.state={error:null,isLoaded:!1,itemId:n.props.match.params.itemId,resultatenVergelijking:[],resultaatItem:[]},document.title="Artikel - Brakdag",n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(){this.state.itemId!==this.props.match.params.itemId&&(this.restCall(this.props.match.params.itemId),this.setState({itemId:this.props.match.params.itemId}))}},{key:"componentDidMount",value:function(){this.restCall(this.state.itemId)}},{key:"selectAndCopyItemLink",value:function(){var e=document.getElementById("copy-text"),t=document.createElement("i");t.classList.add("ri-check-line"),t.classList.add("confirm-vinkje"),e.appendChild(t);var a=document.getElementById("item-link");navigator.clipboard.writeText(a.value)}},{key:"selectAll",value:function(){var e=document.getElementById("item-link");e.select(),e.setSelectionRange(0,99999)}},{key:"render",value:function(){function e(e){var t=new Date(1e3*e.timestamp),a=t.getHours()+":"+("0"+t.getMinutes()).substr(-2);return Object(u.jsx)("span",{children:a})}var t=this.state,a=t.error,n=t.isLoaded,s=t.resultaatItem,i=t.resultatenVergelijking;return a||!n||0===s.length?Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"pagina-header"}),Object(u.jsx)(p,{})]}):Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"pagina-header",children:["Artikel ",Object(u.jsxs)("span",{className:"pagina-header-sub",children:["gepubliceerd op ",function(e){var t=M.a.unix(e).format("DD-MM-YYYY");return Object(u.jsx)("span",{children:t})}(s[0].timestamp_publicatie)]})]}),Object(u.jsx)("div",{id:"wrap",children:Object(u.jsx)("ul",{className:"lijst",children:s.map((function(t){return Object(u.jsx)("li",{children:Object(u.jsxs)("ul",{className:"lijst-item",children:[Object(u.jsxs)("li",{className:"bron",children:[Object(u.jsx)(j.b,{to:"/bron/"+t.bron_id,children:Object(u.jsx)("img",{alt:t.bron_title,src:t.logo,"data-bron":t.bron_id})}),Object(u.jsx)(e,{timestamp:t.timestamp_publicatie})]}),Object(u.jsxs)("li",{className:"title",children:[Object(u.jsx)("a",{className:"title-ref",target:"blank",href:t.link,children:t.title}),Object(u.jsx)("summary",{className:"description",children:Object(u.jsx)("span",{children:t.description})})]})]})},t.id)}))})}),Object(u.jsx)("div",{id:"wrap",children:Object(u.jsxs)("div",{className:"item-action",children:[Object(u.jsx)("input",{id:"item-link",type:"text",value:"https://brakdag.nl/item/"+this.state.itemId,onFocus:this.selectAll}),Object(u.jsx)("span",{onClick:this.selectAndCopyItemLink,id:"copy-text",children:"link kopieren"})]})}),i.length>0&&Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"pagina-header",children:"Vergelijkbaar"}),Object(u.jsx)(m,{items:i})]})]})}}]),a}(n.Component),_=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,resultaten:[]},document.title="Bronnen - Brakdag",n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://brakdagflask.brakdag.nl/items/statistics",{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,resultaten:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.resultaten,a=e.isLoaded,n=e.error;return n?Object(u.jsx)("div",{children:Object(u.jsx)(D,{message:n.message})}):a?Object(u.jsxs)("div",{children:[Object(u.jsxs)("header",{className:"pagina-header",children:["Bronnen",Object(u.jsxs)("span",{className:"pagina-header-sub",children:[t.length," nieuwsbronnen"]})]}),Object(u.jsx)("div",{id:"wrap",children:Object(u.jsx)("ul",{className:"lijst",children:t.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/bron/"+e.id,children:Object(u.jsxs)("ul",{className:"lijst-item",children:[Object(u.jsx)("li",{className:"bron",children:Object(u.jsx)("img",{alt:e.bron_title,src:e.logo,"data-bron":e.bron_id})}),Object(u.jsxs)("li",{className:"title",children:[Object(u.jsx)("a",{className:"title-ref",target:"blank",href:e.link_home,children:e.title}),Object(u.jsx)("div",{className:"description",children:e.description})]}),Object(u.jsx)("li",{className:"right",children:Object(u.jsxs)("div",{className:"whats-the-count",children:[e.aantal_items," artikelen"]})})]})})},e.id)}))})})]}):Object(u.jsxs)("div",{children:[Object(u.jsx)("header",{className:"pagina-header"}),Object(u.jsx)(p,{})]})}}]),a}(n.Component),A=a(68),G=a.n(A),Z=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).setTheme=function(e){var t=e.target.id;G.a.setItem("theme",t).then((function(e){console.log("Gekozen voor "+e+".");var t=document.getElementById("root");t.removeAttribute("class"),t.classList.add(e)}))},n.state={error:null,isLoaded:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){G.a.getItem("theme").then((function(e){if(null!==e){console.log("Actuele thema is "+e+".");var t=document.getElementById("root");t.removeAttribute("class"),t.classList.add(e)}}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{id:"theme-setting",children:[Object(u.jsx)("span",{className:"theme-option",id:"theme-light",onClick:this.setTheme,children:"licht"}),Object(u.jsx)("span",{className:"theme-option",id:"theme-dark",onClick:this.setTheme,children:"donker"})]})}}]),a}(n.Component),K=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1},n}return Object(l.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return Object(u.jsxs)("footer",{id:"footer",children:[Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)(j.b,{to:"/",children:"BRAKDAG"})}),Object(u.jsx)("div",{className:"logo-tag",children:"De verzamelplek voor nieuws uit de stad Groningen."}),Object(u.jsx)("div",{className:"sitemap",children:Object(u.jsxs)("ul",{className:"sitemap",children:[Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/bronnen",children:"Bronnen"})}),Object(u.jsx)("li",{children:"\xb7"}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/datum",children:"Datum"})}),Object(u.jsx)("li",{children:"\xb7"}),Object(u.jsx)("li",{children:Object(u.jsx)(j.b,{to:"/zoeken",children:"Zoeken"})})]})}),Object(u.jsx)(Z,{})]})}}]),a}(n.Component);function U(){var e=Object(h.f)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var F=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).zoekOpdracht=function(e){n.setState({zoekResultaten:e})},n.state={zoekResultaten:void 0},n}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state.zoekResultaten;return Object(u.jsxs)(j.a,{children:[Object(u.jsx)(U,{}),Object(u.jsx)("nav",{id:"header",children:Object(u.jsxs)("ul",{className:"header-lijst",children:[Object(u.jsx)("li",{id:"header-logo",children:Object(u.jsxs)(j.b,{to:"/",children:[Object(u.jsx)("div",{id:"logo",children:"Brakdag"}),Object(u.jsx)("div",{id:"logo-small",children:"BD"})]})}),Object(u.jsx)("li",{id:"header-bron",children:Object(u.jsx)(j.b,{to:"/bronnen",children:Object(u.jsx)("div",{id:"bron-info",children:Object(u.jsx)("i",{className:"ri-newspaper-line"})})})}),Object(u.jsx)("li",{id:"header-datum",children:Object(u.jsx)(j.b,{to:"/datum",children:Object(u.jsx)("div",{id:"datum-info",children:Object(u.jsx)("i",{className:"ri-history-line"})})})}),Object(u.jsx)("li",{id:"header-zoek",children:Object(u.jsx)(j.b,{to:"/zoeken",children:Object(u.jsx)(b,{zoekOpdracht:this.zoekOpdracht})})})]})}),Object(u.jsxs)(h.c,{children:[Object(u.jsx)(h.a,{exact:!0,path:"/bron/:bronId",component:T}),Object(u.jsx)(h.a,{exact:!0,path:"/item/:itemId",component:Y}),Object(u.jsx)(h.a,{exact:!0,path:"/datum/:datumId",component:E}),Object(u.jsx)(h.a,{exact:!0,path:"/",children:Object(u.jsx)(V,{})}),Object(u.jsx)(h.a,{exact:!0,path:"/bronnen",children:Object(u.jsx)(_,{})}),Object(u.jsx)(h.a,{exact:!0,path:"/datum",children:Object(u.jsx)(E,{})}),Object(u.jsx)(h.a,{exact:!0,path:"/zoeken",children:Object(u.jsx)(k,{onZoekOpdracht:e})})]}),Object(u.jsx)(K,{})]})}}]),a}(n.Component);function V(){return Object(u.jsx)(L,{})}a(154);c.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(F,{})}),document.getElementById("root"))}},[[156,1,2]]]);
//# sourceMappingURL=main.83adbce5.chunk.js.map
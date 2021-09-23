(this["webpackJsonptype-trainer"]=this["webpackJsonptype-trainer"]||[]).push([[0],{23:function(e,a,t){},44:function(e,a,t){"use strict";t.r(a);var n=t(1),o=t.n(n),s=t(18),r=t.n(s),m=(t(23),t(3)),i=t(4),c=t(6),d=t(5),p=t.p+"static/media/logo.97785ecb.svg",l=t(0),g=(o.a.Component,function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(l.jsx)("div",{class:"flex flex-col items-center text-md p-4",children:Object(l.jsx)("p",{class:"text-sm font-sans font-bold hover:text-red-400",children:Object(l.jsx)("a",{href:"https://amyrogers.design/",children:"Made by Amy Rogers"})})})}}]),t}(o.a.Component)),u=t(9),h=t.n(u),f=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(l.jsxs)("div",{class:"flex flex-col items-center p-4",children:[Object(l.jsx)("span",{children:"You have encountered a wild "}),Object(l.jsx)("p",{class:"text-3xl font-bold",style:{textTransform:"capitalize"},children:this.props.pokemon.name}),Object(l.jsx)("img",{width:"200px",src:this.props.pokemon.sprite}),Object(l.jsxs)("div",{class:"type-badges flex flex-row",children:[Object(l.jsx)("span",{class:"px-4 py-2 rounded font-bold "+this.props.pokemon.type1,style:{textTransform:"capitalize"},children:this.props.pokemon.type1}),Object(l.jsx)("span",{class:"ml-2 px-4 py-2 rounded font-bold "+this.props.pokemon.type2,style:{textTransform:"capitalize"},children:this.props.pokemon.type2})]}),Object(l.jsxs)("p",{class:"text-gray-400",children:["#",this.props.pokemon.number]})]})}}]),t}(o.a.Component),x=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){return Object(m.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return Object(l.jsx)("button",{class:"transform duration-200 ease-in-out hover:-translate-y-1 p-5 text-xl rounded font-bold shadow "+this.props.name,onClick:this.props.onClick,style:{textTransform:"capitalize"},children:this.props.name})}}]),t}(o.a.Component),j=function(e){Object(c.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),s=0;s<n;s++)o[s]=arguments[s];return(e=a.call.apply(a,[this].concat(o))).state={targetPokemon:{name:"",number:"",sprite:"",type1:"",type2:""},typesPoints:[{name:"normal",damage:1},{name:"poison",damage:1},{name:"ground",damage:1},{name:"rock",damage:1},{name:"bug",damage:1},{name:"ghost",damage:1},{name:"steel",damage:1},{name:"dragon",damage:1},{name:"dark",damage:1},{name:"flying",damage:1},{name:"fire",damage:1},{name:"psychic",damage:1},{name:"ice",damage:1},{name:"fighting",damage:1},{name:"water",damage:1},{name:"grass",damage:1},{name:"electric",damage:1},{name:"fairy",damage:1}]},e.resetTypes=function(){e.setState({typesPoints:[{name:"normal",damage:1},{name:"poison",damage:1},{name:"ground",damage:1},{name:"rock",damage:1},{name:"bug",damage:1},{name:"ghost",damage:1},{name:"steel",damage:1},{name:"dragon",damage:1},{name:"dark",damage:1},{name:"flying",damage:1},{name:"fire",damage:1},{name:"psychic",damage:1},{name:"ice",damage:1},{name:"fighting",damage:1},{name:"water",damage:1},{name:"grass",damage:1},{name:"electric",damage:1},{name:"fairy",damage:1}]})},e.updateTypePoints=function(a){h.a.get("https://pokeapi.co/api/v2/type/".concat(a,"/")).then((function(a){var t=e.state.typesPoints;a.data.damage_relations.double_damage_from.map((function(e){return t[t.findIndex((function(a){return a.name===e.name}))].damage=2*t[t.findIndex((function(a){return a.name===e.name}))].damage})),a.data.damage_relations.half_damage_from.map((function(e){return t[t.findIndex((function(a){return a.name===e.name}))].damage=.5*t[t.findIndex((function(a){return a.name===e.name}))].damage})),a.data.damage_relations.no_damage_from.map((function(e){return t[t.findIndex((function(a){return a.name===e.name}))].damage=0*t[t.findIndex((function(a){return a.name===e.name}))].damage})),e.setState({typesPoints:t})}))},e.getNewPokemon=function(){var a=[],t=Math.floor(898*Math.random())+1;e.resetTypes(),h.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t)).then((function(t){a.push(t.data.types[0].type.name),e.updateTypePoints(t.data.types[0].type.name),t.data.types.length>1?(a.push(t.data.types[1].type.name),e.updateTypePoints(t.data.types[1].type.name)):a.push("hidden"),e.setState({targetPokemon:{name:t.data.name,number:t.data.id,sprite:t.data.sprites.front_default,type1:a[0],type2:a[1]}})}))},e.attackPokemon=function(a,t){console.log("Attacked with "+a+" for "+t+"x damage!"),e.getNewPokemon()},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getNewPokemon()}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("div",{class:"container mx-auto md:px-4 bg-white border-gray-200 shadow-md dark:bg-gray-800 mt-0 lg:mt-12 rounded-lg max-w-6xl",children:[Object(l.jsx)("div",{class:"flex flex-row flex-1 justify-end mt-4 mx-2 md:mx-0",children:Object(l.jsxs)("button",{class:"text-gray-500 hover:bg-gray-100 p-2 rounded inline-flex items-center",onClick:this.getNewPokemon,children:[Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"text-gray-500 w-3 h-3 mr-1",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(l.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})}),Object(l.jsx)("span",{class:"text-sm",children:"Find another Pok\xe9mon"})]})}),Object(l.jsx)(f,{pokemon:this.state.targetPokemon}),Object(l.jsxs)("div",{class:"flex-grow space-y-2 p-4 mx-4 mb-4",children:[Object(l.jsx)("span",{class:"text-xl",children:"Which move type will you use?"}),Object(l.jsx)("div",{class:"grid gap-4 grid-cols-2 md:grid-cols-3",children:this.state.typesPoints.map((function(a,t){return Object(l.jsx)(x,{name:a.name,damage:a.damage,onClick:function(){return e.attackPokemon(a.name,a.damage)}})}))})]})]})}}]),t}(o.a.Component);var b=function(){return Object(l.jsxs)("div",{class:"flex flex-col justify-between min-h-screen bg-gray-100 lining-nums",children:[Object(l.jsx)(j,{}),Object(l.jsx)(g,{})]})},y=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(a){var t=a.getCLS,n=a.getFID,o=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),n(e),o(e),s(e),r(e)}))};r.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(b,{})}),document.getElementById("root")),y()}},[[44,1,2]]]);
//# sourceMappingURL=main.327371fa.chunk.js.map
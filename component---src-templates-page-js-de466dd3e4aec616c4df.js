(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{503:function(e,t,a){"use strict";a.r(t);a(163),a(260),a(24),a(4),a(78),a(21),a(7),a(36),a(6),a(17),a(121),a(5);var n=a(0),r=a.n(n),l=a(3),s=a.n(l),o=a(156),c=a.n(o),i=a(158),p=a(159),m=(a(259),a(504)),u=a.n(m);var f=function(e){return e.replace(/[^A-Za-z0-9-.]+/g,"_")},d=function(e){var t,a;function n(t){var a;(a=e.call(this,t)||this).select=function(e,t){return function(n){var r=a.props.examples,l=r[e||0]?r[e||0].title:null,s=r[e]&&r[e].examples[t||0]?r[e].examples[t||0].title:null;l&&s&&"undefined"!=typeof window&&(window.location.hash=f(l)+"__"+f(s)),a.setState({selected:e,subSelected:t||0})}};var n=null,r=null;if("undefined"!=typeof window&&window.location&&window.location.hash){var l=window.location.hash.replace(/^#+/,"").split("__");if(l.length>=2){var s=t.examples,o=s.findIndex(function(e){return f(e.title)===l[0]});if(o>=0){var c=s[o].examples.findIndex(function(e){return f(e.title)===l[1]});n=o,r=c>=0?c:0}}}return a.state={selected:n,subSelected:r},a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props.examples,a=function(t){return(e.state.selected||0)===t},n=function(t,n){return a(t)&&(e.state.subSelected||0)===n},l=t[this.state.selected||0],s=l&&l.examples[this.state.subSelected||0]||{};return r.a.createElement("div",{className:"flex bg-black h7 w-100 border-box"},r.a.createElement("div",{className:"w-25 bg-white-20 h-100 pa0 ma0 white w5"},r.a.createElement("ul",{className:"list h-100 ma0 pa1 pa2-ns"},t.map(function(t,l){var s=t.title,o=t.examples;return r.a.createElement("li",{key:s,className:"ma0 pa0"},r.a.createElement("span",{onClick:e.select(l),className:"f7 f6-ns pointer "+(a(l)?"white":"white-60")},a(l)?"▾":"▸"," ",s),a(l)?r.a.createElement("ul",{className:"list pl2 pl3-ns"},o.map(function(t,a){var s=t.title;return r.a.createElement("li",{key:s,className:"f6 pl1-ns"},r.a.createElement("span",{onClick:e.select(l,a),className:"f7 f6-ns pointer "+(n(l,a)?"white":"white-60")},s))})):null)}))),r.a.createElement("div",{className:"w-75 flex flex-column flex-row-l ba br0 b--silver"},r.a.createElement("div",{className:"w-100 w-50-l h-50 h-100-l flex-auto"},r.a.createElement(u.a,{component:"pre",className:"no-shadow f7 pa1 bn br0 h-100 overflow-auto language-"+s.exampleLanguage},s.example)),s.result&&r.a.createElement("div",{className:"w-100 w-50-l h-50 h-100-l flex-auto overflow-auto"},r.a.createElement(u.a,{component:"pre",className:"no-shadow f7 pa1 bt bn-l bl-l br0 b--silver h-100 flex-auto language-"+s.resultLanguage},s.result))))},n}(r.a.Component),h=function(){return r.a.createElement("form",{action:"//graphile.us16.list-manage.com/subscribe/post?u=d103f710cf00a9273b55e8e9b&id=c3a9eb5c4e",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"validate",target:"_blank",noValidate:!0},r.a.createElement("div",{id:"mc_embed_signup_scroll",className:"center hero-block"},r.a.createElement("p",null,"Keep up to date on Graphile and PostGraphile features/changes. Subscribe to our occasional announcements newsletter:"),r.a.createElement("div",{className:"mc-field-group form-inline justify-content-center"},r.a.createElement("div",{className:"form-group"},r.a.createElement("div",{className:"mb2"},r.a.createElement("label",{className:"label--small",htmlFor:"mce-EMAIL"},"Email address:")),r.a.createElement("input",{autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",className:"input-text mb0-ns mb1",id:"mce-EMAIL",name:"EMAIL",spellCheck:"false",type:"email",defaultValue:""}),r.a.createElement("div",{style:{position:"absolute",left:"-5000px"},"aria-hidden":"true"},r.a.createElement("input",{type:"text",name:"b_d103f710cf00a9273b55e8e9b_c3a9eb5c4e",tabIndex:"-1",defaultValue:""})),r.a.createElement("input",{className:"button--solid",id:"mc-embedded-subscribe",name:"subscribe",type:"submit",value:"Subscribe"})),r.a.createElement("div",{id:"mce-responses",className:"clear"},r.a.createElement("div",{className:"response",id:"mce-error-response",style:{display:"none"}}),r.a.createElement("div",{className:"response",id:"mce-success-response",style:{display:"none"}})))))},b=function(){return r.a.createElement("section",{className:"mailinglist"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12"},r.a.createElement("div",{className:"hero-block"},r.a.createElement("h3",null,"Questions, comments or feedback?",r.a.createElement("br",null),"Email"," ",r.a.createElement("a",{href:"mailto:info@graphile.org?subject=Documentation%20question/comment/feedback:)"},"info@graphile.org")),r.a.createElement(h,null))))))},v=a(160);function g(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}a.d(t,"pageQuery",function(){return k});var E=function(e){var t,a=e.children,n=e.noLink;return r.a.createElement("span",{dangerouslySetInnerHTML:{__html:x((t=a,t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;")),n)}})};function y(e){var t=e.pages,a=e.location,n=e.depth,l=void 0===n?0:n;return r.a.createElement("ul",{className:"page-list nav flex-column "+(0===l?"mb5":null)},t.map(function(e,t){var n=e.to,o=e.title,c=e.subpages;return r.a.createElement("li",{key:t,className:"f6 lh-copy pv1"},r.a.createElement(s.a,{className:"nav-link "+(a.pathname===n?"active":""),to:n},r.a.createElement(E,null,o)),c&&c.length?r.a.createElement(y,{pages:c,location:a,depth:l+1}):null)}))}var w=function(e){var t=e.sections,a=e.pages,n=e.location;return r.a.createElement("aside",{className:"sidebar col-xs-12 col-md-3 last-xs mt3"},t.map(function(e,t){var l,s=e.id,o=e.title;return r.a.createElement("section",{key:t},r.a.createElement("h4",{className:"f6 ttu fw6 mt0 mb3 bb pb2"},r.a.createElement(E,null,o)),r.a.createElement("div",{className:"nested-list-reset"},r.a.createElement(y,{location:n,pages:a.filter((l=s,function(e){return e.sectionId===l}))})))}))},N=function(e,t,a){return void 0===t&&(t=e),void 0===a&&(a=!1),"<"+(a?"span":"a href='/postgraphile/pricing/'")+' class="plan-'+e+"\"><span class='first-letter'>"+t[0]+"</span><span class='rest'>"+t.substr(1)+"</span></"+(a?"span":"a")+">"};function x(e,t){return e.replace(/\[SUPPORTER\]/g,N("supporter","supporter",t)).replace(/\[PRO\]/g,N("pro","pro",t)).replace(/\[ENTERPRISE\]/g,N("enterprise","enterprise",t)).replace(/^.* Gallery$/g,"<strong>$&</strong>")}var _=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={hack:1},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({hack:2})},0)},l.render=function(){var e=this.props,t=e.data,a=t.remark,n=a.html,l=a.frontmatter,o=l.title,m=l.showExamples,u=t.nav,f=t.examples,h=e.location,y=e.history,N=x(n),_=h.pathname.split("/")[1],k=u.edges.find(function(e){return e.node.name===_}),P=k&&k.node||{pages:[],sections:[]},O=P.pages,j=P.sections||[],S=function(e,t){var a=e.reduce(function(e,t){return e.push(t),t.subpages&&e.push.apply(e,g(t.subpages)),e},[]),n=a.find(function(e){return e.to===t});if(!n)return{};var r,l,s,o,c=a.indexOf(n);return c>0&&(s=a[c-1].to,o=a[c-1].title),c>=0&&c<a.length-1&&(r=a[c+1].to,l=a[c+1].title),{next:r,nextText:l,prev:s,prevText:o}}(O,h.pathname),T=S.next,L=S.nextText,A=S.prev,I=S.prevText,M="postgraphile"===_;return r.a.createElement(v.a,this.props,r.a.createElement("div",{className:"template-page "+(h.pathname.match(/^\/(postgraphile|news|support|sponsors?)(\/|$)/)?"postgraphile":"")},r.a.createElement(c.a,{title:(M?"PostGraphile":"Graphile")+" | "+o,meta:[{name:"description",content:"Utilities to build powerful and performant GraphQL APIs"},{name:"keywords",content:"GraphQL, API, Graph, PostgreSQL, PostGraphile, PostGraphQL, Postgres-GraphQL, server, plugins, introspection, reflection"}]}),r.a.createElement(p.a,{location:h,history:y}),r.a.createElement("div",{className:"page-content"},r.a.createElement("section",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row between-xs"},r.a.createElement(w,{sections:j,pages:O,location:h}),r.a.createElement("div",{className:"col-xs-12 col-md-9 first-xs main-content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-12",style:{width:"100%"}},r.a.createElement("div",{className:"edit-this-page",style:{display:h.pathname.match(/^\/news\//)?"none":""}},r.a.createElement("a",{href:"https://github.com/graphile/graphile.github.io/edit/develop/src/pages"+h.pathname.substr(0,h.pathname.length-1)+".md"},"📝 Suggest improvements to this page")),r.a.createElement("div",{key:this.state.hack,dangerouslySetInnerHTML:{__html:N}})),r.a.createElement("br",null),m&&r.a.createElement(d,{examples:f.edges.filter(function(e){return e.node.category===m}).map(function(e){return e.node})}),r.a.createElement("br",null),r.a.createElement("div",{className:"col-xs-12 mt3 mb5"},r.a.createElement("div",{className:"row between-xs"},r.a.createElement("div",{className:"col-xs-6"},A?r.a.createElement(s.a,{className:"",to:A},r.a.createElement("span",{className:"fas fa-fw fa-arrow-left"})," ",I?r.a.createElement(E,{noLink:!0},I):"Previous"):null),r.a.createElement("div",{className:"col-xs-6 tr"},T?r.a.createElement(s.a,{className:"",to:T},L?r.a.createElement(E,{noLink:!0},L):"Next"," ",r.a.createElement("span",{className:"fas fa-fw fa-arrow-right"})):null)))))))),r.a.createElement(b,null)),r.a.createElement(i.a,null)))},n}(r.a.Component),k="130048078";t.default=_},504:function(e,t,a){"use strict";a(38),Object.defineProperty(t,"__esModule",{value:!0});var n=a(505);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"PrismCode",{enumerable:!0,get:function(){return r(n).default}}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r(n).default}})},505:function(e,t,a){"use strict";a(157),a(68),a(38),Object.defineProperty(t,"__esModule",{value:!0});var n,r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),s=(n=l)&&n.__esModule?n:{default:n},o=a(79);function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var i=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=Array(r),s=0;s<r;s++)l[s]=arguments[s];return a=n=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),n._handleRefMount=function(e){n._domNode=e},c(n,a)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,l.PureComponent),r(t,[{key:"componentDidMount",value:function(){this._hightlight()}},{key:"componentDidUpdate",value:function(){this._hightlight()}},{key:"_hightlight",value:function(){Prism.highlightElement(this._domNode,this.props.async)}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.component,n=e.children;return s.default.createElement(a,{ref:this._handleRefMount,className:t},n)}}]),t}();i.propTypes={async:o.PropTypes.bool,className:o.PropTypes.string,children:o.PropTypes.any,component:o.PropTypes.node},i.defaultProps={component:"code"},t.default=i}}]);
//# sourceMappingURL=component---src-templates-page-js-de466dd3e4aec616c4df.js.map
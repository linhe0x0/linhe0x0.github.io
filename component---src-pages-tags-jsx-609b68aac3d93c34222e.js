webpackJsonp([36530248567819],{105:function(e,t){},80:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),u=a(27),s=(n(u),a(47)),c=n(s);a(105);var o=function(e){var t=e.title,a=e.edges,n=[];return a.forEach(function(e,t){n.push(r.default.createElement(c.default,{key:e+"-"+t,title:e.node.frontmatter.title,date:e.node.frontmatter.date,excerpt:e.node.excerpt,path:"/articles"+e.node.fields.slug,size:"small",succinct:!0}))}),r.default.createElement("div",{id:t,className:"post-block"},r.default.createElement("div",{className:"post-block__heading"},r.default.createElement("span",{className:"fa fa-tag post-block__listing-seperator"},r.default.createElement("span",{className:"post-block__title"},t))),r.default.createElement("div",{className:"post-block__body"},n))};t.default=o,e.exports=t.default},81:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(80),r=n(l);t.default=r.default,e.exports=t.default},53:function(e,t){},46:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),u=a(4),s=n(u),c=a(25),o=n(c),d=a(18),f=n(d);a(53);var i=function(e){var t,a=(0,o.default)((t={post:!0},t["post--"+e.size]=e.size,t["post--succinct"]=e.succinct,t));return r.default.createElement("div",{className:a},r.default.createElement(f.default,{className:"post__link",to:e.path},r.default.createElement("h2",{className:"post__title"},e.title),r.default.createElement("div",{className:"post__content-preview"},e.excerpt),r.default.createElement("p",{className:"post__meta"},e.author," · ",e.date)))};i.propTypes={size:s.default.string,succinct:s.default.bool,title:s.default.string.isRequired,excerpt:s.default.string.isRequired,author:s.default.string,date:s.default.string,path:s.default.string.isRequired},i.defaultProps={size:"",succinct:!1,author:"",date:""},t.default=i,e.exports=t.default},47:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(46),r=n(l);t.default=r.default,e.exports=t.default},107:function(e,t){},84:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(1),r=n(l),u=a(4),s=(n(u),a(27)),c=(n(s),a(48)),o=n(c);a(107);var d={start:"#bbe",end:"#0085a1"},f=function(e){4===e.length&&(e=e.replace(/(\w)(\w)(\w)/gi,"$1$1$2$2$3$3"));var t=/(\w{2})(\w{2})(\w{2})/.exec(e);return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]},i=function(e){return"#"+e.map(function(e){var t=e.toString(16);return t=1===t.length?"0"+t:t}).join("")},m=function(e){return f(d.end).map(function(t,a){return(t-f(d.start)[a])/e})},p=function(e,t){var a=f(d.start).map(function(a,n){var l=Math.round(a+e[n]*t);return l>255?l=255:l<0&&(l=0),l});return i(a)},_=function(e){for(var t=[],a=e;a--;)t.push(e-a);return t},v=function(e){var t=e.dataSource.length,a=_(t),n=e.dataSource.map(function(e,n){var l=m(t),u=Math.floor(Math.random()*a.length),s=a.splice(u,1),c=p(l,s);return r.default.createElement(o.default,{key:e+"-"+n,"custom-color":c,to:"/tags/#"+e},e)});return r.default.createElement("div",{className:"tagCloud"},n)};v.propTypes={},t.default=v,e.exports=t.default},85:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var l=a(84),r=n(l);t.default=r.default,e.exports=t.default},228:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=a(1),r=n(l),u=a(42),s=n(u),c=a(60),o=n(c),d=a(18),f=(n(d),a(85)),i=n(f),m=a(81),p=n(m),_=function(e){var t=e.data;if(!t.allMarkdownRemark)return null;var a={};t.allMarkdownRemark.edges.forEach(function(e){var t=e.node.frontmatter.tags;t&&t.forEach(function(t){a[t]||(a[t]=[]),a[t].push(e)})});var n=Object.keys(a).map(function(e,t){return r.default.createElement(p.default,{key:e+"-"+t,title:e,edges:a[e]})}),l=t.site.siteMetadata;return r.default.createElement("div",null,r.default.createElement(s.default,null,r.default.createElement("html",{lang:l.language}),r.default.createElement("title",null,"Tags - "+l.SEOTitle),r.default.createElement("meta",{name:"keyword",content:l.keyword}),r.default.createElement("meta",{name:"description",content:l.description}),r.default.createElement("link",{rel:"stylesheet",href:"https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"})),r.default.createElement(o.default,{title:"Tags",description:l.bio,bg:l.bgOfHomeHeader,size:"small"}),r.default.createElement("div",{className:"container"},r.default.createElement("div",{className:"row justify-content-center"},r.default.createElement("div",{className:"col-8"},r.default.createElement(i.default,{dataSource:Object.keys(a)}),n))),r.default.createElement("br",null))};t.default=_;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-tags-jsx-609b68aac3d93c34222e.js.map
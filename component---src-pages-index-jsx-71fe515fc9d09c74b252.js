webpackJsonp([0xc23565d713b7],{53:function(e,t){},46:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),s=l(n),r=a(4),u=l(r),i=a(27),d=l(i),c=a(18),f=l(c);a(53);var o=function(e){var t,a=(0,d.default)((t={post:!0},t["post--"+e.size]=e.size,t["post--succinct"]=e.succinct,t));return s.default.createElement("div",{className:a},s.default.createElement(f.default,{className:"post__link",to:e.path},s.default.createElement("h2",{className:"post__title"},e.title),s.default.createElement("div",{className:"post__content-preview"},e.excerpt),s.default.createElement("p",{className:"post__meta"},e.author," · ",e.date)))};o.propTypes={size:u.default.string,succinct:u.default.bool,title:u.default.string.isRequired,excerpt:u.default.string.isRequired,author:u.default.string,date:u.default.string,path:u.default.string.isRequired},o.defaultProps={size:"",succinct:!1,author:"",date:""},t.default=o,e.exports=t.default},47:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(46),s=l(n);t.default=s.default,e.exports=t.default},106:function(e,t){},82:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(1),s=l(n),r=a(4),u=l(r),i=a(21),d=l(i),c=a(18),f=l(c),o=a(48),m=l(o);a(106);var E=function(e){return s.default.createElement("section",{className:"section"},s.default.createElement("h5",{className:"section__title"},s.default.createElement(f.default,{to:e.to||""},e.title)),s.default.createElement("div",{className:"section__body"},e.children))},p=function(e){var t=e.featuredTags,a=e.userInformation,l=e.snsLink,n=e.friends;return s.default.createElement("div",null,s.default.createElement(d.default,null,s.default.createElement("link",{rel:"stylesheet",href:"https://cdn.bootcss.com/font-awesome/4.7.0/css/font-awesome.min.css"})),s.default.createElement(E,{title:"FEATURED TAGS",to:"/tags"},s.default.createElement("div",{className:"featured-tags"},t.map(function(e,t){return s.default.createElement(m.default,{key:e+"-"+t,to:"/tags#"+e},e)}))),s.default.createElement(E,{title:"ABOUT ME",to:"/about"},s.default.createElement("div",{className:"short-about"},s.default.createElement(f.default,{to:"/about"},s.default.createElement("img",{className:"short-about__avatar rounded",src:a.avatar})),s.default.createElement("p",{className:"short-about__intro"},a.bio),s.default.createElement("ul",{className:"styles.sns list-inline"},l.map(function(e,t){return s.default.createElement("li",{key:e+"-"+t,className:"list-inline-item"},s.default.createElement("a",{className:"sns__link",target:"_blank",href:e.to},s.default.createElement("span",{className:"fa-stack fa-lg"},s.default.createElement("i",{className:"fa fa-circle fa-stack-2x"}),e.icon?s.default.createElement("i",{className:"fa fa-"+e.icon+" fa-stack-1x fa-inverse"}):s.default.createElement("i",{className:"fa fa-stack-1x fa-inverse"},e.text))))})))),s.default.createElement(E,{title:"FRIENDS"},s.default.createElement("ul",{className:"friend-links list-inline"},n.map(function(e,t){return s.default.createElement("li",{key:e+"-"+t,className:"list-inline-item"},s.default.createElement("a",{className:"friend-links__link",href:e.to,target:"_blank"},e.name))}))))};p.propTypes={featuredTags:u.default.array.isRequired,userInformation:u.default.shape({name:u.default.string.isRequired,bio:u.default.string.isRequired,avatar:u.default.string.isRequired}).isRequired,snsLink:u.default.array.isRequired,friends:u.default.array.isRequired},t.default=p,e.exports=t.default},83:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(82),s=l(n);t.default=s.default,e.exports=t.default},228:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=a(1),s=l(n),r=a(21),u=l(r),i=a(4),d=(l(i),a(27)),c=l(d),f=a(18),o=l(f),m=a(60),E=l(m),p=a(47),_=l(p),g=a(83),v=l(g),N=function(e){var t=e.page,a=e.totalPage,l=t>1,n=t<a;if(!l&&!n)return null;var r=(0,c.default)({"page-item":!0,disabled:!l}),u=(0,c.default)({"page-item":!0,disabled:!n});return s.default.createElement("nav",{className:"mt-4"},s.default.createElement("ul",{className:"pagination justify-content-end"},s.default.createElement("li",{className:r},s.default.createElement(o.default,{className:"page-link",to:l?"/pages/"+(t-1):null,style:{color:"#a3a3a3"}},"Previous")),s.default.createElement("li",{className:u},s.default.createElement(o.default,{className:"page-link",to:n?"/pages/"+(t+1):null,style:{color:"#a3a3a3"}},"Next"))))},h=function(e){var t=e.data.allMarkdownRemark;if(!t)return null;var a=e.data.site.siteMetadata,l=e.pathContext.posts||t.edges.slice(0,10),n=l.map(function(e,t){return s.default.createElement(_.default,{key:e+"-"+t,title:e.node.frontmatter.title,author:a.defaultAuthor,date:e.node.frontmatter.date,excerpt:e.node.excerpt,path:"/articles"+e.node.fields.slug})}),r={};t.edges.forEach(function(e){var t=e.node.frontmatter.tags;t&&t.forEach(function(e){r[e]||(r[e]=0),r[e]+=1})});var i=Object.keys(r).filter(function(e){return r[e]>=a.limitOfFeaturedTags}),d=e.pathContext.totalPage||Math.ceil(t.totalCount/10),c={name:a.name,bio:a.bio,avatar:a.avatar};return s.default.createElement("div",null,s.default.createElement(u.default,null,s.default.createElement("title",null,a.SEOTitle)),s.default.createElement(E.default,{title:a.name,description:a.bio,bg:a.bgOfHomeHeader}),s.default.createElement("div",{className:"main-container"},s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col-md-9"},n,s.default.createElement(N,{page:e.pathContext.page||1,totalPage:d})),s.default.createElement("div",{className:"col-md-3"},s.default.createElement(v.default,{featuredTags:i,userInformation:c,snsLink:a.snsLink,friends:a.friends}))))))};t.default=h;t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-71fe515fc9d09c74b252.js.map
(this["webpackJsonpprvi-task"]=this["webpackJsonpprvi-task"]||[]).push([[0],{25:function(A,e,t){},26:function(A,e,t){},27:function(A,e){},35:function(A,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),n=t(19),f=t.n(n),c=(t(25),t(9)),o=(t(26),t(17)),s=(t(27),t(8)),Q=Object(r.createContext)(),l=t(1),j=function(A){var e=A.load,t=A.setLoad,i=Object(r.useState)([]),n=Object(c.a)(i,2),f=n[0],j=(n[1],Object(r.useContext)(Q)),d=j.items,g=j.setItems,h=(j.profileId,j.setProfileId);console.log(e),Object(r.useEffect)((function(){"true"!==e&&fetch("https://randomuser.me/api/?results=15").then((function(A){return A.json()})).then((function(A){var e=A.results.map((function(A){return{picture:A.picture,title:A.name.title,first:A.name.first,last:A.name.last,birth:A.dob.date,city:A.location.city,timezone:A.location.timezone.offset,email:A.email,number:A.cell}}));e.forEach((function(A,e){A.id=e+1})),g([].concat(Object(o.a)(d),Object(o.a)(e))),t("true"),console.log("1",f)}))}),[e]);var u=d.map((function(A){return Object(l.jsx)(s.b,{to:"/profile/".concat(A.id),className:"linktext-decoration: none",style:{textDecoration:"none",outline:"0"},children:Object(l.jsxs)("div",{className:"grow dib",onClick:function(){return E(A.id)},style:{textDecoration:"none",width:"14rem",height:"15rem",background:"#E0E0E0",alignContent:"center",textAlign:"center",marginTop:"0.7rem",marginLeft:"0.5rem",marginRight:"0.5rem",borderRadius:"20px",transition:"0.5s"},children:[Object(l.jsx)("img",{style:{marginTop:"0.4rem",borderRadius:"40px"},src:A.picture.large}),Object(l.jsx)("h3",{style:{height:"0.5rem",fontSize:"0.7rem"},children:A.title}),Object(l.jsx)("h2",{style:{height:"0.5rem",fontSize:"1.2rem"},children:A.first}),Object(l.jsx)("h2",{style:{height:"0.5rem",fontSize:"1.2rem"},children:A.last})]})})})),E=function(A){h(A)};return Object(l.jsxs)("div",{children:["true"===e?Object(l.jsx)("div",{style:{display:"flex",flexDirection:"row",flexWrap:"wrap"},children:u}):Object(l.jsx)("div",{children:"14"}),Object(l.jsx)("button",{onClick:function(){g([]),t("false")},children:"Refresh"})]})},d=t(2),g=function(){return Object(l.jsx)("h1",{children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAK4AAAAwCAYAAACIYEHdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAASLSURBVHhe7ZyNUeNADEadayBQAXQAVABUkNABdAAVBCoAKgAqCFQQqCBQAXANhA58fp71TQYcZ3fx/gj0ZnQ45jCx8p1WK+k8eH//WxaKIoxBZb0K9+DgoP66sbFR7O7u1razs1Nsb2/X50Nxfn5eXFxcmFdpKcv1Lh0McH3/4G983/ifzwP/89qVnHy6TONf/gxulePK8Xhc3t7elovFovrd/TKZTFp/bwqzoe3nQlolYGff5+TTZYPqa/s3Qxsins1m9ZvoAxWuvVWR1ErAOQv3T3WQhPv7++Lw8LC2x8dHc1aJASnA3t6eaL8nE24DzkO8JycnxcfHhzmrhObt7a32e5U+mDOySC7cBhxIFHh+fjZnlBgQMCSKNxvhQhMFNHWIC+KVFjCyEi6QLhwdHWnkjczZ2Zk5kkF2wgXES+QlAitxYJWTlDJkKVxAvCxhSjyo9EjBuXO2tbW1sguG2F5eXsyrfri5uSmOj4/Nq9X4dHkuLy/r7lLfNN3DLlw7Z5PJpL7HdTSR8+7uzpxxY7FY/O+ycR3XKPz09GSO7OjS0yqaPdCXAm+XUZRex3w+L6fTaTkajVqv4WLVTZmrduNTLO+zAeJK2/vpMhu/L8NnMBwOW6/VZVWgMFfwo+2aXeZ6Xw1BUgWi2Hg8rpce/gUTLXwhz5VYrkkNn4HP0i9lXxE8x2XZYYl7fX2thz18uL6+NkeKC82AjQtSmkDRNmfkMeQmPuKlNKYVBj9s8u1lpJQho1YViL6+O1dJO96c8BlnlED0chiR1yfn1W6aH1KWfleiCxdOT0/NkT19l9l+C67lqRDlwRAkES7L1/7+vnllR4gcl+4c9dQ+zTWnDAmrlGvOKiW1SCJcoFzmis4v2IOvmPlwxbUZkIpkwvVZkn5qvtYnpAa0yhkR9fGXT0BJQTLhKm7Qzm5LTT4bqYpvw2Y0GmmqsA4fB2ktNyxSoi1oxFVq2CzbDDPlQjLh+uRfUjYOErm6ujJHMtCIq9Sjo1Lqtw3JhKulrTywnXfOjWTC9Zk9yKm4Lx0GuKfTqUjRQhLhkt+6tiKHw6E56o/ZbFY/h6pPkzBTwawIK56kKsJnkgjXZyOg0fZ7ME5KWsBgP/PR0qfGoguXWqzPYLgK1w4ESmmLZgKRlVWFIX4iLGmBdME2RBUuKQL9c59S2G8XLiJsS00+GwIlXWEPQWTFbz+xjBhNuERaprF8qglEEWnlGiUswYVLdKXP/p3ngknd+SrhCCJcBPrw8FBPKW1ubtZLlk96AFQTVLjKZ5wfCEK+1JUz9V0OIrezeRAGf8f1gSBUN0KkIDZD8kxyuWDrh9TEvK8vD2nIxarcttpv2FE5oPUaKcyGtp/rMu5PAm3vvct87yt6OcwWUgT9n73KKrIVLqLVaTBlFdkJl0hLh0cbDkoXWQkX0bK50yqCso5shEuLkiaFNhoUG5ILl64Y/XRy2p/SR1fCk0y4RFjmQWlWaD6ruBJNuOSviJWNF9NKRFjJ86BKWnoXLl2j5bE6oup8Pq9bvoiVjZeWuZTvMqALYY4VRQhF8Q/igYki+uOgMAAAAABJRU5ErkJggg=="})})},h=function(A){A.match;var e=Object(r.useContext)(Q),t=e.items,i=(e.setItems,e.profileId),n=(e.setProfileId,t.filter((function(A){return A.id===i})));return console.log("profil",n),console.log("profil",i),Object(l.jsxs)("div",{children:[Object(l.jsx)(s.b,{to:"/prvi-task",style:{textDecoration:"none",outline:"0"},children:Object(l.jsx)("button",{style:{color:"transparent"},children:Object(l.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAABjfAAAY3wFJqUHvAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAdpQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL8PFBQAAAJ10Uk5TAAECAwQFBgcICQoLDxESExQVFhcYGRobHB0eHyYqKywtMDI1Njc5P0BBQkNFRkdJS0xOVFlbXV5fYGFiY2RlZmdoaW14eX1+f4CBhYeIiYqLjI2Oj5KTlJWWl5iZm5ydnqKjpKWmp62wsbK3ubu8vb/AwcLFx8jO0NLU1dfY2drb3N3e3+Dh4uPk5ufq6+zu7/Hy9PX29/n6+/z9/jgW/7UAAAmPSURBVHja7dwLl1ZlGcfhjUCakjY5EZ0wItMytQyzhCiziQwDMSwVUSyC6YgidvCUiYjYgQJTmpn9XWPVWimLgXnfe7+8+3nuff2/wf38rjUnhmmawW/VzbuOvHj6nRPPH9yyrt4jPvfgb/97xKG710k6zj44d6r9/96d31jlEde8/4hz85+RdeR97WR7wRaemKnviC1vXHjE4pOzyo60qw+2F+3NTZUdsfbAxUf8ZbO4I2zmWLvMzt5V1RHXP7vcEf/6qrwrbsOr7bJb3FrREbMvLX/E0ncEDvY//3hbq+9PQIf+FQm4dH8COvSvRsDl+hPQoX8lAi7fn4AO/asQsFJ/Ajr0r0DAyv0J6NC/eAGj9CegQ//CBYzWn4AO/YsWMGp/Ajr0L1jA6P0J6NC/WAHj9CegQ/9CBYzXn4AO/YsUMG5/Ajr0L1DA+P0J6NC/OAGR/gR06F+YgFh/Ajr0L0pAtD8BHfoXJCDef/ACuvQvRkCX/gMX0K1/IQK69R+0gK79ixDQtf+ABXTvX4CA7v0HK2AS/XsXMIn+AxUwmf49C5hM/0EKmFT/8493b/X9zx9xn/7hLdxRff+2XfyK/uH9c2P1/dv2zE36h3f82ur7t+3r1+kf3o76+7ftD/QP7+xs/f3btzfoH96e+vu37Y/1D+9Egv7tqVX6h/fZ+vu37Wb9w/tugv7tnP7h/SRB//Zx/cM7nKB/+0v9wzuaoH/7O/3D+0WC/u2v9A9vX4L+7X79C/9h8JXt335f//BuTdC//aL+0f1tdYL+/1ijf3RPJejf/kz/8C8FfTpB/8VN+kf3WIL+7QH9ozs9k6D/mfX6B/fv2xL0X7hT/+i2J+jf3q9/dDsz9H9Y/+gezNB/r/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/6p+v9If/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/3111//Ivv7+4/666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/76619u/z3666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//vrrr7/++uuvv/7666+//voX2f8h/fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXv9j+u/XXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX/9i++/SX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99de/yP4/1F9//fXXX3/99ddff/31119//fXXX3/99ddff/31119//fXXX3/99S90H3olQf91L+gf3JojCfqv+bX+0T2eoH/zmP7R3Zah/xf0j271HxP0v+r3+ke3PUH/5h79wzuWoH/zjP7RfWQxQf8bFvSP7hsJ+jdf1z+8hxL0b3ZlOKKn/TzD0z2tf3jPZXi63+gPAACxHcrw0fOnPgWEtyfD10+7fREY3tYM3wbe2xIQ3Y0ZfhA0s0CAHwUTEJt/DBq4gNUvJHi8q/5AQHi3Z/iFkC+1BIT3VIbHe5KA8D7wXILHW/sMAeF9+LUEj5fid9v72idfT/B4Kf53CwEEEEAAAQQQQAABBBBAAAEEEDDWPkYAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAQG0C/kQAAQQQQAABBBBAAAEEEEAAAQQQQAABBIwq4DgBwxbwCQIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIqOfx1hNAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBCQQcArBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBKws4DUCCCCAAAIIIIAAAoYp4OMEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAAQQQQAABNTzeRwkggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggIC8Al4mgAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIODSAv5MAAEEEEAAAQQQQAABBBBAAAEEEEDAsARsIIAAAggggAACCCCAgCu1nRkE7CQgvm0ZBGwjILxztyQQMIUj8gr4+w0JBEzhiLwCHmkSCHikISD88fNTCQRM44i0AvY3CQTsbwiI7q+rEwiYyhFZBUzla+grLeCWhoDodjQJBOxoCIhuX5NAwL6GgOjmmwQC5hsCojvaJBBwtCEgusNNAgGHGwKie7RJIODRhoDo5poEAuYaAqLbPM0jZl9OcEQuASene8SVEXCyaQgIbm+TQMDehoDg3l7f1C9g+kfkEfDA9I+YvIAHmoaA2I5f19QvoJcjcgg4c1MvR0xWQE9HZBCw+OWejph9KcER9QtY+nZvR0xOQI9H1C5g6b4ej5iUgF6PqFtAz083GQGD7D8ZAb0/3SQEDLT/JAQU8Kmzu4ABfv6flIAinq6rgAH37yqgkKfrJmDQ/bsJKObpuggYeP8uApa+VcwRcQEFHVGbgKKeLipA/7CAwp4uJkD/sICl7YUdERFQ3BH1CCjw6cYXoH9YQJFPN64A/cMCCn268QToHxaw9M1CjxhHQLFHlC+g4KcbXYD+YQFFP92oAvQPCyj86UYToP/yAl4d4elK/4OaowhY2iZ2UEAFT7eyAP3DAqp4upUE6B8WsLS1iiMuL6CSI0oUUM3TXU6A/mEBFT3dpQXoHxawWNPTXUrAov4rb+bYck939q6qjrj+2QRH9LWrD178dG9uquyItQcSHNHb7jl14cstPDFT3xFb3khwRF+79ntvvfdy785vrPKIa+be5/hcpUf0tlWf333kxdPvnHj+4JZ19R5x867/HXHo7vGO+A/sAkDoaFMcNAAAAABJRU5ErkJggg==",style:{height:"2rem",width:"2rem"}})})}),Object(l.jsxs)("div",{children:[Object(l.jsx)("img",{style:{marginTop:"0.4rem",borderRadius:"40px",width:"15rem",height:"15rem"},src:n[0].picture.large}),Object(l.jsx)("h3",{style:{height:"0.5rem",fontSize:"0.7rem"},children:n[0].title}),Object(l.jsx)("h2",{style:{height:"0.5rem",fontSize:"1.2rem"},children:n[0].first}),Object(l.jsx)("h2",{style:{height:"0.5rem",fontSize:"1.2rem"},children:n[0].last}),Object(l.jsx)("h2",{style:{height:"0.5rem",fontSize:"1.2rem"},children:n[0].birth}),Object(l.jsx)("h2",{style:{height:"0.5rem",fontSize:"1.2rem"},children:n[0].city}),Object(l.jsx)("h2",{style:{height:"0.5rem",fontSize:"1.2rem"},children:n[0].email}),Object(l.jsx)("h2",{style:{height:"0.5rem",fontSize:"1.2rem"},children:n[0].number})]})]})};var u=function(){var A=Object(r.useState)("false"),e=Object(c.a)(A,2),t=e[0],i=e[1],n=Object(r.useState)([]),f=Object(c.a)(n,2),o=f[0],u=f[1],E=Object(r.useState)(0),B=Object(c.a)(E,2),a=B[0],C=B[1];return Object(l.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignContent:"center",alignItems:"center"},children:[Object(l.jsx)(g,{}),Object(l.jsx)(Q.Provider,{value:{items:o,setItems:u,profileId:a,setProfileId:C},children:Object(l.jsxs)(s.a,{children:[Object(l.jsx)(d.a,{exact:!0,path:"/prvi-task",render:function(){return Object(l.jsx)(j,{load:t,setLoad:i})}}),Object(l.jsx)(d.a,{exact:!0,path:"/Profile/:id",render:function(){return Object(l.jsx)(h,{})}})]})})]})},E=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,36)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,n=e.getLCP,f=e.getTTFB;t(A),r(A),i(A),n(A),f(A)}))};t(34);f.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(u,{})}),document.getElementById("root")),E()}},[[35,1,2]]]);
//# sourceMappingURL=main.18e12a26.chunk.js.map
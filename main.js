!function(e){var n={};function t(a){if(n[a])return n[a].exports;var i=n[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(a,i,function(n){return e[n]}.bind(null,i));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var a=()=>'\n    <div class="Header-main">\n      <div class="Header-logo">\n        <h1>\n          <a href="/">\n            Mi portafolio\n          </a>\n        </h1>\n      </div>\n      <div class="Header-nav">\n      </div>\n    </div>\n  ';var i=async()=>{try{const e=await fetch("https://my.api.mockaroo.com/books.json?key=8feed230");return await e.json()}catch(e){console.log("Fetch Error",e)}};var d=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var l=()=>'\n        <div class ="Error404">\n           <h2>Error 404</h2>\n        </div>\n    ';var s=e=>{if(e.length<=3){return"/"===e?e:"/:id"}};const o={"/":async()=>`\n    <h1>Libros</h1>\n    <section class="table">\n        <div class="table--title">\n            <p>\n                ID\n            </p>\n        </div>\n        <div class="table--title">\n            <p>\n                Nombre\n            </p>\n        </div>\n        <div class="table--title">\n            <p>\n                Apellido\n            </p>\n        </div>\n        <div class="table--title">\n            <p>\n                Titulo\n            </p>\n        </div>\n        <div class="table--title">\n            <p>\n                Editar\n            </p>\n        </div>\n        <div class="table--title">\n            <p>\n                Borrar\n            </p>\n        </div>\n\n        ${(await i()).map(e=>`\n        <div id="idCell${e.id}" class="table--content">\n            <p id="id${e.id}">\n                ${e.id}\n            </p>\n        </div>\n        <div id="firstNameCell${e.id}" class="table--content">\n            <p id="firstName${e.id}">\n                ${e.first_name} \n            </p>\n        </div>\n        <div id="lastNameCell${e.id}" class="table--content">\n            <p id="lastName${e.id}">\n                ${e.last_name}\n            </p>\n        </div>\n        <div id="bookCell${e.id}" class="table--content">\n            <p id="book${e.id}">\n                ${e.book}\n            </p>\n        </div>\n        <div id="editCell${e.id}" class="table--content table--button">\n            <i id="edit${e.id}" onClick="" class="fa fa-pencil" aria-hidden="true"></i>\n        </div>\n        <div data-id=${e.id} id="deleteCell${e.id}" class="table--content table--button button-delete">\n        <i id="delete${e.id}" class="fa fa-trash-o" aria-hidden="true"></i>        </div>\n        `).join("")}\n    </section>\n\n    \n    `,"/:id":async()=>{const e=d(),n=await i(e);return`\n        <div class ="Character-inner">\n            <article class="Characters-card">\n                <img src="${n.image}" alt="${n.name}">\n                <h2> ${n.name} </h2>\n            </article>\n            <article class="Characters-card">\n            <h3>Episodios: <span>${n.episode.length}</span></h3>\n            <h3>Status: <span>${n.status}</span></h3>\n            <h3>Species: <span>${n.species}</span></h3>\n            <h3>Gender: <span>${n.gender}</span></h3>\n            <h3>Origin: <span>${n.origin.name}</span></h3>\n            <h3>Last Location: <span>${n.location.name}</span></h3>\n            </article>\n        </div>\n    `}};var r=async()=>{const e=document.getElementById("header"),n=document.getElementById("content");e.innerHTML=await a();let t=d(),i=await s(t),r=o[i]?o[i]:l;n.innerHTML=await r();let c=document.getElementsByClassName("button-delete");for(let e of c)e.addEventListener("click",(function(){const e=document.getElementById("idCell"+this.dataset.id),n=document.getElementById("firstNameCell"+this.dataset.id),t=document.getElementById("lastNameCell"+this.dataset.id),a=document.getElementById("bookCell"+this.dataset.id),i=document.getElementById("editCell"+this.dataset.id),d=document.getElementById("deleteCell"+this.dataset.id);e.remove(),n.remove(),t.remove(),a.remove(),i.remove(),d.remove()}));console.log("Hello world")};window.addEventListener("load",r),window.addEventListener("hashchange",r)}]);
!function(){const e=document.getElementById("navbar"),n=document.getElementById("gallery");function t(e){e.preventDefault();const t=e.currentTarget.elements.search.value;t.trim()&&fetch(`https://dog.ceo/api/breeds/image/random/${t}`).then((e=>e.json())).then((e=>function(e){const t=e.map((e=>`<li><img src=${e} width='200' alt=${e}/></li>`)).join(" ");n.innerHTML=t}(e.message)))}e.innerHTML='\n  <nav class="navbar bg-light">\n  <div class="container-fluid">\n    <a class="navbar-brand">Navbar</a>\n    <form class="d-flex" role="search" id=\'form\'>\n      <input name=\'search\' class="form-control me-2" type="search" placeholder="Search" aria-label="Search">\n      <button class="btn btn-outline-success" type="submit">Search</button>\n    </form>\n  </div>\n</nav>\n',document.querySelector("#form").addEventListener("submit",t);document.getElementById("gallery")}();
//# sourceMappingURL=index.5f51a3fb.js.map

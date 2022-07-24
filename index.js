// let nav = document.getElementById("global-header");
// nav.innerHTML = 
// `<h1 class="header-title">Manual Override</h1>

// <nav id="global-header-nav">
// <button>Home</button>
// <button>About</button>
// <button>Blog</button>
// <button>Projects</button>
// <nav id=">
// <button>Instagram</button>
// <button>GitHub</button>
// <button>Follow</button>
// </nav>`;

document.getElementById("global-footer").innerHTML = 
`<img src="assets/signature.png" width="50px" />
<p><a href="https://icon-icons.com/icon/instagram-new/69008" title="instagram icon">Instagram icon created by Alexander Hovy, CC BY - Icon-icons</a></p>]
<p><a href="https://www.flaticon.com/free-icons/subscription" title="subscription icons">Subscription icon created by Superndre - Flaticon</a></p>]
`;

let blogCards = document.getElementsByClassName("blog-card");
if (blogCards) for (let card of blogCards) {
  card.innerHTML = 
  `<h2>Blog title</h1>
  <p>Blog description</p>`;
}

let projectCards = document.getElementsByClassName("project-card");
if (projectCards) for (let card of projectCards) {
  card.innerHTML = 
  `<h2>Project title</h1>
  <p>Project description</p>`;
}
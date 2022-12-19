'use strict';



/**
 * Add eventListener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**COUNT */
const constEl = document.getElementById("count");
async function updateVisitCount() {
  try {
    const response = await fetch("https://api.countapi.xyz/update/jasmine/mouse/?amount=1")
    .then(res => res.json())
    .then(res => {
      constEl.innerHTML= res.value;
    });
    if (!response.ok) {
      throw new Error("HTTP error: ${response.status}");
    }
  }
  catch (error) {
    console.error("${error}");
  }
}
updateVisitCount();

/**
 * MOBILE NAV TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

navToggler.addEventListener("click", toggleNavbar);



/**
 * HEADER
 * 
 * active header when window scrolled to 50px
 */

const header = document.querySelector("[data-header]");

function activeHeader(){
  window.scrollY > 50 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", activeHeader);

class MyFooter extends HTMLElement{
  connectedCallback(){
    this.innerHTML= 
    <footer class="footer">
    <div class="container">

      <ul class="social-list">

        <li>
          <a href="https://www.facebook.com/mytu741/" class="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/mytu741/" class="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>

      </ul>

      <p class="text-center">&copy; <script>document.write(new Date().getFullYear()) copyright all right reserved</script></p>

    </div>
  </footer>

  }
}
customElements.define('my-footer',MyFooter)

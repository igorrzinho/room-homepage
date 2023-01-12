var img = document.getElementById("carrossel");
var title = document.getElementById("title");
var texto = document.getElementById("paragraph");
var url = "images/desktop-image-hero-";
var number = 1;

function next() {
  if (number == 3) {
    number = 1;
  } else {
    number++;
  }
  switch (number) {
    case 1:
      texto.innerHTML = texto1;
      title.innerHTML = titulo1;
      break;
    case 2:
      texto.innerHTML = texto2;
      title.innerHTML = titulo2;
      break;
    case 3:
      texto.innerHTML = texto3;
      title.innerHTML = titulo3;
      break;
    default:
      break;
  }
  img.src = url + number + ".jpg";
}

function previous() {
  if (number == 1) {
    number = 3;
  } else {
    number--;
  }

  switch (number) {
    case 1:
      texto.innerHTML = texto1;
      title.innerHTML = titulo1;
      break;
    case 2:
      texto.innerHTML = texto2;
      title.innerHTML = titulo2;
      break;
    case 3:
      texto.innerHTML = texto3;
      title.innerHTML = titulo3;
      break;
    default:
      break;
  }
  img.src = url + number + ".jpg";
}

var titulo1 = "  Discover innovative <br /> ways to decorate";
var texto1 =
  " We provide unmatched quality, comfort, and style for property <br />owners across the country. Our experts combine form and <br />function in bringing your vision to life. Create a room in your <br />own style with our collection and make your property a <br />reflection of you and what you love.";
var titulo2 = "  We are available all <br z/> across the globe";
var texto2 =
  "  With stores all over the world, it's easy for you to find furniture <br/> for your home or place of business. Locally, we’re in most major <br/> cities throughout the country. Find the branch nearest <br/> you using our store locator. Any questions? Don't hesitate to <br/> contact us today.";
var titulo3 = "  Manufactured with <br/>the best materials";
var texto3 = `Our modern furniture store provide a high level of quality. Our<br/>company has invested in advanced technology to ensure that <br/>every product is made as perfect and as consistent as<br/>possible. With three decades of experience in this industry, we <br/> understand what customers want for their home and office.`;

/* menu */

var btnMenu = document.getElementById("btn-menu");
var menu = document.getElementById("menu");
var imgMenu = document.getElementById("img-btn-menu");
var bgBlock = document.getElementById("block");

function openMenu() {
  console.log("click");
  menu.classList.toggle("active");
  bgBlock.classList.toggle("bg-grey");
  if (menu.classList.contains("active")) {
    imgMenu.src = "images/icon-close.svg";
  } else {
    imgMenu.src = "images/icon-hamburger.svg";
  }
}

btnMenu.addEventListener("click", openMenu);

import mapDatas from '../layout/header.js';
import mapData from '../layout/footer.js';
mapData();
mapDatas();

let aboutIcon = [
    { icon: '<i class="fa-brands fa-facebook"></i>', link: "https://www.facebook.com/elnur.recebli.9/" },
    { icon: '<i class="fa-brands fa-twitter"></i>', link: "https://x.com/?lang=en" },
    { icon: '<i class="fa-brands fa-instagram"></i>', link: "https://www.instagram.com/elnur_racabov/" },
    { icon: '<i class="fa-brands fa-github"></i>', link: "https://github.com/Elnur628" }
];

let aboutPages1 = [
    { icon: '<i class="fa-solid fa-square-up-right"></i>', link:"https://the-brandidentity.com/" ,title: "Marketing" },
    { icon: '<i class="fa-solid fa-square-up-right"></i>', link:"https://www.hotjar.com/web-design/examples/" ,title: "Web Design" },
];

let aboutPages2 = [
    { icon: '<i class="fa-solid fa-square-up-right"></i>', link:"https://themeforest.net/search/frontend" ,title: "Front-End" },
    { icon: '<i class="fa-solid fa-square-up-right"></i>', link:"https://elements.envato.com/web-templates/landing-page-templates+admin-templates/backend" ,title: "Back-End" },
];
const psocials = document.querySelector(".psocials");
const spn1 = document.querySelector(".spn1");
const spn2 = document.querySelector(".spn2");

const mapDataAbout = () => {

    aboutIcon.map((item) => {
        psocials.innerHTML += `
        <ul class="socialList">
            <li class="socialIcons">
                <a
                    href="${item.link}">
                    ${item.icon}
                </a>
            </li>                     
        </ul>                                  
        `;
      });

      aboutPages1.map((item) => {
        spn1.innerHTML += `
            <li class="pageItem">
                ${item.icon}
                <a href="${item.link}">${item.title}</a>
            </li>                    
        `;
      });

      aboutPages2.map((item) => {
        spn2.innerHTML += `
            <li class="pageItem">
                ${item.icon}
                <a href="${item.link}">${item.title}</a>
            </li>                       
        `;
      });
};

    mapDataAbout();

const downloadButton = document.getElementById("downloadButton");
const hiddenLink = document.getElementById("hiddenLink");


downloadButton.addEventListener("click", () => {
  hiddenLink.click();
});

// ** SOCIAL ICONS ARRAY START **//
let dataIcon = [
    { icon: '<i class="fa-brands fa-facebook"></i>', link: "https://www.facebook.com/elnur.recebli.9/" },
    { icon: '<i class="fa-brands fa-twitter"></i>', link: "https://x.com/?lang=en" },
    { icon: '<i class="fa-brands fa-instagram"></i>', link: "https://www.instagram.com/elnur_racabov/" },
    { icon: '<i class="fa-brands fa-github"></i>', link: "https://github.com/Elnur628" },
    { icon: '<i class="fa-brands fa-youtube"></i>', link: "https://www.youtube.com/@elnurrecebov2573" },
    { icon: '<i class="fa-brands fa-dribbble"></i>', link: "https://dribbble.com/" }
];
let logoImage = "../assets/img/er.jpg";
// ** SOCIAL ICONS ARRAY END **//

    // *********************************************************************** //

//** PAGES ARRAYS START **//
let dataPagesLeft = [
  {link: "#", title: "Privacy"},
  {link: "#", title: "Policy"},
];

let dataPagesRight = [
  {link: "./index.html", title: "Home"},
  {link: "./pages/about.html", title: "About"},
  {link: "./pages/myworks.html", title: "My Works"},
  {link: "./pages/knowledge.html", title: "Knowledge"},
  {link: "./pages/services.html", title: "Services"},
  {link: "./pages/contacts.html", title: "Contacts"},
];
//** PAGES ARRAYS END **//

    // *********************************************************************** //

//** DOM START **//
  const social = document.querySelector(".social");
  const leftList = document.querySelector(".leftList");
  const rightList = document.querySelector(".rightList")
//** DOM START **//

    // *********************************************************************** //

//** FUNCTIONS START **//
const mapData = () => {

  //** FOOTER LOGO START **//
    social.innerHTML = "";
    social.innerHTML += `
    <div class="ftlg">
       <div class="footerLogo">
        <img src="${logoImage}" alt="logo" />
      </div>
    </div>
   
  `;
  //** FOOTER LOGO END **//

    // *********************************************************************** //

  //** FOOTER ICONS START **//
    dataIcon.map((item) => {
      social.innerHTML += `
      <div class="scicons">
        <div class="socialIcons">
          <ul class="socialList">
            <li class="socialItems">
              <a href="${item.link}" target="_blank">
                ${item.icon}
              </a>
            </li>
          </ul>
        </div>
      </div>
      `;
    });
  //** FOOTER ICONS END **//

    // *********************************************************************** //

  //** FOOTER PAGES LEFT START **//
leftList.innerHTML="";
  dataPagesLeft.map((itemPagesLeft) => {
    leftList.innerHTML += `
            <li class="leftItem">
                <a href="${itemPagesLeft.link}">${itemPagesLeft.title}</a>
            </li>
    `;
  });
  //** FOOTER PAGES LEFT END **//

    // *********************************************************************** //

  //** FOOTER PAGES RIGHT START **//
rightList.innerHTML="";
  dataPagesRight.map((itemPagesRight) => {
    rightList.innerHTML += `
      <li class="rightItem">
          <a href="${itemPagesRight.link}">${itemPagesRight.title}</a>
      </li>
    `;
  });
  };
  //** FOOTER PAGES RIGHT END **//
  
mapData();

//** FUNCTIONS END **//

export default mapData;  
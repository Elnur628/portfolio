let logoImage = "../assets/img/er.jpg";

let headPages = [
    {link: "../index.html", title: "Home"},
    {link: "../pages/about.html", title: "About"},
    {link: "../pages/myworks.html", title: "My Works"},
    {link: "../pages/knowledge.html", title: "Knowledge"},
    {link: "../pages/services.html", title: "Services"},
    {link: "../pages/contacts.html", title: "Contacts"},
  ];

const head = document.querySelector(".head");


const mapDatas = () => {
//** HEADER LOGO START **//
    head.innerHTML = "";
    head.innerHTML += `
       <div class="logo">
           <img src="${logoImage}" alt="logo">
       </div>
   `;
//** HEADER LOGO END **//
     // *********************************************************************** //

//** HEADER PAGES LEFT START **//
headPages.map((itemPages) => {
  head.innerHTML += `
    <nav class="navBar">
        <ul class="menu">
            <li class="navItem">
                <a href="${itemPages.link}">${itemPages.title}</a>
            </li>
        </ul>
    </nav>
  `;
});
//** HEADER PAGES LEFT END **//
};

mapDatas();

//** FUNCTIONS END **//

export default mapDatas;  
let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const roles = [
  "Frontend Developer",
  "Software Developer",
  "Java Programmer",
  "Web Designer",
  "Tech Enthusiast"
];

let roleIndex = 0;
const roleElement = document.querySelector(".role");

function changeRole() {
  roleElement.classList.add("fade");
  setTimeout(() => {
    roleElement.textContent = roles[roleIndex];
    roleElement.classList.remove("fade");
    roleIndex = (roleIndex + 1) % roles.length;
  }, 600); 
}

setInterval(changeRole, 2500);

const skills = document.querySelectorAll(".skill");

skills.forEach(skill => {

skill.addEventListener("mousemove",(e)=>{

const x = e.offsetX;
const y = e.offsetY;

skill.style.transform =
`rotateX(${y/10}deg) rotateY(${x/10}deg)`;

});

skill.addEventListener("mouseleave",()=>{

skill.style.transform="rotateX(0) rotateY(0)";

});

});

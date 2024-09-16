let maguli=document.getElementById("maguli");
let spso=document.getElementById("spso");

maguli.addEventListener("click",function(){
const random=Math.floor(Math.random()*6)+1;
spso.src=`dice${random}.png`;
});
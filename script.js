const buttons = document.getElementById("selection");
const celebration = document.getElementById("celebration");
const rejection = document.getElementById("rejection");
const hi = document.querySelector(".hi")
const audio = document.getElementById("loveSound")
const audios = document.getElementById("hateSound")
const whatsappBtn = document.getElementById("whatsappBtn")
const whatsappBtns = document.getElementById("whatsappBtns")

function yesClick(){
     audio.play ();
        buttons.classList.add("hide");
           setTimeout(() =>{
        buttons.style.display = "none";
        celebration.style.display = "flex" ;
        hi.style.display= "none"
       }, 400);
      
      const phoneNumber = "2348035525774";
      const message = encodeURIComponent("Hey Praise I just clicked YES on your Valentine page ");
       whatsappBtn.href =  "https://wa.me/" + phoneNumber + "?text=" + message;
       whatsappBtn.style.display = "inline-block";
}
function noClick(){
      audios.play ();
      buttons.classList.add("hide");
           setTimeout(() =>{
        buttons.style.display = "none";
        rejection.style.display = "flex" ;
        hi.style.display= "none"
       }, 400);
         const phoneNumber = "2348035525774";
      const message = encodeURIComponent("Hey Praise I just clicked NO on your Valentine page ");
       whatsappBtns.href =  "https://wa.me/" + phoneNumber + "?text=" + message;
       whatsappBtns.style.display = "inline-block";
}
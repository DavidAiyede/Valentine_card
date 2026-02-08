const buttons = document.getElementById("selection");
const celebration = document.getElementById("celebration");
const rejection = document.getElementById("rejection");
const hi = document.querySelector(".hi")
const audio = document.getElementById("loveSound")
const audios = document.getElementById("hateSound")
function yesClick(){
     audio.play ();
        buttons.classList.add("hide");
           setTimeout(() =>{
        buttons.style.display = "none";
        celebration.style.display = "flex" ;
        hi.style.display= "none"
       }, 400);

       setTimeout(() => {
    const phoneNumber = "2348035525774";
    const message = encodeURIComponent(
        "Hey Praise I just clicked YES on your Valentine page "
    );
    window.location.href = "https://wa.me/" + phoneNumber + "?text=" + message;
}, 7000);
}
function noClick(){
      audios.play ();
      buttons.classList.add("hide");
           setTimeout(() =>{
        buttons.style.display = "none";
        rejection.style.display = "flex" ;
        hi.style.display= "none"
       }, 400);
          setTimeout(() => {
    const phoneNumber = "2348035525774";
    const message = encodeURIComponent(
        "Hey Praise I just clicked NO on your Valentine page "
    );
    window.location.href = "https://wa.me/" + phoneNumber + "?text=" + message;
}, 7000);
}
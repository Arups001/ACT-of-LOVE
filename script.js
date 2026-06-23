const music=document.getElementById("bgMusic");
const btn=document.getElementById("musicBtn");

window.addEventListener("load",()=>{

music.play().catch(()=>{

document.body.addEventListener("click",()=>{
music.play();
},{once:true});

});

});

btn.addEventListener("click",()=>{

if(music.paused){
music.play();
btn.innerHTML="🎵";
}
else{
music.pause();
btn.innerHTML="🔇";
}

});

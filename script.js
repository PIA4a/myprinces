const screens = document.querySelectorAll("section");
const music = document.getElementById("music");

function goToScreen(id){
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

function startSurprise(){
    if(music.paused){
        music.play();
    }
    goToScreen("screen-flower-letter");
}

function openFullScreen(src){
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = 9999;

    const img = document.createElement("img");
    img.src = src;
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.borderRadius = "12px";

    overlay.onclick = () => overlay.remove();

    overlay.appendChild(img);
    document.body.appendChild(overlay);
}
function pushMailbox(){
    const box = document.querySelector(".mailbox");
    box.classList.add("push-forward");

    // Mulai musik
    if(music.paused){
        music.play().catch(()=>{});
    }
    setTimeout(()=>{
        goToScreen("screen-flower-letter");
        box.classList.remove("push-forward");
    },300); 
}
function openLetter(){
    const letter = document.querySelector(".small-letter");
    letter.classList.add("tilt-out");

    setTimeout(()=>{
        goToScreen("screen-full-card");
        letter.classList.remove("tilt-out");
    },300);
}
const fullLetter = document.getElementById("fullLetter");

fullLetter.addEventListener("click", function(){
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = 9999;
    overlay.onclick = () => overlay.remove(); // klik overlay hilang

    const img = document.createElement("img");
    img.src = "image/surat-full-2.png";  // PNG overlay
    img.style.width = "120%";
    img.style.height = "120%";
    img.style.objectFit = "contain"; // biar proporsional
    img.style.borderRadius = "0";    // optional, biar full

    overlay.appendChild(img);
    document.body.appendChild(overlay);
});

// Semua overlay love
const overlays = document.querySelectorAll(".love-overlay");

function createHeartInOverlay(overlay){
    const heart = document.createElement('div');
    heart.classList.add('heart');

    heart.style.left = Math.random()*100 + 'vw';
    const startY = Math.random()*20; 
    heart.style.setProperty('--startY', startY + 'vh');

    const scale = Math.random()*0.5 + 0.5;
    heart.style.width = 15*scale + 'px';
    heart.style.height = 15*scale + 'px';

    const duration = Math.random()*3 + 4;
    heart.style.animationDuration = duration + 's';

    // opacity acak tiap hati
    heart.style.opacity = (Math.random()*0.5 + 0.5).toString(); // 0.5 - 1

    overlay.appendChild(heart);
    setTimeout(()=>heart.remove(), duration*1000);
}

// spawn hati di semua overlay tiap 50ms
setInterval(()=>{
    overlays.forEach(overlay => createHeartInOverlay(overlay));
}, 50);
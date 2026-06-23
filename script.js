// ==========================
// LETTER TEXT
// ==========================

const message = `.`;

const typedText = document.getElementById("typedText");

let i = 0;

// ==========================
// CURTAIN OPEN ON BUTTON CLICK
// ==========================

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    openBtn.style.display = "none";

    document
    .querySelector(".curtain-left")
    .classList.add("open-left");

    document
    .querySelector(".curtain-right")
    .classList.add("open-right");

    document
    .querySelector(".letter-container")
    .style.opacity = "1";

    const music =
    document.getElementById("bgMusic");

    music.play().catch(()=>{});

    setTimeout(typeWriter,1800);

});

// ==========================
// HANDWRITING EFFECT
// ==========================

function typeWriter(){

    if(i < message.length){

        typedText.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }else{

        document
        .querySelector(".signature")
        .style.opacity = "1";

        finalGlow();

    }
}

// ==========================
// HEARTS ON TAP
// ==========================

document.addEventListener("click",(e)=>{

    if(e.target.id === "openBtn") return;

    createHeart(
        e.clientX,
        e.clientY
    );

});

function createHeart(x,y){

    const heart =
    document.createElement("div");

    heart.innerHTML = "💖";

    heart.style.position = "fixed";

    heart.style.left = x + "px";

    heart.style.top = y + "px";

    heart.style.fontSize = "26px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "9999";

    document.body.appendChild(heart);

    let pos = y;

    const interval = setInterval(()=>{

        pos -= 2.5;

        heart.style.top = pos + "px";

        heart.style.opacity =
        heart.style.opacity - 0.02 || 1;

    },16);

    setTimeout(()=>{

        clearInterval(interval);

        heart.remove();

    },1400);

}

// ==========================
// SLOW DREAMY SPARKLES
// ==========================

setInterval(()=>{

    const sparkle =
    document.createElement("div");

    sparkle.innerHTML = "✨";

    sparkle.style.position = "fixed";

    sparkle.style.left =
    Math.random() * window.innerWidth + "px";

    sparkle.style.top = "-30px";

    sparkle.style.opacity = "0.75";

    sparkle.style.fontSize =
    (12 + Math.random() * 10) + "px";

    sparkle.style.pointerEvents = "none";

    sparkle.style.zIndex = "1";

    document.body.appendChild(sparkle);

    let y = -30;

    const fall = setInterval(()=>{

        y += 0.7;

        sparkle.style.top = y + "px";

    },20);

    setTimeout(()=>{

        clearInterval(fall);

        sparkle.remove();

    },18000);

},1200);

// ==========================
// FINAL GLOW
// ==========================

function finalGlow(){

    typedText.style.animation =
    "glow 2s infinite alternate";

                             }

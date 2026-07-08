let score = 0;

const scoreElement =
document.getElementById("score");

const gameArea =
document.getElementById("gameArea");

/* MINI GAME */

function spawnHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "💙";

    heart.style.left =
    Math.random() * (gameArea.clientWidth - 50)
    + "px";

    heart.style.top =
    Math.random() * (gameArea.clientHeight - 50)
    + "px";

    heart.addEventListener("click", () => {

        score++;
        scoreElement.textContent = score;

        heart.remove();

        if(score === 20){
            alert("🥳 Yeay! Semoga cil udah mulai senyum lagi.");
        }

    });

    gameArea.appendChild(heart);

    setTimeout(() => {

        if(heart.parentNode){
            heart.remove();
        }

    }, 2500);
}

setInterval(spawnHeart, 1000);

/* PELUK VIRTUAL */

document
.getElementById("hugBtn")
.addEventListener("click", () => {

    alert("🤗 Peluk virtual berhasil dikirim!");
});

/* KATA PENYEMANGAT */

const quotes = [

    "💙 Kamu jauh lebih kuat dari yang kamu kira.",

    "✨ Jangan terlalu keras sama diri sendiri ya.",

    "🌈 Hari buruk itu cuma sementara.",

    "🧸 Kamu berharga dan spesial.",

    "☁️ Semoga hari kamu jadi lebih baik setelah ini.",

    "💙 Jangan lupa istirahat dan senyum sedikit ya."
];

document
.getElementById("motivationBtn")
.addEventListener("click", () => {

    const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

    document.getElementById("motivationText")
    .textContent = randomQuote;
});

/* CONFETTI */

document
.getElementById("forgiveBtn")
.addEventListener("click", () => {

    for(let i = 0; i < 180; i++){

        const confetti =
        document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
        Math.random() * 100 + "vw";

        confetti.style.width =
        Math.random() * 10 + 6 + "px";

        confetti.style.height =
        confetti.style.width;

        const colors = [
            "#4a90e2",
            "#67b7ff",
            "#8fd3ff",
            "#b8e3ff",
            "#ffd166",
            "#7bd389"
        ];

        confetti.style.background =
        colors[Math.floor(Math.random() * colors.length)];

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }

    alert("🥹 Makasih cil udah maafin gua 💙");
});

const message = `

hai cil... 🥺

gua tau mungkin gua ada salah.

dan mungkin gua juga bikin lu kesel.

tapi jujur...

gua lebih milih lu marah.

lu ngomel.

lu bete.

daripada lu bilang "ga ada apa-apa"
padahal masih kepikiran.

karena pas lu cuek,
gua malah kepikiran terus. 😔

jadi kalau gua salah...

langsung marahin gua aja ya.

dan kalau hari ini hati lu masih kesel,

semoga website kecil ini
bisa bikin lu senyum dikit aja.

🥺🩵

- (Deo)

`;

const typingElement =
document.getElementById("typingText");

let index = 0;

function typeWriter(){

    if(index < message.length){

        typingElement.innerHTML +=
        message.charAt(index);

        index++;

        setTimeout(typeWriter, 50);
    }
}

window.addEventListener("load", () => {

    setTimeout(typeWriter, 1000);

});

const button = document.getElementById("clickedButton");
const envelope = document.getElementById("envelope");
const main = document.getElementById("mainContent");
const bottomFlap = document.getElementById("bottomFlap");
const mapButton = document.getElementById("mapButton");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const icon = musicBtn.querySelector("i");
const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
//button open
button.addEventListener("click", () => {
  envelope.classList.toggle("open");
  music.play();
  icon.classList.remove("fa-play");
  icon.classList.add("fa-pause");
});


bottomFlap.addEventListener(
  "transitionend",
  () => {
    envelope.classList.add("hidden");
    main.classList.remove("hidden");
    main.classList.add("block");
  },
  { once: true },
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.05,
  },
);

document.querySelectorAll(".fade-up").forEach((el) => {
  observer.observe(el);
});
mapButton.addEventListener("click", () => {
  window.open(
    "https://www.google.com/maps?cid=16842636529515791998&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=en&gl=EG&source=embed",
  );
});
const targetDate = new Date(2026, 9, 16, 19, 0, 0).getTime();


function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML =
      `<div class="flex justify-center items-center gap-1"><h2>Today is our wedding day  <i class="fa-regular fa-heart text-[#a69277]"></i></h2></div>`;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = String(days).padStart(2, "0");
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(seconds).padStart(2, "0");
}
updateCountdown();
const interval = setInterval(updateCountdown, 1000);

const swiper = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    icon.classList.replace("fa-play", "fa-pause");
  } else {
    music.pause();
    icon.classList.replace("fa-pause", "fa-play");
  }
});

const start = 0;
const end = 30;

music.currentTime = start;

music.addEventListener("timeupdate", () => {
  if (music.currentTime >= end) {
    music.currentTime = start;
    music.play();
  }
});

const flower = document.getElementById("flowerImg");

let scaled = false;

setInterval(() => {
  scaled = !scaled;
  flower.style.transition = "transform 0.5s";
  flower.style.transform = scaled ? "scale(1.2)" : "scale(1)";
}, 1000);
//=================
//kids message
const openMessage=document.getElementById("openMessage")
const kidsMessage=document.getElementById("kidsMessage")

openMessage.addEventListener("click",()=>{
  kidsMessage.classList.toggle("hidden");
  kidsMessage.classList.toggle("flex");

  
})

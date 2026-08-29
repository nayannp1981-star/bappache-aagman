const welcome = document.getElementById("welcome");
const invitation = document.getElementById("invitation");
const enterButton = document.getElementById("enterButton");
const musicButton = document.getElementById("musicButton");
const audio = document.getElementById("aartiAudio");

function showInvitation() {
  invitation.hidden = false;
  welcome.classList.add("is-hidden");

  window.setTimeout(() => {
    welcome.remove();
  }, 700);

  document.querySelectorAll(".reveal").forEach((element, index) => {
    window.setTimeout(() => {
      element.classList.add("show");
    }, Math.min(index * 70, 560));
  });
}

enterButton.addEventListener("click", showInvitation);

musicButton.addEventListener("click", async () => {
  if (audio.paused) {
    try {
      await audio.play();
    } catch {
      alert("संगीतासाठी aarti.mp3 फाइल website folder मध्ये टाका.");
    }
  } else {
    audio.pause();
  }
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
  });
}
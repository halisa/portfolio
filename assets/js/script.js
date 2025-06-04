const links = [
    "https://halisa.github.io/apisa.html",
    "https://halisa.github.io/chiu.html",
    "https://halisa.github.io/city.html",
    "https://halisa.github.io/dvp.html",
    "https://halisa.github.io/games.html",
    "https://halisa.github.io/hilltop.html",
    "https://halisa.github.io/illustration.html",
    "https://halisa.github.io/marcom.html",
    "https://halisa.github.io/moon.html",
    "https://halisa.github.io/omg.html",
    "https://halisa.github.io/seatac.html",
    "https://halisa.github.io/slow.html"
]

function getRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
}

function goToRandomLink() {
  const randomLink = getRandomLink();
  window.location.href = randomLink;
}
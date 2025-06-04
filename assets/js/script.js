const links = [
    "https://halisa.github.io/dvp.html",
    "https://halisa.github.io/marcom.html",
    "https://halisa.github.io/games.html"
    // "https://halisa.github.io/",
    // "https://halisa.github.io/",
    // "https://halisa.github.io/",
    // "https://halisa.github.io/",
    // "https://halisa.github.io/",
    // "https://halisa.github.io/",
    // "https://halisa.github.io/"
]

function getRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
}

function goToRandomLink() {
  const randomLink = getRandomLink();
  window.location.href = randomLink;
}
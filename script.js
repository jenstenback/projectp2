// Kleine animatie bij het laden
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

// Voorbeeld interactie: klik op poster voor effect
const poster = document.querySelector('.poster');
if (poster) {
    poster.addEventListener('click', () => {
        poster.classList.toggle('glow');
    });
}

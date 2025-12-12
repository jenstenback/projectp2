window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

const poster = document.querySelector('.poster');
if (poster) {
    poster.addEventListener('click', () => {
        poster.classList.toggle('glow');
    });
}

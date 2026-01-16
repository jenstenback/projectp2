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

function downloadImage(button) {
    const img = button.parentElement.querySelector("img");
    const url = img.src;
    const filename = url.split("/").pop();

    fetch(url)
        .then(r => r.blob())
        .then(blob => {
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = filename;
            a.click();
            URL.revokeObjectURL(a.href);
        });
}


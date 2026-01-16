// Smooth scroll voor interne links (optioneel, in de toekomst)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function downloadImage(button) {
    const img = button.parentElement.querySelector('img');
    const url = img.src;
    const name = url.split('/').pop();

    fetch(url)
        .then(r => r.blob())
        .then(blob => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = name;
            a.click();
            URL.revokeObjectURL(a.href);
        });
}

function handleSearch(event) {
    if (event.key !== "Enter") return;

    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const resultsContainer = document.getElementById("searchResults");
    resultsContainer.innerHTML = ""; // oude resultaten leegmaken

    if (!query) {
        resultsContainer.style.display = "none";
        return;
    }

    const allElements = document.querySelectorAll("section, header, footer, p, h1, h2, h3, li");
    const matched = [];

    allElements.forEach(el => {
        if (el.textContent.toLowerCase().includes(query)) {
            // Voeg toe als nog niet aanwezig
            if (!matched.includes(el)) matched.push(el);
        }
    });

    if (matched.length === 0) {
        const noResult = document.createElement("div");
        noResult.textContent = "Geen resultaten gevonden";
        resultsContainer.appendChild(noResult);
    } else {
        matched.forEach(el => {
            const div = document.createElement("div");
            // toon eerste 60 tekens van de tekst
            div.textContent = el.textContent.slice(0, 60) + (el.textContent.length > 60 ? "..." : "");
            div.onclick = () => {
                el.scrollIntoView({behavior: "smooth", block: "start"});
                resultsContainer.style.display = "none";
            };
            resultsContainer.appendChild(div);
        });
    }

    resultsContainer.style.display = "block";
}

// Verberg resultaten als gebruiker buiten klikt
document.addEventListener("click", function(e) {
    if (!document.querySelector(".search-container").contains(e.target)) {
        document.getElementById("searchResults").style.display = "none";
    }
});

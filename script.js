function afficherMessage() {
    alert("Prends soin de tes cheveux, même sous le voile 💖");
}
function montrerConseil() {
    document.getElementById("message").style.display = "block";
}

function changerCouleur() {
    document.body.style.backgroundColor = "#ffb6c1";
}

function conseilAleatoire() {
    const conseils = [
        "Hydrate tes cheveux régulièrement 💧",
        "Évite les coiffures trop serrées 🚫",
        "Utilise un bonnet en satin 🌙",
        "Fais un masque naturel 1 fois par semaine 🌿"
    ];

    let random = Math.floor(Math.random() * conseils.length);
    document.getElementById("conseil").innerText = conseils[random];
}
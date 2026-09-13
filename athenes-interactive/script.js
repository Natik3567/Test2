// Initialisation de la carte centrée sur Athènes
const map = L.map('map').setView([37.9715, 23.7265], 15);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// 1. AJOUTE LES LIENS D'IMAGES DANS LE TABLEAU DE DONNÉES ICI ⬇️
const lieux = [
    {
        nom: "L'Acropole et le Parthénon",
        coords: [37.9715, 23.7265],
        type: "Religieux",
        desc: "Colline sacrée d'Athènes. Abrite le Parthénon dédié à la déesse Athéna. Symbole du rayonnement culturel et religieux de la cité sous Périclès.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/The_Parthenon_in_Athens.jpg/640px-The_Parthenon_in_Athens.jpg" // 👈 TON LIEN D'IMAGE ICI
    },
    {
        nom: "L'Agora",
        coords: [37.9750, 23.7225],
        type: "Politique & Commercial",
        desc: "Grande place publique au cœur de la cité. Centre de la vie publique, du commerce et lieu de débat pour les citoyens.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ancient_Agora_of_Athens%2C_looking_NW.jpg/640px-Ancient_Agora_of_Athens%2C_looking_NW.jpg" // 👈 TON LIEN D'IMAGE ICI
    },
    {
        nom: "La Pnyx",
        coords: [37.9718, 23.7194],
        type: "Politique",
        desc: "Colline où se réunit l'Ecclésia (l'assemblée des citoyens) pour voter les lois, la guerre et l'ostracisme.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Pnyx_athens.jpg/640px-Pnyx_athens.jpg" // 👈 TON LIEN D'IMAGE ICI
    },
    {
        nom: "Le Pirée",
        coords: [37.9421, 23.6465],
        type: "Maritime & Militaire",
        desc: "Port fortifié d'Athènes relié à la cité par les Longs Murs. Assure la puissance maritime (thalassocratie) et le commerce.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Piraeus_port.jpg/640px-Piraeus_port.jpg" // 👈 TON LIEN D'IMAGE ICI
    }
];

// 2. AJOUTE LA BALISE <img> DANS LA POPUP ICI ⬇️
lieux.forEach(lieu => {
    const marker = L.marker(lieu.coords).addTo(map);
    marker.bindPopup(`
        <div class="popup-title">${lieu.nom}</div>
        <img src="${lieu.image}" alt="${lieu.nom}" style="width:100%; border-radius:6px; margin: 8px 0;">
        <p><strong>Rôle :</strong> ${lieu.type}</p>
        <p>${lieu.desc}</p>
    `);
});
document.addEventListener("DOMContentLoaded", function () {
    const map = L.map('map').setView([37.9715, 23.7265], 15);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Repère d'exemple
    L.marker([37.9715, 23.7265]).addTo(map)
        .bindPopup('<b>L\'Acropole</b>')
        .openPopup();
});
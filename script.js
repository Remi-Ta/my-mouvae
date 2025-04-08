document.addEventListener('DOMContentLoaded', function() {
    // Initialiser la carte
    var map = L.map('map').setView([46.32, -0.46], 13); // Coordonnées de Niort

    // Ajouter une couche de tuiles OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Exemple de données pour les lignes de bus
    var busLines = [
        { name: 'Ligne 1', path: [[46.32, -0.46], [46.33, -0.45], [46.34, -0.44]] },
        { name: 'Ligne 2', path: [[46.31, -0.47], [46.32, -0.46], [46.33, -0.45]] }
    ];

    // Exemple de données pour les arrêts
    var busStops = [
        { name: 'Arrêt A', location: [46.32, -0.46] },
        { name: 'Arrêt B', location: [46.33, -0.45] }
    ];

    // Ajouter les lignes de bus à la carte
    var lineLayers = busLines.map(function(line) {
        return L.polyline(line.path, { color: 'blue' }).addTo(map);
    });

    // Ajouter les arrêts de bus à la carte
    var stopLayers = busStops.map(function(stop) {
        return L.marker(stop.location).bindPopup(stop.name).addTo(map);
    });

    // Fonction pour afficher/masquer les lignes
    document.getElementById('toggleLines').addEventListener('click', function() {
        lineLayers.forEach(function(layer) {
            if (map.hasLayer(layer)) {
                map.removeLayer(layer);
            } else {
                layer.addTo(map);
            }
        });
    });

    // Fonction pour afficher/masquer les arrêts
    document.getElementById('toggleStops').addEventListener('click', function() {
        stopLayers.forEach(function(layer) {
            if (map.hasLayer(layer)) {
                map.removeLayer(layer);
            } else {
                layer.addTo(map);
            }
        });
    });
});

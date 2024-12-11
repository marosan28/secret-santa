// Initialize the map
const map = L.map('map').setView([0, 0], 2); // Centered on the world map

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Add a sample marker for testing
const venusMarker = L.marker([40.7128, -74.006]).addTo(map);
venusMarker.bindPopup('Sample Venus Location: New York City');

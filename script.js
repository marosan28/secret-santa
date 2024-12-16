// Initialize the map
const map = L.map('map').setView([0, 0], 2); // Centered on the world map

// Add a tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Set map bounds to restrict scrolling
const bounds = L.latLngBounds(
    L.latLng(-85, -180), // Southwest corner
    L.latLng(85, 180) // Northeast corner
  );
  
  // Apply bounds to the map
  map.setMaxBounds(bounds);
  
  // Prevent zooming out too far to avoid seeing blank tiles
  map.setMinZoom(2);

  // Automatically bounce back to bounds if the user scrolls out
map.on('drag', function () {
    map.panInsideBounds(bounds, { animate: true });
  });
  

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('start-button').addEventListener('click', function () {
      document.getElementById('intro-screen').style.display = 'none';
    });
  });
  

// Custom marker icons
const venusIcon = L.icon({
  iconUrl: 'https://marosan28.github.io/secret-santa/static/icons/venus-icon.png', 
  iconSize: [32, 32],
});

const jupiterIcon = L.icon({
  iconUrl: 'https://marosan28.github.io/secret-santa/static/icons/jupiter-test.png', 
  iconSize: [40, 40],
});

const moonIcon = L.icon({
  iconUrl: 'https://marosan28.github.io/secret-santa/static/icons/moon-icon.png', 
  iconSize: [32, 32],
});

  
// Venus Line Markers
L.marker([35.0299, -85.3398], { icon: venusIcon }) // Ruby Falls
  .addTo(map)
  .bindPopup(`
    <h3>Ruby Falls</h3>
    <img src="static/images/ruby-falls.jpg" alt="Ruby Falls" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
    <p>Angela, since your Venus is in Sagittarius, you’re naturally drawn to expansive, adventurous beauty. Ruby Falls, hidden beneath the surface of Tennessee, represents that balance between exploration and hidden treasures in life. It’s a perfect spot to embrace your creative energy while journaling or reflecting on your next adventure in love or life.</p>
  `);

L.marker([1.209, -77.2818], { icon: venusIcon }) // Cascada Fin del Mundo
  .addTo(map)
  .bindPopup(`
    <h3>Cascada Fin del Mundo</h3>
    <img src="static/images/cascada-fin-del-mundo.jpg" alt="Cascada Fin del Mundo" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
    <p>Your Venus energy in Sagittarius thrives on freedom and connection with nature. Cascada Fin del Mundo in Colombia mirrors your bold spirit and love for the unknown. This spot invites you to pause, breathe, and immerse yourself in the harmonious beauty of untouched wilderness—something your Sagittarius Venus craves.</p>
  `);

L.marker([-9.097, 15.966], { icon: venusIcon }) // Kalandula Falls
  .addTo(map)
  .bindPopup(`
    <h3>Kalandula Falls</h3>
    <img src="static/images/kalandula-falls.jpg" alt="Kalandula Falls" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
    <p>Angela, with Venus in Sagittarius, you value awe-inspiring beauty and open spaces that make you feel alive. Kalandula Falls in Angola, one of the largest waterfalls in Africa, aligns with your adventurous and harmonious spirit. It’s a perfect place for you to dream big and let your creativity flow.</p>
  `);

// Jupiter Line Markers
L.marker([16.967, -92.0986], { icon: jupiterIcon }) // Agua Azul
  .addTo(map)
  .bindPopup(`
    <h3>Agua Azul</h3>
    <img src="static/images/agua-azul.jpg" alt="Agua Azul" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
    <p>Angela, with Jupiter in Virgo, you find joy in meaningful, earthy connections. Agua Azul in Mexico, with its vibrant turquoise waters, invites you to explore its many layers. This waterfall’s ever-changing beauty mirrors your love for discovering hidden details in life’s adventures.</p>
  `);

L.marker([-25.6953, -54.4367], { icon: jupiterIcon }) // Iguaçu Falls
  .addTo(map)
  .bindPopup(`
    <h3>Iguaçu Falls</h3>
    <img src="static/images/iguazu-falls.jpg" alt="Iguaçu Falls" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
    <p>Your Jupiter in Virgo craves purposeful growth, and Iguaçu Falls is a majestic example of nature’s grandeur. Standing before these immense cascades, you can reflect on the balance between small details and the bigger picture in your journey to growth and joy.</p>
  `);

L.marker([-18.2406, 145.8469], { icon: jupiterIcon }) // Wallaman Falls
  .addTo(map)
  .bindPopup(`
    <h3>Wallaman Falls</h3>
    <img src="static/images/wallaman-falls.jpg" alt="Wallaman Falls" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
    <p>Wallaman Falls, Australia’s tallest waterfall, speaks to your Jupiter in Virgo’s love for grounded adventures. Angela, this spot encourages you to connect with nature’s rhythm, reminding you that growth comes from appreciating life’s steady flow.</p>
  `);

// Moon Line Markers
L.marker([45.5758, -122.115], { icon: moonIcon }) // Multnomah Falls
  .addTo(map)
  .bindPopup(`
    <h3>Multnomah Falls</h3>
    <img src="static/images/multnomah-falls.jpg" alt="Multnomah Falls" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
    <p>Angela, your Moon in Cancer makes you crave emotional connection and serenity. Multnomah Falls, with its soft cascading waters and tranquil surroundings, mirrors your deeply reflective and nurturing spirit. This is the perfect place to embrace your intuition and let your emotions flow freely.</p>
  `);

L.marker([42.5355, 12.687], { icon: moonIcon }) // Marmore Falls
  .addTo(map)
  .bindPopup(`
    <h3>Marmore Falls</h3>
    <img src="static/images/marmore-falls.jpg" alt="Marmore Falls" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
    <p>With your Moon in Cancer, you feel at peace in places that nurture your soul. Marmore Falls in Italy, steeped in history and natural beauty, aligns with your need for calm and reflection. This spot encourages you to trust your intuition as you take a quiet moment for yourself.</p>
  `);

L.marker([33.668, 135.894], { icon: moonIcon }) // Nachi Falls
  .addTo(map)
  .bindPopup(`
    <h3>Nachi Falls</h3>
    <img src="static/images/nachi-falls.jpg" alt="Nachi Falls" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 10px;">
    <p>Nachi Falls, a sacred waterfall in Japan, resonates perfectly with your Moon in Cancer. Angela, this serene and spiritual spot invites you to connect with your inner self and find emotional clarity amidst the calming flow of water.</p>
  `);


// Event listener for the "Click to Continue" button
document.getElementById('start-button').addEventListener('click', function () {
  document.getElementById('intro-screen').style.display = 'none'; // Hide intro
  document.getElementById('map-overlay').style.display = 'block'; // Show map overlay
});

// Event listener for the "Close" button in the map overlay
document.getElementById('close-overlay').addEventListener('click', function () {
  document.getElementById('map-overlay').style.display = 'none'; // Hide map overlay
});

  
// Create a custom legend
const legend = L.control({ position: 'bottomleft' });
legend.onAdd = function (map) {
  const div = L.DomUtil.create('div', 'legend');

  div.innerHTML = `
    <h4>Map Legend 🌌</h4>
    <div class="icon venus-icon">
      <img src="static/icons/venus-test.png" alt="Venus" class="venus-icon" />
      <span><strong>Venus Line:</strong> Beauty, Harmony, and Creativity</span>
    </div>
    <div class="icon icon-jupiter">
      <img src="static/icons/jupiter-test.png" alt="Jupiter" class="jupiter-icon" />
      <span><strong>Jupiter Line:</strong> Growth, Joy, and Adventure</span>
    </div>
    <div class="icon moon-icon">
      <img src="static/icons/moon-test.png" alt="Moon" class="moon-icon" />
      <span><strong>Moon Line:</strong> Emotional Intuition and Reflection</span>
    </div>
  `;

  return div;
};

// Add the legend to the map
legend.addTo(map);

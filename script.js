let map;

async function initMap() {

  const mapCenter = { lat: 22.35, lng: 113.77 };

  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");


  map = new Map(document.getElementById("map"), {
    zoom: 9,
    center: mapCenter,
    mapId: "pearlmap",
  });

  const markerPositions = [
    { lat: 22.311629, lng: 114.172011, title: "Hong Kong" },
    { lat: 22.19696, lng: 113.542304, title: "Macao" },
    { lat: 22.271531, lng: 113.577744, title: "Zhu Hai" },
    { lat: 22.538069, lng: 114.059748, title: "Shen Zhen" },
    { lat: 22.516022, lng: 113.392856, title: "Zhong Shan" },
  ];

  markerPositions.forEach(position => {
    new AdvancedMarkerElement({
      map: map,
      position: { lat: position.lat, lng: position.lng },
      title: position.title,
    });
  });
}

initMap();

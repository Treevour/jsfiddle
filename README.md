<!DOCTYPE html>
<html>

<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>zyuhoideitou</title>

  <style>
    /* 
 * Always set the map height explicitly to define the size of the div element
 * that contains the map. 
 */
#map {
  height: 100%;
}

/* 
 * Optional: Makes the sample page fill the window. 
 */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
  </style>

  
</head>
<body>
  <html>
  <head>
    <title>Add Map</title>

    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script type="module" src="./index.js"></script>
  </head>
  <body>
    <h3>The Beautiful Cities of the Pearl River Delta Estuary</h3>
    <div id="map"></div>

    <script>(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg", v: "weekly"});</script>
  </body>
</html>

  <script>
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
  </script>
</body>
</html>

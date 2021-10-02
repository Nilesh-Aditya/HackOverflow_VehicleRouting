async function file(){
  let res = await fetch('./delivery_points.json');
  let data = await res.json();
  
  return data;
}

// let map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 12,
//     center: new google.maps.LatLng(12.9716, 77.5946),
//     mapTypeId: "terrain",
//   });

//   // Create a <script> tag and set the USGS URL as the source.
//   const script = document.createElement("script");

//   // This example uses a local copy of the GeoJSON stored at
//   // http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp
//   script.src =
//     "./customer.js";
//   document.getElementsByTagName("head")[0].appendChild(script);
//   console.log(document.getElementsByTagName("head")[0]);
// }

// // Loop through the results array and place a marker for each
// // set of coordinates.
// const eqfeed_callback = function (data) {
//     // const data = await file();
//     // console.log(data.data.customer_details);
//     // for (let i = 0; i < results.features.length; i++) {
//     // const coords = results.features[i].geometry.coordinates;
//     // const latLng = new google.maps.LatLng(coords[1], coords[0]);

//     //     new google.maps.Marker({
//     //         position: latLng,
//     //         map: map,
//     //     });
//     // }
//     let cust = data.data.customer_details;
//     let i = 0;
//     for(let key in cust){
//         // console.log(cust[key]['customer_address'].lat_long);
//         let coords = cust[key]['customer_address'].lat_long;

//         // console.log(Number(coords.latitude), Number(coords.longitude));
//         let lat_lng = new google.maps.LatLng(Number(coords.latitude), Number(coords.longitude));
      
//         new google.maps.Marker({
//             position: lat_lng,
//             map: map
//         });
//         // console.log(i++);
//     }
// };

// eqfeed_callback();

let mymap = L.map('map').setView([12.93149600, 77.67884500], 13);

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution});

tiles.addTo(mymap);

async function putMarker(){
const data = await file();
let cust = data.data.customer_details;
console.log(cust);
  for(let key in cust){
      // console.log(cust[key]['customer_address'].lat_long);
      let coords = cust[key]['customer_address'].lat_long;

      if(Object.keys(coords).length > 0){
        L.marker([Number(coords.latitude), Number(coords.longitude)]).addTo(mymap);
      }
  }
}

putMarker();
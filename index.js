async function file(){
  let res = await fetch('./delivery_points.json');
  let data = await res.json();
  
  return data;
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 19,
    center: new google.maps.LatLng(12.93149600, 77.67884500),
    mapTypeId: "terrain",
  });
}

// // Loop through the results array and place a marker for each
// // set of coordinates.
let arr = [];
const lbl = ""
async function fn () {
    const data = await file();
    let cust = data.data.customer_details;
    let i = 0, marker;
    for(let key in cust){
        console.log(cust[key]['customer_address'].lat_long);
        let coords = cust[key]['customer_address'].lat_long;
        let customerName = cust[key]['customer_name'];
        let instructions = cust[key]['instructions'];
        let flat = cust[key]['customer_address'].flat;
        let building = cust[key]['customer_address'].building;
        let area = cust[key]['customer_address'].area;
        let city = cust[key]['customer_address'].city;

        // console.log(Number(coords.latitude), Number(coords.longitude));
        if(Object.keys(coords).length > 0){
          let lat_lng = new google.maps.LatLng(parseFloat(coords.latitude), parseFloat(coords.longitude));

          // arr.push({lat : parseFloat(coords.latitude), lng : parseFloat(coords.longitude)});

          // // console.log(lat_lng);
          // localStorage.setItem('s1', JSON.stringify(arr));
          marker = new google.maps.Marker({
              position: lat_lng,
              // label: String(++i),
              map: map
          });

          // let icon = {
          //   url: "./img/im1.png", // url
          //   scaledSize: new google.maps.Size(50, 50), // scaled size
          //   origin: new google.maps.Point(0,0), // origin
          //   anchor: new google.maps.Point(0, 0) // anchor
          // };

          // if(i <= 10){
          //   marker.setIcon(icon);
          // }
        }
    }
}
// fn();
(function (){
  fn();
  arr = JSON.parse(localStorage.getItem('s1'));
  console.log(arr);

  const geocoder = new google.maps.Geocoder();
  const service = new google.maps.DistanceMatrixService();
  
  const request = {
    origins: arr,
    destinations: arr,
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  };
  
  // put request on page
  document.getElementById("request").innerText = JSON.stringify(
    request,
    null,
    2
    );
    // get distance matrix response
    service.getDistanceMatrix(request).then((response) => {
      // put response
      document.getElementById("response").innerText = JSON.stringify(
        response,
        null,
        2
        );
        
        // show on map
        const originList = response.originAddresses;
        const destinationList = response.destinationAddresses;
        
        deleteMarkers(markersArray);
        
        const showGeocodedAddressOnMap = (asDestination) => {
          const handler = ({ results }) => {
            map.fitBounds(bounds.extend(results[0].geometry.location));
            markersArray.push(
              new google.maps.Marker({
                map,
                position: results[0].geometry.location,
                label: asDestination ? "D" : "O",
              })
              );
            };
            return handler;
          };
          
          for (let i = 0; i < originList.length; i++) {
            const results = response.rows[i].elements;
            
            geocoder
            .geocode({ address: originList[i] })
            .then(showGeocodedAddressOnMap(false));
            
            for (let j = 0; j < results.length; j++) {
              geocoder
              .geocode({ address: destinationList[j] })
              .then(showGeocodedAddressOnMap(true));
            }
          }
        });
      }
)();


























      // eqfeed_callback();
      
      // let mymap = L.map('map').setView([12.93149600, 77.67884500], 13);
      
      // const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      
      // const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      // const tiles = L.tileLayer(tileUrl, {attribution});
      
      // tiles.addTo(mymap);
      
      // let mark = [];
      
      // async function putMarker(){
        //   const data = await file();
        //   let cust = data.data.customer_details;
        //   // console.log(cust);
        //   for(let key in cust){
          //       // console.log(cust[key]['customer_address'].lat_long);
          //       let coords = cust[key]['customer_address'].lat_long;
          
          //       if(Object.keys(coords).length > 0){
            //         L.marker([Number(coords.latitude), Number(coords.longitude)]).addTo(mymap);
            //         mark.push([Number(coords.latitude), Number(coords.longitude)]);
            //       }
            //   }
            // }
            // putMarker();
            
            // async function run(){
              //   for(let i = 0; i<marker.length - 1; i++){
                //     let x = L.Routing.control({
                  //       waypoints: [
                    //         L.latLng(marker[i][0], marker[i][1]),
                    //         L.latLng(marker[i + 1][0], marker[i + 1][1])
                    //       ]
                    //     }).addTo(mymap);
                    //   }
                    // }
                    
                    
                    // let arr = [];
                    
                    // routeControl.on('routesfound', function(e) {
                      //   var routes = e.routes;
                      //   var summary = routes[0].summary;
                      //   // alert time and distance in km and minutes
                      //   arr.push([summary.totalDistance / 1000 , Math.round(summary.totalTime % 3600 / 60)]);
                      // });
                      
                      // run();
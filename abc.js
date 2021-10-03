let arr = [{lat:12.931496,lng:77.678845},{lat:12.931796,lng:77.678836},{lat:12.931665,lng:77.678551},{lat:12.9312,lng:77.679135},{lat:12.931267,lng:77.678317},{lat:12.931181,lng:77.678961},{lat:12.931496,lng:77.678845},{lat:12.931062,lng:77.678977},{lat:12.930857,lng:77.679111},{lat:12.931685,lng:77.678334},{lat:12.931496,lng:77.678845},{lat:12.931645,lng:77.678632},{lat:12.931496,lng:77.678845},{lat:12.931257,lng:77.678424},{lat:12.931495,lng:77.678844},{lat:12.931484,lng:77.678748},{lat:12.931596,lng:77.678864},{lat:12.931496,lng:77.678845},{lat:12.931496,lng:77.678845},{lat:12.931135,lng:77.678991},{lat:12.931535,lng:77.678648},{lat:12.931496,lng:77.678845},{lat:12.931563,lng:77.678339},{lat:12.930968,lng:77.678944},{lat:12.930901,lng:77.678908},{lat:12.9312,lng:77.679135},{lat:12.931496,lng:77.678845},{lat:12.931796,lng:77.678836},{lat:12.931496,lng:77.678845},{lat:12.931551,lng:77.678958},{lat:12.931718,lng:77.67837},{lat:12.931556,lng:77.678746},{lat:12.931496,lng:77.678845},{lat:12.931496,lng:77.678845},{lat:12.931287,lng:77.679432},{lat:12.931665,lng:77.678551},{lat:12.9318972,lng:77.6784902},{lat:12.931718,lng:77.678529},{lat:12.931665,lng:77.678551},{lat:12.931796,lng:77.678836},{lat:12.931665,lng:77.678551},{lat:12.9312,lng:77.679135},{lat:12.9312,lng:77.679135},{lat:12.93192,lng:77.679116},{lat:12.931796,lng:77.678836}]

// let customerName = cust[key]['customer_name'];
// let instructions = cust[key]['instructions'];
// let flat = cust[key]['customer_address'].flat;
// let building = cust[key]['customer_address'].building;
// let area = cust[key]['customer_address'].area;
// let city = cust[key]['customer_address'].city;

let latitude = 0, longitude = 0;
let n = arr.length;
for(let i=0; i<n; i++){
    latitude += arr[i].lat;
    longitude += arr[i].lng;
}

let lat_avg = latitude / n;
let lng_avg = longitude / n;

console.log(lat_avg, lng_avg);
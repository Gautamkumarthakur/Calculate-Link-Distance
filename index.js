function calculate() {  
var lat1 = parseFloat(document.getElementById("lat1").value);
var lon1 = parseFloat(document.getElementById("long1").value);

var lat2 = parseFloat(document.getElementById("lat2").value);

var lon2= parseFloat(document.getElementById("long2").value);
var R = 6371;
var dLat = deg2rad(lat2-lat1);
var dLon = deg2rad(lon2-lon1);
var a = Math.sin(dLat/2) * math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2);
        var c = 2 * Math.atan2(math.sqrt(1-a));
        var d = R * c;

        var frequency = parseFloat(document.getElementById("channel frequency").value);
        var fres = Math.round(17.32 * Math.sqrt(d / ((4 * frequency) / 1000)) * 100) / 100;
        console.log(fres, frequency, d)
        document.getElementById("fresnelRadius").value = fres;
        document.getElementById("linkDistance").value = d;
        return fres, d;
}
function deg2rad(deg) {
    return deg * (Math.PI/180)
}

   

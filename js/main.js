
var url = "http://freegeoip.net/json/";
var ip = ["82.30.77.27","82.30.77.27","179.108.188.167","188.146.235.33"];






function initialize() {
    var mapOptions = {
        center: new google.maps.LatLng(50, 22),
        zoom: 3,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        mapOptions);
    var markerCluster = new MarkerClusterer(map, [], {
        imagePath: "images/m"
    });
    var markers = [];

    for(var i =0;i<ip.length;i++){
        $.get(url+""+ip[i],function(data){
            //console.log(data);
            var marker = new google.maps.Marker({
               position: {lat: data.latitude, lng: data.longitude}
            });

            markers.push(marker);
            markerCluster.addMarker(marker);


        });
    }




}



   var count = 0;
   var myMarker;

  map.on('click', function(e) {
    placeMarker(e.latlng, map);
    });

  function placeMarker(position, map)

  {
    if (count==1)
    {
        map.removeLayer(myMarker);
        count = 0;
        placeMarker(position, map);
    }

    else
    {       
        myMarker = new L.Marker(position, {draggable:true} );
        map.addLayer(myMarker);
        getLocation(myMarker, map);
        count = 1;
        L.Event.addListener(myMarker, 'dragend', function() {
            getLocation(myMarker,map);
        });
    }
  }

  

  

  function getLocation(myMarker, map)  

  {
    var lat = myMarker.getLatLng().lat; //same
    var lng = myMarker.getLatLng().lng; //same

    document.getElementById("inc_lat").value=lat;

    document.getElementById("inc_lng").value=lng; 

  }

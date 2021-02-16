require([
      "esri/Map",
      "esri/layers/CSVLayer",
      "esri/views/MapView",
      "esri/config",
      "esri/core/urlUtils",
      "dojo/domReady!"
    ], function(
      Map,
      CSVLayer,
      MapView,
      esriConfig,
      urlUtils
    ) {

     var url = "https://raw.githubusercontent.com/gbrunner/Advanced_Python_for_GIS_and_RS/master/Week%202/stl_crime_wgs_84.csv";
     esriConfig.request.corsEnabledServers.push('https://rawgit.com');

 
        const template = {
          title: "STL Crime Info",
          content: "Crime {Crime} {type} Neighboorhood {Neighborhood} on {ILEADSStreet}."
        };

        const csvLayer = new CSVLayer({
          url: url,
          copyright: "GitHUB STL Crime",
          popupTemplate: template
        });

        var symbol = {
          type: "simple-marker", 
          color:"black",
          size: 8,
          outline:{
            color: "yellow",
            width: 0.5
          }
                };

      csvLayer.renderer = {
        type: "simple", // autocasts as new SimpleRenderer()
        symbol: symbol
      };

      var map = new Map({
        basemap: "gray",
        layers: [csvLayer]
      });

      var view = new MapView({
        container: "viewDiv",
        center: [-90.1994, 38.6270],
        zoom: 12,
        map: map
      });

    });

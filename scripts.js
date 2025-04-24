mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbmRyZWE5OCIsImEiOiJjbTkxejExNXIwNnZ3Mm5tdjZtNzBjbWt2In0.EuYSzdMKHrh1jKmD2fWyXA';
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [-73.98062, 40.70253], // starting position [lng, lat]
            zoom: 10.31, // starting zoom
        });

        map.addControl(new mapboxgl.NavigationControl());

        console.log(gardenLots)

        map.on('load', () => {

            // Add garden lots data as a source
            map.addSource('gardenLots', {
                type: 'geojson',
                data: gardenLots
            })
            //Add abbutting tax lots data as a source
            map.addSource('abuttingLots', {
                type: 'geojson',
                data: abuttingLots
            })

            // Add a layer to visualize the garden lots

            map.addLayer({
                id: 'gardenLots',
                type: 'fill',
                source: 'gardenLots',
                paint: {
                    'fill-color': '#64ed7d',
                    'fill-opacity': 0.7,
                }
            })
            map.addLayer({
                id: 'abuttingLots',
                type: 'fill',
                source: 'abuttingLots', 
                paint: {
                    'fill-color': '#59ecff',
                    'fill-opacity': 0.7,
                }
            });
        });
        //Add a layer to visualize abutting tax lots
        
        //May explore thie following later

        // // Add a marker for each garden lot
        // gardenLots.features.forEach((feature) => {
        //     const coordinates = feature.geometry.coordinates[0][0][0];
        //     const marker = new mapboxgl.Marker()
        //         .setLngLat(coordinates)
        //         .addTo(map);

        //     // Add a click event to the marker
        //     marker.getElement().addEventListener('click', () => {
        //         map.flyTo({
        //             center: coordinates,
        //             zoom: 17.5,
        //             duration: 1800
        //         });
        //     });
        // });

        /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  document.getElementById('211 Street').addEventListener('click', () => {
    map.flyTo({
        center: [-73.86389, 40.87792],
        zoom: 17.56,
        duration: 1800
        
    })
})
document.getElementById('Bathgate').addEventListener('click', () => {
    map.flyTo({
        center: [-73.89792, 40.84491],
        zoom: 17.67,
        duration: 1800
        
    })
})
document.getElementById('Clinton').addEventListener('click', () => {
    map.flyTo({
        center: [-73.88848, 40.84623],
        zoom: 17.76,
        duration: 1800
        
    })
})
document.getElementById('Rhodebeck').addEventListener('click', () => {
    map.flyTo({
        center: [-73.88990, 40.82163],
        zoom: 17.54,
        duration: 1800
        
    })
})

document.getElementById('Target Bronx').addEventListener('click', () => {
    map.flyTo({
        center: [-73.92749, 40.83304],
        zoom: 17.70,
        duration: 1800
        
    })
})

document.getElementById('Willis').addEventListener('click', () => {
    map.flyTo({
        center: [-73.92021, 40.81230],
        zoom: 17.82,
        duration: 1800
        
    })
})

document.getElementById('Bridge Plaza').addEventListener('click', () => {
    map.flyTo({
        center: [-73.98465, 40.69791],
        zoom: 18.40,
        duration: 1800
        
    })
})
document.getElementById('Greene Acres').addEventListener('click', () => {
    map.flyTo({
        center: [-73.95804, 40.68799],
        zoom: 18.20,
        duration: 1800
        
    })
})
document.getElementById('Jane Bailey').addEventListener('click', () => {
    map.flyTo({
        center: [-73.95857, 40.68792],
        zoom: 18.17,
        duration: 1800
        
    })
})
document.getElementById('McLeods').addEventListener('click', () => {
    map.flyTo({
        center: [-73.90535, 40.67283],
        zoom: 18.14,
        duration: 1800
        
    })
})
document.getElementById('Scholes').addEventListener('click', () => {
    map.flyTo({
        center: [-73.94466, 40.70835],
        zoom: 18.09,
        duration: 1800
        
    })
})
document.getElementById('La Casita').addEventListener('click', () => {
    map.flyTo({
        center: [-73.93759, 40.79974],
        zoom: 18.25,
        duration: 1800
        
    })
})
document.getElementById('Los Amigos').addEventListener('click', () => {
    map.flyTo({
        center: [-73.93214, 40.79597],
        zoom: 18.60,
        duration: 1800
        
    })
})
document.getElementById('Rodale').addEventListener('click', () => {
    map.flyTo({
        center: [-73.93440, 40.79429],
        zoom: 18.33,
        duration: 1800
        
    })
})

  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

       
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

            map.addLayer({
                id: 'gardenLots',
                type: 'fill',
                source: 'gardenLots',
                paint: {
                    'fill-color': '#64ed7d',
                    'fill-opacity': 0.7,
                }
            })
        });

        /* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  document.getElementById('fly-aleutian').addEventListener('click', () => {
    map.flyTo({
        center: [-170.88841, 54.53183],
        zoom: 4.33,
        duration: 1500
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

       
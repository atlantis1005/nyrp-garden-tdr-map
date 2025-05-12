mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbmRyZWE5OCIsImEiOiJjbTkxejExNXIwNnZ3Mm5tdjZtNzBjbWt2In0.EuYSzdMKHrh1jKmD2fWyXA';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/dark-v11',
    maxBounds:
        [
            [-74.40871, 40.42799],
            [-73.67502, 41.03391]
        ], // limit the map to the specified bounds
    center: [-73.96819, 40.78541], // starting position [lng, lat]
    zoom: 10.35, // starting zoom

});

map.addControl(new mapboxgl.NavigationControl());


//Declare marker
let marker;

const gardenColor = '#05af5c';

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
            'fill-color': gardenColor,
            'fill-opacity': 0.7,
        }
    })
    map.addLayer({
        id: 'abuttingLotsDefault',
        type: 'fill',
        source: 'abuttingLots',
        paint: {
            'fill-color': '#59ecff',
            'fill-opacity': 0.7,
        }
    });
    const gardenLotsData = gardenLots.features;
    const markers = []; // store all markers

    gardenLotsData.forEach((feature) => {
        const coordinates = feature.geometry.coordinates[0][0][0];
        const name = feature.properties.Name;

        const marker = new mapboxgl.Marker({ color: gardenColor })
            .setLngLat(coordinates)
            .addTo(map);

        markers.push(marker); // store it
    });

    // Hide/show all markers on zoom
    map.on('zoom', () => {
        const currentZoom = map.getZoom();
        markers.forEach(marker => {
            marker.getElement().style.display = currentZoom > 15 ? 'none' : 'block';
        });
    });

    
});





// When the user clicks on the button, toggle between hiding and showing the dropdown content 
function bronxFunction() {
    closeAllDropdowns()
    document.getElementById("bronxDropdown").classList.toggle("show");
}
function brooklynFunction() {
    closeAllDropdowns()
    document.getElementById("brooklynDropdown").classList.toggle("show");
}
function manhattanFunction() {
    closeAllDropdowns()
    document.getElementById("manhattanDropdown").classList.toggle("show");
}

function closeAllDropdowns() {
    document.querySelectorAll('.dropdown-content').forEach(drop => {
        drop.classList.remove('show');
    });
}

document.querySelectorAll('.gardenList').forEach(button => {
    button.addEventListener('click', () => {
      const siteName = button.getAttribute('data-name');
      const siteData = gardenNames.find(site => site.gardenSites === siteName);
      const selectedGarden = document.getElementById('selectedGarden');
      const tSF = document.getElementById('tSF');

      if (siteData) {
        selectedGarden.textContent = 
          `${siteData.gardenSites}`;
          tSF.textContent = 
          `Transferrable SF = ${siteData.transferrableSF}`;
          selectedGarden.classList.add('visible');
          tSF.classList.add('visible');
      } else {
        selectedGarden.textContent = 
          `No data found for ${siteName}`;
      }
    });
  });

//Fly functionality for each garden when clicked
document.getElementById('street211').addEventListener('click', () => {
    map.flyTo({
        center: [-73.86389, 40.87792],
        zoom: 17.56,
        duration: 1800

    })
})
document.getElementById('bathgate').addEventListener('click', () => {
    map.flyTo({
        center: [-73.89792, 40.84491],
        zoom: 17.67,
        duration: 1800

    })
})
document.getElementById('clinton').addEventListener('click', () => {
    map.flyTo({
        center: [-73.88848, 40.84623],
        zoom: 17.76,
        duration: 1800

    })
})
document.getElementById('rhodebeck').addEventListener('click', () => {
    map.flyTo({
        center: [-73.88990, 40.82163],
        zoom: 17.54,
        duration: 1800

    })
})

document.getElementById('targetBronx').addEventListener('click', () => {
    map.flyTo({
        center: [-73.92749, 40.83304],
        zoom: 17.70,
        duration: 1800

    })
})

document.getElementById('willis').addEventListener('click', () => {
    map.flyTo({
        center: [-73.92021, 40.81230],
        zoom: 17.82,
        duration: 1800

    })
})

document.getElementById('bridgePlaza').addEventListener('click', () => {
    map.flyTo({
        center: [-73.98465, 40.69791],
        zoom: 18.40,
        duration: 1800

    })
})
document.getElementById('greeneAcres').addEventListener('click', () => {
    map.flyTo({
        center: [-73.95804, 40.68799],
        zoom: 18.20,
        duration: 1800

    })
})
document.getElementById('janeBailey').addEventListener('click', () => {
    map.flyTo({
        center: [-73.95857, 40.68792],
        zoom: 18.17,
        duration: 1800

    })
})
document.getElementById('mcLeods').addEventListener('click', () => {
    map.flyTo({
        center: [-73.90535, 40.67283],
        zoom: 18.14,
        duration: 1800

    })
})
document.getElementById('scholes').addEventListener('click', () => {
    map.flyTo({
        center: [-73.94466, 40.70835],
        zoom: 18.09,
        duration: 1800

    })
})
document.getElementById('laCasita').addEventListener('click', () => {
    map.flyTo({
        center: [-73.93759, 40.79974],
        zoom: 18.25,
        duration: 1800

    })
})
document.getElementById('losAmigos').addEventListener('click', () => {
    map.flyTo({
        center: [-73.93214, 40.79597],
        zoom: 18.60,
        duration: 1800

    })
})
document.getElementById('rodale').addEventListener('click', () => {
    map.flyTo({
        center: [-73.93440, 40.79429],
        zoom: 18.33,
        duration: 1800

    })
})


// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
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
function percentToDecimal(str) {
    const num = parseFloat(str);
    return isNaN(num) ? null : num / 100;
}


function percentToDecimal(str) {
    const num = parseFloat(str);
    return isNaN(num) ? null : num / 100;
}
let showSoftSite = false;
document.getElementById('toggle-softSite').addEventListener('click', () => {
    console.log('clicked')

    // (1) Preprocess data
    abuttingLots.features.forEach(feature => {
        feature.properties.builtFAR = percentToDecimal(feature.properties['abuttingproperties_Percent_built']);

    });
    // (2) Remove layer/source if exists
    const layerId = 'abutting-built-layer';
    const sourceId = 'abuttingLots';

    //   // ⚠️ FIRST: remove any layers that use the source
    map.getStyle().layers.forEach(layer => {
        const source = map.getLayer(layer.id)?.source;
        if (source === sourceId) {
            map.removeLayer(layer.id);
        }
    });

    //   // THEN: remove the source (now safe)
    if (map.getSource(sourceId)) {
        map.removeSource(sourceId);
    }

    //   // Re-add the source
    map.addSource(sourceId, {
        type: 'geojson',
        data: abuttingLots
    });



    map.addLayer({
        id: 'abutting-built-layer',
        type: 'fill',
        source: 'abuttingLots',
        paint: {
            'fill-color': [
                'case',
                ['<', ['get', 'builtFAR'], 0.5], '#42f5d4',
                ['>', ['get', 'builtFAR'], 1.0], '#ff0000',
                ['all', ['>', ['get', 'builtFAR'], 0.5], ['<', ['get', 'builtFAR'], 1.0]], '#ffb300',
                '#cccccc' // fallback
            ],
            'fill-opacity': 0.5
        }
    });
   

    const legendItemsContainer = document.getElementById("legend-items");
    // handle clicks on the toggle button
   // document.getElementById('toggle-softSite').addEventListener('click', () => {
    if (!showSoftSite) {
        map.setLayoutProperty('abutting-built-layer', 'visibility', 'visible');
        document.getElementById('toggle-softSite').textContent = 'Hide Soft Site Analysis';
         // Replace legend items for soft site analysis
    legendItemsContainer.innerHTML = ''; // clear current items
    legendItemsContainer.innerHTML += `
      <div class="legend-item">
        <span class="legend-color" style="background:#42f5d4;"></span>
        <span class="legend-label"> Very Underbuilt (FAR &lt; 50%)</span>
      </div>
      <div class="legend-item">
        <span class="legend-color" style="background:#ffb300;"></span>
        <span class="legend-label">Slightly Underbuilt (50% ≤ FAR ≤ 100%)</span>
      </div>
      <div class="legend-item">
        <span class="legend-color" style="background:#ff0000;"></span>
        <span class="legend-label">Overbuilt (FAR &gt; 100%)</span>
      </div>
    `;
        showSoftSite = true;


    } else {
        map.setLayoutProperty('abutting-built-layer', 'visibility', 'none');
        map.addLayer({
            id: 'abuttingLotsDefault',
            type: 'fill',
            source: 'abuttingLots',
            paint: {
                'fill-color': '#59ecff',
                'fill-opacity': 0.7,
            }
        });
        legendItemsContainer.innerHTML = `
      <div class="legend-item">
        <span class="legend-color" style="background:#59ecff;"></span>
        <span class="legend-label">All Abutting Lots</span>
      </div>
    `;
        document.getElementById('toggle-softSite').textContent = 'Show Soft Site Analysis';
        showSoftSite = false;
    }


})

map.on('click', 'abutting-built-layer', (e) => {
    const feature = e.features[0];

    // Example: log feature info
    console.log('Clicked feature:', feature);

    // Optional: show a popup
    new mapboxgl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(`<strong>${feature.properties.abuttingproperties_Owner}</strong><br> % Built FAR: ${feature.properties.abuttingproperties_Percent_built}`)
        .addTo(map);


});

//change the cursor to pointer when hovering over the layer
map.on('mouseenter', 'abutting-built-layer', () => {
    map.getCanvas().style.cursor = 'pointer';
}
);
//change the cursor back to default when not hovering over the layer
map.on('mouseleave', 'abutting-built-layer', () => {
    map.getCanvas().style.cursor = '';
}
);
//disappear when clicked elsewhere
map.on('click', (e) => {
    const features = map.queryRenderedFeatures(e.point, {
        layers: ['abutting-built-layer']
    });
    if (!features.length) {
        map.getCanvas().style.cursor = '';
    }
});

// Add a splash modal
document.addEventListener('DOMContentLoaded', () => {
    const splashModal = new bootstrap.Modal(document.getElementById('splashModal'));
    splashModal.show();
  });





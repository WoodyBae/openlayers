import Graticule from '../src/ol/Graticule.js';
import Map from '../src/ol/Map.js';
import View from '../src/ol/View.js';
import GeoJSON from '../src/ol/format/GeoJSON.js';
import VectorLayer from '../src/ol/layer/Vector.js';
import Projection from '../src/ol/proj/Projection.js';
import VectorSource from '../src/ol/source/Vector.js';
import {register} from '../src/ol/proj/proj4.js';
import proj4 from 'proj4';


proj4.defs('ESRI:53009', '+proj=moll +lon_0=0 +x_0=0 +y_0=0 +a=6371000 ' +
    '+b=6371000 +units=m +no_defs');
register(proj4);

// Configure the Sphere Mollweide projection object with an extent,
// and a world extent. These are required for the Graticule.
const sphereMollweideProjection = new Projection({
  code: 'ESRI:53009',
  extent: [-9009954.605703328, -9009954.605703328,
    9009954.605703328, 9009954.605703328],
  worldExtent: [-179, -89.99, 179, 89.99]
});

const map = new Map({
  keyboardEventTarget: document,
  layers: [
    new VectorLayer({
      source: new VectorSource({
        url: 'data/geojson/countries-110m.geojson',
        format: new GeoJSON()
      })
    })
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    projection: sphereMollweideProjection,
    resolutions: [65536, 32768, 16384, 8192, 4096, 2048],
    zoom: 0
  })
});

new Graticule({
  map: map
});

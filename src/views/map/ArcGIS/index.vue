<template>
  <div>
    <div id="viewDiv"></div>
  </div>
</template>
<script>
import { loadModules } from 'esri-loader'
export default {
  data () {
    return {}
  },
  mounted: function () {
    loadModules(['esri/Map', 'esri/views/SceneView'])
      .then(([Map, SceneView]) => {
        // create map with the given options
        const map = new Map({
          'basemap': 'hybrid',
          'ground': 'world-elevation'
        })
        const view = new SceneView({
          map: map,
          container: 'viewDiv',
          zoom: 16,
          center: [116.1624586522, 39.9369756980]
        })
        return view
      })
      .catch(err => {
        // handle any script or module loading errors
        console.error(err)
      })
  }
}
</script>
<style>
/* @import url('https://js.arcgis.com/3.23/esri/css/esri.css'); */
@import url("https://js.arcgis.com/4.9/esri/css/main.css");

 #viewDiv {
      padding: 0;
      margin: 0;
      height: 800px;
      width: 100%;
    }
  #info {
    padding: 1em;
  }
</style>

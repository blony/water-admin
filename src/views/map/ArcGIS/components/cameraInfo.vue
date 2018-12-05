<template>
    <div>
          <h2>Camera Details</h2>
          <p><strong>Heading</strong>: {{ camera.heading.toFixed(3) }}</p>
          <p><strong>Tilt</strong>: {{ camera.tilt.toFixed(3) }}</p>
          <p><strong>Latitude</strong>: {{ camera.position.latitude.toFixed(3) }}</p>
          <p><strong>Longitude</strong>: {{ camera.position.longitude.toFixed(3) }}</p>
          <button v-on:click='reset'>Reset Camera</button>
          </div>
</template>
<script>
export default {
  props: {
    camera: String
  }
}
</script>

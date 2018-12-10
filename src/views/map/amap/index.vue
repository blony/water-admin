<template>
    <div>这里是高德地图
        <br>
        <p>{{test}}</p>
        <el-button @click="increment">+</el-button>
        <el-button @click="decrement">-</el-button>
    </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  computed: {
    test () {
      return this.$store.state.test
    }
  },
  methods: {
    increment () {
      this.$store.commit('increment')
    },
    decrement () {
      this.$store.commit('decrement')
    }
  }
}
</script>

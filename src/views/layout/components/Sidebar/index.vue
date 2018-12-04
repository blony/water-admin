<template>
    <el-menu
      default-active=""
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>地图</span>
        </template>
      <el-submenu index="1-1">
          <template slot="title">ArcGIS</template>
          <el-menu-item index="1-1-1"><router-link to="/map/ArcGIS">初始化</router-link> </el-menu-item>
      </el-submenu>
        <el-menu-item-group>
          <el-menu-item index="1-2"><router-link to="/map/amap">高德地图</router-link></el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-3">
          <template slot="title">百度地图</template>
          <el-menu-item index="1-3-1"><router-link to="/map/baidumap">初始化</router-link></el-menu-item>
        </el-submenu>
      </el-submenu>
      <!-- <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title"><router-link to="/tmpInfo/index">模板消息</router-link></span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">公众号留言</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title"><router-link to="/customMenu/index">自定义菜单</router-link></span>
      </el-menu-item> -->
    </el-menu>
</template>
<script>
export default {
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

import Vue from 'vue'

// 初始化样式
import 'normalize.css/normalize.css'
// 引入ElementUI样式库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入arcgis
import { loadScript } from 'esri-loader'

// 全局自定义样式
import '@/style/index.scss'
import App from './App'
import router from './router'
import store from './store'

Vue.use(ElementUI)

Vue.config.productionTip = false

const options = {
  url: 'https://js.arcgis.com/4.9'
}
loadScript(options)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

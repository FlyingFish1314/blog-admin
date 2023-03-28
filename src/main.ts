import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import './styles/element/index.scss'
// 引入暗黑模式 element-plus 2.2 内置暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'
// 自定义暗黑模式
import '@/styles/element-dark.scss'
const app = createApp(App)
app.use(pinia).use(router).mount('#app')

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
import Auction from './components/Auction.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/:id', component: Auction },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const app = createApp(App)

app.use(router)

app.mount('#app')

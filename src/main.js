import { createApp } from 'vue'
import App from './App.vue'
import components from './components/UI' // Або використайте відповідний шлях до вашого масиву components

const app = createApp(App)

components.forEach(component => {
  app.component(component.name, component)
})

app.mount('#app')
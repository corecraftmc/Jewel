import { createApp } from 'vue'
import { createPinia } from 'pinia'

import index from './index.vue'
import router from './router'

const app = createApp(index)

app.use(createPinia())
app.use(router)

app.mount('#app')
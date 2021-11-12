import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store'
import axios from 'axios';

axios.defaults.withCredentials = true

const app = createApp(App);
app.use(store);
//app.use(axios);

app.mount('#app')

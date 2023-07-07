import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './store'
import mitt from "mitt";
import moment from 'moment'

const emitter = mitt();
const app = createApp(App);

app.config.globalProperties.$moment = moment
app.config.globalProperties.emitter = emitter;

app.use(store).mount('#app')


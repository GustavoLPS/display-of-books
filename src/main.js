import Vue from 'vue'
import App from './App.vue'
import jQuery from 'jquery';
import axios from 'axios'

Vue.prototype.$http = axios
window.$ = window.jQuery = jQuery;

import 'popper.js';
import 'bootstrap';
import './assets/app.scss';

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

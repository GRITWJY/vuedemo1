/*路口js：创建vue实例*/
import Vue from 'vue'
import App from './App.vue'

new Vue({
    render:function (h) {return h(App)},
}).$mount('#app')
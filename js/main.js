import navBar from './cmps/nav-bar-cmp.js';
import myRoutes from './routes.js'
import './service/emails-service.js'


Vue.use(VueRouter)

const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    el: '#app',
    router: myRouter,

    data: {

    },
    components: {
        navBar,
    }
})

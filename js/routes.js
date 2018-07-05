
import mainApp from './pages/main-app-cmp'
import misterKeep from './pages/mister-keep-cmp.js'
import misterEmail from './pages/mister-email-cmp.js'

export default [
    {path: '/', component: mainApp},
    {path: '/mister-keep', component: misterKeep},
    {path: '/mister-email', component: misterEmail},
]
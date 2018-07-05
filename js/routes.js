
import mainApp from './pages/main-app-cmp.js'
import misterKeep from './pages/notes-pages/notes-cmp.js'
import misterEmail from './pages/email-pages/mister-email-cmp.js'

export default [
    {path: '/', component: mainApp},
    {path: '/mister-keep', component: misterKeep},
    {path: '/mister-email', component: misterEmail},
]
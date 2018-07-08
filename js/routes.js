import mainApp from './pages/main-app-cmp.js'
import misterKeep from './pages/notes-pages/notes-cmp.js'
import emailApp from '../js/pages/email-pages/email-app-cmp.js'
import emailDetails from '../js/cmps/cmps-email/email-details-cmp.js';
import emailCompose from '../js/cmps/cmps-email/email-compose.cmp.js';


export default [
    { path: '/', component: mainApp },
    { path: '/mister-keep', component: misterKeep },
    { path: '/mister-email', component: emailApp },
	{ path: '/email/:emailId', component: emailDetails },
	{ path: '/email-compose', component: emailCompose },
    
]
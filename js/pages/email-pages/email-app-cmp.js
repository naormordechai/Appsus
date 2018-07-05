import emailsService from '../../service/emails-service.js';
import emailList from '../../cmps/cmps-email/email-list-cmp.js';



export default {
    template: `
    <section class = "emails-app">

    <email-list :emails = "emailsToShow" ></email-list>
    </section>
    `,
    data() {
        return {
            emails: [],
            selectedEmail: null
        }
    },
    created() {
        emailsService.query()
            .then(emails => {
                this.emails = emails;
            })
    },

    methods: {

    },

    computed: {
        emailsToShow() {
            return this.emails
        }
    },
    components: {
        emailList,
    }
}
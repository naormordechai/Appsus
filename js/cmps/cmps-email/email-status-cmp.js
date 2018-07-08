import emailsService from '../../service/emails-service.js'
import progressBar from './progress-bar-cmp.js'

export default {
    props: [],
    template: `
        <section>
            <p> You readed a {{updateCountReadedEmails}} {{countEmailsReaded}} / {{getLength}} {{lengthEmails}} emails</p>
            <progress-bar v-bind:emails = "emailsPrm"></progress-bar>
        </section>
    `,
    data() {
        return {
            emailsPrm: [],
            countEmailsReaded: 0,
            lengthEmails: 0,
        }
    },
    created() {
        this.emailsPrm = emailsService.query()
    },
    computed: {
        updateCountReadedEmails() {
            console.log('computed', this.emailsPrm)
            this.emailsPrm
                .then(emails => {
                    emails.forEach(email => {
                        if (email.isRead) {
                            this.countEmailsReaded++
                        }
                    });

                })

        },
        getLength() {
            this.emailsPrm
                .then(emails => {
                    this.lengthEmails = emails.length
                })
        }
    },
    methods: {
   
            
    },
    components: {
        emailsService,
        progressBar,

    }
}

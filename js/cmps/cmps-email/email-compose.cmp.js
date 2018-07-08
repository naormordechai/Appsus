
import emailsService from '../../service/emails-service.js'

export default {
    template: `
        <section class = "email-compose">
            title<input type = "text" @input = "setTitle">
            subject<input type = "text" @input = "setSubject">
            <button @click = "addNewEmail">Send</button>
        </section>
    `,
    data() {
        return {
            newEmail: {
                id:emailsService.makeId(),
                isRead: false,
                title: null,
                sebject: null,
                sentAt: Date.now(),
            },
            emails: [],
        }
    },
    created() {
        emailsService.query()
            .then(emails => {
                console.log('emails', emails);
                this.emails = emails;
            })
    },
    methods: {
        setTitle(ev) {
            this.newEmail.title = ev.srcElement.value
        },
        setSubject(ev) {
            this.newEmail.subject = ev.srcElement.value
            console.log(this.newEmail.subject);
        },
        addNewEmail() {
            this.emails.unshift(this.newEmail)
        }
    }
}



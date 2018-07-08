import emailService from '../../service/emails-service.js'

export default {
    template: `
        <section v-if = "email">
            <button @click = "removeEmail()">Delete</button>
            <h2>{{email.title}}</h2>
            {{email.subject}}

        </section>
    `,
    data() {
        return {
            email: null
        }
    },
    created() {
        this.loadEmail();
    },
    methods: {
        loadEmail() {
            emailService.getEmailById(this.$route.params.emailId)
                .then(email => this.email = email)
        },

        removeEmail() {
            console.log('Removing', this.email);
            emailService.removeEmail(this.email.id)
            setTimeout(() => {
                this.$router.push('/mister-email');
            }, 100)
        }
    },
}


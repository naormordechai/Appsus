import emailService from '../../service/emails-service.js'

export default {
    template: `
        <section>
            HELLO DETAILS
        </section>
    `,
    props: ['selectedEmail'],
    methods:{
        loadEmail() {
			emailService.getEmailById(this.$route.params.emailId)
			.then(email => this.email = email)
		},
    },
    created() {
		this.loadEmail();
	},
}
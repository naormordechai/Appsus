
import emailPreview from '../cmps-email/email-preview-cmp.js'
import emailStatus from '../cmps-email/email-status-cmp.js'
import emailFilter from '../cmps-email/email-filter-cmp.js'

export default {
    template: `
    <section>
                <email-filter 
                v-on:displayEmails = "showEmailsByFilter"
                v-on:filtered = "showEmailsByRadioBtns">
            
                </email-filter>
                <emailStatus :emails = "emails"></emailStatus>
    <ul>
				<li v-for="(email, idx) in emails" :key="email.id">
                    <div>
                    <email-preview :email="email"></email-preview>
                    </div>
				</li>
            </ul>
    </section>
    `,
    props: ['emails'],

    components: {
        emailPreview,
        emailStatus,
        emailFilter
    },
    methods: {
        showEmailsByFilter(filter) {
            this.$emit('displayEmails', filter)
        },
        showEmailsByRadioBtns(filter) {
            this.$emit('displayEmails', filter)
        }

    }
}
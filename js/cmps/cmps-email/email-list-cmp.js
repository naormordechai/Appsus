
import emailPreview from '../cmps-email/email-preview-cmp.js'

export default {
    template: `
    <section>
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
    },
    methods:{
        changedSelected(){
            console.log('aaa');
            
        }
    }
}
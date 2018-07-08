import emailService from '../../../js/service/emails-service.js';


export default {
    props: ['emails'],
    template: `
    <div class = "progress-bar" >

         <div> 
        You've read {{res}}% of the email list</div> 


    </div>
`,
    data() {
        return {
            length: null,
            res: 0,
            readedEmail: null,
            remainder: null
        }
    },
    created() {
        this.updatePrecent
    },
    methods: {

    },
    computed: {
        updatePrecent() {
            console.log(this.emails);
            this.emails
                .then(emails => {
                    this.length = emails.length
                    emails.forEach(email => {
                        if (email.isRead) {
                            this.readedEmail++
                            this.remainder = this.length - this.readedEmail;
                            this.res = Math.ceil(((this.length - this.remainder) / this.length) * 100)
                        }
                    });
                })



        }
    },

}
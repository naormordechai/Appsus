import emailsService from '../../service/emails-service.js';
import emailList from '../../cmps/cmps-email/email-list-cmp.js';
import emailSort from '../../cmps/cmps-email/email-sort-cmp.js';




export default {
    template: `
    <section class = "emails-app">
        <email-sort @doSort="displayEmailsBySort"></email-sort>
        <div>
        
            <router-link to="/email-compose">
                <button>compose</button>
            </router-link>
        </div>
    <email-list :emails = "emailsToShow" @displayEmails="filterEmails"></email-list>

    </section>
    `,
    data() {
        return {
            emails: [],
            filter: null,
            filterRadio: null,
            sortBy: null

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
        filterEmails(filter) {
            this.filter = filter.filter
            this.filterRadio = filter.emailStatus
            console.log('filter form app!!', this.filterRadio);
            console.log('filter', this.filter);
        },

        displayEmailsBySort(ev) {
            this.sortBy = ev
            var emailsToShow = this.emails;
            if (this.sortBy === 'title') {
                emailsToShow.sort(function (a, b) {
                    return a.title > b.title
                })
            } else {
                emailsToShow.sort(function (a, b) {
                    return a.sentAt < b.sentAt
                })
            }
        },
        doSort() {

        }

    },


    computed: {
        emailsToShow() {
            var emailsToShow = this.emails
            if (this.filter) {
                emailsToShow = emailsToShow.filter(email => email.subject.includes(this.filter))
            }
            if (this.filterRadio) {
                switch (this.filterRadio) {
                    case 'read':
                        emailsToShow = emailsToShow.filter(email => email.isRead === true)
                        break;
                    case 'unread':
                        emailsToShow = emailsToShow.filter(email => email.isRead === false);
                        break;
                    case 'all':
                        emailsToShow = this.emails
                        break;
                }
            }
            return emailsToShow
        },




    },
    components: {
        emailList,
        emailSort
    }
}
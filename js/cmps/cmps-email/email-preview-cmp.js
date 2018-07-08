
export default {
    props: ['email'],
    template: `
    <section @click = "changeStatusReaded">
        <router-link :to="'/email/'+email.id" class = "link-preview">
            <div class = "email-preview">
                <h2 class = "title" v-bind:class = "{unread : email.isRead}">{{email.title}}</h2>
                <p>{{email.title}}</p>
                <p>{{email.sentAt}}</p>
            </div>
        </router-link>
    </section>
    `,

    created() {
    },
    data() {
        return {

        }
    },
    methods: {
        changeStatusReaded() {
            if (!this.email.isRead) {
                this.email.isRead = !this.email.isRead
                
            }
        }
    }

}
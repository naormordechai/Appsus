
export default {
    template: `
    <section>
        <router-link to = "/email-details">
        {{email.subject}}
</router-link>
    </section>
    `,
    props: ['email'],
    methods: {

    }

}
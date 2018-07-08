

export default {
    template: `
    <div>
        <input type = "text" v-on:input = "filterEmails" v-model = "filterBy.filter"></input>
        <input type="radio" name="status" value="read" v-model="filterBy.emailStatus" @change = "updateFilter"> read</input>
        <input type="radio" name="status" value="unread" v-model="filterBy.emailStatus" @change = "updateFilter"> unRead</input>
        <input type="radio" name="status" value="all" v-model="filterBy.emailStatus" @change = "updateFilter"> All</input>
</div>
    `,
    data() {
        return {
            filterBy: {
                filter: '',
                emailStatus: '',

            },
        }
    },
    props: ['emails'],
    methods: {
        filterEmails() {
            this.$emit('displayEmails', this.filterBy)
        },
        updateFilter() {
            return this.$emit('filtered', this.filterBy);
        }
    }
}
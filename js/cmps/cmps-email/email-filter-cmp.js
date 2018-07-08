

export default {
    template: `
    <div class = "text-align filter-part"> 
        <input class = "padding" type = "text" v-on:input = "filterEmails" v-model = "filterBy.filter" placeholder="search"></input>
        <label for="read">read</label>
        <input type="radio" name="status" id="read" value="read" v-model="filterBy.emailStatus" @change = "updateFilter"></input>
        <label for="unread">Unread</label>
        <input type="radio" name="status" id="unread" value="unread" v-model="filterBy.emailStatus" @change = "updateFilter"></input>
        <label for="all">All</label>
        <input type="radio" name="status" id="all"  value="all" v-model="filterBy.emailStatus" @change = "updateFilter"></input>
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
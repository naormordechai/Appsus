

export default {
    props: [],

    template: `
    <div class = "emails-sort">
        <span> Sort By:</span>
        <select id="by" @change="updateFilter" class = "sort">
					<option>choose</option>
					<option value="title">title</option>
					<option value="deta">date</option>
        </select>
    </div>
    `,
    data() {
        return {

        }
    },
    methods: {
        updateFilter(ev) {
           this.$emit('doSort',ev.srcElement.value);
           console.log(ev.srcElement.value);
           
            
        }
    }
}
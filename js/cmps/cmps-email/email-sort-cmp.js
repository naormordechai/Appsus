

export default {
    props: [],

    template: `
    <div>
        <select id="by" @change="updateFilter">
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
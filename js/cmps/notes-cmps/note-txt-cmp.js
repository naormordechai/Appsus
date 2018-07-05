import txtService from '../../service/notes-service/txt-service.js';

export default {
    template: `
        <section>
            <input v-model="txtInput" type="text" placeholder="Write new note...">
            <button @click="addTxt">Post</button>
            <ul>
                <li v-for="(txt, idx) in txts" v-if="txts">
                    {{txt.txt}} <button @click="deleteTxt(idx)">Delete Text</button>
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            txtInput: '',
            txts: txtService.query(),
            newTxt: '',

        }
    },
    methods: {
        addTxt() {
            txtService.createNewTxt(this.txtInput);
            this.txtInput = '';
            console.log('Txts array: ', this.txts);
        },
        deleteTxt(idx) {
            txtService.deleteTxt(idx);               
                            
        }
    },
    computed: {

    },
    watch: {
        txtInput: function () {


        },
    }
}
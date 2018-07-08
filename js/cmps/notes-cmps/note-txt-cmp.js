import txtService from '../../service/notes-service/txt-service.js';

export default {
    template: `
        <section class="notes-section">
            <h1><i>Notes</i></h1>
            <input v-model="txtInput" type="text" placeholder="new note..." ref="input">
            <button class="post-btn"  @click="addTxt">{{btnStatus}}</button>
            <input type="text" placeholder="Search..." v-model="searchedValue">
            <button>🔍</button>
            <ul>
                <li class="txt flex" v-for="(txt, idx) in txts">     
                    <div class="note-container" :style="{ backgroundColor: txt.activeColor }">               
                        <input v-if="txt.isColorPickerOn" type="color" v-model="currColorValue" value="#00ffff"
                         class="col-picker" @change="updateColor(idx)" ref="pick">
                        <span class="txt-board" >
                            {{txt.txt}} 
                        </span>
                    </div>
                    <div>
                        <button class="edit-btn" @click="editTxt(idx)">✎</button>
                        <button class="pin-btn" @click="putFirst(idx)">🖈</button>
                        <button class="paint-btn" @click="paintTxt(idx)">🖌</button>
                        <button class="del-btn" @click="deleteTxt(idx)">🗑</button>    
                    </div>                
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            txtInput: '',
            txts: txtService.query(),
            btnStatus: 'Add',
            currIdx: null, 
            currColorValue: '',   
            searchedValue:'',
            
        }
    },
    methods: {      
        updateColor(idx, color) {
            color = this.currColorValue;
            txtService.updateColor(idx, color);
            this.txts[idx].isColorPickerOn = false;                       
        },  
        paintTxt(idx) {
            this.txts[idx].isColorPickerOn = true;           
        },
        putFirst(idx) {
            txtService.putFirst(idx);            
        },
        editTxt(idx) {
            this.btnStatus = 'Update'
            this.currIdx = idx;
            setTimeout(() => {
                this.txtInput = this.$refs.input.value = this.txts[idx].txt;
            }, 1);
        },
        addTxt() {
            if (this.btnStatus === 'Add') txtService.createTxt(this.txtInput);
            else txtService.updateTxt(this.currIdx, this.txtInput);
            this.txtInput = '';
            this.btnStatus = 'Add';
        },
        deleteTxt(idx) {
            txtService.deleteTxt(idx);
        }
    },
    computed: {
    },
    watch: {  
        searchedValue: function() {
            console.log()
        }         
    }
}
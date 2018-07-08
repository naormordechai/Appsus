import todoService from '../../service/notes-service/todo-service.js';

export default {
    template: `
        <section>
            <input v-model="txtInput" type="text" placeholder="new todo..." ref="input">
            <button class="post-btn"  @click="addTodo">{{btnStatus}}</button>
            <input type="text" placeholder="Search...">
            <button>🔍</button>
            <ul>
                <li v-for="(todo, idx) in todos" class="flex txt">
                    <div>
                        <input type="checkbox" @change="markTodo(idx)">
                        <span v-if="todo.isMarked===true" class="line-through">{{todo.txt}}</span>
                        <span v-else>{{todo.txt}}</span>
                    </div>
                    <div>
                        <button class="edit-btn" @click="editTodo(idx)">✎</button>
                        <button class="pin-btn" @click="putFirst(idx)">🖈</button>
                        <button class="paint-btn" @click="paintTodo(idx)">🖌</button>
                        <button class="del-btn" @click="deleteTodo(idx)">🗑</button> 
                    </div>               
                </li>
            </ul>  
        </section>
    `,
    data() {
        return {
            todos: todoService.query(),
            txtInput: '',
            btnStatus: 'Add',
            currIdx: null,
        }
    },
    methods: {
        putFirst(idx) {
            todoService.putFirst(idx);            
        },
        markTodo(idx) {
            todoService.markTodo(idx);
        },
        deleteTodo(idx) {
            todoService.deleteTodo(idx);
        },
        addTodo() {
            if (this.btnStatus === 'Add') todoService.createTodo(this.txtInput);
            else todoService.updateTodo(this.currIdx, this.txtInput);
            this.txtInput = '';
            this.btnStatus = 'Add';
        },
        editTodo(idx) {
            console.log('editing todo with ', idx, ' idx...')
            this.btnStatus = 'Update'
            this.currIdx = idx;
            setTimeout(() => {
                this.txtInput = this.$refs.input.value = this.todos[idx].txt;
            }, 1);
        },
    }
}
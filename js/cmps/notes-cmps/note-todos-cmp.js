export default {
    template:`
        <p>+<img style="width: 40px; height: 40px" 
             src="../../../img/todo-icon.jpg"
             @click="onTodoIcon"></p>    
    `,
    methods: {
        onTodoIcon() {
            console.log('todo icon was clicked..')
        }
    }
}
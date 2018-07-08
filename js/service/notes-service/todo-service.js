var todos = [
    { txt: 'learn JS', isMarked: false },
    { txt: 'grasp html', isMarked: false },
    { txt: 'master CSS', isMarked: false },
];

function query() {
    return todos;
}

function putFirst(idx) {
    console.log('putting first...')
    let currTodo = todos[idx];
    todos.splice(idx, 1);
    todos.unshift(currTodo);
}

function createTodo(txt) {
    todos.push({
        txt: txt,
        isMarked: false
    });
}

function updateTodo(idx, txt) {
    console.log('updating todo..')
    todos[idx].txt = txt;
    
}

function deleteTodo(idx) {
    todos.splice(idx, 1)
}

function markTodo(idx) {
    todos[idx].isMarked = (!todos[idx].isMarked);
    console.log(todos)

}

export default {
    query,
    createTodo,
    updateTodo,
    deleteTodo,
    markTodo,
    putFirst,
}
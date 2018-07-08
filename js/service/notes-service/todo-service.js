var todos = [
    {
        txt: 'learn JS',
        isMarked: false,
        isColorPickerOn: false,
        activeColor: 'yellowgreen'
    },
    {
        txt: 'grasp html',
        isMarked: false,
        isColorPickerOn: false,
        activeColor: 'yellowgreen'
    },
    {
        txt: 'master CSS',
        isMarked: false,
        isColorPickerOn: false,
        activeColor: 'yellowgreen'
    },
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
        isMarked: false,
        isColorPickerOn: false,
        activeColor: 'yellowgreen'
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

function updateColor(idx, color) {
    todos[idx].activeColor = color;
}

export default {
    query,
    createTodo,
    updateTodo,
    deleteTodo,
    markTodo,
    putFirst,
    updateColor,
}
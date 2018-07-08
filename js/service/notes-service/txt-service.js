var txts = [
    {
        txt: 'Vue.js is the most powerful',
        isColorPickerOn: false,
        activeColor: 'yellowgreen'
    },
    {
        txt: 'Node.js allows you not to need anything exept JS ',
        isColorPickerOn: false,
        activeColor: 'yellowgreen'
    },
    {
        txt: 'Coding Academy has no mercy',
        isColorPickerOn: false,
        activeColor: 'yellowgreen'
    }
];

function query() {
    return txts;
}

function updateColor(idx, color) {
    txts[idx].activeColor = color;
}

function deleteTxt(idx) {
    console.log('deletind txt number ', idx, ' in array');
    txts.splice(idx, 1)

}

function updateTxt(idx, txt) {
    txts[idx].txt = txt;
}

function createTxt(txt) {
    console.log('new text is created');
    txts.push({
        txt: txt,
        isColorPickerOn: false,
        activeColor: 'yellowgreen'
    });
}

function putFirst(idx) {
    console.log('putting first...')
    let currTxt = txts[idx];
    txts.splice(idx, 1);
    txts.unshift(currTxt);
}


export default {
    query,
    createTxt,
    deleteTxt,
    updateTxt,
    putFirst,
    updateColor,
}
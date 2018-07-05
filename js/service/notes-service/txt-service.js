var txts = [
    {
        txt: 'LaLa'
    }
];

function query() {
    return txts;
}

function deleteTxt(idx) {
    console.log('deletind txt number ', idx, ' in array');
    txts.splice(idx, 1)

}



function createNewTxt(txt) {
    console.log('new text is created');
    txts.push({txt: txt
    });
}


export default {
    query,
    createNewTxt,
    deleteTxt,
}

var emails = [
    { id: makeId(), isRead: false, subject: 'Lorem ipsum dolor sit amet', title: 'first email', sentAt: Date.now() - (1000 * 60 * 60) * 2 },
    { id: makeId(), isRead: false, subject: 'Lorem ipsum dolor sit amet', title: 'second email', sentAt: Date.now() - (1000 * 60 * 60) * 100 },
    { id: makeId(), isRead: false, subject: 'Lorem ipsum dolor sit amet', title: 'tototo email', sentAt: Date.now() - (1000 * 60 * 60) * 6 },
    { id: makeId(), isRead: false, subject: 'Lorem ipsum dolor sit amet', title: 'gogogo email', sentAt: Date.now() - (1000 * 60 * 60) * 10 },
    { id: makeId(), isRead: false, subject: 'Lorem ipsum dolor sit amet', title: 'popo email', sentAt: Date.now() - (1000 * 60 * 60) * 18 },
    { id: makeId(), isRead: false, subject: 'Lorem ipsum dolor sit amet', title: 'oloo email', sentAt: Date.now() - (1000 * 60 * 60) * 1 },
    { id: makeId(), isRead: false, subject: 'Lorem ipsum dolor sit amet', title: 'shokoo email', sentAt: Date.now() - (1000 * 60 * 60) * 20 },
    { id: makeId(), isRead: false, subject: 'Lorem ipsum dolor sit amet', title: 'ahokoo email', sentAt: Date.now() - (1000 * 60 * 60) * 20 },
]
console.log(emails);


function makeId(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

function query() {
    return Promise.resolve(emails);
}
function getEmailById(id) {
    let email = emails.find(email => email.id === id);
    return Promise.resolve(email);
}

function removeEmail(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var emailIdx = emails.findIndex(email => email.id === id)
            emails.splice(emailIdx, 1);
            resolve()
        }, 100);
    });



    // return Promise.reject();
}

export default {
    query,
    getEmailById,
    removeEmail,
    makeId
}
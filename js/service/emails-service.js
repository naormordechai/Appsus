
var emails = [
    { id: makeId(), isRead: false, subject: 'Lorem ipsum dolor sit amet', title: 'first email', sentAt: Date.now() - (1000 * 60 * 60) * 2 },
    { id: makeId(), isRead: false, subject: 'Lorem ipsum dolor sit amet', title: 'second email', sentAt: Date.now() - (1000 * 60 * 60) * 3 },
    { id: makeId(), isRead: false, subject: 'Lorem ipsum dolor sit amet', title: 'third email', sentAt: Date.now() - (1000 * 60 * 60) * 4 },
]


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

export default {
    query,
    getEmailById
}
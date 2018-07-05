import noteTxt from '../../cmps/notes-cmps/note-txt-cmp.js';
import noteImg from '../../cmps/notes-cmps/note-img-cmp.js';
import noteTodos from '../../cmps/notes-cmps/note-todos-cmp.js';


export default {
    template: `
        <section>
            <header>
                <h1>MISTER KIPPER APP</h1>
            </header>
            <main>
                <note-txt></note-txt>
                <note-todos></note-todos>
                <note-img></note-img>
            </main>
        </section>
    `,
    data() {
        return {

        }
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos
    },
    methods: {

    },
    computed: {

    }
}
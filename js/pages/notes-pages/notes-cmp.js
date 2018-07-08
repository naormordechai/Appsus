import noteTxt from '../../cmps/notes-cmps/note-txt-cmp.js';
import noteImg from '../../cmps/notes-cmps/note-img-cmp.js';
import noteTodos from '../../cmps/notes-cmps/note-todos-cmp.js';


export default {
    template: `
        <section>
            <header>
                <h1 class="mr-keep-head-title">MISTER KIPPER APP</h1>
            </header>
            <main class="mister-keep-app">
                <div>
                <note-txt></note-txt>
                <note-todos></note-todos>
                <note-img></note-img>
</div>
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
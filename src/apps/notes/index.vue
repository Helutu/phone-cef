<script>
import noteOpen from "./noteopen.vue";
import AddNote from "./addnote.vue";
import EditNote from "./editnote.vue"

export default {
    components: { noteOpen, AddNote, EditNote },
    data() {
        return {
            page: "Main",
            id: "",
            notes: [
                { id: 1, title: "cacat pisat mazga ulei", description: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
                { id: 2, title: "chelutu muie", description: "Lorem ipsum dolort. Pellentesque luctus, eros quis ornare tempor, nisl massa interdum nisl, ut sodales arcu ante sed risus." },
                { id: 3, title: "cacat pisat mazga ulei", description: "Lorem ipsum dolort. Pellentesque luctus, eros quis ornare tempor, nisl massa interdum nisl, ut sodales arcu ante sed risus." },
                { id: 4, title: "cacat pisat mazga ulei", description: "Lorem ipsum dolort. Pellentesque luctus, eros quis ornare tempor, nisl massa interdum nisl, ut sodales arcu ante sed risus." },
                { id: 5, title: "cacat pisat mazga ulei", description: "Lorem ipsum dolort. Pellentesque luctus, eros quis ornare tempor, nisl massa interdum nisl, ut sodales arcu ante sed risus." },
                { id: 6, title: "cacat pisat mazga ulei", description: "Lorem ipsum dolort. Pellentesque luctus, eros quis ornare tempor, nisl massa interdum nisl, ut sodales arcu ante sed risus." },
            ],
        };
    },

    methods: {
        openNote(id) {
            this.page = "Note";
            this.id = id;
        },

        addNotePage() {
            this.page = "AddNote";
        },
    },

    created() {
        this.emitter.on("changeNotePages", (evt) => {
            this.page = evt;
        });
        this.emitter.on("addNote", (evt) => {
            this.notes.push({id: this.notes.length+1, ...evt})
        });
        this.emitter.on("editNote", (evt) => {
            const { id, title, description } = evt;
            var note = this.notes.find(b => b.id === id);
            if(note) {
                note.title = title;
                note.description = description;
            }
        });
    }
};
</script>

<template>
  <div class="app notes" v-if="page === 'Main'">
    <div class="container">
        <div class="control-bar" style="margin-top: -8px;">
            <div class="control inactive"></div>
            <div class="title"  style="color: #f8f8f8;">Notes</div>
            <div class="control add" @click="addNotePage()">
                <svg width="25" height="25" fill="none" viewBox="0 0 25 25" style="color: rgb(233, 176, 54);">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.25 11.25V8.75C19.25 7.64543 18.3546 6.75 17.25 6.75H6.75C5.64543 6.75 4.75 7.64543 4.75 8.75V17.25C4.75 18.3546 5.64543 19.25 6.75 19.25H11.25M17 14.75V19.25M19.25 17H14.75M8 4.75V8.25M16 4.75V8.25M7.75 10.75H16.25"></path>
                </svg>
            </div>
        </div>
       
        <div class="main">
            <div class="notes">
                <div class="note" 
                    v-for="item in notes" 
                    @click="openNote(item.id)"
                    :key="item.id"
                >
                    <div class="note-info">
                        <h3>{{ item.title }}</h3>
                        <p v-if="item.description.length >= 30">{{ item.description.slice(0, 30)+'...' }}</p>
                        <p v-else>{{item.description}}</p>
                    </div>
                </div>
                <div style="margin-top: -10px"></div>
            </div>
        </div>
    </div>
  </div>

  <noteOpen :id="id" :data="notes" v-if="page === 'Note'" />
  <AddNote :id="id" :data="notes" v-if="page === 'AddNote'" />
  <EditNote :id="id" :data="notes" v-if="page === 'EditNote'" />

</template>

<style scoped src="../../assets/css/notes.css"></style>


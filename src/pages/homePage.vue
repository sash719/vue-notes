<template>
    <p>Home</p>
    <FormNotes @onSubmit="handleSubmit" />
    <List @onRemove="handleRemove" :items="notes" />

</template>

<script>
import FormNotes from "@/components/Notes/FormNote.vue"
import List from '@/components/Notes/ListNotes.vue'

export default {
    components: { FormNotes, List },
    data () {
        return {
        notes: [
            {
                title: 'task1',
                tags: ['work']
            },
            {
                title: 'task2',
                tags: ['work']
            }
        ]
    }
    },
    mounted() {
    this.getNotes()
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    // * get / set notes
    getNotes() {
      const localNotes = localStorage.getItem('notes')
      if (localNotes) {
        this.notes = JSON.parse(localNotes)
      }
    },
// * submit note
handleSubmit(title) {
  const note = {
    title: title,
    tags: []
  }
  this.notes.push(note)
},
    // * remove note
    handleRemove(index) {
      this.notes.splice(index, 1)
    }
  }
}
</script>

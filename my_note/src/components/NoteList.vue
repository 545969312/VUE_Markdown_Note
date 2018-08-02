<template>
	<div class="list-group">
        <NoteItem 
            v-for="note in NoteList"
            v-bind:name='note.title'
            v-bind:key="note.id"
            v-bind:note="note"
        ></NoteItem>
    </div>
</template>

<script>
import NoteItem from '@/components/NoteItem'
export default {

  name: 'NoteList',
  components:{
  	NoteItem
  	},
  data() {
    return {

    }
  },
  computed:{
    NoteList:function(){
      return this.$store.state.NoteList
    }
  }
};
</script>

<style lang="css" scoped>
</style>

<template>
	<div class="list-group-item">{{note.title}}
		<div class="pull-right">
			<span class="glyphicon glyphicon-pencil" @click='editNote'></span>&nbsp
			<span class="glyphicon glyphicon-trash" @click='del'></span>
		</div>
	</div>
</template>

<script>
export default {

  name: 'NoteItem',
  props:['note'],

  data() {
    return {

    };
  },
  methods:{
  	del:function(){
  		this.$store.dispatch('delNote',this.note.id)
  		.then(()=>{
  			this.$store.dispatch('getNoteList')
  		})
  	},
  	editNote:function(){
  		this.$store.commit('UPDATENOTE',this.note)
  	}
  }
};
</script>

<style lang="css" scoped>
</style>

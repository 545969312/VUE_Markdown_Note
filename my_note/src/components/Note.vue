<template>
	
	<div class="container">
		<div class="box">
			<p>我的笔记</p>
		</div>

        <div class="row" style="margin-top: 10px">
          <div class="col-md-3">
            <ul class="list-group">
              <NoteList/>
            </ul>
          </div>
          <div class="col-md-9">
            <div class="col-md-6">
            	<div class="input-group">
			      <span class="input-group-btn">
			        <button class="btn btn-default" type="button">标题</button>
			      </span>
			      <input type="text" class="form-control" placeholder="请输入标题" v-model='currentNote.title'>
			    </div><!-- /input-group -->
                <textarea 
                style="height: 500px;width: 393px;margin-top: 10px;border:3px solid #6be7ff"
                v-model='currentNote.content'
                >       
                </textarea>
            </div>
            <div class="col-md-6">
				<button v-if="currentNote.id" class="btn btn-warning btn-sm" @click="editNote">提交</button>
        <button v-else class="btn btn-success btn-sm" @click="addNote">添加</button>
                <div 
                style="height: 500px;width: 390px;border: 3px solid #6be7ff; margin-top: 10px"
                v-html="markedConent"
                ></div>
            </div>
          </div>
        </div>
      </div>

</template>

<script>
import marked from 'marked'
import NoteList from '@/components/NoteList'
export default {
  name: 'Note',
  data:function(){
  	return {
      title:'',
  		content:''
  	}
  },
  components:{
    NoteList
  },
  computed:{
  	markedConent:function(){
  		return marked(this.currentNote.content)
  	},
    currentNote() {
      return this.$store.state.currentNote;
    },
  },
  methods:{
    addNote(){
      var newData={
        title:this.currentNote.title,
        content:this.currentNote.content,
        markedConent:this.markedConent
      };

      this.$store.dispatch('addNote',newData)
      .then((res)=>{
        this.$store.dispatch('getNoteList')
      });
      this.$store.commit('CLEARNOTE')
    },
    editNote(){
      var newData={
        id:this.currentNote.id,
        title:this.currentNote.title,
        content:this.currentNote.content,
        markedConent:this.markedConent
      };

      this.$store.dispatch('editNote',newData)
      .then((res)=>{
        this.$store.dispatch('getNoteList')
      });
      this.$store.commit('CLEARNOTE')
    },
  }

}

</script>

<style>
.box{
	height: 40px;
	width: 1140px;
	line-height: 40px;
	background-color: #4395ff;
	border-radius: 3px;
	text-align: center;
	color: white;
	font-size: 20px;
}
</style>
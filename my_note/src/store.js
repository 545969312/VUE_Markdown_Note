import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'

Vue.use(Vuex)

// 设置post请求的请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default new Vuex.Store({
	state:{
		NoteList:[],
		currentNote:{
			id:'',
			title:'',
			content:'',
			markedConent:''
		}
	},
	mutations:{
		INITNOTELIST:function(state,NoteList){
			state.NoteList=NoteList
		},
		ADDNOTE:function(state,newDate){
			state.NoteList.push(newDate)
		},
		CLEARNOTE:function(state){
			var nullNoteObj = {
                id: '',
                title: '',
                content: '',
                markdownContent: ''
            }
            state.currentNote = nullNoteObj
		},
		UPDATENOTE:function(state,data){
			state.currentNote=data
		}
	},
	actions:{
		addNote(context, newData){
			return new Promise((resolve, reject)=>{
				var pasrsedData=qs.stringify(newData);
				axios({
					method:'post',
					url:'http://127.0.0.1:8000/api/add/',
					data:pasrsedData
				}).then((res)=>{
					console.log('+++++++++++++++')
					console.log(res.data.data)
					context.commit('ADDNOTE',res.data.data)
					resolve()
				}).catch(function(err){
					console.log(err)
					reject()
				})
			})	
		},
		getNoteList(context) {
            axios
                .get("http://127.0.0.1:8000/api/notes/")
                .then(function (response) {
                    context.commit('INITNOTELIST', response.data.data)
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        delNote(context,id){
        	return new Promise((resolve, reject)=>{
				axios({
					method:'get',
					url:'http://127.0.0.1:8000/api/delete/'+id,
				}).then((res)=>{

					if(!res.data.code){
						
						resolve()
					}
					
				}).catch(function(err){
					console.log(err)
					reject()
				})
			})
        },
        editNote(context,data){
        	return new Promise((resolve, reject)=>{
        		var pasrsedData=qs.stringify(data);
				axios({
					method:'post',
					url:'http://127.0.0.1:8000/api/edit/',
					data:pasrsedData
				}).then((res)=>{

					if(!res.data.code){
						resolve()
					}
					
				}).catch(function(err){
					console.log(err)
					reject()
				})
			})
        }
	}
});



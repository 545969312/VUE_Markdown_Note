<template>
  <div id="app">
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <!-- Brand and toggle get grouped for better mobile display -->
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Jing的笔记本</a>
          </div>

          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              
              <!-- <li><router-link to='/index'>我的首页</router-link></li>
              <li><router-link to='/Note'>我的笔记</router-link></li> -->
              <router-link
              v-for='(oneRoute,index) in allRoutes'
              v-bind:to='oneRoute.path'
              v-bind:key='index'
              activeClass='active'
              tag='li'
              exact
              >
              <a href="">{{oneRoute.name}}</a>
              </router-link>

           <!--  <router-link 
            v-for="(route, index) in allRoutes"  : allRoutes是一个计算属性
            v-bind:to="route.path"               : 取每一项路由的path
            v-bind:key=index                     : for循环vue推荐绑定key，key用来标示for循环的每一项
            tag='li'                             : 告诉router-link渲染的时候 渲染成li标签
            activeClass='active'                 : 当当前的router-link被选中的时候 添加的 class样式
            exact                                : 指定路由为严格匹配模式，而不是默认的以。。。开头
            >
            <a>{{route.name}}</a>                : 取每一个路由的name
            </router-link> -->

            </ul>
            
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#">登陆</a></li>
              <li><a href="#">注册</a></li>
              <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">个人信息 <span class="caret"></span></a>
                <ul class="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" class="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
            </ul>
          </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
      </nav>
      
      <router-view name="note"></router-view>
      <router-view name="index"></router-view>

    </div>
  
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap.min.js"

export default {
  name: 'App',

  computed:{
    allRoutes:function(){
      return this.$router.options.routes //拿到所有路由
    }
  }
}
</script>

<style>

</style>

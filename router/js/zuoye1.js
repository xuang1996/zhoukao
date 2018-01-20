var Home={
    template:`
    <div>
        <div style="float: left;width: 100px;height: 100px;background-color: aqua">文章列表</div>
        <div style="margin-left: 200px;width: 100px;height: 100px;background-color: aqua">视频列表</div>
    </div>
    
    `
}


var News={
    template:`
     <div>
         <div style="background-color: aqua;width: 300px;height: 100px">新闻条目</div>
         <div style="background-color: aqua;width: 300px;height: 100px;margin-top: 100px">新闻条目</div>
         <div style="background-color: aqua;width: 300px;height: 100px;margin-top: 100px">新闻条目</div>
     </div>
    `
}
var Shipin={
    template:`
    <div>
       <div style="background-color: aqua;width: 300px;height:100px">广告栏</div>
       <div style="background-color: aqua;width: 300px;height: 200px;margin-top: 100px">视频内容</div>
    </div>
    `
}

var routes=[
    {
        path:'/home',component:Home,

    },
    {
        path:'/news',component:News
    },
    {
        path:'/shipin',component:Shipin
    },
    {path:'*',redirect:'/home'}

]
var router = new VueRouter({
    routes
})

var box=new Vue({
    el:"#box",
    router,
})

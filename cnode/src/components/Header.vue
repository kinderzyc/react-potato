<template>
    <div class="header">
        <div class="header_wrapper">
            <router-link :to="{name: 'root'}">
                <img src="../assets/cnodejs_light.svg" alt="">
            </router-link>
             <form action="search" class="sch">
                    <input type="text" class="sq">
                </form>
        <ul>
            <li>
                <router-link :to="{
                                name: 'root'
                            }">主页</router-link>
            </li>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登录</a></li>
        </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"Header"
}
</script>

<style scoped>
a{
    text-decoration: none;
    color: #CCC;
    font-size: 14px;
    text-shadow: none;
}
a:hover{
    text-decoration: none;
    color: #ffffff;
    font-size: 14px;
    text-shadow: none;
}
.header{
    background-color: #444;
    height: 60px;
}
.header_wrapper{
    width: 90%;
    margin: 0 auto;
}
img{
    max-width: 120px;
    margin-top: 10px;
}
ul{
    list-style: none;
    float: right;
    margin: 4px;
    line-height:30px;
}
ul li{
    display: inline-block;
    padding: 10px 15px;
}
.sch{
    display:inline-block;
    margin-left: 20px;
}
.sq{
        padding: 3px 5px 3px 22px;
        color: #666;
        border: 0;
        margin-top: 2px;
        transition: all .5s;
}
.imgsch{
    margin-left: 10px;
}
</style>
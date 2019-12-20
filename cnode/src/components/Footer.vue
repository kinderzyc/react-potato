<template>
    <div class="footer">
        <div class="footer_wrapper">
            <p><a class="source" href="#" target="_blank">源码地址</a></p>
            <p><img src="../assets/cnodejs_light.svg" alt="CNode"></p>
        
            <p>Vue.js 仿 CNode 开源技术社区</p>
            <p>© CopyRight 2018 All Rights Reserved.</p>
        </div>
    </div>
</template>

<script>
export default {
    name:"Footer"
}
</script>

<style scoped>
ul,li{
    list-style: none;
}
.footer{
    background: #444;
}
.footer_wrapper{
    width: 90%;
    margin: 0 auto;
    padding: 30px 0;
}
.footer_wrapper p{
    color: #FFF;
    margin: 10px 0;
}
.footer_wrapper p img{
    max-width: 120px;
}
.footer_wrapper p a{
    color: #80BD01;
    text-decoration: none;
}
.footer_wrapper p a:hover{
    color: white;
    text-decoration: underline;
}
.icon{
    fill: #80BD01;
    width: 32px;
    height: 32px;
}
.footer_wrapper ul{
    margin: 0!important;
}
.footer_wrapper ul li{
    display: inline-block;
    margin: 5px 5px;
}
</style>
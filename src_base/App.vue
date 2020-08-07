<template>
    <div>
        <img class="logo" src="./assets/logo.png" alt="logo">
        <!--2.使用组件标签-->
        <HelloWorld/>
    </div>
</template>

<script>
    //1.引入
    import HelloWorld from "./components/HelloWorld.vue"
    export default {
        //2.映射
        components:{
            HelloWorld
        }
    }
</script>

<style>
    .logo{
        width: 200px;
        height: 200px;
    }
</style>
<template>
    <div>
        <p class="msg">{{msg}}</p>
    </div>
</template>

<script>
    export default {//配置对象
        data(){//必须是函数
            return {
                msg:'Hello vue'
            }
        }
    }
</script>

<style>
    .msg{
        color:red;
        font-size:20px;
    }
</style>
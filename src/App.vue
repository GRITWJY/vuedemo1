<template>
    <div>
        <header class="site-header jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-xs-12">
                        <h1>请发表对Vue的评论</h1>
                    </div>
                </div>
            </div>
        </header>
        <div class="container">
            <Add :addComment="addComment"/>
            <List :comments="comments" :delComment="delComment"/>
        </div>
    </div>
</template>

<script>
    import Add from './components/Add.vue'
    import List from './components/List.vue'
    export  default {
        data(){
            return{
                comments:[//数据在那个组件，操作数据的行为（方法）就应该定义在哪个组件
                    {
                        name:'BOB',
                        content:'Vue还不错'
                    },
                    {
                        name:'Bct',
                        content:'Vue不错'
                    },
                    {
                        name:'feB',
                        content:'Vue还错'
                    },
                ]
            }
        },
        methods: {
            //添加【评论
            addComment(comment) {
                this.comments.unshift(comment)
            },
            //删除指定下标评论
            delComment(index){
                this.comments.splice(index,1)
            }

        },
        components: {
            Add,
            List
        }
    }
</script>

<style>
</style>

<template>
    <div>
        <h1>这是登陆组件---{{ msg }}</h1>
    </div>
</template>



<script>
    export default {
        data() {
            return {
                msg: '123456'
            };
        },
        methods: {
            show() {
                console.log("调用了login.vue中的show方法");
            }
        }
    };
</script>



<style>

</style>
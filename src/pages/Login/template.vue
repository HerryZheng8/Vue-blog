<template>
  <div id="login">
    <h4 style="color: black">用户名</h4>
    <input v-model="username" placerholder="用户名"></input>
<!--    <p class="error">当前用户名已注册</p>-->
    <h4 style="color: black">密码</h4>
    <input v-model="password" type="password" placerholder="密码" @keyup.enter="onLogin"></input>
<!--    <p class="error">当前用户名已注册</p>-->
    <el-button size="medium" @click="onLogin">立即登录</el-button>
    <p class="notice">没有账号？<router-link to="/register">注册新用户</router-link> </p>
  </div>
</template>

<script src="./template.ts">

</script>

<style lang="less" src="./template.less">

</style>

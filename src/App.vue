<template>
  <div id="app">
    <keep-alive exclude="Detail">   <!--会让组件多出一个生命周期函数 activated 当页面每次被重新加载的时候就会执行 -->
      <router-view />               <!--exclude="Detail"  Detail这个组件不会缓存，每次加载都会走mounted函数-->
    </keep-alive>                   <!--算是activated周期函数外的  另一种，可以每次请求新数据的方法-->
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
</style>

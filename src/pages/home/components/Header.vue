<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont icon-size">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
        <div class="header-right">
          {{city}}
          <span class="iconfont">&#xe65c;</span>
        </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  props:{
    city:String
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'; // webpack配置好的路径变量在css中使用需要加~

.header {
  display: flex;
  line-height: 2.5rem; // 此时div的高度其实是line-height撑开的所以行高等于其高度
  background: $bgColor;
  color: #fff;
}

.header-left {
  float: left;
}

.icon-size {
  font-size: 30px;
}

.header-input {
  flex: 1;
  line-height: 2rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  margin-left: 0.5rem;
  background: #fff;
  border-radius: 0.2rem;
  color: #ccc;
}

.header-right {
  float: right;
  width: 4rem;
  text-align: center;
  color:#fff
}
</style>
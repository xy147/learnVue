<template>
  <div>
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-chilren">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position: relative
    left: .1875rem
    top: .1875rem
    display: inline-block
    width: 1.125rem
    height: 1.125rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .315rem
    background-size: 1.25rem 9.375rem
  .item-title
    line-height: 2.5rem
    font-size: 1rem
    padding: 0 .625rem
  .item-chilren
    padding: 0 .625rem
</style>

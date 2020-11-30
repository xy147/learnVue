<template>
    <div class="header">
        <router-link to="/">
            <div class="iconfont header-back">&#xe658;</div>
        </router-link>
        城市选择
    </div>
</template>

<script>
export default {
    name:'CityHeader'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        position:relative
        overflow:hidden
        line-height :2.7rem
        text-align:center
        color:#fff
        background:$bgColor
        font-size:1rem
        .header-back
            position:absolute     //这个地方加float，发现虽然 header-back  在纵向上已经脱离文档流，但是依然在行内元素布局时占据一定的宽度
            top:0                 //导致城市选择无法在整行中剧中显示，所以用了绝对定位
            left:0
            width:2rem
            text-align:center
            font-size:2rem
            color:#fff
</style>
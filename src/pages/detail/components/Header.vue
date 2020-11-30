<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont back-icon">&#xe658;</div>
        </router-link>
        <div 
            class="header-fixed" 
            v-show="!showAbs"
            :style="opacityStyle"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe658;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>

<script>
export default {
    name:'DetailHeader',
    data () {
        return {
            showAbs: true,
            opacityStyle: {
                opacity: 0
            }
        }
    },
      methods: {
        handleScroll () {
            console.log('scroll')
            const top = document.documentElement.scrollTop
            if (top > 60) {
                let opacity = top / 140
                opacity = opacity > 1 ? 1 : opacity
                this.opacityStyle = { opacity }
                this.showAbs = false
            } else {
                this.showAbs = true
            }
        }
    },
    activated () {
        console.log("scroll")
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated () {
        console.log("unscroll")
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header-abs
        position: absolute
        left: 0.625rem
        top: 0.625rem
        width: 2.5rem
        height: 2.5rem 
        line-height: 2.5rem
        border-radius: 1.25rem 
        text-align: center
        background: rgba(0,0,0, .8)
        .back-icon
            color:#fff
            font-size:1.25rem 
    .header-fixed
        z-index: 2
        position: fixed
        top: 0
        left: 0
        right: 0
        height: $headerHeight
        line-height: $headerHeight
        text-align: center
        color: #fff
        background: $bgColor
        font-size: 1rem
        .header-fixed-back
            position: absolute
            top: 0
            left: 0
            width: 2rem
            text-align: center
            font-size: 1.25rem
            color: #fff
</style>
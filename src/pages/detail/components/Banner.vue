<template>
    <div>
        <div class="banner" @click="hanleBannerClick">
            <img src="http://img1.qunarzz.com/sight/p0/2005/a9/a9411416ff215fe2a3.water.jpg_600x330_feb1c240.jpg" alt="">
            <div class="banner-info">
                <div class="banner-title">
                    上海迪士尼乐园
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe64a;</span>41
                </div>
            </div>
        </div>
        <FadeAnimation>
            <CommonGallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"/>
        </FadeAnimation>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: "DetailBanner",
  components:{
      CommonGallary,
      FadeAnimation
  },
  methods:{
      hanleBannerClick () {
          this.showGallary = true
      },
      handleGallaryClose () {
          this.showGallary = false
      }
  },
  data () {
    return {
        showGallary:false,
        imgs:[
            "http://img1.qunarzz.com/sight/p0/1905/28/28622a6b07caa0faa3.img.jpg_350x240_68551c46.jpg",
            "http://img1.qunarzz.com/sight/p0/1811/a8/a86cbcef8dfd35c6a3.water.jpg_350x240_cc9d4693.jpg"
        ]
    }
  }
}
</script>

<style lang="stylus" scoped>
    .banner
        position: relative
        overflow: hidden
        height: 0
        padding-bottom: 55%
        .banner-img
            width: 100%
        .banner-info
            display: flex 
            position: absolute
            left: 0
            right: 0
            bottom: 0
            line-height: 1.875rem
            color: #fff
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex: 1
                font-size: 1rem 
                padding: 0 0.625rem
            .banner-number
                padding:0 1.25rem 
                height: 1rem 
                line-height: 1rem 
                border-radius: 0.625rem 
                font-size: 0.75rem
                background:rgba(0,0,0,0.8)
                margin-top: 0.5rem 
                .banner-icon
                    font-size: 0.75rem
</style>
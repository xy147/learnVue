<template>
    <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
            <swiper ref="mySwiper" :options="swiperOptions">
                <swiper-slide v-for="(item,index) of imgs" :key="index">
                    <img class="swip-img" :src="item" alt />
                </swiper-slide>
                <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
export default {
    name:'CommonGallary',
    props:{
        imgs:{
            type:Array
        }
    },
    data () {
      return {
        swiperOptions:{
            loop:true,
            pagination: '.swiper-pagination',    //没有用，看下对应版本的swiper是如何配置的
            paginationType: 'fraction',
            observeParents:true,
            observer:true
        }     
      }
    },
    methods:{
        handleGallaryClick () {
            this.$emit("close")
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container
        display: flex
        flex-direction: column
        justify-content: center
        z-index: 99
        position: fixed
        left: 0
        right: 0
        top: 0
        bottom: 0
        background: #000
        .wrapper
            background: #fff
            overflow: hidden
            height: 0
            width: 100%
            padding-bottom: 68%
            .swip-img
                width:100%
            .swiper-pagination
                color:#fff

</style>
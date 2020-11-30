<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
            <swiper-slide v-for="item of swiperList" :key="item.id">
            <img class="swip-img" :src="item.imgUrl" alt />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: "HomeSwiper",
  props:{
      swiperList:Array
  },
  data (){
      return {
          swiperOptions:{
              loop:true
          }
        //   swiperList:[
        //       {
        //           id:'001',
        //           imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/7176acd77332a433af9636eb9a2c338c.jpeg'
        //       },
        //       {
        //           id:'002',
        //           imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg'
        //       },
        //       {
        //           id:'003',
        //           imgUrl:'https://imgs.qunarzz.com/vs_ceph_vcimg/f03f5ac90ae59d0d9c6332a2bfd9782e.jpeg' 
        //       }
        //   ]
      }
  },
  computed:{
      showSwiper () {
          return this.swiperList.length
      }
  }
};
</script>

<style lang="stylus" scoped>
    .wrapper
        overflow:hidden
        height:0
        padding-bottom:31.25%      //让高度永远撑开width为100%时一定比例的高度，这也是图片的宽高比，这样就不会出现图片未加载时候
        .swip-img                   //下面的元素为上来，图片加载后元素又被挤下去，这样上下跳动，会给用户很不好的感觉
            width:100%
</style>
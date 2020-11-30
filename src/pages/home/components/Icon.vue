<template>
    <div class="icons">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item of page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.iconUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.des}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
export default {
    name:'HomeIcon',
    props:{
        iconList:Array
    },
    data (){
        return {
            swiperOptions:{
                loop:false
            }
            // iconList:[
            //     {
            //         id:"001",
            //         iconUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
            //         des:"热门景点"
            //     },
            //     {
            //         id:"002",
            //         iconUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/69e8b07cb2d438c5530aebd4c8e3abd3.png",
            //         des:"一日游"
            //     },
            //     {
            //         id:"003",
            //         iconUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/50357a9f88fe84bcf9d20961059c8611.png",
            //         des:"上海迪士尼"
            //     },
            //     {
            //         id:"004",
            //         iconUrl:"https://imgs.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png",
            //         des:"东方明珠"
            //     },
            //     {
            //         id:"005",
            //         iconUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/aba25fb84648c130561afa5398d3552a.png",
            //         des:"野生动物园"
            //     },
            //     {
            //         id:"006",
            //         iconUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/89545f7aa8451b0979f7fcfd5536b7c1.png",
            //         des:"上海海昌"
            //     },
            //     {
            //         id:"007",
            //         iconUrl:"https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
            //         des:"豫园"
            //     },
            //     {
            //         id:"008",
            //         iconUrl:"https://imgs.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
            //         des:"上海水族馆"
            //     },
            //     {
            //         id:"009",
            //         iconUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/f9b2f683354d575710af0938cfef675e.png",
            //         des:"杜莎蜡像馆"
            //     }
            // ]
            
        }
  },
  computed:{
      pages () {
          const pages = []
          this.iconList.forEach((item,index)=>{
              const page = Math.floor(index/8)
              if(!pages[page]){
                  pages[page] = []
              }
              pages[page].push(item)
          })
          return pages
      }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl';
    .icons >>> .swiper-container
        height:0
        padding-bottom:50%
        .icon
            position:relative
            overflow:hidden
            height :0
            float:left
            width:25%
            padding-bottom:25%
            .icon-img
                position:absolute         
                top:0
                left:0px
                right:0
                bottom:20px
                box-sizing:border-box
                padding:5px
                .icon-img-content
                    height:100%
                    display:block
                    margin:0 auto
            .icon-desc
                position:absolute
                left:0
                right:0
                bottom:0
                height:20px
                line-height :20px
                text-align:center     
                margin:0
                ellipsis()  //这里为啥不需要像 Recommend.vue里一样配合 min-width：0,这里可以直接文字超出显示省略号


</style>
<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
                <img class="item-img" :src="item.imgUrl" alt="">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        recommendList:Array
    }
    // data () {
    //     return {
    //         itemList:[
    //             {
    //                 id:'001',
    //                 imgUrl:'https://imgs.qunarzz.com/sight/p0/2005/a9/a9411416ff215fe2a3.water.jpg_200x200_3110fb7b.jpg',
    //                 title:'上海迪士尼乐园',
    //                 desc:'全球最大的迪士尼城堡'
    //             },
    //             {
    //                 id:'002',
    //                 imgUrl:'https://imgs.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_200x200_6d7378b2.jpg',
    //                 title:'东方明珠',
    //                 desc:'259米透明悬空观光廊了解一下~'
    //             },
    //             {
    //                 id:'003',
    //                 imgUrl:'https://imgs.qunarzz.com/sight/p0/2005/9e/9e643f96c84b5c2ea3.water.jpg_200x200_2a3eef5b.jpg',
    //                 title:'上海欢乐谷',
    //                 desc:'敢上1200米长的木质过山车吗？~' 
    //             }
    //         ]
    //     }
    // }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
    .title
        margin-top:1rem
        line-height 2.5rem
        background:#eee
        text-indent:1.5rem
    ul
        margin:0
        padding:0
    .item
        display:flex
        height 6rem
        overflow:hidden
        .item-img
            height:5rem
            width:5rem
            padding:0.5rem
        .item-info
            flex:1
            min-width:0   //这里配合ellipsis() 可以让当行文字超出时显示省略号
            padding:0.25rem
            .item-title
                line-height:1.7rem
                font-size:1rem
                margin:0
                ellipsis()
            .item-desc
                line-height:1.25rem
                color:#ccc
                font-size:0.8rem
                margin:0
                ellipsis()
            .item-button
                line-height:1.375rem
                font-size:0.8rem
                margin-top:0.8rem
                background:#ff9300
                padding:0 0.625rem
                border-radius: .0.2rem
                color:#fff
                border-style:none
</style>


<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                            上海
                        </div>
                    </div>              
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key="item.id">
                        <div class="button">
                            {{item.name}}
                        </div>
                    </div>             
                </div>
            </div>
            <div class="area" v-for="(value,key) in cities" :key="key" :ref="key"> 
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list" v-for="item of value" :key="item.id">
                    <div class="item border-bottom" >
                        {{item.name}}
                    </div>         
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
export default {
    name:'CityList',
    props:{
        hot:Array,
        cities:Object,
        letter:String
    },
    mounted () {
        this.scroll = new BetterScroll(this.$refs.wrapper)
    },
    watch:{
        letter () {
            if(this.letter){
                const element = this.$refs[this.letter][0]  //由于这个节点是通过数据循环出来的，这里获取到的是一个数组，而不是元素
                this.scroll.scrollToElement(element)         //其数组的第一个元素即为该元素
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .list
        position:absolute
        top:4.9375rem
        left:0
        right:0
        bottom:0
        overflow:hidden
        .border-topbottom
            &:before
                border-color:#ccc
            &:after
                border-color:#ccc
        .border-bottom
            &:before
                border-color:#ccc
        .title
            line-height:1.375rem
            background:#eee
            padding-left:0.625rem
            color:#666
            font-size:0.8125rem
        .button-list
            overflow:hidden
            padding:0.325rem 1.875rem 0.325rem 0.325rem
            .button-wrapper
                float:left
                width:33.33%
                .button
                    margin:0.315rem 
                    padding:0.315rem 
                    text-align:center
                    border:0.02rem solid #ccc
                    border-radius:0.1875rem
        .item-list
            .item
                line-height:2.375rem
                padding-left:0.625rem
</style>
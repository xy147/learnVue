<template>
<div>
    <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名字">
    </div>
    <div class="search-result-content" ref="search" v-show="keyword">
        <ul class="ul-style">
            <li 
            class="search-result-item border-bottom"
            v-for="item of list"
            :key="item.id"
            >{{item.name}}</li>
            <li 
             class="search-result-item border-bottom"
            v-show="hasData">
            没有找到匹配项</li>
        </ul>
    </div>
</div>

</template>

<script>
import BetterScroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data () {
        return {
            keyword:'',
            list:[],
            timer:null
        }
    },
    computed:{
        hasData () {
            return !this.list.length
        }
    },
    watch:{
        keyword () {
            if(this.timer){
                clearTimeout(this.timer)
            }
            if(!this.keyword){
                this.list=[]
                return 
            }
            this.timer = setTimeout(()=>{
                const result = []
                for (let i in this.cities){
                    this.cities[i].forEach(element => {
                        if(element.spell.indexOf(this.keyword) > -1 || element.name.indexOf(this.keyword) > -1){
                            result.push(element)
                        }
                    });
                }
                this.list = result
            },100)
        }
    },
    mounted () {
        this.scroll = new BetterScroll(this.$refs.search)
    }
}
</script> 

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height:2.25rem
        padding:0 0.3rem
        background:$bgColor
        .search-input
            box-sizing:border-box
            border:none
            outline:none
            padding:0 0.31rem
            width:100%
            line-height :1.93rem
            text-align:center
            border-radius:0.18rem
            color:#666
    .search-result-content
        z-index:1
        overflow:hidden
        position:absolute
        top:4.9375rem
        left:0
        right:0
        bottom:0
        background:#eee
        .ul-style
            margin:0
            padding:0
            .search-result-item 
                list-style-type:none
                line-height :1.9375rem
                padding-left 0.625rem
                background:#fff
                color:#666


</style>
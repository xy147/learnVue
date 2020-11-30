<template>
    <ul class="list">
        <li 
        class="item" 
        v-for="value of letters" 
        :key="value"
        :ref="value"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchEnd="handleTouchEnd"
        @click="handleLetterClick"
        >
        {{value}}
        </li>
    </ul>
</template>

<script>
export default {
    name:"CityAlphabet",
    props:{
        cities:Object
    },
    data () {
        return {
            touchStatus:false,
            startY:0,
            timer:null
        }
    },
    updated () {
        this.startY = this.$refs['A'][0].offsetTop
    },
    computed:{
        letters () {
            const letters = []
            for (let i in this.cities) {
                letters.push(i)
            }
            return letters
        }
    },
    methods:{
        handleLetterClick (e) {
            this.$emit('change',e.target.innerText)
        },
        handleTouchStart () {
            this.touchStatus = true
        },
        handleTouchMove (e) {
            if(this.touchStatus){
                if (this.timer){                //这块函数节流好好学习下
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(()=>{
                    const touchY = e.touches[0].clientY - 79
                    const index = Math.floor((touchY - this.startY)/20)
                    if(index >= 0 && index < this.letters.length){
                        this.$emit('change',this.letters[index])
                    }  
                },16) 
            }
        },
        handleTouchEnd () {
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .list
        position:absolute
        display:flex
        flex-direction:column
        justify-content:center
        top:4.9375rem
        right:0
        bottom:0
        width:1.25rem
        .item
            text-align:center
            list-style-type:none
            line-height:1.25rem
</style>
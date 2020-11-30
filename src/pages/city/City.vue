<template>
    <div>
        <CityHeader/>
        <CitySearch :cities="cities"/>
        <CityList :letter="letter" :hot="hotCities" :cities="cities"/>
        <CityAlphabet @change="handleLetterChange" :cities="cities"/>
    </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
    name:"City",
    data () {
        return {
            cities:{},
            hotCities:[],
            letter:''
        }
    },
    components:{
        CityHeader,
        CitySearch,
        CityList,
        CityAlphabet
    },
    methods:{
        getCityInfo () {
            axios.get("/api/city.json").then(this.getCityInfoSuc)
        },
        getCityInfoSuc (res) {
            res = res.data
            if(res.ret&&res.data){
                const data = res.data
                this.cities = data.cities
                this.hotCities = data.hotCities
            }
        },
        handleLetterChange (letter) {
            this.letter = letter
        }
    },
    mounted() {
        this.getCityInfo();
    }
}
</script>

<style>
</style>
<template>
  <div>
    <HomeHeader></HomeHeader>
    <HomeSwiper :swiperList="swiperList"></HomeSwiper>
    <HomeIcon :iconList="iconList"></HomeIcon>
    <HomeRecommend :recommendList="recommendList"></HomeRecommend>
    <HomeWeekend :weekendList="weekendList"></HomeWeekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header";
import HomeSwiper from "./components/Swiper";
import HomeIcon from "./components/Icon";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";
import {mapState} from 'vuex'

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      lastCity:'',
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]
    }
  },
  computed:{
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo() {
      axios.get("/api/index.json?city=" + this.city).then(this.getHomeInfoSuc);
    },
    getHomeInfoSuc(res) {
      res = res.data
      if(res.ret&&res.data){
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo();
  },
  activated () {
    if (this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo();
    }
  }
};
</script>

<style>
</style>
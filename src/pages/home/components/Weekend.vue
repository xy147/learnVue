<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
    weekendList:Array
  }
  // data() {
  //   return {
  //     itemList: [
  //       {
  //         id: "001",
  //         imgUrl:
  //           "https://imgs.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg",
  //         title: "上海必打卡",
  //         desc: "中西合璧，现代和传统各有各的精彩"
  //       },
  //       {
  //         id: "002",
  //         imgUrl:
  //           "https://imgs.qunarzz.com/sight/source/1511/ea/7f43191b747bb9.jpg_r_640x214_f58e829d.jpg",
  //         title: "上海泡汤圣地",
  //         desc:
  //           "上海的朋友总会问，哪里可以泡温泉，哪里的温泉好呢？这里有最好最全的上海温泉~"
  //       },
  //       {
  //         id: "003",
  //         imgUrl:
  //           "https://imgs.qunarzz.com/sight/source/1509/41/0a74389a026adc.jpg_r_640x214_5ad7add7.jpg",
  //         title: "上海赏秋攻略",
  //         desc: "上海的秋天，哪里都是美美哒    ~"
  //       }
  //     ]
  //   };
  //}
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.title {
  line-height: 2.5rem;
  background: #eee;
  text-indent: 1.5rem;
}

ul {
  margin: 0;
  padding: 0;

  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;

    .item-img {
      width: 100%;
    }
  }

  .item-info {
    min-width: 0; // 这里配合ellipsis() 可以让当行文字超出时显示省略号
    padding: 0.25rem;

    .item-title {
      line-height: 1.7rem;
      font-size: 1rem;
      margin: 0;
      ellipsis();
    }

    .item-desc {
      line-height: 1.25rem;
      color: #ccc;
      font-size: 0.8rem;
      margin: 0;
      ellipsis();
    }
  }
}
</style>


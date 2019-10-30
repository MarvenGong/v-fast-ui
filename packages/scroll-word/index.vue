<template>
  <section>
    <p>{{activeIndex}}</p>
    <div class="scoll-container">
    <ul id="ul" :class="{'no-transition': ulNoTransition}" :style="{'margin-top': -40 * (activeIndex) + 'px'}">
      <!-- <li>{{words[words.length - 1]}}</li> -->
      <li v-for="(item, index) in words" :key="index">{{item}}</li>
      <li>{{words[0]}}</li>
    </ul>
    </div>
  </section>
</template>
<script>
export default {
  name: 'scroll-word',
  data() {
    return {
      activeIndex: 0,
      ulNoTransition: false,
      words: [
        'aaaaaaaaa',
        'bbbbbbbbb',
        'ccccccccc'
      ]
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      this.$data.ulNoTransition = false;
      this.$data.activeIndex = this.$data.activeIndex + 1;
      if (this.$data.activeIndex > this.$data.words.length) {
        this.$data.ulNoTransition = true;
        this.$data.activeIndex = 0;
      }
    }, 1000);
  }
}
</script>
<style lang="css">
.scoll-container{
  height: 40px;
  overflow: hidden;
}
  ul{
    margin: 0; padding: 0;
    transition: all 500ms;

  }
  ul.no-transition{
    transition: none;
  }
  li{
    padding: 0;
    list-style: none;
    text-align: left;
    height: 40px;
    line-height: 40px;
  }
</style>
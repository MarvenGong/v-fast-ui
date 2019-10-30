<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      <button @click="hanndleToast">提示Toast信息</button>
      <button @click="hanndleIndicator">全局loading提示</button>
    </p>
    <p><six-number type="rect"></six-number></p>
    <p><scroll-word></scroll-word></p>
  </div>
</template>

<script>
// import { Toast, Indicator } from '../../packages';
// import { Six } from '../../packages';
import { setTimeout } from 'timers';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    hanndleToast() {
      // Toast('你好呀');
      this.$toast('你好呀');
    },
    hanndleIndicator() {
      this.$indicator.open('loading...');
      setTimeout(() => {
        this.$indicator.close();
      }, 2000)
    }
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*:focus{
  outline: none;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  width: 375px; 
  margin: 0 auto;
}
button {
  cursor: pointer;
  background: #42b983;
  color: #fff;
  padding: 7px 8px;
  border: 0;
  margin: 0 8px;
}
</style>

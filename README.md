# v-fast-ui

## GitHub 仓库地址
[https://github.com/MarvenGong/v-fast-ui]

## 安装
~~~javascript
npm install --save v-fast-ui
~~~

## 使用
### 全局引入
在项目的main.js中添加下面的代码
~~~javascript
import 'v-fast-ui/lib/v-fast-ui.css';
import VFastUi from 'v-fast-ui';

Vue.use(VFastUi);
~~~
#### Toast 全局提示
~~~javascript
this.$toast('提示内容');
~~~
#### Indicator 全局加载
~~~javascript
this.$indicator.open('loading...'); // 打开加载动画
setTimeout(() => {
  this.$indicator.close(); // 关闭加载动画
}, 2000);
~~~
#### SixNumber六位密码输入控件
##### props
- type : 组件内文本框的样式类型 “line” 下划线样式 “rect” 矩形框样式 默认：“line”
- input-type: 组件内文本框的原生type属性 一般为“number” 或者“password” 默认："number"
> 说明

##### 指令
- v-model : 与父组件对应数据的绑定 字符串类型

##### methods

- focus(index) : 手动触发聚焦到某一个文本框，index为文本框的序号（从0开始）如果index大于文本框总数减一则会聚焦到最后要一个。

##### event事件

- on-finish : 当最后一个文本框输入内容完成时触发。参数 data 此时的内容字符串。
~~~javascript
<template>
  <div v-wqd-title="'修改支付密码'" class="reset-paypwd">
    <div class="rpg">
      <label>输入原6位数字支付密码，完成身份验</label>
      <six-number ref="firstSixNumber" @on-finish="$refs['secondSixNumber'].focus()" 
        v-model="formData.oldPwd" type="rect" input-type="password"></six-number>
    </div>
    <div class="rpg">
    <label>请输入6位数字的新支付密码</label>
    <six-number @on-finish="$refs['thirdSixNumber'].focus()" ref="secondSixNumber" 
      v-model="formData.newPwd" type="rect" input-type="password"></six-number>
    </div>
    <div class="rpg">
    <label>请再次输入6位数字的新支付密码</label>
    <six-number ref="thirdSixNumber" v-model="formData.renewPwd" type="rect" input-type="password"></six-number>
    </div>
  </div>
</template>
<script>
export default {
  name: 'resetPayPassword',
  data() {
    return {
      formData: {
        oldPwd: '',
        newPwd: '',
        renewPwd: ''
      }
    };
  },
  components: {
    SixNumber
  }
};
</script>
<style lang="scss" scoped>
  .reset-paypwd{
    padding: px2rem(60) px2rem(40);
    .rpg{
      margin-bottom: px2rem(80);
      label{
        display: block;
        margin-bottom: px2rem(20);
        font-size: px2rem(28)
      }
    }
  }
</style>
~~~
### Toast全局提示组件


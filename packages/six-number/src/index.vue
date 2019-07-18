<template>
<div>
  <input @focus="handleInputFocus"
    @blur="handleInputBlur"
    @keyup="inputData.length === 6 ? lastCodeKeyup($event) : codekeyup($event)"
    ref="codeinput" v-model="inputData" type="tel" pattern="[0-9]*" maxlength="6" class="code-input">
  <div class="code-all" @click="focus()">
    <div class="code-item"
      v-for="(item, index) in codeData" :key="index"
      :class="{ 'line': type === 'line', 'rect': type === 'rect',
        'focus': (focusIndex === index && inputFoucs) || (index === 5 && focusIndex === 6 && inputFoucs) }">
      {{ inputData[index] | number2password(inputType === 'password') }}
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: 'six-number',
  data() {
    return {
      codeData: '123456',
      inputData: '123',
      inputFoucs: false,
    };
  },
  props: {
    type: {
      type: String,
      default: 'line',
      required: false
    },
    inputType: {
      type: String,
      default: 'number',
      required: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    focusIndex() {
      return this.$data.inputData.length;
    }
  },
  filters: {
    number2password(value, isPassword) {
      if (value) {
        return isPassword ? '•' : value;
      } else {
        return '';
      }
    }
  },
  methods: {
    focus() {
      this.$el.querySelector('input').focus();
    },
    clear() {
      this.$data.inputData = '';
      this.$emit('input', '');
    },
    handleInputFocus() {
      this.$data.inputFoucs = true;
    },
    handleInputBlur() {
      this.$data.inputFoucs = false;
    },
    codekeyup(e) {
      const currValue = e.currentTarget.value;
      // 限制输入数字
      if (/\D/.test(currValue)) {
        const cValue = currValue.substring(0, currValue.length - 1);
        e.currentTarget.value = currValue.substring(0, currValue.length - 1);
        this.$data.inputData = cValue;
        return false;
      }
      this.$emit('input', this.$data.inputData);
    },
    /**
     * 最后一个文本框输入完成
     */
    lastCodeKeyup(e) {
      this.codekeyup(e);
      this.$emit('on-finish', this.$data.inputData);
    }
  },
  watch: {
    value(newVal) {
      this.$data.inputData = newVal;
    }
  },
  mounted() {
    this.$data.inputData = this.value;
  }
};
</script>
<style lang="css" scoped>
.code-input{
  position: relative;
  height: 0;
  left: -100%;
  border: 0;
}
.code-input:focus{
  outline: none;
}
.code-all {
  display: flex;
  justify-content: space-between;
  
}
.code-all > .code-item {
  font-family: Arial, Helvetica, sans-serif;
  width: 40px; height: 40px;
  font-size: 24px;
  line-height: 40px;
  text-align: center;
  background: transparent;
  position: relative;
}
.code-all > .code-item.line{
    border-bottom: 1px solid #E7E7E7;
  }
.code-all > .code-item.rect{
  border: 1px solid #E7E7E7;
}
.code-all > .code-item:focus{
  outline: none;
}
.code-all > .code-item.focus::after{
  content: " ";
  display: inline-block;
  width: 1px; height: 24px;
  position: absolute;
  left: 50; top: 50%;
  margin-left: -1px; margin-top: -12px;
  background-color: #333;
  animation: breathFocus 1s ease-out infinite;
}
@keyframes breathFocus {
  0%{
    opacity: 1
  }
  100%{
    opacity: 0
  }
}
</style>
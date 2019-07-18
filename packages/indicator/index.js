import Vue from 'vue';
import Spinner from '../spinner';
const IndicatorConstructor = Vue.extend({
  template: `
    <transition name="mint-indicator">
      <div class="mint-indicator" v-show="visible">
        <div class="mint-indicator-mask" @touchmove.stop.prevent></div>
        <div class="mint-indicator-wrapper" :style="{ 'padding': text ? '20px' : '15px' }">
          <spinner class="mint-indicator-spin" :type="convertedSpinnerType" :size="32"></spinner>
          <span class="mint-indicator-text" v-show="text">{{ text }}</span>
        </div>
      </div>
    </transition>
  `,
  data() {
    return {
      visible: false
    };
  },

  components: {
    Spinner
  },

  computed: {
    convertedSpinnerType() {
      switch (this.spinnerType) {
      case 'double-bounce':
        return 1;
      case 'triple-bounce':
        return 2;
      case 'fading-circle':
        return 3;
      default:
        return 0;
      }
    }
  },
  props: {
    text: String,
    spinnerType: {
      type: String,
      default: 'snake'
    }
  }
});

let instance;

export default {
  open(options = {}) {
    if (!instance) {
      instance = new IndicatorConstructor();
    }
    if (instance.visible) return;
    instance.text = typeof options === 'string' ? options : options.text || '';
    instance.spinnerType = options.spinnerType || 'snake';
    instance.$mount(document.createElement('div'));
    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.visible = true;
    });
  },

  close() {
    if (instance) {
      instance.visible = false;
    }
  }
};

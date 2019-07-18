import Vue from 'vue';

// const ToastConstructor = Vue.extend(require('./toast.vue'));
const ToastConstructor = Vue.extend({
  template: `
  <transition name="mint-toast-pop">
    <div class="mint-toast" v-show="visible" :class="customClass" :style="{ 'padding': iconClass === '' ? '10px' : '20px' }">
      <i class="mint-toast-icon" :class="iconClass" v-if="iconClass !== ''"></i>
      <span class="mint-toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
    </div>
  </transition>
  `,
  props: {
    message: String,
    className: {
      type: String,
      default: ''
    },
    position: {
      type: String,
      default: 'middle'
    },
    iconClass: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      visible: false
    };
  },

  computed: {
    customClass() {
      var classes = [];
      switch (this.position) {
        case 'top':
          classes.push('is-placetop');
          break;
        case 'bottom':
          classes.push('is-placebottom');
          break;
        default:
          classes.push('is-placemiddle');
      }
      classes.push(this.className);

      return classes.join(' ');
    }
  }
});
let toastPool = [];

let getAnInstance = () => {
  if (toastPool.length > 0) {
    let instance = toastPool[0];
    toastPool.splice(0, 1);
    return instance;
  }
  return new ToastConstructor({});
};

let returnAnInstance = instance => {
  if (instance) {
    toastPool.push(instance);
  }
};

let removeDom = event => {
  if (event.target.parentNode) {
    event.target.parentNode.removeChild(event.target);
  }
};

ToastConstructor.prototype.close = function() {
  this.visible = false;
  this.$el.addEventListener('transitionend', removeDom);
  this.closed = true;
  returnAnInstance(this);
};

let Toast = (options = {}) => {
  let duration = options.duration || 2000;

  let instance = getAnInstance();
  instance.closed = false;
  clearTimeout(instance.timer);
  instance.message = typeof options === 'string' ? options : options.message;
  instance.position = options.position || 'middle';
  instance.className = options.className || '';
  instance.iconClass = options.iconClass || '';
  const inse = instance.$mount(document.createElement('div'));
  document.body.appendChild(inse.$el);
  Vue.nextTick(function() {
    instance.visible = true;
    instance.$el.removeEventListener('transitionend', removeDom);
    ~duration && (instance.timer = setTimeout(function() {
      if (instance.closed) return;
      instance.close();
    }, duration));
  });
  return instance;
};

export default Toast;

import Vue from 'vue';
import ElementUI from 'element-ui';
import '../theme/index.css';
import App from './app';

Vue.use(ElementUI);

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
});

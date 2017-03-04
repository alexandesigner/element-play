import { play } from 'vue-play'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import MyButton from '../element/packages/button/src/button.vue'

// Use `play` to describe component title
// use .add to add scenario for that component
play('Button')
  .add('with text', h => h(MyButton, ['hello world']))
  .add('with emoji', h => h(MyButton, ['😃🍻']))

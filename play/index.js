import Vue from 'vue'
import { play } from 'vue-play'
import { Button } from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

// register globally
Vue.component('el-button', Button)

// Button
play('Button')
  .add('Default', {
    template: '<el-button>Default Button</el-button>'
  })
  .add('Primary', {
    template: '<el-button type="primary">Primary Button</el-button>'
  })
  .add('Text', {
    template: '<el-button type="text">Text Button</el-button>'
  })
  .add('Disabled Default', {
    template: '<el-button :plain="true" :disabled="true">Default Button</el-button>'
  })
  .add('Disabled Primary', {
    template: '<el-button type="primary" disabled>Primary Button</el-button>'
  })
  .add('Disabled Text', {
    template: '<el-button type="text" disabled>Text Button</el-button>'
  })
  .add('Loading', {
    template: '<el-button type="primary" :loading="true">Loading</el-button>'
  })

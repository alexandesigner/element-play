<template>
  <div>
    <h1>Element UI Play</h1>
    <p>🍭 A minimalistic project for demonstrating components of Element UI</p>
    <my-button>Button</my-button>
  </div>
</template>

<script>
  import MyButton from './components/MyButton';
  export default {
    name: 'app',
    components: {
      MyButton
    }
  };
</script>

<style >
html {
  font-family:sans-serif;
}
</style>

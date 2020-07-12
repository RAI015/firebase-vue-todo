<template>
  <b-container>
    <b-link href="#/">Index</b-link>
    <b-link href="#/about">About</b-link>
    <router-link to="/about">About</router-link>
    <b-link href="mailto:user@dummy.com" target="_blank">Mail</b-link>
  </b-container>
</template>

<script>
export default {
  name: 'TodoLink',
};
</script>

<style scoped>

</style>

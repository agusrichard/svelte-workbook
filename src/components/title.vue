<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<script>
export default {
}
</script>

<style scoped>
h1 {
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  border-bottom: 2px solid var(--dark-slate-blue);
  padding: 0 15px;
  font-size: 42px;
}
</style>
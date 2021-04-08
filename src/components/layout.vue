<template>
  <div class="layout">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style scoped>
.layout {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--china-pink);
}

.content {
  width: 40%;
  height: 75%;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  background: var(--cultured);
}
</style>>
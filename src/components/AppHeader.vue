<template>
  <div class=" hero">
    <h3>Header / hero</h3>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  height: 60vh;
  background: #ccc;
}
</style>

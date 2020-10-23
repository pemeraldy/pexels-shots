<template>
  <div class=" hero d-flex justify-content-center align-items-center">
    <search-form />
  </div>
</template>

<script>
import SearchForm from "./SearchForm";
export default {
  components: {
    SearchForm,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hero {
  height: 40vh;
  background: #ccc;
  background-image: url("https://picsum.photos/seed/picsum/1000/1000");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>

<template>
  <div class=" hero">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div>
            <h1 class="text-center">Landing Page</h1>
          </div>
        </div>
      </div>
    </div>
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
  background-image: url("https://picsum.photos/seed/picsum/1000/1000");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>

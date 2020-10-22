<template>
  <div class="container mt-4">
    <div class="row my-3">
      <div class="col-12 text-center ">
        <h3>Popular Photos</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm">
        <photo-card />
      </div>
      <div class="col-sm">
        <photo-card />
      </div>
      <div class="col-sm">
        <photo-card />
      </div>
      <div class="col-sm">
        <photo-card />
      </div>
    </div>
    <modal />
  </div>
</template>

<script>
import API_KEY from "../api/config";
import Modal from "./Modal";
import PhotoCard from "./PhotoCard";
export default {
  components: {
    Modal,
    PhotoCard,
  },
  data() {
    return {
      key: API_KEY.api_key,
    };
  },
  computed: {
    allPhotos() {
      return this.$store.getter["getPhotos"];
    },
  },
};
</script>

<style scoped>
.card-body {
  /* display: none; */
}
/* .card:hover .card-body {
  display: block;
} */
</style>

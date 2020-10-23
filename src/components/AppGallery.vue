<template>
  <div class="container mt-4">
    <div class="row my-3">
      <div class="col-12 text-center ">
        <h3>Popular Photos</h3>
      </div>
    </div>
    <div class="row">
      <div v-for="photo in photos" :key="photo.id" class="col-sm">
        <!-- <photo-card :image="photo.src.medium" /> -->
        <div
          class="card m-auto w-100"
          data-toggle="modal"
          data-target="#photoModal"
        >
          <img :src="photo.src.medium" class="card-img-top w-100" alt="..." />
          <div class="card-body">
            <h3>Photographer</h3>
            <h5 class="card-title artist-name">Photo Title:</h5>
          </div>
        </div>
      </div>
    </div>
    <modal />
  </div>
</template>

<script>
import Modal from "./Modal";
// import PhotoCard from "./PhotoCard";
export default {
  components: {
    Modal,
    // PhotoCard,
  },
  data() {
    return {
      allPhotos: [],
    };
  },
  computed: {
    photos() {
      return this.$store.getters["getPhotos"];
    },
  },
  async created() {
    const resp = await this.$store.dispatch("fetchPhotos", "fish");
    console.log(resp);
    this.allPhotos = resp;
    console.log("gallery Comp: ", this.allPhotos);
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

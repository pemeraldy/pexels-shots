<template>
  <div class="home pb-4">
    <app-header />
    <app-gallery :photos="allPhotos" />
  </div>
</template>

<script>
// import EndPoint from "../api/api";
import AppHeader from "@/components/AppHeader.vue";
import AppGallery from "@/components/AppGallery.vue";
export default {
  components: {
    AppHeader,
    AppGallery,
  },
  data() {
    return {
      photos: null,
    };
  },
  methods: {
    async fetchPhotos() {
      this.$store.dispatch("fetchPhotos", "animal");
    },
  },
  computed: {
    allPhotos() {
      return this.$store.getters["getPhotos"];
    },
  },
  mounted() {
    this.fetchPhotos();
  },
};
</script>

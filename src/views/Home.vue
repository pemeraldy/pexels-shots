<template>
  <div class="home pb-4">
    <app-header />
    <app-gallery />
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
    return {};
  },
  methods: {},
};
</script>

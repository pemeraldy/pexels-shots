<template>
  <div class="home">
    <app-header />
    <app-gallery />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppGallery from "@/components/AppGallery.vue";
export default {
  components: {
    AppHeader,
    AppGallery,
  },
};
</script>

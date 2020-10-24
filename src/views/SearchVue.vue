<template>
  <div class="home pb-4">
    <app-header />
    <div class="d-flex justify-content-between">
      <div class="searchNav d-flex w-100 justify-content-end">
        <div class="btn btn-primary">Prev</div>
        <div class="btn btn-primary">Next</div>
        1
      </div>
    </div>
    <app-gallery />
    <app-footer />
  </div>
</template>

<script>
// import EndPoint from "../api/api";
import AppHeader from "@/components/AppHeader.vue";
import AppGallery from "@/components/AppGallery.vue";
import AppFooter from "@/components/Footer.vue";
export default {
  components: {
    AppHeader,
    AppGallery,
    AppFooter,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style>
.home {
  background-color: #ededed;
}
</style>

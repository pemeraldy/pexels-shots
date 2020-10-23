<template>
  <form
    @submit.prevent="searchPhotos"
    class="form-inline w-100 my-2 my-lg-0 d-flex justify-content-center"
  >
    <input
      v-model="queries"
      class="form-control w-50 mr-sm-2"
      type="text"
      placeholder="Search"
    />
    <button class="btn btn-large btn-primary my-2 my-sm-0" type="submit">
      Search
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      queries: "people",
    };
  },
  methods: {
    async searchPhotos() {
      console.log(this.queries);
      await this.$store.dispatch("fetchPhotos", this.queries);
    },
  },
};
</script>

<style></style>

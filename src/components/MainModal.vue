<template>
  <!-- The Modal -->
  <div
    id="myModal"
    v-if="visible"
    class="main-modal d-flex justify-content-center align-items-center"
  >
    <!-- Modal content -->
    <div class="main-modal__content">
      <div class="modal-header">
        <span @click.stop="hideModal" class="close">&times;</span>
      </div>
      <div class="main-modal__body">
        <img :src="modalImageDetails.src.large" alt="" />
      </div>
      <div class="main-modal__footer">
        <div class="artist-name">{{ modalImageDetails.photographer }}</div>
        <div class="btn btn-danger">&times;</div>
        <div class="btn btn-primary">Download</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      modalImageDetails: {},
    };
  },
  methods: {
    hideModal() {
      this.visible = false;
    },
    async showModal(img) {
      await this.setModalDetails(img);
      this.visible = true;
    },
    setModalDetails(img) {
      this.modalImageDetails = img;
    },
    closeModal() {
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.main-modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  /* background-color: rgb(0, 0, 0); */
  background-color: rgba(0, 0, 0, 0.486);
  overflow: hidden;
}

.main-modal__content {
  background-color: #fefefe;
  margin: 15% auto;
  border: 1px solid #888;
  width: 80%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.modal-header {
  width: 100%;
}
.main-modal__body {
  width: 100%;
  height: 70%;
  overflow: hidden;
  align-items: center;
  display: flex;
  justify-content: center;
}

.main-modal__image img {
  width: 100%;
}
.main-modal__footer {
  width: 100%;
  background: #02b875;
  height: 5rem;
  color: white;
  display: flex;
  align-items: center;
}
</style>

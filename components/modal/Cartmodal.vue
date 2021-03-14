<template>
  <div class="modal is-active">
    <div class="modal-background" @mousedown="close"></div>
    <div class="modal-content w-full h-full m-5 px-10 py-6">
      <div class="modal-background bg-transparent" @mousedown="close"></div>
      <div
        class="box relative overflow-y-auto bg-white wmin-900 m-0-auto h-full px-10 aside"
      >
        <button
          class="modal-close z-20 is-large logo-color absolute top-0 right-0 mt-2 mr-2"
          aria-label="close"
          @click="close"
        ></button>
        <div class="flex bg-white w-full h-fit space-x-8 relative -mt-2">
          <Cartprev />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inside: false,
      zoom: false,
      active: 0,
    }
  },
  computed: {},
  mounted() {},
  methods: {
    close() {
      this.$store.commit('SET_CARTMODAL', false)
      document.body.style.overflow = 'visible'
    },
  },
}
</script>
<style scoped>
.zoomimg {
  transition: transform 0.25s ease;
  cursor: zoom-in;
}
.haszoomed {
  transform: scale(2) !important;
  cursor: zoom-out !important;
}
.slide {
  display: block !important;
  animation: 0.3s appearZ;
}
.minimage:hover {
  border-color: #006280;
}
.border-bluee {
  border-color: #006280;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: const(--tw-ring-offset-shadow, 0 0 #0000),
    const(--tw-ring-shadow, 0 0 #0000), const(--tw-shadow);
}
.minimageborder:hover {
  border-color: #006280;
}
</style>

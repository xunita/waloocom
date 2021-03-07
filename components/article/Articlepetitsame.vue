<template>
  <a class="clickable article h-fit pb-2 w180 relative hover:shadow-md">
    <figure class="image is-240x200sse relative">
      <img class="h-full w-full" src="/b.jpg" alt="Placeholder image" />
    </figure>
  </a>
</template>

<script>
export default {}
</script>

<style scoped>
.article:hover .fa-heart {
  color: white !important;
}
.article:hover .preview {
  animation: 0.1s appearZ;
  display: block;
}
.article:hover .cartadd {
  animation: 0.1s appearZ;
  visibility: visible;
}
.article:hover .starss {
  color: #ffa807;
}
.bg-black-trs:hover {
  animation: 0.1s appearZ;
  background-color: #004e66 !important;
}
.prev-d:hover .bg-black-trs {
  animation: 0.1s appearZ;
  background-color: #004e66 !important;
}
</style>

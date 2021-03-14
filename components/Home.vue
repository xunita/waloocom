<template>
  <div
    class="w-full flex flex-col space-y-4 mt-3"
    :class="{ 'px-0': size > 1500, 'px-8': size <= 1500 }"
  >
    <div class="h449 w-full flex align-center">
      <div class="h-full relative"><Welcomemenu /></div>
      <div class="w-full h-full relative flex -ml-1">
        <div class="w-full pl-4 h-full relative"><Bigads /></div>
        <Listing v-show="listing" :departement="categ" :size="size" />
      </div>
    </div>
    <div class="w-full"><Squaresix /></div>
    <!-- <Articlebig /> -->
    <Carduct titles="Today's Deals" />
    <div class="w-full"><Largeband /></div>
    <Carduct titles="Featured" />
    <div class="w-full"><Square /></div>
    <Carduct titles="Best Deals" />
    <div class="w-full"><Twomix /></div>
    <Carduct titles="Most popular" />
    <div class="w-full"><Two /></div>
    <Carduct titles="Top Trending" />
    <div class="w-full"><Twoband /></div>
    <Carduct titles="Waloo Recommendations" /> <Allcateg />
    <Carduct titles="New Selected" /> <Marketplace />
    <Carduct titles="Recently Viewed" />
    <div><Walootour /></div>
    <div><Waloofo /></div>
  </div>
</template>
<script>
export default {
  computed: {
    categ() {
      return this.$store.state.allcateg[this.$store.state.categdex]
    },
    listing() {
      return this.$store.state.listing === true
    },
    size() {
      return this.$store.state.size
    },
  },
}
</script>
<style scoped></style>

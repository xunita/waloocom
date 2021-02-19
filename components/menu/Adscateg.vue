<template>
  <div class="h-full bg-white rounded">
    <Bestof v-show="pair" />
    <Topcateg v-show="!pair" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      what: 'best',
      calcul: Math.abs(Math.round(Math.random() * 300)) % 2,
    }
  },
  computed: {
    pair() {
      return this.calcul === 0
    },
    best() {
      return this.what === 'best'
    },
  },
}
</script>

<style scoped></style>

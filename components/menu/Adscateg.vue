<template>
  <div class="h-full bg-white">
    <Bestof v-show="multiple === 3" />
    <Topcateg v-show="multiple === 2" />
    <Todaydeals v-show="multiple === 5" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      what: 'best',
      calcul: Math.abs(Math.round(Math.random() * 500)),
    }
  },
  computed: {
    multiple() {
      if (this.calcul % 2 === 0) return 2
      else if (this.calcul % 3 === 0) return 3
      else return 5
    },
    best() {
      return this.what === 'best'
    },
  },
}
</script>

<style scoped></style>

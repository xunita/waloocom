<template>
  <div class="list w-full flex space-y-2">
    <a class="clickable py-1 border-b">
      <h4 class="font-semibold color-004e66 size-13">
        {{ list.computer.name }}
      </h4>
    </a>
    <div class="flex flex-wrap pt-1">
      <div v-for="i in 3" :key="i" class="column is-half">
        <a class="clickable block w-fit">
          <h4 class="font-semibold w-fit color-004e66 size-13">Desktop</h4>
        </a>
        <div class="py-15 flex flex-col space-y-1">
          <a
            v-for="(item, j) in list.computer.content.desktop"
            :key="j"
            class="clickable oneline w-fit hover-004e66 mr-4"
          >
            <h4 class="size-13 logo-color makeme-004e66">
              {{ item }}
            </h4>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 99999,
    },
  },
  computed: {
    list() {
      return this.$store.state.computer
    },
  },
}
</script>

<style scoped></style>

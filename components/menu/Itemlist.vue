<template>
  <div class="w-full">
    <div v-if="list === undefined" class="size-14 font-medium">Loading...</div>
    <div v-else class="flex flex-wrap w-full">
      <div
        v-for="(item, i) in list.content.list"
        :key="i"
        class="column is-half"
      >
        <a class="clickable block w-full text-center" :href="item.link">
          <img class="h-12 is-all" :src="item.image" alt="Placeholder image" />
          <h4 class="font-semibold w-fit color-004e66 size-135 pt-1 pb-1">
            {{ item.name }}
          </h4>
        </a>
        <div class="flex flex-col w-full">
          <a
            v-for="(content, j) in item.content"
            :key="j"
            :href="$linker.format(content)"
            class="clickable oneline w-fit hover-004e66 py-01"
          >
            <h4 class="size-125 logo-color makeme-004e66">
              {{ content }}
            </h4>
          </a>
        </div>
      </div>

      <div class="column is-half">
        <a class="clickable block w-full" :href="list.link">
          <h4
            class="font-semibold block wordbreaking color-004e66 size-135 pt-1 pb-1 border-b"
          >
            Discover all the {{ list.name }} products
          </h4>
        </a>
        <span class="block w-full text-center"
          ><h4 class="font-semibold w-fit logo-color size-135 pt-1 pb-1">
            {{ list.name }} top brand
          </h4>
        </span>
        <div class="flex flex-col w-full">
          <a
            v-for="(content, j) in list.topbrand"
            :key="j"
            :href="$linker.format(content)"
            class="clickable oneline w-fit hover-004e66 py-01"
          >
            <h4
              class="size-125 logo-color makeme-004e66 block oneline wordbreaking"
            >
              {{ content }}
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
    list: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    size() {
      return this.$store.state.size
    },
  },
}
</script>

<style scoped></style>

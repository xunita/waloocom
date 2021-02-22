<template>
  <div class="d-spec m-0-auto">
    <div class="flex flex-wrap h-72">
      <div v-for="i in 10" :key="i" class="w-48 column is-one-fifth">
        <a class="clickable"
          ><div
            class="h-32 m-0-auto"
            :class="{
              'w-48': size > 1211,
            }"
          >
            <img
              class="h-32"
              :class="{
                'w-48': size > 1211,
              }"
              src="/t.jpg"
              alt="Placeholder image"
            />
            <span
              class="size-13 font-semibold relative top-03x block w-fit m-0-auto"
              >{{ name }}
            </span>
          </div></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Marketplace',
    },
    size: {
      type: Number,
      default: 99999,
    },
  },
}
</script>

<style scoped>
.h-72 {
  height: 24rem;
}
</style>

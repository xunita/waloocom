<template>
  <div>
    <div
      v-click-outside="hide"
      class="dropdown"
      :class="{ 'is-active': focused }"
    >
      <div class="dropdown-trigger">
        <client-only>
          <div
            aria-haspopup="true"
            aria-controls="dropdown-menu"
            class="flex align-center clickable select-none pl-2 pr-1 border-r h-10 bg-e6e6e6"
            @click="
              {
                focused = !focused
              }
            "
          >
            <span class="size-125 font-semibold logo-color block w-fit">{{
              item
            }}</span>
            <svg
              class="w-4 h-4 color-363636 relative top-01x"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </client-only>
      </div>
      <div id="dropdown-menu" class="dropdown-menu walele" role="menu">
        <div class="dropdown-content bg-white border">
          <a
            v-for="(element, i) in category"
            :key="i"
            to="/home"
            class="dropdown-item clickable flex align-center space-x-1"
            @click="setItem(element)"
          >
            <span
              class="size-13"
              :class="{ 'font-semibold': item === element }"
              >{{ element }}</span
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focused: false,
      item: 'All categories',
      category: [
        'All categories',
        'Computers & Electronics',
        'Phones & Accessories',
        'Fashions & Jewellery',
        'Beauty & Health',
        'Gaming',
        'Baby, Kids & Toys',
        'Office & Books',
        'Sports',
        'Food & Grocery',
        'Home, Garden & Kitchen',
        'Automotive',
        'DIY',
      ],
    }
  },
  methods: {
    hide() {
      this.focused = false
    },
    setItem(value) {
      this.item = value
      this.focused = false
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  left: 0 !important;
  top: 2.2rem !important;
}
.dodo {
  right: 0.2rem !important;
}
@keyframes appear {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>

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
            class="flex align-center space-x-0 button is-lights clickable select-none"
            @click="
              {
                focused = !focused
              }
            "
          >
            <svg
              class="w-5 h-5 color-363636f mr-05"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              ></path>
            </svg>

            <p class="flex align-center space-x-0">
              <span class="size-125 font-semibold color-363636f block w-fit"
                >{{ spoken }} - {{ currency }}</span
              >
              <svg
                class="w-4 h-4 color-363636f relative top-01x"
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
            </p>
          </div>
        </client-only>
      </div>
      <div id="dropdown-menu" class="dropdown-menu walele" role="menu">
        <div class="dropdown-content bg-white border">
          <a class="dropdown-items select-none">
            <span class="size-12 pb-1 block color-363636ff"
              >Current language</span
            >
            <span class="size-125 block font-semibold">{{ spoken }}</span>
          </a>
          <hr class="dropdown-divider" />
          <a class="dropdown-items select-none">
            <span class="size-12 pb-1 block color-363636ff"
              >Choose another language</span
            ></a
          >
          <a
            v-for="(element, i) in language"
            :key="i"
            class="dropdown-item clickable flex align-center space-x-1"
            @click="setLang(element)"
          >
            <span
              class="size-125"
              :class="{ 'font-semibold': spoken === element }"
              >{{ element }}</span
            >
          </a>
          <hr class="dropdown-divider" />
          <a class="dropdown-items w-fit select-none pb-2">
            <span class="size-12 font-semibold block color-363636ff"
              >Currency setting</span
            ></a
          >
          <div class="w-full"><Currency @money="money" /></div>
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
      currency: 'USD',
      ctry: 'Ivory coast',
      spoken: 'English',
      lan: ['English', 'Français', 'Español', 'Português'],
    }
  },
  computed: {
    language() {
      return this.lan
    },
  },
  methods: {
    money(value) {
      this.currency = value
    },
    delctry(value) {
      this.ctry = value
    },
    hide() {
      this.focused = false
    },
    setLang(value) {
      this.spoken = value
      this.focused = false
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  top: 2rem !important;
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

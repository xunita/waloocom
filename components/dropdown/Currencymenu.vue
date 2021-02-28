<template>
  <div>
    <div v-click-outside="hide" :class="{ 'is-active': focused }">
      <div class="dropdown-trigger">
        <client-only>
          <div
            class="w-fit select-none w-full pb-1"
            @click="
              {
                focused = !focused
              }
            "
          >
            <a class="dropdown-item clickable flex align-center">
              <svg
                class="w-5 h-5 logo-color mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>

              <span class="size-125  font-semibold block w-fit">{{
                spoken
              }}</span>
              <svg
                class="w-4 h-4 logo-color transform rotate-90 relative top-01x"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </client-only>
      </div>
      <div v-show="focused" class="appearyh">
        <a class="dropdown-items select-none">
          <span class="size-12 pb-1 block logo-color">Current currency</span>
          <span class="size-125 block font-semibold">{{ spoken }}</span>
        </a>
        <hr class="dropdown-divider" />
        <a class="dropdown-items select-none">
          <span class="size-12 pb-1 block logo-color"
            >Choose another currency</span
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      focused: false,
      spoken: 'US Dollar',
      lan: [
        'Rand ZAR',
        'Naira NGN',
        'Franc CFA',
        'Kwanza AOA',
        'Cedi GHS',
        'Shilling KES',
        'Shilling UGX',
        'Rwanda franc RWF',
        'Pula BWP',
        'Euro',
        'US Dollar',
      ],
    }
  },
  computed: {
    language() {
      return this.lan
    },
  },
  mounted() {
    this.sendcur()
  },
  methods: {
    sendcur() {
      const cur =
        this.spoken === 'Rand ZAR'
          ? 'ZAR'
          : this.spoken === 'Naira NGN'
          ? 'NGN'
          : this.spoken === 'Franc CFA'
          ? 'FCFA'
          : this.spoken === 'Kwanza AOA'
          ? 'AOA'
          : this.spoken === 'Cedi GHS'
          ? 'GHS'
          : this.spoken === 'Shilling KES'
          ? 'KES'
          : this.spoken === 'Shilling UGX'
          ? 'UGX'
          : this.spoken === 'Rwanda franc RWF'
          ? 'RWF'
          : this.spoken === 'Pula BWP'
          ? 'BWP'
          : this.spoken === 'Euro'
          ? 'Euro'
          : 'USD'
      this.$emit('money', cur)
    },
    hide() {
      this.focused = false
    },
    setLang(value) {
      this.spoken = value
      this.focused = false
      this.sendcur()
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
    transform: translateX(-10px);
  }
}
</style>

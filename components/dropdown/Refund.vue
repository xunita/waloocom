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
            class="flex align-center clickable button is-lights rounded w-fit select-none space-x-0"
            @click="
              {
                focused = !focused
              }
            "
          >
            <i class="far fa-question-circle color-363636f size-19"></i>
            <span class="size-125 pl-1 color-363636f font-semibold block w-fit"
              >Help</span
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
          </div>
        </client-only>
      </div>
      <div
        v-show="focused"
        id="dropdown-menu"
        class="dropdown-menu walele"
        role="menu"
      >
        <div class="dropdown-content bg-white border">
          <a
            v-for="(element, i) in language"
            :key="i"
            class="dropdown-item clickable flex align-center space-x-1"
          >
            <span class="size-125">{{ element }}</span>
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
      lan: [
        'Need assistance ?',
        'FAQs',
        'Returns and refunds',
        'Cancel my order',
        'How can I pay ?',
        'Contact us',
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
        this.ctry === 'Rand ZAR'
          ? 'ZAR'
          : this.ctry === 'Naira NGN'
          ? 'NGN'
          : this.ctry === 'Franc CFA'
          ? 'FCFA'
          : this.ctry === 'Kwanza AOA'
          ? 'AOA'
          : this.ctry === 'Cedi GHS'
          ? 'GHS'
          : this.ctry === 'Shilling KES'
          ? 'KES'
          : this.ctry === 'Shilling UGX'
          ? 'UGX'
          : this.ctry === 'Rwanda franc RWF'
          ? 'RWF'
          : this.ctry === 'Pula BWP'
          ? 'BWP'
          : this.ctry === 'Euro'
          ? 'Euro'
          : 'USD'
      this.$emit('money', cur)
    },
    hide() {
      this.focused = false
    },
    setLang(value) {
      this.ctry = value
      this.focused = false
      this.sendcur()
    },
  },
}
</script>
<style scoped>
.walele {
  animation: appear 0.2s;
  top: 2.05rem !important;
  /*right: -12.1rem !important; */
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

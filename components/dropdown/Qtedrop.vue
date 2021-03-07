<template>
  <div>
    <client-only>
      <span class="size-13 block pb-1">{{ title }}</span>
      <div class="flex align-center">
        <button
          class="border p-1 rounded bg-white no-outlines"
          @click="
            {
              qty = qty - 1
            }
          "
        >
          <svg
            class="w-4 h-4 logo-color"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20 12H4"
            ></path>
          </svg>
        </button>
        <input
          v-model="qty"
          min="0"
          type="text"
          class="no-outlines text-center w-10 size-13 h-full"
        />
        <button
          class="border p-1 rounded bg-white no-outlines"
          @click="
            {
              qty = qty + 1
            }
          "
        >
          <svg
            class="w-4 h-4 logo-color"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </button>
      </div>
    </client-only>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'Quantity',
    },
    qte: {
      type: Number,
      default: 1,
    },
    content: {
      type: Array,
      default: () => ['Red', 'Black', 'Orange', 'Green', 'Blue', 'Indigo'],
    },
  },
  data() {
    return {
      qty: 1,
      lan: [
        'Nigeria',
        'Ivory coast',
        'Tunisia',
        'Cameroon',
        'Kenya',
        'Uganda',
        'South Africa',
        'Ghana',
        'Morocco',
        'Rwanda',
      ],
    }
  },
  computed: {
    language() {
      return this.lan
    },
  },
  watch: {
    // whenever toremove changes, this function will run
    qty(newcateg, oldcateg) {
      if (!newcateg.toString().includes(' ')) {
        if (!isNaN(newcateg)) {
          if (newcateg <= 0) {
            this.qty = 1
          } else this.qty = newcateg
        } else {
          this.qty = oldcateg
        }
      } else {
        this.qty = oldcateg
      }
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
  right: 0 !important;
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

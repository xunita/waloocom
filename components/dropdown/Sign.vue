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
            class="button is-lights py-2 px-3 flex align-center space-x-1 clickable select-none border-r h-10"
            @click="
              {
                focused = !focused
              }
            "
          >
            <i class="far fa-user color-363636f size-19"></i>
            <div class="flex align-center">
              <span class="size-125 font-semibold block w-fit color-363636f"
                >Sign in</span
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
          </div>
        </client-only>
      </div>
      <div id="dropdown-menu" class="dropdown-menu w180s walele" role="menu">
        <div class="dropdown-content bg-white border">
          <a class="block w-fit m-0-auto"
            ><button class="btn-004e66 rounded px-20 py-1 text-white size-14">
              Sign in
            </button></a
          >
          <span class="size-12 pt-2 w-fit m-0-auto dropdown-item color-363636f"
            >New to Waloo ?
            <a class="clickable color-004e66 underline-hover font-semibold"
              >Create an account</a
            ></span
          >
          <hr class="dropdown-divider" />

          <span class="size-135 font-semibold dropdown-item">My account</span>
          <div>
            <a class="dropdown-item w-fit hover-004e66 clickable size-125"
              >Profile</a
            >
            <a class="dropdown-item w-fit hover-004e66 clickable size-125"
              >Notifications</a
            >
            <a class="dropdown-item w-fit hover-004e66 clickable size-125"
              >Orders</a
            ><a class="dropdown-item w-fit hover-004e66 clickable size-125"
              >Favorites list</a
            >
          </div>
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
        'Electronics',
        'Computers',
        'Beauty & Health',
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
  right: 0 !important;
  top: 2.22rem !important;
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

<template>
  <div class="d-question">
    <div class="flex align-center space-x-2">
      <figure class="image is-32x32 rounded-full">
        <img class="rounded-full" src="/user.png" />
      </figure>
      <span class="font-semibold">John Mackenzie</span>
      <div class="flex align-center">
        <span>|</span>
        <span class="font-semibold ml-2 text-green-700 size-13"
          >Purchase Verified
        </span>
        <svg
          class="w-4 h-4 text-green-700 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
    <div class="flex align-center space-x-1 pt-1">
      <span class="font-semibold text-green-700 size-13">Question </span>
      <span class="color-363636">• Asked on</span>
      <span class="size-13 color-363636">September 14, 2016</span>
    </div>
    <div class="pt-1">
      <span class="font-semibold block">Nice One</span>
    </div>
    <div class="pt-1">
      <p class="leading-5 size-14">Is this suitable for a wedding ?</p>
    </div>
    <div class="pt-1">
      <div class="flex align-center space-x-2 mb-2">
        <svg
          v-show="!subcoming"
          class="w-4 h-4 logo-color transform -rotate-180"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <a
          v-show="!subcoming"
          class="clickable underline-hover logo-color size-13 font-semibold"
          @click="
            {
              subcom = !subcom
            }
          "
        >
          Answers (45)</a
        >
        <a
          v-show="subcoming"
          class="clickable underline-hover logo-color size-12 font-semibold"
          @click="
            {
              subcom = !subcom
            }
          "
        >
          Hide Answers</a
        >
        <button
          class="logo-color parent_hover_under rounded no-outlines border-0 border-tr font-medium size-14 flex align-center py-08"
          @click="
            {
              rep = !rep
            }
          "
        >
          <svg
            class="w-4 h-4 logo-color ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="block logo-color ml-1 size-12"> Reply</span>
        </button>
        <button
          class="logo-color pl-1 parent_hover_under rounded no-outlines border-0 border-tr font-medium size-14 flex align-center py-08"
        >
          <span class="block logo-color ml-1 size-12">Helpful (12)</span>
        </button>
        <span class="color-363636">•</span>
        <a class="clickable logo-color underline-hover size-13 font-semibold">
          Report</a
        >
      </div>
      <div
        v-show="replying"
        class="appearyh flex space-x-2 pl-5 py-2 -mt-2 mb-4 border-b"
      >
        <div class="relative trtr h-fit lg:w-4/5 md:w-4/5 sm:w-full">
          <span class="block size-125 logo-color pb-1"
            >Answering to
            <a class="size-125 logo-color font-semibold"
              >John Mackenzie</a
            ></span
          >
          <div class="border w360" @click="focus">
            <textarea
              id="coment2"
              wrap="hard"
              class="w360 aside noscroll toyo size-15 px-2 py-01 text-gray-700 focus:outline-none mt-1"
              placeholder="Add an answer"
              rows="2"
            ></textarea>
          </div>
          <div
            class="w-full relative bottom-0 p-1 flex align-center justify-between"
          >
            <div>
              <button
                class="color-white btn-004e66 rounded no-outlines font-medium size-12 px-4 py-1"
              >
                Answer
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-show="subcoming" class="pl-5 appearZ pb-2">
        <div class="flex align-center space-x-2">
          <figure class="image is-32x32 rounded-full">
            <img class="rounded-full" src="/user.png" />
          </figure>
          <span class="font-semibold">John Mackenzie</span>
          <div class="flex align-center">
            <span>|</span>
            <span class="font-semibold ml-2 text-green-700 size-13"
              >Purchase Verified
            </span>
            <svg
              class="w-4 h-4 text-green-700 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div>
          <span class="color-363636">Answered on</span>
          <span class="size-13 color-363636">September 14, 2016</span>
          <br />
          <p class="leading-5 inline-block size-14">
            <span class="font-semibold logo-color size-13">Answer: </span>
            Yes it is, especially near the beach Yes it is, especially near the
            beach Yes it is, especially near the beach Yes it is, especially
            near the beach Yes it is, especially near the beach Yes it is,
            especially near the beach
          </p>
        </div>
        <div class="flex align-center space-x-2">
          <span
            ><button
              class="bg-transparent parent_hover_under no-outlines rounded flex align-center space-x-1 py-1 text-white"
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
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                ></path>
              </svg>
              <!-- <svg
                    class="w-4 h-4 logo-color"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"
                    ></path>
                  </svg> -->
              <span class="size-13 logo-color underline-hover"> Like (45)</span>
            </button></span
          >
          <span class="color-363636">•</span>
          <a class="clickable logo-color underline-hover size-13 font-semibold">
            Report</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fill5all: false,
      fill4all: false,
      fill3all: false,
      fill2all: false,
      fill1all: false,
      rep: false,
      subcom: false,
      review: false,
    }
  },
  computed: {
    replying() {
      return this.rep === true
    },
    loading() {
      return this.$store.state.pageload === true
    },
    subcoming() {
      return this.subcom === true
    },
  },
  mounted() {
    this.setwidth()
  },
  methods: {
    focus() {},
    setwidth() {
      let el = document.getElementById('spanfive')
      el.style.width = '58%'
      el = document.getElementById('spanfour')
      el.style.width = '17%'
      el = document.getElementById('spanthree')
      el.style.width = '23%'
      el = document.getElementById('spantwo')
      el.style.width = '14%'
      el = document.getElementById('spanone')
      el.style.width = '2%'
    },
  },
}
</script>

<style scoped></style>

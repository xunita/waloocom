<template>
  <div class="d-review">
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
      <span class="font-semibold text-green-700 size-13">Review </span>
      <span class="color-363636">• Reviewed on</span>
      <span class="size-13 color-363636">September 14, 2016</span>
    </div>
    <div>
      <span class="size-12">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star color-6d6d6d"></span>
        <span class="fa fa-star color-6d6d6d"></span>
      </span>
    </div>
    <div>
      <span class="font-semibold block">Nice One</span>
    </div>
    <div class="pt-1">
      <p class="leading-5">
        They're really good! Recommended for sure! They're really good!
        Recommended for sure! They're really good! Recommended for sure!
      </p>
    </div>
    <div class="pt-2 flex align-center space-x-2">
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
          <span> <span class="size-13 logo-color"> Like (45)</span></span>
        </button></span
      >
      <span class="color-363636">•</span>
      <a class="clickable logo-color underline-hover size-13 font-semibold">
        Report</a
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>

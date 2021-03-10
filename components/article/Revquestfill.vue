<template>
  <div>
    <div class="w-55 the-rate">
      <div class="leave-rate pb-5 border-b">
        <span class="block pb-1"
          >Share your thoughts with the others customers</span
        >
        <span class="block font-semibold">Give a rate</span>
        <div class="rate -mt-2 py-01">
          <input
            id="star5"
            style="visibility: hidden"
            type="radio"
            name="rate"
            value="5"
          />
          <label for="star5" title="5 stars">5 stars</label>
          <input
            id="star4"
            style="visibility: hidden"
            type="radio"
            name="rate"
            value="4"
          />
          <label for="star4" title="4 stars">4 stars</label>
          <input
            id="star3"
            style="visibility: hidden"
            type="radio"
            name="rate"
            value="3"
          />
          <label for="star3" title="3 stars">3 stars</label>
          <input
            id="star2"
            style="visibility: hidden"
            type="radio"
            name="rate"
            value="2"
          />
          <label for="star2" title="2 stars">2 stars</label>
          <input
            id="star1"
            style="visibility: hidden"
            type="radio"
            name="rate"
            value="1"
          />
          <label for="star1" title="1 star">1 star</label>
        </div>
        <div class="clear-both w512max pt-3">
          <label for="tity" class="size-13 pb-1 font-semibold">Title</label>
          <br />
          <input
            type="text"
            placeholder="Comment's title"
            class="border w360 py-1 h-7 size-14 rounded no-outlines outline-none px-2"
          />
          <div class="relative mt-3 trtr h-fit lg:w-4/5 md:w-4/5 sm:w-full">
            <span class="block pb-1 size-13 font-semibold"
              >Commenting this product
            </span>
            <div class="border rounded w360" @click="focus">
              <textarea
                id="coment2x"
                wrap="hard"
                class="w360 aside noscroll toyo size-15 px-2 py-01 text-gray-700 focus:outline-none mt-1"
                placeholder="Add a comment"
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
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="leave-rate py-5 border-b">
        <span class="block"
          >Want to know something ? Ask a question about this product and get
          answered</span
        >
        <div class="clear-both w512max pt-1">
          <label for="tityt" class="size-13 pb-1 font-semibold">Title</label>
          <br />
          <input
            type="text"
            placeholder="Question's title"
            class="border w360 py-1 h-7 size-14 rounded no-outlines outline-none px-2"
          />
          <div class="relative mt-3 trtr h-fit lg:w-4/5 md:w-4/5 sm:w-full">
            <span class="block pb-1 size-13 font-semibold"
              >Asking about this product
            </span>
            <div class="border w360" @click="focus">
              <textarea
                id="coment2x"
                wrap="hard"
                class="w360 aside noscroll toyo size-15 px-2 py-01 text-gray-700 focus:outline-none mt-1"
                placeholder="Add your question"
                rows="2"
              ></textarea>
            </div>
            <div
              class="w-full relative bottom-0 p-1 flex align-center justify-between"
            >
              <div>
                <button
                  class="color-white btn-004e66 rounded no-outlines font-medium size-12 px-6 py-1"
                >
                  Ask
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>

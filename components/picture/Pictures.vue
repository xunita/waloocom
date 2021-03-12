<template>
  <div class="flex space-x-2 relative">
    <div class="flex flex-col space-y-2">
      <a
        v-for="(i, j) in images"
        :key="j"
        class="clickable w-fit h-fit hover:shadow"
        :class="{ shadow: now === j }"
        @mouseover="
          {
            active = j
          }
        "
      >
        <figure
          class="image is-40x40 border rounded minimage"
          :class="{ 'border-bluee': now === j }"
        >
          <img
            class="rounded w-full"
            :src="images[j]"
            alt="Placeholder image"
          />
        </figure>
      </a>
    </div>
    <div>
      <div class="clickable zoomin relative image is-image">
        <figure
          v-for="(img, ij) in images"
          id="currentimage"
          :key="ij"
          class="w-fit h-fit h-centers image is-image hiddenmox"
          :class="{
            slide: active === ij,
          }"
        >
          <div
            v-show="imghovering"
            :id="'followcursor' + ij"
            class="bg-black-tree w-40 h-24 border absolute z-10"
          ></div>
          <div
            class="w-fit h-fit h-centers"
            @mousemove="imageZoom('normalimg' + ij, 'hoverimg', ij, $event)"
            @mouseleave="hidediv"
            @click="open"
          >
            <img
              :id="'normalimg' + ij"
              class="imagemax"
              :src="currentsrc"
              alt="Placeholder image"
            />
          </div>
        </figure>
      </div>
      <div
        class="w-fit h-fit flex align-center space-x-4 m-0-auto relative pt-4"
      >
        <span class="size-14 font-semibold">Share</span>
        <div class="flex align-center space-x-2">
          <p class="flex align-center space-x-3">
            <i class="fab fa-twitter twi size-20 clickable"></i>
            <i class="fab fa-facebook fbcolor size-20 clickable"></i>
            <i class="fab fa-pinterest pinter size-20 clickable"></i>
            <i class="fas fa-at size-20 mail clickable"></i>
          </p>
        </div>
      </div>
    </div>
    <div
      v-show="imghovering"
      class="shadow-md border-none absolute w480 z-20 h384 bg-white right-0"
    >
      <img id="hoverimg" class="w-full h-full border-none" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      hovered: false,
      images: [
        '/ads/gaming.jpg',
        '/a.jpg',
        '/b.jpg',
        '/t.jpg',
        '/4.jpg',
        '/ads/gaming.jpg',
        '/a.jpg',
      ],
    }
  },
  computed: {
    now() {
      return this.active
    },
    loading() {
      return this.$store.state.pageload === true
    },
    imghovering() {
      return this.hovered === true
    },
    currentsrc() {
      return this.images[this.now]
    },
  },
  watch: {
    loading(newval, oldval) {
      if (newval === false) {
        this.hidecontent()
      }
    },
  },
  methods: {
    imageZoom(imgID, resultID, ij, e) {
      if (!this.loading) {
        this.hovered = true
        const img = document.getElementById(imgID)
        const result = document.getElementById(resultID)
        /* create lens: */
        const lens = document.getElementById('followcursor' + ij)
        // lens.setAttribute('class', 'img-zoom-lens')
        /* insert lens: */
        img.parentElement.insertBefore(lens, img)
        /* calculate the ratio between result DIV and lens: */
        const cx = result.offsetWidth / lens.offsetWidth
        const cy = result.offsetHeight / lens.offsetHeight
        /* set background properties for the result DIV: */
        result.style.backgroundImage = "url('" + img.src + "')"
        result.style.backgroundSize =
          img.width * cx + 'px ' + img.height * cy + 'px'
        /* execute a function when someone moves the cursor over the image, or the lens: */
        // lens.addEventListener('mousemove', moveLens)
        // img.addEventListener('mousemove', moveLens)
        // function moveLens(e) {
        let x, y
        /* prevent any other actions that may occur when moving over the image: */
        e.preventDefault()
        /* get the cursor's x and y positions: */
        const pos = getCursorPos(e)
        /* calculate the position of the lens: */
        x = pos.x - lens.offsetWidth / 2
        y = pos.y - lens.offsetHeight / 2
        /* prevent the lens from being positioned outside the image: */
        if (x > img.width - lens.offsetWidth) {
          x = img.width - lens.offsetWidth
        }
        if (x < 0) {
          x = 0
        }
        if (y > img.height - lens.offsetHeight) {
          y = img.height - lens.offsetHeight
        }
        if (y < 0) {
          y = 0
        }
        /* set the position of the lens: */
        lens.style.left = x + 'px'
        lens.style.top = y + 'px'
        /* display what the lens "sees": */
        result.style.backgroundPosition = '-' + x * cx + 'px -' + y * cy + 'px'
        // }
        function getCursorPos(e) {
          let x = 0
          let y = 0
          e = e || window.event
          /* get the x and y positions of the image: */
          const a = img.getBoundingClientRect()
          /* calculate the cursor's x and y coordinates, relative to the image: */
          x = e.pageX - a.left
          y = e.pageY - a.top
          /* consider any page scrolling: */
          x = x - window.pageXOffset
          y = y - window.pageYOffset
          return { x, y }
        }
      }
    },
    hidediv() {
      this.hovered = false
    },
    open() {
      this.$store.commit('SHOW_IMGMODAL', true)
      this.$store.commit('SET_IMGMODAL', {
        current: this.now,
        imgs: this.images,
      })
      document.body.style.overflow = 'hidden'
    },
    hidecontent() {
      const el = document.querySelectorAll('[id ^= "pag"]')
      Array.prototype.forEach.call(el, callback)

      function callback(element, iterator) {
        const myel = document.getElementById(element.id)
        myel.style.display = 'block'
        if (myel.clientWidth === 0) myel.style.display = 'none'
      }
    },
  },
}
</script>

<style scoped>
.slide {
  display: block !important;
  animation: 0.3s appearZ;
}
.minimage:hover {
  border-color: #006280;
}
.border-bluee {
  border-color: #006280;
  --tw-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  box-shadow: const(--tw-ring-offset-shadow, 0 0 #0000),
    const(--tw-ring-shadow, 0 0 #0000), const(--tw-shadow);
}
.minimageborder:hover {
  border-color: #006280;
}
</style>

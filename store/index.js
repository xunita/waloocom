export const state = () => ({
  size: 99999,
  scroll: 0,
  categ: [
    'Home',
    'Computers & Electronics',
    'Phones',
    'Fashions',
    'Beauty & Health',
    'Sports',
    'Automotive',
  ],
  modalmenu: false,
  listing: false,
  listingbig: false,
  afterlist: false,

  computer: {
    image: '/cover/compelect.jpg',
    link: 'computers-electronics',
    one: {
      link: 'computers',
      image: '/cover/compelect.jpg',
      name: 'Computers',
      topbrand: ['Asus', 'HP', 'MSI', 'Apple', 'Dell'], // to update
      content: {
        list: {
          lap: {
            link: 'laptop',
            image: '/cover/compelect.jpg',
            name: 'Laptops',
            content: [
              'Laptops',
              'Notebooks',
              'Ultrabooks',
              'Macbooks',
              'All-In-Ones',
            ],
          },
          desk: {
            link: 'desktop',
            image: '/cover/compelect.jpg',
            name: 'Desktops',
            content: [
              'Computer Desktop',
              'Monitors',
              'Computer Components',
              'All-In-Ones',
            ],
          },
          accessories: {
            image: '/cover/compelect.jpg',
            link: 'pc-accessories',
            name: 'Computers Accessories',
            content: [
              'Computer Peripherals',
              'Bags, Cases, Cover & Sleeves',
              'Storages Devices',
              'Printers & Scanners',
              'Other Accessories',
            ],
          },
        },
      },
    },
    two: {
      image: '/cover/compelect.jpg',
      link: 'electronics',
      name: 'Electronics',
      topbrand: ['Samsung', 'Sony', 'Nikon', 'Philips'], // to update
      content: {
        list: {
          tv: {
            image: '/cover/compelect.jpg',
            link: 'tv',
            name: 'TVs',
            content: [
              'Smart TVs',
              '4K TVs',
              'LED & OLED TVs',
              'Curved TVs',
              '32"-55" TVs',
            ],
          },
          audiocamera: {
            image: '/cover/compelect.jpg',
            link: 'audio-camera',
            name: 'Audio & Camera',
            content: ['Loudspeaker & Headphones', 'Radio', 'Digital Cameras'],
          },
          accessories: {
            image: '/cover/compelect.jpg',
            link: 'electronics-accessories',
            name: 'Electronics Accessories',
            content: [
              'TVs Accessories',
              'Audio Accessories',
              'Camera Accessories',
              'DVDs',
            ],
          },
        },
      },
    },
  },
})
// export const getters = () => ({
//   winsize: (state) => {
//     return state.size
//   },
//   winscroll: (state) => {
//     return state.scroll
//   },
// })
export const mutations = {
  SET_MEN_MOD(state, value) {
    state.modalmenu = value
  },
  SET_LIST_MOD(state, value) {
    state.listing = value
  },
  SET_AFTERLIST_MOD(state, value) {
    state.afterlist = value
  },
  SET_LISTBIG_MOD(state, value) {
    state.listingbig = value
  },
  SET_RESIZE(state, value) {
    state.size = value
  },
  SET_SCROLL(state, value) {
    state.scroll = value
  },
}
export const actions = {}

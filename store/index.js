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
    computer: {
      name: 'Computers',
      content: {
        laptop: ['Notebooks', 'Notebooks', 'Ultrabooks', 'All-in-ones'],
        desktop: [
          'Computer desktop',
          'Monitors',
          'Computer components',
          'All-in-ones',
        ],
        accessories: [
          'Computer peripherals',
          'Bags, Cases, Cover & Sleeves',
          'Laptop & Desktop accessories',
          'Storages devices',
          'Printers & Scanners',
        ],
      },
    },
    electronic: {
      name: 'Electronics',
      content: {
        tv: {},
        household: {},
        accessories: {},
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

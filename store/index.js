export const state = () => ({
  size: 99999,
  scroll: 0,
  categdex: 0,
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
  allcateg: [
    {
      image: '/menu/computer.jpg',
      link: '/computers-electronics',
      name: 'Computers & Electronics',
      one: {
        link: '/computers-electronics/computers',
        image: '/cover/compelect.jpg',
        name: 'Computers',
        topbrand: ['Asus', 'HP', 'MSI', 'Apple', 'Dell'], // to update
        content: {
          list: {
            lap: {
              link: '/computers-electronics/computers/laptop',
              image: '/cover/laptop.jpg',
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
              link: '/computers-electronics/computers/desktop',
              image: '/cover/desktop.jpg',
              name: 'Desktops',
              content: [
                'Computer Desktop',
                'Monitors',
                'Computer Components',
                'All-In-Ones',
              ],
            },
            accessories: {
              image: '/cover/acc.jpg',
              link: '/computers-electronics/computers/pc-accessories',
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
        image: '/cover/electronic.jpg',
        link: '/computers-electronics/electronics',
        name: 'Electronics',
        topbrand: ['Samsung', 'Sony', 'Nikon', 'Philips'], // to update
        content: {
          list: {
            tv: {
              image: '/cover/tv.jpg',
              link: '/computers-electronics/electronics/tv',
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
              image: '/cover/audio.jpg',
              link: '/computers-electronics/electronics/audio-camera',
              name: 'Audio & Camera',
              content: ['Loudspeaker & Headphones', 'Radio', 'Digital Cameras'],
            },
            accessories: {
              image: '/cover/accelec.jpg',
              link:
                '/computers-electronics/electronics/electronics-accessories',
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
    {
      image: '/cover/phones.jpg',
      link: '/phones-and-accessories',
      name: 'Phones & Accesories',
      one: {
        link: '/phones-and-accessories/phones',
        image: '/cover/ph.jpg',
        name: 'Phones',
        topbrand: ['Samsung', 'Huawei', 'Xiaomi', 'Apple'], // to update
        content: {
          list: {
            lap: {
              link: '/phones-and-accessories/phones/mobiles-phones',
              image: '/cover/ph.jpg',
              name: 'Mobile phones',
              content: ['Smartphones', 'Tablets', 'Basic Phones'],
            },
            desk: {
              link: '/phones-and-accessories/phones/os',
              image: '/cover/os.jpg',
              name: 'Operating System',
              content: ['Android', 'IOS', 'Windows Phones', 'Others'],
            },
            accessories: {
              image: '/cover/phacc.jpg',
              link: '/phones-and-accessories/phones/phones-accessories',
              name: 'Phones Accessories',
              content: [
                'Wearable Accessories',
                'Chargers & Power Bank',
                'Screen protectors',
                'Earphones & Headsets',
                'Other Accessories',
                'Others',
              ],
            },
          },
        },
      },
    },
    {
      image: '/cover/fa.jpg',
      link: '/fashions-jewellery',
      one: {
        link: '/fashions-jewellery/fashions',
        image: '/cover/fas.jpg',
        name: 'Fashions',
        content: {
          list: {
            lap: {
              link: '/fashions-jewellery/fashions/mens',
              image: '/cover/men.jpg',
              name: "Men's fashions",
              content: ['Laptops', 'Notebooks', 'Ultrabooks', 'Macbooks'],
            },
            desk: {
              link: '/fashions-jewellery/fashions/womens',
              image: '/cover/wo.jpg',
              name: "Women's fashions",
              content: ['Laptops', 'Notebooks', 'Ultrabooks', 'Macbooks'],
            },
            accessories: {
              image: '/cover/mensh.jpg',
              link: '/fashions-jewellery/fashions/menshoes',
              name: "Men's shoes",
              content: [
                'TVs Accessories',
                'Audio Accessories',
                'Camera Accessories',
                'DVDs',
              ],
            },
            accessoriess: {
              image: '/cover/wosh.jpg',
              link: '/fashions-jewellery/fashions/womenshoes',
              name: "Women's shoes",
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
      two: {
        image: '/cover/compelect.jpg',
        link: '/fashions-jewellery/jewellery/',
        name: 'Jewellery',
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
    {
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
  ],
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
  SET_LISTBIG_CATEG(state, value) {
    state.categdex = value
  },
  SET_RESIZE(state, value) {
    state.size = value
  },
  SET_SCROLL(state, value) {
    state.scroll = value
  },
}
export const actions = {}

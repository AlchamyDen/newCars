import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [
      {
        id: 1,
        title: 'Audi Quattro Spyder Concept 1991',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 50,
        ratings: 3,
        reviews: 5,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
          img: '../assets/audi_quattro_spyder_concept_2.jpg'
      },
      {
        id: 2,
        title: 'Chrysler Viper RT',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 35,
        ratings: 5,
        reviews: 10,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
          img: '../assets/chrysler_viper_rt_10.jpg'
      },
      {
        id: 3,
        title: 'Opel Admiral',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 110,
        ratings: 2,
        reviews: 3,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
          img: '../assets/opel_admiral_9.jpg'
      },
      {
        id: 4,
        title: 'Infiniti QX80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 50,
        ratings: 1,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
          img: '../assets/infiniti_qx80_1.jpg'
      },
      {
        id: 5,
        title: 'Bugatti EB Veyron Concept',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 35,
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
          img: '../assets/bugatti_eb_18.4_veyron_concept_5_00c8009a098b0735.jpg'
      },
      {
        id: 6,
        title: 'Alfa Romeo TZ3 Stradale ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 110,
        ratings: 5,
        reviews: 1,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
          img: '../assets/alfa_romeo_tz3_stradale_46_01e9019d0bd208c6.jpg'
      },
      {
        id: 7,
        title: 'Range Rover Evoque',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 50,
        ratings: 5,
        reviews: 7,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
          img: '../assets/range_rover_evoque_nw8_1.jpg'
      },
      {
        id: 8,
        title: 'Dodge Westchester Suburban',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 35,
        ratings: 3,
        reviews: 0,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
          img: '../assets/dodge_westchester_suburban_by_u.s._body_forging_co._1.jpg'
      },
      {
        id: 9,
        title: 'Porsche 918 RSR Concept',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        price: 110,
        ratings: 4,
        reviews: 2,
        isAddedToCart: false,
        isAddedBtn: false,
        isFavourite: false,
        quantity: 1,
          img: '../assets/autowp.ru_porsche_918_rsr_concept_24.jpg'
      }
    ],
    userInfo: {
      isLoggedIn: false,
      isSignedUp: false,
      hasSearched: false,
      name: '',
      productTitleSearched: ''
    },
    systemInfo: {
      openLoginModal: false,
      openSignupModal: false,
      openCheckoutModal: false
    }
  },
  
  getters: {
    productsAdded: state => {
      return state.products.filter(el => {
        return el.isAddedToCart;
      });
    },
    productsAddedToFavourite: state => {
      return state.products.filter(el => {
        return el.isFavourite;
      });
    },
    getProductById: state => id => {
      return state.products.find(product => product.id == id);
    },
    isUserLoggedIn: state => {
      return state.userInfo.isLoggedIn;
    },
    isUserSignedUp: state => {
      return state.userInfo.isSignedUp;
    },
    getUserName: state => {
      return state.userInfo.name;
    },
    isLoginModalOpen: state => {
      return state.systemInfo.openLoginModal;
    },
    isSignupModalOpen: state => {
      return state.systemInfo.openSignupModal;
    },
    isCheckoutModalOpen: state => {
      return state.systemInfo.openCheckoutModal;
    },
    quantity: state => {
      return state.products.quantity;
    }
  },
  
  mutations: {
    addToCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = true;
        }
      });
    },
    setAddedBtn: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.isAddedBtn = data.status;
        }
      });
    },
    removeFromCart: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isAddedToCart = false;
        }
      });
    },
    removeProductsFromFavourite: state => {
      state.products.filter(el => {
        el.isFavourite = false;
      });
    },
    isUserLoggedIn: (state, isUserLoggedIn) => {
      state.userInfo.isLoggedIn = isUserLoggedIn;
    },
    isUserSignedUp: (state, isSignedUp) => {
      state.userInfo.isSignedUp = isSignedUp;
    },
    setHasUserSearched: (state, hasSearched) => {
      state.userInfo.hasSearched = hasSearched;
    },
    setUserName: (state, name) => {
      state.userInfo.name = name;
    },
    setProductTitleSearched: (state, titleSearched) => {
      state.userInfo.productTitleSearched = titleSearched;
    },
    showLoginModal: (state, show) => {
      state.systemInfo.openLoginModal = show;
    },
    showSignupModal: (state, show) => {
      state.systemInfo.openSignupModal = show;
    },
    showCheckoutModal: (state, show) => {
      state.systemInfo.openCheckoutModal = show;
    },
    addToFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = true;
        }
      });
    },
    removeFromFavourite: (state, id) => {
      state.products.forEach(el => {
        if (id === el.id) {
          el.isFavourite = false;
        }
      });
    },
    quantity: (state, data) => {
      state.products.forEach(el => {
        if (data.id === el.id) {
          el.quantity = data.quantity;
        }
      });
    }
  },
  
  actions: {

  }
});

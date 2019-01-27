<template>
  <div>
    <div class="columns is-centered is-multiline">
        <p class="button" role="button" is-rounded @click = "(event) => this.sortParam = 'title'">Sort by Name </p>
        <p class="button" role="button" is-rounded @click = "(event) => this.sortParam = 'price'"> Sort by Price </p>
    </div>
  <div class="columns is-centered is-multiline">
    <div class="card column is-one-quarter" v-for="product in products" :key="product.id">
      <products-component :product="product"></products-component>
    </div>
    <div class="section" v-if="products.length === 0">
      <p>{{ noProductLabel }}</p>
    </div>
  </div>
  </div>
</template>

<script>
import ProductsComponent from '../Products';
import { getByTitle } from '../../filters';

export default {
  name: 'products-list-component',
  
  components: {
    'products-component': ProductsComponent
  },
  
  data () {
    return {
        sortParam: '',
      id: '',
      noProductLabel: 'No product found',
      productsFiltered: []
    };
  },

  computed: {
    products () {
      if (this.$store.state.userInfo.hasSearched) {
        var PList = this.getProductByTitle();
          switch(this.sortParam){
              case 'title': return PList.sort(sortByTitle);
              case 'price': return PList.sort(sortByPrice);
              default: return PList;
          }
      } else {
          var PList = this.$store.state.products;
          switch(this.sortParam){
              case 'title': return PList.sort(sortByTitle);
              case 'price': return PList.sort(sortByPrice);
              default: return PList;
          }
        //return this.sortByTitleDesc();
      }
    },
      sortedList () {

      }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.state.products,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    },
  }

};
var sortByTitle = function (d1, d2) {return (d1.title.toLowerCase() > d2.title.toLowerCase()) ? 1 : -1;};
var sortByPrice = function (d1, d2) { return (d1.price > d2.price) ? 1 : -1; };
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>

<template>
  <div id="app">
    <HeaderComponent
      :userData= "userData"></HeaderComponent>
    <router-view/>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>

import HeaderComponent from '@/components/skeletons/HeaderComponent'
import FooterComponent from '@/components/skeletons/FooterComponent'


export default {
  name: 'App',
  components :{
    HeaderComponent,
    FooterComponent
  },
   name: 'ProductPage',
    component: {
      ProductItem
    },
    data(){
      return{
        items:[

        ]
      }
    },

    methods: {
      ...mapActions([
        'getUserData'])
    }

    ,
    created(){
      this.getUserData()
    }
}

  import productsApi from '@/api/products'
  import ProductItem from '@/components/products/ProductItem'


</script>

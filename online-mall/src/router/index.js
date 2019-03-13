import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ContactUsPage from '@/pages/ContactUsPage'
import ProductPage from '@/pages/ProductPage'
import ProductDetail from '@/pages/products/ProductDetailPage'
import CategoryPage from '@/pages/CategoryPage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

	{
		path: '/contact-us',
		name: 'ContactUs',
		component: ContactUsPage
	},

  {
    path: '/products',
    name: 'Product',
    component: ProductPage
  },

  {
    path: '/categories',
    name: 'Category',
    component: CategoryPage
  },

  {
    path: 'products/:id',
    name: ProductDetail,
    component: ProductPage
  }

  ]
  ,mode:'history'
})

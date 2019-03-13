import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state {
	userData: {},
	products: []
}

const mutations  = {
	setUserData (state, value) {
		state.userData = value
	},

	setProducts(state, value) {

	}
}

const store = new Vuex.store(store:{
	state,
	mutations,
	getters,
	actions
})

const getters = {
	userData(state){
		return state.userData()
	},

	products: state => state.products
}

const actions = {
	getUserData({{commits}}){
		usersApi.getUser().then(resp) => {
			commit{'setUserData', resp.data.data}
		}
	},

	getProducts({{commit}}){
		productsApi.getProducts().then(resp => {
			commit('setProducts', resp.data.data)
		})
	},

	getProductsDetail({{commit}, {id}}) {
		productsApi.getProductsDetail(id).then(resp => {
			commit('setProductDetail', resp.data.data)
		})
	}

}
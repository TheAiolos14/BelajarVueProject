import axios from 'axios'

export default{
	getProducts(){
		return axios.get('api/products')
	},

	getProductsbyId(id){
		return axios.get('api/products' + id)

	}
}
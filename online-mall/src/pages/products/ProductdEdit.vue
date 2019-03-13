<template>
	<div>
		Product Detail {{route.params.id}}
		<span v-if = "">
			NEWW !!!
		</span>

		SKU : {{item.sku}}<br>
		Name : {{item.name}}<br>
		<img :src="item.image" width="100px" >

	</div>
</template>

<script type="text/javascript">

import productsApi from '@/api/products'
import {mapGetters} from 'vuex'

export default{
	name:'ProductDetailPage',
	data(){
		return{
			item: {}
		}
	},

	computed: {
		id(){
			return this.$route.params.id
		},

		isNew(){
			return this.$route.query.newProduct === 'true'
		},
		...mapGetters([
			'producstDetail'
			])
	},

	created(){
		// productsApi.getProductsbyId('/api/products/' + this.id).then((resp )=> {
		// this.item = resp.data.data
		// })

		this.$store.dispatch(
			'getProductsDetail',
			{
				id: this.id
			})
	}
}

</script>
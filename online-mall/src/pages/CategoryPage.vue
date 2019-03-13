<template>
	<div>	
		<div>
			<h1 class="txtCategory">List of Our Category</h1>
		</div>

		<div v-for = "i in items" :key="i.id">
			<div>
				
				<h2 class="txtName">{{i.name}}</h2>
				<router-link to="/products">
					<img :src="i.image" width="200px" class="img2" />
				</router-link>
				<br>
			</div>
		</div>
	</div>

</template>

<style type="text/css">
	.txtCategory{
		margin-top: 9%;
		font-size: 25pt;
		color: #BB0F0A;
	}

	.txtName{
		margin-top: 5%;
	}

	.img2{
		margin-left: 1%;
	}

</style>

<script type="text/javascript">
	
	import axios from 'axios'

	export default{
		name: 'CategoryPage',

		data(){
			return{
				items:[
				{
					name: 'Jersey',
					image : 'https://images.sportsdirect.com/images/products/37708708_l.jpg'
				},

				{
					name: 'Ball',
					image : 'https://xsport.bg/userfiles/productlargeimages/product_691164.jpg'
				},

				{
					name: 'Toy',
					image : 'https://images-na.ssl-images-amazon.com/images/I/61y6YqsytBL._SY450_.jpg'
				},

				]
			}
		},

		created(){
			axios.get('/api/categories').then((resp) =>{
				this.items = resp.data.data
			})
		}
	}

</script>
<template>
	<div >
		
		<div>
			<h1 class="txtProduct">List of Our Products</h1>
		</div>

		<ProductItem
			:item = "i",
			v-for = "i in items",
			:key = "i.sku">
		</ProductItem>

		<div v-for = "i in items" class="product">
			<div>
				<h3 class="sku">SKU : {{i.sku}} </h3><br>
				<h3 class="name">Name: {{i.name}}</h3><br>
				<img :src="i.image" width="200px" class="img" />
				<button class="btnUpdate">Update</button>
				<button class="btnDelete">Delete</button>
				<br>
			</div>
		</div>
	</div>

</template>

<style type="text/css">

	.txtProduct{
		margin-top: 9%;
		font-size: 25pt;
		color: #BB0F0A;
	}

	.img{
		margin-right: 12%;
		margin-top: -6%;
	}

	.sku{
		margin-left: 10%;
		margin-top: 10%;
	}

	.name{
		margin-left: 11%;
		margin-top: -5%;
	}

	.btnUpdate{
		text-align: center;
		width: 70px;
		height: 30px;
		background-color: #006400;
		color: white;
		font-size: 10pt;
		border-style: none;
		margin-left: -11%;
		margin-top: 2%;
	}

	.btnDelete{
		text-align: center;
		width: 70px;
		height: 30px;
		background-color: #B22222;
		color: white;
		font-size: 10pt;
		border-style: none;
	}



</style>

<script type="text/javascript">
	
	import axios from 'axios'
	import productsApi from '@/api/products'
	import ProductItem from '@/components/products/ProductItem'

	export default{
		name: 'ProductPage',
		component: {
			ProductItem
		},
		data(){
			return{
				items:[
				 // {
				 //    id: '001',
				 //    name: 'Jersey - Home',
				 //    sku: 'Arsenal-2018',
				 //    image: 'https://switchtronics.com/ebay/listings/ARSENAL%20FC%20FOOTBALL%20CLUB%20HOME%20SHIRT%20PREMIERSHIP%202017-2018%20MENS%20PUMA/1.jpg'
   		// 		},
   				
   		// 		{
    	// 			id: '002',
    	// 			name: "Jersey - Away",
    	// 			sku: "Arsenal 2018",
				 //    image: "https://images.sportsdirect.com/images/products/37711116_l.jpg"
   		// 		},

   		// 		{
    	// 			id: '003',
    	// 			name: "Ball",
    	// 			sku: "Arsenal 2018",
				 //    image: "https://i.ebayimg.com/images/g/s68AAOSwx95bFD1N/s-l300.jpg"
   		// 		}

				]
			}
		},

		created(){
			productsApi.getProducts.then((resp) =>{
				this.items = resp.data.data
			})
		}
	}

</script>

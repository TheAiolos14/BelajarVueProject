<template>
	<div>
		SKU : {{item.slu}}<br>
		Name : {{item.name}}<br>
		<img :src="item.image" width="100px" >

		<router-link :to= "'/products/' + item.id">Detail</router-link>
		<router-link :to= "'/products/' + item.id + '/edit'">Edit</router-link>

		<button>Edit</button>
	</div>
</template>

<script type="text/javascript">
	name: 'ProductItem',
	props; [
		'item'
	]
</script>
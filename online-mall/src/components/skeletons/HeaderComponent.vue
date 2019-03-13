<template>
	<div>
		
		<div> 
		    <router-link to="/">
		    <img src="https://upload.wikimedia.org/wikipedia/hif/8/82/Arsenal_FC.png" width="200">
		   	</router-link>
		   	{{userData.username}}
		</div>
		<nav>
			<ul>
				<li>
					<div style="margin-top: 30px; margin-bottom: 50px;"> 
		        		<router-link to="/contact-us" class="button buttonFirst">
			        		{{$t('app.header.menus.contactUs')}}
		        		</router-link>
		    		</div>
		    	</li>

		    	<li>
					<div style="margin-top: 30px; margin-bottom: 50px;"> 
		        		<router-link to="/products" class="button">
		          			{{$t('app.header.menus.products')}}
		        		</router-link>
		    		</div>
		    	</li>


		    	<li>
					<div style="margin-top: 30px; margin-bottom: 50px;"> 
				        <router-link to="/categories" class="button">
				         	{{$t('app.header.menus.categories')}}
				        </router-link>
					</div>
		    	</li>

			</ul>
		</nav>

	</div>

</template>

<style type="text/css">

nav{
	margin-top: 2%;
}

ul{
	text-decoration: none;
	list-style-type: none;
}

li{
	float: left;
	text-decoration: none;
	margin-left: 18%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.button{
  background-color : #BB0F0A;
  color: white;
  border : none;
  width: 150px;

  padding: 5px;
  border-radius : 5px;
  margin-top: 10px;
  text-decoration : none;
  float: left;
}

.button:hover{
	background-color: black;
}

.buttonFirst{
	margin-left: 30%;
}

.content{
  padding-top : 20px;
}

</style>

<script type="text/javascript">
import {mapGetters} from 'vuex'

const LANGS = ['en', 'id']


export default {
	data() {
		return {
			LANGS
		}
	}
}
	export default {
		props: [
			'userData'
		],

		computed: {
			...mapGetters(['userData'])
		}
	}

	import {mapGetters} from 'vuex'
</script>
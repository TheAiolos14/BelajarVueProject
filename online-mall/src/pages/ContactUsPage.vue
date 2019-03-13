<template>
	
	<div id="form">
<!-- 		<h2 style="color: #BB0F0A; margin-top: -8%;">Form Daftar Member</h2>
 -->		<div>
			<label>
				Full Name
			</label>
			<input type="text" class="contact-input" v-model="formData.name">
		</div>

		<div>
			<label>
				Email
			</label>
			<input type="text" v-model= "formData.email">
			<div class="error" v-if="!isEmailValid">
				Email format must include "@"
			</div>
		</div>

		<div>
			<label>
				Description
			</label>
			<textarea type="text" v-model="formData.description" cols="20" rows="20"></textarea>
		</div>

		<div>
			<button class="btnSubmit" @click="submitData"> Submit</button>
		</div>
		<!-- <div>
			Data:
			<div>
				{{formData}}
			</div>
		</div> -->

	</div>

</template>


<script type="text/javascript">
	export default{
		name: 'ContactUsPage',
		data(){
			return{
				formData: {
					name: '',
					email: '',
					description: ''
				}
			}
		},

		methods:{

		submitData(){

			if(!this.isInputValid){
				alert('please fix data')
				return
			}
				alert(JSON.stringify(this.formData))
				axios.post('/api/contact-us'. this.formData)
				alert('data submitted')
			}
		},

		computed: {
			isInputValid(){
				const data = this.formData

					if(!data.name || !data.email || !data.description || !this.isEmailValid){
					return false
				}
					return true
				},
				isEmailValid(){
					return this.formData.email.indexOf('@') > 0
				}
			}
}
</script>

<style type="text/css" scoped>

	label{
		display: block;
		margin-top: 10%;
	}

	input, textarea{
		margin-top: 5%;
		width: 100%;
		border: #BB0F0A 1px solid;
		height: 30px;
		text-align: center;
		padding: 2px;
	}

	.btnSubmit{
		margin-top: 10%;
		background-color: #BB0F0A;
		border-style: none;
		width: 100px;
		height: 30px;
		color: white;
		font-style: bold;
	}

	.error{
		color : red;
		margin-top: 5%;
	}

	#form{
  		background-color: rgb(173,216,230);
  		margin-left: 39%;
  		margin-top: 10%;
  		padding: 3%;
		width: 300px;
		font-size: 15pt;
	}

</style>
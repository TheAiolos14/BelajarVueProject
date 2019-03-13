const express  = require('express')
const app = express()
const port = 20000

app.get('/', (req, res) => {
  res.send("Hello World !")
})

app.get('/api/user', (req, res) => {
  res.send({
    status: 'OK',
    code: 200,
    data: {
      username: 'abc@gmail.com',
      age: 23
    }
  })
})

app.get('/api/categories', (req, res) =>{
	res.send({
		status: "OK",
		code: 200,
		data: [
			{
				id: 25,
				name: "Jersey",
        image: 'http://ecash.bankmandiri.co.id/wp-content/uploads/2018/03/logo-blibli-payday-sale.jpg'

			},
			{
				id: 14,
				name: "Ball",
        image: 'http://ecash.bankmandiri.co.id/wp-content/uploads/2018/03/logo-blibli-payday-sale.jpg'

			}
		]
	})
})


app.get('/api/products', (req,res) =>{
 res.send({
  status: 'OK',
  code: 200,
  data: [
   {
    id: 5,
    name: 'Arsenal Project',
    sku: 'Ars- 2019',
    image: 'https://worldsportlogos.com/wp-content/uploads/2018/02/Arsenal-logo.png'
   },
   {
    id: 7,
    name: "Jersey",
    sku: "ARs-2019-13",
    image: "https://worldsportlogos.com/wp-content/uploads/2018/02/Arsenal-logo.png"
   }
  ]
 })
})


app.listen(port, () => {
  console.log('listening on port ${port}')
})





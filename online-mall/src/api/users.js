import axios from 'axios'

export default{
	gerUser(){
		return axios.get(url: 'api/user')
	}
}
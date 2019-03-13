import {mount} from 'vue/test-utils'
import App from '@.App'
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'


describe('App.vue', () => {

	it('One equal 1', () =>{
		expect(1).toEqual(1)
	})

	it('mount well', () =>{
		const wrapper = mount(App, {
			store,
			i18n,
			components: {
				RouteLink: {
					
				}
			}
		})
	})
})
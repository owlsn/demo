import Vue from 'vue'
import Reset from '@/components/Reset'
import { login, verifyCode } from '@/service/data'

describe('Reset.vue', () => {
  it('test render content', () => {
    const Constructor = Vue.extend(Reset)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('')
  })

  it('test reset api', () => {
    let name = '',
      password = '',
      code = '',
      from = ''
    return login(name, password, code, from).then(function (ret) {
      expect(ret.status).toEqual(200)
      expect(ret.data).toEqual({})
    })
  })

  it('test verify code api', () => {
    return verifyCode().then(function(ret){
      expect(ret.status).toEqual(200)
      expect(ret.data).toEqual({})
    })
  })
})

import { shallow } from 'vue-test-utils'
import Login from '@/components/Login'
jest.mock('@/service/data')
import { login, verifyCode } from '@/service/data'
// jest.mock('@/service/data')

// 1.测试正常情况
// 2.测试错误情况
// 3.测试边界情况

describe('Login.vue', () => {
  let wrapper, vm;
  beforeAll(() => {
    wrapper = shallow(Login)
    vm = wrapper.vm;
  })

  it('test render content', () => {
    expect(wrapper.find('.login_form').exists()).toBe(true)
    expect(wrapper.find('input[id=name]').exists()).toBe(true)
    expect(wrapper.find('input[id=password]').exists()).toBe(true)
    expect(wrapper.find('input[id=code]').exists()).toBe(true)
  })

  // it('test login api', () => {
  //   let name = '',
  //     password = '',
  //     code = '',
  //     from = ''
  //   return login(name, password, code, from).then(function (ret) {
  //     expect(ret.status).toEqual(200)
  //     // expect(ret.data.info).toEqual()
  //   })
  // })

  it('test click verify code fn', async () => {
    // await wrapper.find('.change_img').trigger('click')
    expect(verifyCode).toHaveBeenCalled()
    expect(verifyCode).toHaveBeenCalledTimes(1)
    expect(wrapper.find('.svgData').contains('svg')).not.toBeNull()
  })

  // it('test verify code api', () => {
  //   const url = 'http://127.0.0.1:3000/users/verify_code'
  //   wrapper.find('.change_img').trigger('click')
  //   expect(axios.post).toBeCalledWith(url)
  // })
})

import { shallow } from 'vue-test-utils'
import Index from '@/components/Index'

describe('Index.vue', () => {
  let wrapper, vm;
  beforeAll(() => {
    wrapper = shallow(Index);
    vm = wrapper.vm;
  })

  it('should render correct contents', () => {
    expect(wrapper.find('.hello h1').text())
      .toEqual('Welcome to Your Vue.js App')
  })
})

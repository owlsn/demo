<template>
  <div class="login-10">
    <div class="login">
      <h4>LOGIN FORM</h4>
      <form class="ten login_form">
        <div class="fb">
          <a href="#">
            <span> </span>
            <label>Sign in with Facebook</label>
            <div class="clear"></div>
          </a>
        </div>
        <p>Or</p>
        <p>
        </p>
        <li class="cream">
          <input type="text" class="text" value="Username" id="name" v-model="name">
          <a href="#" class=" icon10 user10"></a>
        </li>
        <li class="cream">
          <input type="password" value="Password" id="password" v-model="password">
          <a href="#" class=" icon10 lock10"></a>
        </li>
        <div class="submit-ten">
          <input type="button" @click="login" value="Log in">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { login, verifyCode } from '../service/data'
export default {
  name: 'Login',
  data() {
    return {
      name: '',
      password: '',
      code: '',
      from: '',
      svgData: ''
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例,将值传入oldUrl
      vm.from = from.path
    })
  },
  mounted() {
    // this.fillCode()
  },
  methods: {
    async login() {
      let ret = await login(this.name, this.password, this.from, this.code)
      console.log(ret.data)
      return false
    },
    async fillCode() {
      let ret = await verifyCode()
      this.svgData = ret.data.svg
      console.log(Object.keys(ret))
    },
    getCaptchaCode() {
      this.fillCode()
    }
  }
}
</script>

<style scoped lang="scss">
@import '../styles/login.scss';
</style>

<template>
  <form class="login_form" role="form">
    <div class="form-group">
      <label for="name">用户名:</label>
      <input type="text" class="form-control" v-model="name" id="name" placeholder="请输入名称">
    </div>
    <div class="form-group">
      <label for="name">密码:</label>
      <input type="text" class="form-control" v-model="password" id="password" placeholder="请输入名称">
    </div>
    <!-- <div class="form-group">
      <label for="inputfile">文件输入</label>
      <input type="file" id="inputfile">
      <p class="help-block">这里是块级帮助文本的实例。</p>
    </div> -->
    <section class="input_container captcha_code_container">
      <input type="text" placeholder="验证码" name="code" v-model="code" id="code" maxlength="4">
      <div class="img_change_img">
        <div class="svgData" v-html="svgData"></div>
        <div class="change_img" @click="getCaptchaCode">
          <p>看不清</p>
          <p>换一张</p>
        </div>
      </div>
    </section>
    <div class="checkbox">
      <label>
        <input type="checkbox">请打勾
      </label>
    </div>
    <input type="button" value="提交" @click="login" class="btn btn-default" />
  </form>
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
    this.fillCode()
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
@import '../styles/common.css';
$color: gray;
form {
  background-color: $color;
}
</style>

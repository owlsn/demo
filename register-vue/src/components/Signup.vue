<template>
  <div class="SignupContainer">

    <head head-title="注册" goBack="true"></head>
    <form class="SignupForm">
      <section class="input_container phone_number">
        <input type="text" placeholder="账号" name="phone" maxlength="11">
        <!-- <button @click.prevent="getVerifyCode" :class="{right_phone_number:rightPhoneNumber}" v-show="!computedTime">获取验证码</button>
                <button  @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button> -->
      </section>
      <section class="input_container">
        <input type="text" placeholder="密码" name="password">
      </section>
      <section class="input_container">
        <input type="text" placeholder="再次输入密码" name="rePassword">
      </section>
      <section class="input_container">
        <input type="text" placeholder="邮箱" name="email">
      </section>
      <!-- <section class="input_container captcha_code_container">
        <input type="text" placeholder="验证码" name="mobileCode" maxlength="6">
        <div class="img_change_img">
          <img v-show="captchaCodeImg" :src="captchaCodeImg">
          <div class="change_img" @click="getCaptchaCode">
            <p>看不清</p>
            <p>换一张</p>
          </div>
        </div>
      </section> -->
    </form>
    <div>
      <button class="signup" @click="signup">确认修改</button>
    </div>
  </div>
</template>

<script>
import { getList, getJson, signData } from '../service/data'
export default {
  name: 'Signup',
  data() {
    return {
      phone: null,
      password: null,
      rePassword: null,
      email: null
    }
  },
  methods: {
    async fill() {
      let data = await getList()
      console.log(data)
    },
    async sign() {
      let data = { phone: this.phone, email: this.email }
      let res = await getJson(data)
      console.log(res)
    },
    async signup() {
      var data = {
        phone: this.phone,
        password: this.password,
        rePassword: this.rePassword,
        email: this.email
      }
      let res = await signData('/apis/users/signup', data)
      console.log(res)
      console.log('send data:' + JSON.stringify(data))
      // if (res.status !== 200) {
      //   console.log('fail')
      // } else {
      //   console.log('success')
      // }
    }
  }
}
</script>


<style scoped>
</style>

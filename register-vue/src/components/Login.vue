<template>
    <form role="form">
        <div class="form-group">
            <label for="name">名称</label>
            <input type="text" class="form-control" id="name" placeholder="请输入名称">
        </div>
        <div class="form-group">
            <label for="inputfile">文件输入</label>
            <input type="file" id="inputfile">
            <p class="help-block">这里是块级帮助文本的实例。</p>
        </div>
        <div class="checkbox">
            <label>
                <input type="checkbox">请打勾
            </label>
        </div>
        <button type="submit" @click="login" class="btn btn-default">提交</button>
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
      from: ''
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
    },
    async fillCode() {
      let ret = await verifyCode()
      console.log(ret.data)
    }
  }
}
</script>

<style>
</style>

<template>
  <div id="app">
    <h1>Password Strength Meter</h1>
    <password v-model="password" :toggle="true"></password>
  </div>
</template>

<script>
import Password from './components/PasswordStrengthMeter.vue'

export default {
  name: 'app',
  components: {
    Password
  },
  data () {
    return {
      password: null
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

import Vue from "vue"
import {play} from "vue-play"
import Password from '../src/components/PasswordStrengthMeter.vue'

Vue.component('password', Password)

play('Password').add('Basic Component', {
  template: `<password v-model="password"></password>`,
  data () {
    return {
      password: ''
    }
  }
})

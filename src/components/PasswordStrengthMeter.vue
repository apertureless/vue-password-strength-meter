<template>
  <div class="Password">
    <div class="Password__group">
      <input
        type="password"
        v-model="password"
        v-bind:class="[defaultClass]"
        :name="name"
        :id="id"
        :placeholder="placeholder"
        :required="required"
      >

      <div
        class="Password__badge"
        v-bind:class="[isSecure ? successClass : '', !isSecure && isActive ? errorClass : '' ]"
        v-cloak
        v-if="badge"
        >
        {{ passwordCount }}
      </div>
    </div>

    <div v-bind:class="[strengthMeterClass]">
      <div v-bind:class="[strengthMeterFillClass]" :data-score="passwordStrength"></div>
    </div>
  </div>
</template>

<script>
  import zxcvbn from 'zxcvbn'

  export default {
    props: {
      /**
       * Input field id
       * @type {String}
       */
      id: {
        type: String,
        default: 'password'
      },
      /**
       * Input field placeholder text
       * @type {String}
       */
      placeholder: {
        type: String,
        default: 'Please enter your password'
      },
      /**
       * Input field name
       * @type {String}
       */
      name: {
        type: String,
        default: 'password'
      },
      /**
       * Input field required attribute
       * @type {Boolean}
       */
      required: {
        type: Boolean,
        default: true
      },
      /**
       * Password min length.
       * Right now only visual for the badge
       * @type {Number}
       */
      secureLength: {
        type: Number,
        default: 7
      },
      /**
       * Display badge:
       * The badge shows your
       * password character count
       * up to the defined secureLength
       * @type {Boolean}
       */
      badge: {
        type: Boolean,
        default: true
      },
      /**
       * CSS Class for the Input field
       * @type {String}
       */
      defaultClass: {
        type: String,
        default: 'Password__field'
      },
      /**
       * CSS Class for the badge
       * if a password does not match
       * the secureLength. Later for errors
       * @type {String}
       */
      errorClass: {
        type: String,
        default: 'has-error'
      },
      /**
       * CSS Class for the badge
       * if a password does match
       * the secureLength. Later for
       * success messages possible.
       * @type {String}
       */
      successClass: {
        type: String,
        default: 'is-success'
      },
      /**
       * CSS class for styling the
       * strength meter bars.
       * @type {String}
       */
      strengthMeterClass: {
        type: String,
        default: 'Password__strength-meter'
      },
      /**
       * strengthMeterFillClass sets the
       * individual strength width and fill
       * color of the strength meter bars.
       * @type {String}
       */
      strengthMeterFillClass: {
        type: String,
        default: 'Password__strength-meter--fill'
      }
    },
    data () {
      return {
        password: null
      }
    },

    computed: {
      /**
       * passwordStrength is the score calculated by zxcvbn
       * @return {Number} Password Strength Score
       */
      passwordStrength () {
        return this.password ? zxcvbn(this.password).score : null
      },

      /**
       * isSecure checks if the length of the password is longer then
       * the defined `secureLength`
       * @return {Boolean} Password length longer then minLength
       */
      isSecure () {
        return this.password ? this.password.length >= this.secureLength : null
      },

      /**
       * isActive checks if a password is entered.
       * It's required for the password count badge.
       * @return {Boolean} Password entered
       */
      isActive () {
        return this.password && this.password.length > 0
      },

      /**
       * passwordCount holds the character count of the
       * current password. It shows the count up to the `secureLength`.
       * @return {Number} Password Character Count
       */
      passwordCount () {
        return this.password && (this.password.length > this.secureLength ? `${this.secureLength}+` : this.password.length)
      }
    }
  }
</script>

<style>
  [v-cloak] {
    display: none;
  }

  .Password {
    max-width:  400px;
    margin:  0 auto;
  }

  .Password__group {
    position: relative;
  }

  .Password__strength-meter {
    position: relative;
    height: 3px;
    background: #DDD;
    margin: 10px auto 20px;
    border-radius: 3px;
}

  .Password__strength-meter:before, .Password__strength-meter:after {
    content: '';
    height: inherit;
    background: transparent;
    display: block;
    border-color: #FFF;
    border-style: solid;
    border-width: 0 5px 0 5px;
    position: absolute;
    width: 80px;
    z-index: 10;
  }

  .Password__strength-meter:before {
    left: 70px;
  }

  .Password__strength-meter:after {
    right: 70px;
  }

  .Password__strength-meter--fill {
    background: transparent;
    height: inherit;
    position: absolute;
    width: 0;
    border-radius: inherit;
    transition: width 0.5s ease-in-out, background 0.25s;
  }

  .Password__strength-meter--fill[data-score='0'] {
    background: darkred;
    width: 20%;
  }

  .Password__strength-meter--fill[data-score='1'] {
    background: orangered;
    width: 40%;
  }

  .Password__strength-meter--fill[data-score='2'] {
    background: orange;
    width: 60%;
  }

  .Password__strength-meter--fill[data-score='3'] {
    background: yellowgreen;
    width: 80%;
  }

  .Password__strength-meter--fill[data-score='4'] {
    background: green;
    width: 100%;
  }

  .Password__field {
    background-color: #f1f1f1;
    border: 1px solid #f1f1f1;
    border-radius: 2px;
    box-sizing: border-box;
    font-size: 14px;
    padding: 13px;
    width: 100%;
  }

  .Password__badge {
    float: right;
    position: relative;
    bottom: 33px;
    right: 10px;
    color: white;
    border-radius: 6px;
    padding: 3px;
    width: 30px;
    height: 15px;
    font-size: 14px;
    line-height: 1.1;
  }

  .has-error {
    background: red;
  }

  .is-success {
    background: #1bbf1b;
  }
</style>

# 🔓 vue-password-strength-meter

[![Build Status](https://travis-ci.org/apertureless/vue-password-strength-meter.svg?branch=master)](https://travis-ci.org/apertureless/vue-password-strength-meter)
[![npm version](https://badge.fury.io/js/vue-password-strength-meter.svg)](https://badge.fury.io/js/vue-password-strength-meter)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/apertureless/vue-password-strength-meter/blob/master/LICENSE.txt)

Interactive password strength meter based on [zxcvbn](https://github.com/dropbox/zxcvbn) for vue.js

<p align="center">
  <img src="/static/demo.gif" alt="🔓" title="🔓 Demo" />
</p>

## 📺 Demo

[Demo here](https://apertureless.github.io/vue-password-strength-meter/)

## 🔧 Install

`yarn add vue-password-strength-meter zxcvbn`

## 👈 Usage

```javascript
<script>
  import Password from 'vue-password-strength-meter'
  export default {
    components: { Password }
    data () {
      return {
        password: null
      }
    }
  }
</script>

<template>
  <password v-model="password"></password>
</template>
```

## Props

| Prop   |      Type      |  Default Value | Description
|----------|:-------------:|------|------|
| id |  String | password | input field id attribute |
| placeholder |  String | Please enter your password | input field placeholder attribute |
| name |  String | password | input field name attribute |
| required |  Boolean | true | input field required attribute |
| secureLength |  Number | 7 | password min length |
| badge |  Boolean | true | display password count badge |
| defaultClass |  String | Password__field | input field class |
| errorClass |  String | Password__badge--error | error class for password count badge |
| successClass |  String | Password__badge--success | success class for password count badge |
| strengthMeterClass |  String | Password__strength-meter | strength-meter class |
| strengthMeterFillClass |  String | Password__strength-meter--fill | strength-meter class for individual data fills |

## 💅 Customizing

You can customize the styling of the input field, badge and strength-meter by passing your own css classes
to `defaultClass`, `strengthMeterClass` etc.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

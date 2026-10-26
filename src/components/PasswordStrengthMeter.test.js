// @vitest-environment jsdom
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import zxcvbn from 'zxcvbn'
import PasswordStrengthMeter from './PasswordStrengthMeter.vue'

describe('PasswordStrengthMeter modelValue feedback', () => {
  it('emits empty-password feedback when a nullable model is cleared', async () => {
    const errors = []
    const wrapper = mount(PasswordStrengthMeter, {
      props: { modelValue: 'synthetic-test-only-value' },
      global: {
        config: {
          errorHandler (error) {
            errors.push(error)
          }
        }
      }
    })

    await wrapper.setProps({ modelValue: null })

    expect(errors).toEqual([])
    expect(wrapper.emitted('feedback')).toHaveLength(1)
    expect(wrapper.emitted('feedback')[0][0]).toEqual(zxcvbn('').feedback)
  })
})

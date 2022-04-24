import { useMutation, useQuery } from '@vue/apollo-composable'
import { useState } from '#imports'
import Base from '~/components/modal/ModalBase.vue'
import { SIGN_IN } from '~/graphql/mutation/auth.mutation'

export default () => {
  // @ts-ignore
  const modal = useState<InstanceType<typeof Base> | null>('modal', () => {})

  const email = useState<string>('email', () => '')
  const password = useState<string>('password', () => '')

  const isReady = () => {
    return email.value.length && password.value.length
  }

  /**
     * Auth Method
     */
  const test = useMutation(SIGN_IN)

  const login = async () => {
    const data = await test.mutate({
      input: {
        email: email.value,
        password: password.value
      }
    })
    console.log(data)
  }

  return {
    modal,
    login,
    isReady,
    email,
    password
  }
}

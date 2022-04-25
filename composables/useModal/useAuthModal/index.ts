import { useMutation } from '@vue/apollo-composable'
import { useCookie, useState } from '#imports'
import Base from '~/components/modal/ModalBase.vue'
import { SIGN_IN } from '~/graphql/mutation/auth.mutation'
import { SignIn } from '~/graphql/mutation/__generated__/SignIn'
import { useUser } from '~/stores/user'

export default () => {
  const userStore = useUser()
  // @ts-ignore
  const modal = useState<InstanceType<typeof Base> | null>('modal', () => null)

  const email = useState<string>('email', () => '')
  const password = useState<string>('password', () => '')

  const isReady = () => {
    return email.value.length && password.value.length
  }

  /**
     * Auth Method
     */
  const signInMutation = useMutation<SignIn>(SIGN_IN)

  const login = async () => {
    const { data } = await signInMutation.mutate({
      input: {
        email: email.value,
        password: password.value
      }
    })

    await userStore.getMe()

    const cookie = useCookie('_token')
    cookie.value = data.signIn.token

    window.location.reload()
  }

  return {
    modal,
    login,
    isReady,
    email,
    password
  }
}

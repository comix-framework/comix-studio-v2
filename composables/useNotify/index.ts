import { UseSubscriptionReturn } from '@vue/apollo-composable'
import { useNuxtApp, useState } from '#app'
import { SUB_NOTIFY } from '~/graphql/subscription/user.subscription'
import { SubNotify } from '~/graphql/subscription/__generated__/SubNotify'

export const useNotify = () => {
  const subNotify = useState<UseSubscriptionReturn<SubNotify, undefined>>('subNotify', () => undefined)

  const startSub = () => {
    const { $apollo } = useNuxtApp()
    subNotify.value = $apollo.apolloClient.subscribe({
      query: SUB_NOTIFY
    })
  }

  return {
    startSub
  }
}

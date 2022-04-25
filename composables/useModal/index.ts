import { useNuxtApp, useState } from '#app'

export const useModal = () => {
  const { $anime } = useNuxtApp()

  const open = useState('open', () => false)
  const body = useState('body', () => null)
  const closeButton = useState('close', () => null)

  const data = useState('data', () => null)

  const dispose = () => {
    open.value = false
  }

  const init = () => {
    open.value = true
    $anime({
      targets: body.value,
      scale: [0.9, 1],
      opacity: [0, 1],
      duration: 1500
    })

    $anime({
      targets: closeButton.value,
      scale: [0, 1],
      opacity: [0, 1],
      delay: 500,
      duration: 1500
    })
  }

  return {
    open,
    closeButton,
    body,
    data,
    dispose,
    init
  }
}

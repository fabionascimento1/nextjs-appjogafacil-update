import FormSignup from 'components/FormSignup'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import Auth from 'templates/Auth'

export default function Index() {
  const router = useRouter()
  const path = router.asPath

  useEffect(() => {
    if (path == '/signup') router.push('/?modal=signup')
  })
  return (
    <Auth title="Criar sua conta" image="/img/player-1.svg">
      <FormSignup />
    </Auth>
  )
}

import FormSignin from 'components/FormSignin'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import Auth from 'templates/Auth'

export default function Index() {
  const router = useRouter()
  const path = router.asPath
  console.log(path)

  useEffect(() => {
    if (path == '/signin') router.push('/?modal=signin')
  })
  return (
    <Auth title="Fazer o login" image="/img/player-1.svg">
      <FormSignin />
    </Auth>
  )
}

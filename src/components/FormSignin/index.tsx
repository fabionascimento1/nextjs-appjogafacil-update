import Button from 'components/Button'
import Input from 'components/Input'
import { FormWrapper, FormLink } from 'components/Form'
import React from 'react'
import Link from 'next/link'
import { Divider } from 'components/Divider'

const FormSignin = () => (
  <FormWrapper>
    <form>
      <Input
        type="text"
        placeholder="Digite seu nome"
        icon="/img/icon_mail.svg"
      />

      <Input
        type="password"
        placeholder="Digite seu Email"
        icon="/img/icon_pass.svg"
      />

      <Button fullWidth>Fazer Login</Button>

      <Divider />

      <FormLink>
        Não possui conta?{' '}
        <Link href="/?modal=signup" passHref>
          <a>Faça seu cadastro</a>
        </Link>
        .
      </FormLink>

      <FormLink>
        Esqueceu sua senha{' '}
        <Link href="#" passHref>
          <a>Requisite sua nova senha</a>
        </Link>
        .
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignin

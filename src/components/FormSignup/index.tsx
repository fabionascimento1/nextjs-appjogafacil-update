import React from 'react'
import Link from 'next/link'

import * as S from './styles'

import Button from 'components/Button'
import Input from 'components/Input'
import { FormWrapper, FormLink } from 'components/Form'
import { Divider } from 'components/Divider'
import Radio from 'components/Radio'

const FormSignin = () => (
  <FormWrapper>
    <form>
      <S.WrapperRadio>
        <Radio
          label="Jogador"
          labelFor="Jogador"
          id="Jogador"
          name="type"
          value="Jogador"
          defaultChecked
        />
        <Radio
          label="Centro Esportivo"
          labelFor="CentroEsportivo"
          id="CentroEsportivo"
          name="type"
          value="CentroEsportivo"
        />
      </S.WrapperRadio>
      <Input
        type="text"
        placeholder="Digite seu nome"
        icon="/img/icon_name.svg"
      />

      <Input
        type="text"
        placeholder="Digite seu email"
        icon="/img/icon_mail.svg"
      />

      <Input
        type="password"
        placeholder="Digite sua senha"
        icon="/img/icon_pass.svg"
      />

      <Button fullWidth>Criar sua conta</Button>

      <Divider />

      <FormLink>
        Já possui sua conta?{' '}
        <Link href="/?modal=signin" passHref>
          <a>Fazer login</a>
        </Link>
        .
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignin

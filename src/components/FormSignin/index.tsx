import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import Button from 'components/Button'
import Input from 'components/Input'
import { FormWrapper, FormLink } from 'components/Form'
import { Divider } from 'components/Divider'
import { validateEmail, validateMinLength } from 'utils/validations'

const FormSignin = () => {
  const [values, setValues] = useState({ email: '', password: '' })

  const [state, setState] = useState({
    emailError: true,
    passwordError: true,
    emailInvalid: ''
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))

    if (field === 'email' && value.length >= 5) {
      const validate_email = validateEmail(values.email)
      if (validate_email) {
        setState({ ...state, emailInvalid: 'Email Inválido!' })
      } else {
        setState({ ...state, emailInvalid: '' })
      }
    }
  }

  useEffect(() => {
    setState({
      ...state,
      emailError: validateEmail(values.email),
      passwordError: validateMinLength(values.password)
    })
  }, [values.email, values.password])

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault()
    console.log(values.email)
    console.log(values.password)
  }
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="text"
          placeholder="Digite seu email"
          icon="/img/icon_mail.svg"
          onInputChange={(v) => handleInput('email', v)}
          error={state.emailInvalid}
        />
        <Input
          name="password"
          type="password"
          placeholder="Digite sua senha"
          icon="/img/icon_pass.svg"
          onInputChange={(v) => handleInput('password', v)}
        />

        <Button disabled={state.emailError || state.passwordError} fullWidth>
          Fazer Login
        </Button>

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
}
export default FormSignin

import Image from 'next/image'
import React, { useState } from 'react'
import * as S from './styles'
import { InputProps } from './types'

const Input = ({
  type = 'password',
  placeholder = 'Digite seu ...',
  icon,
  togglePassword,
  disabled = false,
  error,
  onInputChange,
  ...props
}: InputProps) => {
  const [value, setValue] = useState('')

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInputChange && onInputChange(newValue)
  }

  return (
    <S.Wrapper error={!!error}>
      <S.InputWrapper>
        {!!icon && (
          <S.Icon>
            <Image data-testid="icon" src={icon} width={18} height={18} />
          </S.Icon>
        )}
        <S.Input
          role="textbox"
          title={placeholder}
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          {...props}
        />
        {type === 'password' && (
          <S.Eye>
            <Image
              title="Mostrar senha"
              role="img"
              src="/img/eye.svg"
              width={16}
              height={16}
            />
          </S.Eye>
        )}
      </S.InputWrapper>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default Input

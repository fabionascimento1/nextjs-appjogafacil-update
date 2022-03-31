import Image from 'next/image'
import React from 'react'
import * as S from './styles'
import { InputProps } from './types'

const Input = ({
  type = 'password',
  placeholder = 'Digite seu ...',
  icon,
  togglePassword,
  disabled = false,
  error,
  ...props
}: InputProps) => (
  <S.Wrapper>
    <S.InputWrapper>
      {!!icon && (
        <S.Icon>
          <Image data-testid="icon" src={icon} width={24} height={24} />
        </S.Icon>
      )}
      <S.Input
        role="textbox"
        title={placeholder}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        {...props}
      />
      {type === 'password' && (
        <S.Eye>
          <Image
            title="Mostrar senha"
            role="img"
            src="/img/eye.svg"
            width={24}
            height={24}
          />
        </S.Eye>
      )}
    </S.InputWrapper>
    {!!error && <S.Error>{error}</S.Error>}
  </S.Wrapper>
)

export default Input

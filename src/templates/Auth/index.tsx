import Heading from 'components/Heading'
import Image from 'next/image'
import React from 'react'

import * as S from './styles'

export type AuthProps = {
  children: React.ReactNode
  image: string
  title: string
}

export default function Auth({ children, image, title }: AuthProps) {
  return (
    <S.Wrapper>
      <S.Cover>
        <Image src={image} alt="Image Conver" width={345} height={319} />
      </S.Cover>
      <S.FormWrapper>
        <Heading>{title}</Heading>
        {children}
      </S.FormWrapper>
    </S.Wrapper>
  )
}

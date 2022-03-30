import Image from 'next/image'
import React from 'react'
import * as S from './styles'
import { BannerProps } from './types'

const Banner = ({ title, description, image }: BannerProps) => (
  <S.Wrapper>
    <S.Content data-testid="content">
      <S.Left>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
      </S.Left>
      <S.Image>
        <Image src={image} alt={title} width={345} height={319} />
      </S.Image>
    </S.Content>
  </S.Wrapper>
)

export default Banner

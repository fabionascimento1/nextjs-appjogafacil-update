import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  width: 674px;
  margin: 10% auto 0;

  ${media.lessThan('medium')`
    width: 90%;
  `}
`

export const Content = styled.div`
  display: flex;

  ${media.lessThan('medium')`
    flex-direction: column;
  `}
`

export const Left = styled.div``

export const Image = styled.div`
  position: relative;
  margin-left: -10rem;
  margin-top: 3rem;
  width: 100%;

  ${media.lessThan('medium')`
    width: 75%;
    margin: 0 auto;
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: 63px;
    line-height: 64px;
    font-family: ${theme.font.familySaira};
    color: ${theme.colors.white};
    font-weight: ${theme.font.bold};
    margin-bottom: 15px;

    ${media.lessThan('medium')`
      font-size: 40px;
      line-height: 42px;
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 18px;
    line-height: 26px;
    color: ${theme.colors.black};
    font-weight: ${theme.font.normal};
    width: 87%;
    ${media.lessThan('medium')`
      font-size: 15px;
      line-height: 19px;
      width: 100%;
    `}
  `}
`

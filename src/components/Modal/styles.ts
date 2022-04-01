import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: rgba(12, 16, 60, 0.5);
    backdrop-filter: blur(7px);
    position: fixed;
    z-index: ${theme.layers.menu};
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    height: 100vh;
    overflow: hidden;
    opacity: 1;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 96rem;
    width: 100%;
    margin: 14.8rem auto 0;
    backdrop-filter: blur(7px);
    box-shadow: rgba(0, 0, 0, 0.7) 0px 50px 100px,
      rgba(255, 255, 255, 0) 0px 0.5px 0px 0.5px inset;
    border-radius: 20px;

    ${media.lessThan('large')`
      max-width: 95%;
    `}

    ${media.lessThan('medium')`
      max-width: 95%;
    `}
  `}
`
export const Cover = styled.div`
  ${media.lessThan('medium')`
    order: 2;
    width: 80%;
    margin: 0 auto;
  `}
`

export const FormWrapper = styled.div`
  width: 50rem;
  padding-left: 15rem;

  ${media.lessThan('medium')`
    order: 1;
    width: 80%;
    margin: 0 auto;
    padding-left: 0;
  `}
`

export const ButtonWrapper = styled.div`
  position: absolute;
  top: -13px;
  right: -13px;
  cursor: pointer;
`

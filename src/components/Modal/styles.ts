import styled, { css, keyframes } from 'styled-components'
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
const ContentAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.6);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 96rem;
    width: 100%;
    margin: 8% auto 0;
    backdrop-filter: blur(7px);
    box-shadow: rgba(0, 0, 0, 0.7) 0px 50px 100px,
      rgba(255, 255, 255, 0) 0px 0.5px 0px 0.5px inset;
    border-radius: 20px;

    ${media.lessThan('large')`
      max-width: 95%;
      margin: 10% auto 0;
    `}

    ${media.lessThan('medium')`
      max-width: 95%;
      margin: 12% auto 0;
    `}

    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-name: ${ContentAnimation};
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
  ${({ theme }) => css`
    position: absolute;
    top: -13px;
    right: -13px;
    cursor: pointer;

    animation-duration: 10s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-name: ${ButtonAnimation};

    &:hover {
      transform: scale(1.3);
    }
  `}
`

const ButtonAnimation = keyframes`
  0% {
    transform: rotateZ(-180deg);
  }

  100% {
    transform: rotateZ(0deg);
  }
`
const KeyContentFadeOut = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(0);
  }
`
const wrapper = {
  fadeOut: () => css`
    animation-duration: 1s;
    animation-timing-function: cubic-bezier(0.075, 0.82, 0.165, 1);
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-name: ${KeyContentFadeOut};
  `
}
type fadeOutProps = { fadeOut?: boolean }

export const ContentFadeOut = styled.div<fadeOutProps>`
  ${({ fadeOut }) => css`
    ${fadeOut && wrapper.fadeOut}
  `}
`

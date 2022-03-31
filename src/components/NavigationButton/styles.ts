import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  img {
    cursor: pointer;
  }
  color: #fff;
`

export type ModalProps = {
  isOpen: boolean
}

export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
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
    opacity: ${isOpen ? 1 : 0};
    pointer-events: ${isOpen ? 'all' : 'none'};
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    max-width: 960px;
    width: 100%;
    margin: 148px auto 0;
    background: ${theme.colors.black};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 50px 100px,
      rgba(255, 255, 255, 0.3) 0px 0px 0px 0.5px inset;
    backdrop-filter: blur(40px);
    border-radius: 20px;

    & > ${NonOpacity} {
      opacity: 1;
    }
  `}
`

export const ButtonWrapper = styled.div`
  position: absolute;
  top: -12px;
  right: -12px;
`

export const NonOpacity = styled.div``

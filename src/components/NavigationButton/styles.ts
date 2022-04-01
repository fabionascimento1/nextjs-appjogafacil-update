import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;
  padding: 10px 20px;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  transition-property: all;
  cursor: pointer;
  background-blend-mode: overlay;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: rgba(31, 47, 71, 0.25) 0px 20px 40px,
      rgba(0, 0, 0, 0.1) 0px 1px 5px,
      rgba(255, 255, 255, 0.4) 0px 0px 0px 0.5px inset;
  }
`

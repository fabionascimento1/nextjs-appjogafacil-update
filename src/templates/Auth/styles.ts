import styled from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'

export const Wrapper = styled.div`
  display: flex;
  padding: 10rem 2rem;

  ${media.lessThan('medium')`
    flex-direction: column;
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
  ${HeadingStyles.Wrapper} {
    margin-bottom: 2.8rem;
  }
`

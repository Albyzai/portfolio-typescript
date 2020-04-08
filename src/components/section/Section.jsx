import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    margin-bottom: 5rem;
    @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}em) {
    margin-bottom: 10rem;
  }
`
const Section = ({className, children}) => (
    <StyledSection className={className}>
        {children}
    </StyledSection>
)

export default Section
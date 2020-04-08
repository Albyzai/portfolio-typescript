import React from 'react'
import styled from 'styled-components'
import Heading from './../heading/Heading'
import { Header } from 'semantic-ui-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from './../section/Section'

// const StyledRow = styled(Grid.Row)`

// `

const ImageContainer = styled.div`
    background: url('https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80');
    background-size: cover;
    position: relative;
    width: 100vw;
    height: 400px;

`

const TextBox = styled.div`
    position: relative;
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    width: 80%;
    bottom: -50%;
    padding: 1em 2em;
    margin: -150px auto 0 auto;

    @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}px) {
    width: 60%
  }
`

const CTAButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.secondary};
  height: 50px;
  font-weight: ${(props) => props.theme.fonts.black};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.headingFamily};
  font-size: ${(props) => props.theme.fonts.h2Size};
  flex-grow: 1;
  cursor: pointer;
`;

const CTALink = styled.a`
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.bodyFamily};
  font-size: ${(props) => props.theme.fonts.h2Size};
  color: ${(props) => props.theme.colors.secondary};
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  flex-grow: 1;
`;

const CTAWrapper = styled.div`
    margin-top: 50px;
    display: flex;
`

const DemoSection = () => {
    const text = "Proin ac quam et lectus vestibulum blandit. Nunc maximus nibh at placerat tincidunt. Nam sem lacus, ornare non ante sed, ultricies fringilla massa. Ut congue, elit non tempus elementum, sem risus tincidunt diam, vitae sodales diam ipsum vitae purus. Fusce tristique erat nulla, vel viverra mi auctor non. Integer ante lorem, dictum at felis at, bibendum egestas augue. Aenean vestibulum lacus dolor, id tincidunt arcu pellentesque ut. Mauris sed venenatis diam, quis aliquam odio. Mauris lobortis augue placerat elit ultrices, non laoreet nunc semper. "
    return (
        <Section>
            <ImageContainer>
            
            </ImageContainer>
            <TextBox>
            <Header as='h2'>
                CHECK IT OUT
            </Header>
            {text}
            <CTAWrapper>
                <CTAButton>
                    DEMO
                </CTAButton>
                <CTALink>
                <FontAwesomeIcon icon={["fal", "code"]} /> View source
                </CTALink>
            </CTAWrapper>
        </TextBox>
        </Section>
        
    )

}

export default DemoSection
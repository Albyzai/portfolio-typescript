import React from "react";
import styled from "styled-components";
import Section from './../section/Section'
import Heading from './../heading/Heading'
import { Grid } from 'semantic-ui-react'
import "react-awesome-slider/dist/styles.css";


const HeroSection = styled(Section)`
    height: 30vh;
    width: 100vw;
    background: ${props => props.theme.colors.secondary};

    @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}em) {
          height: 60vw;
  }
`

const StyledGrid = styled(Grid)`
    height: 100%;
    display: flex;
    flex-direction: row;
`

const StyledHeading = styled(Heading)`
align-self: flex-end;
`

const BlogHero = () => {

  return (
      <HeroSection>
          <StyledGrid container>
              <StyledHeading>
                  BLOG
              </StyledHeading>
          </StyledGrid>
      </HeroSection>
  );
};

export default BlogHero;

import React from "react";
import styled from "styled-components";
import { Grid } from 'semantic-ui-react'
const StyledHeading = styled.h1`
  font-family: ${props => props.theme.fonts.headingFamily};
  color: ${props => props.theme.colors.white};
  font-weight: ${props => props.theme.fonts.black};
  ${props => props.underline ? 'display: inline-block' : ''};

  ${props => (props.center ? "text-align: center" : "")};
  ${props => {
    switch (props.as) {
      case "h1":
        return `font-size: ${props.theme.fonts.h1Size};`;
      case "h2":
        return `font-size: ${props.theme.fonts.h2Size};`;
      default: return '';
    }
  }}
`;

const Underline = styled.div`
  height: 4px;
  background: ${props => props.theme.colors.primary};
`;

const Wrapper = styled.div`
    margin: auto;
    display: block;
`;

const CenteredCol = styled(Grid.Column)`
    text-align: center;
`

const Heading = ({ className, as, children, underline, center, sectionHeading }) => {
  
  let heading;

  if(sectionHeading) {
      heading = (
        <Grid.Row center="xs">
            <CenteredCol lg={3} md={3} xs={6}>
                <Wrapper>

                <StyledHeading underline={underline} className={className} as={as} center={center}>
                    {children}
                </StyledHeading>
                {underline ? <Underline /> : null }
                </Wrapper>
            </CenteredCol>
        </Grid.Row>
    )
  } else {
      heading = (
        <StyledHeading
        underline={underline}
        className={className}
        as={as}
        center={center}
      >
        {children}
      </StyledHeading>
      )
  }

  return heading
};

export default Heading;

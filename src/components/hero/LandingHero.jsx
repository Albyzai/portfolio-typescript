import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from './../section/Section'
import { Grid, Header } from 'semantic-ui-react'

const StyledHeaderSection = styled(Section)`
  background: ${props => props.theme.colors.secondary};
  height: 100vh;
`;

const StyledGrid = styled(Grid)`
  height :100%;
`

// const HeroContent = styled.div`
//   margin-top: 150px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// `;

// const WelcomeText = styled.h1`
//   font-family: ${props => props.theme.fonts.headingFamily};
//   font-size: ${props => props.theme.fonts.h1Size};
//   color: ${props => props.theme.colors.white};
//   font-weight: ${props => props.theme.fonts.regular};
//   text-align: center;
// `;

const NameSpan = styled.span`
  color: ${props => props.theme.colors.primary};
  font-weight: ${props => props.theme.fonts.bold};
`;

const ProjectsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid ${props => props.theme.colors.white};
  height: 50px;
  padding: 0 30px;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bodyFamily};
  font-weight: ${props => props.theme.fonts.bold};
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2em;
  color: #fff;
  transition: 0.3s ease-in-out;
  margin: 0 20px;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const SocialIconsWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  text-align: center;
  left: 50%;
  transform: translateX(-50%);
`;


const LandingHero = () => {
  return (
    <StyledHeaderSection>
      <StyledGrid container verticalAlign='middle'>
        <Grid.Row centered>
          <Grid.Column computer={8} tablet={8} mobile={8}>
            <Header as ='h1' textAlign='center' >
              Hello, I am <NameSpan>Jonas Mohr</NameSpan>. I am a developer
            </Header>
            <ProjectsButton>VIEW MY WORK</ProjectsButton>
          </Grid.Column>
        </Grid.Row>
        <SocialIconsWrapper>
           <Icon icon={["fab", "github"]} />
           <Icon icon={["fab", "linkedin"]} />
         </SocialIconsWrapper>
      </StyledGrid>
    </StyledHeaderSection>
  );
};

// const LandingHero = () => {
//   return (
//     <Section>
//     <StyledHeaderGrid fluid={true}>
//       <Grid>
//         <Grid.Row center="xs">
//           <Grid.Column xs={8}>
//             <HeroContent>
//               <WelcomeText>
//                 Hello, I am <NameSpan>Jonas Mohr</NameSpan>. I am a developer
//               </WelcomeText>
//               <ProjectsButton>VIEW MY WORK</ProjectsButton>
//             </HeroContent>
//           </Grid.Column>
//         </Grid.Row>
//         <SocialIconsWrapper>
//           <Icon icon={["fab", "github"]} />
//           <Icon icon={["fab", "linkedin"]} />
//         </SocialIconsWrapper>
//       </Grid>
//     </StyledHeaderGrid>
//     </Section>
//   );
// };

export default LandingHero;

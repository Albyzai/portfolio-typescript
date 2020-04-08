import React from "react";
import styled from "styled-components";
import { Grid, Image, Header } from "semantic-ui-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "./../section/Section";
import RightShape from "./../../assets/images/diagonalshape.svg";
import BottomShape from "./../../assets/images/bottomdiagonal.svg";
import Carousel from './../carousel/Carousel'
// carousel
import {
  Slide,
} from "pure-react-carousel";

// assets
import ReactIcon from "./../../assets/icons/react.svg";
import AngularIcon from "./../../assets/icons/angular.svg";
import HtmlIcon from "./../../assets/icons/html5.svg";
import CssIcon from "./../../assets/icons/css3.svg";
import NodejsIcon from "./../../assets/icons/nodejs.svg";
import GraphqlIcon from "./../../assets/icons/graphql.svg";
import MongodbIcon from "./../../assets/icons/mongodb.svg";
// import LaravelIcon from "./../../assets/icons/laravel.svg";


const iconsMap = {
  html5: HtmlIcon,
  css3: CssIcon,
  react: ReactIcon,
  nodejs: NodejsIcon,
  mongodb: MongodbIcon,
  graphql: GraphqlIcon,
  angular: AngularIcon,
};

const stack = [
  "html5",
  "css3",
  "react",
  "nodejs",
  "mongodb",
  "graphql",
  "angular",
];

const RightContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.computer}px) {
    z-index: 1;
    height: 100vh;
    max-height: 100vh;
        padding-right:3em;
  }
`;

const DiagonalShape = styled.img`
  position: absolute;
  z-index: 10000;
  right: calc(1rem - 1px);
  bottom: 0;
  height: 100vh;
  display: none;

  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.computer}px) {
    display: block;
  }
`;

const BottomDiagonalShape = styled.img`
  position: absolute;
  bottom: -1px;
  right: 0;
  width: 100vw;
  z-index: 10000;

  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.computer}px) {
    display: none;
  }
`;

const BodyText = styled.p`
  font-family: ${(props) => props.theme.fonts.bodyFamily};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fonts.bodySize};
  line-height: 24px;
`;

const SubTitle = styled.div`
  margin-top: 50px;
  font-family: ${(props) => props.theme.fonts.headingFamily};
  font-weight: ${(props) => props.theme.fonts.bold};
  font-size: ${(props) => props.theme.fonts.h2Size};
  color: ${(props) => props.theme.colors.white};
  text-align: left;
`;

const CTAButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
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
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  flex-grow: 1;
`;

const CTAWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-self: flex-end;
  margin-top: auto;
`;

const ProjectTitle = styled(Header)`
  padding-top: 50px;
  &:before {
    content: "<";
    color: ${(props) => props.theme.colors.primary};
  }

  &:after {
    content: "/>";
    color: ${(props) => props.theme.colors.primary};
  }

  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.computer}px) {
    padding-top: 150px;
  }
`;

const TechStackWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: ${(props) => props.theme.colors.white};
  margin-top: 10px;
`;

const TechIcon = styled.img`
  height: 30px;
`;

const StyledCodeIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
`;

const images = [
  "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80",
  "https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80",
  "https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80",
];


// const CarouselCol = styled(Grid.Column)`
//   position: relative;
//   height: 60vh;
//   background: ${(props) => props.theme.colors.secondary};

//   @media only screen and (min-width: ${(props) =>
//       props.theme.flexboxgrid.breakpoints.sm}em) {
//     height: 100%;
//   }
// `;
// const ProjectDescriptionCol = styled(Grid.Column)`
//   height: 40%;
//   width: ${(props) => props.theme.flexboxgrid.breakpoints.sm}em;
//   @media only screen and (min-width: ${(props) =>
//       props.theme.flexboxgrid.breakpoints.sm}em) {
//     height: 100%;
//   }
// `;

const HeroSection = styled(Section)`
  height: 100vh;
  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}px) {
    height: auto;
  }
`;
// const HeroRow = styled(Grid.Row)`
//   height: 100%;
// `;

const CarouselColumn = styled(Grid.Column)`
  /* background-color: ${(props) => props.theme.colors.secondary}; */
  height: 60vh;
  overflow-y: hidden;
  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.computer}px) {
    height: 100vh;
  }
`;

const DescriptionColumn = styled(Grid.Column)`
  height: 55vh;
  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.computer}px) {
    height: 100vh;
  }
`;

// const StyledCarouselProvider = styled(CarouselProvider)`
//   background-color: ${props => props.theme.colors.secondary};
//   height: 100%;
//   overflow: hidden;
// `

// const CarouselDotGroup = styled(DotGroup)`


//   button {
//     margin: 0 5px;
//     width: 15px;
//     height: 15px;
//     border: none;
//     border-radius: 50%;
//     background: ${props => props.theme.colors.primary};

//     &:disabled {
//       opacity: .5;
//       :hover {
//         opacity: 1;
//       }
//     }
//   }
// `;

// const CarouselButtonBack = styled(ButtonBack)`
//   color: ${props => props.theme.colors.primary};
//   border:none;
//   background: none;
//   padding: 0;
//   font-size: 1.5em;

//     &:focus { outline: none; }
// `

// const CarouselButtonNext = styled(ButtonNext)`
//   border:none;
//   background: none;
//   padding: 0;
//   color: ${props => props.theme.colors.primary};
//   font-size: 1.5em;

//   &:focus { outline: none; }
// `

// const CarouselNavigationWrapper = styled.div`
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   bottom: 120px;
//   left: 50%;
//   transform: translateX(-50%);
//   z-index: 10000000;

//   @media only screen and (min-width: ${(props) =>
//       props.theme.breakpoints.computer}px) {
//         bottom: 30px;
//   }
// `

// const StyledIcon = styled(Icon)`
//   margin: 0!important;
//   &i.icon {
//     margin: 0;

//   }
//   i.icon {
//     margin: 0;
//   }
// `

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`

const ProjectHero = () => (
    <HeroSection>
      <Grid>
        <Grid.Row>
          <CarouselColumn computer={10} tablet={16} mobile={16}>
            <DiagonalShape src={RightShape} />
            <BottomDiagonalShape src={BottomShape} />
          <Carousel>
          {images.map((image, index) => (
                  <Slide key={index} index={index}>
                    <StyledImage src={image} />
                  </Slide>
                ))}
          </Carousel>
            
          </CarouselColumn>
          <DescriptionColumn
            computer={6}
            tablet={16}
            mobile={16}
          >
                      <RightContent>
            <ProjectTitle as='h2'>Would You Rather</ProjectTitle>
            <BodyText>
              Quisque suscipit ipsum est, eu venenatis leo ornare eget. Ut porta
              facilisis elementum. Sed condimentum sed massa quis ullamcorper.
              Donec at scelerisque neque. Pellentesque sagittis, massa sodales
              sodales finibus, felis ligula tempus lorem, eu porttitor ex lacus
              vel felis. Vivamus egestas scelerisque consectetur. Vestibulum
              faucibus enim urna, fermentum aliquet quam euismod non. Proin
              cursus, libero quis semper elementum, diam metus eleifend magna,
              in placerat sem velit vitae lacus. Vivamus tempor fringilla nisl,
              id condimentum felis dignissim nec.
            </BodyText>
            <SubTitle>STACK</SubTitle>
            <TechStackWrapper>
              {stack.map((icon) => (
                <TechIcon key={icon} alt={icon} src={iconsMap[icon]} />
              ))}
            </TechStackWrapper>
            <CTAWrapper>
              <CTAButton>DEMO</CTAButton>
              <CTALink>
                <StyledCodeIcon icon={["fal", "code"]} /> View source
              </CTALink>
            </CTAWrapper>
          </RightContent>
          </DescriptionColumn>
        </Grid.Row>
      </Grid>
    </HeroSection>
  );



export default ProjectHero;

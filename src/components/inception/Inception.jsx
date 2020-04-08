import React from "react";
import Section from "../section/Section";
import styled from "styled-components";
import { Header, Image } from "semantic-ui-react";
import Carousel from "../carousel/Carousel";
import { Slide } from "pure-react-carousel";

const TextBox = styled.div`
  display: flex;
  position: relative;
  justify-content: ${(props) =>
    props.alignment === "left" ? "flex-end" : "flex-start"};
  width: 90%;
  ${(props) => (props.alignment === "left" ? "" : "margin-left: 10%;")}
  margin-top: -50px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  z-index: 100000;
  transform: translateX(0);
  min-height: 200px;
  padding: 2em 0;

  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}px) {
    position: absolute;
    width: 100%;
    top: 50%;
    margin-left: 0;
    transform: ${(props) =>
      props.alignment === "left"
        ? "translateX(-50%) translateY(-50%)"
        : "translateX(50%) translateY(-50%)"};
    margin-top: 0;
    min-height: 60%;
  }
`;

const TextBoxContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  padding: 0 2em;
  line-height: 1.5em;

  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}px) {
    height: 100%;
    width: 50%;
    padding-left: 2em;

    align-self: flex-start;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}px) {
    position: absolute;
    height: 600px;
    top: 0;
    width: 70%;
    ${(props) => (props.alignment === "left" ? "right: 0" : "left: 0")};
  }
`;

// const StyledCol = styled(Grid.Column)`
//     position: relative;

//     @media only screen and (min-width: ${(props) =>
//       props.theme.breakpoints.mobile}px) {
//         height: 600px;
//     }
// `

const StyledSection = styled(Section)`
  position: relative;
  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}px) {
    height: 600px;
  }
`;
const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const StyledCarousel = styled(Carousel)`
    width: 100%;
    height: 100%;
`


const Inception = ({ title, text, alignment, images }) => {

    console.log('images incption: ', images)
  return (
    <StyledSection>
      <CarouselWrapper alignment={alignment}>
        <StyledCarousel
        >
          {images.map((image, index) => (
            <Slide key={index} index={index}>
              <StyledImage src={image} />
            </Slide>
          ))}
        </StyledCarousel>
        {/* <StyledCarousel fillParent={true} images={images} /> */}
      </CarouselWrapper>
      <TextBox alignment={alignment}>
        <TextBoxContentWrapper>
          <Header as="h2">{title}</Header>
          {text}
        </TextBoxContentWrapper>
      </TextBox>
    </StyledSection>
  );
};

export default Inception;

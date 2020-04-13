import React from "react";
import styled from "styled-components";
import { Icon } from "semantic-ui-react";
import {
  CarouselProvider,
  Slider,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const CarouselNavigationWrapper = styled.div<{fullWidthNav : boolean, navAlignment: string}>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000000;
  background: rgba(46, 41, 78, 0.5);
  padding: 1em;
  ${props => props.fullWidthNav ? 'width: 100%' : ''};
  ${props => props.fullWidthNav ? '' : 'left: 50%'};
  ${props => props.fullWidthNav ? '' : 'transform: translateX(-50%)'};
  ${props => {
      switch(props.navAlignment) {
          case 'top':
              return 'top: 0'
          case 'bottom':
              return 'bottom: 0'
          case 'aboveBottom':
              return 'bottom: 120px'
      }
  }};

  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.computer}px) {
  }
`;

const StyledIcon = styled(Icon)`
  margin: 0 !important;
  &i.icon {
    margin: 0;
  }
  i.icon {
    margin: 0;
  }
`;

const CarouselDotGroup = styled(DotGroup)`
  button {
    margin: 0 5px;
    width: 15px;
    height: 15px;
    border: none;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.primary};

    &:disabled {
      opacity: 0.5;
      :hover {
        opacity: 1;
      }
    }
  }
`;

const CarouselButtonBack = styled(ButtonBack)`
  color: ${(props) => props.theme.colors.primary};
  border: none;
  background: none;
  padding: 0;
  font-size: 1.5em;

  &:focus {
    outline: none;
  }
`;

const CarouselButtonNext = styled(ButtonNext)`
  border: none;
  background: none;
  padding: 0;
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5em;

  &:focus {
    outline: none;
  }
`;

interface IProps {
  className: string;
  slides: Object[];
  children: any;
  isPlaying: boolean;
  infinite: boolean;
  fullWidthNav: boolean;
  navAlignment: string;
}
const Carousel = ({
  className,
  isPlaying,
  infinite,
  slides,
  children,
  fullWidthNav,
  navAlignment
}: IProps) => {
  console.log("length: ", children.length);
  return (
    <CarouselProvider
      className={className}
      isPlaying={isPlaying}
      infinite={infinite}
      totalSlides={children.length}
      naturalSlideWidth={100}
      naturalSlideHeight={125}
    >
      <Slider>{children}</Slider>
      <CarouselNavigationWrapper fullWidthNav={fullWidthNav} navAlignment={navAlignment}>
        <CarouselButtonBack>
          <StyledIcon name="angle left" link size="large" />
        </CarouselButtonBack>
        <CarouselDotGroup />
        <CarouselButtonNext>
          <StyledIcon name="angle right" link size="large" />
        </CarouselButtonNext>
      </CarouselNavigationWrapper>
    </CarouselProvider>
  );
};

export default Carousel;

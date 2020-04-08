import React from 'react'
import styled from 'styled-components'
import { Icon } from 'semantic-ui-react'
import {
    CarouselProvider,
    Slider,
    ButtonBack,
    ButtonNext,
    DotGroup,
  } from "pure-react-carousel";
  import "pure-react-carousel/dist/react-carousel.es.css";

  const CarouselNavigationWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10000000;

  @media only screen and (min-width: ${(props) =>
      props.theme.breakpoints.computer}px) {
        bottom: 30px;
  }
`

const StyledIcon = styled(Icon)`
  margin: 0!important;
  &i.icon {
    margin: 0;

  }
  i.icon {
    margin: 0;
  }
`

const CarouselDotGroup = styled(DotGroup)`


  button {
    margin: 0 5px;
    width: 15px;
    height: 15px;
    border: none;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};

    &:disabled {
      opacity: .5;
      :hover {
        opacity: 1;
      }
    }
  }
`;

const CarouselButtonBack = styled(ButtonBack)`
  color: ${props => props.theme.colors.primary};
  border:none;
  background: none;
  padding: 0;
  font-size: 1.5em;

    &:focus { outline: none; }
`

const CarouselButtonNext = styled(ButtonNext)`
  border:none;
  background: none;
  padding: 0;
  color: ${props => props.theme.colors.primary};
  font-size: 1.5em;

  &:focus { outline: none; }
`

interface IProps {
    className: string,
    slides: Object[]
    children: any,
    isPlaying: boolean,
    infinite: boolean,
}
const Carousel = ({className, isPlaying, infinite, slides, children} : IProps) => {
    console.log('length: ', children.length)
    return(
        <CarouselProvider className={className} isPlaying={isPlaying} infinite={infinite} totalSlides={children.length} naturalSlideWidth={100}
        naturalSlideHeight={125}>
            <Slider>
                {children}
              </Slider>
<CarouselNavigationWrapper>
                <CarouselButtonBack >
                  <StyledIcon name='angle left' link size='large' />
                </CarouselButtonBack>
                <CarouselDotGroup />
                <CarouselButtonNext >
                <StyledIcon name='angle right' link size='large' />
                </CarouselButtonNext>
              </CarouselNavigationWrapper>
        </CarouselProvider>
    )
}

export default Carousel
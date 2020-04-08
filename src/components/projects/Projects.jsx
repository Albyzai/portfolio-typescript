import React from "react";
import { Grid, Header } from 'semantic-ui-react'
import styled from "styled-components";
// import Heading from "./../heading/Heading";
import Section from "./../section/Section";

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

const projectsData = [
  {
    name: "Would You Rather asdsad sdasd asd sa",
    stack: ["html5", "css3", "react", "nodejs", "mongodb"],
    thumbnail: "./media/images/wouldyourather.png",
  },
  {
    name: "Would You Rather1",
    stack: ["html5", "css3", "react", "nodejs", "mongodb"],
    thumbnail: "./media/images/wouldyourather.png",
  },
  {
    name: "Would You Rather2",
    stack: ["html5", "css3", "react", "nodejs", "mongodb"],
    thumbnail: "./media/images/wouldyourather.png",
  },
  {
    name: "Would You Rather3",
    stack: ["html5", "css3", "react", "nodejs", "mongodb"],
    thumbnail: "./media/images/wouldyourather.png",
  },
];

const TopHover = styled.div`
  position: absolute;
  width: 60%;
  background: ${(props) => props.theme.colors.secondary};
  opacity: 0.95;
  z-index: 2;
  top: 0;
  left: -60%;
  transition: 0.3s ease-in-out;
  text-align: left;
`;

const BottomHover = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  background: ${(props) => props.theme.colors.secondary};
  opacity: 0.95;
  height: 100px;
  z-index: 2;
  bottom: -100px;
  transition: 0.3s ease-in-out;
`;

const StyledProject = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-size: cover;
  height: 300px;
  margin-top: 30px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    z-index: 10;
    transform: scale(1.1);
    ${TopHover} {
      transform: translateX(100%);
    }

    ${BottomHover} {
      transform: translateY(-100px);
    }
  }
`;

const SmallText = styled.small`
  margin-top: 20px;
  font-family: ${(props) => props.theme.fonts.bodyFamily};
  font-weight: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.white};
  font-size: 0.6em;
`;

const ProjectTitle = styled(Header)`
  padding: 0 20px;
`;

const TechStackWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 60%;
  color: ${(props) => props.theme.colors.white};
  margin-top: 10px;
`;

const TechIcon = styled.img`
  height: 30px;
`;

const Projects = () => {
  const projects = projectsData.map((project) => (
      <Grid.Column computer={6} tablet={6} mobile={10}>
        <StyledProject url={project.thumbnail}>
          <TopHover>
            <ProjectTitle forwardedAs="h2">{project.name}</ProjectTitle>
          </TopHover>
          <BottomHover>
          <SmallText>MADE WITH</SmallText>
           <TechStackWrapper>
             {project.stack.map((icon) => (
               <TechIcon key={icon} alt={icon} src={iconsMap[icon]} />
             ))}
           </TechStackWrapper>
          </BottomHover>
        </StyledProject>
      </Grid.Column>
  ));

  return (
    <Section>
      <Grid>
        <Grid.Row centered>
          <Grid.Column computer={10} tablet={10} mobile={10}>
            <Header textAlign='center'>
              PROJECTS
            </Header>

          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>{projects}</Grid.Row>
      </Grid>
    </Section>
  );
};

export default Projects;

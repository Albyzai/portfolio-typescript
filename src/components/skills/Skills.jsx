import React from "react";
import { Grid, Header, Image } from 'semantic-ui-react'
import styled from "styled-components";
import Section from "./../section/Section";

// assets
import ReactIcon from "./../../assets/icons/react.svg";
import AngularIcon from "./../../assets/icons/angular.svg";
import HtmlIcon from "./../../assets/icons/html5.svg";
import CssIcon from "./../../assets/icons/css3.svg";
import NodejsIcon from "./../../assets/icons/nodejs.svg";
import GraphqlIcon from "./../../assets/icons/graphql.svg";
import MongodbIcon from "./../../assets/icons/mongodb.svg";
import LaravelIcon from "./../../assets/icons/laravel.svg";

const icons = [
  {
    path: ReactIcon,
    name: "React",
  },
  {
    path: AngularIcon,
    name: "Angular",
  },
  {
    path: HtmlIcon,
    name: "HTML 5",
  },
  {
    path: CssIcon,
    name: "CSS 3",
  },
  {
    path: NodejsIcon,
    name: "NodeJS",
  },
  {
    path: LaravelIcon,
    name: "Laravel",
  },
  {
    path: GraphqlIcon,
    name: "GraphQL",
  },
  {
    path: MongodbIcon,
    name: "MongoDB",
  },
];

const StyledIcon = styled(Image)`
  margin: auto;
  max-height: 50px;
`;

const PaddedColumn = styled(Grid.Column)`
  padding-bottom: 4em;
`

const Skills = () => (
  <Section>
      <Grid container>
        <Grid.Row centered>
          <Grid.Column computer={10} tablet={10} mobile={10}>
            <Header textAlign='center'>
              SKILLS
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
        {icons.map((icon) => (
             <PaddedColumn computer={4} tablet={4} mobile={8} key={icon.name}>
               <StyledIcon src={icon.path} />
               <Header as="h5" textAlign='center'>{icon.name}</Header>
             </PaddedColumn>
           ))}
          
        </Grid.Row>
      </Grid>
    </Section>
)

export default Skills;

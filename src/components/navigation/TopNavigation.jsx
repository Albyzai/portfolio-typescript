import React from "react";
import Logo from "./../../assets/images/logo.svg";
import styled from "styled-components";
import { Menu, Button, Image, Grid } from 'semantic-ui-react'

import { Link } from "react-router-dom";

const StyledLogo = styled(Image)`
  &.ui.image {
    max-width: 75%;
  }
`

const TopNavigation = () => {
  return (
      <Menu fixed='top'>
        <Grid container>
        <Menu.Item as={Link} to='/'>
          <StyledLogo src={Logo} />
        </Menu.Item>

        <Menu.Menu position='right'>
          <Menu.Item as='a' href='#'>
            PROJECTS
          </Menu.Item>

          <Menu.Item as={Link} to='/blog'>
            BLOG
          </Menu.Item>

          <Menu.Item>
            <Button primary as={Link} to='/cv'>CV</Button>
          </Menu.Item>

        </Menu.Menu>
        </Grid>
      </Menu>
  );
};

export default TopNavigation;

import React from 'react'
import styled from 'styled-components'
import Section from './../section/Section'

import { Grid, Header } from 'semantic-ui-react'
// assets
import postOverlay from './../../assets/images/blogmask.svg'

const blogData = [
    {
        title: 'Blog post 1',
        createdAt: new Date(),
        thumbnail: './media/images/blogimage.jpg'
    },
    {
        title: 'Blog post 2',
        createdAt: new Date(),
        thumbnail: './media/images/blogimage.jpg'
    }
]

const StyledPost = styled.div`
    position: relative;
    background-image: ${props => `url(${props.url})`};
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    margin-top: 30px;
    overflow: hidden;
    cursor: pointer;
    
    &:after {
        content: '';
        position: absolute;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background: url(${postOverlay});
        background-size: cover;
        z-index: 2;
    }
`

const SmallText = styled.small`
    position: relative;
    z-index: 100;
    margin-top: 20px;
    font-family: ${props => props.theme.fonts.bodyFamily};
    font-weight: ${props => props.theme.fonts.bold};
    color: ${props => props.theme.colors.white};
    font-size: .6em;
`

const StyledHeading = styled(Header)`
    position: relative;
    z-index: 100;
    padding: 0 20px;
`

const Blog = () => {

        const posts = blogData.map(post => (
        <Grid.Column computer={8} tablet={8} mobile={10} key={post.title}>
            <StyledPost url={post.thumbnail}>
                <StyledHeading forwardedAs='h2' >
                    {post.title}
                </StyledHeading>
                <SmallText>
                    {post.createdAt.getDate() + ' - ' + post.createdAt.getFullYear()}
                </SmallText>
            </StyledPost>
        </Grid.Column>
    ))

    return (
        <Section>
      <Grid container>
        <Grid.Row centered>
          <Grid.Column computer={10} tablet={10} mobile={10}>
            <Header textAlign='center'>
              BLOG
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered>
            {posts}
        </Grid.Row>
      </Grid>
    </Section>
    )
}

export default Blog
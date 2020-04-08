import React from 'react'
import styled from 'styled-components'
import { Grid, Header } from 'semantic-ui-react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// assets
import FooterTriangle from './../../assets/images/footertriangle.svg'



const StyledFooter = styled.footer`
    position: relative;
    width: 100%;
    height: 900px;
    background: ${props => props.theme.colors.primary};
    margin-top: 200px;
`

const SocialFooter = styled.div`
    background: #A24F13;
    height: 200px;
    width: 100%;
    bottom: 0;
    position: absolute;
`

const SVGTriangle = styled.img`
    top: 0;
    margin-top: -1px;
    width: 100%;
`

const FooterHeading = styled(Header)`
    &.ui.header {
        margin-top: 75px;
    }
`

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const StyledInput = styled.input`
    border: none;
    margin-bottom: 25px;
    padding: 15px 10px;
`

const StyledTextArea = styled.textarea`
    border: none;
    padding: 15px 10px;
    min-height: 100px;
`

const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin-top: 10px;
  align-self: flex-end;
  border: 4px solid ${props => props.theme.colors.white};
  height: 50px;
  padding: 0 30px;
  cursor: pointer;
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts.bodyFamily};
  font-weight: ${props => props.theme.fonts.bold};
`;

const SocialWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 400px;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
`

const SocialButton = styled.div`
    background: ${props => props.theme.colors.primary};
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
`

const ScrollTopButton = styled.div`
    background: ${props => props.theme.colors.white};
    width: 50px;
    height: 50px;
    position: absolute;
    top: -25px;
    margin-left: -25px;
    left: 50%;
    text-align: center; 
`

const Icon = styled(FontAwesomeIcon)`
    margin: 13px 0;
    font-size: 24px;
    color: ${props => props.theme.colors.white};
`

const ScrollIcon = styled(Icon)`
    color: ${props => props.theme.colors.background};
`


const Footer = () => {

    return (
        <StyledFooter>
            <SVGTriangle src={FooterTriangle} />
            <Grid container>
                <Grid.Row centered >
                    <Grid.Column computer={10} tablet={10} mobile={10}>
                        <FooterHeading textAlign='center'>
                            CONTACT
                        </FooterHeading>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row centered >
                    <Grid.Column computer={6} mobile={8}>
                        <FormWrapper>
                            <StyledInput placeholder="Name" type="text" />
                            <StyledInput placeholder="Email" type="email" />
                            <StyledTextArea placeholder="Message" />
                            <SubmitButton>
                                SUBMIT
                            </SubmitButton>
                        </FormWrapper>
                    </Grid.Column>

                </Grid.Row>
            </Grid>
            <SocialFooter>
                <SocialWrapper>
                    <ScrollTopButton>
                    <ScrollIcon icon={["far", "angle-double-up"]} />
                    </ScrollTopButton>
                    <SocialButton>
                    <Icon icon={["fab", "linkedin-in"]} />
                    </SocialButton>
                    <SocialButton>
                    <Icon icon={["fab", "github-alt"]} />
                    </SocialButton>
                    <SocialButton>
                        
                    </SocialButton>
                    <SocialButton>
                        
                    </SocialButton>
                </SocialWrapper>
            </SocialFooter>
        </StyledFooter>
        
    )
}
// const Footer = () => {

//     return (
//         <StyledFooter>
//             <SVGTriangle src={FooterTriangle} />
//             <Grid fluid={true}>
//                 <FooterHeading sectionHeading={true}>
//                     CONTACT
//                 </FooterHeading>
//                 <Grid.Row center="xs">
//                     <Grid.Column md={6} xs={8}>
//                         <FormWrapper>
//                             <StyledInput placeholder="Name" type="text" />
//                             <StyledInput placeholder="Email" type="email" />
//                             <StyledTextArea placeholder="Message" />
//                             <SubmitButton>
//                                 SUBMIT
//                             </SubmitButton>
//                         </FormWrapper>
//                     </Grid.Column>

//                 </Grid.Row>
//             </Grid>
//             <SocialFooter>
//                 <SocialWrapper>
//                     <ScrollTopButton>
//                     <ScrollIcon icon={["far", "angle-double-up"]} />
//                     </ScrollTopButton>
//                     <SocialButton>
//                     <Icon icon={["fab", "linkedin-in"]} />
//                     </SocialButton>
//                     <SocialButton>
//                     <Icon icon={["fab", "github-alt"]} />
//                     </SocialButton>
//                     <SocialButton>
                        
//                     </SocialButton>
//                     <SocialButton>
                        
//                     </SocialButton>
//                 </SocialWrapper>
//             </SocialFooter>
//         </StyledFooter>
        
//     )
// }

export default Footer
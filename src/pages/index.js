import * as React from "react"
import styled from "styled-components";
import {Link} from "gatsby";
import Layout from "../components/layout"

import background from "../images/wallpaper3.jpg"




const IndexPage = () => (
  <Layout>
    <Hero>
      <HeroGroup>
        <Title>Learn to <br />design and code React apps</Title>
        <Description>Complete courses about the best tools and design systems. Prototype and build apps with React and Swift.</Description>
          <StyledLink to="/page-2">Watch the video</StyledLink>
      </HeroGroup>
    </Hero>
  </Layout>
)


export default IndexPage

const Hero = styled.div`
  height: 920px;
  background: url(${background});
  background-size: cover;
  background-position: center;
`

const HeroGroup = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 150px 50px;
  text-align: center;
`

const Title = styled.h1`
  margin: 0;
  color: white;
  font-size: 60px;
  line-height: 1.2;
`

const Description = styled.p`
  font-size: 30px;
  line-height: 1.5;
  color: rgba(255,255,255,0.8);
`

///TODO: this is not expected style
const StyledLink = styled(Link)`
  font-size: 17px;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  background: rgba(0,0,0,0.7);
  padding: 9px 20px;
  border: 1px solid rgba(255,255,255, 0.25);
  border-radius: 20px;
`
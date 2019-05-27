import React from "react"
import Layout from "../components/Layout/layout"
import { Flex, Box } from '@rebass/grid'
import Img from "gatsby-image"
import SlateShopPage from '../images/shopp.png';
import SlateHomePage from '../images/home.png';
import turbo from '../images/turbo.png';
import { graphql } from "gatsby"






import '../styles/index.scss';


export default () => (
  <Layout>
    <p className="font-color-light-gray-super">Developer/Designer. Frontend Engineer.  Currently studying computer science/design at Northeastern University. </p>
<hr></hr>

    <h1>Latest Work</h1>
    <h2>Slate</h2>
    <Flex justifyContent="center">
      <Box p={5}
        width={[1, 1, 1 / 2]}
      >
<img src={SlateHomePage}  />     </Box>
      <Box p={5}
        width={[1, 1, 1 / 2]}
      >
<img src={SlateShopPage}  />       </Box>
    </Flex>
    <h2>Turbonomic</h2>
    <Flex justifyContent="center">
      <Box p={5}
        width={[1, 1, 1 / 2]}
      >
<img src={turbo}  />     </Box>
      <Box p={5}
        width={[1, 1, 1 / 2]}
      >
<img src={turbo}  />       </Box>
    </Flex>




  </Layout>
)


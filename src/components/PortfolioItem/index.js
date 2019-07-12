import React from "react"
import { Link } from "gatsby"
import { Flex, Box } from "@rebass/grid"
import Img from "gatsby-image"



const PortfolioItem = props => {
  return ( (
  <>
  <h1>{props.title}</h1>
  <Flex     

     justifyContent="center" flexWrap="wrap">
      <Box p={5} width={[1, 1, 1 / 2]}>
        <img src={props.leftImage} />{" "}
      </Box>
      <Box p={5} width={[1, 1, 1 / 2]}>
      <img src={props.rightImage} />{" "}
      </Box>
    </Flex>
  <h3>Goal:</h3>
  <p className="goal-text">{props.goal}</p>
  <h3>Tech:</h3>
      <h4>{props.stack}</h4>
    <hr />
  </>
)
);
};

export default PortfolioItem

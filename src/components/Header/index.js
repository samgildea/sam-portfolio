import React from "react"
import { Link } from "gatsby"
import { Flex, Box } from "@rebass/grid"
import Img from "gatsby-image"
import "../Header/index.scss"


const HomeHeader = props => {
  return (
    <>
      <Flex className="home-header" alignItems="center">
        <Box>
          {" "}
          <div>
            {" "}
            <h1>Sam Gildea</h1>
            <p className="font-color-light-gray-super">
              Developer/Designer. Frontend Engineer. Currently studying computer
              science/design at Northeastern University. Frontend development intern at <a href="https://turbonomic.com/">Turbonomic</a> in Boston.
            </p>{" "}
            <a href="https://github.com/samgildea">github</a>
            <br />
            <a href="https://www.linkedin.com/in/sam-gildea/">linkedin</a>{" "}
          </div>
          <div class="arrow bounce" />
        </Box>
      </Flex>
    </>
  )
}

export default HomeHeader

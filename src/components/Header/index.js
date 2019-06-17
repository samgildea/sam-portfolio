import React from "react"
import { Link } from "gatsby"
import { Flex, Box } from "@rebass/grid"
import Img from "gatsby-image"
import "../Header/index.scss"
import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..
AOS.init()

const HomeHeader = props => {
  return (
    <>
      <Flex data-aos="fade-in" className="home-header" alignItems="center">
        <Box>
          {" "}
          <div>
            {" "}
            <h1>Sam Gildea</h1>
            <p className="font-color-light-gray-super">
              Developer/Designer. Frontend Engineer. Currently studying computer
              science/design at Northeastern University.{" "}
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

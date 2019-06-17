import React from "react"
import Layout from "../components/Layout/layout"
import PortfolioItem from "../components/PortfolioItem"
import { Flex, Box } from "@rebass/grid"
import Img from "gatsby-image"
import HomeHeader from "../components/Header"
import SlateShopPage from "../images/shopp.png"
import SlateHomePage from "../images/home.png"
import turboProduct from "../images/product.png"
import turboCert from "../images/cert.png"
import { graphql } from "gatsby"
import Scene from "../components/ThreeScene"
import "../styles/index.scss"

import AOS from "aos"
import "aos/dist/aos.css" // You can also use <link> for styles
// ..
AOS.init()

export default () => (
  <>
    <HomeHeader />

    <hr />

    <h1>Latest Work</h1>
    <div data-aos="fade">
      {" "}
      <PortfolioItem
        title="Slate"
        leftImage={SlateHomePage}
        rightImage={SlateShopPage}
        stack="HTML, CSS, JAVASCRIPT, REACT.JS, GATSBY.JS, GRAPHQL"
      />{" "}
    </div>

    <div data-aos="fade">
    {" "}

      <PortfolioItem
        title="Turbonomic"
        leftImage={turboProduct}
        rightImage={turboCert}
        stack="HTML, CSS, JAVASCRIPT, PHP"
      />
    </div>
  </>
)

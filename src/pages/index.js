import React from "react"
import Layout from "../components/Layout/layout"
import PortfolioItem from "../components/PortfolioItem"
import { Flex, Box } from "@rebass/grid"
import Img from "gatsby-image"
import SlateShopPage from "../images/shopp.png"
import SlateHomePage from "../images/home.png"
import turbo from "../images/turbo.png"
import { graphql } from "gatsby"
import Scene from '../components/ThreeScene'
import "../styles/index.scss"

export default () => (
  <Layout>
    <p className="font-color-light-gray-super">
      Developer/Designer. Frontend Engineer. Currently studying computer
      science/design at Northeastern University.{" "}
    </p>
    <hr />

    <h1>Latest Work</h1>
    <PortfolioItem
      title="Slate"
      leftImage={SlateHomePage}
      rightImage={SlateShopPage}
      stack="HTML, CSS, JAVASCRIPT, REACT.JS, GATSBY.JS, GRAPHQL"
    />
    <PortfolioItem
      title="Turbonomic"
      leftImage={turbo}
      rightImage={turbo}
      stack="HTML, CSS, JAVASCRIPT, PHP"
    />
  </Layout>
)

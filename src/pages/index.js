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

export default () => (
  <>
    <HomeHeader />

    <hr />

    <h1>Latest Work</h1>
    <div>
      {" "}
      <PortfolioItem
        title="Slate"
        leftImage={SlateHomePage}
        rightImage={SlateShopPage}
        stack="HTML, CSS, JAVASCRIPT, REACT.JS, GATSBY.JS, GRAPHQL"
        goal="Worked with founders to establish brand identity and develop web site.  Built site using Gatsby.js and integrated the Shopify API to control e-commerce functionality.   Connected CMS to allow full customization. "
      />{" "}
    </div>

    <div>
    {" "}

      <PortfolioItem
        title="Turbonomic"
        leftImage={turboProduct}
        rightImage={turboCert}
        stack="HTML, CSS, JAVASCRIPT, PHP"
        goal="Worked with marketing team to update site style and content.  Used Wordpress CMS to create custom templates in PHP, which allowed the marketing team to edit content.  "
      />
    </div>
  </>
)

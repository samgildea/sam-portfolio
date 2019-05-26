import React from "react"
import { Link } from "gatsby";

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: `80%`, padding: `0 1rem` }}>
    <div className="fixed-header">
    <h1 className="links">sam gildea</h1>
    <ul>
    <li><Link className="links link-btn" to="/">home</Link></li>
        <li><Link className="links link-btn" to="/portfolio">portfolio</Link></li>
        <li><Link className="links link-btn" to="/contact">contact</Link></li>
    </ul>
    </div>
    <br>
    </br>
    <br>
    </br>
    <hr></hr>
    {children}
  </div>
)



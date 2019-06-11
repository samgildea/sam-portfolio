import React from "react"
import { Link } from "gatsby"

export default ({ children }) => (
  <>
    <title>Sam Gildea - Developer/Designer</title>
    <div style={{ margin: `1rem auto`, maxWidth: `100%`, padding: `0 1rem` }}>
      <div className="fixed-header">
        <h1 className="links">sam gildea</h1>
        <ul>
          <li>
            <Link className="links link-btn" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="links link-btn" to="/">
              portfolio
            </Link>
          </li>
          <li>
            <Link className="links link-btn" to="/contact">
              contact
            </Link>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <hr />
      {children}
    </div>
  </>
)

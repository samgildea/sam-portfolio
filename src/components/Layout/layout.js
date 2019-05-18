import React from "react"

export default ({ children }) => (
  <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
    <h1>sam gildea</h1>
    <h2>developer/designer</h2>
    <ul>
        <li><a href="#">home</a></li>
        <li><a href="#">portfolio</a></li>
        <li><a href="#">contact</a></li>

    </ul>
    {children}
  </div>
)

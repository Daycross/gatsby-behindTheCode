import React from "react"
// const Layout = require("./src/components/layout")
import { ThemeProvider } from "styled-components"

import tema from "../src/styles/theme"

// Logs when the client route changes
// exports.onRouteUpdate = ({ location, prevLocation }) => {
//   console.log("new pathname", location.pathname)
//   console.log("old pathname", prevLocation ? prevLocation.pathname : null)
// }
// Wraps every page in a component
export function wrapRootElement({ element }) {
  return <ThemeProvider theme={tema}>{element}</ThemeProvider>
}

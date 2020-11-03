import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styles from "./layout.module.css"
import Header from "./header"

interface Props {
  children: React.ReactNode
}

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const Layout: React.FC<Props> = ({ children }) => {
  const data = useStaticQuery(query)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `My Blog`} />
      <div className={styles.container}>
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

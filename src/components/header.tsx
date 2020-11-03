import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styles from "./header.module.css"

interface Props {
  siteTitle: string
}

const Header: React.FC<Props> = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h2 className={styles.title}>
        <Link className={styles.link} to="/">
          {siteTitle}
        </Link>
      </h2>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

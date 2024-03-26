import Header from "../Header/Header"
import PropTypes from "prop-types"
import styles from "./Layout.module.css"

function Layout({ children, isLoggedIn }) {
  return (
    <div className={styles.layout}>
      <Header isLoggedIn={isLoggedIn} />
      {/* {isLoggedIn && <span>Hello</span>} */}
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
  isLoggedIn: PropTypes.bool,
}

export default Layout

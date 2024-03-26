import DashboardLink from "../DashboardLink/DashboardLink"
import styles from "./Header.module.css"
import PropTypes from "prop-types"

const links = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/contact",
    label: "Contact",
  },
]

function Header({ isLoggedIn }) {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          {links.map(link => (
            <li key={link.label}>
              <a href={link.path}>{link.label}</a>
            </li>
          ))}
          <li>
            <DashboardLink isLoggedIn={isLoggedIn} />
          </li>
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  isLoggedIn: PropTypes.bool,
}

export default Header

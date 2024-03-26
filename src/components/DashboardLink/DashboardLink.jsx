import PropTypes from "prop-types"

// get this data from the central point
function DashboardLink({ isLoggedIn }) {
  if (isLoggedIn) {
    return <a href="/dashboard">Dashboard</a>
  }

  return <a href="/signin">Sign in</a>
}

DashboardLink.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

export default DashboardLink

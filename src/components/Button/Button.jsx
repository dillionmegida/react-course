// import { useEffect } from "react"
import styles from "./Button.module.css"
import PropTypes from "prop-types"

function doSomething() {
  alert("my message")
  // console.log('triggered')
}

function Button({
  className,
  children,
  whenButtonIsClicked,
}) {
  // useEffect(() => {
  //   const button = document.getElementById("my-id")

  //   button.addEventListener("click", doSomething)
  // }, [])

  return (
    <button
      onClick={whenButtonIsClicked}
      // onClick={doSomething}
      className={`${styles.button} ${className}`}
    >
      → {children}
    </button>
  )
}

Button.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  whenButtonIsClicked: PropTypes.func.isRequired
}

export default Button

import styles from "./Button.module.css"

function Button({
  label = "default",
  id,
  whenButtonIsClicked: whenClicked,
  deeecode = 1000,
  children,
}) {
  if (whenClicked) {
    whenClicked()
  }

  // deeecode

  return (
    <button
      className={`${styles["my-button"]} bg-green}`}
      id={id}
    >
      {label}
    </button>
  )
}

// Button({})

export default Button

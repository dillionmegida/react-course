function Button({
  label = "default",
  id,
  whenButtonIsClicked: whenClicked,
  deeecode = 1000,
  children
}) {
  if (whenClicked) {
    whenClicked()
  }

  // deeecode

  return (
    <button id={id}>
      {/* {label}
      {deeecode} */}
      {children}
    </button>
  )
}

// Button({})

export default Button

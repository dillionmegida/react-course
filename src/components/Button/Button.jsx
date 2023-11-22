import styles from "./Button.module.css"

export default function Button({
  className,
  children,
}) {
  return (
    <button
      className={`${styles.button} ${className}`}
    >
      {children}
    </button>
  )
}
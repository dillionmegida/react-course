import styles from './Heading.module.css'

function Heading({ items }) {
  return (
    <div>
      <h2 className={`${styles.heading} bg-green`}>Hi</h2>
    </div>
  )
}

export default Heading

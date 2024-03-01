import styles from "./MemoExample.module.css"
import PropTypes from "prop-types"
import { useState, memo } from "react"
import { randomizeArr } from "../../helpers/array"

const colors = ["lightgreen", "#aaa", "yellow", "orange"]

const MemoizedMemoExample = memo(function MemoExample({
  showHeading,
  showPricingCards,
}) {
  // assume that this component does a lot of computation

  const [color, setColor] = useState(randomizeArr(colors)[0])

  console.log(
    `rendered, showHeading-${showHeading}, showPricingCards-${showPricingCards}`
  )

  return (
    <div
      style={{
        backgroundColor: color,
      }}
      className={styles.container}
    >
      <h2>Memo Example</h2>

      <p>
        {showHeading
          ? "The heading is displayed"
          : "The heading is not displayed"}
      </p>
      <p>
        {showPricingCards
          ? "The pricing cards are displayed"
          : "The pricing cards are not displayed"}
      </p>
      <button
        onClick={() => {
          setColor(randomizeArr(colors)[0])
        }}
      >
        Change Color
      </button>
    </div>
  )
})

MemoizedMemoExample.propTypes = {
  showHeading: PropTypes.bool.isRequired,
  showPricingCards: PropTypes.bool.isRequired,
}

export default MemoizedMemoExample
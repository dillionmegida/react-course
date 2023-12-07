import styles from "./PricingCard.module.css"
import Button from "../Button/Button"
import PropTypes from "prop-types"

function PricingCard({ card }) {
  const themeClasses = {
    "Start-Up": styles["card--startup"],
    Pro: styles["card--pro"],
    Enterprise: styles["card--enterprise"],
  }

  const {
    label,
    price,
    duration,
    image,
    imageAlt,
    benefits,
  } = card

  const themeClass = themeClasses[label]

  return (
    <div
      className={`${styles.card} ${themeClass}`}
    >
      <div
        className={`${styles.card__wrapper} center-vertical`}
      >
        <span className={styles.card__label}>
          {label}
        </span>
        <div className={styles.card__image}>
          <img src={image} alt={imageAlt} />
        </div>
        <div
          className={styles["card__price-label"]}
        >
          <span
            className={
              styles["card__price-figure"]
            }
          >
            {price}
          </span>
          {duration && (
            <span
              className={
                styles["card__price-duration"]
              }
            >
              {duration}
            </span>
          )}
        </div>
        <span
          className={
            styles["card__benefits-label"]
          }
        >
          Everything in Free, Plus
        </span>
        <ul className={styles.card__benefits}>
          {benefits.map(benefit => {
            return (
              <li
                key={benefit}
                className={`${styles.card__benefit} center-horizontal`}
              >
                <img
                  src="/icons/check.png"
                  alt=""
                  className={
                    styles["card__benefit-icon"]
                  }
                />
                {benefit}
              </li>
            )
          })}
        </ul>
        <Button className={styles.card__button}>
          Choose
        </Button>
      </div>
    </div>
  )
}

PricingCard.propTypes = {
  card: PropTypes.exact({
    label: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    duration: PropTypes.string,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
    benefits: PropTypes.arrayOf(PropTypes.string)
      .isRequired,
  }).isRequired,
}

export default PricingCard
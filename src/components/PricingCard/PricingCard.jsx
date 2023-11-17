import styles from "./PricingCard.module.css"

export default function PricingCard({
  label,
  price,
  duration = "",
  image,
  imageAlt,
  benefits
}) {
  return (
    <div className={styles.card}>
      <div className={`${styles.card__wrapper} center-vertical`}>
        <span className={styles.card__label}>{label}</span>
        <div className={styles.card__image}>
          <img src={image} alt={imageAlt} />
        </div>
        <div className={styles["card__price-label"]}>
          <span className={styles["card__price-figure"]}>
            {price}
          </span>
          <span className={styles["card__price-duration"]}>
            {duration}
          </span>
        </div>
        <span className={styles["card__benefits-label"]}>
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
                  className={styles["card__benefit-icon"]}
                />
                {benefit}
              </li>
            )
          })}
        </ul>
        <button className={styles.card__button}>Choose</button>
      </div>
    </div>
  )
}

import PricingCard from "./components/PricingCard/PricingCard"
import styles from "./App.module.css"
import { useState } from "react"

function App() {
  const [showPricingCards, setShowPricingCards] = useState(true)
  const [showHeading, setShowHeading] = useState(true)

  const updateShowPricingCards = () => {
    setShowPricingCards(!showPricingCards)
  }
  
  const updateShowHeading =() => {
    setShowHeading(!showHeading)
  }

  console.log("i am rendered")

  const cards = [
    {
      label: "Start-Up",
      price: "Free",
      image: "/images/bike.png",
      imageAlt: "Moving bicycle with clouds",
      benefits: [
        "Unlimited Downloads",
        "Email Support",
        "Limited Access",
      ],
    },
    {
      label: "Pro",
      price: "49$",
      duration: "/Year",
      image: "/images/car.png",
      imageAlt: "Moving car with clouds",
      benefits: [
        "Upto 10 Users",
        "Email Support, Call Support",
        "1 Year Access",
      ],
    },
    {
      label: "Enterprise",
      price: "99$",
      image: "/images/plane.png",
      imageAlt: "Flying plane with clouds",
      benefits: [
        "Unlimited Access",
        "On demand request",
        "Lifetime Access",
      ],
    },
  ]

  return (
    <main>
      <div className={styles.bg}>
        {showHeading && (
          <h1 className={styles.heading}>
            Choose your plan
          </h1>
        )}
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nulla maximus leo quam,
          nec feugiat metus tincidunt id.
        </p>
      </div>
      <button onClick={updateShowPricingCards}>
        Update Show Pricing Cards
      </button>
      <button onClick={updateShowHeading}>
        Update Show Heading
      </button>
      {showPricingCards && (
        <div
          className={`${styles.prices} container`}
        >
          {cards.map(card => {
            return (
              <PricingCard
                key={card.label}
                card={card}
              />
            )
          })}
        </div>
      )}
    </main>
  )
}

export default App

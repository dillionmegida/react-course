import PricingCards from "./components/PricingCards/PricingCards"
import styles from "./App.module.css"
import { useState, useMemo, useCallback } from "react"
import UseEffectExamples from "./components/UseEffectExamples/UseEffectExamples"
import MemoExample from "./components/MemoExample/MemoExample"
import ForwardRefExample from "./components/ForwardRefExample/ForwardRefExample"

function App() {
  const [showPricingCards, setShowPricingCards] = useState(true)
  const [showHeading, setShowHeading] = useState(true)
  const [showUseEffectComp, setShowUseEffectComp] =
    useState(true)
  const [selected, setSelected] = useState("pro")

  // setSelected()

  const updateStates = () => {
    // setShowPricingCards(!showPricingCards) // queue for next render
    // setShowHeading(!showHeading) // queue for next render
    setShowUseEffectComp(!showUseEffectComp)
  }

  const cards = useMemo(() => {
    return [
      {
        label: "Start-Up",
        selected: selected === "start-up",
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
        selected: selected === "pro",
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
        selected: selected === "enterprise",
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
  }, [selected])

  const onChangeColor = () => {
    console.log('color has changed')
    // console.log('selected card is ' + selected)
  }

  // {} !== {} - ref
  // ["deeecode"] !== ["deeecode"] - ref

  return (
    <main>
      <ForwardRefExample />
      {/* <MemoExample
        showPricingCards={showPricingCards}
        showHeading={showHeading}
        cards={cards}
        onChangeColor={onChangeColor}
      />
      <div className={styles.bg}>
        {showHeading && (
          <h1 className={styles.heading}>Choose your plan</h1>
        )}
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla maximus leo quam, nec feugiat metus
          tincidunt id.
        </p>
      </div>
      <div className={styles["update-buttons"]}>
        <button
          onClick={updateStates}
          className={styles["update-button"]}
        >
          Update States
        </button>
      </div>
      {showPricingCards && <PricingCards cards={cards} />}
      {showUseEffectComp && (
        <UseEffectExamples showHeading={showHeading} />
      )} */}
    </main>
  )
}

export default App

import PricingCard from "./components/PricingCard/PricingCard"
import styles from "./App.module.css"

// const arr = [1,2,3,4]
// const newArr = arr.filter(num => num !== 1)
// // [2,3,4]

function App() {
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
    <div className={styles.prices}>
      {/* {[
        { id: "hello", value: "Hello" },
        { id: "hi", value: "Hi how are you" },
        { id: "num1", value: 6 },
        { id: "num2", value: 9 },
      ].map(item => {
        return <p key={item.id}>{item.value}</p>
      })} */}
      {cards.map(card => {
        return (
          <PricingCard
            key={card.label}
            label={card.label}
            price={card.price}
            image={card.image}
            imageAlt={card.imageAlt}
            benefits={card.benefits}
          />
        )
      })}
    </div>
  )
}

export default App

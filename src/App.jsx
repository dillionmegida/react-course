import PricingCard from "./components/PricingCard/PricingCard"
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.prices}>
      <PricingCard
        label="Start-Up"
        price="Free"
        image="/images/bike.png"
        imageAlt="Moving bicycle with clouds"
      />
      <PricingCard
        label="Pro"
        price="49$"
        duration="/Year"
        image="/images/car.png"
        imageAlt="Moving car with clouds"
      />
      <PricingCard
        label="Enterprise"
        price="99$"
        image="/images/plane.png"
        imageAlt="Flying plane with clouds"
      />
    </div>
  )
}

export default App

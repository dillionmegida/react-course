import styles from "./PricingCards.module.css"
import PropTypes from "prop-types"
import PricingCard from "../PricingCard/PricingCard"
import { useState, Component } from "react"

const randomizeArr = array => {
  const cloned = [...array]
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[cloned[i], cloned[j]] = [cloned[j], cloned[i]]
  }

  return cloned
}

// function PricingCards({ cards }) {
//   const [randomCards, setRandomCards] = useState(
//     randomizeArr(cards)
//   )

//   const randomizeCards = () => {
//     setRandomCards(randomizeArr(randomCards))
//   }

//   return (
//     <div className={`${styles.prices} container`}>
//       <button
//         onClick={randomizeCards}
//         className={styles["randomize-btn"]}
//       >
//         ⚙
//       </button>
//       {randomCards.map(card => {
//         return <PricingCard key={card.label} card={card} />
//       })}
//     </div>
//   )
// }

class PricingCards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      randomCards: randomizeArr(this.props.cards),
    }
  }

  intervalId = null

  randomizeCards = () => {
    this.setState({
      randomCards: randomizeArr(this.state.randomCards),
    })
  }

  componentDidMount () {
    const myButton = document.getElementById('my-button')
    // console.log(myButton)
    console.log('i am born')
    // this.intervalId = setInterval(() => {
    //   console.log('hello hi hello')
    // }, 1000)
    console.log(this)
    this.setState({})
  }

  shouldComponentUpdate = () => {
    // check state
    return true
  }

  componentDidUpdate = () => {
    console.log("hey i updated")
  }

  componentWillUnmount = () => {
    console.log('i am leaving')
    clearInterval(this.intervalId)
  }

  render() {
    const { randomCards } = this.state

    return (
      <div className={`${styles.prices} container`}>
        <button
        id='my-button'
          onClick={this.randomizeCards}
          className={styles["randomize-btn"]}
        >
          ⚙
        </button>
        {randomCards.map(card => {
          return <PricingCard key={card.label} card={card} />
        })}
      </div>
    )
  }
}

PricingCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      duration: PropTypes.string,
      image: PropTypes.string.isRequired,
      imageAlt: PropTypes.string.isRequired,
      benefits: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired
  ).isRequired,
}

export default PricingCards

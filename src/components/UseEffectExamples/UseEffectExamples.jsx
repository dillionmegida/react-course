import { useEffect, useState } from "react"
import styles from "./UseEffectExamples.module.css"
import { randomizeArr } from "../../helpers/array"

const colors = ["#333", "brown", "purple"]

// function print(firstname) {
//   function sum(num1, num2) {
//     return num1 + num2
//   }

//   sum(10, 20)
//   console.log(firstname) // side effect, browser api
// }

export default function UseEffectExamples() {
  const [showBox, setShowBox] = useState(true)
  const [randomColor, setRandomColor] = useState(colors[0])
  const [data, setData] = useState(null)

  useEffect(() => {
    const btnElem = document.getElementById("my-btn")
    // console.log(btnElem)
  }, []) // on mount

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?randomColor=${randomColor}`
    )
      .then(response => response.json())
      .then(json => {
        setData(json)
        // console.log(json)
      })

    // cleaup function
  }, [randomColor]) // why?

  return (
    <section
      style={{
        backgroundColor: randomColor,
      }}
      className={styles.container}
    >
      <h1>useEffect Examples</h1>
      {showBox && <div className={styles.block}></div>}
      <button
        onClick={() => {
          setShowBox(!showBox)
        }}
        id="my-btn"
        className={styles.btn}
      >
        Toggle Box
      </button>
      <button
        onClick={() => {
          const randomColor = randomizeArr(colors)[0]
          setRandomColor(randomColor)
        }}
        id="my-btn"
        className={styles.btn}
      >
        Randomize Color
      </button>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </section>
  )
}

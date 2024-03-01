import { useEffect, useState, useRef } from "react"
import styles from "./UseEffectExamples.module.css"
import { randomizeArr } from "../../helpers/array"

const colors = ["#333", "brown", "purple"]

export default function UseEffectExamples() {
  const [showBox, setShowBox] = useState(true)
  const [randomColor, setRandomColor] = useState(colors[0])
  const [data, setData] = useState(null)
  const isMountedRef = useRef(false)
  const [count, setCount] = useState(0)
  const toggleBoxRef = useRef(null)

  useEffect(() => {
    if(isMountedRef.current) {
      // console.log('updated')
  
      fetch(
        `https://jsonplaceholder.typicode.com/todos?randomColor=${randomColor}`
      )
        .then(response => response.json())
        .then(json => {
          setData(json)
        })
    }
  }, [randomColor]) // why?

  useEffect(() => {
    // console.log('mounted')
    isMountedRef.current = true

    // console.log(toggleBoxRef.current.innerHTML)

    toggleBoxRef.current.addEventListener('click', () => {
      console.log('i was clicked')
    })
  }, []) // on mount

  const intervalRef = useRef(null)

  function startInterval() {
    intervalRef.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }

  function stopInterval() {
    clearInterval(intervalRef.current)
  }

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
        // onClick={() => {
        //   setShowBox(!showBox)
        // }}
        id="my-btn"
        ref={toggleBoxRef}
        className={styles.btn}
      >
        Toggle Box
      </button>
      <button
        onClick={() => {
          const randomColor = randomizeArr(colors)[0]
          setRandomColor(randomColor)
        }}
        className={styles.btn}
      >
        Randomize Color
      </button>
      <button
        onClick={startInterval}
        className={styles.btn}
      >
        Start Interval
      </button>
      <button
        onClick={stopInterval}
        className={styles.btn}
      >
        Stop Interval
      </button>
      <h2>{count}</h2>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </section>
  )
}

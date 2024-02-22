import { useState, useMemo, useEffect } from "react"
import { people } from "./demo"
import styles from "./FilterExample.module.css"

const colors = [
  "All",
  "Orange",
  "Purple",
  "Brown",
  "Red",
  "Pink",
  "Black",
]

export default function FilterExample() {
  const [activeColor, setActiveColor] = useState("All")
  const [showColor, setShowColor] = useState(true)
  const [showAge, setShowAge] = useState(true)

  // let arrayToRender = people

  const arrayToRender = useMemo(() => {
    if (activeColor === "All") return people

    return people.filter(person => {
      console.log("yes", activeColor)
      return (
        person.favoriteColor.toLowerCase() ===
        activeColor.toLowerCase()
      )
    })
  }, [activeColor])

  const info = useMemo(
    () => ({
      arrayLength: arrayToRender.length,
      showAge,
    }),
    [arrayToRender.length, showAge]
  )

  useEffect(() => {
    console.log("some effect")
  }, [info])

  return (
    <section className={styles.filter}>
      <h2>useMemo</h2>
      <div className={styles["colors"]}>
        {colors.map(color => (
          <button
            key={color}
            onClick={() => setActiveColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <button
        onClick={() => setShowColor(!showColor)}
        className={styles.toggle}
      >
        Toggle Show Color
      </button>
      &nbsp;&nbsp; &nbsp;{" "}
      <button
        onClick={() => setShowAge(!showAge)}
        className={styles.toggle}
      >
        Toggle Show Age
      </button>
      <div className={styles.people}>
        {arrayToRender.map((person, i) => (
          <div key={"person-" + i} className={styles.person}>
            <span className={styles["person-name"]}>
              {person.name}
            </span>
            {showColor && (
              <span className={styles["person-color"]}>
                {person.favoriteColor}
              </span>
            )}
            {showAge && (
              <span className={styles["person-color"]}>
                {person.age}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

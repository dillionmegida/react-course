import styles from "./App.module.css"
import Button from "./components/Button/Button"
import Heading from "./components/Heading/Heading"

function App() {
  function printDeeecode() {
    console.log("deeecode")
  }

  return (
    <div>
      <Button
        whenButtonIsClicked={printDeeecode}
        label="Click Me!"
        id="special" 
        deeecode={50}
      />
      <Button label="Submit" id="something-else">
            Closing something
        </Button>
      <h2 className={styles.heading}>Hello</h2>
      <Heading items={[1, 2, 3]} />
      <Button label="Hello!" id="how-are-you" />
      <Button />
      <Button label="Yoyo" />
      <h3>How are you</h3>
      <Heading items={["hello", "hi"]} />
      <Button>
        <p>Hello</p>
        <Heading />
      </Button>
    </div>
  )
}

export default App

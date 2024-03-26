import Layout from "./components/Layout/Layout"
import styles from "./App.module.css"

const isLoggedIn = false

function App() {
  return (
    <Layout isLoggedIn={isLoggedIn}>
      <div className="container">
        <main className={styles.main}>
          <h1>My wonderful homepage</h1>
          <p>Here is the cover of my React course</p>
          <img src="https://simplereact.dev/react-course.png" />
        </main>
      </div>
    </Layout>
  )
}

export default App

import { useRef, forwardRef } from "react"
import styles from "./ForwardRefExample.module.css"

function ForwardRefExample() {
  const videoRef = useRef(null)

  const onPlay = () => {
    if (videoRef.current) videoRef.current.play()
  }

  const onPause = () => {
    if (videoRef.current) videoRef.current.pause()
  }

  return (
    <section className={styles.section}>
      <CustomVideoWithRef ref={videoRef} src='./demo.mp4' muted={true} />
      {/* <video muted ref={videoRef} src="./demo.mp4" /> */}
      <div className={styles.actions}>
        <button onClick={onPlay} className={styles.play}>Play</button>
        <button onClick={onPause} className={styles.pause}>Pause</button>
      </div>  
    </section>
  )
}

function CustomVideo({muted, src}, ref) {
  return (
    <video muted={muted} src={src} ref={ref} />
  )
}

const CustomVideoWithRef = forwardRef(CustomVideo)

export default ForwardRefExample
